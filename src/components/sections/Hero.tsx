"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, CalendarCheck, ShieldCheck, X } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { hero } from "@/content/hero";
import { company } from "@/content/company";
import { products } from "@/content/products";

type HeroProps = { backgroundSrc?: string | null; visualSrc?: string | null };

const ACCENT_PHRASE = "Digital Products";

export default function Hero({ backgroundSrc = null, visualSrc = null }: HeroProps) {
  const reduce = useReducedMotion();
  const [before, after] = hero.headline.includes(ACCENT_PHRASE)
    ? hero.headline.split(ACCENT_PHRASE)
    : [hero.headline, null];

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

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {backgroundSrc ? (
        <>
          <Image src={backgroundSrc} alt="" fill priority quality={80} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -left-24 top-24 h-[480px] w-[480px] rounded-full bg-brand-solid/45 blur-[130px]" />
        <div className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <Container className="relative grid min-h-[92vh] items-center gap-14 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.span
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" aria-hidden="true" />
            {company.type}
          </motion.span>

          <motion.h1
            {...rise(0.1)}
            className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {before}
            {after !== null ? (
              <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">
                {ACCENT_PHRASE}
              </span>
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
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
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
            {...float(1.2, 12)}
            className="absolute -right-3 top-1/3 w-56 rounded-2xl border border-white/15 bg-ink/70 p-4 shadow-lifted backdrop-blur-xl sm:-right-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <CalendarCheck className="h-5 w-5 text-brand-light" />
              </span>
              <div>
                <p className="text-sm font-semibold">Clubhouse booked</p>
                <p className="text-xs text-white/60">Confirmed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...float(2.1, 8)}
            className="absolute -bottom-5 left-6 w-60 rounded-2xl border border-white/15 bg-ink/70 p-4 shadow-lifted backdrop-blur-xl sm:left-10"
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
        </motion.div>
      </Container>
    </section>
  );
}
