export type Service = {
  slug: string;
  icon: string; // lucide-react icon name
  title: string;
  description: string;
};

export const servicesIntro = {
  heading: "Our Services",
  subheading: "Technology expertise that turns ideas into impact.",
};

export const services: Service[] = [
  {
    slug: "software-development",
    icon: "CodeXml",
    title: "Software Development",
    description: "Custom web, mobile and enterprise software solutions.",
  },
  {
    slug: "mobile-app-development",
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Modern mobile applications for iOS and Android.",
  },
  {
    slug: "web-development",
    icon: "Globe",
    title: "Web Development",
    description: "High-performance, responsive and scalable websites and web applications.",
  },
  {
    slug: "ui-ux-design",
    icon: "PenTool",
    title: "UI/UX Design",
    description: "Beautiful, intuitive and user-focused digital experiences.",
  },
  {
    slug: "backend-development",
    icon: "Server",
    title: "Backend Development",
    description: "Secure, scalable and reliable backend systems and APIs.",
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
    description: "AI-powered solutions, intelligent automation and smart digital experiences.",
  },
  {
    slug: "api-system-integration",
    icon: "Plug",
    title: "API & System Integration",
    description: "Connecting applications, services and business systems.",
  },
  {
    slug: "product-development",
    icon: "Rocket",
    title: "Product Development",
    description: "Taking products from idea and MVP to scalable production platforms.",
  },
  {
    slug: "maintenance-support",
    icon: "LifeBuoy",
    title: "Maintenance & Support",
    description: "Continuous improvements, monitoring, optimization and technical support.",
  },
];
