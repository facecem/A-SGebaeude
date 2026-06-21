import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, AlertTriangle, Send, CheckCircle } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const hours = [
  { day: "Montag–Freitag", time: "07:30 – 17:00 Uhr" },
  { day: "Wochenende / Feiertag", time: "Notdienst 24/7" },
];

export default function Kontakt() {
  useSeo({
    title: "Kontakt – Herzogenrath & Köln",
    description: "Kontaktieren Sie AS Gebäudetechnik GmbH: Telefon, E-Mail oder Kontaktformular. Standorte in Herzogenrath und Köln, 24/7-Notdienst.",
    path: "/kontakt",
  });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", nachricht: "" });

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
            Wir freuen uns auf Sie
          </span>
          <h1 className="font-serif text-5xl text-white mb-4">Kontakt</h1>
          <p className="text-white/70 font-light text-lg max-w-xl mx-auto">
            Sprechen Sie uns direkt an – wir sind für Sie da.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT: Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {[
            { Icon: Phone, label: "+49 176 3044 75 14", sub: "Direkter Anruf", href: "tel:+4917630447514", isEmail: false },
            { Icon: Mail, label: null, sub: "E-Mail senden", href: "#", isEmail: true },
            { Icon: MapPin, label: "Eurode-Park 1-4, 52134 Herzogenrath", sub: "Standort Herzogenrath", href: "#", isEmail: false },
            { Icon: MapPin, label: "Im Mediapark 8, 50670 Köln", sub: "Standort Köln", href: "#", isEmail: false },
          ].map(({ Icon, label, sub, href, isEmail }, i) => {
            const inner = (
              <>
                <div className="w-12 h-12 bg-[#e8f0f9] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8621a] transition-colors duration-300">
                  <Icon className="h-5 w-5 text-[#1a3a5c] group-hover:text-white transition-colors" />
                </div>
                <div>
                  {isEmail ? (
                    <ObfuscatedEmail user="anfrage" domain="as-versorgung.de" className="block text-[#1a3a5c] text-base group-hover:text-[#e8621a] transition-colors font-bold" />
                  ) : (
                    <strong className="block text-[#1a3a5c] text-base group-hover:text-[#e8621a] transition-colors">
                      {label}
                    </strong>
                  )}
                  <span className="text-[#718096] text-sm">{sub}</span>
                </div>
              </>
            );
            return isEmail ? (
              <div key={i} data-testid={`link-kontakt-${sub.toLowerCase().replace(/\s/g, "-")}`} className="flex gap-5 items-start group">
                {inner}
              </div>
            ) : (
              <a
                key={i}
                href={href}
                data-testid={`link-kontakt-${sub.toLowerCase().replace(/\s/g, "-")}`}
                className="flex gap-5 items-start group"
              >
                {inner}
              </a>
            );
          })}

          {/* Opening hours */}
          <div className="bg-[#f5f6f8] p-6 mt-4">
            <div className="flex items-center gap-2 mb-5">
              <Clock className="h-4 w-4 text-[#e8621a]" />
              <h4 className="font-serif text-lg text-[#1a3a5c]">Öffnungszeiten</h4>
            </div>
            <div className="divide-y divide-[#e2e6ea]">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex justify-between py-2.5 text-sm">
                  <span className="text-[#4a5568]">{day}</span>
                  <span className="font-semibold text-[#1a3a5c]">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notdienst card */}
          <div className="bg-[#1a3a5c] p-6 flex items-center gap-5">
            <AlertTriangle className="h-8 w-8 text-[#e8621a] flex-shrink-0" />
            <div>
              <strong className="block text-white text-base mb-1">24/7 Notdienst</strong>
              <a
                href="tel:+4917630447514"
                className="text-[#f07840] font-bold text-lg hover:text-white transition-colors"
                data-testid="link-kontakt-notdienst"
              >
                +49 176 3044 75 14
              </a>
            </div>
          </div>

          {/* Maps */}
          <div className="space-y-3">
            <div className="overflow-hidden border border-[#e2e6ea]" data-testid="map-herzogenrath">
              <iframe
                title="Karte: Standort Herzogenrath"
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.0867%2C50.8694%2C6.1067%2C50.8794&layer=mapnik&marker=50.8744%2C6.0967"
                className="w-full h-44 border-0"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden border border-[#e2e6ea]" data-testid="map-koeln">
              <iframe
                title="Karte: Standort Köln"
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.9418%2C50.9576%2C6.9618%2C50.9676&layer=mapnik&marker=50.9626%2C6.9518"
                className="w-full h-44 border-0"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-[#e8f0f9] p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-16"
            >
              <CheckCircle className="h-14 w-14 text-[#e8621a] mb-5" />
              <h3 className="font-serif text-2xl text-[#1a3a5c] mb-3">Nachricht gesendet!</h3>
              <p className="text-[#4a5568] font-light text-sm max-w-sm">
                Vielen Dank. Wir melden uns so schnell wie möglich bei Ihnen.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              data-testid="form-kontakt"
              className="space-y-5"
            >
              <h3 className="font-serif text-2xl text-[#1a3a5c] mb-6">Schreiben Sie uns</h3>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#718096]">Name *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  data-testid="input-kontakt-name"
                  className="border border-[#e2e6ea] px-4 py-3 text-sm outline-none focus:border-[#e8621a] transition-colors"
                  placeholder="Max Mustermann"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#718096]">E-Mail *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  data-testid="input-kontakt-email"
                  className="border border-[#e2e6ea] px-4 py-3 text-sm outline-none focus:border-[#e8621a] transition-colors"
                  placeholder="max@beispiel.de"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#718096]">Nachricht *</label>
                <textarea
                  required
                  rows={6}
                  value={form.nachricht}
                  onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
                  data-testid="textarea-kontakt-nachricht"
                  className="border border-[#e2e6ea] px-4 py-3 text-sm outline-none focus:border-[#e8621a] transition-colors resize-y"
                  placeholder="Wie können wir Ihnen helfen?"
                />
              </div>
              <button
                type="submit"
                data-testid="button-submit-kontakt"
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#e8621a] hover:bg-[#f07840] text-white text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:shadow-[#e8621a]/30"
              >
                Senden <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
