"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, X } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { hero } from "@/content/hero";
import { company } from "@/content/company";
import { products } from "@/content/products";
import { features } from "@/content/features";

type HeroProps = { backgroundSrc?: string | null; visualSrc?: string | null };

// Illustrative activity — shows the kind of events the suite handles. No real data.
const feed = [
  { icon: "ShieldCheck", title: "Visitor approved", sub: "Delivery · Main Gate" },
  { icon: "CalendarCheck", title: "Clubhouse booked", sub: "Saturday · Confirmed" },
  { icon: "CreditCard", title: "Maintenance paid", sub: "Receipt sent" },
  { icon: "Wrench", title: "Complaint resolved", sub: "Closed by the committee" },
  { icon: "Megaphone", title: "New notice posted", sub: "Sent to every household" },
  { icon: "Car", title: "Vehicle entry logged", sub: "Gate 2 · Resident" },
];

export default function Hero({ backgroundSrc = null, visualSrc = null }: HeroProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [tick, setTick] = useState(2);

  const accent: string = hero.accent;
  const [before, after] =
    accent && hero.headline.includes(accent) ? hero.headline.split(accent) : [hero.headline, null];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType !== "mouse" || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  const float = (delay: number, distance = 10) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -distance, 0] },
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay },
        };

  const rise = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay } };

  const visible = [tick, tick - 1, tick - 2];
  const ticker = [...features, ...features];

  return (
    <section
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="relative overflow-hidden bg-ink text-white"
      style={{ ["--mx" as string]: "70%", ["--my" as string]: "30%" }}
    >
      {backgroundSrc ? (
        <>
          <Image src={backgroundSrc} alt="" fill priority quality={80} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />
        </>
      ) : null}

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Slowly moving aurora */}
        <div className="absolute -left-24 top-24 h-[520px] w-[520px] rounded-full bg-brand-solid/45 blur-[130px] animate-drift motion-reduce:animate-none" />
        <div className="absolute -right-24 bottom-10 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[120px] animate-drift motion-reduce:animate-none [animation-delay:-4s]" />
        <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-brand-light/20 blur-[120px] animate-drift motion-reduce:animate-none [animation-delay:-7s]" />
        {/* Cursor spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(520px circle at var(--mx) var(--my), color-mix(in srgb, var(--brand-light) 18%, transparent), transparent 60%)",
          }}
        />
      </div>

      <Container className="relative grid min-h-[88vh] items-center gap-14 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.span
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-light" />
            </span>
            {company.type}
          </motion.span>

          <motion.h1
            {...rise(0.1)}
            className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]"
          >
            {before}
            {after !== null ? (
              <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">{accent}</span>
            ) : null}
            {after}
          </motion.h1>

          <motion.p {...rise(0.2)} className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl">
            {hero.subheading}
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              className="!border-white/15 !bg-white/5 !text-white hover:!bg-white/10"
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.ul {...rise(0.4)} className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            {products.map((product) => (
              <li key={product.slug} className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                  <Icon name={product.icon} className="h-4 w-4 text-brand-light" />
                </span>
                {product.name}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Decorative product preview — illustrative UI, no real data */}
        <motion.div {...rise(0.25)} className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-brand-solid/40 via-surface-alt/20 to-ink shadow-lifted">
            {visualSrc ? (
              <Image
                src={visualSrc}
                alt=""
                fill
                priority
                quality={80}
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
          </div>

          <motion.div
            {...float(0)}
            className="absolute -left-4 top-10 w-64 rounded-2xl border border-white/15 bg-ink/70 p-4 shadow-lifted backdrop-blur-xl sm:-left-10"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Visitor at the gate</p>
                <p className="text-xs text-white/60">Delivery · Main Gate</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-brand-solid py-2 text-xs font-medium">
                <Check className="h-3.5 w-3.5" /> Approve
              </span>
              <span className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-white/10 py-2 text-xs font-medium text-white/80">
                <X className="h-3.5 w-3.5" /> Decline
              </span>
            </div>
          </motion.div>

          <motion.div
            {...float(1.6, 12)}
            className="absolute -right-3 top-[42%] w-52 rounded-2xl border border-white/15 bg-ink/70 p-4 shadow-lifted backdrop-blur-xl sm:-right-8"
          >
            <p className="text-xs font-medium text-white/60">Society dashboard</p>
            <div className="mt-3 flex h-12 items-end gap-1.5">
              {[40, 65, 50, 85, 60, 95, 75].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-brand-solid to-brand-light"
                  style={{ height: `${h}%`, opacity: 0.55 + i * 0.07 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Live activity feed */}
          <div className="absolute -bottom-6 left-4 w-64 sm:left-8">
            <p className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light" /> Live activity
            </p>
            <ul className="relative space-y-2">
              <AnimatePresence initial={false} mode="popLayout">
                {visible.map((id, index) => {
                  const item = feed[((id % feed.length) + feed.length) % feed.length];
                  return (
                    <motion.li
                      key={id}
                      layout={!reduce}
                      initial={reduce ? false : { opacity: 0, y: -18, scale: 0.96 }}
                      animate={{ opacity: 1 - index * 0.28, y: 0, scale: 1 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      className="flex items-center gap-3 rounded-xl border border-white/15 bg-ink/80 px-3 py-2.5 backdrop-blur-xl"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <Icon name={item.icon} className="h-4 w-4 text-brand-light" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-xs font-semibold">{item.title}</span>
                        <span className="block truncate text-[11px] text-white/55">{item.sub}</span>
                      </span>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
          </div>
        </motion.div>
      </Container>

      {/* Feature ticker */}
      <div
        className="relative border-t border-white/10 bg-ink/50 py-4 backdrop-blur"
        style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
        aria-hidden="true"
      >
        <div className="flex w-max gap-4 animate-marquee motion-reduce:animate-none">
          {ticker.map((feature, i) => (
            <span
              key={`${feature.slug}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
            >
              <Icon name={feature.icon} className="h-4 w-4 text-brand-light" />
              {feature.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
