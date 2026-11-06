import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { localImage } from "@/lib/images";
import { aboutPage } from "@/content/about";

export default function AboutHero() {
  const photo = localImage("township-aerial");
  const { hero } = aboutPage;

  return (
    <section className="grain relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      {photo ? (
        <>
          <Image src={photo} alt="" fill priority quality={80} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/50" aria-hidden="true" />
        </>
      ) : null}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[360px] rounded-full bg-brand-solid/40 blur-[120px]" />

      <Container className="relative">
        <Reveal className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            {hero.eyebrow}
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-white/75">{hero.subheading}</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {hero.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
