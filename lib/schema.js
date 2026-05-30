import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";
import { absoluteSiteUrl } from "@/lib/url";

export function absoluteSchemaUrl(path = "/") {
  return absoluteSiteUrl(path);
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.baseUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.baseUrl,
    logo: absoluteSchemaUrl("/logo-radjaac.webp"),
    telephone: siteConfig.whatsappDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pamijen, Sokaraja",
      addressLocality: "Banyumas",
      addressRegion: siteConfig.provinceBase,
      addressCountry: "ID",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.baseUrl}/#website`,
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    inLanguage: siteConfig.language,
    description: siteConfig.defaultDescription,
    publisher: {
      "@id": `${siteConfig.baseUrl}/#organization`,
    },
  };
}

export function sitewideSchemas() {
  return [organizationSchema(), websiteSchema()];
}

export function breadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const [name, path = routes.home] = item;
      return {
        "@type": "ListItem",
        position: index + 1,
        name,
        item: absoluteSchemaUrl(path),
      };
    }),
  };
}
