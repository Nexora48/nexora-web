"use client";

import { useRef, type PointerEvent } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { hero } from "@/content/hero";
import { company } from "@/content/company";
import { products } from "@/content/products";
import { features } from "@/content/features";
import HeroVisual from "@/components/sections/HeroVisual";

type HeroProps = { backgroundSrc?: string | null };

export default function Hero({ backgroundSrc = null }: HeroProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const accent: string = hero.accent;
  const [before, after] =
    accent && hero.headline.includes(accent) ? hero.headline.split(accent) : [hero.headline, null];

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
        <motion.div {...rise(0.25)} className="w-full">
          <HeroVisual />
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
