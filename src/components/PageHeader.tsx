import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  heading,
  subheading,
}: {
  eyebrow: string;
  heading: string;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-32 text-white sm:pb-28 sm:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-brand-solid/50 blur-[110px]" />

      <Container className="relative text-center">
        <Reveal>
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            {eyebrow}
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {heading}
          </h1>
          {subheading ? (
            <p className="mx-auto mt-5 max-w-2xl text-balance text-white/70">{subheading}</p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
