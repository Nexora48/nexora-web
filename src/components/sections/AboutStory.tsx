import Image from "next/image";
import Parallax from "@/components/Parallax";
import { CheckCircle2, Layers } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { localImage } from "@/lib/images";
import { aboutPage } from "@/content/about";

export default function AboutStory() {
  const photo = localImage("community");
  const { story } = aboutPage;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              {story.eyebrow}
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {story.heading}
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted">
              {story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {story.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-gradient-to-br from-brand/20 via-surface-alt to-brand-light/15 shadow-lifted">
              {photo ? (
                <Parallax>
                  <Image
                  src={photo}
                  alt="Residents enjoying a green community park"
                  fill
                  quality={80}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                </Parallax>
              ) : null}
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lifted backdrop-blur sm:left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-solid text-white">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold">{story.badge.title}</p>
                <p className="text-xs text-muted">{story.badge.subtitle}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
