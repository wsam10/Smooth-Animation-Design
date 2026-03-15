import { MapPin } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const cities = [
  { name: "Riyadh", count: 18, emoji: "🏙️" },
  { name: "Al-Kharj", count: 8, emoji: "🏘️" },
  { name: "Jeddah", count: 7, emoji: "🌊" },
  { name: "Hail", count: 5, emoji: "⛰️" },
  { name: "Al-Ahsa", count: 4, emoji: "🌴" },
  { name: "Qassim", count: 5, emoji: "🏜️" },
  { name: "Dammam", count: 6, emoji: "🏗️" },
];

export default function Cities() {
  const { ref } = useIntersectionObserver();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal" ref={ref}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#5B3B8A] text-sm font-medium mb-4">
            Coverage
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects Across <span className="gradient-text">Saudi Arabia</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A growing presence in major cities and regions of the Kingdom
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 stagger-children">
          {cities.map((city, i) => (
            <div
              key={city.name}
              className="reveal group card-hover glow-border bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm cursor-default"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="text-3xl mb-3">{city.emoji}</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B3B8A] to-[#8E6BC4] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <MapPin size={14} className="text-white" />
              </div>
              <div className="font-bold text-gray-900 text-sm mb-1">{city.name}</div>
              <div className="text-2xl font-bold text-[#5B3B8A]">{city.count}</div>
              <div className="text-xs text-gray-400 mt-0.5">Projects</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
