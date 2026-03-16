import { MapPin, Building, Wrench, ChevronRight } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLang } from "../context/LanguageContext";

const projectData = [
  {
    id: 1,
    tag: "Residential",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "Government",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "Commercial",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    tag: "Residential",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    tag: "Government",
    img: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    tag: "Residential",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format&fit=crop",
  },
];

const tagColors: Record<string, string> = {
  Residential: "bg-blue-50 text-blue-700 border-blue-200",
  Government:  "bg-amber-50 text-amber-700 border-amber-200",
  Commercial:  "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export default function Projects() {
  const { t } = useLang();
  const { ref } = useIntersectionObserver();

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal" ref={ref}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#5B3B8A] text-sm font-medium mb-4">
            {t("projects.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">{t("projects.h2a")}</span>
            {t("projects.h2b") ? ` ${t("projects.h2b")}` : ""}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("projects.desc")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {projectData.map((p, i) => (
            <div
              key={p.id}
              className="reveal group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-52 bg-gray-100">
                <img
                  src={p.img}
                  alt={t(`project.${p.id}.name`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B55]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute top-3 start-3 px-3 py-1 rounded-full text-xs font-semibold border ${tagColors[p.tag]}`}>
                  {t(`projects.tag.${p.tag.toLowerCase()}`)}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#5B3B8A] transition-colors">
                  {t(`project.${p.id}.name`)}
                </h3>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Building size={14} className="text-[#8E6BC4] flex-shrink-0" />
                    <span>{t(`project.${p.id}.contractor`)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench size={14} className="text-[#8E6BC4] flex-shrink-0" />
                    <span>{t(`project.${p.id}.work`)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#8E6BC4] flex-shrink-0" />
                    <span>{t(`project.${p.id}.city`)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-[#5B3B8A] text-[#5B3B8A] font-semibold hover:bg-[#5B3B8A] hover:text-white transition-all duration-300"
          >
            {t("projects.viewAll")}
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
