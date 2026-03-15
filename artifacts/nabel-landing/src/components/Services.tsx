import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Square, DoorOpen, Building, Layers, PanelTop, Columns } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLang();
  const { ref } = useIntersectionObserver();

  const services = [
    { icon: Square,   key: "upvcWindows" },
    { icon: DoorOpen, key: "upvcDoors" },
    { icon: Building, key: "glassFacades" },
    { icon: Layers,   key: "aluminum" },
    { icon: PanelTop, key: "cladding" },
    { icon: Columns,  key: "structural" },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal" ref={ref}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#5B3B8A] text-sm font-medium mb-4">
            {t("services.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">{t("services.h2a")}</span>
            {t("services.h2b") ? ` ${t("services.h2b")}` : ""}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("services.desc")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.key}
                className="reveal group card-hover glow-border bg-white rounded-2xl p-8 border border-gray-100 shadow-sm cursor-default"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center mb-5 group-hover:from-[#5B3B8A] group-hover:to-[#8E6BC4] transition-all duration-300 shadow-sm">
                  <Icon size={24} className="text-[#5B3B8A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B3B8A] transition-colors">
                  {t(`services.${svc.key}`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`services.${svc.key}.desc`)}
                </p>
                <div className="mt-5 flex items-center gap-2 text-[#8E6BC4] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("services.learnMore")}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
