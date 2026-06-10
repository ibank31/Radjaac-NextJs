// STAGED AREA DRAFTS ONLY.
// Do not import this file into app routes, sitemap, or live components.
// To publish an area, move one item into content/areas.js and add the final route intentionally.

const defaultDraftRelatedLinks = [
  ["Jual AC", "/jual-ac"],
  ["Katalog AC", "/katalog"],
  ["Kalkulator PK AC", "/kalkulator-pk-ac"],
  ["Pengadaan AC", "/pengadaan-ac"],
  ["Kontak Radja AC", "/kontak"],
];

function createRegionalAreaDraft({
  slug,
  areaName,
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
    title: `Jual AC ${areaName} untuk Rumah, Toko & Usaha — Radja AC`,
    description: `Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di ${areaName}? Radja AC bantu cek PK, stok, pengiriman unit, opsi pemasangan, dan pembayaran fleksibel via WhatsApp.`,
    h1: `Jual AC ${areaName} untuk Rumah, Toko & Usaha`,
    eyebrow: "Area Regional Bertahap",
    intro: `Butuh AC di ${areaName} untuk rumah, kamar, toko, kantor, usaha, atau banyak unit? Tim Radja AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan data awal.`,
    localContext: `${areaName} termasuk area regional yang perlu ditangani dengan data awal yang jelas. ${localAngle} Kirim lokasi detail, ukuran ruangan, daya listrik, jumlah unit, anggaran, dan kebutuhan unit saja atau opsi pemasangan agar tim Radja AC bisa menyusun rekomendasi yang masuk akal.`,
    coverageNote: `Showroom dan gudang Radja AC berada di Banyumas. Kebutuhan AC area ${areaName} dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, akses lokasi, serta jadwal.`,
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
        `Apakah Radja AC punya toko fisik di ${areaName}?`,
        `Showroom dan gudang Radja AC berada di Banyumas. Untuk kebutuhan AC ${areaName}, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.`,
      ],
      [
        `Bisa konsultasi AC untuk rumah, toko, atau kantor di ${areaName}?`,
        "Bisa. Kirim ukuran ruangan, daya listrik, lokasi detail, jumlah unit, preferensi brand, dan apakah butuh unit saja atau opsi pemasangan.",
      ],
      [
        `Apa yang perlu disiapkan sebelum cek stok AC ${areaName}?`,
        "Siapkan ukuran ruangan, daya listrik, tipe bangunan, anggaran awal, jumlah unit, dan alamat pengiriman agar tim Radja AC bisa memberi arahan yang lebih tepat.",
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim Radja AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
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
    relatedLinks: defaultDraftRelatedLinks,
    ctaLabel: `Chat WhatsApp untuk cek stok AC ${areaName}`,
    waIntent: `cek stok AC ${areaName} dengan data ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan`,
    waArea: areaName,

    draftStatus: "ready",
    publishPriority: priority,
    draftType: "regional-area",
    publishGate,
    plannedRouteKey: slug
      .replace(/^jual-ac-/, "jualAc")
      .replace(/-([a-z])/g, (_, char) => char.toUpperCase()),
    pageType: "area",
    canonicalPath: `/${slug}`,
    sitemapPlan: {
      includeWhenPublished: true,
      changeFrequency: "weekly",
      priority: priority === "P1" ? 0.75 : 0.7,
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
      alt: `Showroom dan gudang Radja AC sebagai referensi konsultasi AC ${areaName}`,
      caption: "Dokumentasi showroom dan gudang Radja AC di Banyumas.",
      usageNote:
        "Generic proof. Jangan ditulis sebagai foto toko, cabang, atau showroom fisik di area draft.",
    },
    draftProofImages: [
      {
        src: "/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp",
        alt: `Dokumentasi stok AC Radja AC untuk konsultasi kebutuhan AC ${areaName}`,
        caption: "Dokumentasi stok unit AC Radja AC.",
      },
      {
        src: "/photos/delivery/radja-ac-persiapan-pengiriman.webp",
        alt: `Dokumentasi persiapan pengiriman AC Radja AC untuk kebutuhan area ${areaName}`,
        caption: "Dokumentasi persiapan pengiriman unit AC Radja AC.",
      },
      {
        src: "/photos/installation/material-instalasi-ac-radja-ac-01.webp",
        alt: `Dokumentasi material instalasi AC Radja AC untuk kebutuhan pemasangan area ${areaName}`,
        caption: "Dokumentasi material instalasi AC Radja AC.",
      },
    ],
    incomingInternalLinkPlan: [
      "/jual-ac",
      "/katalog",
      "/kalkulator-pk-ac",
      ...nearbyAreaLinks.map(([, href]) => href),
    ],
    outgoingInternalLinkPlan: [
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
      "Tambah route final di content/routes.js.",
      "Pindahkan draft item ke content/areas.js.",
      "Pastikan plannedRouteKey dipakai konsisten.",
      "Cek nearbyAreaLinks tidak menuju URL draft yang belum live.",
      "Pasang internal link masuk dari hub atau area relevan bila masuk akal.",
      "Pastikan title, description, h1, localContext, coverageNote, FAQ, CTA, dan paymentNote tetap aman.",
      "Pastikan tidak ada klaim toko/cabang/showroom lokal palsu.",
      "Jalankan npm run check.",
      "Live check 200, canonical, sitemap, dan cache header.",
      "Request indexing hanya terbatas bila halaman prioritas dan live test bisa diindeks.",
    ],
    safetyNotes: [
      "Belum live dan belum masuk sitemap.",
      "Jangan klaim toko, cabang, atau showroom lokal.",
      "Gunakan framing cek stok, pengiriman, dan opsi pemasangan dari Banyumas.",
      "Publish maksimal 3–5 area per batch setelah data GSC/GA4 mendukung.",
    ],
  };
}

