import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ImageMarquee from "@/components/ImageMarquee";
import ScrubText from "@/components/ScrubText";
import { about } from "@/content/about";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            About Nexora
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {about.heading}
          </h2>
          <ScrubText text={about.body} className="mt-6 text-lg text-foreground text-balance" />
        </Reveal>
      </Container>

      <Reveal delay={0.1} className="mt-14">
        <ImageMarquee />
      </Reveal>

      <Container>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.number} delay={i * 0.08}>
              <div className="h-full rounded-card border border-border bg-surface p-6 shadow-soft transition-shadow hover:shadow-lifted">
                <span className="font-display text-2xl font-semibold text-brand">{stat.number}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{stat.title}</h3>
                <p className="mt-2 text-sm text-muted">{stat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
