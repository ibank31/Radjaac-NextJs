"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { Suspense, useEffect } from "react";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const PRODUCTION_HOSTNAME = "www.radjaac.com";

function isProductionHostname() {
  return typeof window !== "undefined" && window.location.hostname === PRODUCTION_HOSTNAME;
}

function sendGaPageView(path) {
  if (
    !GA_MEASUREMENT_ID ||
    !isProductionHostname() ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  const cleanPath = path || window.location.pathname;

  window.gtag("event", "page_view", {
    page_path: cleanPath,
    page_location: `${window.location.origin}${cleanPath}`,
    page_title: document.title,
  });
}

function GoogleAnalyticsPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isProductionHostname() || !pathname) {
      return;
    }

    sendGaPageView(pathname);
  }, [pathname]);

  return null;
}

function GoogleAnalyticsEvents() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isProductionHostname()) {
      return;
    }

    const handleDocumentClick = (event) => {
      const link = event.target?.closest?.("a[href]");
      if (!link) {
        return;
      }

      let url;

      try {
        url = new URL(link.href);
      } catch {
        return;
      }

      const isWhatsAppLink = url.hostname === "wa.me" || url.hostname === "api.whatsapp.com";

      if (!isWhatsAppLink || typeof window.gtag !== "function") {
        return;
      }

      window.gtag("event", "whatsapp_click", {
        event_category: "lead",
        event_label: link.dataset.waLabel || link.textContent?.trim() || "WhatsApp link",
        wa_source: link.dataset.waSource || "Website RADJA AC",
        wa_label: link.dataset.waLabel || link.textContent?.trim() || "WhatsApp link",
        intent_type: link.dataset.intentType || "konsultasi beli AC",
        city_target: link.dataset.cityTarget || "",
        brand_target: link.dataset.brandTarget || "",
        category_target: link.dataset.categoryTarget || "",
        page_type: link.dataset.pageType || "unknown",
        link_hostname: url.hostname,
        link_pathname: url.pathname,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return null;
}

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || !isProductionHostname()) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView />
      </Suspense>
      <GoogleAnalyticsEvents />
    </>
  );
}
