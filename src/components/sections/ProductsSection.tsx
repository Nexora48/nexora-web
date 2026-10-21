import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ProductTile from "@/components/ProductTile";
import { products, productsIntro } from "@/content/products";

export default function ProductsSection({
  showViewAll = true,
  showHeading = true,
}: {
  showViewAll?: boolean;
  showHeading?: boolean;
}) {
  return (
    <section id="products" className="bg-surface/40 py-16 sm:py-24">
      <Container>
        {showHeading ? (
          <SectionHeading eyebrow="Products" heading={productsIntro.heading} subheading={productsIntro.subheading} />
        ) : null}
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">{productsIntro.body}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:[&>*:last-child]:col-span-2 lg:grid-cols-3 lg:[&>*:last-child]:col-span-1">
          {products.map((product, i) => (
            <ProductTile key={product.slug} product={product} delay={i * 0.08} />
          ))}
        </div>

        {showViewAll ? (
          <div className="mt-12 flex justify-center">
            <Button href="/products" variant="secondary">
              View All Products
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
