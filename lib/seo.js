import { siteConfig } from "@/content/site";
import { absoluteSiteUrl } from "@/lib/url";

export function absoluteUrl(path = "/") {
  return absoluteSiteUrl(path);
}

export function buildMetadata({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  path = "/",
  image = "/og/radjaac-showroom-og.webp",
  type = "website",
} = {}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
