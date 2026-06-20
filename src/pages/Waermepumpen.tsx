import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Snowflake, Leaf, Wallet, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSeo } from "@/hooks/useSeo";

const benefits = [
  {
    Icon: Leaf,
    title: "Energieeffizient",
    desc: "Wärmepumpen nutzen Umweltwärme aus Luft oder Erdreich und reduzieren so den Verbrauch fossiler Energieträger deutlich.",
  },
  {
    Icon: Wallet,
    title: "Fördermöglichkeiten",
    desc: "Für den Einbau einer Wärmepumpe gibt es staatliche Förderprogramme (z. B. über die BAFA). Wir beraten Sie gerne zu den aktuell für Sie passenden Möglichkeiten.",
  },
  {
    Icon: Wrench,
    title: "Eigene Monteure",
    desc: "Planung, Installation und Inbetriebnahme erfolgen durch unsere eigenen Monteure – ohne Subunternehmer, alles aus einer Hand.",
  },
];

const brands = ["Vaillant", "Viessmann", "Buderus", "Bosch", "Stiebel Eltron"];

const types = [
  {
    title: "Luft-Wasser-Wärmepumpe",
    desc: "Die unkomplizierteste Lösung für Neubau und Sanierung – nutzt die Außenluft als Wärmequelle, geringer Erschließungsaufwand.",
  },
  {
    title: "Erdwärmepumpe (Sole-Wasser)",
    desc: "Nutzt die konstante Temperatur im Erdreich über Erdsonden oder Flächenkollektoren – besonders effizient im Jahresverlauf.",
  },
];

export default function Waermepumpen() {
  useSeo({
    title: "Wärmepumpen – Beratung, Planung & Installation",
    description: "Wärmepumpen von Vaillant, Viessmann, Buderus, Bosch und Stiebel Eltron – Beratung, Planung und Installation durch eigene Monteure in Herzogenrath, Aachen und Köln.",
    path: "/waermepumpen",
  });
  const [, setLocation] = useLocation();
  const navigate = (href: string) => {
    setLocation(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { ref: introRef, visible: introVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: benefitsRef, visible: benefitsVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: typesRef, visible: typesVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: brandsRef, visible: brandsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="pt-24">
      {/* PAGE HEADER */}
      <div className="relative overflow-hidden py-20 px-6 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1400&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c]/92 to-[#2d5986]/85" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-white/60 mb-4 block">
            Zukunftssichere Heiztechnik
          </span>
          <h1 className="font-serif text-5xl text-white mb-4">Wärmepumpen</h1>
          <p className="text-white/70 font-light text-lg max-w-xl mx-auto">
            Beratung, Planung und Installation aus einer Hand – mit Markengeräten führender Hersteller.
          </p>
        </motion.div>
      </div>

      {/* INTRO */}
      <section ref={introRef} className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={introVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Snowflake className="h-10 w-10 text-[#e8621a] mx-auto mb-5" />
            <h2 className="font-serif text-3xl text-[#1a3a5c] mb-5">
              Die Heizung der Zukunft
            </h2>
            <p className="text-[#4a5568] font-light leading-relaxed">
              Ob Neubau oder Sanierung im Bestand: Wärmepumpen sind eine effiziente und
              zukunftssichere Alternative zu Gas- und Ölheizungen. Wir beraten Sie persönlich,
              prüfen die Gegebenheiten vor Ort und übernehmen Planung, Installation und
              Inbetriebnahme – mit unseren eigenen Monteuren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section ref={benefitsRef} className="bg-[#f5f6f8] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={benefitsVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e8621a] mb-3 block">
              Ihre Vorteile
            </span>
            <h2 className="font-serif text-4xl text-[#1a3a5c]">Warum eine Wärmepumpe?</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {benefits.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="bg-white p-7 border-t-4 border-[#e8621a]"
              >
                <Icon className="h-8 w-8 text-[#e8621a] mb-4" />
                <h4 className="font-serif text-lg text-[#1a3a5c] mb-2">{title}</h4>
                <p className="text-[#4a5568] text-sm font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section ref={typesRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={typesVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e8621a] mb-3 block">
              Welcher Typ passt zu Ihnen?
            </span>
            <h2 className="font-serif text-4xl text-[#1a3a5c]">Wärmepumpen-Arten</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {types.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={typesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="bg-[#f5f6f8] p-8"
              >
                <CheckCircle2 className="h-6 w-6 text-[#e8621a] mb-3" />
                <h4 className="font-serif text-xl text-[#1a3a5c] mb-2">{title}</h4>
                <p className="text-[#4a5568] text-sm font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section ref={brandsRef} className="bg-[#f5f6f8] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={brandsVisible ? { opacity: 1, y: 0 } : {}}
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e8621a] mb-3 block">
              Markenqualität
            </span>
            <h2 className="font-serif text-4xl text-[#1a3a5c] mb-8">
              Wir setzen auf bekannte Hersteller
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="bg-white border border-[#e2e6ea] text-[#1a3a5c] px-6 py-3 text-sm font-semibold tracking-wide"
                  data-testid={`badge-brand-${brand.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#1a3a5c] to-[#2d5986] py-16 px-6 text-center">
        <h2 className="font-serif text-3xl text-white mb-4">
          Interesse an einer Wärmepumpe?
        </h2>
        <p className="text-white/60 mb-8">
          Wir beraten Sie kostenlos und unverbindlich zu den Möglichkeiten für Ihr Gebäude.
        </p>
        <button
          onClick={() => navigate("/anfrage")}
          data-testid="button-waermepumpen-cta"
          className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#e8621a] hover:bg-[#f07840] text-white text-sm font-semibold uppercase tracking-wide transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e8621a]/40"
        >
          Anfrage stellen <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
