import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLang } from "../context/LanguageContext";

const images = [
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
    alt: "Glass facade building",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80&auto=format&fit=crop",
    alt: "Modern villa windows",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80&auto=format&fit=crop",
    alt: "Residential project",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80&auto=format&fit=crop",
    alt: "Commercial interior",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80&auto=format&fit=crop",
    alt: "Villa exterior",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=400&q=80&auto=format&fit=crop",
    alt: "Modern office building",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
    alt: "Construction facade work",
    span: "col-span-2",
  },
];

export default function Gallery() {
  const { t } = useLang();
  const { ref } = useIntersectionObserver();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal" ref={ref}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#5B3B8A] text-sm font-medium mb-4">
            {t("gallery.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("gallery.h2a")} <span className="gradient-text">{t("gallery.h2b")}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("gallery.desc")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`reveal relative overflow-hidden rounded-2xl cursor-pointer group bg-gray-100 ${img.span}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-[#2D1B55]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-4xl max-h-[85vh] w-full object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
