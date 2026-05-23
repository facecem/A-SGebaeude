import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  const [, setLocation] = useLocation();

  return (
    <div className="pt-24">
      <div className="max-w-3xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => { setLocation("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            data-testid="link-back-datenschutz"
            className="inline-flex items-center gap-2 text-[#e8621a] font-semibold text-sm uppercase tracking-wide mb-8 hover:text-[#f07840] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
          </button>

          <h1 className="font-serif text-4xl text-[#1a3a5c] mb-2">Datenschutzerklärung</h1>
          <div className="text-[#718096] border-b-2 border-[#e8621a] pb-6 mb-8 text-sm">
            Zuletzt aktualisiert: [Datum]
          </div>

          <div className="bg-[#fff8f5] border-l-4 border-[#e8621a] px-4 py-2 text-xs font-bold text-[#e8621a] mb-8">
            Diese Datenschutzerklärung ist ein Muster und muss von einem Rechtsanwalt geprüft und an
            Ihre spezifische Website angepasst werden.
          </div>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">1. Verantwortlicher</h2>
          <p className="text-[#4a5568] font-light text-sm leading-relaxed mb-3">
            Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist: A&S Gebäudetechnik
            GmbH, [Straße], [PLZ Stadt], info@as-gebaeudetechnik.de
          </p>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="text-[#4a5568] font-light text-sm leading-relaxed mb-3">
            Beim Besuch unserer Website werden automatisch Informationen in sogenannten
            Server-Log-Dateien gespeichert, die Ihr Browser übermittelt. Diese Daten sind nicht
            bestimmten Personen zuordenbar.
          </p>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">3. Kontaktformular</h2>
          <p className="text-[#4a5568] font-light text-sm leading-relaxed mb-3">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">4. Cookies</h2>
          <p className="text-[#4a5568] font-light text-sm leading-relaxed mb-3">
            Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im
            Internetbrowser gespeichert werden. Sie können die Speicherung von Cookies in Ihrem
            Browser deaktivieren.
          </p>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">5. Ihre Rechte</h2>
          <p className="text-[#4a5568] font-light text-sm leading-relaxed mb-3">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
            personenbezogenen Daten.
          </p>
          <ul className="list-disc list-inside text-[#4a5568] font-light text-sm space-y-1 mb-4 pl-2">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">6. Beschwerderecht</h2>
          <p className="text-[#4a5568] font-light text-sm leading-relaxed">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
            Ihrer personenbezogenen Daten zu beschweren.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
