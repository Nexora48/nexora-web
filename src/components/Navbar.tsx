"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { navLinks, navCta } from "@/content/navigation";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const reduceMotion = useReducedMotion();

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const activeLink = navLinks.find((l) => isActive(pathname, l.href))?.href ?? null;
  const highlighted = hovered ?? activeLink;

  return (
    // Fixed-height wrapper pulled over the page top so heroes slide under the floating bar.
    <header className="sticky top-0 z-50 -mb-[76px] h-[76px] px-3 pt-3 sm:px-6">
      <div className="relative mx-auto max-w-7xl">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border pl-4 pr-2 backdrop-blur-xl transition-all duration-300 sm:pl-5",
            scrolled
              ? "h-14 border-border bg-background/85 shadow-lifted"
              : "h-16 border-border/60 bg-background/65 shadow-soft"
          )}
        >
          <Logo />

          <nav className="hidden items-center lg:flex" aria-label="Primary" onMouseLeave={() => setHovered(null)}>
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={() => setHovered(link.href)}
                  onFocus={() => setHovered(link.href)}
                  onBlur={() => setHovered(null)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    highlighted === link.href ? "text-brand" : "text-muted"
                  )}
                >
                  {highlighted === link.href ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand/10"
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <div className="hidden lg:block">
              <Button href={navCta.href} className="!min-h-10 !px-5 !py-2 text-[13px]">
                {navCta.label}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-surface-alt lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              id="mobile-menu"
              initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-x-0 top-full mt-2 origin-top rounded-3xl border border-border bg-background/95 p-3 shadow-lifted backdrop-blur-xl lg:hidden"
            >
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-12 items-center justify-between rounded-2xl px-4 text-base font-medium transition-colors",
                        active ? "bg-brand/10 text-brand" : "text-foreground hover:bg-surface-alt"
                      )}
                    >
                      {link.label}
                      <ArrowRight className={cn("h-4 w-4", active ? "opacity-100" : "opacity-30")} aria-hidden="true" />
                    </Link>
                  );
                })}
              </nav>
              <Button href={navCta.href} className="mt-3 w-full justify-center">
                {navCta.label}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
