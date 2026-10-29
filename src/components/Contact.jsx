import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import TiltCard from "./TiltCard";
import { contact, sectionText } from "../data/portfolioData";
import { getIcon } from "../utils/iconMap";

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2.2rem] p-8 sm:p-14">
            {/* Cahaya emas yang bergerak pelan di sudut panel */}
            <div
              aria-hidden="true"
              className="bg-blob -right-24 -top-24 h-80 w-80"
              style={{ position: "absolute", zIndex: 0, background: "rgb(var(--gold) / 0.22)" }}
            />

            <div className="relative z-10 max-w-3xl">
              <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
                {sectionText.contact.title}
              </h2>
              <span className="mt-4 block h-[3px] w-28 rounded-full bg-gradient-to-r from-gold to-transparent" />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {sectionText.contact.subtitle}
              </p>
              <div className="mt-9">
                <Magnetic>
                  <motion.a
                    href={`mailto:${contact.email}`}
                    whileHover={{ boxShadow: "0 14px 34px -8px rgb(212 175 55 / 0.65)" }}
                    whileTap={{ scale: 0.96 }}
                    className="btn btn-gold !px-8 !py-4 text-base"
                  >
                    <Mail size={18} />
                    {contact.emailButton}
                  </motion.a>
                </Magnetic>
              </div>
            </div>

            <ul className="relative z-10 mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contact.links.map((l) => {
                const Icon = getIcon(l.icon);
                return (
                  <li key={l.label} className="min-w-0">
                    <TiltCard max={5} className="rounded-2xl">
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-line/15 bg-line/[0.04] p-4 transition-colors hover:border-gold/60"
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-text transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                          <Icon size={20} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold">{l.label}</span>
                          <span className="block truncate text-sm text-muted">{l.value}</span>
                        </span>
                        <ArrowUpRight
                          size={20}
                          className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold-text"
                        />
                      </a>
                    </TiltCard>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
