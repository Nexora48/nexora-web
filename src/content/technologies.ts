// Technology categories Nexora offers/uses as a company. Editable — do not
// present as a claim beyond what has been confirmed.
export type TechCategory = { title: string; items: string[] };

export const technologiesIntro = { heading: "Powered By Modern Technology" };

export const technologyCategories: TechCategory[] = [
  { title: "Frontend", items: ["React", "Next.js", "Flutter", "Swift", "SwiftUI"] },
  { title: "Backend", items: ["Node.js", "Python", "REST APIs", "Databases"] },
  { title: "Cloud", items: ["AWS", "Azure", "Cloud Infrastructure", "CI/CD"] },
  { title: "AI", items: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Automation"] },
];
