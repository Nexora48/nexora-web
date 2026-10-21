import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SocialIcon from "@/components/SocialIcon";
import { leaders, leadershipIntro, type Leader } from "@/content/leadership";

function Socials({ leader }: { leader: Leader }) {
  const links = Object.entries(leader.social).filter(([, href]) => href);
  if (links.length === 0) return null;
  return (
    <div className="mt-5 flex gap-2">
      {links.map(([platform, href]) => (
        <a
          key={platform}
          href={href}
          aria-label={`${leader.name} on ${platform}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand/40 hover:text-brand"
        >
          <SocialIcon name={platform.charAt(0).toUpperCase() + platform.slice(1)} className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

export default function LeadershipTeam({ showHeading = false, id }: { showHeading?: boolean; id?: string }) {
  const [lead, ...others] = leaders;

  return (
    <section id={id} className="py-16 sm:py-24">
      <Container>
        {showHeading ? (
          <div className="mb-12">
            <SectionHeading
              eyebrow="Leadership"
              heading={leadershipIntro.heading}
              subheading={leadershipIntro.subheading}
            />
          </div>
        ) : null}
        {lead ? (
          <Reveal>
            <article className="relative overflow-hidden rounded-card border border-border bg-surface p-8 shadow-lifted sm:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-solid/15 blur-3xl" />
              <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
                <div
                  className="flex h-36 w-36 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-solid to-brand-light font-display text-6xl font-semibold text-white shadow-glow sm:h-44 sm:w-44 sm:text-7xl"
                  aria-hidden="true"
                >
                  {lead.initials}
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                    {lead.role}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{lead.name}</h2>
                  <p className="mt-4 max-w-2xl text-lg text-muted">{lead.bio}</p>
                  <Socials leader={lead} />
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {others.map((leader, i) => (
            <Reveal key={leader.slug} delay={(i + 1) * 0.08} className="h-full">
              <article className="flex h-full flex-col gap-6 rounded-card border border-border bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted sm:flex-row sm:items-start">
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-solid to-brand-light font-display text-3xl font-semibold text-white shadow-glow"
                  aria-hidden="true"
                >
                  {leader.initials}
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
                    {leader.role}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{leader.name}</h3>
                  <p className="mt-3 text-sm text-muted">{leader.bio}</p>
                  <Socials leader={leader} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
