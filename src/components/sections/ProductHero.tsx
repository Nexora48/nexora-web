import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { localImage } from "@/lib/images";
import type { Product } from "@/content/products";

export default function ProductHero({ product }: { product: Product }) {
  const photo = localImage(product.slug);

  return (
    <section className="grain relative overflow-hidden bg-ink pb-16 pt-28 text-white sm:pb-24 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-brand-solid/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-accent/12 blur-[110px]" />

      <Container className="relative">
        <Link
          href="/products"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All products
        </Link>

        <div className="mt-4 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              <Icon name={product.icon} className="h-3.5 w-3.5" />
              {product.category}
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">{product.description}</p>

            <ul className="mt-8 space-y-3">
              {product.features.map((feature, i) => (
                <li key={`${i}-${feature}`} className="flex items-start gap-3 text-sm text-white/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact">
                Talk to Nexora
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/features"
                variant="secondary"
                className="!border-white/15 !bg-white/5 !text-white hover:!bg-white/10"
              >
                See all features
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-white/10 bg-gradient-to-br from-brand/20 via-surface-alt to-brand-light/15 shadow-lifted">
              {photo ? (
                <Image
                  src={photo}
                  alt={`${product.name} — ${product.category}`}
                  fill
                  priority
                  quality={80}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" aria-hidden="true" />
            </div>
            <span className="absolute -bottom-5 right-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-solid to-brand-light text-white shadow-glow ring-4 ring-ink">
              <Icon name={product.icon} className="h-7 w-7" />
            </span>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
