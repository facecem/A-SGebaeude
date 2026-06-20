import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Flame } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const links = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Wärmepumpen", href: "/waermepumpen" },
  { label: "Über uns", href: "/ueber" },
  { label: "Anfrage", href: "/anfrage" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (href: string) => {
    setLocation(href);
    setMenuOpen(false);
    // Deferred + instant: on mobile the menu-close animation can swallow an
    // immediate smooth scroll, leaving the new page mid-scroll. Running it
    // after the close transition (and the route change) settles fixes that.
    setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 50);
  };

  return (
    <>
      {/* Single fixed wrapper — both bars flush together at the very top */}
      <motion.div
        ref={(el) => {
          if (el) setHeaderHeight(el.offsetHeight);
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Announcement bar */}
        <div className="bg-[#1a3a5c] py-1.5 text-center">
          <p className="text-xs text-white/80 flex items-center justify-center gap-2">
            <Flame className="h-3 w-3 text-[#e8621a]" />
            Telefonischer Notdienst 24/7 erreichbar:&nbsp;
            <a
              href="tel:+4917630447514"
              className="font-bold text-[#f07840] hover:text-white transition-colors"
              data-testid="link-notdienst-phone"
            >
              +49 176 3044 75 14
            </a>
          </p>
        </div>

        {/* Main navbar */}
        <nav
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/97 backdrop-blur-md shadow-lg shadow-[#1a3a5c]/10 border-b border-[#e8f0f9]"
              : "bg-white/92 backdrop-blur-sm"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2.5"
              data-testid="link-logo"
            >
              <img
                src={logoIcon}
                alt="A&S Gebäudetechnik Logo"
                className="h-10 w-10"
              />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold tracking-tight">
                  <span className="text-[#e8621a]">A&S</span>{" "}
                  <span className="text-[#1a3a5c]">Gebäudetechnik</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#718096] font-medium">
                  GmbH · Heizung & Sanitär
                </span>
              </span>
            </button>

            <ul className="hidden md:flex list-none gap-0">
              {links.map((link) => {
                const active =
                  link.href === "/"
                    ? location === "/"
                    : location.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => navigate(link.href)}
                      data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                      className={`relative px-4 h-16 text-xs font-semibold tracking-widest uppercase transition-colors group ${
                        active ? "text-[#1a3a5c]" : "text-[#4a5568] hover:text-[#1a3a5c]"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#e8621a] transition-transform duration-200 origin-left ${
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:flex items-center gap-1.5 text-sm font-bold text-[#1a3a5c]">
              <Phone className="h-4 w-4 text-[#e8621a]" />
              <a
                href="tel:+4917630447514"
                className="hover:text-[#e8621a] transition-colors"
                data-testid="link-nav-phone"
              >
                +49 176 3044 75 14
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#1a3a5c]"
              data-testid="button-menu-toggle"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile menu — drops directly below the fixed header */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed left-0 right-0 z-40 bg-white shadow-xl border-b-4 border-[#e8621a] flex flex-col"
            style={{ top: headerHeight || 92 }}
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-widest text-[#4a5568] hover:text-[#e8621a] border-t border-[#f5f6f8] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-6 py-4 bg-[#1a3a5c] flex items-center gap-2 text-white font-bold text-sm">
              <Phone className="h-4 w-4 text-[#e8621a]" />
              +49 176 3044 75 14 · Notdienst 24/7
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
