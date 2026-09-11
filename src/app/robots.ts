import type { MetadataRoute } from "next";
import { siteSeo } from "@/content/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteSeo.siteUrl.replace(/\/$/, "")}/sitemap.xml`,
  };
}
