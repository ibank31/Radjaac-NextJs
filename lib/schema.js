import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";
import { absoluteSiteUrl } from "@/lib/url";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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
    logo: absoluteSchemaUrl("/icons/master-icon-1024.png"),
    telephone: siteConfig.whatsappDisplay,
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

export function hvacBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${siteConfig.baseUrl}/#hvacbusiness`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.baseUrl,
    image: absoluteSchemaUrl("/icons/master-icon-1024.png"),
    logo: absoluteSchemaUrl("/icons/master-icon-1024.png"),
    telephone: siteConfig.whatsappDisplay,
    inLanguage: siteConfig.language,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.businessBase,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.provinceBase,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.countryCode,
    },
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: WEEK_DAYS,
      opens: "09:00",
      closes: "20:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.whatsappDisplay,
      contactType: "sales",
      availableLanguage: ["id"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: WEEK_DAYS,
        opens: "00:00",
        closes: "23:59",
      },
    },
    sameAs: [absoluteWaMe(siteConfig.whatsappNumber)],
    parentOrganization: {
      "@id": `${siteConfig.baseUrl}/#organization`,
    },
  };
}

function absoluteWaMe(number) {
  return "https://wa.me/" + number;
}

export function serviceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed,
} = {}) {
  if (!name) {
    return null;
  }

  const resolvedAreaServed = areaServed ?? siteConfig.areaServed;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    ...(description ? { description } : {}),
    ...(serviceType ? { serviceType } : {}),
    ...(url ? { url: absoluteSchemaUrl(url) } : {}),
    provider: {
      "@id": `${siteConfig.baseUrl}/#hvacbusiness`,
    },
    areaServed: Array.isArray(resolvedAreaServed)
      ? resolvedAreaServed.map((area) => ({ "@type": "AdministrativeArea", name: area }))
      : { "@type": "AdministrativeArea", name: resolvedAreaServed },
  };
}

export function sitewideSchemas() {
  return [organizationSchema(), websiteSchema(), hvacBusinessSchema()];
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

export function faqSchema(items = []) {
  const mainEntity = items
    .map((item) => {
      const [question, answer] = Array.isArray(item)
        ? item
        : [item?.question, item?.answer];

      if (!question || !answer) {
        return null;
      }

      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    })
    .filter(Boolean);

  if (!mainEntity.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}
