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
