import { absoluteSiteUrl } from "@/lib/url";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*_rsc="],
    },
    sitemap: absoluteSiteUrl("/sitemap.xml"),
  };
}
