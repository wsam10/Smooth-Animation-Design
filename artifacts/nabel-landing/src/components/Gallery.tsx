import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const images = [
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", alt: "Glass facade building", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80", alt: "Modern apartment windows", span: "" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80", alt: "Residential project", span: "" },
  { src: "https://images.unsplash.com/photo-1495576775051-8af0d10f21d9?w=400&q=80", alt: "UPVC windows installation", span: "" },
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80", alt: "Villa windows", span: "" },
  { src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&q=80", alt: "Commercial glass facade", span: "" },
  { src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&q=80", alt: "Modern building exterior", span: "col-span-2" },
];

export default function Gallery() {
  const { ref } = useIntersectionObserver();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal" ref={ref}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#5B3B8A] text-sm font-medium mb-4">
            Visual Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A glimpse of our craftsmanship and quality installations
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`reveal relative overflow-hidden rounded-2xl cursor-pointer group ${img.span}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

      {/* Lightbox */}
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
