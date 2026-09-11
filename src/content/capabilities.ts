// The engineering disciplines behind Nexora Admin, Living and Gate.
// This is NOT a list of services offered for hire — Nexora is a product
// company, not a client services business.
export type Capability = {
  slug: string;
  icon: string; // lucide-react icon name
  title: string;
  description: string;
};

export const capabilitiesIntro = {
  heading: "How We Build It",
  subheading: "The engineering disciplines behind Admin, Living and Gate.",
};

export const capabilities: Capability[] = [
  {
    slug: "software-development",
    icon: "CodeXml",
    title: "Software Development",
    description: "Custom web, mobile and backend engineering across the whole product suite.",
  },
  {
    slug: "mobile-app-development",
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Native-feeling mobile experiences for residents, guards and administrators.",
  },
  {
    slug: "web-development",
    icon: "Globe",
    title: "Web Development",
    description: "High-performance, responsive dashboards and web experiences.",
  },
  {
    slug: "ui-ux-design",
    icon: "PenTool",
    title: "UI/UX Design",
    description: "Beautiful, intuitive experiences for residents, staff and security teams.",
  },
  {
    slug: "backend-development",
    icon: "Server",
    title: "Backend Development",
    description: "Secure, scalable and reliable backend systems and APIs powering the suite.",
  },
  {
    slug: "cloud-devops",
    icon: "Cloud",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure, deployment, monitoring and scalable architecture.",
  },
  {
    slug: "ai-automation",
    icon: "Sparkles",
    title: "AI & Automation",
    description: "Automation that reduces manual work for residents and administrators alike.",
  },
  {
    slug: "api-system-integration",
    icon: "Plug",
    title: "API & System Integration",
    description: "Keeping Admin, Living and Gate connected as one platform.",
  },
  {
    slug: "product-development",
    icon: "Rocket",
    title: "Product Development",
    description: "Taking the product suite from idea and MVP to scalable production platforms.",
  },
  {
    slug: "maintenance-support",
    icon: "LifeBuoy",
    title: "Maintenance & Support",
    description: "Continuous improvements, monitoring, optimization and technical support.",
  },
];
