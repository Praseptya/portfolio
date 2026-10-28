import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";
import { GithubLucide } from "../utils/iconMap";

export default function ProjectCard({ project }) {
  const [imgFailed, setImgFailed] = useState(!project.image);
  const [expanded, setExpanded] = useState(false);
  const initial = project.title.trim().charAt(0).toUpperCase();

  return (
    <TiltCard className="glass group flex h-full flex-col overflow-hidden rounded-3xl">
      {/* Thumbnail; jika gambar belum ada, tampil sampul inisial */}
      <div className="relative aspect-[4/3] overflow-hidden bg-navy">
        {imgFailed ? (
          <div className="relative grid h-full w-full place-items-center overflow-hidden bg-gradient-to-br from-navy via-[#12284a] to-[#0b1a33]">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
            <span className="font-display text-8xl font-semibold text-gold/80 transition-transform duration-500 group-hover:scale-110">
              {initial}
            </span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={`Tampilan proyek ${project.title}`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a33]/70 via-transparent to-transparent" />
        <span className="absolute right-3 top-3 rounded-full bg-[#0b1a33]/80 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-semibold leading-snug">{project.title}</h3>
        <p className="mt-1 text-sm font-semibold text-gold-text">{project.shortDesc}</p>
        <p className="mt-1 text-xs text-muted">{project.role}</p>

        <p className={`mt-4 text-justify hyphens-auto text-sm leading-relaxed text-muted ${expanded ? "" : "line-clamp-3"}`}>
          {project.description}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="mt-2 inline-flex w-fit items-center gap-1 text-xs font-semibold text-gold-text hover:underline"
        >
          {expanded ? "Tampilkan lebih sedikit" : "Selengkapnya"}
          <ChevronDown size={14} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        {(project.live || project.github) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-gold !px-4 !py-2"
              >
                <ExternalLink size={15} /> Live
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-ghost !px-4 !py-2"
              >
                <GithubLucide size={15} /> GitHub
              </motion.a>
            )}
          </div>
        )}
      </div>
    </TiltCard>
  );
}
