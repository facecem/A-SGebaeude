import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Flame, Droplets, Thermometer, Leaf, Wind, AlertTriangle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    Icon: Flame,
    id: "heizung",
    title: "Heizungsanlagen",
    category: "Heizung",
    desc1: "Wir installieren, warten und reparieren alle gängigen Heizungssysteme. Ob veraltete Gasheizung, moderne Wärmepumpe oder Solarthermie – wir finden die passende Lösung für Ihr Gebäude.",
    desc2: "[Weitere Details zu Ihrem Angebot, z.B. Marken oder Besonderheiten.]",
    tags: ["Gasheizung", "Ölheizung", "Wärmepumpe", "Solarthermie", "Pellets"],
  },
  {
    Icon: Droplets,
    id: "sanitaer",
    title: "Sanitär & Rohrleitungen",
    category: "Sanitär",
    desc1: "Komplette Badezimmerinstallationen, Rohrerneuerung, Leckortung und Druckprüfung. Wir arbeiten sauber, schnell und hinterlassen keine Baustellen.",
    desc2: "",
    tags: ["Badsanierung", "Rohrbruch", "Leckortung", "Leitungsbau"],
  },
  {
    Icon: Thermometer,
    id: "wartung",
    title: "Heizungswartung & Wartungsverträge",
    category: "Wartung",
    desc1: "Regelmäßige Wartung verlängert die Lebensdauer Ihrer Anlage, sichert den effizienten Betrieb und senkt langfristig Ihre Energiekosten. Mit einem Wartungsvertrag sind Sie bestens abgesichert.",
    desc2: "",
    tags: ["Jahreswartung", "TÜV-konform", "Wartungsvertrag", "Heizungscheck"],
  },
  {
    Icon: Leaf,
    id: "energie",
    title: "Energieeffizienz",
    category: "Energie",
    desc1: "Durch gezielte Optimierung Ihrer Anlage lassen sich erhebliche Einsparungen erzielen. Hydraulischer Abgleich, Pumpentausch und moderne Thermostate reduzieren Ihren Verbrauch spürbar.",
    desc2: "",
    tags: ["Hydraulischer Abgleich", "Pumpentausch", "Thermostat", "EnEV"],
  },
  {
    Icon: Wind,
    id: "lueftung",
    title: "Lüftung & Klima",
    category: "Lüftung",
    desc1: "Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung sorgt für frische Luft bei minimalem Energieverlust. Wir planen, installieren und warten Ihre Lüftungsanlage.",
    desc2: "",
    tags: ["Lüftungsanlage", "Wärmerückgewinnung", "Klimaanlage", "Trinkwasser"],
  },
  {
    Icon: AlertTriangle,
    id: "notdienst",
    title: "Notdienst 24/7",
    category: "Notdienst",
    desc1: "Heizungsausfall mitten im Winter oder Rohrbruch am Wochenende? Unser Notdienst ist rund um die Uhr für Sie erreichbar. Wir reagieren schnell und lösen das Problem.",
    desc2: "",
    tags: ["24/7-Notdienst", "Heizungsausfall", "Rohrbruch", "Soforteinsatz"],
  },
];

function ServiceSection({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="border-b border-[#e8f0f9] last:border-none py-14"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">
        <div className="bg-[#f5f6f8] p-10 flex flex-col items-center text-center">
          <service.Icon className="h-12 w-12 text-[#e8621a] mb-4" />
          <span className="font-serif text-lg text-[#1a3a5c]">{service.category}</span>
        </div>
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a3a5c] mb-4">{service.title}</h2>
          <p className="text-[#4a5568] font-light leading-relaxed mb-3">{service.desc1}</p>
          {service.desc2 && (
            <p className="text-[#4a5568] font-light leading-relaxed mb-4">{service.desc2}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#e8f0f9] text-[#1a3a5c] px-3 py-1 text-xs font-semibold tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Leistungen() {
  const [, setLocation] = useLocation();
  const navigate = (href: string) => {
    setLocation(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-24">
      {/* PAGE HEADER */}
      <div className="relative overflow-hidden py-20 px-6 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c]/92 to-[#2d5986]/85" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-white/60 mb-4 block">
            Was wir anbieten
          </span>
          <h1 className="font-serif text-5xl text-white mb-4">Unsere Leistungen</h1>
          <p className="text-white/70 font-light text-lg max-w-xl mx-auto">
            Von der einfachen Wartung bis zur kompletten Neuanlage – verlässlich, sauber, zum Festpreis.
          </p>
        </motion.div>
      </div>

      {/* SERVICES */}
      <div className="max-w-5xl mx-auto px-6 py-6">
        {services.map((service, i) => (
          <ServiceSection key={service.id} service={service} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#1a3a5c] to-[#2d5986] py-16 px-6 text-center">
        <h2 className="font-serif text-3xl text-white mb-4">Interesse? Wir beraten Sie gern.</h2>
        <p className="text-white/60 mb-8">Kostenlos, persönlich und unverbindlich.</p>
        <button
          onClick={() => navigate("/anfrage")}
          data-testid="button-leistungen-cta"
          className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#e8621a] hover:bg-[#f07840] text-white text-sm font-semibold uppercase tracking-wide transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e8621a]/40"
        >
          Anfrage stellen <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
