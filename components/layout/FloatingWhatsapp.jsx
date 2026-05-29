import Image from "next/image";
import WhatsappLink from "@/components/ui/WhatsappLink";

export default function FloatingWhatsapp() {
  return (
    <WhatsappLink
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_24px_rgba(37,211,102,0.35)] ring-1 ring-white/40 transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      source="Global Floating WhatsApp"
      intent="konsultasi beli AC, cek stok, pengiriman, dan pemasangan"
    >
      <Image
        src="/ui/whatsapp.svg"
        alt=""
        width={30}
        height={30}
        className="h-7 w-7 sm:h-8 sm:w-8"
        aria-hidden="true"
      />
      <span className="sr-only">Chat WhatsApp RADJA AC</span>
    </WhatsappLink>
  );
}
