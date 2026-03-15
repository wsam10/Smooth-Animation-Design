import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B3B8A] to-[#8E6BC4] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div>
            <div className={`font-bold text-lg leading-tight transition-colors ${scrolled ? "text-[#5B3B8A]" : "text-white"}`}>
              NABEL
            </div>
            <div className={`text-xs leading-tight transition-colors ${scrolled ? "text-gray-500" : "text-purple-200"}`}>
              Industrial Windows
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
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
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5B3B8A] to-[#8E6BC4] text-white text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium hover:text-[#5B3B8A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5B3B8A] to-[#8E6BC4] text-white text-center font-semibold"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
