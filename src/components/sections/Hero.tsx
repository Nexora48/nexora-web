"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { hero } from "@/content/hero";
import { company } from "@/content/company";

const floatingCards = [
  { icon: "LayoutDashboard", label: "Nexora Admin", className: "left-[4%] top-[18%] lg:left-[8%]" },
  { icon: "House", label: "Nexora Living", className: "right-[2%] top-[8%] lg:right-[6%]" },
  { icon: "ShieldCheck", label: "Nexora Gate", className: "left-[10%] bottom-[10%] lg:left-[14%]" },
  { icon: "Users", label: "Built for Communities", className: "right-[4%] bottom-[16%] lg:right-[10%]" },
];

export default function Hero({ backgroundSrc = null }: { backgroundSrc?: string | null }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Background layers */}
      {backgroundSrc ? (
        <>
          <Image
            src={backgroundSrc}
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/95" aria-hidden="true" />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand-solid/50 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[8%] h-[420px] w-[420px] rounded-full bg-accent/15 blur-[110px]" />

        {!shouldReduceMotion &&
          floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              className={`absolute hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md md:flex ${card.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -14, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 + i * 0.15 },
                y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
              }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-solid to-brand-light">
                <Icon name={card.icon} className="h-4 w-4 text-white" />
              </span>
              <span className="text-xs font-medium text-white/80">{card.label}</span>
            </motion.div>
          ))}
      </div>

      <Container className="relative flex min-h-[88vh] flex-col items-center justify-center py-32 text-center sm:min-h-[92vh]">
        <motion.span
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70"
        >
          {company.type}
        </motion.span>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-lg text-white/70 sm:text-xl"
        >
          {hero.subheading}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary" className="!bg-white/5 !text-white !border-white/15 hover:!bg-white/10">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
