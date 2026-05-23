import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const accepted = localStorage.getItem("as-cookies");
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (type: "all" | "essential") => {
    localStorage.setItem("as-cookies", type);
    setVisible(false);
  };

  const navigate = (href: string) => {
    setLocation(href);
    setVisible(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 z-[9999] flex items-end justify-center"
        >
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="bg-white max-w-3xl w-full mx-4 mb-4 p-8 border-t-4 border-[#e8621a] shadow-2xl rounded-sm"
          >
            <div className="flex items-start gap-3 mb-3">
              <Cookie className="h-5 w-5 text-[#e8621a] flex-shrink-0 mt-0.5" />
              <h3 className="font-bold text-[#1a3a5c] text-base">
                Diese Website verwendet Cookies
              </h3>
            </div>
            <p className="text-sm text-[#4a5568] leading-relaxed mb-5">
              Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. Technisch
              notwendige Cookies sind immer aktiv. Mit Klick auf „Alle akzeptieren" stimmen Sie auch
              der Nutzung optionaler Cookies zu. Mehr erfahren Sie in unserer{" "}
              <button
                onClick={() => navigate("/datenschutz")}
                className="text-[#e8621a] hover:underline font-medium"
                data-testid="link-cookie-datenschutz"
              >
                Datenschutzerklärung
              </button>
              .
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => accept("all")}
                data-testid="button-cookie-accept-all"
                className="px-6 py-2.5 bg-[#e8621a] hover:bg-[#f07840] text-white text-sm font-semibold uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#e8621a]/30"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={() => accept("essential")}
                data-testid="button-cookie-essential"
                className="px-6 py-2.5 border-2 border-[#e2e6ea] hover:border-[#1a3a5c] text-[#4a5568] hover:text-[#1a3a5c] text-sm font-semibold uppercase tracking-wide transition-colors"
              >
                Nur notwendige
              </button>
              <button
                onClick={() => navigate("/datenschutz")}
                data-testid="link-cookie-more-datenschutz"
                className="text-xs text-[#718096] hover:text-[#e8621a] underline transition-colors"
              >
                Datenschutz
              </button>
              <button
                onClick={() => navigate("/impressum")}
                data-testid="link-cookie-impressum"
                className="text-xs text-[#718096] hover:text-[#e8621a] underline transition-colors"
              >
                Impressum
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
