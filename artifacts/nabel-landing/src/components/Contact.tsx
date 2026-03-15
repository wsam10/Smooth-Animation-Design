import { Phone, MapPin, MessageCircle } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const { ref } = useIntersectionObserver();

  const contacts = [
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+966 506393399",
      sub: t("contact.phoneSub"),
      href: "tel:+966506393399",
      color: "from-[#5B3B8A] to-[#8E6BC4]",
    },
    {
      icon: MessageCircle,
      title: t("contact.whatsapp"),
      value: "+966 506393399",
      sub: t("contact.whatsappSub"),
      href: "https://wa.me/966506393399",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      value: t("contact.addressVal"),
      sub: t("contact.addressSub"),
      href: "https://maps.google.com",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal" ref={ref}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#5B3B8A] text-sm font-medium mb-4">
            {t("contact.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("contact.h2a")} <span className="gradient-text">{t("contact.h2b")}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("contact.desc")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="reveal group card-hover glow-border bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm block"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-[#5B3B8A] font-semibold text-lg mb-1">{c.value}</p>
                <p className="text-gray-400 text-sm">{c.sub}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-12 reveal rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6582!2d46.7!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzAwLjAiTiA0NsKwNDInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1617000000000!5m2!1sen!2ssa"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="NABEL Location"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
