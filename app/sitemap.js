import { sitemapRoutes } from "@/content/routes";
import { absoluteSiteUrl } from "@/lib/url";

export const dynamic = "force-static";

export default function sitemap() {
  return sitemapRoutes.map(({ path, priority, lastModified }) => ({
    url: absoluteSiteUrl(path),
    ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
    changeFrequency: "weekly",
    priority,
  }));
}
