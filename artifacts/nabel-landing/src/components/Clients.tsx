import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLang } from "../context/LanguageContext";

const clientsEn = [
  "Maskan Arabia",
  "Ministry of Interior",
  "Ministry of Planning",
  "Afak Al Omran",
  "Abdulrahman Al Rashid",
  "Dar Al Ibkar Contracting",
  "Al Jazirah Group",
  "Saudi Aramco Partners",
];

const clientsAr = [
  "مسكن العربية",
  "وزارة الداخلية",
  "وزارة التخطيط",
  "آفاق العمران",
  "شركة عبدالرحمن الراشد",
  "دار الإبكار للمقاولات",
  "مجموعة الجزيرة",
  "شركاء أرامكو السعودية",
];

export default function Clients() {
  const { t, lang } = useLang();
  const { ref } = useIntersectionObserver();
  const clients = [...(lang === "ar" ? clientsAr : clientsEn), ...(lang === "ar" ? clientsAr : clientsEn)];

  return (
    <section id="clients" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal" ref={ref}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#5B3B8A] text-sm font-medium mb-4">
            {t("clients.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">{t("clients.h2a")}</span>
            {t("clients.h2b") ? ` ${t("clients.h2b")}` : ""}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("clients.desc")}</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="animate-scroll-logos flex gap-8 items-center whitespace-nowrap min-w-max">
            {clients.map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex-shrink-0 px-8 py-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#8E6BC4]/30 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5B3B8A] to-[#8E6BC4] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">
                      {client.charAt(0)}
                    </span>
                  </div>
                  <span className="text-gray-500 font-medium text-sm group-hover:text-[#5B3B8A] transition-colors">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
