"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Word-by-word mask reveal for headings. Text stays readable to assistive tech.
export default function SplitHeading({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: reduce ? 0 : 0.06 }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className={cn("inline-block overflow-hidden align-bottom pb-[0.12em]")} aria-hidden="true">
          <motion.span
            className="inline-block"
            variants={{
              hidden: reduce ? { opacity: 1 } : { y: "110%", opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
