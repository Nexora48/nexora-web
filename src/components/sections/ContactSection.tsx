import SectionHeading from "@/components/SectionHeading";
import Container from "@/components/Container";
import ContactBody from "@/components/sections/ContactBody";
import { contactIntro } from "@/content/contact";

// Home-page contact block: heading + the same form/details layout as /contact.
export default function ContactSection() {
  return (
    <section id="contact" className="pt-16 sm:pt-24">
      <Container>
        <SectionHeading eyebrow="Contact" heading={contactIntro.heading} />
      </Container>
      <ContactBody overlap={false} />
    </section>
  );
}
