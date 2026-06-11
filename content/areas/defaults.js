import { routes } from "@/content/routes";

export const defaultBuyingChecks = [
  "Ukuran ruangan, tinggi plafon, dan kondisi panas matahari",
  "Daya listrik dan kebutuhan standard, low watt, atau inverter",
  "Jumlah unit, preferensi brand, dan target anggaran",
  "Alamat pengiriman serta kebutuhan unit saja atau opsi pemasangan",
];

export const defaultRelatedLinks = [
  ["Katalog AC", routes.katalog],
  ["Kalkulator PK AC", routes.kalkulatorPkAc],
  ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
  ["AC Split Rumah", routes.katalogAcSplitRumah],
  ["AC Low Watt", routes.katalogAcLowWatt],
  ["AC Inverter", routes.katalogAcInverter],
  ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
  ["Kontak Radja AC", routes.kontak],
];
