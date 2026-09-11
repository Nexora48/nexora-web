import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { pageSeo } from "@/content/seo";
import { company } from "@/content/company";
import { contactDetails } from "@/content/contact";

export const metadata: Metadata = {
  title: pageSeo.privacy.title,
  description: pageSeo.privacy.description,
};

const sections = [
  {
    heading: "Introduction",
    body: `This Privacy Policy is a placeholder template and explains, in general terms, how ${company.name} would collect, use and protect information when you use this website. It must be reviewed and finalized by a qualified legal professional before being relied upon.`,
  },
  {
    heading: "Information We Collect",
    body: "Placeholder — describe the categories of information collected (e.g. contact form submissions, analytics data, cookies) once finalized.",
  },
  {
    heading: "How We Use Information",
    body: "Placeholder — describe how collected information is used (e.g. responding to inquiries, improving the website, communications).",
  },
  {
    heading: "Cookies",
    body: "Placeholder — describe cookie usage, if any, and how visitors can manage cookie preferences.",
  },
  {
    heading: "Third-Party Services",
    body: "Placeholder — list any third-party services (analytics, hosting, form providers) once the site is connected to a real backend.",
  },
  {
    heading: "Data Security",
    body: "Placeholder — describe the security measures used to protect any information collected.",
  },
  {
    heading: "Your Rights",
    body: "Placeholder — describe visitor rights regarding their data (access, correction, deletion) under applicable law.",
  },
  {
    heading: "Changes to This Policy",
    body: `Placeholder — describe how and when this policy may be updated, and how ${company.name} will notify visitors of changes.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        heading="Privacy Policy"
        subheading="This page is a placeholder template. Replace it with real, legally reviewed content before launch."
      />
      <section className="py-20">
        <Container className="mx-auto max-w-3xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-semibold">{section.heading}</h2>
                <p className="mt-3 text-muted">{section.body}</p>
              </div>
            ))}
            <div>
              <h2 className="font-display text-xl font-semibold">Contact Us</h2>
              <p className="mt-3 text-muted">
                Questions about this placeholder policy can be directed to{" "}
                <a href={`mailto:${contactDetails.email}`} className="text-brand hover:underline">
                  {contactDetails.email}
                </a>{" "}
                (placeholder contact).
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
