// Nexora Pvt's real product suite for residential communities. Descriptions
// reflect the general purpose of each app; refine copy and feature lists as
// exact specifics are confirmed — but these are real, named products, not
// placeholders.
export type Product = {
  slug: string;
  name: string;
  category: string;
  icon: string; // lucide-react icon name
  description: string;
  longDescription: string;
  features: string[];
  featureSlugs: string[]; // slugs from content/features.ts shown on the product page
};

export const productsIntro = {
  heading: "Our Product Suite",
  subheading: "One connected platform for residential communities.",
  body: "Nexora Admin, Nexora Living and Nexora Gate work together to help residential communities run smoothly — for management committees, residents, and security teams alike.",
};

export const products: Product[] = [
  {
    slug: "nexora-admin",
    name: "Nexora Admin",
    category: "Society Management",
    icon: "LayoutDashboard",
    description:
      "The management dashboard for residential communities — helping committees and administrators run day-to-day operations in one place.",
    longDescription:
      "Nexora Admin gives management committees and society administrators a single dashboard to run their community — from resident records and staff to billing, notices and approvals — replacing scattered spreadsheets and registers.",
    features: [
      "Resident and staff records management",
      "Billing and dues tracking",
      "Notices, approvals and reports from one dashboard",
    ],
    featureSlugs: ["accounting-billing", "staff-vendor-management", "notices-announcements", "complaints-service-requests"],
  },
  {
    slug: "nexora-living",
    name: "Nexora Living",
    category: "Resident App",
    icon: "House",
    description:
      "The resident app that keeps every household connected to their community — notices, amenities, payments and requests in one place.",
    longDescription:
      "Nexora Living is the app residents use every day — staying up to date with community notices, booking shared amenities, paying maintenance bills, and raising service requests without chasing anyone down.",
    features: [
      "Community notices and announcements",
      "Amenity bookings",
      "Bills and payments",
      "Maintenance and service requests",
    ],
    featureSlugs: ["amenity-booking", "payments-dues", "complaints-service-requests", "notices-announcements", "emergency-alerts"],
  },
  {
    slug: "nexora-gate",
    name: "Nexora Gate",
    category: "Security & Gate App",
    icon: "ShieldCheck",
    description:
      "The security and visitor-management app for gates and guards — approvals, entries and logs handled in real time.",
    longDescription:
      "Nexora Gate equips security staff and residents with real-time visitor and delivery approvals, guard check-in tools, and a complete log of entries and exits — keeping every community's gate secure without slowing anyone down.",
    features: [
      "Visitor and delivery approvals",
      "Guard and security check-in app",
      "Real-time entry and exit logs",
    ],
    featureSlugs: ["visitor-gate-approvals", "parking-vehicle-tracking", "emergency-alerts"],
  },
];

// Copy for the dedicated /products page.
export const productsPage = {
  hero: {
    eyebrow: "Products",
    heading: "Our Product Suite",
    subheading: "One connected platform for residential communities — built for committees, residents and security teams.",
  },
  together: {
    eyebrow: "Better Together",
    heading: "Three apps. One connected platform.",
    body: "A visitor logged in Nexora Gate reaches the resident in Nexora Living, and every entry, payment and request lands in Nexora Admin — no re-entry, no gaps.",
  },
};
