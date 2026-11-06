import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
          {eyebrow}
        </span>
      ) : null}
      <SplitHeading text={heading} className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl" />
      {subheading ? (
        <p className="mt-4 text-lg text-muted text-balance">{subheading}</p>
      ) : null}
    </Reveal>
  );
}
