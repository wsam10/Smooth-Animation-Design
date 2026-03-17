import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, Phone, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const SLIDES = [
  {
    id: "s1",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1920&q=80&fm=webp&fit=crop",
    aria: "Riyadh skyline",
  },
  {
    id: "s2",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80&fm=webp&fit=crop",
    aria: "Glass curtain wall facade",
  },
  {
    id: "s3",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80&fm=webp&fit=crop",
    aria: "Modern aluminum commercial building",
  },
  {
    id: "s4",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1920&q=80&fm=webp&fit=crop",
    aria: "Saudi Arabia cityscape",
  },
];

const INTERVAL = 6000;

export default function Hero() {
  const { t, dir } = useLang();
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = SLIDES[current];
  const sid = slide.id;

  return (
    <section
      id="hero"
      role="main"
      aria-label="Hero – NABEL Industrial Windows Factory"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background slides (crossfade) ── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 hero-bg transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${s.image}')`,
            opacity: i === current ? 1 : 0,
          }}
          role="img"
          aria-label={s.aria}
          aria-hidden={i !== current}
        />
      ))}

      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B55]/90 via-[#3D2068]/80 to-[#1a0f35]/90" aria-hidden="true" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8E6BC4]/20 rounded-full blur-3xl animate-float" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#5B3B8A]/30 rounded-full blur-3xl animate-float delay-500" aria-hidden="true" />

      {/* ── Slide content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 text-sm font-medium mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-[#8E6BC4] animate-pulse" aria-hidden="true" />
          {t("hero.badge")}
        </div>

        {/* Heading — re-mounts on slide change for entrance animation */}
        <div key={`heading-${animKey}`} className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t(`hero.${sid}.h1a`)}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A67DD4] to-[#C4A0E8]">
              {t(`hero.${sid}.h1b`)}
            </span>
            <br />
            {t(`hero.${sid}.h1c`)}
          </h1>

          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t(`hero.${sid}.desc`)}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#5B3B8A] to-[#8E6BC4] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-900/50 hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            {t("hero.btnProjects")}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <Phone size={18} aria-hidden="true" />
            {t("hero.btnContact")}
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#stats"
          aria-label="Scroll down to learn more"
          className="mt-14 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors animate-fade-up delay-600"
        >
          <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
          <ChevronDown size={20} className="animate-bounce" aria-hidden="true" />
        </a>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className={`absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 hover:scale-110 transition-all duration-200 ${dir === "rtl" ? "right-5" : "left-5"}`}
      >
        {dir === "rtl" ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className={`absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 hover:scale-110 transition-all duration-200 ${dir === "rtl" ? "left-5" : "right-5"}`}
      >
        {dir === "rtl" ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3" role="tablist" aria-label="Slide indicators">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-3 bg-[#8E6BC4]"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      {!paused && (
        <div className="absolute bottom-0 left-0 h-0.5 bg-[#8E6BC4]/60 z-20" style={{ width: "100%" }}>
          <div
            key={`progress-${current}`}
            className="h-full bg-[#8E6BC4]"
            style={{
              animation: `slideProgress ${INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      )}
    </section>
  );
}
