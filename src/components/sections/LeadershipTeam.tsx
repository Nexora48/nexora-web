import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SocialIcon from "@/components/SocialIcon";
import { leaders, leadershipIntro, type Leader } from "@/content/leadership";
import { cn } from "@/lib/utils";

function Socials({ leader }: { leader: Leader }) {
  const links = Object.entries(leader.social).filter(([, href]) => href);
  if (links.length === 0) return null;
  return (
    <div className="mt-6 flex gap-2">
      {links.map(([platform, href]) => (
        <a
          key={platform}
          href={href}
          aria-label={`${leader.name} on ${platform}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand/50 hover:text-brand"
        >
          <SocialIcon name={platform.charAt(0).toUpperCase() + platform.slice(1)} className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

// Professional profile cards: theme-aware surfaces, one emerald accent,
// initials monogram (no portraits until real photos are supplied).
export default function LeadershipTeam({ showHeading = false, id }: { showHeading?: boolean; id?: string }) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <Container>
        {showHeading ? (
          <div className="mb-14">
            <SectionHeading eyebrow="Leadership" heading={leadershipIntro.heading} subheading={leadershipIntro.subheading} />
          </div>
        ) : null}

        <div className="grid gap-6 md:grid-cols-3">
          {leaders.map((leader, i) => {
            const founder = i === 0;
            return (
              <Reveal key={leader.slug} delay={i * 0.08} className="h-full">
                <article
                  className={cn(
                    "group relative flex h-full flex-col rounded-3xl border bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted",
                    founder ? "border-brand/40" : "border-border"
                  )}
                >
                  <span
                    className={cn(
                      "absolute inset-x-8 top-0 h-px",
                      founder ? "bg-gradient-to-r from-transparent via-brand to-transparent" : "bg-transparent"
                    )}
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-display text-2xl font-semibold",
                        founder ? "bg-brand text-background" : "bg-surface-alt text-brand"
                      )}
                      aria-hidden="true"
                    >
                      {leader.initials}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{leader.name}</h3>
                      <p className="mt-0.5 text-sm font-medium text-brand">{leader.role}</p>
                    </div>
                  </div>

                  <p className="mt-6 flex-1 text-sm leading-relaxed text-muted">{leader.bio}</p>

                  <Socials leader={leader} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
