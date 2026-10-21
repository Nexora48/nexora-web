import Image from "next/image";
import Icon from "@/components/Icon";
import { localImage } from "@/lib/images";

// Photo cards, used once the matching files exist in /public/images.
const photoScenes = [
  { file: "residence", label: "Modern Residences" },
  { file: "nexora-gate", label: "Secure Gate Access" },
  { file: "community", label: "Community Living" },
  { file: "nexora-admin", label: "Society Management" },
  { file: "amenities", label: "Shared Amenities" },
  { file: "nexora-living", label: "Connected Living" },
];

// Illustrated fallback tiles, used until real photos are added.
const iconScenes = [
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

type Card = { key: string; label: string; src: string | null; icon?: string; gradient: string };

export default function ImageMarquee() {
  const photos = photoScenes
    .map((scene) => ({ ...scene, src: localImage(scene.file) }))
    .filter((scene): scene is typeof scene & { src: string } => scene.src !== null);

  const usePhotos = photos.length >= 3;

  const base: Card[] = usePhotos
    ? photos.map((p, i) => ({ key: p.file, label: p.label, src: p.src, gradient: gradients[i % gradients.length] }))
    : iconScenes.map((s, i) => ({ key: s.label, label: s.label, src: null, icon: s.icon, gradient: gradients[i % gradients.length] }));

  const track = [...base, ...base];

  return (
    <div
      className="group relative w-full overflow-hidden py-2"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {track.map((card, i) => {
          const duplicate = i >= base.length;
          if (card.src) {
            return (
              <div
                key={`${card.key}-${i}`}
                aria-hidden={duplicate}
                className="relative h-52 w-80 shrink-0 overflow-hidden rounded-card border border-border shadow-soft"
              >
                <Image
                  src={card.src}
                  alt={duplicate ? "" : card.label}
                  fill
                  quality={75}
                  loading="eager"
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 text-sm font-medium text-white">{card.label}</span>
              </div>
            );
          }
          return (
            <div
              key={`${card.key}-${i}`}
              aria-hidden={duplicate}
              className={`flex h-40 w-56 shrink-0 flex-col items-center justify-center gap-3 rounded-card border border-border bg-gradient-to-br ${card.gradient} shadow-soft`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/70 shadow-soft">
                <Icon name={card.icon ?? "House"} className="h-7 w-7 text-brand" />
              </span>
              <span className="text-xs font-medium text-muted">{card.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
