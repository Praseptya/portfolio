import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// Kartu yang miring 3D mengikuti kursor, dengan kilau emas yang ikut bergerak.
export default function TiltCard({ children, className = "", max = 7 }) {
  const ref = useRef(null);
  const nx = useMotionValue(0.5); // posisi kursor 0..1
  const ny = useMotionValue(0.5);
  const gx = useMotionValue(-300); // posisi kilau dalam px
  const gy = useMotionValue(-300);

  const rotateX = useSpring(useTransform(ny, [0, 1], [max, -max]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(nx, [0, 1], [-max, max]), { stiffness: 220, damping: 22 });
  const glare = useMotionTemplate`radial-gradient(360px circle at ${gx}px ${gy}px, rgb(212 175 55 / 0.2), transparent 60%)`;

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    nx.set((e.clientX - r.left) / r.width);
    ny.set((e.clientY - r.top) / r.height);
    gx.set(e.clientX - r.left);
    gy.set(e.clientY - r.top);
  };
  const onLeave = () => {
    nx.set(0.5);
    ny.set(0.5);
    gx.set(-300);
    gy.set(-300);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -8, boxShadow: "0 28px 60px -18px rgb(212 175 55 / 0.45)" }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        aria-hidden="true"
        style={{ background: glare }}
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
      />
    </motion.div>
  );
}
