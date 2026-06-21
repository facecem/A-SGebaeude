export interface FormSubmitResult {
  success: boolean;
  error?: string;
}

/**
 * Posts form data to the PHP mail handler at /api/send.php (see public/api/send.php).
 * That endpoint only exists once the build is deployed to a PHP-capable host
 * (netcup) — on the GitHub Pages / standalone exports the request will fail,
 * which callers surface as a normal error state.
 */
export async function submitForm(payload: Record<string, unknown>): Promise<FormSubmitResult> {
  try {
    const res = await fetch("/api/send.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.success) {
      return { success: false, error: data?.error ?? "request_failed" };
    }
    return { success: true };
  } catch {
    return { success: false, error: "network" };
  }
}
