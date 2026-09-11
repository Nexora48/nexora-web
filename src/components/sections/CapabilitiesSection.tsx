import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { capabilities, capabilitiesIntro } from "@/content/capabilities";

export default function CapabilitiesSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="capabilities" className="py-24 sm:py-32">
      <Container>
        {showHeading ? (
          <SectionHeading
            eyebrow="Capabilities"
            heading={capabilitiesIntro.heading}
            subheading={capabilitiesIntro.subheading}
          />
        ) : null}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, i) => (
            <Reveal key={capability.slug} delay={(i % 3) * 0.08} className="h-full">
              <Link
                href={`/capabilities#${capability.slug}`}
                id={capability.slug}
                className="flex h-full scroll-mt-28 flex-col rounded-card border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lifted"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/15 to-accent/10 text-brand">
                  <Icon name={capability.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{capability.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{capability.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
