import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import ClientCta from "@/components/sections/ClientCta";
import { products } from "@/content/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Nexora Pvt`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <PageHeader eyebrow={product.category} heading={product.name} subheading={product.description} />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <h2 className="font-display text-2xl font-semibold">Overview</h2>
              <p className="mt-4 text-muted">{product.longDescription}</p>

              <h2 className="mt-10 font-display text-2xl font-semibold">Key Features</h2>
              <ul className="mt-4 space-y-3">
                {product.features.map((feature, i) => (
                  <li key={`${i}-${feature}`} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-card border border-border bg-surface p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold">Interested in this product?</h3>
                <p className="mt-2 text-sm text-muted">
                  Get in touch to learn more or discuss how it could fit your organization.
                </p>
                <Button href="/contact" className="mt-5 w-full justify-center">
                  Talk to Nexora
                </Button>
                <Button href="/products" variant="ghost" className="mt-2 w-full justify-center">
                  Back to Products
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ClientCta />
    </>
  );
}
