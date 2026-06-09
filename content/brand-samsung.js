import { routes } from "@/content/routes";

// Samsung premium content (source of truth: radjaac-premium SamsungPurwokerto.jsx).
// "AC original" status — no certificate section, so statusBlock is null.
// Kapasitas & Harga uses the two-column layout (capacity options + price tiers).

const HERO_IMAGE = "/photos/showroom/showroom-utama.webp";
const PRODUCT_IMAGE = "/photos/product-display/samsung-samsung-inverter.webp";

export const samsungPremiumContent = {
  hero: {
    image: HERO_IMAGE,
    imageAlt: "Showroom RADJA AC — dealer AC Samsung inverter",
    badge: "AC SAMSUNG INVERTER — RADJA AC",
    breadcrumbLabel: "Samsung",
    titleLead: "AC Samsung Original",
    titleHighlight: "Cek Stok, Harga & Pemasangan Dulu Sebelum Deal",
    paragraphs: [
      "Cari AC Samsung Original untuk kamar, kost, rumah, atau kantor kecil? Stok dicek dulu, PK dihitung dari ukuran ruangan, harga pasang dijelaskan dari awal. RADJA AC melayani area yang dikonfirmasi.",
    ],
    primaryCtaLabel: "Cek Stok & Harga Samsung Sekarang",
    secondaryCtaLabel: "Lihat Pilihan Samsung",
    secondaryCtaHref: "#produk-samsung",
    showShowroomLink: false,
    chips: [
      "Mulai 4 jutaan",
      "Garansi teknisi 1 bulan",
      "Bantu arahan klaim unit",
      "Pengiriman by konfirmasi",
      "Samsung Inverter",
      "Unit + pemasangan",
    ],
  },

  statusBlock: null,

  warranty: {
    eyebrow: "Garansi & Bantuan Klaim",
    title: "Garansi teknisi jelas, klaim unit bisa dibantu arahannya",
    description:
      "Garansi teknisi 1 bulan untuk kendala yang berhubungan dengan pekerjaan pemasangan. Garansi unit mengikuti kartu garansi Samsung di dalam kemasan — bukan dari toko. Kalau ada kendala unit, RADJA AC bisa bantu arahan proses klaim ke brand terkait sesuai ketentuan resmi.",
    cards: [
      {
        title: "Garansi teknisi 1 bulan",
        description:
          "Berlaku untuk kendala yang berhubungan dengan pekerjaan pemasangan atau instalasi dari teknisi RADJA AC — bukan untuk kerusakan unit.",
      },
      {
        title: "Garansi unit ikut ketentuan Samsung",
        description:
          "Garansi produk mengikuti kartu garansi Samsung yang ada di dalam kemasan unit. Bukan garansi dari toko, bukan dari RADJA AC.",
      },
      {
        title: "Bisa dibantu arahan klaim",
        description:
          "Kalau ada kendala pada unit, RADJA AC bisa bantu arahan proses klaim garansi ke Samsung sesuai ketentuan resmi selama dokumen dan bukti tersedia.",
      },
    ],
  },

  price: {
    capacity: {
      eyebrow: "Kapasitas PK",
      title: "Tidak cuma 1/2 PK — Samsung tersedia sampai 2 PK sesuai ruangan",
      description:
        "Untuk kebutuhan di atas 1/2 PK, RADJA AC melayani Samsung 3/4 PK, 1 PK, 1.5 PK, sampai 2 PK sesuai stok. Kirim ukuran ruangan dan daya listrik — admin bantu arahin kapasitas yang paling pas.",
      options: [
        "1/2 PK untuk kamar kecil, kost, kontrakan, atau ruang kerja — cek daya listrik dulu",
        "3/4 PK dan 1 PK untuk kamar sedang sampai besar, ruang keluarga kecil, atau toko kecil",
        "1.5 PK sampai 2 PK untuk ruang lebih besar, kantor, ruko, dan kebutuhan komersial ringan",
      ],
    },
    eyebrow: "Estimasi Harga",
    title: "Patokan harga AC Samsung Original sebelum chat",
    description:
      "Angka di bawah ini adalah estimasi awal untuk paket AC + pemasangan standar. Paket standar sudah termasuk unit AC, pipa 2 meter, kabel 5 meter, bracket outdoor 1 set, duct tape, selang pembuangan, dan vacuum AC.",
    footnote:
      "Untuk tipe lain dan 3/4 PK ke atas, admin bantu cek stok dan harga terbaru via WhatsApp.",
    tiers: [
      [
        "Samsung Inverter ½ PK",
        "Mulai 4 jutaan",
        "Unit + pasang standar. Dapat inverter dari brand yang sudah sangat dikenal — desain lebih modern, fitur lebih lengkap, dan cocok untuk pemakaian rutin.",
      ],
      [
        "¾ PK sampai 2 PK",
        "Cek via WhatsApp",
        "Admin cek stok dan harga langsung sesuai kapasitas yang dibutuhkan.",
      ],
    ],
  },

  character: {
    eyebrow: "Kenapa Samsung",
    title: "Samsung inverter layak dicek untuk apa saja?",
    description:
      "Samsung cocok untuk pembeli yang mau brand besar, familiar, dan pilihan inverter yang solid — untuk kamar, kost, rumah, atau kantor kecil di berbagai area pengiriman.",
    cards: [
      {
        title: "Brand besar, pilihan inverter cukup lengkap",
        description:
          "Samsung dikenal luas dan punya pilihan inverter yang solid. Cocok untuk yang mau AC modern dari brand familiar tanpa harus banyak riset brand kurang dikenal.",
      },
      {
        title: "Suhu stabil untuk ruangan yang sering dipakai",
        description:
          "Samsung inverter lebih nyaman untuk kamar atau ruang keluarga yang AC-nya menyala lama. Kompressor tidak kerja keras tiap kali mencapai suhu target — lebih efisien dan tidak berisik.",
      },
      {
        title: "Stok dan PK dicek dulu sebelum deal",
        description:
          "Stok Samsung tidak selalu sama tiap waktu. RADJA AC bantu cek stok yang ready, hitung PK sesuai ruangan, dan estimasi biaya pasang — supaya tidak kaget setelah teknisi datang.",
      },
    ],
  },

  products: {
    anchorId: "produk-samsung",
    eyebrow: "Pilihan Samsung",
    title: "Pilihan AC Samsung sesuai kebutuhan ruangan",
    description:
      "Stok AC Samsung Original dicek dulu sebelum deal. Ukuran PK, daya listrik, dan posisi pemasangan ikut menentukan unit mana yang paling pas untuk ruangan Anda.",
    priorityLabel: "Perlu diperhatikan",
    items: [
      {
        title: "Samsung Inverter 1/2 PK",
        badge: "Inverter",
        image: PRODUCT_IMAGE,
        fit: "Kamar tidur, kamar anak, kost, kontrakan, atau ruang kerja pribadi",
        priority: "Ukuran ruangan dan daya listrik dicek dulu biar PK-nya pas",
        description:
          "Stok dicek dulu — jangan sampai sudah cocok ternyata kosong. Paket unit + pasang standar bisa dibahas langsung via WhatsApp sesuai kondisi lokasi.",
        highlights: ["Samsung", "Inverter", "1/2 PK"],
        cta: "Cek Stok Samsung Inverter ½ PK",
      },
      {
        title: "Samsung untuk Kamar & Kost",
        badge: "Kamar",
        image: PRODUCT_IMAGE,
        fit: "Kamar tidur, kamar anak, kost, kontrakan, dan ruangan kecil sampai sedang",
        priority: "PK jangan asal kecil karena murah — nanti AC kerja keras dan kamar tetap panas",
        description:
          "Untuk kamar area yang dikonfirmasi, admin bantu hitung PK dari ukuran ruangan, paparan matahari, daya listrik, dan jam pemakaian. Lebih aman konsultasi dulu daripada asal pasang.",
        highlights: ["Kamar", "Kost", "Cek PK"],
        cta: "Konsultasi Samsung untuk Kamar",
      },
      {
        title: "Samsung untuk Ruang Keluarga & Rumah",
        badge: "Harian",
        image: PRODUCT_IMAGE,
        fit: "Ruang keluarga, ruang santai, kamar utama, atau kantor kecil",
        priority: "Ruangan lebih besar butuh PK lebih besar — jangan samakan dengan kamar tidur",
        description:
          "Kalau masih bingung antara Samsung, Panasonic, Sharp, Midea, atau brand lain, admin bisa bantu bandingkan sesuai budget dan kebutuhan ruangan. Chat dulu tidak harus langsung deal.",
        highlights: ["Ruang Keluarga", "Modern", "Inverter"],
        cta: "Cek Samsung untuk Ruang Keluarga",
      },
    ],
  },

  checklist: {
    eyebrow: "Sebelum Beli",
    title: "Kirim info ini dulu — biar rekomendasi PK tidak asal",
    description:
      "Makin lengkap info yang dikirim, makin cepat admin bantu cek stok Samsung yang cocok, estimasi harga, dan kebutuhan pemasangan. Chat dulu tidak harus langsung deal.",
    items: [
      "Ukuran ruangan dan tinggi plafon kalau ada",
      "Daya listrik rumah, kost, atau tempat usaha — jangan sampai MCB sering turun",
      "Jenis ruangan: kamar tidur, ruang keluarga, kost, toko, ruko, atau kantor kecil",
      "Jumlah unit yang dibutuhkan sekarang",
      "Cek tipe Samsung inverter yang ready sesuai stok hari ini",
      "Foto titik indoor-outdoor kalau butuh pemasangan",
    ],
  },

  pk: {
    eyebrow: "Panduan PK",
    title: "Perkiraan PK untuk ruangan yang dikonfirmasi",
    description:
      "Panduan cepat sebelum konsultasi. Angka ini perkiraan saja — ukuran final menyesuaikan kondisi ruangan, paparan matahari, jumlah pengguna, dan daya listrik. Jangan asal ambil 1/2 PK hanya karena harganya lebih murah.",
    guide: [
      ["½ PK", "± 9–12 m²", "Kamar kecil, kost, atau ruang kerja pribadi"],
      ["¾ PK", "± 12–15 m²", "Kamar sedang dan ruang santai"],
      ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
      ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor, atau toko"],
      ["2 PK", "± 30–40 m²", "Ruangan besar dan kebutuhan komersial"],
    ],
    cta: null,
  },

  internalLinks: {
    eyebrow: "Baca Juga",
    title: "Referensi sebelum beli AC Samsung",
    description:
      "Kalau masih bingung antara Samsung dengan brand lain, atau masih menimbang tipe inverter vs standard, halaman-halaman ini bisa membantu.",
    links: [
      {
        title: "AC Inverter",
        description: "Bandingkan pilihan AC inverter dari berbagai brand untuk pemakaian rutin dan suhu lebih stabil.",
        href: routes.katalogAcInverter,
      },
      {
        title: "AC Split Rumah",
        description: "Lihat pilihan AC untuk kamar, kost, kontrakan, dan rumah tinggal sesuai stok terbaru.",
        href: routes.katalogAcSplitRumah,
      },
      {
        title: "Konsultasi AC Samsung",
        description: "Cek dulu stok, harga, dan brand yang ready sebelum datang ke showroom RADJA AC.",
        href: routes.kontak,
      },
      {
        title: "Jual AC Original",
        description: "Halaman utama untuk bandingkan brand, cek stok, dan konsultasi rekomendasi PK sesuai ruangan.",
        href: routes.jualAcPurwokerto,
      },
    ],
  },

  closing: {
    title: "Mau beli AC Samsung inverter? Cek stok dan PK dulu.",
    description:
      "Kirim ukuran ruangan, daya listrik, lokasi, dan budget. Admin RADJA AC bantu cek stok Samsung yang ready, rekomendasikan PK yang pas, jelaskan harga pasang dari awal, dan atur jadwal teknisi. Chat dulu tidak harus langsung deal.",
    buttonLabel: "Cek Stok & Harga Samsung Sekarang",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan seputar AC Samsung Original",
  },
};
