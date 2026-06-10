// STAGED CHILD AREA DRAFTS ONLY.
// Do not import this file into app routes, sitemap, or live components.
// To publish a child area, move one item into content/areas.js and add the final route intentionally.
//
// NOTE: Sumbang, Kedungbanteng, and Kalibagor were promoted to content/areas.js
// (live) with rewritten local content, so they were removed from this draft file
// to avoid stale duplicates and slug collisions in npm run audit:staged.
//
// Quality standard: each child carries real localContext, 5 localLandmarks,
// 3 localBenefits, 3 localCases, a correct clusterType, and location-specific
// localFaq (no generic "punya toko fisik" question). Child pages must only be
// published after their parent/hub is live and stable.

const defaultChildRelatedLinks = [
  ["Jual AC", "/jual-ac"],
  ["Katalog AC", "/katalog"],
  ["Kalkulator PK AC", "/kalkulator-pk-ac"],
  ["Pengadaan AC", "/pengadaan-ac"],
  ["Kontak Radja AC", "/kontak"],
];

function createChildAreaDraft({
  slug,
  areaName,
  parentAreaName,
  parentAreaPath,
  priority = "P2",
  clusterType,
  eyebrow,
  title,
  description,
  h1,
  intro,
  localContext,
  localLandmarks,
  localBenefits,
  localCases,
  localFaq,
  keywordVariants,
  trustBullets,
  commonNeeds,
  buyingChecks,
  coverageNote,
  nearbyAreaLinks,
  relatedLinks,
  prePublishNotes = [],
  publishGate,
}) {
  return {
    slug,
    path: `/${slug}`,
    areaName,
    clusterType,
    label: `Jual AC ${areaName}`,
    title: title ?? `Jual AC ${areaName} untuk Rumah, Toko & Usaha — Radja AC`,
    description:
      description ??
      `Butuh AC untuk rumah, toko, kantor, atau banyak unit di ${areaName}? Radja AC bantu cek PK, stok, pengiriman unit, opsi pemasangan, dan pembayaran fleksibel via WhatsApp.`,
    h1: h1 ?? `Jual AC ${areaName} untuk Rumah, Toko & Usaha`,
    eyebrow: eyebrow ?? `Child Area ${parentAreaName}`,
    intro:
      intro ??
      `Butuh AC di ${areaName} untuk rumah, kamar, toko, kantor, atau banyak unit? Tim Radja AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan dari data awal.`,
    localContext,
    localLandmarks,
    localBenefits,
    localCases,
    coverageNote:
      coverageNote ??
      `Showroom dan gudang Radja AC berada di Banyumas. Kebutuhan AC area ${areaName} dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, akses lokasi, serta jadwal.`,
    keywordVariants: keywordVariants ?? [
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
    trustBullets: trustBullets ?? [
      `${areaName} diposisikan sebagai child area ${parentAreaName} yang masih dekat basis layanan Banyumas.`,
      "Kebutuhan AC dibaca dari ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan alamat detail.",
      "Pengiriman dan opsi pemasangan dikonfirmasi dari data lokasi, akses pekerjaan, dan jadwal.",
      "Tanpa klaim toko/cabang lokal; konsultasi diarahkan ke showroom dan gudang Radja AC di Banyumas.",
    ],
    localFaq,
    commonNeeds: commonNeeds ?? [
      `AC rumah tinggal dan kamar tidur di ${areaName}`,
      "AC kost, kontrakan, dan rumah sewa",
      "AC toko, ruko, kantor, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal, properti sewa, atau kebutuhan bertahap",
    ],
    buyingChecks: buyingChecks ?? [
      `Lokasi detail area ${areaName}`,
      "Ukuran ruangan dan estimasi kebutuhan PK",
      "Daya listrik dan kebutuhan low watt atau inverter",
      "Alamat pengiriman dan kebutuhan opsi pemasangan",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: relatedLinks ?? defaultChildRelatedLinks,
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
      secondaryKeywords: (keywordVariants ?? []).slice(1, 7),
      buyerIntent:
        "Pembeli mencari AC baru untuk rumah, toko, kantor, usaha, atau banyak unit dengan kebutuhan cek PK, stok, pengiriman, dan opsi pemasangan.",
    },
    draftHeroImage: {
      src: "/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp",
      alt: `Showroom dan gudang Radja AC sebagai referensi konsultasi AC ${areaName}`,
      caption: "Dokumentasi showroom dan gudang Radja AC di Banyumas.",
      usageNote:
        "Generic proof. Jangan ditulis sebagai foto toko, cabang, atau showroom fisik di area child.",
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
      "Pindahkan draft item ke content/areas.js dan tambahkan slug ke areaClusterMap sesuai clusterType item.",
      "Pastikan plannedRouteKey dipakai konsisten.",
      "Cek nearbyAreaLinks tidak menuju URL draft yang belum live.",
      "Pasang internal link masuk dari parent/hub bila masuk akal.",
      "Pastikan title, description, h1, localContext, FAQ, CTA, dan paymentNote tetap aman.",
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
  // ---- Banyumas ring ----
  createChildAreaDraft({
    slug: "jual-ac-kebasen",
    areaName: "Kebasen",
    parentAreaName: "Banyumas",
    parentAreaPath: "/jual-ac-banyumas",
    priority: "P1",
    clusterType: "trade",
    eyebrow: "Child Banyumas Selatan — Kebasen",
    title: "Jual AC Kebasen untuk Rumah, Toko & Usaha — Radja AC",
    h1: "Jual AC Kebasen untuk Rumah, Toko & Usaha",
    description:
      "Butuh AC untuk rumah, toko, kantor desa, atau usaha di Kebasen, Banyumas selatan? Radja AC cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Kebasen untuk rumah, toko, kantor desa, atau usaha tepi jalan? Tim Radja AC cek ukuran ruangan, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Kebasen ada di Banyumas selatan di tepi Sungai Serayu, dikenal dengan jalur kereta dan terowongan Kebasen, berdekatan dengan Rawalo dan Patikraja. Wilayahnya memadukan permukiman, pertanian, dan usaha tepi jalan. Karena masih satu koridor dengan basis layanan Radja AC di Sokaraja, pengiriman unit dan survei lokasi mudah dijadwalkan. Pembeli AC umumnya rumah, toko, dan kantor desa yang gerah saat siang. Untuk jual AC Kebasen, unit diantar ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Stasiun dan terowongan rel Kebasen",
      "Aliran Sungai Serayu",
      "Jalur Banyumas selatan menuju Rawalo",
      "Pasar dan permukiman Kebasen",
      "Persawahan tepi Serayu",
    ],
    localBenefits: [
      "Masih satu koridor dengan basis layanan di Sokaraja, jadi pengiriman unit dan survei lokasi mudah dijadwalkan",
      "Rumah di Kebasen banyak pilih low watt menyesuaikan daya listrik rumahan",
      "Toko dan usaha tepi jalan yang gerah saat siang butuh ruang adem untuk pembeli",
    ],
    localCases: [
      ["Rumah tinggal", "Pemasangan AC kamar yang panas saat siang dengan pilihan low watt; survei mudah karena dekat Sokaraja."],
      ["Toko & usaha tepi jalan", "AC ruang jualan di jalur Kebasen agar pelanggan nyaman."],
      ["Kantor desa & layanan", "AC ruang layanan dengan pengiriman cepat ke alamat Kebasen."],
    ],
    keywordVariants: [
      "jual AC Kebasen",
      "AC rumah Kebasen",
      "AC toko Kebasen",
      "AC kantor Kebasen",
      "AC low watt Kebasen",
      "cek stok AC Kebasen",
      "pengiriman AC Kebasen",
      "AC banyak unit Kebasen",
    ],
    localFaq: [
      [
        "Kebasen di Banyumas selatan, pengiriman dari Sokaraja cepat?",
        "Relatif mudah. Kebasen masih satu koridor dengan basis layanan di Sokaraja, jadi pengiriman unit dan survei lokasi gampang dijadwalkan. Sebutkan alamat dan jumlah unit.",
      ],
      [
        "AC rumah di Kebasen, hemat listrik?",
        "Rumah dengan daya 900–1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok.",
      ],
      [
        "AC untuk toko atau usaha tepi jalan di Kebasen?",
        "Ruang jualan yang sering buka pintu butuh kapasitas sesuai luas. Sebutkan ukuran toko dan jam buka untuk arahan unit.",
      ],
      [
        "Pembayaran AC di Kebasen bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Rawalo", "/jual-ac-rawalo"],
      ["Jual AC Patikraja", "/jual-ac-patikraja"],
      ["Jual AC Jatilawang", "/jual-ac-jatilawang"],
    ],
    prePublishNotes: [
      "Nearby links semua sudah live (Banyumas, Rawalo, Patikraja, Jatilawang). Aman untuk batch ring Banyumas selatan.",
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
    clusterType: "residential",
    eyebrow: "Child Banyumas Timur — Somagede",
    title: "Jual AC Somagede untuk Rumah & Usaha Lokal — Radja AC",
    h1: "Jual AC Somagede untuk Rumah & Usaha Lokal",
    description:
      "Butuh AC untuk rumah, kamar, atau toko kecil di Somagede, Banyumas timur? Radja AC cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Somagede untuk rumah, kamar yang panas saat siang, atau toko kecil? Tim Radja AC cek ukuran ruangan, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Somagede berada di sisi timur Banyumas, di perbukitan tepi Sungai Serayu, berdekatan dengan Kalibagor dan kota Banyumas. Wilayahnya didominasi permukiman dan pertanian dengan beberapa usaha lokal. Karena dekat basis layanan Radja AC di Sokaraja, pengiriman unit dan survei lokasi mudah dijadwalkan. Pembeli AC umumnya rumah dan kamar yang panas saat siang, serta toko kecil. Untuk jual AC Somagede, unit diantar ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Aliran Sungai Serayu",
      "Jalur Somagede–Kalibagor",
      "Pasar dan permukiman Somagede",
      "Perbukitan dan persawahan",
      "Dekat basis layanan Radja AC di Sokaraja",
    ],
    localBenefits: [
      "Dekat basis layanan di Sokaraja sehingga pengiriman unit dan survei lokasi gampang dijadwalkan",
      "Rumah banyak pilih low watt menyesuaikan daya listrik rumahan",
      "Toko kecil dan usaha lokal yang gerah saat siang butuh kamar atau ruang yang adem",
    ],
    localCases: [
      ["Rumah & kamar", "Pemasangan AC kamar yang panas saat siang dengan pilihan low watt."],
      ["Toko kecil & usaha lokal", "AC ruang usaha di sekitar Somagede agar pelanggan nyaman."],
      ["Tambah unit bertahap", "Keluarga menambah AC per kamar mengikuti anggaran."],
    ],
    keywordVariants: [
      "jual AC Somagede",
      "AC rumah Somagede",
      "AC kamar Somagede",
      "AC toko Somagede",
      "AC low watt Somagede",
      "cek stok AC Somagede",
      "pengiriman AC Somagede",
      "AC banyak unit Somagede",
    ],
    localFaq: [
      [
        "Somagede di Banyumas timur, pengiriman dari Sokaraja cepat?",
        "Relatif mudah. Somagede masih dekat basis layanan, jadi pengiriman unit dan survei lokasi gampang dijadwalkan. Sebutkan alamat dan jumlah unit.",
      ],
      [
        "AC rumah di Somagede, hemat listrik?",
        "Rumah dengan daya 900–1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok.",
      ],
      [
        "Cukup pasang AC di satu kamar dulu di Somagede?",
        "Bisa. Banyak yang mulai dari kamar yang paling panas saat siang lalu menambah unit bertahap. Sebutkan ukuran kamar untuk arahan PK.",
      ],
      [
        "Pembayaran AC di Somagede bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Sokaraja", "/jual-ac-sokaraja"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
    ],
    prePublishNotes: [
      "Material lokal tipis; prioritas lebih rendah. Aman karena semua nearby link live.",
    ],
    publishGate:
      "Publish setelah Banyumas/Kalibagor stabil atau ada sinyal query area Somagede.",
  }),

  // ---- Purbalingga ring ----
  createChildAreaDraft({
    slug: "jual-ac-bobotsari",
    areaName: "Bobotsari",
    parentAreaName: "Purbalingga",
    parentAreaPath: "/jual-ac-purbalingga",
    priority: "P2",
    clusterType: "trade",
    eyebrow: "Child Purbalingga Utara — Bobotsari",
    title: "Jual AC Bobotsari untuk Toko Pasar, Ruko & Rumah — Radja AC",
    h1: "Jual AC Bobotsari untuk Toko, Ruko & Rumah",
    description:
      "Butuh AC untuk toko, kios pasar, ruko, atau rumah di Bobotsari, Purbalingga utara? Radja AC cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Bobotsari untuk toko, kios di sekitar Pasar Bobotsari, ruko, atau rumah? Tim Radja AC cek ukuran ruang, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Bobotsari adalah kota kecamatan di utara Purbalingga dengan Pasar Bobotsari yang menjadi salah satu pusat perdagangan dan grosir di jalur menuju Pemalang. Banyak toko, kios, dan ruko di sekitar pasar serta rumah warga. Karena masih dalam jangkauan layanan dari Purbalingga dan Banyumas, pengiriman unit relatif mudah. AC banyak dipakai untuk toko, ruko, dan rumah yang gerah saat siang. Untuk jual AC Bobotsari, unit diantar ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Pasar Bobotsari",
      "Jalur Purbalingga–Bobotsari–Pemalang",
      "Pertokoan dan ruko sekitar pasar",
      "Permukiman Bobotsari",
      "Kawasan kaki pegunungan utara Purbalingga",
    ],
    localBenefits: [
      "Toko dan kios di sekitar Pasar Bobotsari yang ramai butuh ruang adem untuk pembeli",
      "Ruko dan usaha di jalur menuju Pemalang dipakai jam panjang sehingga kapasitas perlu sesuai luas",
      "Rumah warga banyak pilih low watt menyesuaikan daya listrik rumahan",
    ],
    localCases: [
      ["Toko & kios pasar", "AC ruang jualan di sekitar Pasar Bobotsari agar pembeli betah memilih."],
      ["Ruko jalur utara", "AC ruang usaha di jalur Bobotsari–Pemalang dengan pemakaian jam panjang."],
      ["Rumah tinggal", "AC kamar yang panas saat siang dengan pilihan sesuai daya listrik."],
    ],
    keywordVariants: [
      "jual AC Bobotsari",
      "AC toko Bobotsari",
      "AC kios pasar Bobotsari",
      "AC ruko Bobotsari",
      "AC rumah Bobotsari",
      "cek stok AC Bobotsari",
      "pengiriman AC Bobotsari",
      "AC banyak unit Bobotsari",
    ],
    localFaq: [
      [
        "AC untuk toko atau kios di sekitar Pasar Bobotsari?",
        "Ruang jualan yang ramai dan sering buka pintu butuh kapasitas sesuai luas dan pengunjung. Sebutkan ukuran kios atau toko dan jam ramai untuk arahan PK.",
      ],
      [
        "Pengiriman AC ke Bobotsari dari arah Purbalingga cepat?",
        "Relatif mudah. Bobotsari masih dalam jangkauan layanan dari Purbalingga dan Banyumas. Sebutkan alamat dan jumlah unit untuk perkiraan jadwal.",
      ],
      [
        "AC rumah di Bobotsari, hemat listrik?",
        "Rumah dengan daya 900–1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok.",
      ],
      [
        "Pembayaran AC di Bobotsari bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
      ],
    ],
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
    clusterType: "industrial",
    eyebrow: "Child Purbalingga — Kalimanah (Kawasan Industri)",
    title: "Jual AC Kalimanah untuk Kantor Pabrik, Ruko & Rumah — Radja AC",
    h1: "Jual AC Kalimanah untuk Kantor, Ruko & Rumah",
    description:
      "Butuh AC untuk kantor pabrik, ruko, pengadaan unit, atau rumah di Kalimanah, Purbalingga? Radja AC cek PK, stok, pengiriman, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Kalimanah untuk kantor pabrik, ruang kerja, ruko, atau rumah? Tim Radja AC cek jumlah ruang, kapasitas per ruang, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Kalimanah berada dekat pusat kota Purbalingga dan termasuk kawasan dengan banyak industri khas Purbalingga seperti rambut palsu, bulu mata, dan knalpot, serta dekat akses Bandara Jenderal Besar Soedirman. Permintaan AC datang dari kantor pabrik, ruang kerja, ruko, dan rumah. Kantor dan ruang tertentu butuh kapasitas konsisten, sementara rumah lebih ke kamar yang panas saat siang. Untuk jual AC Kalimanah, unit diantar ke alamat lalu dipasang tim Radja AC atau diserahkan untuk dipasang tim lokasi, dengan pembayaran dikonfirmasi setelah stok dipastikan.",
    localLandmarks: [
      "Kawasan industri rambut palsu, bulu mata, dan knalpot",
      "Dekat pusat kota Purbalingga",
      "Akses Bandara Jenderal Besar Soedirman (Wirasaba)",
      "Pertokoan dan ruko Kalimanah",
      "Permukiman padat dekat kota",
    ],
    localBenefits: [
      "Kantor pabrik dan ruang kerja di kawasan industri butuh kapasitas konsisten untuk pemakaian seharian",
      "Pengadaan beberapa unit lebih rapi dengan spesifikasi seragam dan dokumentasi kebutuhan",
      "Ruko dekat pusat kota dan rumah warga butuh pendinginan ruang yang gerah saat siang",
    ],
    localCases: [
      ["Kantor pabrik & ruang kerja", "AC ruang kerja dengan kapasitas dihitung dari luas dan jumlah staf."],
      ["Pengadaan beberapa unit", "Penyediaan unit spesifikasi seragam, stok, dan jadwal pemasangan bertahap."],
      ["Ruko & rumah dekat kota", "AC ruang usaha dan kamar yang panas saat siang sesuai daya listrik."],
    ],
    keywordVariants: [
      "jual AC Kalimanah",
      "AC kantor pabrik Kalimanah",
      "pengadaan AC Kalimanah",
      "AC ruko Kalimanah",
      "AC rumah Kalimanah",
      "cek stok AC Kalimanah",
      "pengiriman AC Kalimanah",
      "AC banyak unit Kalimanah",
    ],
    localFaq: [
      [
        "Bisa pengadaan AC beberapa unit untuk kantor pabrik di Kalimanah?",
        "Bisa. Kirim rekap jumlah ruang, luas, daya listrik, dan timeline agar tim menyusun unit spesifikasi seragam, stok, pengiriman, dan jadwal pemasangan bertahap.",
      ],
      [
        "AC untuk ruko atau kantor usaha dekat pusat Purbalingga di Kalimanah?",
        "Ruang kerja dan layanan butuh kapasitas sesuai luas dan jumlah orang. Sebutkan ukuran ruang dan jam operasional untuk perkiraan PK.",
      ],
      [
        "AC rumah di Kalimanah, hemat listrik?",
        "Rumah dengan daya 900–1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok.",
      ],
      [
        "Pengiriman AC ke Kalimanah dari Banyumas bagaimana?",
        "Unit dikirim ke alamat Kalimanah lalu dipasang atau diserahkan untuk dipasang tim lokasi, dengan pembayaran dikonfirmasi setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Sokaraja", "/jual-ac-sokaraja"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
    ],
    relatedLinks: [
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Pengadaan AC Kantor & Ruko", "/pengadaan-ac/gedung-kantor-ruko"],
      ["AC Kantor & Komersial", "/katalog/ac-kantor-komersial"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Katalog AC", "/katalog"],
      ["Kontak Radja AC", "/kontak"],
    ],
    prePublishNotes: [
      "Pembeda kuat: kawasan industri khas Purbalingga. Gunakan cluster industrial dan link ke pengadaan.",
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
    clusterType: "hospitality",
    eyebrow: "Child Purbalingga — Kutasari (Jalur Wisata)",
    title: "Jual AC Kutasari untuk Penginapan, Rumah Makan & Rumah — Radja AC",
    h1: "Jual AC Kutasari untuk Penginapan, Usaha & Rumah",
    description:
      "Butuh AC untuk penginapan, homestay, rumah makan wisata, atau rumah di Kutasari, jalur Owabong Purbalingga? Radja AC cek PK, stok, pengiriman, dan opsi pemasangan.",
    intro:
      "Butuh AC di Kutasari untuk penginapan dan homestay jalur wisata Owabong, rumah makan, atau rumah? Tim Radja AC cek ruang yang perlu AC, daya listrik, stok, pengiriman, dan opsi pemasangan.",
    localContext:
      "Kutasari ada di sisi utara Purbalingga, di jalur menuju wisata Owabong, Gua Lawa, dan Purbasari Pancuran Mas, dengan udara yang mulai sejuk di bagian atas. Permintaan AC banyak dari penginapan dan homestay wisata, rumah makan, serta rumah di area yang lebih hangat. Penginapan biasanya pasang AC kamar tamu, sedangkan rumah cukup di kamar tertentu. Untuk jual AC Kutasari, unit diantar ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Wisata air Owabong",
      "Gua Lawa Purbalingga",
      "Purbasari Pancuran Mas",
      "Jalur Purbalingga–Kutasari",
      "Penginapan dan homestay sekitar wisata",
    ],
    localBenefits: [
      "Penginapan dan homestay jalur wisata pasang AC kamar tamu yang perlu nyaman saat ramai pengunjung",
      "Rumah makan wisata butuh ruang adem untuk pengunjung yang singgah saat akhir pekan",
      "Sebagian area atas yang sejuk membuat rumah memakai AC selektif di kamar tertentu",
    ],
    localCases: [
      ["Penginapan & homestay wisata", "AC kamar tamu yang mudah dirawat saat okupansi wisata naik."],
      ["Rumah makan jalur wisata", "AC ruang pelanggan agar pengunjung betah saat akhir pekan ramai."],
      ["Rumah tinggal", "AC kamar tertentu yang panas, menyesuaikan udara yang mulai sejuk di area atas."],
    ],
    keywordVariants: [
      "jual AC Kutasari",
      "AC penginapan Kutasari",
      "AC homestay jalur Owabong",
      "AC rumah makan Kutasari",
      "AC rumah Kutasari",
      "cek stok AC Kutasari",
      "pengiriman AC Kutasari",
      "AC banyak unit penginapan Kutasari",
    ],
    localFaq: [
      [
        "AC untuk penginapan atau homestay jalur wisata Owabong di Kutasari?",
        "Kamar tamu yang dipakai menginap lebih nyaman dengan unit tenang dan mudah dirawat. Kirim jumlah kamar dan ukurannya untuk arahan unit dan stok.",
      ],
      [
        "Kutasari mulai sejuk, rumah perlu AC di semua ruangan?",
        "Tidak selalu. Sebagian area atas sudah segar, jadi AC biasanya dipasang di kamar tertentu yang panas. Sebutkan lokasi dan ruangannya untuk masukan.",
      ],
      [
        "AC untuk rumah makan dekat tempat wisata Kutasari?",
        "Area makan yang ramai saat akhir pekan butuh pendinginan merata; kapasitas dihitung dari luas dan jumlah kursi. Kirim ukuran ruang untuk perkiraan PK.",
      ],
      [
        "Pengiriman AC ke Kutasari dari Banyumas bagaimana?",
        "Unit dikirim ke alamat Kutasari lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
    ],
    relatedLinks: [
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Pengadaan AC Hotel & Guest House", "/pengadaan-ac/hotel-guest-house"],
      ["AC Inverter", "/katalog/ac-inverter"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Katalog AC", "/katalog"],
      ["Kontak Radja AC", "/kontak"],
    ],
    prePublishNotes: [
      "Cluster hospitality (jalur wisata Owabong). Pertahankan angle sejuk untuk rumah.",
    ],
    publishGate:
      "Publish setelah Purbalingga stabil atau ada sinyal query area Kutasari.",
  }),

  // ---- Tegal ring ----
  createChildAreaDraft({
    slug: "jual-ac-slawi",
    areaName: "Slawi",
    parentAreaName: "Tegal",
    parentAreaPath: "/jual-ac-tegal",
    priority: "P2",
    clusterType: "trade",
    eyebrow: "Child Tegal — Slawi (Ibu Kota Kabupaten)",
    title: "Jual AC Slawi untuk Kantor, Ruko, Retail & Rumah — Radja AC",
    h1: "Jual AC Slawi untuk Kantor, Ruko & Usaha",
    description:
      "Butuh AC untuk kantor, ruko, retail, atau rumah di Slawi, ibu kota Kabupaten Tegal? Radja AC cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Slawi untuk kantor, ruko, retail di sekitar mal dan pasar, atau rumah? Tim Radja AC cek luas ruang, daya listrik, jumlah unit, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Slawi adalah ibu kota Kabupaten Tegal sekaligus pusat pemerintahan dan perdagangan, dikenal dengan budaya teh poci dan sentra teh. Ada perkantoran kabupaten, mal, pasar, dan ruko dagang di dataran yang panas. AC banyak dipakai untuk kantor, ruko, retail, dan rumah, dengan kapasitas dihitung dari luas dan jam operasional. Untuk jual AC Slawi, unit dikirim dari gudang Banyumas ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Pusat pemerintahan Kabupaten Tegal di Slawi",
      "Rita SuperMall Slawi",
      "Sentra dan budaya teh poci Slawi",
      "Pasar Trayeman dan pertokoan Slawi",
      "Alun-alun Slawi",
    ],
    localBenefits: [
      "Perkantoran kabupaten dan ruko dagang butuh ruang yang stabil suhunya sepanjang jam kerja",
      "Retail dan toko di pusat Slawi yang ramai perlu ruang adem untuk pelanggan di kota panas",
      "Rumah di Slawi memakai AC kamar yang gerah saat siang sesuai daya listrik",
    ],
    localCases: [
      ["Kantor & ruko dagang", "AC ruang kerja dan layanan dengan suhu stabil sepanjang jam operasional."],
      ["Retail & toko pusat Slawi", "AC ruang pelanggan agar betah saat ramai di pusat kabupaten yang panas."],
      ["Rumah tinggal", "AC kamar yang gerah saat siang dengan pilihan sesuai daya listrik."],
    ],
    keywordVariants: [
      "jual AC Slawi",
      "AC kantor Slawi",
      "AC ruko Slawi",
      "AC retail Slawi",
      "AC rumah Slawi",
      "cek stok AC Slawi",
      "pengiriman AC Slawi",
      "AC banyak unit Slawi",
    ],
    localFaq: [
      [
        "AC untuk kantor atau ruko di pusat Slawi?",
        "Ruang kerja dan layanan butuh kapasitas sesuai luas dan jumlah orang, dengan suhu stabil sepanjang jam kerja. Sebutkan ukuran ruang dan jam operasional untuk perkiraan PK.",
      ],
      [
        "AC untuk retail atau toko dekat mal dan pasar Slawi?",
        "Ruang pelanggan yang ramai dan sering buka pintu butuh kapasitas sesuai luas dan lalu lalang. Kirim ukuran ruang usaha untuk arahan unit.",
      ],
      [
        "Slawi panas, AC rumah pilih apa?",
        "Kamar yang gerah saat siang paling butuh AC; low watt cocok untuk daya rumahan. Sebutkan ukuran kamar dan daya listrik untuk arahan.",
      ],
      [
        "Pengiriman AC ke Slawi dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Slawi lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Pemalang", "/jual-ac-pemalang"],
      ["Jual AC Brebes", "/jual-ac-brebes"],
    ],
    prePublishNotes: [
      "Child terkuat untuk Tegal (ibu kota kabupaten). Tegal + Purwokerto sudah live.",
      "Nearby Pemalang & Brebes masih draft; saat publish pastikan keduanya live atau ganti nearby link ke area live.",
    ],
    publishGate:
      "Publish setelah Tegal stabil atau ada sinyal query Slawi.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-adiwerna",
    areaName: "Adiwerna",
    parentAreaName: "Tegal",
    parentAreaPath: "/jual-ac-tegal",
    priority: "P2",
    clusterType: "trade",
    eyebrow: "Child Tegal — Adiwerna (Sentra Logam)",
    title: "Jual AC Adiwerna untuk Bengkel, Toko, Ruko & Rumah — Radja AC",
    h1: "Jual AC Adiwerna untuk Toko, Ruko & Usaha",
    description:
      "Butuh AC untuk kantor bengkel/workshop logam, toko, ruko, atau rumah di Adiwerna, Kabupaten Tegal? Radja AC cek PK, stok, pengiriman, dan opsi pemasangan.",
    intro:
      "Butuh AC di Adiwerna untuk kantor bengkel dan workshop logam, toko, ruko, atau rumah? Tim Radja AC cek luas ruang, daya listrik, jumlah unit, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Adiwerna adalah salah satu kawasan terpadat di Kabupaten Tegal, dikenal sebagai sentra industri logam dan pengecoran serta perdagangan ramai di jalur Tegal–Slawi. Banyak bengkel, workshop logam, toko, dan ruko di dataran yang panas. AC dipakai untuk kantor workshop, toko, ruko, dan rumah, dengan kapasitas dihitung dari luas dan jam buka. Untuk jual AC Adiwerna, unit dikirim dari gudang Banyumas ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Sentra industri logam dan pengecoran Adiwerna",
      "Jalur ramai Tegal–Slawi",
      "Pasar dan pertokoan Adiwerna",
      "Permukiman padat Adiwerna",
      "Bengkel dan workshop logam",
    ],
    localBenefits: [
      "Kantor bengkel dan workshop logam butuh ruang kerja dan ruang tamu yang adem di lingkungan yang panas",
      "Toko dan ruko di jalur ramai Tegal–Slawi dipakai jam panjang sehingga kapasitas perlu sesuai luas",
      "Permukiman padat membuat rumah memakai AC kamar yang gerah saat siang sesuai daya listrik",
    ],
    localCases: [
      ["Kantor bengkel & workshop", "AC ruang kerja dan ruang tamu workshop logam agar nyaman saat aktivitas padat."],
      ["Toko & ruko jalur Tegal–Slawi", "AC ruang jualan dengan pemakaian jam panjang di jalur ramai."],
      ["Rumah tinggal", "AC kamar yang gerah saat siang dengan pilihan sesuai daya listrik rumah."],
    ],
    keywordVariants: [
      "jual AC Adiwerna",
      "AC bengkel dan workshop Adiwerna",
      "AC toko Adiwerna",
      "AC ruko Adiwerna",
      "AC rumah Adiwerna",
      "cek stok AC Adiwerna",
      "pengiriman AC Adiwerna",
      "AC banyak unit Adiwerna",
    ],
    localFaq: [
      [
        "AC untuk kantor atau ruang tamu bengkel logam di Adiwerna?",
        "Ruang kerja dan ruang tamu butuh kapasitas sesuai luas dan jumlah orang, terpisah dari area produksi yang panas. Sebutkan ukuran ruang untuk perkiraan PK.",
      ],
      [
        "AC untuk toko atau ruko di jalur Tegal–Slawi (Adiwerna)?",
        "Ruang jualan yang ramai dan sering buka pintu butuh kapasitas sesuai luas dan lalu lalang. Kirim ukuran ruang dan jam buka untuk arahan unit.",
      ],
      [
        "Adiwerna padat dan panas, AC rumah pilih apa?",
        "Kamar yang gerah saat siang paling butuh AC; low watt cocok untuk daya rumahan. Sebutkan ukuran kamar dan daya listrik untuk arahan.",
      ],
      [
        "Pengiriman AC ke Adiwerna dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Adiwerna lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Pemalang", "/jual-ac-pemalang"],
      ["Jual AC Brebes", "/jual-ac-brebes"],
    ],
    prePublishNotes: [
      "Ejaan diperbaiki dari 'Adwerna' menjadi 'Adiwerna' (nama kecamatan yang benar di Kabupaten Tegal).",
      "Nearby Pemalang & Brebes masih draft; saat publish pastikan keduanya live atau ganti nearby link ke area live.",
    ],
    publishGate:
      "Publish setelah Tegal stabil atau ada sinyal query Adiwerna.",
  }),
  createChildAreaDraft({
    slug: "jual-ac-talang",
    areaName: "Talang",
    parentAreaName: "Tegal",
    parentAreaPath: "/jual-ac-tegal",
    priority: "P2",
    clusterType: "trade",
    eyebrow: "Child Tegal — Talang",
    title: "Jual AC Talang untuk Toko, Ruko & Rumah — Radja AC",
    h1: "Jual AC Talang untuk Toko, Ruko & Usaha",
    description:
      "Butuh AC untuk toko, ruko, usaha kecil, atau rumah di Talang, Kabupaten Tegal? Radja AC cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Talang untuk toko, ruko, usaha kecil, atau rumah di kawasan padat dekat Kota Tegal? Tim Radja AC cek luas ruang, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Talang adalah kawasan padat di Kabupaten Tegal dekat Kota Tegal, dengan perdagangan, industri kecil dan UMKM, serta permukiman ramai di jalur Pantura. Banyak toko, ruko, dan rumah di dataran yang panas. AC dipakai untuk toko, ruko, kantor kecil, dan rumah, dengan kapasitas dihitung dari luas dan jam buka. Untuk jual AC Talang, unit dikirim dari gudang Banyumas ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Jalur Pantura dekat Kota Tegal",
      "Pasar dan pertokoan Talang",
      "Kawasan industri kecil dan UMKM",
      "Permukiman padat Talang",
      "Akses jalur Tegal–Slawi",
    ],
    localBenefits: [
      "Toko dan ruko di kawasan padat dekat Kota Tegal dipakai jam panjang sehingga kapasitas perlu sesuai luas",
      "Usaha kecil dan UMKM butuh ruang adem untuk pelanggan di dataran yang panas",
      "Permukiman padat membuat rumah memakai AC kamar yang gerah saat siang sesuai daya listrik",
    ],
    localCases: [
      ["Toko & ruko padat", "AC ruang jualan dengan pemakaian jam panjang dekat Kota Tegal."],
      ["Usaha kecil & UMKM", "AC ruang pelanggan atau ruang kerja usaha sesuai luas dan jumlah orang."],
      ["Rumah tinggal", "AC kamar yang gerah saat siang dengan pilihan sesuai daya listrik."],
    ],
    keywordVariants: [
      "jual AC Talang",
      "AC toko Talang",
      "AC ruko Talang",
      "AC usaha Talang",
      "AC rumah Talang",
      "cek stok AC Talang",
      "pengiriman AC Talang",
      "AC banyak unit Talang",
    ],
    localFaq: [
      [
        "AC untuk toko atau ruko di Talang dekat Kota Tegal?",
        "Ruang jualan yang ramai dan sering buka pintu butuh kapasitas sesuai luas dan lalu lalang. Sebutkan ukuran ruang dan jam buka untuk arahan unit.",
      ],
      [
        "AC untuk usaha kecil atau UMKM di Talang?",
        "Ruang pelanggan atau ruang kerja dihitung dari luas dan jumlah orang. Kirim ukuran ruang dan fungsi usaha untuk perkiraan PK.",
      ],
      [
        "Talang padat dan panas, AC rumah pilih apa?",
        "Kamar yang gerah saat siang paling butuh AC; low watt cocok untuk daya rumahan. Sebutkan ukuran kamar dan daya listrik untuk arahan.",
      ],
      [
        "Pengiriman AC ke Talang dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Talang lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Pemalang", "/jual-ac-pemalang"],
      ["Jual AC Brebes", "/jual-ac-brebes"],
    ],
    prePublishNotes: [
      "Material lokal moderat. Nearby Pemalang & Brebes masih draft; pastikan live atau ganti saat publish.",
    ],
    publishGate:
      "Publish setelah Tegal stabil atau ada sinyal query Talang.",
  }),

  // ---- Banjarnegara ring ----
  createChildAreaDraft({
    slug: "jual-ac-mandiraja",
    areaName: "Mandiraja",
    parentAreaName: "Banjarnegara",
    parentAreaPath: "/jual-ac-banjarnegara",
    priority: "P2",
    clusterType: "trade",
    eyebrow: "Child Banjarnegara Barat — Mandiraja",
    title: "Jual AC Mandiraja untuk Toko, Ruko & Rumah — Radja AC",
    h1: "Jual AC Mandiraja untuk Toko, Ruko & Usaha",
    description:
      "Butuh AC untuk toko, ruko, usaha pasar, atau rumah di Mandiraja, Banjarnegara? Radja AC cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Mandiraja untuk toko, ruko, usaha di sekitar pasar, atau rumah? Tim Radja AC cek luas ruang, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Mandiraja berada di sisi barat Banjarnegara di jalur regional menuju Purwokerto dan Purbalingga, dengan Pasar Mandiraja sebagai pusat perdagangan dan banyak usaha tepi jalan. Wilayahnya memadukan permukiman, pertanian, dan ruko dagang. AC banyak dipakai untuk toko, ruko, dan rumah yang gerah saat siang. Untuk jual AC Mandiraja, unit dikirim dari gudang Banyumas ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Pasar Mandiraja",
      "Jalur Banjarnegara–Purwokerto",
      "Pertokoan dan ruko Mandiraja",
      "Permukiman dan persawahan",
      "Akses jalur selatan Jawa Tengah",
    ],
    localBenefits: [
      "Toko dan kios di sekitar Pasar Mandiraja yang ramai butuh ruang adem untuk pembeli",
      "Ruko dan usaha di jalur Banjarnegara–Purwokerto dipakai jam panjang sehingga kapasitas perlu sesuai luas",
      "Rumah warga banyak pilih low watt menyesuaikan daya listrik rumahan",
    ],
    localCases: [
      ["Toko & kios pasar", "AC ruang jualan di sekitar Pasar Mandiraja agar pembeli betah memilih."],
      ["Ruko jalur regional", "AC ruang usaha di jalur Banjarnegara–Purwokerto dengan pemakaian jam panjang."],
      ["Rumah tinggal", "AC kamar yang panas saat siang dengan pilihan sesuai daya listrik."],
    ],
    keywordVariants: [
      "jual AC Mandiraja",
      "AC toko Mandiraja",
      "AC ruko Mandiraja",
      "AC pasar Mandiraja",
      "AC rumah Mandiraja",
      "cek stok AC Mandiraja",
      "pengiriman AC Mandiraja",
      "AC banyak unit Mandiraja",
    ],
    localFaq: [
      [
        "AC untuk toko atau kios di sekitar Pasar Mandiraja?",
        "Ruang jualan yang ramai dan sering buka pintu butuh kapasitas sesuai luas dan pengunjung. Sebutkan ukuran kios atau toko dan jam ramai untuk arahan PK.",
      ],
      [
        "Pengiriman AC ke Mandiraja dari Banyumas bagaimana?",
        "Mandiraja di jalur Banjarnegara–Purwokerto sehingga pengiriman relatif mudah dikoordinasikan. Sebutkan alamat dan jumlah unit untuk perkiraan jadwal.",
      ],
      [
        "AC rumah di Mandiraja, hemat listrik?",
        "Rumah dengan daya 900–1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok.",
      ],
      [
        "Pembayaran AC di Mandiraja bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
      ],
    ],
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
    clusterType: "trade",
    eyebrow: "Child Banjarnegara Barat — Purwareja Klampok",
    title: "Jual AC Klampok untuk Showroom Keramik, Toko & Rumah — Radja AC",
    h1: "Jual AC Klampok untuk Showroom Keramik, Toko & Usaha",
    description:
      "Butuh AC untuk showroom keramik, toko, ruko, atau rumah di Klampok (Purwareja Klampok), Banjarnegara? Radja AC cek PK, stok, pengiriman, dan opsi pemasangan.",
    intro:
      "Butuh AC di Klampok untuk showroom dan galeri keramik, toko, ruko, atau rumah? Tim Radja AC cek luas ruang, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Klampok (Purwareja Klampok) di ujung barat Banjarnegara terkenal sebagai sentra keramik dan gerabah yang sudah lama menjadi ikon daerah, berada di jalur Banjarnegara–Purbalingga. Banyak showroom keramik, workshop, toko, dan ruko di sepanjang jalan. AC dipakai untuk showroom, ruang kerja, toko, dan rumah, dengan kapasitas dihitung dari luas dan jam buka. Untuk jual AC Klampok, unit dikirim dari gudang Banyumas ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Sentra keramik dan gerabah Klampok",
      "Showroom dan galeri keramik di sepanjang jalan",
      "Jalur Banjarnegara–Purbalingga",
      "Pasar dan pertokoan Klampok",
      "Permukiman Purwareja Klampok",
    ],
    localBenefits: [
      "Showroom dan galeri keramik yang ramai pengunjung butuh ruang adem agar pembeli betah memilih",
      "Toko dan ruko di jalur Banjarnegara–Purbalingga dipakai jam panjang sehingga kapasitas perlu sesuai luas",
      "Rumah warga banyak pilih low watt menyesuaikan daya listrik rumahan",
    ],
    localCases: [
      ["Showroom & galeri keramik", "AC ruang pamer agar pengunjung nyaman memilih keramik dan gerabah."],
      ["Toko & ruko jalur", "AC ruang jualan di jalur Banjarnegara–Purbalingga dengan pemakaian jam panjang."],
      ["Rumah tinggal", "AC kamar yang panas saat siang dengan pilihan sesuai daya listrik."],
    ],
    keywordVariants: [
      "jual AC Klampok",
      "AC showroom keramik Klampok",
      "AC toko Klampok",
      "AC ruko Klampok",
      "AC rumah Klampok",
      "cek stok AC Klampok",
      "pengiriman AC Klampok",
      "AC banyak unit Klampok",
    ],
    localFaq: [
      [
        "AC untuk showroom atau galeri keramik di Klampok?",
        "Ruang pamer yang ramai pengunjung dan sering buka pintu butuh kapasitas sesuai luas dan lalu lalang. Kirim ukuran showroom untuk perkiraan PK.",
      ],
      [
        "AC untuk toko atau ruko di jalur Banjarnegara–Purbalingga (Klampok)?",
        "Ruang jualan yang dipakai jam panjang butuh kapasitas sesuai luas. Sebutkan ukuran ruang dan jam buka untuk arahan unit.",
      ],
      [
        "AC rumah di Klampok, hemat listrik?",
        "Rumah dengan daya 900–1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok.",
      ],
      [
        "Pengiriman AC ke Klampok dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Klampok lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    prePublishNotes: [
      "Pembeda kuat: sentra keramik Klampok. Nearby links semua live.",
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
    clusterType: "residential",
    eyebrow: "Child Banjarnegara — Bawang",
    title: "Jual AC Bawang Banjarnegara untuk Rumah & Usaha — Radja AC",
    h1: "Jual AC Bawang Banjarnegara untuk Rumah & Usaha",
    description:
      "Butuh AC untuk rumah, kamar, atau toko kecil di Bawang, Banjarnegara? Radja AC cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Bawang, Banjarnegara untuk rumah, kamar yang panas saat siang, atau toko kecil? Tim Radja AC cek ukuran ruangan, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Bawang adalah kecamatan di sisi timur Banjarnegara dekat pusat kota, memadukan permukiman, pertanian, dan usaha lokal di jalur menuju Wonosobo. Penamaan 'Bawang Banjarnegara' dipakai agar tidak tertukar dengan Bawang di daerah lain. AC banyak dipakai untuk rumah dan kamar yang panas saat siang serta toko kecil. Untuk jual AC Bawang Banjarnegara, unit dikirim dari gudang Banyumas ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Jalur Banjarnegara–Wonosobo",
      "Pasar dan permukiman Bawang",
      "Dekat pusat kota Banjarnegara",
      "Kawasan pertanian dan persawahan",
      "Aliran Sungai Serayu",
    ],
    localBenefits: [
      "Dekat pusat kota Banjarnegara sehingga pengiriman unit dan koordinasi survei relatif mudah",
      "Rumah banyak pilih low watt menyesuaikan daya listrik rumahan",
      "Toko kecil dan usaha lokal di jalur menuju Wonosobo butuh ruang yang adem saat siang",
    ],
    localCases: [
      ["Rumah & kamar", "Pemasangan AC kamar yang panas saat siang dengan pilihan low watt."],
      ["Toko kecil & usaha lokal", "AC ruang usaha di sekitar Bawang agar pelanggan nyaman."],
      ["Tambah unit bertahap", "Keluarga menambah AC per kamar mengikuti anggaran."],
    ],
    keywordVariants: [
      "jual AC Bawang Banjarnegara",
      "AC rumah Bawang Banjarnegara",
      "AC kamar Bawang Banjarnegara",
      "AC toko Bawang Banjarnegara",
      "AC low watt Bawang Banjarnegara",
      "cek stok AC Bawang Banjarnegara",
      "pengiriman AC Bawang Banjarnegara",
      "AC banyak unit Bawang Banjarnegara",
    ],
    localFaq: [
      [
        "AC rumah di Bawang, Banjarnegara, hemat listrik?",
        "Rumah dengan daya 900–1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok.",
      ],
      [
        "Pengiriman AC ke Bawang dekat pusat Banjarnegara cepat?",
        "Relatif mudah karena Bawang dekat pusat kota Banjarnegara. Sebutkan alamat dan jumlah unit untuk perkiraan jadwal pengiriman.",
      ],
      [
        "Cukup pasang AC di satu kamar dulu di Bawang?",
        "Bisa. Banyak yang mulai dari kamar yang paling panas saat siang lalu menambah unit bertahap. Sebutkan ukuran kamar untuk arahan PK.",
      ],
      [
        "Pembayaran AC di Bawang Banjarnegara bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    prePublishNotes: [
      "Material lokal tipis; prioritas rendah. Penamaan 'Bawang Banjarnegara' untuk disambiguasi.",
    ],
    publishGate:
      "Publish setelah Banjarnegara stabil atau ada sinyal query Bawang Banjarnegara.",
  }),
];

export const areaChildDraftPublishRules = [
  "Child draft ini belum live, belum masuk sitemap, dan tidak boleh di-import ke app sebelum waktunya publish.",
  "Child page tidak boleh dipublish sebelum parent/hub live dan stabil.",
  "Publish maksimal 3–5 area per batch.",
  "Sebelum publish: tambah route final, pindahkan item ke content/areas.js, tambahkan slug ke areaClusterMap sesuai clusterType item, cek parent/nearby links, lalu jalankan npm run check.",
  "Jangan publish child area yang hanya swap nama tanpa localContext unik, localLandmarks, localBenefits, localCases, parentAreaPath, nearby links, CTA, dan FAQ berbasis lokasi.",
];
