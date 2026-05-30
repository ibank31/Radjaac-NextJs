import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import HomepageLegacyParity from "@/components/home/HomepageLegacyParity";

export const metadata = buildMetadata(staticPageMetadata.home);

export default function HomePage() {
  return <HomepageLegacyParity />;
}
