export type ProcessStep = { number: string; title: string; description: string };

export const processIntro = { heading: "How We Build" };

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discover", description: "Understand the idea, business goals and user requirements." },
  { number: "02", title: "Plan", description: "Define product strategy, architecture and roadmap." },
  { number: "03", title: "Design", description: "Create intuitive UI/UX and product experiences." },
  { number: "04", title: "Build", description: "Develop the product using modern technologies." },
  { number: "05", title: "Test", description: "Quality assurance, performance and security testing." },
  { number: "06", title: "Launch", description: "Deploy and launch the product." },
  { number: "07", title: "Scale", description: "Monitor, improve and continuously evolve the product." },
];
