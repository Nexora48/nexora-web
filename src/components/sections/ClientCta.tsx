import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { localImage } from "@/lib/images";
import { clientCta } from "@/content/cta";
import { products } from "@/content/products";

export default function ClientCta() {
  const photo = localImage("balcony-night");

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-lifted sm:p-12 lg:p-16">
            {photo ? (
              <>
                <Image src={photo} alt="" fill quality={75} sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-brand-solid-dark/70" aria-hidden="true" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-brand-solid-dark via-ink to-ink" aria-hidden="true" />
            )}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-brand-solid/50 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-[240px] w-[240px] rounded-full bg-accent/15 blur-[100px]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
              <div className="lg:col-span-3">
                <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {clientCta.heading}
                </h2>
                <p className="mt-5 max-w-xl text-balance text-lg text-white/75">{clientCta.body}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={clientCta.primaryCta.href} className="!bg-white !text-brand-solid-dark hover:!bg-white/90">
                    {clientCta.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    href={clientCta.secondaryCta.href}
                    variant="secondary"
                    className="!border-white/25 !bg-white/10 !text-white hover:!bg-white/20"
                  >
                    {clientCta.secondaryCta.label}
                  </Button>
                </div>
              </div>

              <ul className="space-y-3 lg:col-span-2">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:border-brand-light/40 hover:bg-white/10"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light shadow-glow">
                        <Icon name={product.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-base font-semibold">{product.name}</span>
                        <span className="block text-xs text-white/60">{product.category}</span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-white/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
