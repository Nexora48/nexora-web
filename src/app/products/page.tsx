import type { Metadata } from "next";
import ProductsHero from "@/components/sections/ProductsHero";
import ProductShowcase from "@/components/sections/ProductShowcase";
import ProductsTogether from "@/components/sections/ProductsTogether";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.products.title,
  description: pageSeo.products.description,
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductShowcase />
      <ProductsTogether />
      <ClientCta />
    </>
  );
}
