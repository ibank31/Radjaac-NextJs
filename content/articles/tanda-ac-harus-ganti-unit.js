import { routes } from "@/content/routes";

export const tandaAcHarusGantiUnit = {
  slug: "tanda-ac-harus-ganti-unit",
  path: routes.artikelTandaAcHarusGantiUnit,
  cluster: "troubleshooting",
  role: "supporting",
  intent: "commercial",
  parentSlug: "biaya-servis-ac-vs-ganti-baru",
  updatedAt: "2026-06-13",
  moneyLinks: [
    ["Ganti AC Baru Purwokerto", routes.gantiAcBaruPurwokerto, "Solusi ganti AC lama ke unit baru di area Purwokerto dan sekitarnya."],
    ["Katalog AC", routes.katalog, "Cek pilihan unit baru setelah kamu tahu kapan waktunya ganti."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung PK yang tepat untuk unit pengganti."],
    ["Kontak Radja AC", routes.kontak, "Kirim kondisi unit lama dan ukuran ruangan untuk evaluasi."],
  ],
  title: "5 Tanda AC Harus Ganti Unit, Bukan Servis Lagi",
  description:
    "AC mati sendiri, bunyi kasar, atau tidak dingin meski sudah diisi freon? Kenali 5 tanda AC sudah waktunya diganti, bukan dirawat terus.",
  h1: "5 tanda AC harus ganti unit, bukan servis lagi",
  eyebrow: "Evaluasi AC Lama",
  readTime: "4 menit baca",
  intro:
    "Banyak orang terus servis AC yang sebenarnya sudah tidak layak dipertahankan. Bukan karena tidak mau ganti, tapi karena tidak tahu kapan batas wajarnya. Ini 5 tanda yang jelas bahwa AC kamu sudah waktunya diganti.",
  sections: [
    {
      heading: "1. Sudah diisi freon tapi tetap tidak dingin",
      body: [
        "Freon habis itu gejala, bukan penyebab. Kalau AC sudah diisi freon tapi dalam 1–2 bulan tidak dingin lagi, ada kebocoran yang tidak ketemu atau komponen lain yang sudah aus. Isi freon terus-terusan bukan solusi — itu hanya menunda pengeluaran yang lebih besar.",
      ],
    },
    {
      heading: "2. Tagihan listrik naik tanpa perubahan pemakaian",
      body: [
        "Ini tanda paling sering diabaikan. Kalau tagihan listrik naik 20–40% padahal pemakaian AC sama seperti biasanya, kompressor unit sudah bekerja tidak efisien. Unit baru dengan PK yang sesuai akan langsung terasa bedanya di tagihan bulan pertama.",
      ],
    },
    {
      heading: "3. Suara kompresor kasar atau unit sering mati sendiri",
      body: [
        "Suara kasar dari outdoor biasanya tanda bearing atau kompressor sudah aus. Unit yang sering mati sendiri bisa karena proteksi termal aktif karena kompressor kepanasan. Dua kondisi ini biaya perbaikannya bisa mendekati atau melebihi harga unit baru.",
      ],
    },
    {
      heading: "4. Unit sudah lebih dari 10 tahun",
      body: [
        "Umur teknis AC split umumnya 10–15 tahun dengan perawatan rutin. Di atas 10 tahun, efisiensi turun dan spare part mulai sulit dicari. Kalau unit kamu sudah di rentang ini dan mulai bermasalah, ganti baru adalah keputusan yang lebih masuk akal daripada terus menambal.",
      ],
    },
    {
      heading: "5. Biaya servis dalam setahun sudah di atas 30% harga unit baru",
      body: [
        "Hitung semua pengeluaran servis dalam 12 bulan terakhir. Kalau totalnya sudah menyentuh sepertiga harga unit baru, kamu sedang membuang uang ke unit yang tidak akan membaik. Lebih baik uang itu dipakai untuk DP unit baru yang efisien.",
      ],
    },
    {
      heading: "Langkah setelah memutuskan ganti",
      body: [
        "Jangan beli unit yang sama dengan yang lama. Ukur ruangan, cek daya listrik, dan tentukan tipe yang sesuai pola pemakaian. Kirim data itu ke tim Radja AC — tim bantu rekomendasikan unit pengganti yang tepat PK dan tidak mengulang masalah yang sama.",
      ],
    },
  ],
  ctaLabel: "Konsultasi Ganti AC Baru",
  waIntent: "konsultasi tanda AC harus ganti unit dan rekomendasi unit pengganti",
  relatedLinks: [
    ["Biaya Servis vs Ganti Baru", routes.artikelBiayaServisVsGantiBaru],
    ["Ganti AC Baru Purwokerto", routes.gantiAcBaruPurwokerto],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC Inverter", routes.katalogAcInverter],
    ["Kontak Radja AC", routes.kontak],
  ],
};
