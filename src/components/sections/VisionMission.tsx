import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { company } from "@/content/company";

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b12] py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-brand/30 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-[320px] w-[320px] rounded-full bg-accent/20 blur-[110px]" />

      <Container className="relative">
        <h2 className="sr-only">Our Vision &amp; Mission</h2>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              Our Vision
            </h3>
            <p className="mt-6 text-balance font-display text-2xl font-medium leading-snug sm:text-3xl">
              {company.vision}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              Our Mission
            </h3>
            <p className="mt-6 text-balance font-display text-2xl font-medium leading-snug sm:text-3xl">
              {company.mission}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
