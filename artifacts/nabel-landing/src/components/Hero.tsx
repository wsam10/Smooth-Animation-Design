import { ChevronDown, ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <div
        className="absolute inset-0 hero-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`,
        }}
      />
      {/* Dark overlay with purple tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B55]/90 via-[#3D2068]/80 to-[#1a0f35]/90" />
      {/* Animated purple orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8E6BC4]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#5B3B8A]/30 rounded-full blur-3xl animate-float delay-500" />

      {/* Glass overlay strip */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 text-sm font-medium mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-[#8E6BC4] animate-pulse" />
          Premium Industrial Windows & Facades
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up delay-200">
          Advanced UPVC Windows
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A67DD4] to-[#C4A0E8]">
            & Glass Facades
          </span>
          <br />
          Solutions
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-300">
          Providing high-quality windows, doors, and facade systems for residential,
          commercial, and government projects across Saudi Arabia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#5B3B8A] to-[#8E6BC4] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-900/50 hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <Phone size={18} />
            Contact Us
          </a>
        </div>

        {/* Stats teaser */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-up delay-500">
          {[
            { num: "50+", label: "Projects" },
            { num: "10+", label: "Partners" },
            { num: "7+", label: "Cities" },
            { num: "1000+", label: "Windows" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white">{s.num}</div>
              <div className="text-purple-300 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors animate-fade-up delay-600"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
