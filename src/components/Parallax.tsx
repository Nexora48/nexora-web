"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Slow vertical drift for images inside an overflow-hidden frame.
export default function Parallax({ children, amount = 8 }: { children: ReactNode; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div className="absolute inset-0 scale-[1.18]" style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
