import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/SocialIcon";
import ContactForm from "@/components/ContactForm";
import { contactDetails, contactPage } from "@/content/contact";

const socialPlatforms: Array<{ key: keyof typeof contactDetails.social; icon: string; label: string }> = [
  { key: "linkedin", icon: "Linkedin", label: "LinkedIn" },
  { key: "instagram", icon: "Instagram", label: "Instagram" },
  { key: "twitter", icon: "Twitter", label: "X / Twitter" },
  { key: "github", icon: "Github", label: "GitHub" },
];

export default function ContactBody() {
  const details = [
    { icon: Mail, label: "Email", value: contactDetails.email, href: `mailto:${contactDetails.email}` },
    {
      icon: Phone,
      label: "Phone",
      value: contactDetails.phone,
      href: `tel:${contactDetails.phone.replace(/\s+/g, "")}`,
    },
    { icon: MapPin, label: "Office", value: contactDetails.address, href: undefined },
  ];

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="relative z-10 -mt-28 grid gap-8 sm:-mt-32 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-card border border-border bg-background p-6 shadow-lifted sm:p-10">
              <h2 className="font-display text-2xl font-semibold">{contactPage.form.title}</h2>
              <p className="mt-1 text-sm text-muted">{contactPage.form.subtitle}</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.08}>
              <ul className="space-y-3">
                {details.map(({ icon: DetailIcon, label, value, href }) => {
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-solid to-brand-light text-white">
                        <DetailIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-wider text-muted">{label}</span>
                        <span className="block break-words text-sm font-medium text-foreground">{value}</span>
                      </span>
                    </>
                  );
                  const cls =
                    "flex items-center gap-4 rounded-card border border-border bg-surface p-4 shadow-soft transition-colors";
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className={`${cls} hover:border-brand/40`}>
                          {content}
                        </a>
                      ) : (
                        <div className={cls}>{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-card border border-border bg-surface p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold">{contactPage.next.title}</h3>
                <ol className="mt-4 space-y-4">
                  {contactPage.next.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-muted">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <div className="mt-6 flex gap-2 border-t border-border pt-5">
                  {socialPlatforms.map((platform) => (
                    <a
                      key={platform.key}
                      href={contactDetails.social[platform.key]}
                      aria-label={platform.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      <SocialIcon name={platform.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
