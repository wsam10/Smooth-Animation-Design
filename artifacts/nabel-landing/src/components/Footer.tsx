import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  const serviceLinks = [
    t("services.upvcWindows"),
    t("services.upvcDoors"),
    t("services.glassFacades"),
    t("services.aluminum"),
    t("services.cladding"),
    t("services.structural"),
  ];

  const quickLinks = [
    { label: t("nav.home"),     href: "#hero" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.gallery"),  href: "#gallery" },
    { label: t("nav.clients"),  href: "#clients" },
    { label: t("nav.contact"),  href: "#contact" },
  ];

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
                <div className="font-bold text-xl text-white">{t("nav.brand")}</div>
                <div className="text-purple-300 text-xs">{t("footer.brandSub")}</div>
              </div>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed mb-6">{t("footer.desc")}</p>
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
            <h4 className="font-bold text-lg mb-6 text-white">{t("footer.quickLinks")}</h4>
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
            <h4 className="font-bold text-lg mb-6 text-white">{t("footer.services")}</h4>
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
            <h4 className="font-bold text-lg mb-6 text-white">{t("footer.contact")}</h4>
            <div className="space-y-4">
              <a
                href="tel:+966506393399"
                className="flex items-start gap-3 text-purple-200 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#5B3B8A]/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5B3B8A] transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-xs text-purple-400 mb-0.5">{t("contact.phone")}</div>
                  <div className="text-sm font-medium">+966 506393399</div>
                </div>
              </a>
              <div className="flex items-start gap-3 text-purple-200">
                <div className="w-9 h-9 rounded-lg bg-[#5B3B8A]/50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-xs text-purple-400 mb-0.5">{t("contact.address")}</div>
                  <div className="text-sm">
                    {t("contact.addressVal")}
                    <br />
                    {t("contact.addressSub")}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-purple-200">
                <div className="w-9 h-9 rounded-lg bg-[#5B3B8A]/50 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-xs text-purple-400 mb-0.5">Email</div>
                  <div className="text-sm">{t("footer.email")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-purple-300 text-sm">{t("footer.copyright")}</p>
          <p className="text-purple-400 text-xs">{t("footer.location")}</p>
        </div>
      </div>
    </footer>
  );
}
