import { routes } from "@/content/routes";

export const panduanBoqAcKontraktor = {
  slug: "panduan-boq-ac-kontraktor",
  path: routes.artikelPanduanBoqAcKontraktor,
  cluster: "b2b",
  role: "supporting",
  intent: "informational",
  parentSlug: "cara-menghitung-kebutuhan-ac-kost",
  updatedAt: "2026-06-15",
  moneyLinks: [
    ["Pengadaan AC Kontraktor", routes.pengadaanKontraktorDeveloper, "Solusi supplier AC proyek untuk kontraktor dan developer."],
    ["Pengadaan AC Gedung", routes.pengadaanGedungKantorRuko, "Pengadaan AC untuk gedung, kantor, dan ruko."],
    ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Pilihan AC untuk kebutuhan komersial dan proyek."],
    ["Pengadaan AC", routes.pengadaanAc, "Halaman utama pengadaan AC untuk berbagai kebutuhan B2B."],
  ],
  title: "Panduan BOQ AC untuk Kontraktor dan Developer — Radja AC",
  description:
    "Panduan menyusun BOQ AC untuk proyek: cara menentukan spesifikasi, memilih brand alternatif sesuai RAB, dan koordinasi pengiriman mengikuti progres lapangan.",
  h1: "Panduan BOQ AC untuk kontraktor dan developer",
  eyebrow: "Panduan Pengadaan AC Proyek",
  readTime: "8 menit baca",
  intro:
    "Menyusun BOQ (Bill of Quantity) AC untuk proyek konstruksi membutuhkan pemahaman tentang spesifikasi teknis, alternatif brand sesuai anggaran, dan koordinasi pengiriman yang mengikuti progres lapangan. Panduan ini membantu kontraktor dan developer menyusun BOQ AC yang realistis dan dapat dieksekusi.",
  sections: [
    {
      heading: "Memahami kebutuhan proyek",
      body: [
        "Sebelum menyusun BOQ, pahami dulu kebutuhan proyek secara keseluruhan. Berapa jumlah titik AC? Apa fungsi masing-masing ruangan? Apakah ada standar khusus dari owner atau konsultan?",
        "Untuk proyek perumahan, kebutuhan biasanya standar: kamar tidur, ruang keluarga, dan mungkin ruang kerja. Untuk proyek komersial, kebutuhan lebih bervariasi: ruang kantor, meeting room, lobby, dan area publik.",
      ],
    },
    {
      heading: "Menentukan spesifikasi per titik",
      body: [
        "Setiap titik AC perlu spesifikasi yang jelas: kapasitas PK, tipe (standard/low watt/inverter), dan brand. Kapasitas ditentukan dari luas ruangan, fungsi, dan beban panas.",
        "Untuk BOQ, biasanya dicantumkan spesifikasi minimum dan brand referensi. Contoh: 'AC Split 1 PK Inverter, Daikin atau setara'. Ini memberi fleksibilitas untuk alternatif brand sesuai ketersediaan dan anggaran.",
      ],
    },
    {
      heading: "Memilih brand alternatif sesuai RAB",
      body: [
        "RAB proyek sering sudah ditetapkan, sehingga pemilihan brand harus menyesuaikan. Radja AC menyediakan berbagai brand: Daikin dan Gree untuk segmen premium, Midea dan Hisense untuk segmen value.",
        "Sebagai Authorized Dealer untuk Daikin, Midea, Hisense, dan Sansui, serta Proshop Gree, Radja AC bisa membantu menyediakan alternatif brand yang sesuai spesifikasi BOQ dan anggaran proyek.",
      ],
    },
    {
      heading: "Menyusun jadwal pengiriman",
      body: [
        "Pengiriman AC untuk proyek biasanya tidak sekaligus, tapi mengikuti progres lapangan. Unit dikirim saat ruangan sudah siap dipasang, bukan saat proyek baru mulai.",
        "Koordinasikan jadwal pengiriman dengan tim Radja AC. Pengiriman bisa bertahap per lantai atau per blok, mengikuti progres konstruksi dan kesiapan instalasi listrik.",
      ],
    },
    {
      heading: "Dokumentasi dan administrasi",
      body: [
        "Untuk proyek, dokumentasi penting untuk administrasi dan serah terima. Radja AC menyediakan dokumentasi pengiriman dan bisa membantu kelengkapan administrasi sesuai kebutuhan proyek.",
        "Pastikan juga garansi unit tercatat dengan baik. Garansi mengikuti ketentuan resmi brand, dan Radja AC membantu arahan klaim bila ada kendala unit.",
      ],
    },
    {
      heading: "Tips negosiasi untuk volume besar",
      body: [
        "Untuk proyek dengan volume besar (puluhan hingga ratusan unit), harga bisa lebih kompetitif. Kirim BOQ lengkap ke tim Radja AC untuk mendapatkan penawaran yang sesuai.",
        "Pertimbangkan juga untuk membangun hubungan jangka panjang. Kontraktor yang rutin mengerjakan proyek bisa mendapat prioritas stok dan layanan yang lebih responsif.",
      ],
    },
  ],
  faqs: [
    {
      question: "Radja AC bisa supply AC untuk proyek besar?",
      answer:
        "Bisa. Radja AC memiliki gudang sendiri dan bisa menyediakan puluhan hingga ratusan unit untuk proyek. Pengiriman dijadwalkan mengikuti progres lapangan.",
    },
    {
      question: "Brand apa saja yang tersedia untuk proyek?",
      answer:
        "Daikin, Gree, Midea, Hisense, Sansui, dan brand lain sesuai stok. Sebagai Authorized Dealer dan Proshop, unit yang disediakan original dengan garansi resmi.",
    },
    {
      question: "Bisa bantu susun spesifikasi BOQ?",
      answer:
        "Bisa. Kirim data proyek (jumlah titik, fungsi ruangan, anggaran) dan tim Radja AC bantu rekomendasikan spesifikasi dan brand yang sesuai.",
    },
    {
      question: "Bagaimana sistem pembayaran untuk proyek?",
      answer:
        "Sistem pembayaran bisa disesuaikan dengan kebutuhan proyek: termin, DP + pelunasan, atau sesuai kesepakatan. Diskusikan dengan tim Radja AC.",
    },
  ],
  ctaLabel: "Konsultasi BOQ AC Proyek",
  waIntent: "konsultasi panduan BOQ AC untuk proyek kontraktor atau developer",
  relatedLinks: [
    ["Pengadaan AC Kontraktor", routes.pengadaanKontraktorDeveloper],
    ["Pengadaan AC Gedung", routes.pengadaanGedungKantorRuko],
    ["Cara Menghitung AC Kost", routes.artikelCaraMenghitungKebutuhanAcKost],
    ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
    ["Kontak Radja AC", routes.kontak],
  ],
};
