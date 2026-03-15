import { ArrowRight, Phone } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function CTA() {
  const { ref } = useIntersectionObserver();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: "linear-gradient(135deg, #3D1F7A, #5B3B8A, #7B4FA8, #8E6BC4, #5B3B8A, #3D1F7A)",
        }}
      />
      {/* Floating orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float delay-400" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-sm font-medium mb-8 reveal">
          Ready to Start?
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 reveal">
          Start Your Next Project
          <br />
          <span className="text-purple-200">With Us</span>
        </h2>

        <p className="text-lg md:text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed reveal">
          Get professional solutions for windows, doors, and glass facades.
          Our team is ready to bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal">
          <a
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#5B3B8A] font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Request a Quote
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+966506393399"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <Phone size={20} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
