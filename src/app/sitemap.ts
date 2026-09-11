import type { MetadataRoute } from "next";
import { siteSeo } from "@/content/seo";
import { products } from "@/content/products";

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/features",
  "/leadership",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteSeo.siteUrl.replace(/\/$/, "");
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...productEntries];
}
