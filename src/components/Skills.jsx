import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { sectionText, skillCategories } from "../data/portfolioData";
import { getIcon } from "../utils/iconMap";

const grid = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const tile = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-page">
        <SectionHeading title={sectionText.skills.title} subtitle={sectionText.skills.subtitle} />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.category} delay={(i % 2) * 0.1}>
              <div className="glass h-full rounded-3xl p-6 sm:p-7">
                <h3 className="mb-5 font-display text-xl font-semibold">{cat.category}</h3>

                <motion.ul
                  variants={grid}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3"
                >
                  {cat.items.map((s) => {
                    const Icon = getIcon(s.icon);
                    return (
                      <motion.li
                        key={s.name}
                        variants={tile}
                        whileHover={{ y: -7, scale: 1.05, boxShadow: "0 14px 30px -10px rgb(212 175 55 / 0.55)" }}
                        className="group flex flex-col items-center gap-2 rounded-2xl border border-line/10 bg-line/[0.04] px-3 py-4 text-center transition-colors hover:border-gold/60"
                      >
                        <Icon size={28} className="text-gold-text transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125" aria-hidden="true" />
                        <span className="text-xs font-medium leading-tight sm:text-sm">{s.name}</span>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
