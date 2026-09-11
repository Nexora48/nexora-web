import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { industries, industriesIntro } from "@/content/industries";

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Industries" heading={industriesIntro.heading} />

        <Reveal delay={0.1} className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
            >
              {industry}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
