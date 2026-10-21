import type { Metadata } from "next";
import FeaturesHero from "@/components/sections/FeaturesHero";
import FeaturesExplorer from "@/components/sections/FeaturesExplorer";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.features.title,
  description: pageSeo.features.description,
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeaturesExplorer />
      <ClientCta />
    </>
  );
}
