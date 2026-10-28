import { motion, useScroll, useSpring } from "framer-motion";

// Garis emas tipis di atas layar yang memanjang sesuai posisi scroll.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-gold via-[#f4de93] to-gold"
    />
  );
}
