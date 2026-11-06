import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Spotlight from "@/components/Spotlight";
import { products } from "@/content/products";
import type { Feature } from "@/content/features";

export default function FeatureCard({ feature, delay = 0 }: { feature: Feature; delay?: number }) {
  const inProducts = products.filter((p) => p.featureSlugs.includes(feature.slug));

  return (
    <Reveal delay={delay} className="h-full">
      <article
        id={feature.slug}
        className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-card border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lifted"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-solid/10 blur-2xl" />
        <Spotlight />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-solid to-brand-light text-white shadow-glow">
          <Icon name={feature.icon} className="h-7 w-7" />
        </span>
        <h3 className="relative mt-6 font-display text-xl font-semibold">{feature.title}</h3>
        <p className="relative mt-2 flex-1 text-sm text-muted">{feature.description}</p>
        <div className="relative mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
          {inProducts.map((p) => (
            <span
              key={p.slug}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-medium text-brand"
            >
              <Icon name={p.icon} className="h-3 w-3" />
              {p.name}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
