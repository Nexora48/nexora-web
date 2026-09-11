import { icons, type LucideProps, CircleQuestionMark } from "lucide-react";

/**
 * Renders a lucide-react icon by its string name (as stored in content/*.ts),
 * so content stays data-driven — never import icon components directly in JSX.
 */
export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Lucide = icons[name as keyof typeof icons] ?? CircleQuestionMark;
  return <Lucide {...props} />;
}
