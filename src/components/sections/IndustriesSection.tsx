import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { localImage } from "@/lib/images";
import { industries, industriesIntro } from "@/content/industries";

export default function IndustriesSection() {
  const photo = localImage("residence");

  return (
    <section id="industries" className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
      {photo ? (
        <>
          <Image src={photo} alt="" fill quality={75} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" aria-hidden="true" />
        </>
      ) : null}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-[320px] w-[320px] rounded-full bg-brand-solid/30 blur-[120px]" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            {industriesIntro.eyebrow}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {industriesIntro.heading}
          </h2>
          <p className="mt-4 text-balance text-lg text-white/70">{industriesIntro.subheading}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08} className="h-full">
              <div className="flex h-full items-center gap-4 rounded-card border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-brand-light/40 hover:bg-white/10">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light shadow-glow">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-base font-semibold leading-snug">{item.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
