import type { Metadata } from "next";
import LeadershipHero from "@/components/sections/LeadershipHero";
import LeadershipTeam from "@/components/sections/LeadershipTeam";
import LeadershipValues from "@/components/sections/LeadershipValues";
import VisionMission from "@/components/sections/VisionMission";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.leadership.title,
  description: pageSeo.leadership.description,
};

export default function LeadershipPage() {
  return (
    <>
      <LeadershipHero />
      <LeadershipTeam />
      <LeadershipValues />
      <VisionMission />
      <ClientCta />
    </>
  );
}
