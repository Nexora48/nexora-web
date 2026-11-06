"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SocialIcon from "@/components/SocialIcon";
import { leaders, leadershipIntro } from "@/content/leadership";
import { cn } from "@/lib/utils";

const covers = [
  "from-brand-solid via-brand-solid-dark to-ink",
  "from-brand-solid-dark via-ink to-brand-solid",
  "from-ink via-brand-solid-dark to-brand-solid",
];

export default function LeadershipTeam({ showHeading = false, id }: { showHeading?: boolean; id?: string }) {
  const [active, setActive] = useState(0);

  return (
    <section id={id} className="py-16 sm:py-24">
      <Container>
        {showHeading ? (
          <div className="mb-14">
            <SectionHeading
              eyebrow="Leadership"
              heading={leadershipIntro.heading}
              subheading={leadershipIntro.subheading}
            />
          </div>
        ) : null}

        <Reveal>
          <div className="flex flex-col gap-4 md:h-[30rem] md:flex-row">
            {leaders.map((leader, i) => {
              const open = active === i;
              const links = Object.entries(leader.social).filter(([, href]) => href);
              return (
                <article
                  key={leader.slug}
                  tabIndex={0}
                  aria-label={`${leader.name}, ${leader.role}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative min-h-[22rem] cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br text-white shadow-soft outline-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:ring-2 focus-visible:ring-brand-light md:min-h-0",
                    covers[i % covers.length],
                    open ? "md:flex-[3] md:shadow-lifted" : "md:flex-[1]"
                  )}
                >
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand-light/35 blur-3xl animate-drift motion-reduce:animate-none" />
                  <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl animate-drift motion-reduce:animate-none [animation-delay:-4s]" />
                  <span
                    className="pointer-events-none absolute -bottom-10 -right-4 select-none font-display text-[16rem] font-bold leading-none text-white/[0.06]"
                    aria-hidden="true"
                  >
                    {leader.initials}
                  </span>

                  <div className="relative flex h-full flex-col justify-between gap-10 p-7">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 font-display text-3xl font-semibold shadow-lifted ring-8 ring-white/10 backdrop-blur"
                      aria-hidden="true"
                    >
                      {leader.initials}
                    </div>

                    {/* Collapsed label (desktop only) */}
                    <div
                      className={cn(
                        "pointer-events-none absolute bottom-7 left-7 hidden origin-bottom-left transition-opacity duration-300 md:block",
                        open ? "opacity-0" : "opacity-100 delay-300"
                      )}
                      aria-hidden="true"
                    >
                      <p className="font-display text-2xl font-semibold [writing-mode:vertical-rl] rotate-180">
                        {leader.name}
                      </p>
                    </div>

                    {/* Details */}
                    <div
                      className={cn(
                        "transition-all duration-500 md:w-[24rem]",
                        open ? "md:translate-y-0 md:opacity-100 md:delay-200" : "md:pointer-events-none md:translate-y-4 md:opacity-0"
                      )}
                    >
                      <span className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider backdrop-blur">
                        {leader.role}
                      </span>
                      {showHeading ? (
                        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{leader.name}</h3>
                      ) : (
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{leader.name}</h2>
                      )}
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">{leader.bio}</p>
                      {links.length > 0 ? (
                        <div className="mt-5 flex gap-2">
                          {links.map(([platform, href]) => (
                            <a
                              key={platform}
                              href={href}
                              aria-label={`${leader.name} on ${platform}`}
                              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                            >
                              <SocialIcon
                                name={platform.charAt(0).toUpperCase() + platform.slice(1)}
                                className="h-4 w-4"
                              />
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
