"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import Icon from "@/components/Icon";

// Illustrative product UI built in code (no real data). Designed on a fixed
// 560x560 stage and scaled to fit its container so it stays crisp everywhere.
const STAGE = 560;

const notifications = [
  { icon: "ShieldCheck", title: "Visitor approved", sub: "Delivery · Main Gate" },
  { icon: "CalendarCheck", title: "Clubhouse booked", sub: "Saturday · Confirmed" },
  { icon: "CreditCard", title: "Maintenance paid", sub: "Receipt sent" },
  { icon: "Wrench", title: "Complaint resolved", sub: "Closed by the committee" },
  { icon: "Megaphone", title: "New notice posted", sub: "Sent to every household" },
];

const tiles = [
  { label: "Dues", bars: [35, 55, 45, 70, 60, 85] },
  { label: "Requests", bars: [60, 45, 70, 50, 40, 55] },
  { label: "Visitors", bars: [30, 50, 65, 55, 80, 70] },
];

const rows = [
  { icon: "CreditCard", text: "Maintenance billing", status: "On track" },
  { icon: "ShieldCheck", text: "Visitor approvals", status: "Up to date" },
  { icon: "Wrench", text: "Service requests", status: "In review" },
];

const quick = [
  { icon: "ShieldCheck", label: "Gate" },
  { icon: "CalendarCheck", label: "Book" },
  { icon: "CreditCard", label: "Pay" },
  { icon: "Wrench", label: "Help" },
];

export default function HeroVisual() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [n, setN] = useState(0);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / STAGE);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setN((v) => v + 1), 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const bob = (delay: number, d: number) =>
    reduce ? {} : { animate: { y: [0, -d, 0] }, transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay } };

  const note = notifications[n % notifications.length];

  return (
    <div ref={wrapRef} className="relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden="true">
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: STAGE, height: STAGE, transform: `scale(${scale})` }}
      >
        {/* Glow */}
        <div className="absolute left-16 top-16 h-80 w-80 rounded-full bg-brand-solid/50 blur-[90px]" />
        <div className="absolute bottom-10 right-6 h-56 w-56 rounded-full bg-accent/20 blur-[90px]" />

        {/* Admin dashboard window */}
        <motion.div
          {...bob(1.2, 8)}
          className="absolute right-0 top-6 h-[340px] w-[450px] overflow-hidden rounded-2xl border border-white/15 bg-ink/80 shadow-lifted backdrop-blur-xl"
        >
          <div className="flex h-9 items-center justify-between border-b border-white/10 px-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[11px] font-medium text-white/70">Nexora Admin</span>
            <span className="flex items-center gap-1 rounded-full bg-brand-solid/30 px-2 py-0.5 text-[9px] font-medium text-brand-light">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light" /> Live
            </span>
          </div>

          <div className="p-4 pl-[150px]">
            <div className="grid grid-cols-3 gap-3">
              {tiles.map((t) => (
                <div key={t.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-[10px] font-medium text-white/60">{t.label}</p>
                  <div className="mt-2 flex h-9 items-end gap-1">
                    {t.bars.map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-solid to-brand-light"
                        style={{ height: `${h}%`, opacity: 0.5 + i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-3 space-y-2">
              {rows.map((r) => (
                <li key={r.text} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                    <Icon name={r.icon} className="h-3.5 w-3.5 text-brand-light" />
                  </span>
                  <span className="flex-1 text-[11px] font-medium text-white/85">{r.text}</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-medium text-white/70">{r.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Nexora Living phone */}
        <motion.div
          {...bob(0, 10)}
          className="absolute bottom-0 left-0 h-[410px] w-[212px] rounded-[38px] border-[6px] border-white/15 bg-gradient-to-b from-[#12213a] to-ink p-3.5 shadow-lifted"
        >
          <div className="mx-auto h-4 w-16 rounded-full bg-black/60" />
          <p className="mt-3 text-[10px] text-white/50">Good evening</p>
          <p className="font-display text-base font-semibold">Welcome home</p>

          <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.07] p-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-solid to-brand-light">
                <Icon name="ShieldCheck" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] font-semibold">Delivery at the gate</p>
                <p className="text-[9px] text-white/55">Main Gate</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-brand-solid py-1.5 text-[10px] font-medium">
                <Check className="h-3 w-3" /> Approve
              </span>
              <span className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-white/10 py-1.5 text-[10px] font-medium text-white/80">
                <X className="h-3 w-3" /> Decline
              </span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2">
            {quick.map((q) => (
              <div key={q.label} className="flex flex-col items-center gap-1">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                  <Icon name={q.icon} className="h-4 w-4 text-brand-light" />
                </span>
                <span className="text-[8px] text-white/60">{q.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
              <Icon name="Megaphone" className="h-3.5 w-3.5 text-brand-light" />
            </span>
            <div>
              <p className="text-[10px] font-semibold">Community notice</p>
              <p className="text-[8px] text-white/50">Posted by the committee</p>
            </div>
          </div>
        </motion.div>

        {/* Cycling notification */}
        <div className="absolute bottom-6 right-2 h-[60px] w-[270px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={n % notifications.length}
              initial={reduce ? false : { opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 flex items-center gap-3 rounded-2xl border border-white/15 bg-ink/85 px-4 shadow-lifted backdrop-blur-xl"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light">
                <Icon name={note.icon} className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold">{note.title}</span>
                <span className="block truncate text-[10px] text-white/60">{note.sub}</span>
              </span>
              <span className="ml-auto flex items-center gap-1 text-[9px] text-brand-light">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-light" /> now
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
