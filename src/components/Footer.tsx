import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SocialIcon from "@/components/SocialIcon";
import BackToTop from "@/components/BackToTop";
import { company } from "@/content/company";
import { footerColumns, footerSocial } from "@/content/footer";

export default function Footer() {
  const year = new Date().getFullYear();
  const linkColumns = footerColumns.filter((c) => c.title !== "Legal");
  const legal = footerColumns.find((c) => c.title === "Legal");

  return (
    <footer className="grain relative overflow-hidden bg-ink text-white/70">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light/60 to-transparent"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-24 top-10 h-[300px] w-[300px] rounded-full bg-brand-solid/25 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[260px] w-[260px] rounded-full bg-accent/10 blur-[110px]" />

      <Container className="relative grid gap-14 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo mark="light" />
          <p className="mt-6 max-w-sm font-display text-xl font-medium leading-snug text-white">
            {company.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Nexora Admin, Living and Gate — one connected platform for residential communities.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact">
              Talk to Nexora
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/products"
              variant="secondary"
              className="!border-white/15 !bg-white/5 !text-white hover:!bg-white/10"
            >
              Explore products
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-white/60 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-brand-light transition-all duration-300 group-hover:mr-2 group-hover:w-3" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-5 py-6 lg:flex-row">
          <p className="text-xs text-white/50">
            © {year} {company.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legal?.links.map((link) => (
              <Link key={link.label} href={link.href} className="text-xs text-white/50 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {footerSocial.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-brand-light/50 hover:bg-white/10 hover:text-white"
              >
                <SocialIcon name={social.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
            <BackToTop />
          </div>
        </Container>
      </div>
    </footer>
  );
}
