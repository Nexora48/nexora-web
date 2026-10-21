import { Fragment } from "react";
import { Link2 } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { products, productsPage } from "@/content/products";

export default function ProductsTogether() {
  const { together } = productsPage;
  const order = ["nexora-gate", "nexora-living", "nexora-admin"];
  const chain = order.map((slug) => products.find((p) => p.slug === slug)!).filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute -right-20 top-0 h-[320px] w-[320px] rounded-full bg-brand-solid/40 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[260px] w-[260px] rounded-full bg-accent/12 blur-[110px]" />
      <Container className="relative text-center">
        <Reveal>
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            {together.eyebrow}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {together.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-white/70">{together.body}</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 md:flex-row md:justify-between">
          {chain.map((product, i) => (
            <Fragment key={product.slug}>
              <div className="flex w-full flex-col items-center rounded-card border border-white/10 bg-white/5 px-6 py-6 backdrop-blur md:w-52">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light">
                  <Icon name={product.icon} className="h-6 w-6" />
                </span>
                <p className="mt-3 font-display text-base font-semibold">{product.name}</p>
                <p className="text-xs text-white/60">{product.category}</p>
              </div>
              {i < chain.length - 1 ? (
                <Link2 className="h-6 w-6 shrink-0 rotate-90 text-brand-light md:rotate-0" aria-hidden="true" />
              ) : null}
            </Fragment>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
