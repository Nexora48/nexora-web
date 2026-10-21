"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import FeatureCard from "@/components/FeatureCard";
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
        <h2 className="sr-only">Browse features by product</h2>
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
          {visible.map((feature, i) => (
            <FeatureCard key={feature.slug} feature={feature} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
}
