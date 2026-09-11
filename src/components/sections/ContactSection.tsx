import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/SocialIcon";
import ContactForm from "@/components/ContactForm";
import { contactIntro, contactDetails } from "@/content/contact";

const socialPlatforms: Array<{ key: keyof typeof contactDetails.social; icon: string; label: string }> = [
  { key: "linkedin", icon: "Linkedin", label: "LinkedIn" },
  { key: "instagram", icon: "Instagram", label: "Instagram" },
  { key: "twitter", icon: "Twitter", label: "X / Twitter" },
  { key: "github", icon: "Github", label: "GitHub" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              Contact
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {contactIntro.heading}
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-5">
          <Reveal delay={0.05} className="lg:col-span-3">
            <div className="rounded-card border border-border bg-surface p-6 shadow-soft sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-card border border-border bg-surface-alt p-6 shadow-soft sm:p-8">
              <h3 className="font-display text-lg font-semibold">Get in touch</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <a href={`mailto:${contactDetails.email}`} className="hover:text-brand">
                    {contactDetails.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className="hover:text-brand">
                    {contactDetails.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-muted">{contactDetails.address}</span>
                </li>
              </ul>

              <div className="mt-6 flex gap-2 border-t border-border pt-6">
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

              <p className="mt-6 text-xs leading-relaxed text-muted/80">
                Contact details shown are placeholders and will be replaced with Nexora Pvt&apos;s real details.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
