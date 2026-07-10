"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { Suspense, useEffect } from "react";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const PRODUCTION_HOSTNAME = "www.radjaac.com";
const GTAG_PROTO = "https://";
const GTAG_LOADER_HOST = "www.googletagmanager.com";
const GTAG_LOADER_PATH = "/gtag/js?id=";
const GTAG_SRC = `${GTAG_PROTO}${GTAG_LOADER_HOST}${GTAG_LOADER_PATH}${GA_MEASUREMENT_ID}`;

function isProductionHostname() {
  return typeof window !== "undefined" && window.location.hostname === PRODUCTION_HOSTNAME;
}


function sendGaPageView(path) {
  if (!GA_MEASUREMENT_ID || !isProductionHostname()) return false;
  if (typeof window.gtag !== "function") return false;

  const cleanPath = path || window.location.pathname;

  window.gtag("event", "page_view", {
    page_path: cleanPath,
    page_location: `${window.location.origin}${cleanPath}`,
    page_title: document.title,
  });

  return true;
}

function GoogleAnalyticsPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isProductionHostname() || !pathname) {
      return;
    }

    let retryTimer;
    let attempts = 0;

    const sendWhenReady = () => {
      if (sendGaPageView(pathname)) return;

      attempts += 1;
      if (attempts < 40) {
        retryTimer = window.setTimeout(sendWhenReady, 250);
      }
    };

    sendWhenReady();

    return () => {
      if (retryTimer) window.clearTimeout(retryTimer);
    };
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

      if (!isWhatsAppLink || link.dataset.waDirect === "true" || typeof window.gtag !== "function") {
        return;
      }

      window.gtag("event", "whatsapp_click", {
        event_category: "lead",
        event_label: link.dataset.waLabel || link.textContent?.trim() || "WhatsApp link",
        wa_source: link.dataset.waSource || "Website Radja AC",
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
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script src={GTAG_SRC} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          if (window.location.hostname === '${PRODUCTION_HOSTNAME}') {
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false
            });
          }
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView />
      </Suspense>
      <GoogleAnalyticsEvents />
    </>
  );
}
