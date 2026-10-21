import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { products } from "@/content/products";
import { aboutPage } from "@/content/about";

export default function AboutSuite() {
  const { suite } = aboutPage;

  return (
    <section className="bg-surface/40 py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow={suite.eyebrow} heading={suite.heading} subheading={suite.subheading} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.08} className="h-full">
              <Link
                href={`/products/${product.slug}`}
                className="group flex h-full flex-col rounded-card border border-border bg-background p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lifted"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light text-white shadow-glow">
                  <Icon name={product.icon} className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-brand">{product.category}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{product.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
