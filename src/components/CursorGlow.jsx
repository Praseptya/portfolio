import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Cahaya emas lembut yang mengikuti kursor. Hanya aktif di perangkat dengan mouse
// dan tidak aktif jika pengguna memilih "kurangi gerakan".
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 110, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 110, damping: 20, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: sx,
        y: sy,
        background: "radial-gradient(circle, rgb(var(--gold) / 0.13), transparent 65%)",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[60] -ml-56 -mt-56 h-[28rem] w-[28rem] rounded-full"
    />
  );
}
