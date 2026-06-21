import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  Flame, Droplets, Thermometer, Leaf, Wind, AlertTriangle,
  Zap, Wrench, ClipboardList, MapPin, Phone, Mail,
  ChevronLeft, ChevronRight, ArrowRight
} from "lucide-react";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { useSeo } from "@/hooks/useSeo";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    tag: "Ihr Fachbetrieb für Gebäudetechnik",
    heading1: "Heizung.",
    heading2: "Sanitär.",
    accent: "Aus einer Hand.",
    sub: "Von der Wartung bis zur kompletten Neuanlage – wir sorgen dafür, dass Ihr Gebäude warm, sicher und effizient bleibt.",
  },
  {
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1400&q=80",
    tag: "Heizungsanlagen & Wartung",
    heading1: "Effizienz.",
    heading2: "Komfort.",
    accent: "Das ganze Jahr.",
    sub: "Moderne Heizungssysteme, hydraulischer Abgleich und jährliche Wartungsverträge für den sorgenfreien Betrieb.",
  },
  {
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80",
    tag: "24/7 Notdienst",
    heading1: "Schnell.",
    heading2: "Zuverlässig.",
    accent: "Immer für Sie da.",
    sub: "Heizungsausfall oder Rohrbruch? Unser Notdienst ist rund um die Uhr erreichbar – wir kommen sofort.",
  },
];

const services = [
  { Icon: Flame, title: "Heizungsanlagen", desc: "Wartung, Reparatur und Neuinstallation aller Heizungssysteme – Gas, Öl, Wärmepumpe, Solar.", cta: "Mehr erfahren", page: "/leistungen" },
  { Icon: Droplets, title: "Sanitär & Rohrleitungen", desc: "Badinstallationen, Rohrbrüche, Leckortung und Rohrerneuerung – schnell und fachgerecht.", cta: "Mehr erfahren", page: "/leistungen" },
  { Icon: Thermometer, title: "Heizungswartung", desc: "Jährliche Wartungsverträge für einen sicheren, effizienten und störungsfreien Betrieb.", cta: "Mehr erfahren", page: "/leistungen" },
  { Icon: Leaf, title: "Energieeffizienz", desc: "Hydraulischer Abgleich, Pumpentausch, Thermostate – sparen Sie Energie und Heizkosten.", cta: "Mehr erfahren", page: "/leistungen" },
  { Icon: Wind, title: "Lüftung & Klima", desc: "Lüftungsanlagen mit Wärmerückgewinnung, Klimatisierung und Trinkwassererwärmung.", cta: "Mehr erfahren", page: "/leistungen" },
  { Icon: AlertTriangle, title: "Notdienst 24/7", desc: "Heizungsausfall oder Rohrbruch? Wir sind auch außerhalb der Öffnungszeiten für Sie da.", cta: "Jetzt anrufen", page: "/anfrage" },
];

const usps = [
  { Icon: Zap, title: "Schnelle Reaktionszeit", sub: "Notfälle werden vorrangig behandelt" },
  { Icon: Wrench, title: "Eigene Monteure", sub: "Keine Subunternehmer – alles aus einer Hand" },
  { Icon: ClipboardList, title: "Festpreisangebot", sub: "Transparent & ohne Überraschungen" },
  { Icon: MapPin, title: "Regional & persönlich", sub: "Kein Call-Center – direkt zum Betrieb" },
];

