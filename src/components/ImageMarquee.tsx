import Icon from "@/components/Icon";

// Custom illustrated scene tiles (not stock photography or real portraits —
// see project brief) representing what Nexora Admin, Living and Gate cover
// day to day. Swap these for real product screenshots/photography whenever
// they're supplied.
const scenes = [
  { icon: "Building2", label: "Modern Residences" },
  { icon: "ShieldCheck", label: "Secure Gate Access" },
  { icon: "House", label: "Connected Living" },
  { icon: "LayoutDashboard", label: "Society Management" },
  { icon: "Users", label: "Community Collaboration" },
  { icon: "Bell", label: "Instant Notices" },
  { icon: "CreditCard", label: "Simple Payments" },
  { icon: "Car", label: "Visitor & Vehicle Tracking" },
];

const gradients = [
  "from-brand/25 via-surface-alt to-brand-light/15",
  "from-brand-light/25 via-surface-alt to-brand/15",
  "from-brand/20 via-surface-alt to-accent/10",
  "from-brand-light/15 via-surface-alt to-accent/15",
];

export default function ImageMarquee() {
  const track = [...scenes, ...scenes];

  return (
    <div
      className="group relative w-full overflow-hidden py-2"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {track.map((scene, i) => (
          <div
            key={`${scene.label}-${i}`}
            aria-hidden={i >= scenes.length}
            className={`flex h-40 w-56 shrink-0 flex-col items-center justify-center gap-3 rounded-card border border-border bg-gradient-to-br ${gradients[i % gradients.length]} shadow-soft`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/70 shadow-soft">
              <Icon name={scene.icon} className="h-7 w-7 text-brand" />
            </span>
            <span className="text-xs font-medium text-muted">{scene.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
