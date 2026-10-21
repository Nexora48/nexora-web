import Logo from "@/components/Logo";
import Container from "@/components/Container";
import SocialIcon from "@/components/SocialIcon";
import { company } from "@/content/company";
import { footerColumns, footerSocial } from "@/content/footer";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-white/70">
      <Container className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2">
          <Logo mark="light" />
          <p className="mt-4 max-w-xs text-sm text-white/60">{company.tagline}</p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-white">{column.title}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
        <p className="text-xs text-white/50">
          © {year} {company.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {footerSocial.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <SocialIcon name={social.icon} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
