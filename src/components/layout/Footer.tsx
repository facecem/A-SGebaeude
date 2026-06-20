import { useLocation } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const services = [
  "Heizungsanlagen",
  "Sanitär",
  "Heizungswartung",
  "Energieeffizienz",
  "Notdienst",
];

const company = [
  { label: "Über uns", href: "/ueber" },
  { label: "Anfrage stellen", href: "/anfrage" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  const [, setLocation] = useLocation();
  const navigate = (href: string) => {
    setLocation(href);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 50);
  };

  return (
    <footer className="bg-[#1a3a5c] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <img
              src={logoIcon}
              alt="AS Gebäudetechnik Logo"
              className="h-9 w-9"
            />
            <div className="font-serif text-xl font-bold">
              <span className="text-[#e8621a]">AS</span>{" "}
              <span className="text-white/50">Gebäudetechnik GmbH</span>
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/30 mb-4">
            Heizung · Sanitär · Gebäudetechnik
          </div>
          <p className="text-white/45 text-sm leading-relaxed">
            Ihr zuverlässiger Fachbetrieb für Heizung, Sanitär und Gebäudetechnik in Herzogenrath, Aachen, Köln und der Region.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest mb-5 text-white">
            Leistungen
          </h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <button
                  onClick={() => navigate("/leistungen")}
                  data-testid={`link-footer-service-${s.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-white/45 text-sm hover:text-[#f07840] transition-colors text-left"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest mb-5 text-white">
            Unternehmen
          </h4>
          <ul className="space-y-2">
            {company.map((c) => (
              <li key={c.href}>
                <button
                  onClick={() => navigate(c.href)}
                  data-testid={`link-footer-${c.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-white/45 text-sm hover:text-[#f07840] transition-colors text-left"
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest mb-5 text-white">
            Kontakt
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-white/45 text-sm">
              <Phone className="h-4 w-4 text-[#e8621a] mt-0.5 flex-shrink-0" />
              <span>+49 176 3044 75 14</span>
            </li>
            <li className="flex items-start gap-2 text-white/45 text-sm">
              <Mail className="h-4 w-4 text-[#e8621a] mt-0.5 flex-shrink-0" />
              <span>info@as-versorgung.de</span>
            </li>
            <li className="flex items-start gap-2 text-white/45 text-sm">
              <MapPin className="h-4 w-4 text-[#e8621a] mt-0.5 flex-shrink-0" />
              <span>Eurode-Park 1-4, 52134 Herzogenrath</span>
            </li>
            <li className="flex items-start gap-2 text-white/45 text-sm">
              <MapPin className="h-4 w-4 text-[#e8621a] mt-0.5 flex-shrink-0" />
              <span>Im Mediapark 8, 50670 Köln</span>
            </li>
            <li className="text-white/45 text-sm pl-6">Mo–Fr: 7.30–17 Uhr · Notdienst 24/7</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-white/30 text-xs">
          © 2025 AS Gebäudetechnik GmbH. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => navigate("/impressum")}
            data-testid="link-footer-impressum"
            className="text-white/35 text-xs hover:text-[#f07840] transition-colors"
          >
            Impressum
          </button>
          <button
            onClick={() => navigate("/datenschutz")}
            data-testid="link-footer-datenschutz"
            className="text-white/35 text-xs hover:text-[#f07840] transition-colors"
          >
            Datenschutz
          </button>
        </div>
      </div>
    </footer>
  );
}
