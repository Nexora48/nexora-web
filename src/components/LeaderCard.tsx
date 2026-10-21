import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/SocialIcon";
import type { Leader } from "@/content/leadership";

export default function LeaderCard({ leader, delay = 0 }: { leader: Leader; delay?: number }) {
  const socialLinks = Object.entries(leader.social).filter(([, href]) => href);

  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col items-center rounded-card border border-border bg-surface p-8 text-center shadow-soft transition-shadow hover:shadow-lifted">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-solid to-brand-light font-display text-3xl font-semibold text-white shadow-glow"
          aria-hidden="true"
        >
          {leader.initials}
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold">{leader.name}</h3>
        <p className="text-sm font-medium text-brand">{leader.role}</p>
        <p className="mt-3 text-sm text-muted">{leader.bio}</p>

        {socialLinks.length > 0 ? (
          <div className="mt-5 flex gap-2">
            {socialLinks.map(([platform, href]) => (
              <a
                key={platform}
                href={href}
                aria-label={`${leader.name} on ${platform}`}
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-alt hover:text-brand"
              >
                <SocialIcon name={platform.charAt(0).toUpperCase() + platform.slice(1)} className="h-4 w-4" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
