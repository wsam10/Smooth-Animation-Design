import { ArrowRight, Phone } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLang } from "../context/LanguageContext";

export default function CTA() {
  const { t } = useLang();
  const { ref } = useIntersectionObserver();

  return (
    <section className="py-16 px-6" aria-label="Call to action">
      <div className="relative overflow-hidden rounded-3xl max-w-6xl mx-auto" ref={ref}>
        {/*
          Hero image background — NOT fixed-attachment (fixed breaks GPU compositing
          on mobile and tanks Lighthouse performance). Use cover instead.
        */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1200&q=75')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B55]/92 via-[#3D2068]/85 to-[#1a0f35]/92" aria-hidden="true" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#8E6BC4]/20 rounded-full blur-3xl animate-float pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#5B3B8A]/25 rounded-full blur-3xl animate-float delay-400 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 py-20 px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-sm font-medium mb-8 reveal">
            {t("cta.badge")}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 reveal">
            {t("cta.h2a")}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A67DD4] to-[#C4A0E8]">
              {t("cta.h2b")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed reveal">
            {t("cta.desc")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal">
            <a
              href="#contact"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#5B3B8A] font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t("cta.quote")}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="tel:+966506393399"
              aria-label="Call NABEL at +966 506393399"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} aria-hidden="true" />
              {t("cta.call")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
