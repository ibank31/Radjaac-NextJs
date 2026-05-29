/** @type {import('next').NextConfig} */
const legacyRedirects = [
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
