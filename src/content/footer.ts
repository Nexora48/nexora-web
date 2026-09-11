export type FooterColumn = { title: string; links: { label: string; href: string }[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Leadership", href: "/leadership" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Product Development", href: "/services#product-development" },
      { label: "Mobile Development", href: "/services#mobile-app-development" },
      { label: "Web Development", href: "/services#web-development" },
      { label: "UI/UX", href: "/services#ui-ux-design" },
      { label: "AI & Automation", href: "/services#ai-automation" },
      { label: "Cloud & DevOps", href: "/services#cloud-devops" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export const footerSocial = [
  { label: "LinkedIn", href: "#", icon: "Linkedin" },
  { label: "Instagram", href: "#", icon: "Instagram" },
  { label: "GitHub", href: "#", icon: "Github" },
  { label: "X / Twitter", href: "#", icon: "Twitter" },
];
