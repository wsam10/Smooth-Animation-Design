import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const serviceLinks = [
  "UPVC Windows",
  "UPVC Doors",
  "Glass Facades",
  "Aluminum Systems",
  "Cladding",
  "Structural Glass",
];

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1E1040] via-[#2D1B55] to-[#1E1040] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B3B8A] to-[#8E6BC4] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white">NABEL</div>
                <div className="text-purple-300 text-xs">Industrial Windows Factory</div>
              </div>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed mb-6">
              Leading provider of UPVC windows, glass facades, and aluminum systems
              for residential, commercial, and government projects across Saudi Arabia.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#8E6BC4] transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-purple-200 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#8E6BC4] group-hover:w-2 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-purple-200 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#8E6BC4] group-hover:w-2 transition-all duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <a
                href="tel:+966506393399"
                className="flex items-start gap-3 text-purple-200 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#5B3B8A]/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5B3B8A] transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-xs text-purple-400 mb-0.5">Phone</div>
                  <div className="text-sm font-medium">+966 506393399</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-purple-200">
                <div className="w-9 h-9 rounded-lg bg-[#5B3B8A]/50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-xs text-purple-400 mb-0.5">Address</div>
                  <div className="text-sm">
                    Riyadh – Al Fahd Industrial Area
                    <br />
                    Harun Al Rashid Road
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-purple-200">
                <div className="w-9 h-9 rounded-lg bg-[#5B3B8A]/50 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-xs text-purple-400 mb-0.5">Email</div>
                  <div className="text-sm">info@nabel-windows.sa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-purple-300 text-sm">
            © 2024 NABEL Industrial Windows Factory. All rights reserved.
          </p>
          <p className="text-purple-400 text-xs">
            Saudi Arabia · Riyadh · Al Fahd Industrial Area
          </p>
        </div>
      </div>
    </footer>
  );
}