export const areaDraftItems = [
  createRegionalAreaDraft({
    slug: "jual-ac-magelang",
    areaName: "Magelang",
    priority: "P2",
    localAngle:
      "Area Magelang bisa masuk sebagai regional hub setelah core Banyumas ring stabil karena intent rumah, toko, usaha, dan banyak unit cukup jelas.",
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    publishGate:
      "Publish setelah core Banyumas ring stabil atau ada sinyal query/impression Magelang.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-salatiga",
    areaName: "Salatiga",
    priority: "P2",
    localAngle:
      "Salatiga berada di koridor Semarang-Solo sehingga lebih aman diposisikan sebagai area regional, bukan klaim toko lokal.",
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    publishGate:
      "Publish setelah Semarang/Solo punya sinyal GSC yang cukup atau ada lead regional terkait Salatiga.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-pekalongan",
    areaName: "Pekalongan",
    priority: "P2",
    localAngle:
      "Pekalongan cocok disiapkan sebagai area Pantura dengan kebutuhan rumah, ruko, toko, kantor, dan usaha lokal.",
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
    ],
    publishGate:
      "Publish setelah Tegal atau area Pantura mulai menunjukkan impression/query yang relevan.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-pemalang",
    areaName: "Pemalang",
    priority: "P2",
    localAngle:
      "Pemalang disiapkan sebagai area Pantura pendamping Tegal/Pekalongan dengan angle cek stok, pengiriman unit, dan opsi pemasangan.",
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
    ],
    publishGate:
      "Publish setelah Tegal stabil atau ada sinyal GSC/lead untuk Pemalang/Pantura.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-brebes",
    areaName: "Brebes",
    priority: "P2",
    localAngle:
      "Brebes lebih aman diposisikan sebagai area regional yang butuh konfirmasi alamat, stok, pengiriman, dan opsi pemasangan sejak awal.",
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
    ],
    publishGate:
      "Publish setelah Tegal mendapat data yang cukup atau ada query/lead area Brebes.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-wonosobo",
    areaName: "Wonosobo",
    priority: "P2",
    localAngle:
      "Wonosobo cocok disiapkan sebagai regional mountain area dengan kebutuhan rumah, penginapan, usaha lokal, dan banyak unit yang perlu dicek detail lokasinya.",
    nearbyAreaLinks: [
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
    ],
    publishGate:
      "Publish setelah Banjarnegara/Purwokerto stabil atau ada sinyal query Wonosobo.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-temanggung",
    areaName: "Temanggung",
    priority: "P2",
    localAngle:
      "Temanggung bisa menjadi area regional pendukung Magelang-Semarang dengan kebutuhan rumah, toko, kantor kecil, dan usaha lokal.",
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
    ],
    publishGate:
      "Publish setelah Magelang siap dipublish atau ada data area Temanggung dari GSC/lead.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-kudus",
    areaName: "Kudus",
    priority: "P2",
    localAngle:
      "Kudus disiapkan sebagai area regional Jateng utara/timur dengan kebutuhan rumah, ruko, kantor, usaha, dan banyak unit.",
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
    ],
    publishGate:
      "Publish setelah Semarang/Solo stabil atau ada sinyal query Kudus.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-jepara",
    areaName: "Jepara",
    priority: "P2",
    localAngle:
      "Jepara lebih aman masuk sebagai area regional yang butuh cek alamat, pengiriman, dan opsi pemasangan sebelum transaksi.",
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
    ],
    publishGate:
      "Publish setelah Semarang/Kudus punya sinyal cukup atau ada kebutuhan lead area Jepara.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-demak",
    areaName: "Demak",
    priority: "P2",
    localAngle:
      "Demak disiapkan sebagai area regional dekat Semarang dengan kebutuhan rumah, toko, kantor, usaha, dan banyak unit.",
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
      ["Jual AC Tegal", "/jual-ac-tegal"],
    ],
    publishGate:
      "Publish setelah Semarang stabil atau ada sinyal query Demak.",
  }),
];

export const areaDraftPublishRules = [
  "Draft ini belum live, belum masuk sitemap, dan tidak boleh di-import ke app sebelum waktunya publish.",
  "Publish maksimal 3–5 area per batch.",
  "Sebelum publish, tambah route final, pindahkan item ke content/areas.js, cek internal link, lalu jalankan npm run check.",
  "Jangan publish area yang hanya swap nama tanpa localContext, nearby links, CTA, dan FAQ aman.",
];
