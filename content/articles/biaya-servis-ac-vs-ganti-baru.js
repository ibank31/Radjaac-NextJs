import { routes } from "@/content/routes";

export const biayaServisAcVsGantiBaru = {
  slug: "biaya-servis-ac-vs-ganti-baru",
  path: routes.artikelBiayaServisVsGantiBaru,
  cluster: "troubleshooting",
  role: "supporting",
  intent: "commercial",
  parentSlug: "ac-kurang-dingin-belum-tentu-freon-habis",
  updatedAt: "2026-06-13",
  moneyLinks: [
    ["Katalog AC", routes.katalog, "Cek pilihan unit baru setelah kamu tahu kapan waktunya ganti."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung PK yang tepat sebelum beli unit pengganti."],
    ["Ganti AC Baru Purwokerto", routes.gantiAcBaruPurwokerto, "Solusi ganti AC lama ke unit baru di area Purwokerto dan sekitarnya."],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Cek cakupan paket pasang sebelum order unit baru."],
  ],
  title: "Biaya Servis AC vs Ganti Baru: Kapan Harus Berhenti Servis?",
  description:
    "Servis AC terus-terusan tapi tidak dingin juga? Hitung kapan biaya servis sudah tidak masuk akal dan saatnya ganti unit baru yang lebih hemat listrik.",
  h1: "Biaya servis AC vs ganti baru: kapan harus berhenti servis?",
  eyebrow: "Evaluasi AC Lama",
  readTime: "5 menit baca",
  intro:
    "Servis AC itu wajar. Tapi kalau kamu sudah servis dua kali dalam setahun dan AC tetap tidak dingin, ada yang perlu dihitung ulang. Bukan soal teknisinya — tapi soal apakah unit lama itu masih layak dipertahankan atau sudah saatnya diganti.",
  sections: [
    {
      heading: "Hitung total biaya servis dalam setahun",
      body: [
        "Catat semua pengeluaran servis AC kamu dalam 12 bulan terakhir: cuci AC, isi freon, ganti kapasitor, perbaikan PCB, dan lain-lain. Kalau totalnya sudah menyentuh 30–40% dari harga unit baru, kamu sedang membuang uang ke unit yang tidak akan membaik.",
        "Unit AC yang sudah berumur lebih dari 7–10 tahun biasanya masuk kategori ini. Komponen aus, efisiensi turun, dan biaya servis akan terus naik setiap tahunnya.",
      ],
    },
    {
      heading: "Tanda unit lama sudah tidak ekonomis dipertahankan",
      body: [
        "Ada beberapa tanda yang jelas: AC tidak dingin meski sudah diisi freon, tagihan listrik naik padahal pemakaian sama, suara kompresor kasar, air menetes dari indoor, atau unit sering mati sendiri. Satu tanda saja sudah cukup untuk mulai menghitung.",
        "Yang paling sering diabaikan adalah tagihan listrik. AC lama yang kompressornya sudah aus bekerja lebih keras untuk hasil yang sama — dan itu langsung terasa di tagihan bulanan.",
      ],
    },
    {
      heading: "Berapa penghematan nyata kalau ganti ke unit baru?",
      body: [
        "AC inverter baru yang PK-nya sesuai ruangan bisa memangkas konsumsi listrik 30–50% dibanding unit lama yang sudah aus. Kalau tagihan listrik kamu sekarang Rp 300.000 per bulan hanya dari AC, penghematan Rp 100.000–150.000 per bulan itu nyata.",
        "Dalam 2–3 tahun, selisih tagihan listrik itu sudah menutup sebagian besar harga unit baru. Belum ditambah kamu tidak perlu keluar biaya servis lagi.",
      ],
    },
    {
      heading: "Kapan servis masih masuk akal?",
      body: [
        "Servis masih masuk akal kalau unit baru berumur di bawah 3 tahun, masalahnya jelas dan terisolasi (misalnya filter kotor atau selang mampet), dan biaya servis jauh di bawah 20% harga unit baru.",
        "Di luar kondisi itu, terutama kalau unit sudah tua dan masalah datang silih berganti, ganti baru adalah keputusan yang lebih sehat secara finansial.",
      ],
    },
    {
      heading: "Langkah sebelum beli unit pengganti",
      body: [
        "Jangan langsung beli unit yang sama dengan yang lama. Ukur ruangan dulu, cek daya listrik, dan tentukan apakah kamu butuh standard, low watt, atau inverter. PK yang salah akan mengulang masalah yang sama.",
        "Kirim ukuran ruangan, daya listrik, dan kondisi unit lama ke tim Radja AC — tim bantu rekomendasikan unit pengganti yang sesuai dan tidak bikin kamu menyesal dua tahun lagi.",
      ],
    },
  ],
  faqs: [
    {
      question: "Berapa kali servis AC dalam setahun masih wajar?",
      answer:
        "Cuci AC rutin 3–6 bulan sekali itu normal. Tapi kalau dalam setahun kamu sudah isi freon lebih dari sekali atau ganti komponen dua kali, itu tanda unit sudah tidak efisien dan perlu dievaluasi.",
    },
    {
      question: "AC saya baru 4 tahun tapi sudah sering bermasalah, ganti atau servis?",
      answer:
        "Unit 4 tahun yang sering bermasalah biasanya karena instalasi awal yang kurang tepat atau PK yang tidak sesuai ruangan sehingga unit bekerja terlalu keras. Cek dulu akar masalahnya sebelum memutuskan. Kirim kondisi unit dan ukuran ruangan ke tim Radja AC untuk evaluasi.",
    },
    {
      question: "Apakah ganti AC baru otomatis lebih hemat listrik?",
      answer:
        "Ya, asalkan PK-nya sesuai ruangan dan kamu pilih tipe inverter untuk pemakaian rutin. Unit baru dengan komponen segar bekerja lebih efisien dibanding unit lama yang kompressornya sudah aus.",
    },
  ],
  ctaLabel: "Konsultasi Ganti AC Baru",
  waIntent: "konsultasi evaluasi AC lama dan pertimbangan ganti unit baru",
  relatedLinks: [
    ["Ganti AC Baru Purwokerto", routes.gantiAcBaruPurwokerto],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC Inverter", routes.katalogAcInverter],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["Kontak Radja AC", routes.kontak],
  ],
};
