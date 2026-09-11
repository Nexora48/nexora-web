import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectsExplorer from "@/components/sections/ProjectsExplorer";
import ClientCta from "@/components/sections/ClientCta";
import { pageSeo } from "@/content/seo";
import { projectsIntro } from "@/content/projects";

export const metadata: Metadata = {
  title: pageSeo.projects.title,
  description: pageSeo.projects.description,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="Projects" heading={projectsIntro.heading} subheading={projectsIntro.subheading} />
      <ProjectsExplorer variant="full" showHeading={false} />
      <ClientCta />
    </>
  );
}
