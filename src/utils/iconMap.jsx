/* ---------------------------------------------------------------
   PETA IKON
   Data di portfolioData.js hanya menulis kunci teks (mis. "react").
   File ini menerjemahkan kunci itu menjadi komponen ikon.

   Menambah ikon baru:
   1. import ikonnya dari react-icons / lucide-react
   2. tambahkan satu baris di objek iconMap: kunci: Komponen
   Daftar ikon: https://react-icons.github.io/react-icons/
   --------------------------------------------------------------- */
import {
  SiPhp, SiLaravel, SiMysql, SiJavascript, SiReact, SiTailwindcss,
  SiFlutter, SiDart, SiFirebase, SiSqlite, SiPython, SiFigma, SiGit,
  SiGithub, SiHtml5, SiNodedotjs, SiVite, SiTypescript, SiPandas, SiNumpy,
} from "react-icons/si";
import { FaMicrosoft, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import {
  Brain, ChartColumn, ChartPie, Globe, Mic, PenTool, Palette, Code2,
  Mail, Phone, Briefcase, FlaskConical, HandHelping, GraduationCap, MessageSquareText, Sparkles, Shapes, Gamepad2,
  Github as GithubLucide,
} from "lucide-react";

export const iconMap = {
  // Teknologi
  php: SiPhp,
  laravel: SiLaravel,
  mysql: SiMysql,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  nodejs: SiNodedotjs,
  react: SiReact,
  vite: SiVite,
  tailwind: SiTailwindcss,
  flutter: SiFlutter,
  dart: SiDart,
  firebase: SiFirebase,
  sqlite: SiSqlite,
  python: SiPython,
  pandas: SiPandas,
  numpy: SiNumpy,
  figma: SiFigma,
  shape: Shapes,
  prompting: MessageSquareText,
  ai: Sparkles,
  git: SiGit,
  github: SiGithub,
  office: FaMicrosoft,

  // Konsep
  ml: Brain,
  analysis: ChartPie,
  chart: ChartColumn,
  scraping: Globe,
  mic: Mic,
  pen: PenTool,
  palette: Palette,
  code: Code2,

  // Kontak
  mail: Mail,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  phone: Phone,

  // Jenis pengalaman (field "type" di experiences)
  work: Briefcase,
  research: FlaskConical,
  volunteer: HandHelping,
  education: GraduationCap,
  esport: Gamepad2,
};

// Mengembalikan komponen ikon; jika kunci tidak ada, pakai ikon "code".
export function getIcon(key) {
  return iconMap[String(key || "").toLowerCase()] ?? Code2;
}

export { GithubLucide };
