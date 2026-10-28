import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences, sectionText } from "../data/portfolioData";
import { getIcon } from "../utils/iconMap";

export default function Experience() {
  // Garis timeline "terisi" emas seiring scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <SectionHeading title={sectionText.experience.title} subtitle={sectionText.experience.subtitle} />

        <ol ref={ref} className="relative space-y-6 pl-8 sm:pl-10">
          <span aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-line/15" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute -left-px top-0 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-gold via-gold to-gold/30"
          />

          {experiences.map((exp, i) => {
            const Icon = getIcon(exp.type);
            return (
              <Reveal as="li" key={exp.title} delay={i * 0.06} className="relative">
                <span className="absolute -left-[3.125rem] top-5 grid h-9 w-9 place-items-center rounded-full border border-gold/70 bg-bg text-gold-text sm:-left-[3.625rem]">
                  <span className="absolute inset-0 animate-ping rounded-full border border-gold/40" />
                  <Icon size={16} />
                </span>

                <motion.div
                  whileHover={{ y: -6, x: 4, boxShadow: "0 20px 48px -14px rgb(212 175 55 / 0.4)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="glass rounded-3xl p-6 sm:p-7"
                >
                  <p className="text-sm font-semibold text-gold-text">{exp.period}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold leading-snug sm:text-2xl">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{exp.organization}</p>
                  <p className="mt-4 leading-relaxed text-muted">{exp.description}</p>
                  {exp.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
