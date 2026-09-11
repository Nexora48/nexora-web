import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import type { Product } from "@/content/products";

export default function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal delay={delay} className="group h-full">
      <a
        href={`/products/${product.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted"
      >
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-brand/15 via-surface-alt to-accent/15">
          <Icon
            name={product.icon}
            className="h-14 w-14 text-brand/50 transition-transform duration-500 group-hover:scale-110"
            aria-hidden="true"
          />
          <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium text-muted backdrop-blur">
            {product.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold">{product.name}</h3>
          <p className="mt-2 flex-1 text-sm text-muted">{product.description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
            View Product
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}
