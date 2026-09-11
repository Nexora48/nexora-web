import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { services, servicesIntro } from "@/content/services";

export default function ServicesSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        {showHeading ? (
          <SectionHeading eyebrow="Services" heading={servicesIntro.heading} subheading={servicesIntro.subheading} />
        ) : null}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08} className="h-full">
              <Link
                href={`/services#${service.slug}`}
                id={service.slug}
                className="group flex h-full scroll-mt-28 flex-col rounded-card border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lifted"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/15 to-accent/10 text-brand transition-transform duration-300 group-hover:scale-105">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
