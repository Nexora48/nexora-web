"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

// Soft ring that trails the mouse and grows over links/buttons.
// Mouse-only; hidden on touch devices and for reduced motion.
export default function CursorFollower() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.4 });
  const finePointer = useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(pointer: fine)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(pointer: fine)").matches,
    () => false
  );
  const enabled = finePointer && !reduce;
  const [big, setBig] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      setBig(Boolean(t?.closest("a, button, [role=button], [role=tab], input, select, textarea, article[tabindex]")));
    };
    const down1 = () => setDown(true);
    const up = () => setDown(false);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down1);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down1);
      window.removeEventListener("pointerup", up);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden rounded-full border border-brand-light/70 bg-brand-light/10 md:block"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: big ? 56 : 26, height: big ? 56 : 26, scale: down ? 0.85 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    />
  );
}
