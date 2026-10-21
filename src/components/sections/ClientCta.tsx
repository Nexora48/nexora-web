import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { clientCta } from "@/content/cta";

export default function ClientCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-solid via-brand-solid-dark to-ink py-16 text-white sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute right-[-10%] top-[-30%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]" />

      <Container className="relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {clientCta.heading}
          </h2>
          <p className="mt-5 text-balance text-white/80">{clientCta.body}</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={clientCta.primaryCta.href} className="!bg-white !text-brand-solid-dark hover:!bg-white/90">
              {clientCta.primaryCta.label}
            </Button>
            <Button
              href={clientCta.secondaryCta.href}
              variant="secondary"
              className="!border-white/25 !bg-white/10 !text-white hover:!bg-white/20"
            >
              {clientCta.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
