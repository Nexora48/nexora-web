import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductHero from "@/components/sections/ProductHero";
import ProductCapabilities from "@/components/sections/ProductCapabilities";
import RelatedProducts from "@/components/sections/RelatedProducts";
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
      <ProductHero product={product} />
      <ProductCapabilities product={product} />
      <RelatedProducts currentSlug={product.slug} />
      <ClientCta />
    </>
  );
}
