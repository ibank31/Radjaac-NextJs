import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { brandItems, featuredBrandItems, getBrandItem } from "@/content/brands";
import { warrantyHighlights } from "@/content/policies";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const dynamicParams = false;

const heroImages = {
  gree: "/photos/display/display-gree-residential-ac-radja-ac.webp",
  sharp: "/photos/delivery/radja-ac-persiapan-pengiriman.webp",
  hisense: "/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp",
  panasonic: "/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp",
  default: "/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp",
};

const checklist = [
  "Ukuran ruangan dan tinggi plafon bila ada",
  "Daya listrik rumah atau tempat usaha",
  "Jenis ruangan dan jam pemakaian",
  "Jumlah unit dan kapasitas PK yang dibutuhkan",
  "Preferensi standard, low watt, atau inverter",
  "Alamat pengiriman dan kebutuhan pemasangan",
];

const pkGuide = [
  ["½ PK", "± 9–12 m²", "Kamar kecil atau ruang kerja"],
  ["¾ PK", "± 12–15 m²", "Kamar sedang"],
  ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor, atau toko"],
  ["2 PK", "± 30–40 m²", "Ruangan besar dan usaha"],
];

const relatedLinks = [
  ["Katalog AC", routes.katalog],
  ["Kalkulator PK AC", routes.kalkulatorPkAc],
  ["AC Inverter", routes.katalogAcInverter],
  ["AC Low Watt", routes.katalogAcLowWatt],
  ["Bukti Pengiriman", routes.buktiPengirimanProyek],
  ["Kontak RADJA AC", routes.kontak],
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-blue-300">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{description}</p> : null}
    </div>
  );
}

export function generateStaticParams() {
  return brandItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getBrandItem(slug);

  if (!item) return {};

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
  });
}

