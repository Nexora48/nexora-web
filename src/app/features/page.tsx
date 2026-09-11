import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";
import { featuresIntro } from "@/content/features";

export const metadata: Metadata = {
  title: pageSeo.features.title,
  description: pageSeo.features.description,
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader eyebrow="Features" heading={featuresIntro.heading} subheading={featuresIntro.subheading} />
      <FeaturesSection showHeading={false} />
      <ClientCta />
    </>
  );
}
