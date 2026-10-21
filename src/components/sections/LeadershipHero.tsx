import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { localImage } from "@/lib/images";
import { leadershipIntro, leaders } from "@/content/leadership";

export default function LeadershipHero() {
  const photo = localImage("community");

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      {photo ? (
        <>
          <Image src={photo} alt="" fill priority quality={80} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/80 to-ink" aria-hidden="true" />
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
      <div className="pointer-events-none absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-brand-solid/40 blur-[120px]" />

      <Container className="relative text-center">
        <Reveal>
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            Leadership
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {leadershipIntro.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-white/75">{leadershipIntro.subheading}</p>
          <ul className="mt-9 flex flex-wrap justify-center gap-3">
            {leaders.map((leader) => (
              <li
                key={leader.slug}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur"
              >
                <span className="font-medium text-white">{leader.name}</span>
                <span className="text-white/60"> · {leader.role}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
