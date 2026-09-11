export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Features", href: "/features" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export const navCta: NavLink = { label: "Let's Talk", href: "/contact" };
