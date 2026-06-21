import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export default function Anfrage() {
  useSeo({
    title: "Anfrage stellen – Kostenlose Erstberatung",
    description: "Stellen Sie unverbindlich Ihre Anfrage für Heizung, Sanitär oder Wärmepumpe. Kostenlose Erstberatung, schnelle Rückmeldung.",
    path: "/anfrage",
  });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    vorname: "", nachname: "", email: "", telefon: "",
    leistung: "", betreff: "", nachricht: "", datenschutz: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            Kostenloses Angebot
          </span>
          <h1 className="font-serif text-5xl text-white mb-4">Anfrage stellen</h1>
          <p className="text-white/70 font-light text-lg max-w-xl mx-auto">
            Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen zurück.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">
        {/* SIDEBAR */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a3a5c] px-8 py-14"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-3 block">
            Kontaktdaten
          </span>
          <h2 className="font-serif text-3xl text-white mb-2">Wir sind für Sie da</h2>
          <p className="text-white/50 font-light text-sm mb-10">
            Rufen Sie uns an oder senden Sie uns eine Nachricht.
          </p>

          <div className="space-y-7">
            {[
              { Icon: Phone, label: "+49 176 3044 75 14", sub: "Mo–Fr 07:30–17:00 Uhr" },
              { Icon: Mail, label: null, sub: "Antwort innerhalb 24h" },
              { Icon: MapPin, label: "Herzogenrath · Köln", sub: "Servicegebiet: Aachen, Düren, Heinsberg, Köln, Mönchengladbach" },
              { Icon: Clock, label: "24/7 Notdienst", sub: "Heizungsausfall oder Rohrbruch?" },
            ].map(({ Icon, label, sub }, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#e8621a]/20 border border-[#e8621a]/30">
                  <Icon className="h-4 w-4 text-[#e8621a]" />
                </div>
                <div>
                  {label ? (
                    <strong className="block text-white text-sm font-semibold">{label}</strong>
                  ) : (
                    <ObfuscatedEmail user="anfrage" domain="as-versorgung.de" className="block text-white text-sm font-semibold" />
                  )}
                  <span className="text-white/45 text-xs">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.aside>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white px-8 lg:px-14 py-14"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <CheckCircle className="h-16 w-16 text-[#e8621a] mb-6" />
              <h3 className="font-serif text-3xl text-[#1a3a5c] mb-4">Vielen Dank!</h3>
              <p className="text-[#4a5568] font-light max-w-md">
                Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden
                persönlich bei Ihnen zurück.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} data-testid="form-anfrage">
              <h3 className="font-serif text-2xl text-[#1a3a5c] mb-8">Ihre Anfrage</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-[#718096]">
                    Vorname *
                  </label>
                  <input
                    required
                    value={form.vorname}
                    onChange={(e) => setForm({ ...form, vorname: e.target.value })}
                    data-testid="input-vorname"
                    className="border border-[#e2e6ea] px-4 py-3 text-sm outline-none focus:border-[#e8621a] transition-colors"
                    placeholder="Max"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-[#718096]">
                    Nachname *
                  </label>
                  <input
                    required
                    value={form.nachname}
                    onChange={(e) => setForm({ ...form, nachname: e.target.value })}
                    data-testid="input-nachname"
                    className="border border-[#e2e6ea] px-4 py-3 text-sm outline-none focus:border-[#e8621a] transition-colors"
                    placeholder="Mustermann"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-[#718096]">
                    E-Mail *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    data-testid="input-email"
                    className="border border-[#e2e6ea] px-4 py-3 text-sm outline-none focus:border-[#e8621a] transition-colors"
                    placeholder="max@beispiel.de"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-[#718096]">
                    Telefon
                  </label>
                  <input
                    value={form.telefon}
                    onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                    data-testid="input-telefon"
                    className="border border-[#e2e6ea] px-4 py-3 text-sm outline-none focus:border-[#e8621a] transition-colors"
                    placeholder="+49 ..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#718096]">
                  Gewünschte Leistung
                </label>
                <select
                  value={form.leistung}
                  onChange={(e) => setForm({ ...form, leistung: e.target.value })}
                  data-testid="select-leistung"
                  className="border border-[#e2e6ea] px-4 py-3 text-sm outline-none focus:border-[#e8621a] transition-colors bg-white"
                >
                  <option value="">Bitte wählen …</option>
                  <option value="heizungsanlage">Heizungsanlage</option>
                  <option value="sanitaer">Sanitär</option>
                  <option value="wartung">Wartung</option>
                  <option value="energieeffizienz">Energieeffizienz</option>
                  <option value="lueftung-klima">Lüftung / Klima</option>
                  <option value="notdienst">Notdienst</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#718096]">
                  Betreff
                </label>
                <input
                  value={form.betreff}
                  onChange={(e) => setForm({ ...form, betreff: e.target.value })}
                  data-testid="input-betreff"
                  className="border border-[#e2e6ea] px-4 py-3 text-sm outline-none focus:border-[#e8621a] transition-colors"
                  placeholder="Kurze Zusammenfassung Ihres Anliegens"
                />
              </div>

              <div className="flex flex-col gap-1.5 mb-7">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#718096]">
                  Nachricht *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.nachricht}
                  onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
                  data-testid="textarea-nachricht"
                  className="border border-[#e2e6ea] px-4 py-3 text-sm outline-none focus:border-[#e8621a] transition-colors resize-y"
                  placeholder="Beschreiben Sie Ihr Anliegen ..."
                />
              </div>

              <div className="flex items-start gap-3 mb-7">
                <input
                  type="checkbox"
                  required
                  checked={form.datenschutz}
                  onChange={(e) => setForm({ ...form, datenschutz: e.target.checked })}
                  data-testid="checkbox-datenschutz"
                  className="mt-1 accent-[#e8621a]"
                />
                <span className="text-xs text-[#718096]">
                  Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                  <a href="/datenschutz" className="text-[#e8621a] hover:underline">
                    Datenschutzerklärung
                  </a>{" "}
                  zu. *
                </span>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-xs text-[#718096]">* Pflichtfelder</span>
                <button
                  type="submit"
                  data-testid="button-submit-anfrage"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#e8621a] hover:bg-[#f07840] text-white text-sm font-semibold uppercase tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#e8621a]/30"
                >
                  Anfrage senden <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
