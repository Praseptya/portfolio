import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects, sectionText } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <SectionHeading title={sectionText.projects.title} subtitle={sectionText.projects.subtitle} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
