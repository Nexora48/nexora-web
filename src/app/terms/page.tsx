import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { pageSeo } from "@/content/seo";
import { company } from "@/content/company";
import { contactDetails } from "@/content/contact";

export const metadata: Metadata = {
  title: pageSeo.terms.title,
  description: pageSeo.terms.description,
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: `This Terms & Conditions page is a placeholder template. It must be reviewed and finalized by a qualified legal professional before being relied upon. By using this website, visitors would be agreeing to the finalized terms once published.`,
  },
  {
    heading: "Use of the Site",
    body: "Placeholder — describe acceptable use of the website and any restrictions.",
  },
  {
    heading: "Intellectual Property",
    body: `Placeholder — describe ownership of ${company.name}'s content, branding and any product/project materials shown on this site.`,
  },
  {
    heading: "Third-Party Links",
    body: "Placeholder — describe how links to third-party websites or services are handled.",
  },
  {
    heading: "Limitation of Liability",
    body: "Placeholder — describe limitations of liability for use of the website and its content.",
  },
  {
    heading: "Changes to These Terms",
    body: `Placeholder — describe how and when ${company.name} may update these terms.`,
  },
  {
    heading: "Governing Law",
    body: "Placeholder — specify the governing jurisdiction once finalized.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        heading="Terms & Conditions"
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
                Questions about these placeholder terms can be directed to{" "}
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
