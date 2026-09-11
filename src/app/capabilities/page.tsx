import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";
import { capabilitiesIntro } from "@/content/capabilities";

export const metadata: Metadata = {
  title: pageSeo.capabilities.title,
  description: pageSeo.capabilities.description,
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        heading={capabilitiesIntro.heading}
        subheading={capabilitiesIntro.subheading}
      />
      <CapabilitiesSection showHeading={false} />
      <ProcessSection />
      <ClientCta />
    </>
  );
}
