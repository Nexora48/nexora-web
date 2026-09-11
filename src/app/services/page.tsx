import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";
import { servicesIntro } from "@/content/services";

export const metadata: Metadata = {
  title: pageSeo.services.title,
  description: pageSeo.services.description,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" heading={servicesIntro.heading} subheading={servicesIntro.subheading} />
      <ServicesSection showHeading={false} />
      <ProcessSection />
      <ClientCta />
    </>
  );
}
