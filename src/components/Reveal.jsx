import { motion } from "framer-motion";

// Pembungkus animasi: fade-in + slide-up saat elemen masuk layar (sekali saja).
export default function Reveal({ children, delay = 0, y = 28, className = "", as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
