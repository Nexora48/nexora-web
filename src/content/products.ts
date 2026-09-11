// EDITABLE PLACEHOLDERS: swap name/description/category/features per product
// once real Nexora products are confirmed. Do not present these as shipped,
// named real-world products until the company supplies real details.
export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
};

export const productsIntro = {
  heading: "Products We Build",
  subheading: "From ideas to scalable digital products.",
  body: "Alongside client work, Nexora develops its own products and technology platforms — applying the same product thinking and engineering discipline we bring to every engagement.",
};

export const products: Product[] = [
  {
    slug: "nexora-product-one",
    name: "Nexora Product One",
    category: "Product Platform",
    description: "Placeholder description — replace with real product details.",
    longDescription:
      "Placeholder overview — replace with the real product story, problem it solves, and who it serves once details are confirmed.",
    features: ["Placeholder feature one", "Placeholder feature two", "Placeholder feature three"],
  },
  {
    slug: "nexora-product-two",
    name: "Nexora Product Two",
    category: "SaaS Platform",
    description: "Placeholder description — replace with real product details.",
    longDescription:
      "Placeholder overview — replace with the real product story, problem it solves, and who it serves once details are confirmed.",
    features: ["Placeholder feature one", "Placeholder feature two", "Placeholder feature three"],
  },
  {
    slug: "nexora-product-three",
    name: "Nexora Product Three",
    category: "Mobile Product",
    description: "Placeholder description — replace with real product details.",
    longDescription:
      "Placeholder overview — replace with the real product story, problem it solves, and who it serves once details are confirmed.",
    features: ["Placeholder feature one", "Placeholder feature two", "Placeholder feature three"],
  },
  {
    slug: "nexora-product-four",
    name: "Nexora Product Four",
    category: "AI Platform",
    description: "Placeholder description — replace with real product details.",
    longDescription:
      "Placeholder overview — replace with the real product story, problem it solves, and who it serves once details are confirmed.",
    features: ["Placeholder feature one", "Placeholder feature two", "Placeholder feature three"],
  },
];
