import { Sparkle } from "lucide-react";
import { skillCategories } from "../data/portfolioData";
import { getIcon } from "../utils/iconMap";

// Pita teknologi yang bergulir terus. Diambil otomatis dari data skills.
export default function Marquee() {
  const seen = new Set();
  const items = skillCategories
    .flatMap((c) => c.items)
    .filter((s) => (seen.has(s.name) ? false : seen.add(s.name)));

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line/10 bg-line/[0.03] py-6 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...items, ...items].map((s, i) => {
          const Icon = getIcon(s.icon);
          return (
            <span
              key={i}
              className={`flex items-center gap-4 whitespace-nowrap pr-10 font-display text-3xl font-semibold sm:text-5xl ${
                i % 2 ? "text-outline" : "text-fg"
              }`}
            >
              <Icon size={30} className="text-gold" />
              {s.name}
              <Sparkle size={18} className="ml-6 text-gold" />
            </span>
          );
        })}
      </div>
    </div>
  );
}
