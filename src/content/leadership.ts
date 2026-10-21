// Only the facts given in the brief. No invented bios, education, prior
// companies, or photos — use elegant initials placeholders until real
// photos/links are supplied.
export type Leader = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  social: { linkedin?: string; twitter?: string; github?: string };
};

export const leadershipIntro = {
  heading: "Meet Our Leadership",
  subheading: "The people building the vision behind Nexora.",
};

export const leaders: Leader[] = [
  {
    slug: "supriya",
    name: "Supriya",
    role: "Founder & CEO",
    bio: "Leading Nexora's vision, strategy and growth with a focus on building meaningful products and creating long-term value through technology.",
    initials: "S",
    social: {},
  },
  {
    slug: "prabhu",
    name: "Prabhu",
    role: "Co-Founder",
    bio: "Contributing to Nexora's product, technology and growth journey with a strong focus on building scalable digital solutions.",
    initials: "P",
    social: {},
  },
  {
    slug: "vishnu",
    name: "Vishnu",
    role: "Co-Founder", // TODO: confirm Vishnu's actual title
    bio: "Contributing to Nexora's vision and helping shape the company's product and technology journey.",
    initials: "V",
    social: {},
  },
];
