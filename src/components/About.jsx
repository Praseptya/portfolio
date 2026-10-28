import { GraduationCap, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import SectionHeading from "./SectionHeading";
import { about, education, profile, sectionText, stats } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeading title={sectionText.about.title} subtitle={sectionText.about.subtitle} />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-justify hyphens-auto">{p}</p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {about.softSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass rounded-3xl p-6 sm:p-7">
              <p className="mb-5 flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} className="text-gold-text" />
                {profile.location}
              </p>
              {education.map((e) => (
                <div key={e.school + e.degree} className="flex gap-4">
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-text">
                    <GraduationCap size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                    <p className="text-muted">{e.school}</p>
                    <p className="mt-1 text-sm text-muted">{e.period}</p>
                    {e.detail && (
                      <p className="mt-2 text-sm font-semibold text-gold-text">{e.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Angka statistik animasi */}
        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 0.08}>
              <div className="glass rounded-3xl p-6 text-center">
                <p className="text-shimmer font-display text-5xl font-semibold sm:text-6xl">
                  <Counter to={s.value} decimals={s.decimals || 0} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
