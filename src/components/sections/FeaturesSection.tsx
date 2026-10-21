import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import { features, featuresIntro } from "@/content/features";

export default function FeaturesSection({
  showHeading = true,
  showViewAll = true,
}: {
  showHeading?: boolean;
  showViewAll?: boolean;
}) {
  return (
    <section id="features" className="py-16 sm:py-24">
      <Container>
        {showHeading ? (
          <SectionHeading eyebrow="Features" heading={featuresIntro.heading} subheading={featuresIntro.subheading} />
        ) : null}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.slug} feature={feature} delay={(i % 3) * 0.08} />
          ))}
        </div>

        {showViewAll ? (
          <div className="mt-12 flex justify-center">
            <Button href="/features" variant="secondary">
              Explore all features
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
