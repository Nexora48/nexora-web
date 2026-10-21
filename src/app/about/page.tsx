import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import AboutStory from "@/components/sections/AboutStory";
import AboutSuite from "@/components/sections/AboutSuite";
import WhyNexora from "@/components/sections/WhyNexora";
import VisionMission from "@/components/sections/VisionMission";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutSuite />
      <WhyNexora />
      <VisionMission />
      <LeadershipSection />
      <ClientCta />
    </>
  );
}
