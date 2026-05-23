import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
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
            data-testid="link-back-home"
            className="inline-flex items-center gap-2 text-[#e8621a] font-semibold text-sm uppercase tracking-wide mb-8 hover:text-[#f07840] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
          </button>

          <h1 className="font-serif text-4xl text-[#1a3a5c] mb-2">Impressum</h1>
          <div className="text-[#718096] border-b-2 border-[#e8621a] pb-6 mb-8 text-sm">
            Angaben gemäß § 5 TMG
          </div>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">Unternehmensangaben</h2>
          <div className="bg-[#fff8f5] border-l-4 border-[#e8621a] px-4 py-2 text-xs font-bold text-[#e8621a] mb-3">
            Bitte ersetzen durch Ihre echten Unternehmensdaten
          </div>
          <p className="text-[#4a5568] font-light text-sm mb-2">A&S Gebäudetechnik GmbH</p>
          <p className="text-[#4a5568] font-light text-sm mb-2">[Straße und Hausnummer]</p>
          <p className="text-[#4a5568] font-light text-sm mb-2">[PLZ] [Stadt]</p>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">Kontakt</h2>
          <p className="text-[#4a5568] font-light text-sm mb-2">Telefon: +49 XXX XXXXXXX</p>
          <p className="text-[#4a5568] font-light text-sm mb-2">E-Mail: info@as-gebaeudetechnik.de</p>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">Handelsregister</h2>
          <div className="bg-[#fff8f5] border-l-4 border-[#e8621a] px-4 py-2 text-xs font-bold text-[#e8621a] mb-3">
            Pflichtangaben – bitte ergänzen
          </div>
          <p className="text-[#4a5568] font-light text-sm mb-2">Registergericht: [Amtsgericht ...]</p>
          <p className="text-[#4a5568] font-light text-sm mb-2">Registernummer: HRB [...]</p>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">Umsatzsteuer-ID</h2>
          <p className="text-[#4a5568] font-light text-sm mb-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE [...]
          </p>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">Verantwortlich für den Inhalt</h2>
          <p className="text-[#4a5568] font-light text-sm mb-2">[Vor- und Nachname des Verantwortlichen]</p>
          <p className="text-[#4a5568] font-light text-sm mb-2">[Anschrift wie oben]</p>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">Haftungsausschluss</h2>
          <p className="text-[#4a5568] font-light text-sm leading-relaxed mb-3">
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr
            übernehmen.
          </p>

          <h2 className="font-serif text-xl text-[#1a3a5c] mt-8 mb-3">Urheberrecht</h2>
          <p className="text-[#4a5568] font-light text-sm leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
            und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
