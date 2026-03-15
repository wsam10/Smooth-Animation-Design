import { useIntersectionObserver, useCounter } from "../hooks/useIntersectionObserver";
import { TrendingUp, Building2, MapPin, Grid3X3 } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 50, suffix: "+", label: "Projects Completed", color: "from-[#5B3B8A] to-[#8E6BC4]" },
  { icon: Building2, value: 10, suffix: "+", label: "Contracting Companies", color: "from-[#7B4FA8] to-[#A07ED4]" },
  { icon: MapPin, value: 7, suffix: "+", label: "Cities in Saudi Arabia", color: "from-[#6B43A0] to-[#9070C8]" },
  { icon: Grid3X3, value: 1000, suffix: "+", label: "Windows Installed", color: "from-[#5B3B8A] to-[#8E6BC4]" },
];

function StatCard({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  const count = useCounter(stat.value, 2000, started);
  const Icon = stat.icon;

  return (
    <div className="reveal card-hover glow-border bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
      <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} items-center justify-center mb-5 shadow-lg`}>
        <Icon size={28} className="text-white" />
      </div>
      <div className="text-5xl font-bold text-[#5B3B8A] mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-600 font-medium">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="stats" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal" ref={ref}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#5B3B8A] text-sm font-medium mb-4">
            Our Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A track record of excellence across Saudi Arabia's leading projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
