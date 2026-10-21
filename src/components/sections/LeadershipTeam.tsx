import { Sparkles } from "lucide-react";
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

        <div className="grid gap-8 md:grid-cols-3">
          {leaders.map((leader, i) => {
            const links = Object.entries(leader.social).filter(([, href]) => href);
            const founder = i === 0;
            return (
              <Reveal key={leader.slug} delay={i * 0.1} className="h-full">
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-card border bg-surface transition-all duration-300 hover:-translate-y-2 hover:shadow-lifted",
                    founder ? "border-brand/40 shadow-glow" : "border-border shadow-soft"
                  )}
                >
                  <div className={cn("relative h-52 overflow-hidden bg-gradient-to-br", covers[i % covers.length])}>
                    <div
                      className="absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-light/40 blur-3xl animate-drift motion-reduce:animate-none" />
                    <div className="absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-accent/25 blur-3xl animate-drift motion-reduce:animate-none" />

                    <span className="absolute left-5 top-5 font-display text-sm font-semibold tracking-widest text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {founder ? (
                      <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        Founder
                      </span>
                    ) : null}

                    <div
                      className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 font-display text-5xl font-semibold text-white shadow-lifted ring-8 ring-white/10 backdrop-blur transition-transform duration-500 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {leader.initials}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-2xl font-semibold">{leader.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand">{leader.role}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{leader.bio}</p>

                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted">Nexora Leadership</span>
                      <div className="flex gap-2">
                        {links.map(([platform, href]) => (
                          <a
                            key={platform}
                            href={href}
                            aria-label={`${leader.name} on ${platform}`}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand/40 hover:text-brand"
                          >
                            <SocialIcon
                              name={platform.charAt(0).toUpperCase() + platform.slice(1)}
                              className="h-4 w-4"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
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
