"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { features } from "@/content/features";
import { products } from "@/content/products";
import { cn } from "@/lib/utils";

const ALL = "all";

export default function FeaturesExplorer() {
  const [active, setActive] = useState<string>(ALL);

  const tabs = [{ slug: ALL, label: "All features", icon: "LayoutGrid" }, ...products.map((p) => ({ slug: p.slug, label: p.name, icon: p.icon }))];

  const visible = useMemo(() => {
    if (active === ALL) return features;
    const product = products.find((p) => p.slug === active);
    return features.filter((f) => product?.featureSlugs.includes(f.slug));
  }, [active]);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div role="tablist" aria-label="Filter features by product" className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => {
            const selected = active === tab.slug;
            return (
              <button
                key={tab.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(tab.slug)}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                  selected
                    ? "border-brand-solid bg-brand-solid text-white shadow-glow"
                    : "border-border bg-surface text-muted hover:border-brand/40 hover:text-foreground"
                )}
              >
                <Icon name={tab.icon} className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "feature" : "features"}
        </p>

        <div key={active} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((feature, i) => {
            const inProducts = products.filter((p) => p.featureSlugs.includes(feature.slug));
            return (
              <Reveal key={feature.slug} delay={(i % 3) * 0.08} className="h-full">
                <article
                  id={feature.slug}
                  className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-card border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lifted"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-solid/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-solid to-brand-light text-white shadow-glow">
                    <Icon name={feature.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="relative mt-6 font-display text-xl font-semibold">{feature.title}</h2>
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
          })}
        </div>
      </Container>
    </section>
  );
}
