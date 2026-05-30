import { sitemapRoutes } from "@/content/routes";
import { absoluteSiteUrl } from "@/lib/url";

export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date();

  return sitemapRoutes.map(({ path, priority }) => ({
    url: absoluteSiteUrl(path),
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
