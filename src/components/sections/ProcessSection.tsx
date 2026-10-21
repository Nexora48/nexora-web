import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { processIntro, processSteps } from "@/content/process";

export default function ProcessSection() {
  return (
    <section id="process" className="bg-surface/40 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          heading={processIntro.heading}
          subheading="Seven steps from the first conversation to a product that keeps improving."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={(i % 4) * 0.06} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-background p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lifted">
                <span
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-solid to-brand-light"
                  style={{ opacity: 0.35 + (i / (processSteps.length - 1)) * 0.65 }}
                  aria-hidden="true"
                />
                <span className="bg-gradient-to-br from-brand-solid to-brand-light bg-clip-text font-display text-5xl font-bold text-transparent">
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