function StatItem({ target, label, suffix = "", trigger }: { target: number; label: string; suffix?: string; trigger: boolean }) {
  const count = useCountUp(target, 1400, trigger);
  return (
    <div className="text-center sm:text-left">
      <strong className="block font-serif text-4xl text-white leading-none">
        {count}{suffix}
      </strong>
      <span className="text-xs uppercase tracking-widest text-white/50 mt-1 block">{label}</span>
    </div>
  );
}

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [, setLocation] = useLocation();
  const navigate = (href: string) => { setLocation(href); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const go = useCallback((next: number, direction: number) => {
    setDir(direction);
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(index + 1, 1), 5000);
    return () => clearInterval(id);
  }, [index, go]);

  const slide = slides[index];

  const imgVariants = {
    enter: (d: number) => ({ x: d * 50, opacity: 0, scale: 1.04 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d * -50, opacity: 0, scale: 0.98 }),
  };

  const textVariants = {
    enter: (d: number) => ({ y: d > 0 ? 28 : -28, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (d: number) => ({ y: d > 0 ? -18 : 18, opacity: 0 }),
  };

  const { ref: statsRef, visible: statsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d2139]">
      {/* Animated background */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={index}
          custom={dir}
          variants={imgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url('${slide.img}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c]/90 via-[#1a3a5c]/72 to-[#2d5986]/55" />
        </motion.div>
      </AnimatePresence>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Slide content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.div
            key={index}
            custom={dir}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#e8621a]/40 bg-[#e8621a]/15 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8621a] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
                {slide.tag}
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
              {slide.heading1}
              <span className="block">{slide.heading2}</span>
              <em className="not-italic text-[#f07840]">{slide.accent}</em>
            </h1>

            <p className="text-white/75 text-lg font-light leading-relaxed mb-10 max-w-xl">
              {slide.sub}
            </p>

            <div className="flex flex-wrap gap-3 mb-14">
              <button
                onClick={() => navigate("/anfrage")}
                data-testid="button-hero-anfrage"
                className="group px-8 py-3.5 bg-[#e8621a] hover:bg-[#f07840] text-white text-sm font-semibold uppercase tracking-wide transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e8621a]/40 flex items-center gap-2"
              >
                Jetzt Anfrage stellen
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/leistungen")}
                data-testid="button-hero-leistungen"
                className="px-8 py-3.5 border-2 border-white/50 text-white hover:bg-white/10 text-sm font-semibold uppercase tracking-wide transition-all duration-200 hover:-translate-y-1"
              >
                Unsere Leistungen
              </button>
            </div>

            <div
              ref={statsRef}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/15"
            >
              <StatItem target={2} suffix="" label="Standorte" trigger={statsVisible} />
              <div className="text-center sm:text-left">
                <strong className="block font-serif text-4xl text-white leading-none">Eigene</strong>
                <span className="text-xs uppercase tracking-widest text-white/50 mt-1 block">Monteure</span>
              </div>
              <div className="text-center sm:text-left">
                <strong className="block font-serif text-4xl text-white leading-none">24/7</strong>
                <span className="text-xs uppercase tracking-widest text-white/50 mt-1 block">Notdienst</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow controls */}
      <button
        onClick={() => go(index - 1, -1)}
        data-testid="button-hero-prev"
        aria-label="Zurück"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 border border-white/25 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-110 hover:border-[#e8621a]/60"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => go(index + 1, 1)}
        data-testid="button-hero-next"
        aria-label="Weiter"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 border border-white/25 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-110 hover:border-[#e8621a]/60"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > index ? 1 : -1)}
            aria-label={`Slide ${i + 1}`}
          >
            <span
              className={`block h-0.5 transition-all duration-400 ${
                i === index ? "w-8 bg-[#e8621a]" : "w-4 bg-white/40 hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-24 right-6 z-20 text-white/35 text-sm font-mono tabular-nums hidden sm:block">
        {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <motion.div
          key={index}
          className="h-full bg-[#e8621a]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

export default function Home() {
  useSeo({
    title: "Heizung, Sanitär & Wärmepumpen in Herzogenrath & Köln",
    description: "Ihr Fachbetrieb für Heizung, Sanitär und Wärmepumpen in Herzogenrath, Aachen, Köln und Umgebung. Eigene Monteure, 24/7-Notdienst, kostenlose Erstberatung.",
    path: "/",
  });
  const [, setLocation] = useLocation();
  const navigate = (href: string) => {
    setLocation(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { ref: introRef, visible: introVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: servicesRef, visible: servicesVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: ctaRef, visible: ctaVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="pt-24">
      <HeroCarousel />

      {/* USP STRIP */}
      <section className="bg-[#1a3a5c] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map(({ Icon, title, sub }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 border border-[#e8621a]/40 bg-[#e8621a]/15 flex items-center justify-center flex-shrink-0"
              >
                <Icon className="h-5 w-5 text-[#e8621a]" />
              </motion.div>
              <div>
                <strong className="block text-white text-sm font-semibold">{title}</strong>
                <span className="text-white/40 text-xs">{sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section ref={introRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={introVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative group hidden lg:block"
          >
            <div className="overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80"
                alt="Monteur der AS Gebäudetechnik GmbH bei der Wartung einer Heizungsanlage in Herzogenrath"
                className="w-full object-cover h-[480px] filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <motion.div
              whileHover={{ y: -4 }}
              className="absolute -bottom-6 -right-6 bg-[#e8621a] text-white px-8 py-6 text-center shadow-xl"
            >
              <strong className="block font-serif text-4xl leading-none">24/7</strong>
              <span className="text-xs uppercase tracking-wider opacity-80">Notdienst verfügbar</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={introVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e8621a] mb-3 block">
              Wer wir sind
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1a3a5c] leading-tight mb-5">
              Ihr zuverlässiger Partner für Heizung & Sanitär
            </h2>
            <p className="text-[#4a5568] font-light text-lg leading-relaxed mb-6">
              Mit Standorten in Herzogenrath und Köln sind wir Ihr Partner für Heizung, Sanitär und
              Gebäudetechnik – alles aus einer Hand, mit eigenen Monteuren statt Subunternehmern und
              persönlicher Betreuung statt Callcenter.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Alles aus einer Hand – von der Planung bis zur Wartung",
                "Eigene Monteure, keine Subunternehmer",
                "Schnelle Reaktionszeiten & persönliche Betreuung",
                "Moderne, energieeffiziente Lösungen",
                "Kostenlose Erstberatung & unverbindliches Angebot",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#4a5568] text-base">
                  <ChevronRight className="h-4 w-4 text-[#e8621a] flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/ueber")}
              data-testid="button-intro-mehr"
              className="group inline-flex items-center gap-2 px-7 py-3 border-2 border-[#1a3a5c] text-[#1a3a5c] text-sm font-semibold uppercase tracking-wide hover:bg-[#1a3a5c] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Mehr über uns
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} className="bg-[#f5f6f8] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e8621a] mb-3 block">
              Was wir bieten
            </span>
            <h2 className="font-serif text-4xl text-[#1a3a5c] mb-4">Unsere Leistungen</h2>
            <p className="text-[#4a5568] font-light text-lg">
              Kompetente Beratung und zuverlässige Ausführung – von der Wartung bis zur Neuanlage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ Icon, title, desc, cta, page }, i) => (
              <motion.button
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
                onClick={() => navigate(page)}
                data-testid={`card-service-${title.toLowerCase().replace(/\s|&/g, "-").replace(/-+/g, "-")}`}
                className="group bg-white p-8 text-left relative overflow-hidden transition-shadow cursor-pointer"
              >
                <span className="absolute top-0 left-0 right-0 h-1 bg-[#e2e6ea] group-hover:bg-[#e8621a] transition-colors duration-300" />
                <div className="mb-5">
                  <Icon className="h-9 w-9 text-[#e8621a]" />
                </div>
                <h3 className="font-serif text-xl text-[#1a3a5c] mb-3">{title}</h3>
                <p className="text-[#4a5568] text-sm leading-relaxed mb-6">{desc}</p>
                <span className="inline-flex items-center gap-2 text-[#e8621a] text-xs font-bold uppercase tracking-wide group-hover:gap-3 transition-all">
                  {cta} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="bg-gradient-to-br from-[#1a3a5c] to-[#2d5986] py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-4 block">
            Kostenlos & unverbindlich
          </span>
          <h2 className="font-serif text-4xl text-white mb-4">Bereit für Ihre Anfrage?</h2>
          <p className="text-white/60 font-light text-lg mb-8">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen – persönlich und kompetent.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => navigate("/anfrage")}
              data-testid="button-cta-anfrage"
              className="group px-8 py-3.5 bg-[#e8621a] hover:bg-[#f07840] text-white text-sm font-semibold uppercase tracking-wide transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e8621a]/40 flex items-center gap-2"
            >
              Anfrage stellen <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/kontakt")}
              data-testid="button-cta-kontakt"
              className="px-8 py-3.5 bg-white text-[#1a3a5c] hover:bg-[#e8f0f9] text-sm font-semibold uppercase tracking-wide transition-all duration-200 hover:-translate-y-1"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </motion.div>
      </section>

      {/* CONTACT BAR */}
      <section className="bg-[#e8621a] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap gap-6 items-start sm:items-center justify-between">
          {[
            { Icon: Phone, label: "+49 176 3044 75 14", sub: "Mo–Fr 07:30–17:00 Uhr" },
            { Icon: Mail, label: null, sub: "Antwort innerhalb 24h" },
            { Icon: MapPin, label: "Herzogenrath · Köln", sub: "Servicegebiet: Aachen, Düren, Heinsberg, Köln" },
          ].map(({ Icon, label, sub }, i) => (
            <div key={i} className="flex items-center gap-4 text-white">
              <Icon className="h-6 w-6 opacity-75 flex-shrink-0" />
              <div>
                {label ? (
                  <strong className="block text-sm font-bold">{label}</strong>
                ) : (
                  <ObfuscatedEmail user="anfrage" domain="as-versorgung.de" className="block text-sm font-bold" />
                )}
                <span className="text-xs opacity-70">{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
