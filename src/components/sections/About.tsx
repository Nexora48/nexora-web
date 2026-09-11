import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { about } from "@/content/about";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              About Nexora
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {about.heading}
            </h2>
            <p className="mt-6 text-lg text-muted text-balance">{about.body}</p>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-gradient-to-br from-brand/10 via-surface to-accent/10 p-8">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="flex flex-col justify-between rounded-2xl bg-surface p-5 shadow-soft">
                  <span className="text-xs font-medium text-muted">Product Design</span>
                  <div className="h-16 rounded-lg bg-gradient-to-br from-brand/30 to-brand/5" />
                </div>
                <div className="flex flex-col justify-between rounded-2xl bg-surface p-5 shadow-soft translate-y-6">
                  <span className="text-xs font-medium text-muted">Engineering</span>
                  <div className="h-16 rounded-lg bg-gradient-to-br from-accent/30 to-accent/5" />
                </div>
                <div className="flex flex-col justify-between rounded-2xl bg-surface p-5 shadow-soft">
                  <span className="text-xs font-medium text-muted">Collaboration</span>
                  <div className="h-16 rounded-lg bg-gradient-to-br from-brand-light/30 to-brand-light/5" />
                </div>
                <div className="flex flex-col justify-between rounded-2xl bg-surface p-5 shadow-soft translate-y-6">
                  <span className="text-xs font-medium text-muted">Innovation</span>
                  <div className="h-16 rounded-lg bg-gradient-to-br from-brand/20 to-accent/10" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
