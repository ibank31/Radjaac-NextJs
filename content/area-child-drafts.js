// STAGED CHILD AREA DRAFTS ONLY.
// Do not import this file into app routes, sitemap, or live components.
// To publish a child area, move one item into content/areas.js and add the final route intentionally.

const defaultChildRelatedLinks = [
  ["Jual AC", "/jual-ac"],
  ["Katalog AC", "/katalog"],
  ["Kalkulator PK AC", "/kalkulator-pk-ac"],
  ["Pengadaan AC", "/pengadaan-ac"],
  ["Kontak RADJA AC", "/kontak"],
];

function createChildAreaDraft({
  slug,
  areaName,
  parentAreaName,
  parentAreaPath,
  priority = "P2",
  localAngle,
  nearbyAreaLinks,
  publishGate,
}) {
  return {
    slug,
    path: `/${slug}`,
    areaName,
    label: `Jual AC ${areaName}`,
    title: `Jual AC ${areaName} untuk Rumah, Toko & Usaha — RADJA AC`,
    description: `Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di ${areaName}? RADJA AC bantu cek PK, stok, pengiriman unit, opsi pemasangan, dan pembayaran fleksibel via WhatsApp.`,
    h1: `Jual AC ${areaName} untuk Rumah, Toko & Usaha`,
    eyebrow: `Child Area ${parentAreaName}`,
    intro: `Butuh AC di ${areaName} untuk rumah, kamar, toko, kantor, usaha, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan data awal.`,
    localContext: `${areaName} disiapkan sebagai child area dari ${parentAreaName}. ${localAngle} Kirim lokasi detail, ukuran ruangan, daya listrik, jumlah unit, anggaran, dan kebutuhan unit saja atau opsi pemasangan agar tim RADJA AC bisa menyusun rekomendasi yang masuk akal.`,
    coverageNote: `Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area ${areaName} dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, akses lokasi, serta jadwal.`,
    keywordVariants: [
      `jual AC ${areaName}`,
      `AC rumah ${areaName}`,
      `AC toko ${areaName}`,
      `AC kantor ${areaName}`,
      `cek stok AC ${areaName}`,
      `pengiriman AC ${areaName}`,
      `opsi pemasangan AC ${areaName}`,
      `AC banyak unit ${areaName}`,
    ],
    nearbyAreaLinks,
    trustBullets: [
      "Cek kebutuhan PK dari ukuran ruangan, daya listrik, dan pola pemakaian harian",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      `Pengiriman dan opsi pemasangan dikonfirmasi berdasarkan alamat ${areaName} dan jumlah unit`,
      "Cocok untuk rumah, kost, toko, kantor kecil, usaha lokal, dan kebutuhan banyak unit",
    ],
    localFaq: [
      [
        `Apakah RADJA AC punya toko fisik di ${areaName}?`,
        `Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC ${areaName}, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.`,
      ],
      [
        `Bisa konsultasi AC untuk rumah, toko, atau kantor di ${areaName}?`,
        "Bisa. Kirim ukuran ruangan, daya listrik, lokasi detail, jumlah unit, preferensi brand, dan apakah butuh unit saja atau opsi pemasangan.",
      ],
      [
        `Apa hubungan halaman ${areaName} dengan ${parentAreaName}?`,
        `${areaName} diposisikan sebagai area turunan dari ${parentAreaName}. Halaman ini hanya boleh dipublish setelah parent/hub terkait sudah stabil dan internal link-nya masuk akal.`,
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
      ],
    ],
    commonNeeds: [
      `AC rumah tinggal dan kamar tidur di ${areaName}`,
      "AC kost, kontrakan, dan rumah sewa",
      "AC toko, ruko, kantor, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal, proyek, pengadaan, atau kebutuhan banyak unit",
    ],
    buyingChecks: [
      `Lokasi detail area ${areaName}`,
      "Ukuran ruangan dan estimasi kebutuhan PK",
      "Daya listrik dan kebutuhan low watt atau inverter",
      "Alamat pengiriman dan kebutuhan opsi pemasangan",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: defaultChildRelatedLinks,
    ctaLabel: `Chat WhatsApp untuk cek stok AC ${areaName}`,
    waIntent: `cek stok AC ${areaName} dengan data ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan`,
    waArea: areaName,

    parentAreaName,
    parentAreaPath,
    draftStatus: "ready",
    publishPriority: priority,
    draftType: "child-area",
    pageType: "area",
    canonicalPath: `/${slug}`,
    plannedRouteKey: slug
      .replace(/^jual-ac-/, "jualAc")
      .replace(/-([a-z])/g, (_, char) => char.toUpperCase()),
    sitemapPlan: {
      includeWhenPublished: true,
      changeFrequency: "weekly",
      priority: 0.65,
    },
    seoFocus: {
      primaryKeyword: `jual AC ${areaName}`,
      secondaryKeywords: [
        `AC rumah ${areaName}`,
        `AC toko ${areaName}`,
        `AC kantor ${areaName}`,
        `cek stok AC ${areaName}`,
        `pengiriman AC ${areaName}`,
        `opsi pemasangan AC ${areaName}`,
      ],
      buyerIntent:
        "Pembeli mencari AC baru untuk rumah, toko, kantor, usaha, atau banyak unit dengan kebutuhan cek PK, stok, pengiriman, dan opsi pemasangan.",
    },
    draftHeroImage: {
      src: "/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp",
      alt: `Showroom dan gudang RADJA AC sebagai referensi konsultasi AC ${areaName}`,
      caption: "Dokumentasi showroom dan gudang RADJA AC di Banyumas.",
      usageNote:
        "Generic proof. Jangan ditulis sebagai foto toko, cabang, atau showroom fisik di area child.",
    },
    draftProofImages: [
      {
        src: "/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp",
        alt: `Dokumentasi stok AC RADJA AC untuk konsultasi kebutuhan AC ${areaName}`,
        caption: "Dokumentasi stok unit AC RADJA AC.",
      },
      {
        src: "/photos/delivery/radja-ac-persiapan-pengiriman.webp",
        alt: `Dokumentasi persiapan pengiriman AC RADJA AC untuk kebutuhan area ${areaName}`,
        caption: "Dokumentasi persiapan pengiriman unit AC RADJA AC.",
      },
      {
        src: "/photos/installation/material-instalasi-ac-radja-ac-01.webp",
        alt: `Dokumentasi material instalasi AC RADJA AC untuk kebutuhan pemasangan area ${areaName}`,
        caption: "Dokumentasi material instalasi AC RADJA AC.",
      },
    ],
    incomingInternalLinkPlan: [
      parentAreaPath,
      "/jual-ac",
      "/katalog",
      "/kalkulator-pk-ac",
      ...nearbyAreaLinks.map(([, href]) => href),
    ],
    outgoingInternalLinkPlan: [
      parentAreaPath,
      "/jual-ac",
      "/katalog",
      "/katalog/ac-1-2-pk",
      "/katalog/ac-low-watt",
      "/katalog/ac-inverter",
      "/kalkulator-pk-ac",
      "/pengadaan-ac",
      "/kontak",
      ...nearbyAreaLinks.map(([, href]) => href),
    ],
    publishChecklist: [
      "Pastikan parent/hub sudah live dan stabil.",
      "Tambah route final di content/routes.js.",
      "Pindahkan draft item ke content/areas.js.",
      "Pastikan plannedRouteKey dipakai konsisten.",
      "Cek nearbyAreaLinks tidak menuju URL draft yang belum live.",
      "Pasang internal link masuk dari parent/hub bila masuk akal.",
      "Pastikan title, description, h1, localContext, coverageNote, FAQ, CTA, dan paymentNote tetap aman.",
      "Pastikan tidak ada klaim toko/cabang/showroom lokal palsu.",
      "Jalankan npm run check.",
      "Live check 200, canonical, sitemap, dan cache header.",
      "Request indexing hanya terbatas bila halaman prioritas dan live test bisa diindeks.",
    ],
    publishGate,
    safetyNotes: [
      "Belum live dan belum masuk sitemap.",
      "Jangan klaim toko, cabang, atau showroom lokal.",
      "Gunakan framing cek stok, pengiriman, dan opsi pemasangan dari Banyumas.",
      "Child page tidak boleh dipublish sebelum parent/hub siap.",
      "Publish maksimal 3–5 area per batch setelah data GSC/GA4 mendukung.",
    ],
  };
}

export const areaChildDraftItems = [
  createChildAreaDraft({
    slug: "jual-ac-sumbang",
    areaName: "Sumbang",
    parentAreaName: "Banyumas",
    parentAreaPath: "/jual-ac-banyumas",
    priority: "P1",
    localAngle:
      "Sumbang dekat dengan ring Purwokerto bagian utara/timur dan cocok diposisikan sebagai child Banyumas yang mendukung kebutuhan rumah, toko, dan usaha lokal.",
    nearbyAreaLinks: [
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Kembaran", "/jual-ac-kembaran"],
      ["Jual AC Baturraden", "/jual-ac-baturraden"],
    ],
    publishGate:
      "Publish setelah core Banyumas/Purwokerto stabil atau ada sinyal query area Sumbang.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-kedungbanteng",
    areaName: "Kedungbanteng",
    parentAreaName: "Banyumas",
    parentAreaPath: "/jual-ac-banyumas",
    priority: "P1",
    localAngle:
      "Kedungbanteng dekat dengan Purwokerto utara-barat sehingga relevan sebagai child area Banyumas yang masih dekat basis layanan.",
    nearbyAreaLinks: [
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Karanglewas", "/jual-ac-karanglewas"],
      ["Jual AC Baturraden", "/jual-ac-baturraden"],
    ],
    publishGate:
      "Publish setelah core Banyumas/Purwokerto stabil atau ada sinyal query area Kedungbanteng.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-kalibagor",
    areaName: "Kalibagor",
    parentAreaName: "Banyumas",
    parentAreaPath: "/jual-ac-banyumas",
    priority: "P1",
    localAngle:
      "Kalibagor berada di jalur Banyumas-Sokaraja sehingga cocok sebagai child area yang menguatkan sisi timur/selatan Banyumas.",
    nearbyAreaLinks: [
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Sokaraja", "/jual-ac-sokaraja"],
      ["Jual AC Kembaran", "/jual-ac-kembaran"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    publishGate:
      "Publish setelah Banyumas/Sokaraja stabil atau ada sinyal query area Kalibagor.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-kebasen",
    areaName: "Kebasen",
    parentAreaName: "Banyumas",
    parentAreaPath: "/jual-ac-banyumas",
    priority: "P1",
    localAngle:
      "Kebasen cocok sebagai child area Banyumas selatan yang berdekatan dengan Rawalo dan Patikraja.",
    nearbyAreaLinks: [
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Rawalo", "/jual-ac-rawalo"],
      ["Jual AC Patikraja", "/jual-ac-patikraja"],
      ["Jual AC Jatilawang", "/jual-ac-jatilawang"],
    ],
    publishGate:
      "Publish setelah Banyumas selatan stabil atau ada sinyal query area Kebasen.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-somagede",
    areaName: "Somagede",
    parentAreaName: "Banyumas",
    parentAreaPath: "/jual-ac-banyumas",
    priority: "P2",
    localAngle:
      "Somagede disiapkan sebagai child area Banyumas yang berdekatan dengan Banyumas dan Kalibagor.",
    nearbyAreaLinks: [
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Sokaraja", "/jual-ac-sokaraja"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
    ],
    publishGate:
      "Publish setelah Banyumas/Kalibagor stabil atau ada sinyal query area Somagede.",
  }),

  createChildAreaDraft({
    slug: "jual-ac-bobotsari",
    areaName: "Bobotsari",
    parentAreaName: "Purbalingga",
    parentAreaPath: "/jual-ac-purbalingga",
    priority: "P2",
    localAngle:
      "Bobotsari disiapkan sebagai child Purbalingga untuk kebutuhan rumah, toko, kantor kecil, dan usaha lokal.",
    nearbyAreaLinks: [
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
    ],
    publishGate:
      "Publish setelah Purbalingga stabil atau ada sinyal query area Bobotsari.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-kalimanah",
    areaName: "Kalimanah",
    parentAreaName: "Purbalingga",
    parentAreaPath: "/jual-ac-purbalingga",
    priority: "P2",
    localAngle:
      "Kalimanah dekat dengan pusat aktivitas Purbalingga sehingga cocok untuk child area kebutuhan rumah, toko, dan usaha.",
    nearbyAreaLinks: [
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Sokaraja", "/jual-ac-sokaraja"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
    ],
    publishGate:
      "Publish setelah Purbalingga stabil atau ada sinyal query area Kalimanah.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-kutasari",
    areaName: "Kutasari",
    parentAreaName: "Purbalingga",
    parentAreaPath: "/jual-ac-purbalingga",
    priority: "P2",
    localAngle:
      "Kutasari disiapkan sebagai child Purbalingga dengan framing cek stok, pengiriman, dan opsi pemasangan yang dikonfirmasi.",
    nearbyAreaLinks: [
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
    ],
    publishGate:
      "Publish setelah Purbalingga stabil atau ada sinyal query area Kutasari.",
  }),

  createChildAreaDraft({
    slug: "jual-ac-slawi",
    areaName: "Slawi",
    parentAreaName: "Tegal",
    parentAreaPath: "/jual-ac-tegal",
    priority: "P2",
    localAngle:
      "Slawi cocok sebagai child area Tegal karena sering menjadi pusat pencarian lokal untuk kebutuhan rumah, toko, kantor, dan usaha.",
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Brebes", "/jual-ac-brebes"],
      ["Jual AC Pemalang", "/jual-ac-pemalang"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    publishGate:
      "Publish setelah Tegal stabil atau ada sinyal query Slawi.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-adwerna",
    areaName: "Adwerna",
    parentAreaName: "Tegal",
    parentAreaPath: "/jual-ac-tegal",
    priority: "P2",
    localAngle:
      "Adwerna disiapkan sebagai child Tegal untuk kebutuhan rumah, toko, ruko, kantor kecil, dan usaha lokal.",
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Brebes", "/jual-ac-brebes"],
      ["Jual AC Pemalang", "/jual-ac-pemalang"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    publishGate:
      "Publish setelah Tegal stabil atau ada sinyal query Adwerna.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-talang",
    areaName: "Talang",
    parentAreaName: "Tegal",
    parentAreaPath: "/jual-ac-tegal",
    priority: "P2",
    localAngle:
      "Talang bisa menjadi child Tegal yang menangkap kebutuhan AC rumah, toko, kantor, dan usaha dengan pengiriman serta opsi pemasangan terkonfirmasi.",
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Brebes", "/jual-ac-brebes"],
      ["Jual AC Pemalang", "/jual-ac-pemalang"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    publishGate:
      "Publish setelah Tegal stabil atau ada sinyal query Talang.",
  }),

  createChildAreaDraft({
    slug: "jual-ac-gombong",
    areaName: "Gombong",
    parentAreaName: "Kebumen",
    parentAreaPath: "/jual-ac-kebumen",
    priority: "P2",
    localAngle:
      "Gombong cocok sebagai child Kebumen karena punya intent lokal cukup jelas untuk rumah, toko, kantor, dan usaha.",
    nearbyAreaLinks: [
      ["Jual AC Kebumen", "/jual-ac-kebumen"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Cilacap", "/jual-ac-cilacap"],
    ],
    publishGate:
      "Publish setelah Kebumen stabil atau ada sinyal query Gombong.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-karanganyar-kebumen",
    areaName: "Karanganyar Kebumen",
    parentAreaName: "Kebumen",
    parentAreaPath: "/jual-ac-kebumen",
    priority: "P2",
    localAngle:
      "Karanganyar Kebumen disiapkan sebagai child Kebumen dengan penamaan aman agar tidak bentrok dengan Karanganyar lain.",
    nearbyAreaLinks: [
      ["Jual AC Kebumen", "/jual-ac-kebumen"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Cilacap", "/jual-ac-cilacap"],
    ],
    publishGate:
      "Publish setelah Kebumen stabil atau ada sinyal query Karanganyar Kebumen.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-kutowinangun",
    areaName: "Kutowinangun",
    parentAreaName: "Kebumen",
    parentAreaPath: "/jual-ac-kebumen",
    priority: "P2",
    localAngle:
      "Kutowinangun disiapkan sebagai child Kebumen untuk kebutuhan AC rumah, toko, kantor kecil, dan usaha lokal.",
    nearbyAreaLinks: [
      ["Jual AC Kebumen", "/jual-ac-kebumen"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
    ],
    publishGate:
      "Publish setelah Kebumen stabil atau ada sinyal query Kutowinangun.",
  }),

  createChildAreaDraft({
    slug: "jual-ac-mandiraja",
    areaName: "Mandiraja",
    parentAreaName: "Banjarnegara",
    parentAreaPath: "/jual-ac-banjarnegara",
    priority: "P2",
    localAngle:
      "Mandiraja cocok sebagai child Banjarnegara karena berada di jalur regional yang masih relevan dengan Banyumas/Purwokerto.",
    nearbyAreaLinks: [
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    publishGate:
      "Publish setelah Banjarnegara stabil atau ada sinyal query Mandiraja.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-klampok",
    areaName: "Klampok",
    parentAreaName: "Banjarnegara",
    parentAreaPath: "/jual-ac-banjarnegara",
    priority: "P2",
    localAngle:
      "Klampok disiapkan sebagai child Banjarnegara dengan kebutuhan AC rumah, toko, kantor, dan usaha lokal.",
    nearbyAreaLinks: [
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    publishGate:
      "Publish setelah Banjarnegara stabil atau ada sinyal query Klampok.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-bawang-banjarnegara",
    areaName: "Bawang Banjarnegara",
    parentAreaName: "Banjarnegara",
    parentAreaPath: "/jual-ac-banjarnegara",
    priority: "P2",
    localAngle:
      "Bawang Banjarnegara disiapkan sebagai child Banjarnegara dengan penamaan aman agar tidak bentrok dengan Bawang di daerah lain.",
    nearbyAreaLinks: [
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    publishGate:
      "Publish setelah Banjarnegara stabil atau ada sinyal query Bawang Banjarnegara.",
  }),
];

export const areaChildDraftPublishRules = [
  "Child draft ini belum live, belum masuk sitemap, dan tidak boleh di-import ke app sebelum waktunya publish.",
  "Child page tidak boleh dipublish sebelum parent/hub live dan stabil.",
  "Publish maksimal 3–5 area per batch.",
  "Sebelum publish, tambah route final, pindahkan item ke content/areas.js, cek parent/nearby links, lalu jalankan npm run check.",
  "Jangan publish child area yang hanya swap nama tanpa localContext, parentAreaPath, nearby links, CTA, dan FAQ aman.",
];
