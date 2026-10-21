import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { aboutPage } from "@/content/about";
import { cn } from "@/lib/utils";

export default function AboutTimeline() {
  const { timeline } = aboutPage;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow={timeline.eyebrow} heading={timeline.heading} subheading={timeline.subheading} />

        <ol className="relative mx-auto mt-14 max-w-4xl">
          <div
            className="absolute bottom-2 left-6 top-2 w-px bg-gradient-to-b from-brand-solid/60 via-border to-brand-solid/60 md:left-1/2"
            aria-hidden="true"
          />
          {timeline.steps.map((step, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal as="li" key={step.title} delay={0.05} className="relative pb-10 last:pb-0">
                <span className="absolute left-6 top-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-solid to-brand-light text-white shadow-glow ring-4 ring-background md:left-1/2">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
                <div className="grid md:grid-cols-2">
                  <div className={cn("pl-16 md:pl-0", right ? "md:col-start-2 md:pl-14" : "md:pr-14")}>
                    <div className="rounded-card border border-border bg-surface p-6 shadow-soft transition-shadow hover:shadow-lifted">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-display text-sm font-semibold text-brand">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="rounded-full bg-brand/10 px-3 py-1 text-[11px] font-medium text-brand">
                          {step.product}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
                      <p className="mt-1.5 text-sm text-muted">{step.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
