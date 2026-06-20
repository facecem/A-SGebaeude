import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Shield, Star, Eye, Users, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSeo } from "@/hooks/useSeo";

const values = [
  { Icon: Shield, title: "Zuverlässigkeit", desc: "Wir halten, was wir versprechen. Pünktlich, sauber und termingerecht." },
  { Icon: Star, title: "Qualität", desc: "Nur geprüfte Materialien, nach aktuellen Normen und Herstellervorgaben." },
  { Icon: Eye, title: "Transparenz", desc: "Kein Kleingedrucktes: klare Angebote, faire Preise, keine versteckten Kosten." },
  { Icon: Users, title: "Kundennähe", desc: "Direkte Ansprechpartner statt anonymer Hotline – persönlich und verbindlich." },
];

const team = [
  { initials: "AS", role: "Geschäftsführer", name: "Abdoul R. Shawisch" },
];

export default function Ueber() {
  useSeo({
    title: "Über uns – Ihr Gebäudetechnik-Fachbetrieb",
    description: "A&S Gebäudetechnik GmbH: gegründet 2024, Standorte in Herzogenrath und Köln. Eigene Monteure, persönliche Betreuung, moderne Lösungen für Heizung und Sanitär.",
    path: "/ueber",
  });
  const [, setLocation] = useLocation();
  const navigate = (href: string) => {
    setLocation(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { ref: introRef, visible: introVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: valuesRef, visible: valuesVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: teamRef, visible: teamVisible } = useScrollReveal<HTMLDivElement>();

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
            Unser Unternehmen
          </span>
          <h1 className="font-serif text-5xl text-white mb-4">Über uns</h1>
          <p className="text-white/70 font-light text-lg max-w-xl mx-auto">
            Qualität, Verlässlichkeit und Leidenschaft für Gebäudetechnik – das ist A&S.
          </p>
        </motion.div>
      </div>

      {/* INTRO */}
      <section ref={introRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={introVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -top-3 -left-3 bottom-3 right-3 border-3 border-[#e8621a] z-0" />
            <div className="overflow-hidden relative z-10">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80"
                alt="Team der A&S Gebäudetechnik GmbH – Fachbetrieb für Heizung und Sanitär"
                className="w-full h-[420px] object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={introVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block bg-[#e8621a] text-white px-6 py-5 text-center mb-8">
              <strong className="block font-serif text-5xl leading-none">2024</strong>
              <small className="text-xs uppercase tracking-wider opacity-80">Gegründet</small>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e8621a] mb-3 block">
              Unsere Geschichte
            </span>
            <h2 className="font-serif text-4xl text-[#1a3a5c] leading-tight mb-5">
              Jung. Regional. Verlässlich.
            </h2>
            <p className="text-[#4a5568] font-light leading-relaxed mb-4">
              Die A&S Gebäudetechnik GmbH wurde 2024 gegründet und ist beim Amtsgericht Aachen
              im Handelsregister eingetragen. Mit Standorten in Herzogenrath und Köln betreuen
              wir Kunden in Herzogenrath, Aachen, Würselen, Alsdorf, Baesweiler, Eschweiler und
              Stolberg sowie in den Regionen Düren, Heinsberg, Köln und Mönchengladbach.
            </p>
            <p className="text-[#4a5568] font-light leading-relaxed mb-8">
              Als junges Unternehmen setzen wir auf eigene Monteure statt Subunternehmer,
              kurze Wege und persönliche Betreuung – damit Sie immer einen direkten
              Ansprechpartner haben, statt einer anonymen Hotline.
            </p>
            <ul className="space-y-2 mb-8">
              {["Alles aus einer Hand", "Eigene Monteure – keine Subunternehmer", "Moderne, energieeffiziente Lösungen", "24/7 Notdienst"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#4a5568] text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#e8f0f9] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#e8621a]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/anfrage")}
              data-testid="button-ueber-anfrage"
              className="group inline-flex items-center gap-2 px-7 py-3 bg-[#e8621a] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#f07840] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#e8621a]/30"
            >
              Jetzt Kontakt aufnehmen <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section ref={valuesRef} className="bg-[#f5f6f8] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e8621a] mb-3 block">
              Was uns antreibt
            </span>
            <h2 className="font-serif text-4xl text-[#1a3a5c]">Unsere Werte</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="bg-white p-7 border-t-4 border-[#e8621a] hover:-translate-y-1 transition-transform duration-300"
                data-testid={`card-value-${title.toLowerCase()}`}
              >
                <Icon className="h-8 w-8 text-[#e8621a] mb-4" />
                <h4 className="font-serif text-lg text-[#1a3a5c] mb-2">{title}</h4>
                <p className="text-[#4a5568] text-sm font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section ref={teamRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={teamVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e8621a] mb-3 block">
              Unsere Mitarbeiter
            </span>
            <h2 className="font-serif text-4xl text-[#1a3a5c]">Das Team</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map(({ initials, role, name }, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={teamVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.12 }}
                className="text-center"
                data-testid={`card-team-${role.toLowerCase().replace(/\s|\//g, "-")}`}
              >
                <div className="w-24 h-24 rounded-full bg-[#1a3a5c] text-white font-serif text-3xl flex items-center justify-center mx-auto mb-4 border-4 border-[#e8621a] hover:scale-110 transition-transform duration-300">
                  {initials}
                </div>
                <h4 className="font-serif text-[#1a3a5c] text-lg mb-1">{name}</h4>
                <span className="text-[#718096] text-sm">{role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
