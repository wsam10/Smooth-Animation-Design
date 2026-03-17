import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLang } from "../context/LanguageContext";

const images = [
  {
    base: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
    alt: "Modern glass facade building",
    span: "col-span-2 row-span-2",
  },
  {
    base: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    alt: "Modern villa with UPVC windows",
    span: "",
  },
  {
    base: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    alt: "Residential project with glass windows",
    span: "",
  },
  {
    base: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    alt: "Commercial building interior",
    span: "",
  },
  {
    base: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    alt: "Villa exterior with aluminum windows",
    span: "",
  },
  {
    base: "https://images.unsplash.com/photo-1464082354059-27db6ce50048",
    alt: "Modern office building facade",
    span: "",
  },
  {
    base: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    alt: "Construction facade work in progress",
    span: "col-span-2",
  },
];

function buildSrc(base: string, w: number) {
  return `${base}?w=${w}&q=75&fm=webp&auto=format&fit=crop`;
}

export default function Gallery() {
  const { t } = useLang();
  const { ref } = useIntersectionObserver();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal" ref={ref}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#5B3B8A] text-sm font-medium mb-4">
            {t("gallery.badge")}
          </div>
          <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("gallery.h2a")} <span className="gradient-text">{t("gallery.h2b")}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("gallery.desc")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]" role="list">
          {images.map((img, i) => (
            <button
              key={i}
              role="listitem"
              aria-label={`View image: ${img.alt}`}
              className={`reveal relative overflow-hidden rounded-2xl cursor-pointer group bg-gray-100 text-left ${img.span}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => setLightbox({ src: buildSrc(img.base, 1200), alt: img.alt })}
            >
              <img
                src={buildSrc(img.base, 600)}
                srcSet={`${buildSrc(img.base, 400)} 400w, ${buildSrc(img.base, 600)} 600w, ${buildSrc(img.base, 800)} 800w`}
                sizes="(max-width: 640px) 50vw, 25vw"
                alt={img.alt}
                width="600"
                height="200"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = buildSrc(
                    "https://images.unsplash.com/photo-1486325212027-8081e485255e",
                    600
                  );
                }}
              />
              <div className="absolute inset-0 bg-[#2D1B55]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" aria-hidden="true">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn size={20} className="text-white" aria-hidden="true" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${lightbox.alt}`}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close image viewer"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} aria-hidden="true" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-4xl max-h-[85vh] w-full object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
