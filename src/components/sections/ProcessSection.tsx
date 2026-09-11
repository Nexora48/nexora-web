import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { processIntro, processSteps } from "@/content/process";

export default function ProcessSection() {
  return (
    <section id="process" className="bg-surface/40 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Our Process" heading={processIntro.heading} />

        <ol className="relative mx-auto mt-16 max-w-3xl">
          <div
            className="absolute left-7 top-2 h-[calc(100%-2rem)] w-px bg-border"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={(i % 4) * 0.06} className="relative flex gap-6 pb-10 last:pb-0">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-background font-display text-lg font-semibold text-brand shadow-soft">
                {step.number}
              </span>
              <div className="flex-1 rounded-card border border-border bg-background p-5 shadow-soft">
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
