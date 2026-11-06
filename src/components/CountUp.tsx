"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export default function CountUp({ to, className }: { to: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, { duration: 1.4, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref} className={className} aria-label={String(to)}>
      {value}
    </span>
  );
}
