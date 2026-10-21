import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/content/products";

export default function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const others = products.filter((p) => p.slug !== currentSlug);

  return (
    <section className="bg-surface/40 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Works with"
          heading="Part of one connected platform"
          subheading="Pair it with the rest of the Nexora suite."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {others.map((product, i) => (
            <ProductCard key={product.slug} product={product} delay={i * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
}
