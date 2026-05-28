import { siteConfig } from "@/content/site";
import { sitemapRoutes } from "@/content/routes";

export default function sitemap() {
  const now = new Date();

  return sitemapRoutes.map((route) => ({
    url: `${siteConfig.baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
