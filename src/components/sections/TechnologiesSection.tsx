import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { technologiesIntro, technologyCategories } from "@/content/technologies";

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Technology" heading={technologiesIntro.heading} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologyCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.08}>
              <div className="h-full rounded-card border border-border bg-surface p-6 shadow-soft">
                <h3 className="font-display text-base font-semibold text-brand">{category.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
