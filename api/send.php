<?php
// Mail handler for the Kontakt- and Anfrage-Formulare.
// Receives JSON (or form-encoded) POST data, validates it, and forwards it
// to the inbox below by email. No data is stored on the server.

header('Content-Type: application/json; charset=utf-8');

$recipient = 'anfrage@as-versorgung.de';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'method_not_allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Used for anything that ends up in a mail header (name, email, subject, …).
// CR/LF must be stripped there — left in, they'd let an attacker smuggle
// extra headers (e.g. Bcc:) into the mail() call via a form field.
function field(array $data, string $key): string {
    $value = trim(strip_tags((string)($data[$key] ?? '')));
    return str_replace(["\r", "\n"], '', $value);
}

// Used only for the free-text message body, where real newlines are
// expected and fine — this never touches a mail header.
function bodyField(array $data, string $key): string {
    return trim(strip_tags((string)($data[$key] ?? '')));
}

// Honeypot: a hidden field real users never fill in. If it has a value,
// silently report success without sending anything (looks normal to bots,
// avoids tipping them off to retry differently).
if (field($data, 'website') !== '') {
    echo json_encode(['success' => true]);
    exit;
}

$formType = field($data, 'form_type') === 'anfrage' ? 'anfrage' : 'kontakt';

$name = field($data, 'name');
if ($name === '') {
    $name = trim(field($data, 'vorname') . ' ' . field($data, 'nachname'));
}
$email = field($data, 'email');
$telefon = field($data, 'telefon');
$leistung = field($data, 'leistung');
$betreff = field($data, 'betreff');
$nachricht = bodyField($data, 'nachricht');

if ($name === '' || $email === '' || $nachricht === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'missing_fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'invalid_email']);
    exit;
}

$subject = ($formType === 'anfrage' ? 'Neue Anfrage' : 'Neue Kontaktnachricht')
    . ($betreff !== '' ? ': ' . $betreff : '')
    . ' – ' . $name;

$bodyLines = [
    'Neue Nachricht über das Formular auf der Website (' . $formType . ').',
    '',
    'Name: ' . $name,
    'E-Mail: ' . $email,
];
if ($telefon !== '') $bodyLines[] = 'Telefon: ' . $telefon;
if ($leistung !== '') $bodyLines[] = 'Gewünschte Leistung: ' . $leistung;
$bodyLines[] = '';
$bodyLines[] = 'Nachricht:';
$bodyLines[] = $nachricht;
$body = implode("\r\n", $bodyLines);

$headers = [
    'From: Website Formular <noreply@as-versorgung.de>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'mail_failed']);
}
