import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { whyNexoraIntro, whyNexoraReasons } from "@/content/whyNexora";

export default function WhyNexora() {
  return (
    <section id="why-nexora" className="bg-surface/40 py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              Why Nexora
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {whyNexoraIntro.heading}
            </h2>
            <p className="mt-4 text-lg text-muted">
              Six reasons communities and the teams who run them choose the Nexora suite.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyNexoraReasons.map((reason, i) => (
              <Reveal key={reason.title} delay={(i % 2) * 0.08} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-card border border-border bg-background p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lifted">
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 font-display text-8xl font-bold text-brand/[0.07]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light text-white shadow-glow">
                    <Icon name={reason.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 font-display text-lg font-semibold">{reason.title}</h3>
                  <p className="relative mt-2 text-sm text-muted">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
