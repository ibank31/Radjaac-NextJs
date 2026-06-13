import Image from "next/image";
import { typography } from "@/lib/typography";

const certs = [
  {
    brand: "Daikin",
    status: "Authorized Dealer",
    image: "/certificates/daikin-authorized-dealer.webp",
  },
  {
    brand: "Midea",
    status: "Authorized Dealer",
    image: "/certificates/midea-authorized-dealer.webp",
  },
  {
    brand: "Hisense",
    status: "Authorized Dealer",
    image: "/certificates/hisense-authorized-dealer.webp",
  },
  {
    brand: "Sansui",
    status: "Authorized Dealer",
    image: "/certificates/sansui-authorized-dealer.webp",
  },
];

export default function AuthorizedDealerCerts({ compact = false }) {
  return (
    <section className={compact ? "" : "bg-white"}>
      <div className={compact ? "" : "mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8"}>
        {!compact && (
          <div className="mb-8 max-w-3xl">
            <p className={`${typography.eyebrow} text-red-600`}>Sertifikat resmi</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-blue-950`}>
              Authorized Dealer resmi Daikin, Midea, Hisense, dan Sansui.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sertifikat Authorized Dealer ini diterbitkan langsung oleh masing-masing brand.
              Garansi unit resmi brand berlaku, dan Radja AC membantu proses awal klaim bila ada kendala unit.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {certs.map((cert) => (
            <figure
              key={cert.brand}
              className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
                <Image
                  src={cert.image}
                  alt={`Sertifikat ${cert.status} ${cert.brand} Radja AC — bukti resmi dealer AC ${cert.brand} di Sokaraja, Banyumas`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 25vw, 50vw"
                  className="object-contain p-3"
                />
              </div>
              <figcaption className="border-t border-slate-100 px-4 py-3">
                <p className="text-sm font-bold text-blue-950">{cert.brand}</p>
                <p className={`mt-0.5 ${typography.eyebrow} text-slate-500`}>{cert.status}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
