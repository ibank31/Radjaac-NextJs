import { siteConfig } from "@/content/site";
import { sitemapRoutes } from "@/content/routes";

export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date();

  return sitemapRoutes.map(({ path, priority }) => ({
    url: `${siteConfig.baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
