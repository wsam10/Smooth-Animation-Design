import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const { t, toggle, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t("nav.home"),     href: "#hero" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.gallery"),  href: "#gallery" },
    { label: t("nav.clients"),  href: "#clients" },
    { label: t("nav.contact"),  href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      {/* Desktop — 3-column grid */}
      <div className="max-w-7xl mx-auto px-6 hidden md:grid grid-cols-3 items-center">
        {/* LEFT — Logo */}
        <a href="#hero" className="flex items-center justify-self-start">
          <img
            src={lang === "en" ? "/nabel-logo-en.png" : "/nabel-logo.png"}
            alt="NABEL"
            className={`h-11 w-auto object-contain transition-all duration-300 hover:scale-105 ${
              scrolled ? "" : "brightness-200"
            }`}
          />
        </a>

        {/* CENTER — Nav links */}
        <div className="flex items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 hover:text-[#8E6BC4] relative group ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8E6BC4] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* RIGHT — Language toggle + CTA */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={toggle}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              scrolled
                ? "border-[#5B3B8A]/30 text-[#5B3B8A] hover:bg-purple-50"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <Globe size={15} />
            <span>{lang === "en" ? "عربي" : "EN"}</span>
          </button>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5B3B8A] to-[#8E6BC4] text-white text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {t("nav.quote")}
          </a>
        </div>
      </div>

      {/* Mobile — logo one side, lang + hamburger other side */}
      <div className="md:hidden flex items-center justify-between px-5">
        {/* Logo */}
        <a href="#hero">
          <img
            src={lang === "en" ? "/nabel-logo-en.png" : "/nabel-logo.png"}
            alt="NABEL"
            className={`h-10 w-auto object-contain transition-all duration-300 ${
              scrolled ? "" : "brightness-200"
            }`}
          />
        </a>

        {/* Right side: lang toggle + hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
              scrolled
                ? "border-[#5B3B8A]/30 text-[#5B3B8A]"
                : "border-white/30 text-white"
            }`}
          >
            <Globe size={13} />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium hover:text-[#5B3B8A] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#5B3B8A] to-[#8E6BC4] text-white text-center font-semibold"
            >
              {t("nav.quote")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
