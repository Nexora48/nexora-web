import { LayoutTemplate, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} className="group h-full">
      <a
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted"
      >
        <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-brand/20 via-surface-alt to-accent/15">
          <LayoutTemplate
            className="h-16 w-16 text-brand/40 transition-transform duration-500 group-hover:scale-110"
            aria-hidden="true"
          />
          <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium text-muted backdrop-blur">
            {project.categoryLabel}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold">{project.name}</h3>
          <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-surface-alt px-2.5 py-1 text-[11px] font-medium text-muted">
                {tech}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
            View Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}
