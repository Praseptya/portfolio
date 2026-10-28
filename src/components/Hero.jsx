import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Eye, GraduationCap } from "lucide-react";
import CvModal from "./CvModal";
import useTypewriter from "../hooks/useTypewriter";
import Magnetic from "./Magnetic";
import { education, heroButtons, profile } from "../data/portfolioData";
import { getIcon } from "../utils/iconMap";

const ease = [0.22, 1, 0.36, 1];

// Satu baris nama: tiap huruf naik satu per satu dari balik mask.
function NameLine({ text, base, shimmer = false }) {
  return (
    <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]" aria-hidden="true">
      {[...text].map((ch, i) => (
        <motion.span
          key={i}
          className={`inline-block ${shimmer ? "text-shimmer" : ""}`}
          style={shimmer ? { animationDelay: `${i * 0.18}s` } : undefined}
          initial={{ y: "115%", rotate: 6 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ duration: 0.85, delay: base + i * 0.045, ease }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

// Posisi ikon yang melayang di sekitar foto
const chipSpots = [
  "left-[-9%] top-[6%]",
  "right-[-8%] top-[16%]",
  "right-[-6%] top-[60%]",
  "left-[-10%] top-[48%]",
];

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const [photoFailed, setPhotoFailed] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  const words = profile.name.trim().split(/\s+/);
  const lines =
    words.length > 1 ? [words.slice(0, -1).join(" "), words[words.length - 1]] : [profile.name];

  const initials = words.slice(0, 2).map((w) => w[0]).join("");

  // Parallax: foto dan ikon bergeser mengikuti kursor, dengan kedalaman berbeda
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 16 });
  const sy = useSpring(my, { stiffness: 70, damping: 16 });
  const photoX = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const photoY = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const chipX = useTransform(sx, [-0.5, 0.5], [26, -26]);
  const chipY = useTransform(sy, [-0.5, 0.5], [20, -20]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const nameDelay = 0.25;

  return (
    <section
      id="top"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex min-h-screen items-center pb-24 pt-32"
    >
      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mb-5 flex items-center gap-3 text-base text-muted"
          >
            <span className="h-px w-10 bg-gold" />
            {profile.greeting}
          </motion.p>

          <h1
            aria-label={profile.name}
            className="font-display text-[clamp(2.6rem,6.2vw,5.75rem)] font-semibold leading-[1] tracking-tight"
          >
            {lines.map((line, li) => (
              <NameLine
                key={line}
                text={line}
                shimmer={li === lines.length - 1 && lines.length > 1}
                base={nameDelay + (li === 0 ? 0 : lines[0].length * 0.045)}
              />
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease }}
            className="mt-7 min-h-[2.2rem] text-xl font-semibold text-gold-text sm:text-2xl"
            aria-live="off"
          >
            {typed}
            <span className="caret" aria-hidden="true" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.35, ease }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Magnetic>
              <motion.a
                href={`#${heroButtons.primary.target}`}
                whileHover={{ boxShadow: "0 14px 34px -8px rgb(212 175 55 / 0.65)" }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-gold"
              >
                {heroButtons.primary.label}
                <ArrowDown size={16} />
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.button
                type="button"
                onClick={() => setCvOpen(true)}
                whileTap={{ scale: 0.96 }}
                className="btn btn-ghost"
              >
                <Eye size={16} />
                {heroButtons.secondary.label}
              </motion.button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Foto: cincin emas berputar + parallax + ikon melayang */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            style={{ x: photoX, y: photoY, rotateX, rotateY, transformPerspective: 1000 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gold/20 blur-3xl" aria-hidden="true" />

            {/* Bingkai dengan gradien berputar */}
            <div className="relative overflow-hidden rounded-[2.2rem] p-[3px]">
              <div
                aria-hidden="true"
                className="absolute -inset-[60%] animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0 55%, rgb(var(--gold)) 75%, #f4de93 85%, transparent 100%)",
                }}
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.1rem] bg-bg p-2">
                {photoFailed ? (
                  <div className="grid h-full w-full place-items-center rounded-[1.6rem] bg-navy font-display text-7xl text-gold">
                    {initials}
                  </div>
                ) : (
                  <img
                    src={profile.photo}
                    alt={`Foto ${profile.name}`}
                    onError={() => setPhotoFailed(true)}
                    className="h-full w-full rounded-[1.6rem] object-cover object-[50%_22%]"
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Ikon teknologi melayang (bergeser berlawanan arah untuk efek kedalaman) */}
          {(profile.floatingIcons || []).slice(0, 4).map((key, i) => {
            const Icon = getIcon(key);
            return (
              <motion.div
                key={key}
                style={{ x: chipX, y: chipY }}
                className={`absolute ${chipSpots[i]}`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                  transition={{
                    opacity: { delay: 1.4 + i * 0.15 },
                    scale: { delay: 1.4 + i * 0.15, type: "spring" },
                    y: { duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="glass grid h-14 w-14 place-items-center rounded-2xl text-gold-text"
                >
                  <Icon size={26} />
                </motion.div>
              </motion.div>
            );
          })}

          {education[0] && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="glass absolute -bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl px-4 py-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/20 text-gold-text">
                <GraduationCap size={18} />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold">{education[0].school}</span>
                <span className="text-muted">{education[0].degree}</span>
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Petunjuk gulir */}
      <motion.a
        href="#about"
        aria-label={heroButtons.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted sm:flex"
      >
        {heroButtons.scrollHint}
        <span className="flex h-9 w-5 justify-center rounded-full border border-line/30 pt-1.5">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-gold"
          />
        </span>
      </motion.a>
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
