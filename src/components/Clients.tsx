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

function ClientCard({ name }: { name: string }) {
  return (
    <div
      className="inline-flex items-center gap-3 px-7 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#8E6BC4]/30 transition-all duration-300 group cursor-default"
      style={{ margin: "0 12px" }}
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5B3B8A] to-[#8E6BC4] flex items-center justify-center flex-shrink-0">
        <span className="text-white text-xs font-bold">{name.charAt(0)}</span>
      </div>
      <span className="text-gray-500 font-medium text-sm group-hover:text-[#5B3B8A] transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Clients() {
  const { t, lang } = useLang();
  const { ref } = useIntersectionObserver();
  const base = lang === "ar" ? clientsAr : clientsEn;

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

      {/* Infinite scroll strip */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/*
          Three identical tracks in a single flex row.
          Animation moves exactly -33.333% (one track width) so the loop
          restarts seamlessly. will-change ensures GPU compositing.
        */}
        <div
          className="flex"
          style={{
            width: "max-content",
            animation: "clientsScroll 40s linear infinite",
            willChange: "transform",
          }}
        >
          {[0, 1, 2].map((trackIdx) => (
            <div key={trackIdx} className="flex items-center">
              {base.map((name, i) => (
                <ClientCard key={`${trackIdx}-${i}`} name={name} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
