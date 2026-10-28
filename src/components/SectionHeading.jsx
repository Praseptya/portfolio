import { motion } from "framer-motion";
import Reveal from "./Reveal";

// Judul naik dari balik "tirai" (mask), lalu garis emas memanjang.
export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-14 max-w-3xl">
      <div className="overflow-hidden pb-2">
        <motion.h2
          initial={{ y: "110%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          {title}
        </motion.h2>
      </div>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 block h-[3px] w-28 origin-left rounded-full bg-gradient-to-r from-gold to-transparent"
      />
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
