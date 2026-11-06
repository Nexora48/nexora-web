"use client";

import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ChevronRight, X } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Magnetic from "@/components/Magnetic";
import { hero } from "@/content/hero";
import { company } from "@/content/company";
import { products } from "@/content/products";
import { features } from "@/content/features";
import { cn } from "@/lib/utils";

// Illustrative events — shows what the suite handles. No real data.
const notifications = [
  { icon: "ShieldCheck", title: "Visitor approved", sub: "Delivery · Main Gate" },
  { icon: "CalendarCheck", title: "Clubhouse booked", sub: "Saturday · Confirmed" },
  { icon: "CreditCard", title: "Maintenance paid", sub: "Receipt sent" },
  { icon: "Wrench", title: "Complaint resolved", sub: "Closed by the committee" },
  { icon: "Megaphone", title: "New notice posted", sub: "Sent to every household" },
];

const dashBars = [
  { label: "Dues", bars: [35, 55, 45, 70, 60, 85] },
  { label: "Requests", bars: [60, 45, 70, 50, 40, 55] },
  { label: "Visitors", bars: [30, 50, 65, 55, 80, 70] },
];

const livingActions = [
  { icon: "CreditCard", label: "Pay dues" },
  { icon: "CalendarCheck", label: "Book clubhouse" },
  { icon: "Wrench", label: "Raise a request" },
];

function Tile({ className, children, delay = 0 }: { className?: string; children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-background/80 shadow-soft backdrop-blur-xl transition-shadow duration-300 hover:shadow-lifted",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default function Hero({ photoSrc = null }: { photoSrc?: string | null }) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [n, setN] = useState(0);

  const accent: string = hero.accent;
  const [before, after] =
    accent && hero.headline.includes(accent) ? hero.headline.split(accent) : [hero.headline, null];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setN((v) => v + 1), 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType !== "mouse" || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  const rise = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay } };

  const note = notifications[n % notifications.length];
  const ticker = [...features, ...features];

  return (
    <section
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="relative overflow-hidden bg-background"
      style={{ ["--mx" as string]: "70%", ["--my" as string]: "30%" }}
    >
      {/* Soft mesh background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-brand-light/25 blur-[120px] animate-drift motion-reduce:animate-none" />
        <div className="absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[120px] animate-drift motion-reduce:animate-none [animation-delay:-5s]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(480px circle at var(--mx) var(--my), color-mix(in srgb, var(--brand-light) 16%, transparent), transparent 60%)",
          }}
        />
      </div>

      <Container className="relative grid min-h-[90vh] items-center gap-14 pb-20 pt-36 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div>
          <motion.span
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-medium tracking-wide text-muted shadow-soft backdrop-blur"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {company.type}
          </motion.span>

          <motion.h1
            {...rise(0.1)}
            className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4.75rem]"
          >
            {before}
            {after !== null ? (
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">{accent}</span>
            ) : null}
            {after}
          </motion.h1>

          <motion.p {...rise(0.2)} className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            {hero.subheading}
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap gap-3">
            <Magnetic>
              <Button href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Magnetic>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.ul {...rise(0.4)} className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {products.map((product) => (
              <li key={product.slug} className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-surface">
                  <Icon name={product.icon} className="h-4 w-4 text-brand" />
                </span>
                {product.name}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Bento product preview — illustrative UI, no real data */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6" aria-hidden="true">
          {/* Photo */}
          <Tile delay={0.2} className="col-span-2 min-h-44 md:col-span-4">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/25 via-surface-alt to-brand-light/20" />
            {photoSrc ? (
              <Image
                src={photoSrc}
                alt=""
                fill
                priority
                quality={80}
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-white/70">Nexora suite</p>
                <p className="font-display text-lg font-semibold">Built for modern communities</p>
              </div>
              <span className="flex -space-x-2">
                {products.map((p) => (
                  <span
                    key={p.slug}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/80 bg-gradient-to-br from-brand-solid to-brand-light"
                  >
                    <Icon name={p.icon} className="h-3.5 w-3.5" />
                  </span>
                ))}
              </span>
            </div>
          </Tile>

          {/* Gate approval */}
          <Tile delay={0.3} className="col-span-2 p-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light text-white">
                <Icon name="ShieldCheck" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">Visitor at the gate</p>
                <p className="text-[10px] text-muted">Delivery · Main Gate</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-brand-solid py-1.5 text-[11px] font-medium text-white">
                <Check className="h-3 w-3" /> Approve
              </span>
              <span className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-surface-alt py-1.5 text-[11px] font-medium text-muted">
                <X className="h-3 w-3" /> Decline
              </span>
            </div>
          </Tile>

          {/* Admin dashboard */}
          <Tile delay={0.4} className="col-span-2 p-4 md:col-span-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-foreground">Nexora Admin</p>
              <span className="flex items-center gap-1 rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Live
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {dashBars.map((t) => (
                <div key={t.label} className="rounded-xl border border-border bg-surface p-2.5">
                  <p className="text-[10px] font-medium text-muted">{t.label}</p>
                  <div className="mt-2 flex h-10 items-end gap-1">
                    {t.bars.map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-solid to-brand-light"
                        style={{ height: `${h}%`, opacity: 0.45 + i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Tile>

          {/* Living app */}
          <Tile delay={0.5} className="col-span-2 p-4 md:row-span-2">
            <p className="text-[10px] text-muted">Good evening</p>
            <p className="font-display text-sm font-semibold text-foreground">Welcome home</p>
            <ul className="mt-3 space-y-2">
              {livingActions.map((a) => (
                <li key={a.label} className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-2.5 py-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10">
                    <Icon name={a.icon} className="h-3.5 w-3.5 text-brand" />
                  </span>
                  <span className="flex-1 text-[11px] font-medium text-foreground">{a.label}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-muted" />
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-brand">Nexora Living</p>
          </Tile>

          {/* Live notification */}
          <Tile delay={0.6} className="col-span-2 h-[72px] md:col-span-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={n % notifications.length}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 flex items-center gap-3 px-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light text-white">
                  <Icon name={note.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">{note.title}</span>
                  <span className="block truncate text-xs text-muted">{note.sub}</span>
                </span>
                <span className="ml-auto flex items-center gap-1.5 text-[11px] font-medium text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" /> just now
                </span>
              </motion.div>
            </AnimatePresence>
          </Tile>
        </div>
      </Container>

      {/* Feature ticker */}
      <div
        className="relative border-t border-border bg-surface/60 py-4 backdrop-blur"
        style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
        aria-hidden="true"
      >
        <div className="flex w-max gap-4 animate-marquee motion-reduce:animate-none">
          {ticker.map((feature, i) => (
            <span
              key={`${feature.slug}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted"
            >
              <Icon name={feature.icon} className="h-4 w-4 text-brand" />
              {feature.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
