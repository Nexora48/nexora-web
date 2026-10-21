import LeadershipTeam from "@/components/sections/LeadershipTeam";

// Home / About version of the leadership block: same featured layout as the
// /leadership page, with its own section heading.
export default function LeadershipSection({ showHeading = true }: { showHeading?: boolean }) {
  return <LeadershipTeam id="leadership" showHeading={showHeading} />;
}
