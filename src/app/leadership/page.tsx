import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";
import { leadershipIntro } from "@/content/leadership";

export const metadata: Metadata = {
  title: pageSeo.leadership.title,
  description: pageSeo.leadership.description,
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        heading={leadershipIntro.heading}
        subheading={leadershipIntro.subheading}
      />
      <LeadershipSection showHeading={false} />
      <ClientCta />
    </>
  );
}
