import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductsSection from "@/components/sections/ProductsSection";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";
import { productsIntro } from "@/content/products";

export const metadata: Metadata = {
  title: pageSeo.products.title,
  description: pageSeo.products.description,
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Products" heading={productsIntro.heading} subheading={productsIntro.subheading} />
      <ProductsSection showViewAll={false} showHeading={false} />
      <ClientCta />
    </>
  );
}
