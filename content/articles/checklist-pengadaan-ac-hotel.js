import { routes } from "@/content/routes";

export const checklistPengadaanAcHotel = {
  slug: "checklist-pengadaan-ac-hotel",
  path: routes.artikelChecklistPengadaanAcHotel,
  cluster: "b2b",
  role: "supporting",
  intent: "informational",
  parentSlug: "cara-menghitung-kebutuhan-ac-kost",
  updatedAt: "2026-06-15",
  moneyLinks: [
    ["Pengadaan AC Hotel", routes.pengadaanHotelGuestHouse, "Solusi pengadaan AC untuk hotel dan guest house."],
    ["AC Inverter", routes.katalogAcInverter, "Pilihan inverter untuk kamar tamu dengan pemakaian panjang."],
    ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Pilihan AC untuk lobby dan area publik hotel."],
    ["Pengadaan AC", routes.pengadaanAc, "Halaman utama pengadaan AC untuk berbagai kebutuhan B2B."],
  ],
  title: "Checklist Pengadaan AC untuk Hotel dan Guest House — Radja AC",
  description:
    "Checklist lengkap pengadaan AC hotel: kebutuhan kamar tamu, lobby, area publik, pemilihan brand seragam, jadwal pemasangan, dan koordinasi dengan okupansi.",
  h1: "Checklist pengadaan AC untuk hotel dan guest house",
  eyebrow: "Panduan Pengadaan AC Hotel",
  readTime: "7 menit baca",
  intro:
    "Pengadaan AC untuk hotel berbeda dengan rumah atau kost. Ada pertimbangan khusus seperti kenyamanan tamu, keseragaman antar kamar, area publik dengan beban berbeda, dan jadwal pemasangan yang tidak mengganggu operasional. Checklist ini membantu Anda mempersiapkan pengadaan dengan lebih terstruktur.",
  sections: [
    {
      heading: "Checklist 1: Data kamar tamu",
      body: [
        "Catat jumlah kamar tamu, tipe kamar (standard, deluxe, suite), dan ukuran masing-masing. Kamar dengan ukuran berbeda mungkin butuh kapasitas PK berbeda.",
        "Perhatikan juga kamar yang terkena matahari sore atau berada di lantai atas — kamar ini mungkin butuh kapasitas sedikit lebih besar untuk kenyamanan tamu.",
      ],
    },
    {
      heading: "Checklist 2: Area publik dan fasilitas",
      body: [
        "Selain kamar tamu, hotel biasanya punya area publik: lobby, resepsionis, ruang makan, meeting room, dan koridor. Setiap area punya kebutuhan berbeda.",
        "Lobby dan ruang makan dengan plafon tinggi dan banyak orang butuh kapasitas lebih besar. Meeting room butuh AC yang bisa menyesuaikan jumlah peserta yang bervariasi.",
      ],
    },
    {
      heading: "Checklist 3: Pemilihan brand dan tipe seragam",
      body: [
        "Untuk kamar tamu, sangat disarankan memilih brand dan tipe seragam. Ini menjaga konsistensi kenyamanan antar kamar dan memudahkan perawatan.",
        "Pertimbangkan juga tingkat kebisingan unit. Kamar tamu butuh AC yang operasinya senyap agar tidak mengganggu istirahat tamu.",
      ],
    },
    {
      heading: "Checklist 4: Kebutuhan daya listrik",
      body: [
        "Hitung total kebutuhan daya untuk semua unit AC. Pastikan kapasitas listrik bangunan mencukupi, terutama saat semua kamar terisi dan AC menyala bersamaan.",
        "Untuk hotel yang sudah beroperasi, pertimbangkan apakah perlu upgrade daya listrik sebelum menambah unit AC.",
      ],
    },
    {
      heading: "Checklist 5: Jadwal pemasangan",
      body: [
        "Pemasangan AC di hotel yang sudah beroperasi harus dijadwalkan agar tidak mengganggu tamu. Pilih waktu okupansi rendah atau lakukan bertahap per lantai.",
        "Koordinasikan dengan tim Radja AC untuk jadwal yang fleksibel. Pemasangan bisa dilakukan di luar jam check-in/check-out atau saat kamar kosong.",
      ],
    },
    {
      heading: "Checklist 6: Garansi dan layanan",
      body: [
        "Pastikan unit yang dibeli original dengan garansi resmi brand. Untuk hotel, downtime AC bisa langsung berdampak pada kepuasan tamu dan review.",
        "Tanyakan juga tentang respons layanan jika ada kendala. Hotel butuh penanganan cepat karena kamar yang AC-nya rusak tidak bisa dijual.",
      ],
    },
  ],
  faqs: [
    {
      question: "AC apa yang cocok untuk kamar hotel?",
      answer:
        "Pilih AC dengan operasi senyap dan efisiensi baik untuk pemakaian panjang. Inverter sering dipilih karena suhu lebih stabil dan lebih hemat untuk kamar yang AC-nya menyala sepanjang malam.",
    },
    {
      question: "Bisa pasang AC hotel tanpa mengganggu tamu?",
      answer:
        "Bisa. Pemasangan dijadwalkan saat okupansi rendah atau dilakukan bertahap per lantai. Koordinasikan jadwal dengan tim Radja AC.",
    },
    {
      question: "Berapa lama proses pengadaan AC untuk hotel?",
      answer:
        "Tergantung jumlah unit dan ketersediaan stok. Untuk hotel kecil (10-20 kamar), biasanya bisa diselesaikan dalam 1-2 minggu. Hotel lebih besar mungkin butuh pengadaan bertahap.",
    },
  ],
  ctaLabel: "Konsultasi Pengadaan AC Hotel",
  waIntent: "konsultasi checklist pengadaan AC untuk hotel atau guest house",
  relatedLinks: [
    ["Pengadaan AC Hotel", routes.pengadaanHotelGuestHouse],
    ["AC Inverter", routes.katalogAcInverter],
    ["Cara Menghitung AC Kost", routes.artikelCaraMenghitungKebutuhanAcKost],
    ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
    ["Kontak Radja AC", routes.kontak],
  ],
};
