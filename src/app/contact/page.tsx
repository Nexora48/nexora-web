import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/sections/ContactSection";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        heading="Let's start a conversation."
        subheading="Tell us about your idea or project — we'll get back to you."
      />
      <ContactSection />
    </>
  );
}
