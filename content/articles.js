import { routes } from "@/content/routes";

export const articleItems = [
  {
    slug: "panduan-beli-ac-baru",
    path: routes.artikelPanduanBeliAcBaru,
    title: "Panduan Beli AC Baru | Cek Ruangan, PK, Daya & Pemasangan",
    description:
      "Panduan beli AC baru agar tidak salah pilih: cek ukuran ruangan, daya listrik, PK, tipe AC, brand, garansi, stok, dan kebutuhan pemasangan.",
    h1: "Panduan beli AC baru sebelum order unit dan pemasangan",
    eyebrow: "Panduan Beli AC",
    readTime: "6 menit baca",
    intro:
      "Beli AC baru sebaiknya tidak dimulai dari merek atau harga paling rendah. Pembeli perlu cek ukuran ruangan, daya listrik, kapasitas PK, tipe AC, garansi, stok unit, dan kebutuhan pemasangan agar pilihan unit lebih masuk akal.",
    sections: [
      {
        heading: "Mulai dari ukuran ruangan dan kebutuhan PK",
        body: [
          "Sebelum memilih brand, cek dulu ukuran ruangan, tinggi plafon, arah panas matahari, jumlah orang, dan kebiasaan pemakaian. Data ini membantu menentukan apakah ruangan lebih cocok memakai 1/2 PK, 3/4 PK, 1 PK, atau kapasitas lain.",
          "Jika kapasitas AC terlalu kecil, ruangan bisa lama dingin dan mesin bekerja berat. Jika kapasitas terlalu besar, biaya awal bisa kurang efisien untuk kebutuhan ruangan yang sebenarnya sederhana.",
        ],
      },
      {
        heading: "Cek daya listrik sebelum memilih tipe AC",
        body: [
          "Daya listrik rumah ikut menentukan pilihan AC. Untuk daya terbatas, AC low watt bisa dipertimbangkan. Untuk pemakaian rutin beberapa jam setiap hari, AC inverter bisa lebih nyaman karena suhu cenderung stabil.",
          "Low watt atau inverter bukan pengganti hitungan PK. Tipe hemat listrik tetap perlu disesuaikan dengan ukuran ruangan dan kondisi pemakaian.",
        ],
      },
      {
        heading: "Bandingkan brand berdasarkan kebutuhan",
        body: [
          "Brand premium, brand ekonomis, dan brand value-for-money punya kelebihan masing-masing. Ada yang kuat di reputasi, ada yang menarik di harga, dan ada yang cocok untuk pemakaian rutin.",
          "Cara paling aman adalah menyebutkan ukuran ruangan, daya listrik, budget, dan pola pemakaian. Dari sana pilihan brand bisa dipersempit tanpa menebak-nebak.",
        ],
      },
      {
        heading: "Pastikan kebutuhan pemasangan dijelaskan dari awal",
        body: [
          "Saat tanya harga AC, pastikan apakah penawaran sudah termasuk pipa standar, kabel, bracket, selang pembuangan, vacuum, ongkir, dan jasa pasang. Jika titik indoor dan outdoor berjauhan, kebutuhan tambahan perlu dikonfirmasi.",
          "Minta penjelasan paket sejak awal agar total biaya lebih jelas. Ini lebih aman daripada hanya membandingkan harga unit yang terlihat murah tetapi belum termasuk kebutuhan instalasi di lokasi.",
        ],
      },
    ],
    ctaLabel: "Konsultasi Beli AC Baru",
    waIntent: "konsultasi beli AC baru setelah membaca panduan",
    relatedLinks: [
      ["Katalog AC", routes.katalog],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["Kontak RADJA AC", routes.kontak],
    ],
  },
  {
    slug: "ac-1-pk-untuk-ruangan-berapa",
    path: routes.artikelAcSatuPkUntukRuanganBerapa,
    title: "AC 1 PK untuk Ruangan Berapa? | Panduan Kapasitas AC",
    description:
      "Panduan memilih AC 1 PK untuk kamar dan ruang keluarga. Cek ukuran ruangan, BTU, kondisi panas, daya listrik, dan kapan perlu naik atau turun kapasitas.",
    h1: "AC 1 PK cocok untuk ruangan berapa?",
    eyebrow: "Panduan PK AC",
    readTime: "6 menit baca",
    intro:
      "AC 1 PK memang populer, tapi jangan langsung beli hanya karena terasa aman di tengah. Salah kapasitas bisa membuat ruangan lama dingin, listrik terasa berat, dan biaya pembelian jadi kurang efisien.",
    sections: [
      {
        heading: "Jawaban cepat: biasanya sekitar 15–20 m²",
        body: [
          "Dalam kondisi normal, AC 1 PK biasanya masuk akal untuk ruangan sekitar 15–20 m². Contohnya kamar besar, ruang keluarga kecil, ruang kerja, atau ruangan tertutup yang tidak terlalu panas.",
          "Angka ini bukan aturan kaku. Kamar 15 m² yang panas sore bisa berbeda kebutuhannya dengan ruang 18 m² yang teduh dan tertutup.",
        ],
      },
      {
        heading: "Kapan 1 PK terasa kurang?",
        body: [
          "AC 1 PK bisa terasa kurang jika ruangan terlalu luas, banyak kaca, plafon tinggi, terkena matahari langsung, sering terbuka, atau dipakai banyak orang.",
          "Kalau dipaksakan, pembeli sering merasa AC tidak dingin padahal masalahnya bukan merek, melainkan kapasitas yang tidak sesuai.",
        ],
      },
      {
        heading: "Kapan cukup 3/4 PK atau perlu naik kapasitas?",
        body: [
          "Untuk kamar yang lebih kecil dan cukup teduh, 3/4 PK bisa lebih masuk akal daripada langsung memilih 1 PK. Untuk ruangan lebih besar atau panas, 1.5 PK bisa lebih aman dibanding memaksa 1 PK.",
          "Jangan pilih PK kecil hanya karena ingin hemat. PK yang terlalu kecil bisa membuat AC bekerja lama dan berat.",
        ],
      },
      {
        heading: "Cek daya listrik sebelum menentukan unit",
        body: [
          "Selain ukuran ruangan, daya listrik rumah wajib dicek. Untuk rumah dengan daya terbatas, pilihan low watt atau tipe tertentu bisa dipertimbangkan.",
          "Pilihan final sebaiknya tidak hanya dari PK, tapi juga dari tipe AC, pola pemakaian, dan kesiapan listrik.",
        ],
      },
    ],
    ctaLabel: "Cek PK AC via WhatsApp",
    waIntent: "konsultasi AC 1 PK dan kebutuhan PK ruangan",
    relatedLinks: [
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC 1/2 PK", routes.katalogAcSetengahPk],
      ["Kontak RADJA AC", routes.kontak],
    ],
  },
  {
    slug: "ac-inverter-vs-low-watt",
    path: routes.artikelAcInverterVsLowWatt,
    title: "AC Inverter vs Low Watt | Mana yang Cocok untuk Rumah?",
    description:
      "Bingung pilih AC inverter atau low watt? Pahami beda fungsi, cocok untuk siapa, risiko salah pilih, dan kapan sebaiknya cek PK dulu sebelum beli.",
    h1: "AC inverter vs low watt: mana yang lebih cocok?",
    eyebrow: "Panduan Tipe AC",
    readTime: "7 menit baca",
    intro:
      "AC inverter dan low watt sama-sama sering disebut hemat listrik, tapi fungsinya tidak sama. Pilihan terbaik harus dilihat dari daya listrik, durasi pemakaian, ukuran ruangan, dan budget.",
    sections: [
      {
        heading: "Jangan pilih AC hanya dari klaim hemat",
        body: [
          "Label hemat listrik memang menarik, tapi tidak cukup untuk menentukan AC yang tepat. Low watt fokus membantu tarikan daya lebih ringan, sedangkan inverter fokus menjaga kerja kompresor lebih stabil untuk pemakaian rutin.",
          "Kalau ruangan terlalu besar, panas, atau kapasitas PK kurang, AC tetap bisa bekerja berat. Jadi sebelum membahas merek dan harga, cek dulu ukuran ruangan, daya listrik, dan pola pemakaian harian.",
        ],
      },
      {
        heading: "Pilih low watt kalau daya listrik terbatas",
        body: [
          "AC low watt cocok dipertimbangkan untuk rumah, kost, atau kontrakan dengan daya listrik terbatas. Fokusnya adalah membuat tarikan daya lebih ringan sehingga risiko listrik turun bisa lebih terkendali.",
          "Namun low watt bukan berarti otomatis paling dingin atau paling hemat bulanan. Jika PK terlalu kecil untuk ruangan, AC bisa lama dingin dan bekerja lebih berat.",
        ],
      },
      {
        heading: "Pilih inverter kalau AC sering dipakai lama",
        body: [
          "AC inverter lebih cocok untuk kamar tidur, ruang keluarga, atau ruang kerja yang dipakai berjam-jam. Saat suhu mendekati target, kerja kompresor bisa menyesuaikan sehingga suhu ruangan terasa lebih stabil.",
          "Manfaat inverter paling terasa untuk pemakaian rutin. Kalau AC hanya dinyalakan sebentar-sebentar, selisih manfaatnya bisa tidak sebesar yang dibayangkan.",
        ],
      },
      {
        heading: "AC standard tetap masuk akal untuk kondisi tertentu",
        body: [
          "Tidak semua pembeli harus mengambil inverter atau low watt. AC standard masih bisa masuk akal untuk pemakaian sederhana, budget awal lebih ketat, dan ruangan yang tidak terlalu berat.",
          "Yang penting jangan asal ambil standard hanya karena harga awal lebih ringan. Pastikan kapasitas PK, paket pemasangan, dan daya listrik tetap sesuai.",
        ],
      },
    ],
    ctaLabel: "Cek Pilihan Inverter / Low Watt",
    waIntent: "konsultasi memilih AC inverter low watt atau standard",
    relatedLinks: [
      ["AC Inverter", routes.katalogAcInverter],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Kontak RADJA AC", routes.kontak],
    ],
  },
];

export function getArticleItem(slug) {
  return articleItems.find((item) => item.slug === slug);
}
