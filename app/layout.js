import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
