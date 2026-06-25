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
  [
    "Mulai 3 jutaan",
    "Midea FT/AF, Hisense, Sharp BEY, Sansui, Ariston, TCL",
    "Untuk kamar kecil, kost, kontrakan, toko kecil, dan kebutuhan AC awal. Stok, PK, alamat, dan pemasangan tetap dicek dulu.",
  ],
  [
    "3–4 jutaan",
    "Gree Standard/Low Watt, Daikin STC/STP, Midea Inverter, Panasonic, Samsung",
    "Untuk rumah harian, ruang keluarga kecil, toko, dan pemakaian rutin. Cocok kalau ingin brand lebih kuat atau opsi hemat daya.",
  ],
  [
    "Mulai 4 jutaan",
    "Gree Inverter, Daikin Inverter, dan opsi inverter lebih tinggi",
    "Untuk pemakaian lebih lama, kamar utama, ruang kerja, atau kebutuhan suhu lebih stabil. Tetap perlu cek ukuran ruangan dan daya listrik.",
  ],
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
  ["Showroom", "/photos/proof/showroom-multibrand-radja-ac-purwokerto-01.webp", "Showroom multibrand Radja AC Purwokerto"],
  ["Stok Unit", "/photos/proof/gudang-stok-ac-gree-radja-ac-01.webp", "Gudang stok unit AC Gree Radja AC"],
  ["Display Unit", "/photos/proof/display-ac-gree-low-watt-radja-ac-01.webp", "Display unit AC Gree low watt Radja AC"],
  ["Material", "/photos/proof/material-instalasi-ac-radja-ac-01.webp", "Material instalasi AC Radja AC"],
];

export const primaryLinks = [
  ["Katalog AC", routes.katalog],
  ["Kalkulator PK AC", routes.kalkulatorPkAc],
  ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
  ["AC Gree", routes.brandGree],
  ["AC Daikin", routes.brandDaikin],
  ["Pengadaan AC", routes.pengadaanAc],
  ["Bukti Pengiriman", routes.buktiPengirimanProyek],
  ["Kontak Radja AC", routes.kontak],
];

export const areaPageLinkOverrides = {
  "jual-ac-banyumas": [
    ["Katalog AC", routes.katalog],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
    ["AC Split Rumah", routes.katalogAcSplitRumah],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Gree", routes.brandGree],
    ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
    ["Kontak Radja AC", routes.kontak],
  ],
  "jual-ac-purbalingga": [
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
    ["AC Split Rumah", routes.katalogAcSplitRumah],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Inverter", routes.katalogAcInverter],
    ["AC Gree", routes.brandGree],
    ["AC Midea", routes.brandMidea],
    ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
    ["Kontak Radja AC", routes.kontak],
  ],
  "jual-ac-kebumen": [
    ["Katalog AC", routes.katalog],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
    ["AC Split Rumah", routes.katalogAcSplitRumah],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Daikin", routes.brandDaikin],
    ["AC Gree", routes.brandGree],
    ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
    ["Kontak Radja AC", routes.kontak],
  ],
  "jual-ac-banjarnegara": [
    ["Katalog AC", routes.katalog],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Split Rumah", routes.katalogAcSplitRumah],
    ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
    ["Pengadaan AC", routes.pengadaanAc],
    ["Kontak Radja AC", routes.kontak],
  ],
};
