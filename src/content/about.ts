export type Stat = { number: string; title: string; description: string };

export const about = {
  heading: "Technology With Purpose",
  body: "Nexora Pvt is a residential community technology company. We combine product thinking, engineering expertise, design, and business understanding to build Nexora Admin, Nexora Living and Nexora Gate — helping communities run smoothly and residents stay connected.",
  stats: [
    {
      number: "01",
      title: "Product Innovation",
      description: "Building technology products designed around real-world problems.",
    },
    {
      number: "02",
      title: "Engineering",
      description: "Modern, scalable and reliable software engineering.",
    },
    {
      number: "03",
      title: "Community Focused",
      description: "Helping residential communities modernize day-to-day operations.",
    },
    {
      number: "04",
      title: "Long-Term Partnership",
      description: "Working with communities beyond onboarding and setup.",
    },
  ] as Stat[],
};

// Content for the dedicated /about page.
export const aboutPage = {
  hero: {
    eyebrow: "About Nexora",
    heading: "Technology that makes community living simpler.",
    subheading:
      "Nexora Pvt is a residential community technology company. We build the products that help communities run smoothly and keep residents connected.",
    chips: ["Residential communities", "Admin · Living · Gate", "Committees, residents & security"],
  },
  story: {
    eyebrow: "Our Story",
    heading: "Built around how communities actually work",
    paragraphs: [
      "Nexora Pvt builds Nexora Admin, Nexora Living and Nexora Gate — a connected product suite that helps communities manage daily operations, keeps residents connected, and keeps gates and visitors secure.",
      "We combine product thinking, engineering expertise, design and business understanding to turn everyday community needs — gate approvals, amenity bookings, payments, complaints — into simple, reliable digital experiences.",
    ],
    points: [
      "One connected platform for committees, residents and security teams",
      "Designed for communities of every size, from apartments to townships",
      "Built for long-term partnership, not just software delivery",
    ],
    badge: { title: "Admin · Living · Gate", subtitle: "One connected platform" },
  },
  suite: {
    eyebrow: "The Suite",
    heading: "One platform, three products",
    subheading: "Each app serves a different part of community life — and they work together as one.",
  },
};
