import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { features, featuresIntro } from "@/content/features";

export default function FeaturesSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="features" className="py-16 sm:py-24">
      <Container>
        {showHeading ? (
          <SectionHeading eyebrow="Features" heading={featuresIntro.heading} subheading={featuresIntro.subheading} />
        ) : null}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.slug} delay={(i % 3) * 0.08} className="h-full">
              <div
                id={feature.slug}
                className="flex h-full scroll-mt-28 flex-col rounded-card border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lifted"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/15 to-brand-light/10 text-brand">
                  <Icon name={feature.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