export default async function BrandDetailPage({ params }) {
  const { slug } = await params;
  const item = getBrandItem(slug);

  if (!item) notFound();

  const relatedBrands = brandItems.filter((brandItem) => brandItem.slug !== item.slug);
  const heroImage = heroImages[item.slug] ?? heroImages.default;
  const isGree = item.slug === "gree";
  const chips = isGree
    ? ["Proshop Gree", "Cek stok dulu", "Standard / low watt / inverter", "Bantu klaim sesuai ketentuan"]
    : ["Cek stok dulu", "Rekomendasi PK", "Pengiriman unit", "Opsi pemasangan"];

  const faqItems = [
    [`Apakah RADJA AC menyediakan ${item.label} original?`, `RADJA AC membantu cek pilihan ${item.label} original sesuai stok terbaru. Tipe, harga, pengiriman, opsi pemasangan, dan garansi unit tetap dikonfirmasi admin sebelum pembelian.`],
    [`Berapa harga ${item.label} terbaru?`, "Harga mengikuti kapasitas PK, tipe unit, stok, promo, alamat pengiriman, dan kebutuhan pemasangan. Kirim kebutuhan lewat WhatsApp agar admin cek estimasi terbaru."],
    [`${item.label} cocok untuk ruangan apa?`, "Kecocokan tergantung ukuran ruangan, tinggi plafon, paparan panas matahari, daya listrik, dan pola pemakaian."],
    ["Bisa beli unit saja tanpa pemasangan?", "Bisa dibahas. Kebutuhan unit saja, pengiriman, atau opsi pemasangan akan dikonfirmasi sesuai stok, alamat, jumlah unit, dan jadwal."],
    ["Apa saja data yang perlu dikirim ke admin?", "Kirim ukuran ruangan, daya listrik, jenis ruangan, jumlah unit, preferensi tipe, lokasi, dan foto titik indoor-outdoor bila ingin opsi pemasangan."],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_28%)]" />
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <Link href={routes.katalog} className="mb-5 inline-flex text-sm font-black text-blue-200 transition hover:text-white">← Kembali ke Katalog AC</Link>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <span className="h-2 w-2 rounded-full bg-orange-400" /> {item.eyebrow}
            </div>
            <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
              {item.h1}
              <span className="block text-blue-300">Cek stok, tipe, PK, dan opsi pemasangan</span>
            </h1>
            <p className="mb-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{item.intro}</p>
            <p className="mb-6 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">Stok, tipe, harga, pengiriman, dan opsi pemasangan dikonfirmasi admin sebelum Anda deal.</p>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]" source={`Brand ${item.name}`} intent={item.waIntent} brand={item.waBrand}>{item.ctaLabel}</WhatsappLink>
              <a href="#pilihan-tipe" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:border-blue-300/30 hover:bg-white/[0.05]">Lihat Pilihan Tipe</a>
              <Link href={routes.buktiPengirimanProyek} className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:border-blue-300/30 hover:bg-white/[0.05]">Foto Showroom & Stok</Link>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-white/65">{chips.map((chip) => <span key={chip} className="rounded-full border border-blue-300/10 bg-white/[0.035] px-3 py-1">{chip}</span>)}</div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:mr-0">
            <div className="overflow-hidden rounded-[34px] border border-blue-300/10 bg-slate-950/70 p-3 shadow-2xl">
              <Image src={heroImage} alt={`Showcase ${item.label} di RADJA AC`} width={900} height={1100} className="h-[390px] w-full rounded-[26px] object-cover object-center sm:h-[520px] lg:h-[600px]" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-start gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-sm font-semibold text-orange-200">Status & Kejelasan Brand</div>
            <h2 className="mb-4 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">Cek {item.label} dengan stok, tipe, dan garansi yang jelas</h2>
            <p className="mb-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{item.trustNote}</p>
            {item.certificateHolder ? <p className="mb-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">Dokumen brand terkait: {item.certificateHolder}.</p> : null}
            {item.highlightedNote ? <p className="mb-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">{item.highlightedNote}</p> : null}
            <div className="grid gap-3 sm:grid-cols-2"><div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-bold text-white/80">Stok dikonfirmasi admin</div><div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-bold text-white/80">Garansi unit mengikuti ketentuan brand</div></div>
          </div>
          <div className="overflow-hidden rounded-[34px] border border-blue-300/20 bg-slate-950/70 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.45)]"><Image src="/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp" alt="Showroom RADJA AC dan stok unit AC multi-brand" width={900} height={640} className="w-full rounded-[26px] object-cover" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle eyebrow="Garansi & Bantuan Klaim" title={`Beli ${item.label}, jangan berhenti di unit saja`} description="Garansi unit mengikuti ketentuan resmi brand. Untuk opsi pemasangan, kebutuhan material, pengiriman, dan bantuan awal klaim, admin akan menjelaskan alurnya sebelum pembelian." />
        <div className="grid gap-5 md:grid-cols-3">{warrantyHighlights.map((point) => <div key={point} className="rounded-[28px] border border-blue-300/15 bg-blue-300/[0.055] p-6"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-300/10 text-blue-200">✓</div><h3 className="text-lg font-black text-white">{point}</h3></div>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 sm:p-8"><div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Kapasitas PK</div><h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Jangan pilih {item.label} hanya dari nama brand</h2><p className="mb-5 text-sm leading-7 text-white/65 sm:text-base">Kapasitas tetap mengikuti ukuran ruangan, daya listrik, posisi ruangan, dan pola pemakaian. Tabel ini hanya panduan awal.</p><div className="grid gap-3">{pkGuide.map(([pk, size, fit]) => <div key={pk} className="grid gap-2 rounded-2xl border border-white/10 bg-slate-950/45 p-4 sm:grid-cols-[0.4fr_0.7fr_1fr]"><div className="font-black text-blue-200">{pk}</div><div className="text-sm font-bold text-white">{size}</div><div className="text-sm text-white/58">{fit}</div></div>)}</div></div>
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 sm:p-8"><div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Pilihan Awal</div><h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Standard, low watt, atau inverter?</h2><div className="grid gap-3">{item.variants.map((variant) => <div key={variant} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><div className="mb-1 text-sm font-semibold text-blue-200">{item.name} {variant}</div><p className="text-sm leading-6 text-white/58">Cocok tidaknya tipe ini bergantung pada ukuran ruangan, daya listrik, jam pemakaian, budget, dan stok terbaru.</p></div>)}</div><p className="mt-4 text-xs leading-6 text-slate-400">Estimasi bukan harga final. Admin tetap cek stok, tipe, harga, pengiriman, dan kebutuhan pemasangan terbaru.</p></div>
        </div>
      </section>

      <section id="pilihan-tipe" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle eyebrow="Pilihan Tipe" title={`${item.label}: pilih berdasarkan ruangan, bukan asal tipe`} description="Tipe yang tersedia bisa berubah mengikuti stok. Gunakan WhatsApp untuk cek unit yang benar-benar tersedia dan paling sesuai dengan kebutuhan ruangan." />
        <div className="grid gap-5 md:grid-cols-3">{item.variants.map((variant) => <article key={variant} className="rounded-[30px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.06]"><p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-blue-300">Tipe {item.name}</p><h3 className="mb-3 text-2xl font-black text-white">{variant}</h3><p className="text-sm leading-7 text-white/60">Cek kecocokan {variant.toLowerCase()} berdasarkan ruangan, daya listrik, budget, dan stok terbaru.</p><WhatsappLink className="mt-5 inline-flex rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]" source={`Brand ${item.name} - ${variant}`} intent={`cek stok AC ${item.name} ${variant}`} brand={item.waBrand}>Cek Stok {variant}</WhatsappLink></article>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle eyebrow="Checklist Sebelum Chat" title="Agar admin bisa cek stok dan estimasi lebih cepat" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{checklist.map((point) => <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold leading-6 text-white/70"><span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-300 text-xs font-black text-slate-950">✓</span>{point}</div>)}</div>
      </section>

      {item.otherBrands?.length ? <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16"><SectionTitle eyebrow="Brand yang Bisa Dicek" title="Pilihan multi-brand sesuai stok terbaru" /><div className="flex flex-wrap justify-center gap-3">{item.otherBrands.map((brand) => <span key={brand} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white/75">{brand}</span>)}</div></section> : null}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16"><SectionTitle eyebrow="Halaman Terkait" title="Lanjutkan dari brand ke kebutuhan ruangan" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{relatedLinks.map(([title, href]) => <Link key={href} href={href} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-blue-300/30"><h3 className="text-lg font-black text-white">{title}</h3></Link>)}</div></section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16"><SectionTitle eyebrow="FAQ" title={`Pertanyaan umum ${item.label}`} /><div className="grid gap-5 md:grid-cols-2">{faqItems.map(([question, answer]) => <div key={question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"><h3 className="mb-3 font-bold text-white">{question}</h3><p className="text-sm leading-7 text-white/60">{answer}</p></div>)}</div></section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16"><SectionTitle eyebrow="Brand Lain" title="Belum yakin pilih brand apa?" /><div className="flex flex-wrap justify-center gap-3">{relatedBrands.slice(0, 10).map((relatedBrand) => <Link key={relatedBrand.slug} href={relatedBrand.path} className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10">{relatedBrand.label}</Link>)}<Link href={routes.katalog} className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10">Katalog AC</Link></div></section>

      {item.slug === "lainnya" ? <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16"><SectionTitle eyebrow="Brand Utama" title="Brand utama RADJA AC" /><div className="flex flex-wrap justify-center gap-3">{featuredBrandItems.map((brand) => <Link key={brand.slug} href={brand.path} className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10">{brand.label}</Link>)}</div></section> : null}

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20"><div className="rounded-[34px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10"><h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">Mau cek stok {item.label} terbaru?</h2><p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/70">Kirim ukuran ruangan, daya listrik, lokasi, budget, dan kebutuhan pemasangan. Admin bantu cek stok, tipe, estimasi, pengiriman, dan opsi pemasangan sebelum deal.</p><WhatsappLink className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]" source={`Brand ${item.name} - Final CTA`} intent={item.waIntent} brand={item.waBrand}>Cek Stok & Harga Sekarang</WhatsappLink></div></section>
    </main>
  );
}
