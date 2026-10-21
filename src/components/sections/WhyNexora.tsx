import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { whyNexoraIntro, whyNexoraReasons } from "@/content/whyNexora";

export default function WhyNexora() {
  return (
    <section id="why-nexora" className="bg-surface/40 py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Why Nexora" heading={whyNexoraIntro.heading} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyNexoraReasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-card border border-border bg-background p-7 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon name={reason.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm text-muted">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
