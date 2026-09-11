import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, LayoutTemplate, Clock } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import ClientCta from "@/components/sections/ClientCta";
import { processSteps } from "@/content/process";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Nexora Pvt Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <PageHeader eyebrow={project.categoryLabel} heading={project.name} subheading={project.description} />

      <section className="py-20">
        <Container>
          <Reveal className="flex aspect-[21/9] items-center justify-center overflow-hidden rounded-card border border-border bg-gradient-to-br from-brand/15 via-surface to-accent/15">
            <LayoutTemplate className="h-20 w-20 text-brand/40" aria-hidden="true" />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-2">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold">Challenge</h2>
                <p className="mt-4 text-muted">{project.challenge}</p>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="font-display text-2xl font-semibold">Solution</h2>
                <p className="mt-4 text-muted">{project.solution}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-display text-2xl font-semibold">Key Features</h2>
                <ul className="mt-4 space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={`${i}-${feature}`} className="flex items-start gap-3 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.15}>
                <h2 className="font-display text-2xl font-semibold">Screenshots</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="flex aspect-video items-center justify-center rounded-2xl border border-border bg-surface-alt"
                    >
                      <span className="text-xs text-muted">Screenshot placeholder</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <h2 className="font-display text-2xl font-semibold">Outcome</h2>
                {project.results ? (
                  <p className="mt-4 text-muted">{project.results}</p>
                ) : (
                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-border bg-surface px-5 py-4 text-sm text-muted">
                    <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    Results coming soon — measurable outcomes will be published once available.
                  </div>
                )}
              </Reveal>

              <Reveal delay={0.25}>
                <h2 className="font-display text-2xl font-semibold">Development Process</h2>
                <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                  {processSteps.map((step) => (
                    <li
                      key={step.number}
                      className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3 text-sm"
                    >
                      <span className="font-display font-semibold text-brand">{step.number}</span>
                      <span className="text-muted">{step.title}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:col-span-1">
              <div className="sticky top-28 rounded-card border border-border bg-surface p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold">Technology</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="mt-6 font-display text-lg font-semibold">Category</h3>
                <p className="mt-2 text-sm text-muted">{project.categoryLabel}</p>

                <Button href="/contact" className="mt-6 w-full justify-center">
                  Start a Similar Project
                </Button>
                <Button href="/projects" variant="ghost" className="mt-2 w-full justify-center">
                  Back to Projects
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ClientCta />
    </>
  );
}
