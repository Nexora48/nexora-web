"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { projectFilters, projects, projectsIntro } from "@/content/projects";
import { cn } from "@/lib/utils";

export default function ProjectsExplorer({
  variant = "featured",
  showHeading = true,
}: {
  variant?: "featured" | "full";
  showHeading?: boolean;
}) {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const visibleProjects = useMemo(() => {
    if (variant === "featured" || filter === "All") return projects;
    return projects.filter((project) => project.categories.includes(filter));
  }, [filter, variant]);

  return (
    <section id="projects" className="bg-surface/40 py-24 sm:py-32">
      <Container>
        {showHeading ? (
          <SectionHeading eyebrow="Projects" heading={projectsIntro.heading} subheading={projectsIntro.subheading} />
        ) : null}

        {variant === "full" ? (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {projectFilters.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={cn(
                  "min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  filter === category
                    ? "border-brand bg-brand text-white"
                    : "border-border bg-surface text-muted hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        ) : null}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={(i % 4) * 0.08} />
          ))}
        </div>

        {variant === "featured" ? (
          <div className="mt-12 flex justify-center">
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
