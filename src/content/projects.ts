// EDITABLE PLACEHOLDERS. Do not fabricate client names, revenue, user counts,
// awards, or measurable results. "results" stays empty until real data lands.
export type ProjectCategory = "Mobile Apps" | "Web Applications" | "SaaS" | "AI" | "Enterprise" | "UI/UX";

export type Project = {
  slug: string;
  name: string;
  categories: ProjectCategory[];
  categoryLabel: string;
  description: string;
  technologies: string[];
  features: string[];
  challenge: string;
  solution: string;
  results: string | null; // null => show "results coming soon" in UI, never invent numbers
};

export const projectsIntro = {
  heading: "Our Projects",
  subheading: "Ideas transformed into digital experiences.",
};

export const projectFilters: Array<ProjectCategory | "All"> = [
  "All",
  "Mobile Apps",
  "Web Applications",
  "SaaS",
  "AI",
  "Enterprise",
  "UI/UX",
];

export const projects: Project[] = [
  {
    slug: "residential-community-platform",
    name: "Residential Community Platform",
    categories: ["Mobile Apps", "Web Applications", "Enterprise"],
    categoryLabel: "Mobile App / Web / Management Platform",
    description:
      "A modern digital platform designed to simplify residential community management and improve communication between residents, administrators and security teams.",
    technologies: ["React", "Next.js", "Node.js"],
    features: [
      "Resident and administrator dashboards",
      "Communication and notice-board tools",
      "Security and visitor-management workflows",
    ],
    challenge:
      "Placeholder — replace with the real business/user problem this project addressed.",
    solution:
      "Placeholder — replace with how Nexora approached and solved the problem.",
    results: null,
  },
  {
    slug: "business-management-platform",
    name: "Business Management Platform",
    categories: ["SaaS", "Enterprise"],
    categoryLabel: "SaaS / Enterprise Platform",
    description: "Placeholder description — replace with real project details.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: ["Placeholder feature one", "Placeholder feature two", "Placeholder feature three"],
    challenge: "Placeholder — replace with the real business/user problem this project addressed.",
    solution: "Placeholder — replace with how Nexora approached and solved the problem.",
    results: null,
  },
  {
    slug: "ai-powered-application",
    name: "AI-Powered Application",
    categories: ["AI", "Web Applications"],
    categoryLabel: "AI Application",
    description: "Placeholder description — replace with real project details.",
    technologies: ["Python", "React", "Machine Learning"],
    features: ["Placeholder feature one", "Placeholder feature two", "Placeholder feature three"],
    challenge: "Placeholder — replace with the real business/user problem this project addressed.",
    solution: "Placeholder — replace with how Nexora approached and solved the problem.",
    results: null,
  },
  {
    slug: "mobile-digital-experience",
    name: "Mobile Digital Experience",
    categories: ["Mobile Apps", "UI/UX"],
    categoryLabel: "Mobile App / UI-UX",
    description: "Placeholder description — replace with real project details.",
    technologies: ["Swift", "SwiftUI", "Flutter"],
    features: ["Placeholder feature one", "Placeholder feature two", "Placeholder feature three"],
    challenge: "Placeholder — replace with the real business/user problem this project addressed.",
    solution: "Placeholder — replace with how Nexora approached and solved the problem.",
    results: null,
  },
];
