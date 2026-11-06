import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { products } from "@/content/products";
import { features } from "@/content/features";
import { processSteps } from "@/content/process";
import { industries } from "@/content/industries";

// Counts come straight from the site's own content, so they can never drift
// from what is actually listed (no invented statistics).
export default function StatsStrip() {
  const stats = [
    { value: products.length, label: "Connected apps" },
    { value: features.length, label: "Community features" },
    { value: industries.length, label: "Community types served" },
    { value: processSteps.length, label: "Steps from idea to scale" },
  ];

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border shadow-soft lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface p-6 text-center sm:p-8">
                <dt className="order-2 mt-2 text-sm text-muted">{s.label}</dt>
                <dd className="bg-gradient-to-br from-brand to-accent bg-clip-text font-display text-5xl font-bold text-transparent sm:text-6xl">
                  <CountUp to={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
