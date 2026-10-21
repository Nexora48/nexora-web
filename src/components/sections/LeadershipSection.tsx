import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import LeaderCard from "@/components/LeaderCard";
import { leadershipIntro, leaders } from "@/content/leadership";

export default function LeadershipSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="leadership" className="py-16 sm:py-24">
      <Container>
        {showHeading ? (
          <SectionHeading
            eyebrow="Leadership"
            heading={leadershipIntro.heading}
            subheading={leadershipIntro.subheading}
          />
        ) : null}

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, i) => (
            <LeaderCard key={leader.slug} leader={leader} delay={i * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
}
