import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/SocialIcon";
import ContactForm from "@/components/ContactForm";
import { localImage } from "@/lib/images";
import { contactDetails, contactIntro, contactPage } from "@/content/contact";

const socialPlatforms: Array<{ key: keyof typeof contactDetails.social; icon: string; label: string }> = [
  { key: "linkedin", icon: "Linkedin", label: "LinkedIn" },
  { key: "instagram", icon: "Instagram", label: "Instagram" },
  { key: "twitter", icon: "Twitter", label: "X / Twitter" },
  { key: "github", icon: "Github", label: "GitHub" },
];

// Home-page contact block: one split panel — photo/details on the left, form on the right.
export default function ContactSection() {
  const photo = localImage("committee-meeting");
  const details = [
    { icon: Mail, label: "Email", value: contactDetails.email, href: `mailto:${contactDetails.email}` },
    { icon: Phone, label: "Phone", value: contactDetails.phone, href: `tel:${contactDetails.phone.replace(/\s+/g, "")}` },
    { icon: MapPin, label: "Office", value: contactDetails.address, href: undefined },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] border border-border bg-background shadow-lifted lg:grid-cols-5">
            <div className="relative overflow-hidden bg-ink p-8 text-white sm:p-12 lg:col-span-2">
              {photo ? (
                <>
                  <Image src={photo} alt="" fill quality={75} sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/85 to-ink" aria-hidden="true" />
                </>
              ) : null}
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-solid/50 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-accent/15 blur-[90px]" />

              <div className="relative flex h-full flex-col">
                <span className="inline-block self-start rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                  Contact
                </span>
                <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {contactIntro.heading}
                </h2>
                <p className="mt-4 text-white/70">{contactPage.hero.subheading}</p>

                <ul className="mt-8 space-y-4">
                  {details.map(({ icon: DetailIcon, label, value, href }) => {
                    const inner = (
                      <>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                          <DetailIcon className="h-5 w-5 text-brand-light" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs uppercase tracking-wider text-white/50">{label}</span>
                          <span className="block break-words text-sm font-medium">{value}</span>
                        </span>
                      </>
                    );
                    return (
                      <li key={label}>
                        {href ? (
                          <a href={href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
                            {inner}
                          </a>
                        ) : (
                          <div className="flex items-center gap-4">{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-auto flex gap-2 pt-10">
                  {socialPlatforms.map((platform) => (
                    <a
                      key={platform.key}
                      href={contactDetails.social[platform.key]}
                      aria-label={platform.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-light/50 hover:bg-white/10 hover:text-white"
                    >
                      <SocialIcon name={platform.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:col-span-3">
              <h3 className="font-display text-2xl font-semibold">{contactPage.form.title}</h3>
              <p className="mt-1 text-sm text-muted">{contactPage.form.subtitle}</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
