/** @type {import('next').NextConfig} */
const legacyRedirects = [
  // Legacy parity redirects from previous RADJA AC static site.
  { source: "/brand", destination: "/brand/lainnya", permanent: true },
  { source: "/brand/", destination: "/brand/lainnya", permanent: true },
  { source: "/toko-ac-terdekat", destination: "/jual-ac-purwokerto", permanent: true },
  { source: "/toko-ac-terdekat/", destination: "/jual-ac-purwokerto", permanent: true },
  { source: "/toko-ac-terdekat-purwokerto", destination: "/jual-ac-purwokerto", permanent: true },
  { source: "/toko-ac-terdekat-purwokerto/", destination: "/jual-ac-purwokerto", permanent: true },
  { source: "/daikin-purwokerto", destination: "/brand/daikin", permanent: true },
  { source: "/daikin-purwokerto/", destination: "/brand/daikin", permanent: true },
  { source: "/gree-purwokerto", destination: "/brand/gree", permanent: true },
  { source: "/gree-purwokerto/", destination: "/brand/gree", permanent: true },
  { source: "/midea-purwokerto", destination: "/brand/midea", permanent: true },
  { source: "/midea-purwokerto/", destination: "/brand/midea", permanent: true },
  { source: "/hisense-purwokerto", destination: "/brand/hisense", permanent: true },
  { source: "/hisense-purwokerto/", destination: "/brand/hisense", permanent: true },
  { source: "/sansui-purwokerto", destination: "/brand/sansui", permanent: true },
  { source: "/sansui-purwokerto/", destination: "/brand/sansui", permanent: true },
  { source: "/sharp-purwokerto", destination: "/brand/sharp", permanent: true },
  { source: "/sharp-purwokerto/", destination: "/brand/sharp", permanent: true },
  { source: "/samsung-purwokerto", destination: "/brand/samsung", permanent: true },
  { source: "/samsung-purwokerto/", destination: "/brand/samsung", permanent: true },
  { source: "/panasonic-purwokerto", destination: "/brand/panasonic", permanent: true },
  { source: "/panasonic-purwokerto/", destination: "/brand/panasonic", permanent: true },
  { source: "/ac-inverter-purwokerto", destination: "/katalog/ac-inverter", permanent: true },
  { source: "/ac-inverter-purwokerto/", destination: "/katalog/ac-inverter", permanent: true },
  { source: "/ac-low-watt-purwokerto", destination: "/katalog/ac-low-watt", permanent: true },
  { source: "/ac-low-watt-purwokerto/", destination: "/katalog/ac-low-watt", permanent: true },
  { source: "/ac-purwokerto-selatan", destination: "/jual-ac-purwokerto", permanent: true },
  { source: "/ac-purwokerto-selatan/", destination: "/jual-ac-purwokerto", permanent: true },
  { source: "/instalasi-ac-banyumas", destination: "/jual-ac-purwokerto", permanent: true },
  { source: "/instalasi-ac-banyumas/", destination: "/jual-ac-purwokerto", permanent: true },
  { source: "/portfolio", destination: "/bukti-pengiriman-proyek", permanent: true },
  { source: "/portfolio/", destination: "/bukti-pengiriman-proyek", permanent: true },
  { source: "/gallery", destination: "/bukti-pengiriman-proyek", permanent: true },
  { source: "/gallery/", destination: "/bukti-pengiriman-proyek", permanent: true },
  { source: "/service-ac-purwokerto", destination: "/ganti-ac-baru-purwokerto", permanent: true },
  { source: "/service-ac-purwokerto/", destination: "/ganti-ac-baru-purwokerto", permanent: true },
  { source: "/cuci-ac-purwokerto", destination: "/ganti-ac-baru-purwokerto", permanent: true },
  { source: "/cuci-ac-purwokerto/", destination: "/ganti-ac-baru-purwokerto", permanent: true },
  { source: "/jual-ac-cilongok", destination: "/jual-ac-purwokerto", permanent: true },
  { source: "/jual-ac-cilongok/", destination: "/jual-ac-purwokerto", permanent: true },
  { source: "/instalasi-profesional", destination: "/pengiriman-pemasangan", permanent: true },
  { source: "/instalasi-profesional/", destination: "/pengiriman-pemasangan", permanent: true },
  {
    source: "/artikel/harga-ac-1-2-pk-purwokerto-pemasangan",
    destination: "/katalog/ac-1-2-pk",
    permanent: true,
  },
  {
    source: "/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto",
    destination: "/katalog/ac-low-watt",
    permanent: true,
  },
  {
    source: "/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto/",
    destination: "/katalog/ac-low-watt",
    permanent: true,
  },
  {
    source: "/artikel/harga-ac-daikin-purwokerto",
    destination: "/brand/daikin",
    permanent: true,
  },
  {
    source: "/artikel/daikin-inverter-purwokerto",
    destination: "/brand/daikin",
    permanent: true,
  },
  {
    source: "/artikel/harga-ac-gree-purwokerto",
    destination: "/brand/gree",
    permanent: true,
  },
  {
    source: "/artikel/harga-ac-midea-purwokerto",
    destination: "/brand/midea",
    permanent: true,
  },
  {
    source: "/artikel/ac-untuk-kost-purwokerto",
    destination: "/pengadaan-ac/kost-apartemen-skala-besar",
    permanent: true,
  },
  {
    source: "/pengadaan-ac-proyek",
    destination: "/pengadaan-ac",
    permanent: true,
  },
  {
    source: "/artikel/beli-ac-baru-purwokerto-panduan-sebelum-order",
    destination: "/artikel/panduan-beli-ac-baru",
    permanent: true,
  },
  {
    source: "/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang",
    destination: "/jual-ac-banyumas",
    permanent: true,
  },
  {
    source: "/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk",
    destination: "/jual-ac-purwokerto",
    permanent: true,
  },
  {
    source: "/artikel/samsung-inverter-purwokerto",
    destination: "/brand/samsung",
    permanent: true,
  },
];

const nextConfig = {
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
