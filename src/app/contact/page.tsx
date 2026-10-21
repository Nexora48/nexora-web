import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactBody from "@/components/sections/ContactBody";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
    </>
  );
}
