import { products } from "@/content/products";

// Oversized outlined type drifting in opposite directions — pure decoration.
export default function BigMarquee() {
  const names = products.map((p) => p.name);
  const row = [...names, ...names, ...names, ...names];

  const renderRow = (reverse: boolean) => (
    <div className={`flex w-max gap-10 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} motion-reduce:animate-none`}>
      {row.map((name, i) => (
        <span key={`${name}-${i}`} className="flex items-center gap-10 whitespace-nowrap font-display text-7xl font-bold sm:text-8xl lg:text-[9rem]">
          <span className="text-transparent [-webkit-text-stroke:1.5px_var(--border)] transition-colors hover:[-webkit-text-stroke-color:var(--brand)]">
            {name}
          </span>
          <span className="text-3xl text-brand/40 sm:text-4xl lg:text-5xl">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden py-10 select-none" aria-hidden="true">
      {renderRow(false)}
      <div className="mt-2">{renderRow(true)}</div>
    </div>
  );
}
