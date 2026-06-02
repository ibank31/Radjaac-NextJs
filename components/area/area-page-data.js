import { routes } from "@/content/routes";

export const brandLinks = [
  ["Daikin", routes.brandDaikin],
  ["Gree", routes.brandGree],
  ["Midea", routes.brandMidea],
  ["Hisense", routes.brandHisense],
  ["Sharp", routes.brandSharp],
  ["Brand Lainnya", routes.brandLainnya],
];

export const categoryLinks = [
  ["AC Split Rumah", routes.katalogAcSplitRumah, "Untuk kamar, ruang keluarga, kost, kontrakan, dan toko kecil."],
  ["AC Inverter", routes.katalogAcInverter, "Untuk pemakaian lama dan suhu lebih stabil."],
  ["AC Low Watt", routes.katalogAcLowWatt, "Untuk rumah dengan daya listrik terbatas."],
  ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Untuk ruko, cafe, kantor, showroom, gedung, dan proyek."],
];

export const pricePackages = [
  ["Hemat", "Mulai 3 jutaan", "Untuk kamar kecil, kost, atau ruangan sederhana."],
  ["Populer", "3–4 jutaan", "Untuk rumah, toko kecil, dan pemakaian harian normal."],
  ["Inverter / Premium", "Mulai 4 jutaan", "Untuk pemakaian panjang atau ruangan lebih besar."],
];

export const packageIncludes = [
  "Unit AC + instalasi standar",
  "Pipa 2 meter",
  "Kabel 5 meter",
  "Bracket 1 set",
  "Duct tape",
  "Selang pembuangan",
  "Vacuum AC",
];

export const proofImages = [
  ["Showroom", "/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp", "Showroom RADJA AC"],
  ["Gudang Stok", "/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp", "Gudang stok AC RADJA AC"],
  ["Pengiriman", "/photos/delivery/radja-ac-persiapan-pengiriman.webp", "Persiapan pengiriman AC RADJA AC"],
  ["Material", "/photos/installation/material-instalasi-ac-radja-ac-01.webp", "Material instalasi AC RADJA AC"],
];

export const primaryLinks = [
  ["Katalog AC", routes.katalog],
  ["Kalkulator PK AC", routes.kalkulatorPkAc],
  ["AC Gree", routes.brandGree],
  ["AC Daikin", routes.brandDaikin],
  ["Pengadaan AC", routes.pengadaanAc],
  ["Bukti Pengiriman", routes.buktiPengirimanProyek],
  ["Kontak", routes.kontak],
];

export const areaPageLinkOverrides = {
  "jual-ac-banyumas": [
    ["Katalog AC", routes.katalog],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC Split Rumah", routes.katalogAcSplitRumah],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Gree", routes.brandGree],
    ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
    ["Kontak RADJA AC", routes.kontak],
  ],
  "jual-ac-purbalingga": [
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC Split Rumah", routes.katalogAcSplitRumah],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Inverter", routes.katalogAcInverter],
    ["AC Gree", routes.brandGree],
    ["AC Midea", routes.brandMidea],
    ["Kontak RADJA AC", routes.kontak],
  ],
  "jual-ac-kebumen": [
    ["Katalog AC", routes.katalog],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC Split Rumah", routes.katalogAcSplitRumah],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Daikin", routes.brandDaikin],
    ["AC Gree", routes.brandGree],
    ["Kontak RADJA AC", routes.kontak],
  ],
  "jual-ac-banjarnegara": [
    ["Katalog AC", routes.katalog],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Split Rumah", routes.katalogAcSplitRumah],
    ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
    ["Pengadaan AC", routes.pengadaanAc],
    ["Kontak RADJA AC", routes.kontak],
  ],
};
