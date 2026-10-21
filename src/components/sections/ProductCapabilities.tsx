import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { features } from "@/content/features";
import type { Product } from "@/content/products";

export default function ProductCapabilities({ product }: { product: Product }) {
  const items = product.featureSlugs
    .map((slug) => features.find((f) => f.slug === slug))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  if (items.length === 0) return null;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What it does"
          heading={`What ${product.name} does`}
          subheading={product.longDescription}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((feature, i) => (
            <Reveal key={feature.slug} delay={(i % 3) * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-card border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lifted">
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
