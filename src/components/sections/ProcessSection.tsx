import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { processIntro, processSteps } from "@/content/process";

export default function ProcessSection() {
  return (
    <section id="process" className="bg-surface/40 py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Our Process" heading={processIntro.heading} />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={(i % 4) * 0.06} className="h-full">
              <div className="flex h-full flex-col rounded-card border border-border bg-background p-6 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/30 bg-brand/5 font-display text-base font-semibold text-brand">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
