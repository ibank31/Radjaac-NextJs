// STAGED AREA DRAFTS ONLY.
// Do not import this file into app routes, sitemap, or live components.
// To publish an area, move one item into content/areas.js and add the final route intentionally.
//
// Quality standard: every item must read like it was written for that specific
// place. Each draft below carries real localContext, 5 localLandmarks,
// 3 localBenefits, 3 localCases, a correct clusterType, and location-specific
// localFaq (no generic "punya toko fisik" question). These fields are what the
// live renderer (app/[slug]/page.js + resolveAreaContent) actually surfaces.

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
    eyebrow: eyebrow ?? "Area Regional Bertahap",
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
      `${areaName} dilayani dari showroom dan gudang Radja AC di Banyumas dengan pengiriman unit ke alamat.`,
      "Kebutuhan AC dibaca dari ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan alamat detail.",
      "Pengiriman dan opsi pemasangan dikonfirmasi dari data lokasi, akses pekerjaan, dan jadwal.",
      "Tanpa klaim toko lokal; bukti operasional mengacu ke dokumentasi showroom, stok, pengiriman, dan pemasangan Radja AC.",
    ],
    localFaq,
    commonNeeds: commonNeeds ?? [
      `AC rumah tinggal dan kamar tidur di ${areaName}`,
      "AC kost, kontrakan, dan rumah sewa",
      "AC toko, ruko, kantor, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal, proyek, pengadaan, atau kebutuhan banyak unit",
    ],
    buyingChecks: buyingChecks ?? [
      `Lokasi detail area ${areaName}`,
      "Ukuran ruangan dan estimasi kebutuhan PK",
      "Daya listrik dan kebutuhan low watt atau inverter",
      "Alamat pengiriman dan kebutuhan opsi pemasangan",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: relatedLinks ?? defaultDraftRelatedLinks,
    ctaLabel: `Chat WhatsApp untuk cek stok AC ${areaName}`,
    waIntent: `cek stok AC ${areaName} dengan data ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan`,
    waArea: areaName,

    draftStatus: "ready",
    publishPriority: priority,
    draftType: "regional-area",
    publishGate,
    prePublishNotes,
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
      secondaryKeywords: (keywordVariants ?? []).slice(1, 7),
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
      "Pindahkan draft item ke content/areas.js dan tambahkan slug ke areaClusterMap dengan clusterType item ini.",
      "Pastikan plannedRouteKey dipakai konsisten.",
      "Cek nearbyAreaLinks tidak menuju URL draft yang belum live.",
      "Pasang internal link masuk dari hub atau area relevan bila masuk akal.",
      "Pastikan title, description, h1, localContext, FAQ, CTA, dan paymentNote tetap aman.",
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
    clusterType: "hospitality",
    eyebrow: "Area Kawasan Borobudur & Magelang",
    title: "Jual AC Magelang untuk Penginapan, Rumah & Usaha Wisata — Radja AC",
    h1: "Jual AC Magelang untuk Penginapan, Rumah & Usaha Wisata",
    description:
      "Butuh AC untuk homestay, hotel, rumah, kafe, atau banyak unit di Magelang dan kawasan Borobudur? Radja AC bantu cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Magelang untuk homestay, hotel, rumah, kafe wisata, atau banyak kamar penginapan? Tim Radja AC cek ukuran kamar, daya listrik, jumlah unit, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Magelang memadukan kota berhawa sejuk di kaki Gunung Tidar dengan kawasan wisata Borobudur dan Mendut yang ramai sepanjang tahun. Permintaan AC paling banyak datang dari homestay, guest house, dan hotel di sekitar candi, resto serta kafe wisata, dan rumah di pusat kota maupun Mertoyudan. Karena udaranya relatif sejuk, banyak pemilik rumah memasang AC selektif di kamar tertentu, sedangkan penginapan justru butuh kamar tamu yang adem dan seragam saat musim kunjungan naik. Tim Radja AC mengecek jumlah kamar, ukuran ruangan, daya listrik, dan jadwal sebelum unit dikirim dari Banyumas.",
    localLandmarks: [
      "Candi Borobudur dan kawasan wisata sekitarnya",
      "Candi Mendut dan Pawon",
      "Gunung Tidar",
      "Akademi Militer (Akmil) Magelang",
      "Alun-alun dan pusat Kota Magelang",
    ],
    localBenefits: [
      "Homestay, guest house, dan hotel sekitar Borobudur butuh AC kamar tamu yang seragam dan nyaman saat musim kunjungan ramai",
      "Udara Magelang yang sejuk membuat banyak rumah memilih AC selektif per kamar, bukan seluruh ruangan",
      "Resto dan kafe wisata perlu ruang adem untuk rombongan pengunjung yang datang saat akhir pekan",
    ],
    localCases: [
      ["Homestay & hotel kawasan Borobudur", "Pengadaan AC kamar tamu seragam yang mudah dirawat saat okupansi wisata naik."],
      ["Rumah di kota & Mertoyudan", "AC kamar tertentu yang panas saat siang, menyesuaikan udara sejuk Magelang."],
      ["Resto & kafe wisata", "AC ruang pelanggan agar rombongan wisata betah saat akhir pekan ramai."],
    ],
    keywordVariants: [
      "jual AC Magelang",
      "AC homestay Borobudur",
      "AC hotel dan guest house Magelang",
      "AC rumah Magelang",
      "AC kafe dan resto wisata Magelang",
      "cek stok AC Magelang",
      "pengiriman AC Magelang",
      "AC banyak unit penginapan Magelang",
    ],
    localFaq: [
      [
        "Magelang kan sejuk, rumah masih perlu AC?",
        "Banyak yang pasang selektif—kamar yang panas saat siang atau kamar anak—bukan seluruh rumah. Sebutkan ruangan dan ukurannya untuk arahan PK dan stok.",
      ],
      [
        "AC untuk homestay atau hotel dekat Borobudur, pilih apa?",
        "Kamar tamu yang dipakai menginap lebih nyaman dengan unit yang tenang dan seragam; inverter cocok bila kamar terisi hampir tiap malam. Kirim jumlah kamar dan ukurannya untuk arahan.",
      ],
      [
        "Bisa pengadaan AC banyak kamar untuk penginapan kawasan wisata Magelang?",
        "Bisa. Kirim jumlah kamar, ukuran, daya listrik, dan target musim ramai agar tim menyiapkan unit seragam, stok, pengiriman, dan opsi pemasangan bertahap.",
      ],
      [
        "Pengiriman AC ke Magelang dari Banyumas bagaimana?",
        "Showroom dan gudang Radja AC ada di Banyumas; untuk Magelang unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    relatedLinks: [
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Pengadaan AC Hotel & Guest House", "/pengadaan-ac/hotel-guest-house"],
      ["AC Inverter", "/katalog/ac-inverter"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Katalog AC", "/katalog"],
      ["Kontak Radja AC", "/kontak"],
    ],
    prePublishNotes: [
      "Cincin dekat (Jawa Tengah–DIY) dan sudah disebut di RADJA_GROWTH_STRATEGY sebagai kandidat regional paling aman.",
      "Saat publish, gunakan angle hospitality Borobudur; jangan diperlakukan sebagai kota pesisir panas.",
    ],
    publishGate:
      "Publish setelah core Banyumas ring stabil atau ada sinyal query/impression Magelang.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-salatiga",
    areaName: "Salatiga",
    priority: "P2",
    clusterType: "education",
    eyebrow: "Area Salatiga — Koridor Semarang–Solo",
    title: "Jual AC Salatiga untuk Kos, Rumah & Usaha — Radja AC",
    h1: "Jual AC Salatiga untuk Kos, Rumah & Usaha",
    description:
      "Butuh AC untuk kos, rumah, kafe, kantor, atau banyak kamar di Salatiga? Radja AC bantu cek PK, daya listrik, stok, pengiriman, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Salatiga untuk kos mahasiswa, rumah, kafe, kantor, atau banyak kamar sewa? Tim Radja AC cek jumlah kamar, daya listrik, ukuran ruangan, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Salatiga adalah kota kecil berhawa sejuk di kaki Gunung Merbabu, dikenal sebagai kota pendidikan dengan UKSW dan UIN Salatiga serta banyak kos dan rumah sewa mahasiswa. Karena udaranya cenderung dingin, kebutuhan AC di sini selektif: kamar kos atau kafe yang penuh saat siang, ruang kerja, dan kamar tertentu di rumah. Banyak pemilik kos memasang AC agar kamar lebih cepat terisi, dengan pilihan low watt yang menyesuaikan daya listrik per kamar. Tim Radja AC mengecek jumlah kamar, daya total bangunan, dan ukuran ruangan sebelum unit dikirim dari Banyumas.",
    localLandmarks: [
      "Universitas Kristen Satya Wacana (UKSW)",
      "UIN Salatiga",
      "Kaki Gunung Merbabu",
      "Jalur transit Semarang–Solo",
      "Sentra kuliner dan kafe Salatiga",
    ],
    localBenefits: [
      "Kos dan rumah sewa di sekitar UKSW dan UIN cari AC kamar hemat daya supaya kamar cepat terisi",
      "Udara Salatiga yang sejuk membuat AC dipakai selektif—kamar yang penuh saat siang atau ruang kerja",
      "Kafe dan resto yang ramai mahasiswa tetap butuh ruang adem meski kota relatif dingin",
    ],
    localCases: [
      ["Kos & rumah sewa mahasiswa", "AC kamar hemat daya tipe seragam, dipasang bertahap mengikuti hunian."],
      ["Kafe & resto sekitar kampus", "AC ruang pelanggan agar betah saat jam ramai meski kota sejuk."],
      ["Rumah & ruang kerja", "AC kamar atau ruang tertentu yang panas saat siang, bukan seluruh rumah."],
    ],
    keywordVariants: [
      "jual AC Salatiga",
      "AC kos Salatiga",
      "AC kamar dekat UKSW",
      "AC rumah Salatiga",
      "AC kafe Salatiga",
      "cek stok AC Salatiga",
      "pengiriman AC Salatiga",
      "AC low watt Salatiga",
    ],
    localFaq: [
      [
        "Salatiga kan dingin, kos masih perlu AC?",
        "Kamar ber-AC tetap lebih cepat laku karena siang bisa tetap gerah. Banyak yang pilih low watt agar daya per kamar aman. Sebutkan jumlah kamar dan daya listrik total untuk cek unit dan stok.",
      ],
      [
        "AC kos dekat UKSW supaya hemat listrik, pilih apa?",
        "Untuk banyak kamar, low watt tipe seragam menjaga daya dan memudahkan perawatan. Kirim daya total bangunan dan jumlah kamar untuk arahan unit.",
      ],
      [
        "AC untuk kafe atau resto di Salatiga yang ramai mahasiswa?",
        "Ruang yang penuh saat jam makan butuh kapasitas sesuai luas dan jumlah kursi. Sebutkan ukuran ruang dan jam ramai untuk perkiraan PK.",
      ],
      [
        "Pengiriman AC ke Salatiga dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Salatiga lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
    ],
    relatedLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Pengadaan AC Kost & Apartemen", "/pengadaan-ac/kost-apartemen-skala-besar"],
      ["AC Low Watt", "/katalog/ac-low-watt"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Katalog AC", "/katalog"],
      ["Kontak Radja AC", "/kontak"],
    ],
    prePublishNotes: [
      "Gunakan cluster education (kos/kampus), bukan trade pesisir.",
      "Pertahankan angle jujur: kota sejuk, AC dipakai selektif.",
    ],
    publishGate:
      "Publish setelah Semarang/Solo punya sinyal GSC yang cukup atau ada lead regional terkait Salatiga.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-pekalongan",
    areaName: "Pekalongan",
    priority: "P2",
    clusterType: "trade",
    eyebrow: "Area Pantura — Kota Batik Pekalongan",
    title: "Jual AC Pekalongan untuk Toko Batik, Ruko & Usaha — Radja AC",
    h1: "Jual AC Pekalongan untuk Toko Batik, Ruko & Usaha",
    description:
      "Butuh AC untuk showroom batik, ruko grosir, kantor, rumah, atau banyak unit di Pekalongan? Radja AC bantu cek PK, stok, pengiriman, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Pekalongan untuk showroom batik, ruko grosir, kantor, rumah, atau usaha tepi jalan? Tim Radja AC cek luas ruang, jam buka, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Pekalongan adalah Kota Batik di jalur Pantura yang panas dan lembap, dengan denyut ekonomi dari sentra serta grosir batik, ruko dagang, dan pasar tekstil. Karena pesisir terasa gerah hampir sepanjang hari, AC banyak dipakai untuk showroom batik, ruko grosir, kantor, dan rumah. Toko batik yang ramai pembeli dan sering buka-tutup pintu butuh kapasitas yang dihitung dari luas dan lalu lalang, sementara udara lembap pesisir membuat perawatan filter perlu lebih sering. Tim Radja AC mengecek luas ruang usaha, jam buka, dan jumlah unit sebelum unit dikirim dari Banyumas.",
    localLandmarks: [
      "Kampung Batik Kauman dan Pesindon",
      "International Batik Center (IBC)",
      "Pasar Grosir Batik Setono",
      "Jalur Pantura Pekalongan",
      "Pantai Pasir Kencana",
    ],
    localBenefits: [
      "Showroom dan toko batik yang ramai pembeli butuh ruang adem agar pengunjung betah memilih",
      "Iklim Pantura yang panas-lembap membuat AC dipakai jam panjang dan PK perlu dihitung dari luas",
      "Udara lembap mempercepat filter kotor, jadi pemilihan unit dan jadwal perawatan jadi pertimbangan",
    ],
    localCases: [
      ["Showroom & grosir batik", "AC ruang pamer dan toko grosir agar pembeli nyaman saat jam ramai."],
      ["Ruko & kantor dagang", "AC ruang kerja dan layanan dengan pemakaian jam panjang di kota panas."],
      ["Rumah pesisir", "AC kamar yang gerah karena udara Pantura, dengan pilihan sesuai daya listrik rumah."],
    ],
    keywordVariants: [
      "jual AC Pekalongan",
      "AC toko batik Pekalongan",
      "AC ruko grosir Pekalongan",
      "AC rumah Pekalongan",
      "AC kantor Pekalongan",
      "cek stok AC Pekalongan",
      "pengiriman AC Pekalongan",
      "AC banyak unit Pekalongan",
    ],
    localFaq: [
      [
        "AC untuk showroom atau toko batik Pekalongan yang ramai, pilih apa?",
        "Ruang pamer yang sering buka pintu dan penuh pembeli butuh kapasitas sesuai luas dan lalu lalang. Kirim ukuran toko dan jam ramai untuk perkiraan PK.",
      ],
      [
        "Pekalongan kan panas dan lembap, PK perlu lebih besar?",
        "Sering iya—beban panas pesisir membuat ruangan lebih cepat gerah, jadi kapasitas dihitung dari luas, tinggi plafon, dan bukaan. Sebutkan ukuran ruang untuk arahan.",
      ],
      [
        "AC sering dipakai seharian di toko, perawatannya bagaimana di Pekalongan?",
        "Udara lembap pesisir mempercepat filter kotor, jadi pembersihan lebih rutin membantu. Pilih kapasitas yang sesuai beban agar unit tidak bekerja terlalu keras.",
      ],
      [
        "Pengiriman AC ke Pekalongan dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Pekalongan lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
    ],
    relatedLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Pengadaan AC Kantor & Ruko", "/pengadaan-ac/gedung-kantor-ruko"],
      ["AC Kantor & Komersial", "/katalog/ac-kantor-komersial"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Katalog AC", "/katalog"],
      ["Kontak Radja AC", "/kontak"],
    ],
    prePublishNotes: [
      "Cluster trade (Pantura panas). Angle batik/grosir membedakannya dari Tegal dan Semarang.",
    ],
    publishGate:
      "Publish setelah Tegal atau area Pantura mulai menunjukkan impression/query yang relevan.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-pemalang",
    areaName: "Pemalang",
    priority: "P2",
    clusterType: "trade",
    eyebrow: "Area Pantura — Pemalang",
    title: "Jual AC Pemalang untuk Toko, Ruko & Rumah — Radja AC",
    h1: "Jual AC Pemalang untuk Toko, Ruko & Rumah",
    description:
      "Butuh AC untuk toko, ruko, rumah makan, rumah, atau banyak unit di Pemalang? Radja AC bantu cek PK, stok, pengiriman, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Pemalang untuk toko, ruko, rumah makan tepi jalan, rumah, atau usaha? Tim Radja AC cek luas ruang, daya listrik, jumlah unit, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Pemalang berada di jalur Pantura yang panas, memadukan kawasan pesisir, pasar dan pertokoan, serta daerah pertanian penghasil nanas madu dan mangga. Lalu lintas Tol Trans Jawa menumbuhkan usaha tepi jalan, ruko, dan rumah makan. Karena udara pesisir gerah hampir sepanjang hari, AC dipakai untuk toko, ruko, kantor, dan rumah, dengan kapasitas yang dihitung dari luas dan jam buka. Tim Radja AC mengecek ukuran ruang, daya listrik, dan jumlah unit sebelum unit dikirim dari Banyumas.",
    localLandmarks: [
      "Alun-alun Pemalang",
      "Pantai Widuri",
      "Exit Tol Pemalang dan jalur Pantura",
      "Pasar Pagi Pemalang",
      "Sentra nanas madu dan mangga Pemalang",
    ],
    localBenefits: [
      "Toko, ruko, dan rumah makan tepi jalan Pantura butuh ruang adem untuk pembeli yang singgah",
      "Iklim pesisir yang panas membuat AC rumah dan usaha dipakai jam panjang",
      "Lalu lintas Tol Trans Jawa menumbuhkan usaha baru yang butuh pendinginan ruang pelanggan",
    ],
    localCases: [
      ["Toko & ruko jalur Pantura", "AC ruang jualan agar pembeli yang singgah betah memilih."],
      ["Rumah makan & usaha tepi jalan", "AC area pelanggan untuk jam buka panjang di kota panas."],
      ["Rumah tinggal", "AC kamar yang gerah karena udara pesisir, sesuai daya listrik rumah."],
    ],
    keywordVariants: [
      "jual AC Pemalang",
      "AC toko Pemalang",
      "AC ruko Pemalang",
      "AC rumah makan Pemalang",
      "AC rumah Pemalang",
      "cek stok AC Pemalang",
      "pengiriman AC Pemalang",
      "AC banyak unit Pemalang",
    ],
    localFaq: [
      [
        "AC untuk toko atau ruko di jalur Pantura Pemalang?",
        "Ruang yang sering buka pintu dan ramai butuh kapasitas sesuai luas dan pengunjung. Kirim ukuran ruang dan jam buka untuk perkiraan PK.",
      ],
      [
        "Pemalang panas pesisir, AC rumah pilih apa?",
        "Kamar yang gerah saat siang paling butuh AC; pilihan low watt cocok untuk daya rumahan. Sebutkan ukuran kamar dan daya listrik untuk arahan.",
      ],
      [
        "AC untuk rumah makan dekat exit tol Pemalang?",
        "Area makan yang ramai saat jam singgah butuh pendinginan merata; kapasitas dihitung dari luas dan jumlah kursi. Kirim ukuran ruang untuk perkiraan.",
      ],
      [
        "Pengiriman AC ke Pemalang dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Pemalang lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Purbalingga", "/jual-ac-purbalingga"],
    ],
    prePublishNotes: [
      "Material lokal lebih tipis dari Pekalongan/Tegal; aman dipublish berbarengan dengan klaster Pantura.",
    ],
    publishGate:
      "Publish setelah Tegal stabil atau ada sinyal GSC/lead untuk Pemalang/Pantura.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-brebes",
    areaName: "Brebes",
    priority: "P2",
    clusterType: "trade",
    eyebrow: "Area Pantura Barat — Brebes",
    title: "Jual AC Brebes untuk Toko, Ruko & Rumah — Radja AC",
    h1: "Jual AC Brebes untuk Toko, Ruko & Rumah",
    description:
      "Butuh AC untuk toko, ruko, usaha tepi jalan, rumah, atau banyak unit di Brebes? Radja AC bantu cek PK, stok, pengiriman, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Brebes untuk toko, ruko, usaha oleh-oleh, rumah, atau banyak unit? Tim Radja AC cek luas ruang, daya listrik, jumlah unit, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Brebes ada di ujung barat Pantura Jawa Tengah, gerbang menuju Jawa Barat, dikenal sebagai sentra bawang merah dan telur asin dengan exit Tol Trans Jawa yang sibuk. Ekonominya banyak dari pasar, pertokoan, usaha oleh-oleh tepi jalan, dan rumah di dataran pesisir yang panas. AC dipakai untuk toko, ruko, kantor, dan rumah, dengan kapasitas dihitung dari luas dan jam buka. Tim Radja AC mengecek alamat, ukuran ruang, dan jumlah unit sebelum unit dikirim dari Banyumas.",
    localLandmarks: [
      "Sentra bawang merah Brebes",
      "Sentra telur asin Brebes",
      "Exit Tol Brebes dan jalur Pantura",
      "Alun-alun Brebes",
      "Kawasan perbatasan Jawa Tengah–Jawa Barat",
    ],
    localBenefits: [
      "Toko, ruko, dan usaha oleh-oleh tepi jalan Pantura butuh ruang adem untuk pembeli yang singgah",
      "Dataran pesisir yang panas membuat AC rumah dan usaha dipakai jam panjang",
      "Posisi gerbang Jateng–Jabar menumbuhkan usaha dan rumah baru yang butuh pendinginan",
    ],
    localCases: [
      ["Toko oleh-oleh & ruko", "AC ruang jualan agar pembeli yang singgah dari tol betah memilih."],
      ["Kantor & usaha tepi jalan", "AC ruang layanan dengan pemakaian jam panjang di kota panas."],
      ["Rumah tinggal", "AC kamar yang gerah karena udara pesisir, sesuai daya listrik rumah."],
    ],
    keywordVariants: [
      "jual AC Brebes",
      "AC toko Brebes",
      "AC ruko Brebes",
      "AC rumah Brebes",
      "AC kantor Brebes",
      "cek stok AC Brebes",
      "pengiriman AC Brebes",
      "AC banyak unit Brebes",
    ],
    localFaq: [
      [
        "AC untuk toko atau ruko di jalur Pantura Brebes?",
        "Ruang yang ramai dan sering buka pintu butuh kapasitas sesuai luas dan pengunjung. Kirim ukuran ruang dan jam buka untuk perkiraan PK.",
      ],
      [
        "AC untuk toko oleh-oleh telur asin atau bawang dekat exit tol Brebes?",
        "Ruang jualan dan etalase yang ramai saat jam singgah butuh pendinginan merata. Sebutkan luas ruang dan jumlah pengunjung untuk arahan unit.",
      ],
      [
        "Brebes panas pesisir, AC rumah pilih apa?",
        "Kamar yang gerah saat siang paling butuh AC; low watt cocok untuk daya rumahan. Sebutkan ukuran kamar dan daya listrik untuk arahan.",
      ],
      [
        "Pengiriman AC ke Brebes dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Brebes lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
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
    clusterType: "hospitality",
    eyebrow: "Area Dataran Tinggi — Wonosobo & Dieng",
    title: "Jual AC Wonosobo untuk Penginapan, Usaha & Rumah — Radja AC",
    h1: "Jual AC Wonosobo untuk Penginapan, Usaha & Rumah",
    description:
      "Butuh AC untuk penginapan wisata Dieng, homestay, usaha, atau kamar tertentu di Wonosobo? Radja AC bantu cek kebutuhan yang benar-benar perlu AC, stok, pengiriman, dan opsi pemasangan.",
    intro:
      "Butuh AC di Wonosobo untuk penginapan dan homestay wisata Dieng, usaha di area kota, atau kamar tertentu di rumah? Tim Radja AC bantu menilai ruang mana yang benar-benar perlu AC, lalu cek stok, pengiriman, dan opsi pemasangan.",
    localContext:
      "Wonosobo adalah kota dataran tinggi yang sejuk, gerbang wisata Dieng, dengan udara dingin terutama di bagian atas. Karena hawanya sejuk, kebutuhan AC di sini paling jujur diarahkan ke penginapan dan homestay wisata yang butuh kamar tamu nyaman saat ramai pengunjung, serta usaha dan ruang tertentu di area kota yang lebih hangat saat siang. Banyak rumah justru tidak memerlukan AC. Tim Radja AC akan menanyakan lokasi dan ruangan agar tidak menyarankan unit yang tidak diperlukan, sebelum unit dikirim dari Banyumas.",
    localLandmarks: [
      "Dataran Tinggi Dieng",
      "Telaga Warna dan kompleks candi Dieng",
      "Alun-alun Wonosobo",
      "Sentra carica dan mie ongklok",
      "Penginapan dan homestay kawasan wisata Dieng",
    ],
    localBenefits: [
      "Penginapan dan homestay wisata Dieng pasang AC di kamar tamu yang perlu nyaman saat okupansi naik",
      "Sebagian area kota yang lebih hangat saat siang memakai AC selektif untuk ruang usaha atau kamar tertentu",
      "Karena banyak area sudah sejuk, pemilihan unit difokuskan ke ruang yang benar-benar memerlukan",
    ],
    localCases: [
      ["Penginapan & homestay wisata", "AC kamar tamu yang nyaman dan mudah dirawat saat musim kunjungan Dieng ramai."],
      ["Usaha & ruang kota", "AC ruang tertentu yang hangat saat siang di area kota Wonosobo."],
      ["Kamar tertentu di rumah", "AC selektif untuk kamar yang panas, bukan seluruh rumah, sesuai udara sejuk."],
    ],
    keywordVariants: [
      "jual AC Wonosobo",
      "AC penginapan Dieng",
      "AC homestay Wonosobo",
      "AC usaha Wonosobo",
      "AC kamar Wonosobo",
      "cek stok AC Wonosobo",
      "pengiriman AC Wonosobo",
      "AC banyak unit penginapan Wonosobo",
    ],
    localFaq: [
      [
        "Wonosobo kan dingin, masih perlu AC?",
        "Tidak semua. Kebutuhan AC paling nyata di kamar tamu penginapan saat ramai dan ruang usaha yang hangat saat siang; banyak rumah memang tidak perlu. Sebutkan lokasi dan ruangannya agar arahannya jujur.",
      ],
      [
        "AC kamar penginapan atau homestay dekat Dieng, pilih apa?",
        "Kamar tamu yang dipakai menginap lebih nyaman dengan unit tenang dan mudah dirawat. Kirim jumlah kamar dan ukurannya untuk arahan unit dan stok.",
      ],
      [
        "Bisa pengadaan AC banyak kamar untuk penginapan kawasan Dieng?",
        "Bisa. Kirim jumlah kamar, ukuran, dan target musim ramai agar tim menyiapkan unit, stok, pengiriman, dan opsi pemasangan bertahap.",
      ],
      [
        "Pengiriman AC ke Wonosobo dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Wonosobo lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banyumas", "/jual-ac-banyumas"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
    ],
    relatedLinks: [
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
      ["Pengadaan AC Hotel & Guest House", "/pengadaan-ac/hotel-guest-house"],
      ["AC Inverter", "/katalog/ac-inverter"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Katalog AC", "/katalog"],
      ["Kontak Radja AC", "/kontak"],
    ],
    prePublishNotes: [
      "RISIKO: iklim dingin. Jangan pakai cluster trade/pesisir. Pertahankan angle jujur 'tidak semua ruangan perlu AC'.",
      "Fokus konversi ke penginapan/homestay Dieng dan usaha area kota.",
    ],
    publishGate:
      "Publish setelah Banjarnegara/Purwokerto stabil atau ada sinyal query Wonosobo.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-temanggung",
    areaName: "Temanggung",
    priority: "P2",
    clusterType: "residential",
    eyebrow: "Area Kaki Sindoro–Sumbing — Temanggung",
    title: "Jual AC Temanggung untuk Rumah, Toko & Usaha — Radja AC",
    h1: "Jual AC Temanggung untuk Rumah, Toko & Usaha",
    description:
      "Butuh AC untuk rumah, toko, kantor, atau gudang hasil bumi di Temanggung? Radja AC bantu cek ruang yang perlu AC, PK, stok, pengiriman, dan opsi pemasangan.",
    intro:
      "Butuh AC di Temanggung untuk rumah, toko, kantor di pusat kota, atau ruang usaha tertentu? Tim Radja AC bantu menilai ruang yang perlu AC, lalu cek PK, daya listrik, stok, pengiriman, dan opsi pemasangan.",
    localContext:
      "Temanggung adalah kota sejuk di kaki Gunung Sindoro dan Sumbing, dikenal sebagai sentra tembakau dan kopi. Udaranya relatif dingin sehingga kebutuhan AC selektif: kamar atau ruang yang hangat saat siang, toko dan kantor di pusat kota, serta gudang hasil bumi yang perlu suhu lebih stabil. Banyak rumah memasang AC hanya di kamar tertentu. Tim Radja AC menanyakan ruangan dan lokasi agar unit yang disarankan benar-benar diperlukan, sebelum dikirim dari Banyumas.",
    localLandmarks: [
      "Kaki Gunung Sindoro dan Sumbing",
      "Sentra tembakau Temanggung",
      "Alun-alun Temanggung",
      "Pasar Kliwon Temanggung",
      "Kawasan kebun kopi",
    ],
    localBenefits: [
      "Toko dan kantor di pusat kota yang hangat saat siang memakai AC untuk kenyamanan pelanggan dan staf",
      "Udara sejuk membuat rumah memasang AC selektif di kamar tertentu, bukan seluruh ruangan",
      "Gudang hasil bumi atau ruang usaha tertentu butuh suhu yang lebih stabil",
    ],
    localCases: [
      ["Toko & kantor pusat kota", "AC ruang pelanggan dan kerja yang hangat saat siang di pusat Temanggung."],
      ["Rumah tinggal", "AC kamar tertentu yang panas, menyesuaikan udara sejuk kota."],
      ["Gudang & ruang usaha", "AC ruang yang perlu suhu lebih stabil untuk aktivitas usaha."],
    ],
    keywordVariants: [
      "jual AC Temanggung",
      "AC rumah Temanggung",
      "AC toko Temanggung",
      "AC kantor Temanggung",
      "AC usaha Temanggung",
      "cek stok AC Temanggung",
      "pengiriman AC Temanggung",
      "AC banyak unit Temanggung",
    ],
    localFaq: [
      [
        "Temanggung kan sejuk, ruang mana yang perlu AC?",
        "Biasanya toko atau kantor di pusat kota yang hangat saat siang, dan kamar tertentu di rumah. Sebutkan ruangan dan ukurannya agar arahannya pas dan tidak berlebihan.",
      ],
      [
        "AC untuk toko atau kantor di pusat Temanggung?",
        "Ruang pelanggan dan kerja butuh kapasitas sesuai luas dan jumlah orang. Kirim ukuran ruang dan jam operasional untuk perkiraan PK.",
      ],
      [
        "AC untuk gudang atau ruang usaha hasil bumi Temanggung?",
        "Ruang yang perlu suhu stabil dihitung dari luas, tinggi plafon, dan beban panas. Sebutkan fungsi dan ukuran ruang untuk arahan unit.",
      ],
      [
        "Pengiriman AC ke Temanggung dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Temanggung lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
      ["Jual AC Purwokerto", "/jual-ac-purwokerto"],
      ["Jual AC Banjarnegara", "/jual-ac-banjarnegara"],
    ],
    prePublishNotes: [
      "Cluster residential + angle sejuk (mirip Wonosobo, lebih ringan). Jangan trade pesisir.",
      "Material lokal moderat; aman dipublish setelah Magelang.",
    ],
    publishGate:
      "Publish setelah Magelang siap dipublish atau ada data area Temanggung dari GSC/lead.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-kudus",
    areaName: "Kudus",
    priority: "P2",
    clusterType: "industrial",
    eyebrow: "Area Industri & Kota Kretek — Kudus",
    title: "Jual AC Kudus untuk Pabrik, Kantor, Ruko & Pengadaan — Radja AC",
    h1: "Jual AC Kudus untuk Pabrik, Kantor, Ruko & Pengadaan",
    description:
      "Butuh AC untuk kantor pabrik, mess, ruko, retail, atau pengadaan banyak unit di Kudus? Radja AC bantu cek PK, spesifikasi seragam, stok, pengiriman, dan opsi pemasangan.",
    intro:
      "Butuh AC di Kudus untuk kantor pabrik, mess pekerja, ruko, retail, atau pengadaan banyak unit? Tim Radja AC mulai dari rekap jumlah ruang, kapasitas per ruang, daya listrik, dan timeline sebelum unit dikirim dari Banyumas.",
    localContext:
      "Kudus adalah Kota Kretek, pusat industri rokok besar sekaligus tujuan wisata religi Menara Kudus dan makam Sunan Kudus serta Sunan Muria. Denyut ekonominya membuat permintaan AC kuat dari kantor pabrik, ruang kerja, mess, ruko, dan retail, termasuk pengadaan banyak unit dengan spesifikasi seragam. Dataran rendahnya panas sehingga ruang publik dan kantor dipakai ber-AC seharian. Tim Radja AC mulai dari rekap jumlah ruang, kapasitas per ruang, daya listrik, dan timeline sebelum unit dikirim dari Banyumas.",
    localLandmarks: [
      "Menara Kudus dan makam Sunan Kudus",
      "Kawasan industri rokok/kretek",
      "Makam Sunan Muria",
      "Simpang Tujuh Kudus",
      "Sentra jenang Kudus",
    ],
    localBenefits: [
      "Kantor pabrik, ruang kerja, dan mess di kawasan industri butuh kapasitas konsisten untuk pemakaian seharian",
      "Pengadaan banyak unit lebih rapi dengan spesifikasi seragam dan dokumentasi kebutuhan",
      "Ruko, retail, dan toko jenang di kota panas memerlukan ruang adem untuk pelanggan",
    ],
    localCases: [
      ["Kantor & mess kawasan industri", "AC ruang kerja dan mess dengan kapasitas dihitung dari luas dan jumlah staf."],
      ["Pengadaan banyak unit", "Penyediaan unit spesifikasi seragam, stok, dan jadwal pemasangan bertahap."],
      ["Ruko, retail & toko jenang", "AC ruang pelanggan agar nyaman di pusat dagang yang panas."],
    ],
    keywordVariants: [
      "jual AC Kudus",
      "pengadaan AC kantor Kudus",
      "AC pabrik dan mess Kudus",
      "AC ruko Kudus",
      "AC retail Kudus",
      "cek stok AC Kudus",
      "pengiriman AC Kudus",
      "AC banyak unit Kudus",
    ],
    localFaq: [
      [
        "Bisa pengadaan AC banyak unit untuk kantor atau pabrik di Kudus?",
        "Bisa. Kirim rekap jumlah ruang, luas, daya listrik, dan timeline agar tim menyusun unit spesifikasi seragam, stok, pengiriman, dan jadwal pemasangan bertahap.",
      ],
      [
        "AC untuk ruko, toko jenang, atau retail di Kudus?",
        "Ruang pelanggan yang ramai dan panas butuh kapasitas sesuai luas dan lalu lalang. Kirim ukuran ruang usaha untuk perkiraan PK.",
      ],
      [
        "Bisa minta spesifikasi unit seragam untuk proyek di Kudus?",
        "Bisa, dan justru disarankan untuk proyek agar perawatan serta sparepart lebih mudah. Tim cek ketersediaan stok sesuai kebutuhan.",
      ],
      [
        "Pengiriman AC ke Kudus dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Kudus lalu dipasang tim Radja AC atau diserahkan untuk dipasang tim lokasi, dengan pembayaran dikonfirmasi setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
    ],
    relatedLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Pengadaan AC Kantor & Ruko", "/pengadaan-ac/gedung-kantor-ruko"],
      ["Pengadaan Kontraktor & Developer", "/pengadaan-ac/kontraktor-developer"],
      ["AC Kantor & Komersial", "/katalog/ac-kantor-komersial"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Katalog AC", "/katalog"],
      ["Kontak Radja AC", "/kontak"],
    ],
    prePublishNotes: [
      "Potensi tertinggi di antara regional: intent B2B/industri kuat, pembeda jelas (kretek/jenang).",
      "Gunakan cluster industrial; arahkan ke halaman pengadaan.",
    ],
    publishGate:
      "Publish setelah Semarang/Solo stabil atau ada sinyal query Kudus.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-jepara",
    areaName: "Jepara",
    priority: "P2",
    clusterType: "industrial",
    eyebrow: "Area Industri Mebel — Jepara",
    title: "Jual AC Jepara untuk Showroom Mebel, Kantor & Usaha — Radja AC",
    h1: "Jual AC Jepara untuk Showroom Mebel, Kantor & Usaha",
    description:
      "Butuh AC untuk showroom mebel, kantor ekspor, workshop, rumah, atau banyak unit di Jepara? Radja AC bantu cek PK, stok, pengiriman, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Jepara untuk showroom furniture, kantor ekspor, workshop, rumah, atau pengadaan banyak unit? Tim Radja AC cek luas ruang, jumlah unit, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Jepara adalah kota ukir dan sentra industri mebel kayu yang produknya menembus pasar ekspor, dengan banyak showroom furniture, workshop, dan kantor ekspor di pesisir utara. Udara pesisirnya panas sehingga AC dipakai untuk showroom mebel, ruang kerja, kantor, dan rumah. Showroom yang luas dengan banyak pengunjung dan kantor ekspor yang beroperasi seharian butuh kapasitas yang dihitung dari luas dan beban. Tim Radja AC mengecek luas ruang, jumlah unit, dan daya listrik sebelum unit dikirim dari Banyumas.",
    localLandmarks: [
      "Sentra ukir dan mebel Jepara",
      "Showroom furniture ekspor",
      "Pendopo dan Museum R.A. Kartini",
      "Pantai Kartini",
      "Gerbang penyeberangan Karimunjawa",
    ],
    localBenefits: [
      "Showroom mebel yang luas dan ramai pengunjung butuh ruang adem agar pembeli betah memilih furniture",
      "Kantor ekspor dan ruang kerja yang beroperasi seharian memerlukan kapasitas konsisten di kota panas",
      "Pengadaan banyak unit untuk showroom, kantor, dan mess lebih rapi dengan spesifikasi seragam",
    ],
    localCases: [
      ["Showroom & galeri mebel", "AC ruang pamer luas agar pembeli nyaman memilih furniture saat ramai."],
      ["Kantor & workshop ekspor", "AC ruang kerja dengan pemakaian seharian di kota pesisir panas."],
      ["Rumah & banyak unit", "AC hunian dan pengadaan beberapa titik untuk usaha mebel."],
    ],
    keywordVariants: [
      "jual AC Jepara",
      "AC showroom mebel Jepara",
      "AC kantor ekspor Jepara",
      "AC workshop Jepara",
      "AC rumah Jepara",
      "cek stok AC Jepara",
      "pengiriman AC Jepara",
      "AC banyak unit Jepara",
    ],
    localFaq: [
      [
        "AC untuk showroom mebel Jepara yang luas dan berplafon tinggi?",
        "Ruang pamer luas dengan plafon tinggi dan banyak pengunjung butuh kapasitas lebih besar; dihitung dari luas, tinggi plafon, dan bukaan. Kirim ukuran showroom untuk arahan PK.",
      ],
      [
        "AC untuk kantor ekspor atau workshop di Jepara?",
        "Ruang kerja yang dipakai seharian butuh kapasitas konsisten. Sebutkan jumlah ruang, luas, dan jumlah staf untuk perkiraan unit.",
      ],
      [
        "Bisa pengadaan banyak unit untuk showroom dan kantor mebel Jepara?",
        "Bisa. Kirim rekap jumlah titik, ukuran ruang, dan daya listrik agar tim menyiapkan unit spesifikasi seragam, stok, pengiriman, dan opsi pemasangan bertahap.",
      ],
      [
        "Pengiriman AC ke Jepara dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Jepara lalu dipasang atau diserahkan untuk dipasang tim lokasi, dengan pembayaran dikonfirmasi setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Jual AC Tegal", "/jual-ac-tegal"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
    ],
    relatedLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Pengadaan AC Kantor & Ruko", "/pengadaan-ac/gedung-kantor-ruko"],
      ["Pengadaan Kontraktor & Developer", "/pengadaan-ac/kontraktor-developer"],
      ["AC Kantor & Komersial", "/katalog/ac-kantor-komersial"],
      ["Kalkulator PK AC", "/kalkulator-pk-ac"],
      ["Katalog AC", "/katalog"],
      ["Kontak Radja AC", "/kontak"],
    ],
    prePublishNotes: [
      "Cluster industrial (showroom mebel + kantor ekspor). Pembeda kuat dari kota lain.",
    ],
    publishGate:
      "Publish setelah Semarang/Kudus punya sinyal cukup atau ada kebutuhan lead area Jepara.",
  }),
  createRegionalAreaDraft({
    slug: "jual-ac-demak",
    areaName: "Demak",
    priority: "P2",
    clusterType: "trade",
    eyebrow: "Area Pantura — Demak (Kota Wali)",
    title: "Jual AC Demak untuk Toko, Ruko, Rumah Makan & Usaha — Radja AC",
    h1: "Jual AC Demak untuk Toko, Ruko & Usaha",
    description:
      "Butuh AC untuk toko, ruko, rumah makan peziarah, kantor, atau banyak unit di Demak? Radja AC bantu cek PK, stok, pengiriman, dan opsi pemasangan via WhatsApp.",
    intro:
      "Butuh AC di Demak untuk toko, ruko, rumah makan dan oleh-oleh peziarah, kantor, atau rumah? Tim Radja AC cek luas ruang, daya listrik, jumlah unit, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Demak dikenal sebagai Kota Wali dengan Masjid Agung Demak dan makam Sunan Kalijaga di Kadilangu yang ramai peziarah, berada di jalur Pantura dekat Semarang. Ekonominya banyak dari perdagangan, pertanian, dan usaha tepi jalan, dengan dataran pesisir yang panas dan sebagian rawan rob. AC dipakai untuk toko, ruko, kantor, rumah makan peziarah, dan rumah, dengan kapasitas dihitung dari luas dan jam buka. Tim Radja AC mengecek alamat, ukuran ruang, dan jumlah unit sebelum unit dikirim dari Banyumas.",
    localLandmarks: [
      "Masjid Agung Demak",
      "Makam Sunan Kalijaga (Kadilangu)",
      "Jalur Pantura Semarang–Demak",
      "Alun-alun Demak",
      "Pasar dan pertokoan Demak",
    ],
    localBenefits: [
      "Rumah makan dan toko oleh-oleh peziarah di sekitar masjid agung butuh ruang adem untuk pengunjung",
      "Dataran pesisir yang panas membuat AC toko, ruko, dan rumah dipakai jam panjang",
      "Posisi dekat Semarang memudahkan koordinasi pengiriman untuk usaha jalur Pantura",
    ],
    localCases: [
      ["Rumah makan & oleh-oleh peziarah", "AC ruang pelanggan agar peziarah yang singgah nyaman, terutama saat ramai."],
      ["Toko & ruko jalur Pantura", "AC ruang jualan dengan pemakaian jam panjang di kota panas."],
      ["Rumah tinggal", "AC kamar yang gerah karena udara pesisir, sesuai daya listrik rumah."],
    ],
    keywordVariants: [
      "jual AC Demak",
      "AC rumah makan Demak",
      "AC toko dan ruko Demak",
      "AC kantor Demak",
      "AC rumah Demak",
      "cek stok AC Demak",
      "pengiriman AC Demak",
      "AC banyak unit Demak",
    ],
    localFaq: [
      [
        "AC untuk rumah makan atau toko oleh-oleh peziarah dekat Masjid Agung Demak?",
        "Ruang yang ramai saat jam ziarah butuh pendinginan merata; kapasitas dihitung dari luas dan jumlah kursi atau pengunjung. Kirim ukuran ruang untuk perkiraan PK.",
      ],
      [
        "AC untuk toko atau ruko di jalur Pantura Demak?",
        "Ruang jualan yang sering buka pintu butuh kapasitas sesuai luas dan lalu lalang. Sebutkan ukuran ruang dan jam buka untuk arahan unit.",
      ],
      [
        "Demak panas dan dekat pesisir, AC rumah pilih apa?",
        "Kamar yang gerah saat siang paling butuh AC; low watt cocok untuk daya rumahan. Sebutkan ukuran kamar dan daya listrik untuk arahan.",
      ],
      [
        "Pengiriman AC ke Demak dari Banyumas bagaimana?",
        "Unit dikirim dari gudang Banyumas ke alamat Demak lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
      ],
    ],
    nearbyAreaLinks: [
      ["Jual AC Semarang", "/jual-ac-semarang"],
      ["Jual AC Solo", "/jual-ac-solo"],
      ["Jual AC Yogyakarta", "/jual-ac-yogyakarta"],
      ["Jual AC Tegal", "/jual-ac-tegal"],
    ],
    prePublishNotes: [
      "Cluster trade + angle ziarah (rumah makan/oleh-oleh). Dekat Semarang memudahkan logistik.",
    ],
    publishGate:
      "Publish setelah Semarang stabil atau ada sinyal query Demak.",
  }),
];

export const areaDraftPublishRules = [
  "Draft ini belum live, belum masuk sitemap, dan tidak boleh di-import ke app sebelum waktunya publish.",
  "Publish maksimal 3–5 area per batch.",
  "Sebelum publish: tambah route final, pindahkan item ke content/areas.js, tambahkan slug ke areaClusterMap sesuai clusterType item, cek internal link, lalu jalankan npm run check.",
  "Jangan publish area yang hanya swap nama tanpa localContext unik, localLandmarks, localBenefits, localCases, nearby links, CTA, dan FAQ berbasis lokasi.",
];
