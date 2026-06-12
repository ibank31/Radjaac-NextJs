import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsapp from "@/components/layout/FloatingWhatsapp";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";
import { sitewideSchemas } from "@/lib/schema";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = buildMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.language}>
      <body className={plusJakartaSans.variable}>
        <JsonLd data={sitewideSchemas()} />
        <GoogleAnalytics />
        <a href="#main-content" className="skip-to-content">
          Langsung ke konten utama
        </a>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
