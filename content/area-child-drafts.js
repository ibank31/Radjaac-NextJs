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
  keywordVariantsOverride,
  trustBulletsOverride,
  localFaqOverride,
  commonNeedsOverride,
  buyingChecksOverride,
  relatedLinksOverride,
  prePublishNotes = [],
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
    keywordVariants: keywordVariantsOverride ?? [
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
    trustBullets: trustBulletsOverride ?? [
      "Cek kebutuhan PK dari ukuran ruangan, daya listrik, dan pola pemakaian harian",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      `Pengiriman dan opsi pemasangan dikonfirmasi berdasarkan alamat ${areaName} dan jumlah unit`,
      "Cocok untuk rumah, kost, toko, kantor kecil, usaha lokal, dan kebutuhan banyak unit",
    ],
    localFaq: localFaqOverride ?? [
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
    commonNeeds: commonNeedsOverride ?? [
      `AC rumah tinggal dan kamar tidur di ${areaName}`,
      "AC kost, kontrakan, dan rumah sewa",
      "AC toko, ruko, kantor, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal, proyek, pengadaan, atau kebutuhan banyak unit",
    ],
    buyingChecks: buyingChecksOverride ?? [
      `Lokasi detail area ${areaName}`,
      "Ukuran ruangan dan estimasi kebutuhan PK",
      "Daya listrik dan kebutuhan low watt atau inverter",
      "Alamat pengiriman dan kebutuhan opsi pemasangan",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: relatedLinksOverride ?? defaultChildRelatedLinks,
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
    prePublishNotes,
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
    keywordVariantsOverride: [
      "jual AC Sumbang",
      "AC rumah Sumbang",
      "AC kost Sumbang",
      "AC toko Sumbang",
      "AC kantor kecil Sumbang",
      "cek stok AC Sumbang",
      "pengiriman AC Sumbang",
      "opsi pemasangan AC Sumbang",
      "AC banyak unit Sumbang",
    ],
    commonNeedsOverride: [
      "AC kamar tidur dan ruang keluarga untuk rumah area Sumbang",
      "AC kost, kontrakan, dan rumah sewa sekitar Sumbang",
      "AC toko, warung, ruko kecil, kantor kecil, dan ruang usaha lokal",
      "Pembelian beberapa unit untuk rumah keluarga, usaha, properti sewa, atau kebutuhan bertahap",
    ],
    buyingChecksOverride: [
      "Alamat detail area Sumbang dan akses pengiriman dari Banyumas",
      "Ukuran ruangan, tinggi plafon, dan paparan panas siang hari",
      "Daya listrik rumah/usaha serta kebutuhan standard, low watt, atau inverter",
      "Jumlah unit, preferensi brand, anggaran, dan kebutuhan unit saja atau opsi pemasangan",
    ],
    trustBulletsOverride: [
      "Sumbang diposisikan sebagai ring utara/timur Purwokerto yang masih dekat dengan basis layanan Banyumas.",
      "Kebutuhan AC dibaca dari ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan alamat detail.",
      "Pengiriman dan opsi pemasangan dikonfirmasi dari data lokasi, akses pekerjaan, dan jadwal yang memungkinkan.",
      "Tidak ada klaim cabang lokal; konsultasi tetap diarahkan ke showroom dan gudang RADJA AC di Banyumas.",
    ],
    localFaqOverride: [
      [
        "Apakah RADJA AC melayani pembelian AC area Sumbang?",
        "Bisa dikonsultasikan. Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Sumbang, dan kebutuhan unit saja atau opsi pemasangan agar tim RADJA AC mengecek stok serta arahan PK.",
      ],
      [
        "Apakah ada toko RADJA AC di Sumbang?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk area Sumbang, tim membantu cek stok, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
      ],
      [
        "AC apa yang cocok untuk rumah, kost, atau toko di Sumbang?",
        "Pilihan AC dibaca dari ukuran ruangan, panas ruangan, daya listrik, jam pemakaian, anggaran, dan stok aktif. Brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya bisa dicek sesuai ketersediaan.",
      ],
      [
        "Data apa yang perlu dikirim untuk cek AC Sumbang?",
        "Kirim lokasi detail, ukuran ruangan, daya listrik, jumlah unit, kebutuhan unit saja atau pemasangan, preferensi brand, dan target anggaran.",
      ],
    ],
    relatedLinksOverride: [
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Kembaran", "/jual-ac-kembaran"],
      ["Jual AC Baturraden", "/jual-ac-baturraden"],
      ["Katalog AC", "/katalog"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Kontak RADJA AC", "/kontak"],
    ],
    prePublishNotes: [
      "Cocok sebagai batch 1 karena menguatkan ring utara/timur Purwokerto.",
      "Saat publish, pastikan internal link masuk dari Banyumas, Purwokerto, Kembaran, dan Baturraden bila relevan.",
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
    keywordVariantsOverride: [
      "jual AC Kedungbanteng",
      "AC rumah Kedungbanteng",
      "AC villa Kedungbanteng",
      "AC toko Kedungbanteng",
      "AC kantor kecil Kedungbanteng",
      "cek stok AC Kedungbanteng",
      "pengiriman AC Kedungbanteng",
      "opsi pemasangan AC Kedungbanteng",
      "AC banyak unit Kedungbanteng",
    ],
    commonNeedsOverride: [
      "AC rumah tinggal, kamar tidur, dan ruang keluarga area Kedungbanteng",
      "AC untuk villa, homestay, guest house kecil, atau properti sewa sekitar jalur utara Purwokerto",
      "AC toko, ruko kecil, kantor kecil, dan ruang usaha lokal",
      "Pembelian beberapa unit untuk rumah besar, usaha, penginapan kecil, atau kebutuhan bertahap",
    ],
    buyingChecksOverride: [
      "Alamat detail Kedungbanteng dan akses lokasi dari arah Purwokerto/Banyumas",
      "Ukuran ruangan, tinggi plafon, sirkulasi, dan kondisi panas sekitar bangunan",
      "Daya listrik, pilihan low watt/inverter, dan durasi pemakaian harian",
      "Jumlah unit, preferensi brand, anggaran, dan kebutuhan pengiriman atau opsi pemasangan",
    ],
    trustBulletsOverride: [
      "Kedungbanteng diposisikan sebagai ring utara-barat Purwokerto yang dekat dengan Baturraden dan Karanglewas.",
      "Cocok untuk kebutuhan rumah, usaha lokal, properti sewa, dan beberapa unit dengan pengecekan PK lebih dulu.",
      "Stok, pengiriman, dan opsi pemasangan dikonfirmasi berdasarkan data lokasi dan jumlah unit.",
      "Tidak ada klaim showroom lokal; bukti operasional tetap mengacu ke RADJA AC Banyumas.",
    ],
    localFaqOverride: [
      [
        "Apakah RADJA AC melayani AC area Kedungbanteng?",
        "Bisa dikonsultasikan. Kirim alamat detail Kedungbanteng, ukuran ruangan, daya listrik, jumlah unit, dan kebutuhan unit saja atau pemasangan agar tim mengecek stok serta arahan PK.",
      ],
      [
        "Apakah cocok untuk villa, homestay, atau properti sewa di Kedungbanteng?",
        "Bisa. Untuk properti sewa atau penginapan kecil, tim membaca jumlah kamar, ukuran ruangan, daya listrik, pola pemakaian, dan kebutuhan unit bertahap.",
      ],
      [
        "Apakah ada toko RADJA AC di Kedungbanteng?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk Kedungbanteng, konsultasi dimulai dari WhatsApp agar stok, pengiriman, dan opsi pemasangan dicek lebih dulu.",
      ],
      [
        "Data apa yang paling penting untuk cek AC Kedungbanteng?",
        "Data awal yang membantu: ukuran ruangan, daya listrik, jumlah unit, alamat detail, preferensi brand, anggaran, dan kebutuhan unit saja atau opsi pemasangan.",
      ],
    ],
    relatedLinksOverride: [
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Karanglewas", "/jual-ac-karanglewas"],
      ["Jual AC Baturraden", "/jual-ac-baturraden"],
      ["AC Inverter", "/katalog/ac-inverter"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Kontak RADJA AC", "/kontak"],
    ],
    prePublishNotes: [
      "Cocok sebagai batch 1 karena menguatkan ring utara-barat Purwokerto.",
      "Saat publish, pastikan tidak memakai klaim cabang/toko lokal di Kedungbanteng.",
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
    keywordVariantsOverride: [
      "jual AC Kalibagor",
      "AC rumah Kalibagor",
      "AC toko Kalibagor",
      "AC kantor kecil Kalibagor",
      "AC usaha Kalibagor",
      "cek stok AC Kalibagor",
      "pengiriman AC Kalibagor",
      "opsi pemasangan AC Kalibagor",
      "AC banyak unit Kalibagor",
    ],
    commonNeedsOverride: [
      "AC rumah tinggal, kamar tidur, dan ruang keluarga area Kalibagor",
      "AC toko, warung, ruko kecil, kantor kecil, klinik ringan, dan ruang usaha",
      "AC untuk bangunan keluarga atau beberapa ruangan di jalur Banyumas-Sokaraja",
      "Pembelian beberapa unit untuk usaha lokal, properti sewa, atau kebutuhan bertahap",
    ],
    buyingChecksOverride: [
      "Alamat detail Kalibagor dan kedekatan akses ke Banyumas/Sokaraja",
      "Ukuran ruangan, tinggi plafon, arah panas, dan jumlah orang di ruangan",
      "Daya listrik, pilihan standard/low watt/inverter, dan jam pemakaian",
      "Jumlah unit, preferensi brand, target anggaran, pengiriman, dan kebutuhan opsi pemasangan",
    ],
    trustBulletsOverride: [
      "Kalibagor diposisikan sebagai child area jalur Banyumas-Sokaraja.",
      "Kebutuhan AC cocok dimulai dari cek ukuran ruangan, daya listrik, stok aktif, dan pilihan brand.",
      "Pengiriman serta opsi pemasangan dikonfirmasi berdasarkan alamat detail dan kondisi lokasi.",
      "Konsultasi tetap diarahkan ke RADJA AC Banyumas tanpa klaim toko/cabang lokal.",
    ],
    localFaqOverride: [
      [
        "Apakah RADJA AC melayani pembelian AC area Kalibagor?",
        "Bisa dikonsultasikan. Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Kalibagor, dan kebutuhan unit saja atau pemasangan agar tim RADJA AC mengecek stok dan arahan PK.",
      ],
      [
        "Kalibagor lebih dekat ke Banyumas atau Sokaraja?",
        "Kalibagor diposisikan sebagai area jalur Banyumas-Sokaraja. Saat konsultasi, alamat detail tetap diperlukan untuk mengecek pengiriman dan opsi pemasangan.",
      ],
      [
        "Bisa untuk toko, kantor kecil, atau usaha di Kalibagor?",
        "Bisa. Kirim fungsi ruangan, ukuran, jumlah orang, daya listrik, jumlah unit, dan target anggaran agar pilihan AC lebih masuk akal.",
      ],
      [
        "Apakah bisa cek stok brand tertentu untuk Kalibagor?",
        "Bisa. Sebutkan brand yang diminati seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, atau lainnya. Tim akan cek stok aktif dan opsi yang sesuai kebutuhan ruangan.",
      ],
    ],
    relatedLinksOverride: [
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Sokaraja", "/jual-ac-sokaraja"],
      ["Jual AC Kembaran", "/jual-ac-kembaran"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["AC 1/2 PK", "/katalog/ac-1-2-pk"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Kontak RADJA AC", "/kontak"],
    ],
    prePublishNotes: [
      "Cocok sebagai batch 1 karena menguatkan jalur Banyumas-Sokaraja.",
      "Saat publish, pastikan incoming link masuk dari Banyumas dan Sokaraja.",
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
    keywordVariantsOverride: [
      "jual AC Gombong",
      "AC rumah Gombong",
      "AC toko Gombong",
      "AC kantor Gombong",
      "AC ruko Gombong",
      "cek stok AC Gombong",
      "pengiriman AC Gombong",
      "opsi pemasangan AC Gombong",
      "AC banyak unit Gombong",
    ],
    commonNeedsOverride: [
      "AC kamar tidur, ruang keluarga, dan rumah tinggal area Gombong",
      "AC toko, ruko, kantor kecil, klinik ringan, dan ruang usaha lokal",
      "AC untuk kost, kontrakan, properti sewa, atau beberapa ruangan",
      "Pembelian beberapa unit untuk usaha lokal, penginapan kecil, atau kebutuhan bertahap",
    ],
    buyingChecksOverride: [
      "Alamat detail Gombong dan akses pengiriman dari jalur Kebumen/Banyumas",
      "Ukuran ruangan, tinggi plafon, arah panas, dan jumlah orang di ruangan",
      "Daya listrik, pilihan standard/low watt/inverter, dan jam pemakaian harian",
      "Jumlah unit, preferensi brand, target anggaran, kebutuhan unit saja atau opsi pemasangan",
    ],
    trustBulletsOverride: [
      "Gombong diposisikan sebagai child area Kebumen dengan intent lokal yang cukup kuat untuk rumah, toko, ruko, kantor kecil, dan usaha.",
      "Kebutuhan AC dibaca dari ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan alamat detail.",
      "Pengiriman dan opsi pemasangan dikonfirmasi berdasarkan lokasi, akses pekerjaan, jumlah unit, dan jadwal yang memungkinkan.",
      "Tidak ada klaim toko/cabang/showroom lokal di Gombong; konsultasi diarahkan sebagai layanan cek stok dan pengiriman RADJA AC.",
    ],
    localFaqOverride: [
      [
        "Apakah RADJA AC melayani pembelian AC area Gombong?",
        "Bisa dikonsultasikan. Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Gombong, dan kebutuhan unit saja atau opsi pemasangan agar tim RADJA AC mengecek stok serta arahan PK.",
      ],
      [
        "Apakah ada toko RADJA AC di Gombong?",
        "Tidak ada klaim toko atau cabang lokal di Gombong. Kebutuhan AC Gombong diarahkan melalui konsultasi WhatsApp untuk cek stok, pengiriman, dan opsi pemasangan berdasarkan data lokasi.",
      ],
      [
        "AC apa yang cocok untuk rumah, toko, atau ruko di Gombong?",
        "Pilihan AC dibaca dari ukuran ruangan, panas ruangan, jumlah orang, daya listrik, jam pemakaian, anggaran, dan stok aktif. Brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya bisa dicek sesuai ketersediaan.",
      ],
      [
        "Data apa yang perlu dikirim untuk cek AC Gombong?",
        "Kirim alamat detail, ukuran ruangan, daya listrik, jumlah unit, kebutuhan unit saja atau pemasangan, preferensi brand, dan target anggaran.",
      ],
    ],
    relatedLinksOverride: [
      ["Jual AC Kebumen", "/jual-ac-kebumen"],
      ["Jual AC Cilacap", "/jual-ac-cilacap"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["AC 1/2 PK", "/katalog/ac-1-2-pk"],
      ["AC Low Watt", "/katalog/ac-low-watt"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Kontak RADJA AC", "/kontak"],
    ],
    prePublishNotes: [
      "Kandidat batch luar Banyumas karena parent Kebumen sudah live dan Gombong punya intent lokal yang lebih jauh dari Maps Purwokerto.",
      "Saat publish, pastikan incoming link masuk dari Kebumen dan tidak memakai klaim toko/cabang lokal Gombong.",
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
    keywordVariantsOverride: [
      "jual AC Karanganyar Kebumen",
      "AC rumah Karanganyar Kebumen",
      "AC toko Karanganyar Kebumen",
      "AC kantor Karanganyar Kebumen",
      "AC usaha Karanganyar Kebumen",
      "cek stok AC Karanganyar Kebumen",
      "pengiriman AC Karanganyar Kebumen",
      "opsi pemasangan AC Karanganyar Kebumen",
      "AC banyak unit Karanganyar Kebumen",
    ],
    commonNeedsOverride: [
      "AC rumah tinggal, kamar tidur, dan ruang keluarga area Karanganyar Kebumen",
      "AC toko, ruko kecil, kantor kecil, warung, dan ruang usaha lokal",
      "AC untuk kost, kontrakan, rumah sewa, atau beberapa ruangan",
      "Pembelian beberapa unit untuk usaha, properti sewa, pengadaan kecil, atau kebutuhan bertahap",
    ],
    buyingChecksOverride: [
      "Alamat detail Karanganyar Kebumen agar tidak tertukar dengan Karanganyar daerah lain",
      "Ukuran ruangan, tinggi plafon, arah panas, dan fungsi ruangan",
      "Daya listrik, kebutuhan low watt/inverter, dan jam pemakaian harian",
      "Jumlah unit, preferensi brand, anggaran, pengiriman, dan kebutuhan opsi pemasangan",
    ],
    trustBulletsOverride: [
      "Karanganyar Kebumen memakai penamaan aman agar tidak bentrok dengan Karanganyar lain.",
      "Kebutuhan AC cocok dimulai dari cek ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan alamat detail.",
      "Pengiriman serta opsi pemasangan dikonfirmasi berdasarkan lokasi, akses pekerjaan, dan jadwal.",
      "Tidak ada klaim toko/cabang/showroom lokal; halaman ini disiapkan sebagai child area dari Kebumen.",
    ],
    localFaqOverride: [
      [
        "Apakah halaman ini untuk Karanganyar Kebumen?",
        "Ya. Penamaan Karanganyar Kebumen dipakai agar tidak tertukar dengan Karanganyar di daerah lain. Kirim alamat detail saat konsultasi agar pengecekan pengiriman dan opsi pemasangan lebih jelas.",
      ],
      [
        "Apakah RADJA AC melayani pembelian AC area Karanganyar Kebumen?",
        "Bisa dikonsultasikan. Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Karanganyar Kebumen, dan kebutuhan unit saja atau pemasangan agar tim mengecek stok serta arahan PK.",
      ],
      [
        "Apakah ada toko RADJA AC di Karanganyar Kebumen?",
        "Tidak ada klaim toko atau cabang lokal di Karanganyar Kebumen. Kebutuhan diarahkan lewat WhatsApp untuk cek stok, rekomendasi PK, pengiriman, dan opsi pemasangan.",
      ],
      [
        "Bisa untuk toko, ruko, kantor kecil, atau usaha di Karanganyar Kebumen?",
        "Bisa. Kirim fungsi ruangan, ukuran, daya listrik, jumlah unit, jam pemakaian, dan target anggaran agar pilihan AC lebih masuk akal.",
      ],
    ],
    relatedLinksOverride: [
      ["Jual AC Kebumen", "/jual-ac-kebumen"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Cilacap", "/jual-ac-cilacap"],
      ["AC Split Rumah", "/katalog/ac-split-rumah"],
      ["AC Low Watt", "/katalog/ac-low-watt"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Kontak RADJA AC", "/kontak"],
    ],
    prePublishNotes: [
      "Kandidat batch luar Banyumas karena parent Kebumen sudah live dan nama area perlu dibedakan dari Karanganyar lain.",
      "Saat publish, pastikan title/meta tetap memakai Karanganyar Kebumen, bukan hanya Karanganyar.",
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
    keywordVariantsOverride: [
      "jual AC Kutowinangun",
      "AC rumah Kutowinangun",
      "AC toko Kutowinangun",
      "AC kantor kecil Kutowinangun",
      "AC usaha Kutowinangun",
      "cek stok AC Kutowinangun",
      "pengiriman AC Kutowinangun",
      "opsi pemasangan AC Kutowinangun",
      "AC banyak unit Kutowinangun",
    ],
    commonNeedsOverride: [
      "AC rumah tinggal, kamar tidur, dan ruang keluarga area Kutowinangun",
      "AC toko, warung, ruko kecil, kantor kecil, dan ruang usaha lokal",
      "AC untuk bangunan keluarga, kontrakan, rumah sewa, atau beberapa ruangan",
      "Pembelian beberapa unit untuk usaha lokal, properti sewa, atau kebutuhan bertahap",
    ],
    buyingChecksOverride: [
      "Alamat detail Kutowinangun dan akses pengiriman dari jalur Kebumen",
      "Ukuran ruangan, tinggi plafon, paparan panas, dan jumlah orang",
      "Daya listrik, pilihan standard/low watt/inverter, dan durasi pemakaian",
      "Jumlah unit, preferensi brand, target anggaran, pengiriman, dan kebutuhan opsi pemasangan",
    ],
    trustBulletsOverride: [
      "Kutowinangun diposisikan sebagai child area Kebumen untuk kebutuhan AC rumah, toko, kantor kecil, dan usaha lokal.",
      "Kebutuhan AC dibaca dari ukuran ruangan, daya listrik, stok aktif, jumlah unit, dan alamat detail.",
      "Pengiriman dan opsi pemasangan dikonfirmasi berdasarkan lokasi, akses pekerjaan, dan jadwal yang memungkinkan.",
      "Tidak ada klaim toko/cabang/showroom lokal di Kutowinangun; konsultasi dilakukan melalui WhatsApp website.",
    ],
    localFaqOverride: [
      [
        "Apakah RADJA AC melayani pembelian AC area Kutowinangun?",
        "Bisa dikonsultasikan. Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Kutowinangun, dan kebutuhan unit saja atau opsi pemasangan agar tim RADJA AC mengecek stok serta arahan PK.",
      ],
      [
        "Apakah ada toko RADJA AC di Kutowinangun?",
        "Tidak ada klaim toko atau cabang lokal di Kutowinangun. Halaman ini disiapkan sebagai child area Kebumen untuk konsultasi cek stok, pengiriman, dan opsi pemasangan.",
      ],
      [
        "Bisa cek AC untuk toko, warung, atau kantor kecil di Kutowinangun?",
        "Bisa. Tim membaca fungsi ruangan, ukuran, jumlah orang, daya listrik, jam pemakaian, jumlah unit, dan target anggaran sebelum memberi arahan pilihan AC.",
      ],
      [
        "Brand apa saja yang bisa dicek untuk Kutowinangun?",
        "Brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, Panasonic, dan lainnya bisa dicek berdasarkan stok aktif dan kebutuhan ruangan.",
      ],
    ],
    relatedLinksOverride: [
      ["Jual AC Kebumen", "/jual-ac-kebumen"],
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["AC 1/2 PK", "/katalog/ac-1-2-pk"],
      ["AC Inverter", "/katalog/ac-inverter"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Kontak RADJA AC", "/kontak"],
    ],
    prePublishNotes: [
      "Kandidat batch luar Banyumas karena parent Kebumen sudah live dan area lebih jauh dari Maps Purwokerto.",
      "Saat publish, pastikan incoming link masuk dari Kebumen dan related link tidak menuju draft yang belum live.",
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
