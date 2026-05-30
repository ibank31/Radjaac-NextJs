import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import ProofGalleryClient from "@/components/proof/ProofGalleryClient";

export const metadata = buildMetadata(staticPageMetadata.buktiPengirimanProyek);

export default function BuktiPengirimanProyekPage() {
  return <ProofGalleryClient />;
}
