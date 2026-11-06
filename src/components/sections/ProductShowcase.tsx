import Image from "next/image";
import Parallax from "@/components/Parallax";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { localImage } from "@/lib/images";
import { products } from "@/content/products";
import { cn } from "@/lib/utils";

export default function ProductShowcase() {
  return (
    <div>
      {products.map((product, i) => {
        const photo = localImage(product.slug);
        const flip = i % 2 === 1;
        return (
          <section
            key={product.slug}
            id={product.slug}
            className={cn("scroll-mt-20 py-16 sm:py-24", flip && "bg-surface/40")}
          >
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={cn("relative", flip && "lg:order-2")}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-gradient-to-br from-brand/20 via-surface-alt to-brand-light/15 shadow-lifted">
                    {photo ? (
                      <Parallax>
                        <Image
                        src={photo}
                        alt={`${product.name} — ${product.category}`}
                        fill
                        quality={80}
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover"
                      />
                      </Parallax>
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" aria-hidden="true" />
                  </div>
                  <span className="absolute -bottom-5 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-solid to-brand-light text-white shadow-glow ring-4 ring-background">
                    <Icon name={product.icon} className="h-7 w-7" />
                  </span>
                </Reveal>

                <Reveal delay={0.1} className={cn(flip && "lg:order-1")}>
                  <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                    {product.category}
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h2>
                  <p className="mt-4 text-lg text-muted">{product.longDescription}</p>
                  <ul className="mt-6 space-y-3">
                    {product.features.map((feature, j) => (
                      <li key={`${j}-${feature}`} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href={`/products/${product.slug}`}>
                      View {product.name}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button href="/contact" variant="secondary">
                      Talk to us
                    </Button>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
