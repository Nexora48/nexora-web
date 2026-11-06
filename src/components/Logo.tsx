import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Temporary text-based wordmark + geometric mark for Nexora Pvt.
 * Isolated so a real logo file can replace this component later without
 * touching the Navbar/Footer that consume it.
 */
export default function Logo({ className, mark = "auto" }: { className?: string; mark?: "auto" | "light" }) {
  const textClass = mark === "light" ? "text-white" : "text-foreground";

  return (
    <Link href="/" className={cn("group flex min-h-11 items-center gap-2.5", className)} aria-label="Nexora Pvt — Home">
      <span
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light shadow-glow transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path d="M6 17V7l12 10V7" stroke="white" strokeWidth={2.1} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={cn("font-display text-lg font-semibold tracking-tight", textClass)}>
        NEXORA
        <span className="ml-1 text-xs font-medium tracking-widest text-muted align-super">PVT</span>
      </span>
    </Link>
  );
}
