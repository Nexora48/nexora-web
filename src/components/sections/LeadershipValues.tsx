import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { localImage } from "@/lib/images";
import { whyNexoraReasons } from "@/content/whyNexora";

// Photos are generic workplace scenes, not portraits of the founders.
const principles = [
  { reason: "Product Mindset", file: "team-planning", alt: "Colleagues planning an app on a whiteboard" },
  { reason: "User-Centered Design", file: "team-product", alt: "Hands holding a phone showing a community app" },
  { reason: "Quality Engineering", file: "team-workspace", alt: "A bright, modern team workspace" },
];

export default function LeadershipValues() {
  const items = principles
    .map((p) => ({ ...p, data: whyNexoraReasons.find((r) => r.title === p.reason), src: localImage(p.file) }))
    .filter((p): p is typeof p & { data: NonNullable<typeof p.data> } => Boolean(p.data));

  return (
    <section className="bg-surface/40 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          heading="The principles the team builds around"
          subheading="The same mindset runs through every product, from the first sketch to the last release."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.reason} delay={i * 0.1} className="h-full">
              <article className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-card border border-border bg-gradient-to-br from-brand/20 via-surface-alt to-brand-light/15 shadow-soft">
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    quality={80}
                    sizes="(min-width: 768px) 380px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" aria-hidden="true" />
                <div className="relative p-6 text-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light shadow-glow">
                    <Icon name={item.data.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{item.data.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{item.data.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
