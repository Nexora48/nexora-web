// What the Nexora suite actually does for communities day to day — spans
// Nexora Admin, Nexora Living and Nexora Gate together.
export type Feature = {
  slug: string;
  icon: string; // lucide-react icon name
  title: string;
  description: string;
};

export const featuresIntro = {
  heading: "Everything Your Community Needs",
  subheading: "One connected suite of features across Admin, Living and Gate.",
};

export const features: Feature[] = [
  {
    slug: "visitor-gate-approvals",
    icon: "ShieldCheck",
    title: "Visitor & Gate Approvals",
    description: "Approve guests, deliveries and cabs remotely before they reach the gate.",
  },
  {
    slug: "amenity-booking",
    icon: "CalendarCheck",
    title: "Amenity Booking",
    description: "Book the clubhouse, gym, pool or party hall in a few taps.",
  },
  {
    slug: "payments-dues",
    icon: "CreditCard",
    title: "Payments & Dues",
    description: "Pay maintenance bills and society dues online, without the paperwork.",
  },
  {
    slug: "complaints-service-requests",
    icon: "Wrench",
    title: "Complaints & Service Requests",
    description: "Raise a complaint or service request and track it through to resolution.",
  },
  {
    slug: "parking-vehicle-tracking",
    icon: "Car",
    title: "Parking & Vehicle Tracking",
    description: "Manage parking slots and keep a log of every vehicle entry and exit.",
  },
  {
    slug: "notices-announcements",
    icon: "Megaphone",
    title: "Notices & Announcements",
    description: "Keep every household informed with instant community notices.",
  },
  {
    slug: "staff-vendor-management",
    icon: "UserCog",
    title: "Staff & Vendor Management",
    description: "Maintain verified records for staff, vendors and domestic help.",
  },
  {
    slug: "accounting-billing",
    icon: "LayoutDashboard",
    title: "Accounting & Billing",
    description: "Track society accounts, dues and expenses from a single dashboard.",
  },
  {
    slug: "emergency-alerts",
    icon: "Siren",
    title: "Emergency Alerts",
    description: "Raise an SOS alert to security and neighbors in an emergency.",
  },
];
