"use client";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

function trackWhatsappClick({ source, label, intent, area, brand, category, pageType, href }) {
  if (typeof window === "undefined") return;

  const payload = {
    event_category: "lead",
    event_label: label || "WhatsApp link",
    wa_source: source || "Website Radja AC",
    wa_label: label || "WhatsApp link",
    intent_type: intent || "konsultasi beli AC",
    city_target: area || "",
    brand_target: brand || "",
    category_target: category || "",
    page_type: pageType || "unknown",
    page_path: window.location.pathname,
    link_url: href,
    transport_type: "beacon",
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", payload);
    window.gtag("event", "generate_lead", {
      ...payload,
      currency: "IDR",
      value: 0,
    });
  }
}

export default function WhatsappLink({
  children = "Chat Tim Radja AC",
  className = "",
  intent = "konsultasi beli AC",
  source = "Website Radja AC",
  area = "",
  brand = "",
  category = "",
  pageType = "",
  waLabel = "",
  onClick,
  ...props
}) {
  const href = buildWhatsAppUrl({
    intent,
    source,
    area,
    brand,
    category,
  });

  const safeWaLabel = waLabel || (typeof children === "string" ? children : "WhatsApp link");

  return (
    <a
      {...props}
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      data-wa-direct="true"
      data-wa-source={source}
      data-wa-label={safeWaLabel}
      data-intent-type={intent}
      data-city-target={area}
      data-brand-target={brand}
      data-category-target={category}
      data-page-type={pageType}
      onClick={(event) => {
        trackWhatsappClick({
          source,
          label: safeWaLabel,
          intent,
          area,
          brand,
          category,
          pageType,
          href,
        });

        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
