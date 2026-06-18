import { routes } from "@/content/routes";

export const acKantorKecilInverterAtauLowWatt = {
  slug: "ac-kantor-kecil-inverter-atau-low-watt",
  path: routes.artikelAcKantorKecilInverterAtauLowWatt,
  cluster: "comparison",
  role: "supporting",
  intent: "commercial",
  parentSlug: "ac-inverter-vs-low-watt",
  updatedAt: "2026-06-15",
  moneyLinks: [
    ["AC Inverter", routes.katalogAcInverter, "Pilihan AC inverter untuk kantor dengan pemakaian rutin."],
    ["AC Low Watt", routes.katalogAcLowWatt, "Pilihan AC low watt untuk kantor dengan daya terbatas."],
    ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Pilihan AC untuk berbagai kebutuhan kantor."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung kebutuhan PK untuk ruang kantor Anda."],
  ],
  title: "AC untuk Kantor Kecil: Inverter atau Low Watt? — Radja AC",
  description:
    "Bingung pilih AC inverter atau low watt untuk kantor kecil? Pahami perbedaannya dan mana yang lebih cocok berdasarkan jam operasional dan daya listrik.",
  h1: "AC untuk kantor kecil: inverter atau low watt?",
  eyebrow: "Panduan AC Kantor",
  readTime: "6 menit baca",
  intro:
    "Kantor kecil punya kebutuhan AC yang berbeda dengan rumah. AC menyala lebih lama (8-10 jam sehari), ada beban panas dari komputer dan peralatan, dan kenyamanan karyawan langsung memengaruhi produktivitas. Pilihan antara inverter dan low watt bergantung pada kondisi spesifik kantor Anda.",
  sections: [
    {
      heading: "Karakteristik kebutuhan AC kantor kecil",
      body: [
        "Kantor kecil biasanya beroperasi 8-10 jam sehari, 5-6 hari seminggu. AC menyala hampir sepanjang jam kerja, berbeda dengan kamar tidur yang hanya dipakai malam hari.",
        "Ada juga beban panas tambahan dari komputer, printer, lampu, dan orang-orang yang bekerja. Ruangan 20 m² dengan 4-5 orang dan beberapa komputer butuh pendinginan lebih dari kamar tidur ukuran sama.",
      ],
    },
    {
      heading: "Kapan pilih inverter untuk kantor?",
      body: [
        "Inverter sangat cocok untuk kantor yang AC-nya menyala 8+ jam sehari. Setelah suhu tercapai, kompresor bekerja lebih ringan dan konsumsi listrik lebih efisien. Penghematan terasa signifikan untuk pemakaian rutin.",
        "Inverter juga menjaga suhu lebih stabil, yang penting untuk kenyamanan kerja. Suhu yang naik-turun bisa mengganggu konsentrasi dan membuat karyawan tidak nyaman.",
      ],
    },
    {
      heading: "Kapan pilih low watt untuk kantor?",
      body: [
        "Low watt menjadi pilihan jika daya listrik kantor terbatas. Banyak ruko atau kantor kecil yang berbagi daya dengan unit lain atau punya kapasitas listrik yang tidak besar.",
        "Jika menambah AC berisiko membuat listrik sering turun, low watt adalah solusi yang lebih aman. Fokusnya adalah meringankan tarikan daya, bukan efisiensi pemakaian jangka panjang.",
      ],
    },
    {
      heading: "Pertimbangan kapasitas PK untuk kantor",
      body: [
        "Kantor dengan banyak komputer dan orang butuh PK lebih besar dari perhitungan standar. Ruangan 20 m² yang di rumah cukup 1 PK, di kantor mungkin butuh 1.5 PK.",
        "Jangan memilih PK terlalu kecil hanya karena ingin hemat. AC yang bekerja terlalu keras akan lebih boros listrik dan lebih cepat rusak.",
      ],
    },
    {
      heading: "Rekomendasi berdasarkan kondisi",
      body: [
        "Daya listrik cukup + pemakaian 8+ jam: pilih inverter untuk efisiensi jangka panjang dan kenyamanan suhu yang stabil.",
        "Daya listrik terbatas: pilih low watt untuk menghindari listrik sering turun. Jika memungkinkan, pertimbangkan inverter low watt yang menggabungkan kedua keunggulan.",
      ],
    },
  ],
  faqs: [
    {
      question: "Kantor kecil 4x5 meter dengan 4 orang, butuh AC berapa PK?",
      answer:
        "Ruangan 20 m² dengan 4 orang dan komputer butuh minimal 1.5 PK. Jika ada banyak peralatan atau ruangan panas, pertimbangkan 2 PK.",
    },
    {
      question: "Inverter lebih mahal, apakah worth it untuk kantor kecil?",
      answer:
        "Untuk kantor yang AC-nya menyala 8+ jam sehari, inverter biasanya worth it. Penghematan listrik bulanan bisa menutup selisih harga dalam 1-2 tahun.",
    },
    {
      question: "Kantor di ruko dengan daya terbatas, pilih apa?",
      answer:
        "Pilih low watt untuk menghindari listrik turun. Jika tersedia, inverter low watt adalah pilihan terbaik karena hemat tarikan daya sekaligus efisien untuk pemakaian panjang.",
    },
  ],
  ctaLabel: "Konsultasi AC Kantor Kecil",
  waIntent: "konsultasi memilih AC inverter atau low watt untuk kantor kecil",
  relatedLinks: [
    ["AC Inverter", routes.katalogAcInverter],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Inverter vs Low Watt", routes.artikelAcInverterVsLowWatt],
    ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
    ["Kontak Radja AC", routes.kontak],
  ],
};
