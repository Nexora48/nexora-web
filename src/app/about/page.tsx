import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/sections/About";
import WhyNexora from "@/components/sections/WhyNexora";
import VisionMission from "@/components/sections/VisionMission";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Nexora"
        heading="A technology company built on product thinking."
        subheading="Nexora Pvt combines engineering, design and business understanding to build meaningful digital products and services."
      />
      <About />
      <WhyNexora />
      <VisionMission />
      <ClientCta />
    </>
  );
}
