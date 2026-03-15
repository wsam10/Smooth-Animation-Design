import { CheckCircle2 } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLang } from "../context/LanguageContext";

export default function WhyUs() {
  const { t } = useLang();
  const { ref } = useIntersectionObserver();

  const reasons = [
    t("whyus.r1"), t("whyus.r2"), t("whyus.r3"),
    t("whyus.r4"), t("whyus.r5"), t("whyus.r6"),
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Construction team"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5B3B8A]/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -end-6 bg-gradient-to-br from-[#5B3B8A] to-[#8E6BC4] rounded-2xl p-6 shadow-2xl animate-float">
              <div className="text-white text-4xl font-bold">10+</div>
              <div className="text-purple-200 text-sm mt-1">{t("whyus.years")}</div>
            </div>
            <div className="absolute -top-6 -start-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#8E6BC4]/20 to-[#5B3B8A]/20 border-2 border-[#8E6BC4]/30 backdrop-blur-sm" />
          </div>

          <div className="reveal-right" ref={ref}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#5B3B8A] text-sm font-medium mb-6">
              {t("whyus.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("whyus.h2a")} <span className="gradient-text">{t("whyus.h2b")}</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">{t("whyus.desc")}</p>

            <div className="space-y-4 stagger-children">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="reveal flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#5B3B8A] to-[#8E6BC4] flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
