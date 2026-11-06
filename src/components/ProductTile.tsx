import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import Icon from "@/components/Icon";
import { localImage } from "@/lib/images";
import type { Product } from "@/content/products";

export default function ProductTile({ product, delay = 0 }: { product: Product; delay?: number }) {
  const photo = localImage(product.slug);

  return (
    <Reveal delay={delay} className="h-full">
      <Tilt className="h-full">
      <Link
        href={`/products/${product.slug}`}
        className="group relative flex h-full min-h-[30rem] flex-col justify-between overflow-hidden rounded-card border border-border bg-gradient-to-br from-brand/25 via-surface-alt to-brand-light/20 p-6 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted"
      >
        {photo ? (
          <Image
            src={photo}
            alt={`${product.name} — ${product.category}`}
            fill
            quality={80}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Icon name={product.icon} className="absolute right-6 top-1/3 h-24 w-24 text-brand/30" aria-hidden="true" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" aria-hidden="true" />

        <div className="relative flex items-start justify-between">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider backdrop-blur">
            {product.category}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-brand-solid">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <div className="relative">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light shadow-glow">
            <Icon name={product.icon} className="h-6 w-6" />
          </span>
          <h3 className="mt-4 font-display text-2xl font-semibold">{product.name}</h3>
          <p className="mt-2 text-sm text-white/80">{product.description}</p>
          <ul className="mt-4 space-y-1.5 border-t border-white/15 pt-4">
            {product.features.slice(0, 3).map((feature, i) => (
              <li key={`${i}-${feature}`} className="flex items-start gap-2 text-xs text-white/85">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-light" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Link>
      </Tilt>
    </Reveal>
  );
}
