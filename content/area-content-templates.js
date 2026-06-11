// Cluster-based content templates for area pages.
//
// These templates act ONLY as a base layer. Area-specific data in
// content/areas/* (localContext, localBenefits, localCases, localLandmarks)
// always takes priority via resolveAreaContent() below.
//
// Each template is keyed by clusterType and exposes area-aware builders:
//   - clusterContext(area)    -> string
//   - clusterBenefits(area)   -> string[]
//   - clusterCases(area)      -> [title, detail][]
//   - clusterBuyerGuide(area) -> { title, intro, points: [heading, detail][] }
//   - clusterFaq(area)        -> [question, answer][]
//
// Content is informational (AC-selection guidance), not marketing copy, and
// contains no price/Product/Offer claims.

export const areaContentTemplates = {
  hospitality: {
    label: "Hospitality & Wisata",
    clusterContext: (area) =>
      `Sebagai kawasan wisata dan hospitality, kebutuhan AC di ${area} banyak datang dari penginapan, resto, dan ruang tamu yang okupansinya naik-turun mengikuti musim kunjungan. Fokusnya adalah kenyamanan kamar tamu dan ruang usaha pada jam ramai, bukan mendinginkan seluruh bangunan sekaligus.`,
    clusterBenefits: (area) => [
      `Kapasitas PK dihitung per kamar dan ruang tamu agar dingin merata saat ${area} ramai pengunjung`,
      "Pilihan inverter membantu penginapan yang AC-nya menyala lama pada malam hari",
      "Skema banyak unit dengan kapasitas seragam memudahkan perawatan kamar penginapan",
    ],
    clusterCases: (area) => [
      ["Penginapan, homestay & villa", `Pemilihan AC kamar tamu untuk penginapan di ${area} dengan kapasitas seragam dan perawatan yang mudah.`],
      ["Resto & kafe wisata", "AC ruang pelanggan untuk menjaga kenyamanan saat jam ramai akhir pekan."],
      ["Ruang acara & serbaguna", "Pendinginan aula atau ruang pertemuan menyesuaikan jumlah pengunjung."],
    ],
    clusterBuyerGuide: (area) => ({
      title: `Panduan memilih AC untuk usaha wisata & penginapan di ${area}`,
      intro: `Untuk penginapan dan resto di ${area}, pertimbangkan beban tamu, jam pemakaian, dan kemudahan perawatan sebelum menentukan unit.`,
      points: [
        ["Hitung kebutuhan per ruang", "Kamar tamu, ruang makan, dan lobby punya beban panas berbeda sehingga PK ditentukan terpisah."],
        ["Pilih unit yang mudah dirawat", "Penginapan dengan banyak kamar lebih praktis memakai unit dengan tipe dan kapasitas seragam."],
        ["Rencanakan pemasangan bertahap", "Untuk renovasi atau tambah kamar, unit bisa disiapkan bertahap mengikuti okupansi."],
      ],
    }),
    clusterFaq: (area) => [
      [
        `Untuk kamar penginapan di ${area}, sebaiknya AC inverter atau standar?`,
        "Tergantung lama pemakaian. Kamar yang AC-nya menyala lama tiap malam biasanya lebih efisien dengan inverter; kamar yang dipakai sesekali bisa unit standar. Kirim jumlah kamar dan pola pemakaian agar tim bantu cek.",
      ],
      [
        `Berapa PK untuk resto atau kafe wisata di ${area}?`,
        "Ditentukan dari luas ruang, tinggi plafon, jumlah kursi, dan beban panas dapur atau jendela. Kirim ukuran ruangan dan kapasitas pengunjung untuk perkiraan PK.",
      ],
      [
        `Bisa pengadaan banyak unit kamar penginapan di ${area}?`,
        "Bisa. Kirim jumlah kamar, ukuran tiap kamar, daya listrik, dan target waktu agar tim menyusun pilihan unit seragam, stok, pengiriman, dan opsi pemasangan.",
      ],
    ],
  },

  education: {
    label: "Kos & Pendidikan",
    clusterContext: (area) =>
      `${area} berkarakter kawasan hunian dan kampus dengan banyak kos, kontrakan, dan rumah sewa. Kebutuhan AC umumnya berupa banyak kamar berukuran kecil dengan daya listrik terbatas, sehingga efisiensi daya dan kemudahan menambah unit menjadi pertimbangan utama.`,
    clusterBenefits: (area) => [
      "Pilihan low watt membantu kamar kos dan kontrakan dengan daya listrik terbatas",
      `Skema banyak unit memudahkan pemilik kos di ${area} menyiapkan AC per kamar secara bertahap`,
      "Unit hemat dengan perawatan mudah cocok untuk kamar sewa yang sering berganti penghuni",
    ],
    clusterCases: (area) => [
      ["Kos & rumah sewa", `Pemilihan AC hemat daya untuk banyak kamar kecil di ${area} dengan kapasitas yang seragam.`],
      ["Rumah tinggal & keluarga", "AC kamar tidur dan ruang keluarga sesuai ukuran dan pola pemakaian harian."],
      ["Ruang belajar, kantor kecil & usaha", "AC ruang kerja, tempat les, atau usaha dekat kawasan kampus."],
    ],
    clusterBuyerGuide: (area) => ({
      title: `Panduan memilih AC untuk kos & hunian di ${area}`,
      intro: `Untuk kos dan rumah sewa di ${area}, daya listrik total dan jumlah unit jadi penentu utama sebelum memilih AC.`,
      points: [
        ["Cek daya listrik bangunan", "Untuk banyak kamar, total daya menentukan apakah perlu unit low watt agar listrik tidak turun."],
        ["Samakan tipe antar kamar", "Kapasitas dan tipe seragam memudahkan perawatan dan penggantian sparepart."],
        ["Jadwalkan pemasangan banyak unit", "Pemasangan beberapa kamar sekaligus bisa disusun agar rapi dan tidak mengganggu penghuni."],
      ],
    }),
    clusterFaq: (area) => [
      [
        `AC low watt cocok untuk kos di ${area} dengan listrik 900–1300 watt?`,
        "Sering kali cocok, tapi tetap dihitung dari jumlah unit yang menyala bersamaan dan daya total bangunan. Kirim jumlah kamar dan daya listrik agar tim bantu cek kecocokannya.",
      ],
      [
        `Bisa pasang AC beberapa kamar kos sekaligus di ${area}?`,
        "Bisa. Kirim jumlah kamar, ukuran tiap kamar, dan daya listrik agar tim menyiapkan unit, stok, jadwal, dan opsi pemasangan banyak unit.",
      ],
      [
        `Berapa PK untuk kamar kos ukuran kecil di ${area}?`,
        "Kamar kecil umumnya cukup unit kapasitas kecil, tetapi tetap mempertimbangkan tinggi plafon dan paparan panas. Kirim ukuran kamar untuk perkiraan.",
      ],
    ],
  },

  residential: {
    label: "Residential",
    clusterContext: (area) =>
      `${area} didominasi rumah tinggal dan perumahan, sehingga kebutuhan AC berfokus pada kamar tidur dan ruang keluarga dengan pemasangan yang rapi. Pemilihan unit dibaca dari ukuran ruangan, daya listrik, dan pola pemakaian harian keluarga.`,
    clusterBenefits: (area) => [
      "Kapasitas PK dicocokkan dengan ukuran kamar dan ruang keluarga agar tidak boros",
      "Pilihan inverter membantu efisiensi untuk pemakaian harian rumah keluarga",
      `Pemasangan rapi dengan jalur pipa yang ditata sesuai kondisi rumah di ${area}`,
    ],
    clusterCases: (area) => [
      ["Kamar utama & ruang keluarga", `Pemilihan AC rumah di ${area} sesuai ukuran ruangan dengan pemasangan pipa yang rapi.`],
      ["Rumah baru / perumahan", "Penataan titik indoor-outdoor sejak awal agar instalasi bersih."],
      ["Tambah unit bertahap", "Penambahan AC per kamar mengikuti kebutuhan dan anggaran keluarga."],
    ],
    clusterBuyerGuide: (area) => ({
      title: `Panduan memilih AC rumah di ${area}`,
      intro: `Untuk rumah di ${area}, mulai dari ukuran ruangan, daya listrik, dan posisi pemasangan agar unit sesuai dan instalasi rapi.`,
      points: [
        ["Ukur ruangan & beban panas", "Luas, tinggi plafon, jumlah penghuni, dan arah matahari menentukan PK yang pas."],
        ["Sesuaikan dengan daya listrik", "Pilihan standard, low watt, atau inverter mengikuti daya rumah dan jam pemakaian."],
        ["Rencanakan jalur pipa", "Posisi indoor-outdoor dan panjang pipa dibahas agar pemasangan rapi dan aman."],
      ],
    }),
    clusterFaq: (area) => [
      [
        `Berapa PK AC untuk kamar di ${area}?`,
        "Kamar kecil sampai sedang umumnya 1/2–1 PK, tetapi tetap dihitung dari luas, tinggi plafon, dan paparan panas. Kirim ukuran ruangan untuk perkiraan.",
      ],
      [
        `Lebih baik low watt atau inverter untuk rumah di ${area}?`,
        "Low watt menolong saat daya listrik terbatas; inverter lebih efisien untuk pemakaian lama. Pilihan disesuaikan daya rumah dan pola pemakaian.",
      ],
      [
        `Bisa pasang AC rumah dengan jalur pipa rapi di ${area}?`,
        "Bisa. Kirim foto titik indoor dan outdoor serta perkiraan jarak agar tim memperkirakan jalur pipa dan kebutuhan material.",
      ],
    ],
  },

  trade: {
    label: "Perdagangan & Transit",
    clusterContext: (area) =>
      `${area} merupakan kawasan perdagangan dan jalur ramai dengan banyak toko, ruko, dan usaha tepi jalan. Kebutuhan AC berfokus pada kenyamanan ruang pelanggan dengan jam buka panjang, sehingga ketahanan pemakaian dan perawatan filter jadi pertimbangan.`,
    clusterBenefits: (area) => [
      `Kapasitas dipilih untuk ruang pelanggan yang ramai dan sering buka-tutup pintu di ${area}`,
      "Unit dipertimbangkan untuk pemakaian jam panjang usaha harian",
      "Perawatan filter diperhatikan karena debu jalur ramai mempercepat unit kotor",
    ],
    clusterCases: (area) => [
      ["Toko & ruko", `AC ruang pelanggan toko dan ruko di ${area} dengan kapasitas menyesuaikan luas dan lalu lalang.`],
      ["Warung, resto & usaha tepi jalan", "Pendinginan area makan atau pelanggan untuk jam buka panjang."],
      ["Kantor kecil & klinik", "AC ruang layanan dengan suhu stabil sepanjang jam operasional."],
    ],
    clusterBuyerGuide: (area) => ({
      title: `Panduan memilih AC untuk toko & usaha di ${area}`,
      intro: `Untuk toko dan ruko di ${area}, perhatikan luas, jumlah orang, dan jam buka sebelum menentukan kapasitas AC.`,
      points: [
        ["Hitung beban ruang usaha", "Luas, jumlah pengunjung, pintu yang sering terbuka, dan panas etalase menentukan PK."],
        ["Pilih unit untuk pemakaian panjang", "Usaha dengan jam buka lama membutuhkan unit yang nyaman dipakai seharian."],
        ["Siapkan perawatan rutin", "Di jalur ramai berdebu, pembersihan filter berkala menjaga performa dan hemat listrik."],
      ],
    }),
    clusterFaq: (area) => [
      [
        `Berapa PK AC untuk toko atau ruko di ${area}?`,
        "Ditentukan dari luas, tinggi plafon, jumlah pengunjung, dan pintu yang sering terbuka. Kirim ukuran ruang usaha untuk perkiraan PK.",
      ],
      [
        `Apakah AC kuat dipakai buka seharian di ${area}?`,
        "Bisa, asalkan kapasitas sesuai beban ruangan dan perawatan filter rutin. Unit yang kekecilan justru cepat aus karena bekerja terus.",
      ],
      [
        `Seberapa sering bersihkan filter AC usaha di jalur ramai ${area}?`,
        "Di area berdebu, pembersihan lebih sering membantu. Tim bisa bantu arahkan jadwal perawatan sesuai kondisi lokasi.",
      ],
    ],
  },

  industrial: {
    label: "Industri & Pengadaan",
    clusterContext: (area) =>
      `${area} berkarakter kawasan industri dan kebutuhan pengadaan, dengan permintaan AC untuk kantor, ruang kerja, mess, serta proyek banyak unit. Fokusnya pada kapasitas yang konsisten, kelengkapan dokumentasi kebutuhan, dan jadwal pemasangan bertahap.`,
    clusterBenefits: (area) => [
      `Skema pengadaan banyak unit dengan spesifikasi seragam untuk kantor dan proyek di ${area}`,
      "Dokumentasi kebutuhan dan estimasi memudahkan pengajuan internal perusahaan",
      "Pertimbangan kondisi lingkungan industri atau pesisir saat memilih unit dan penempatan",
    ],
    clusterCases: (area) => [
      ["Kantor & ruang kerja", `AC ruang kerja dan kantor di ${area} dengan kapasitas dihitung dari luas dan jumlah staf.`],
      ["Pengadaan proyek banyak unit", "Penyediaan unit dengan spesifikasi seragam, stok, dan jadwal bertahap."],
      ["Mess & ruang penunjang", "AC mess atau ruang istirahat pekerja sesuai jumlah penghuni."],
    ],
    clusterBuyerGuide: (area) => ({
      title: `Panduan pengadaan AC kantor & proyek di ${area}`,
      intro: `Untuk pengadaan di ${area}, mulai dari rekap jumlah ruang, kapasitas per ruang, dan target waktu agar penyediaan unit rapi.`,
      points: [
        ["Rekap kebutuhan per ruang", "Daftar ruang, luas, dan fungsi membantu menyusun kapasitas dan jumlah unit."],
        ["Samakan spesifikasi unit", "Spesifikasi seragam memudahkan perawatan, sparepart, dan administrasi proyek."],
        ["Susun jadwal & after-sales", "Pemasangan bertahap dan dukungan purna jual disepakati sejak awal pengadaan."],
      ],
    }),
    clusterFaq: (area) => [
      [
        `Bisa pengadaan AC banyak unit untuk kantor atau proyek di ${area}?`,
        "Bisa. Kirim rekap jumlah ruang, luas, daya listrik, dan target waktu agar tim menyusun pilihan unit seragam, stok, pengiriman, dan opsi pemasangan.",
      ],
      [
        `Apakah bisa minta spesifikasi seragam untuk semua unit di ${area}?`,
        "Bisa. Spesifikasi seragam justru disarankan untuk proyek agar perawatan dan sparepart lebih mudah. Tim bantu cek ketersediaan stok.",
      ],
      [
        `Bagaimana jadwal pemasangan proyek banyak unit di ${area}?`,
        "Disusun bertahap mengikuti kesiapan lokasi dan stok. Kirim target waktu agar tim menyiapkan urutan pengiriman dan pemasangan.",
      ],
    ],
  },

  urban: {
    label: "Kota Besar & Hospitality Urban",
    clusterContext: (area) =>
      `${area} adalah kota besar dengan kebutuhan AC beragam mulai dari kantor, retail, hotel, apartemen, hingga rumah dan kos. Beban panas perkotaan tinggi, sehingga pemilihan kapasitas dan efisiensi untuk ruang publik dengan pemakaian panjang menjadi penting.`,
    clusterBenefits: (area) => [
      `Kapasitas untuk ruang publik kantor dan retail di ${area} yang pemakaiannya panjang`,
      "Pilihan inverter membantu efisiensi untuk pemakaian seharian",
      "Opsi banyak unit untuk hotel, apartemen, dan area komersial",
    ],
    clusterCases: (area) => [
      ["Kantor & retail", `AC ruang kerja dan area pelanggan di ${area} dengan kapasitas dihitung dari luas dan jumlah orang.`],
      ["Hotel & apartemen", "Penyediaan unit kamar dengan kapasitas seragam dan pemakaian harian."],
      ["Rumah & kos kota", "AC hunian kota dengan pilihan efisien sesuai daya dan pola pemakaian."],
    ],
    clusterBuyerGuide: (area) => ({
      title: `Panduan memilih AC untuk usaha & hunian kota di ${area}`,
      intro: `Untuk kantor, retail, dan hospitality di ${area}, perhatikan beban ruang publik dan efisiensi pemakaian panjang.`,
      points: [
        ["Hitung beban ruang publik", "Area pelanggan dan kantor dengan banyak orang butuh kapasitas yang memadai."],
        ["Utamakan efisiensi", "Untuk pemakaian seharian, unit efisien menekan biaya listrik jangka panjang."],
        ["Rencanakan banyak unit", "Hotel dan apartemen lebih rapi dengan unit seragam dan jadwal bertahap."],
      ],
    }),
    clusterFaq: (area) => [
      [
        `Berapa PK AC untuk kantor atau retail di ${area}?`,
        "Ditentukan dari luas, tinggi plafon, jumlah orang, dan beban panas jendela atau perangkat. Kirim ukuran ruang untuk perkiraan kapasitas.",
      ],
      [
        `Bisa pengadaan unit untuk hotel atau apartemen di ${area}?`,
        "Bisa. Kirim jumlah kamar atau ruang, ukuran, dan target waktu agar tim menyiapkan unit seragam, stok, dan jadwal pemasangan.",
      ],
      [
        `Unit apa yang efisien untuk pemakaian panjang di ${area}?`,
        "Untuk pemakaian seharian, inverter umumnya lebih hemat. Pilihan tetap disesuaikan beban ruang dan anggaran.",
      ],
    ],
  },
};

export function getAreaContentTemplate(clusterType) {
  return areaContentTemplates[clusterType] ?? null;
}

// Merge area-specific data (priority) with the cluster template (base).
export function resolveAreaContent(item) {
  const template = getAreaContentTemplate(item?.clusterType);
  const area = item?.areaName ?? "";

  const benefits = item?.localBenefits?.length
    ? item.localBenefits
    : template?.clusterBenefits?.(area) ?? [];
  const cases = item?.localCases?.length
    ? item.localCases
    : template?.clusterCases?.(area) ?? [];

  return {
    clusterType: item?.clusterType ?? null,
    clusterLabel: template?.label ?? null,
    localContext: item?.localContext ?? template?.clusterContext?.(area) ?? null,
    benefits,
    cases,
    landmarks: item?.localLandmarks ?? [],
    buyerGuide: template?.clusterBuyerGuide?.(area) ?? null,
    clusterFaq: template?.clusterFaq?.(area) ?? [],
  };
}
