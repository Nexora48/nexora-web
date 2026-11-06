import Image from "next/image";
import { Eye, Target } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ScrubText from "@/components/ScrubText";
import { localImage } from "@/lib/images";
import { company } from "@/content/company";

export default function VisionMission() {
  const photo = localImage("hero");
  const items = [
    { label: "Our Vision", text: company.vision, Icon: Eye },
    { label: "Our Mission", text: company.mission, Icon: Target },
  ];

  return (
    <section className="grain relative overflow-hidden bg-ink py-16 text-white sm:py-24">
      {photo ? (
        <>
          <Image src={photo} alt="" fill quality={75} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-ink/85" aria-hidden="true" />
        </>
      ) : null}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-brand-solid/40 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-[320px] w-[320px] rounded-full bg-accent/12 blur-[110px]" />

      <Container className="relative">
        <h2 className="sr-only">Our Vision &amp; Mission</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map(({ label, text, Icon: ItemIcon }, i) => (
            <Reveal key={label} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-card border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light shadow-glow">
                  <ItemIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xs font-medium uppercase tracking-wider text-accent">{label}</h3>
                <ScrubText text={text} className="mt-3 text-balance font-display text-2xl font-medium leading-snug sm:text-3xl" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
