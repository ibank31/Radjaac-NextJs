import { panduanBeliAcBaru } from "@/content/articles/panduan-beli-ac-baru";
import { sharpBeyPurwokerto } from "@/content/articles/sharp-bey-purwokerto";
import { ac1PkUntukRuanganBerapa } from "@/content/articles/ac-1-pk-untuk-ruangan-berapa";
import { acInverterVsLowWatt } from "@/content/articles/ac-inverter-vs-low-watt";
import { acKurangDinginBelumTentuFreonHabis } from "@/content/articles/ac-kurang-dingin-belum-tentu-freon-habis";
import { panduanInstalasiAcBaru } from "@/content/articles/panduan-instalasi-ac-baru";
import { caraMemilihAcUntukKamar3x4 } from "@/content/articles/cara-memilih-ac-untuk-kamar-3x4";
import { acBagusMerkApa } from "@/content/articles/ac-bagus-merk-apa";
import { acPalingHematListrik } from "@/content/articles/ac-paling-hemat-listrik";
import { rekomendasiAcKamarTidur } from "@/content/articles/rekomendasi-ac-kamar-tidur";
import { acUntukListrik900Watt } from "@/content/articles/ac-untuk-listrik-900-watt";
import { biayaPasangAcBaru } from "@/content/articles/biaya-pasang-ac-baru";
import { pilihanAc12PkTerbaik } from "@/content/articles/pilihan-ac-1-2-pk-terbaik";
import { biayaServisAcVsGantiBaru } from "@/content/articles/biaya-servis-ac-vs-ganti-baru";
import { tandaAcHarusGantiUnit } from "@/content/articles/tanda-ac-harus-ganti-unit";
import { acBorosListrikGantiInverter } from "@/content/articles/ac-boros-listrik-ganti-inverter";
import { greeVsDaikinUntukRumah } from "@/content/articles/gree-vs-daikin-untuk-rumah";
import { mideaVsHisenseBudgetTerbatas } from "@/content/articles/midea-vs-hisense-budget-terbatas";
import { daikinVsPanasonicJangkaPanjang } from "@/content/articles/daikin-vs-panasonic-jangka-panjang";
import { acGreeCocokUntukSiapa } from "@/content/articles/ac-gree-cocok-untuk-siapa";
import { caraMenghitungKebutuhanAcKost } from "@/content/articles/cara-menghitung-kebutuhan-ac-kost";
import { checklistPengadaanAcHotel } from "@/content/articles/checklist-pengadaan-ac-hotel";
import { panduanBoqAcKontraktor } from "@/content/articles/panduan-boq-ac-kontraktor";
import { acUntukTokoDanRukoPilihPkBerapa } from "@/content/articles/ac-untuk-toko-dan-ruko-pilih-pk-berapa";
import { acKantorKecilInverterAtauLowWatt } from "@/content/articles/ac-kantor-kecil-inverter-atau-low-watt";
import { acUntukKosMahasiswaPurwokerto } from "@/content/articles/ac-untuk-kos-mahasiswa-purwokerto";
import { acUntukVillaDanPenginapanBaturraden } from "@/content/articles/ac-untuk-villa-dan-penginapan-baturraden";
import { memilihAcUntukDaerahPesisir } from "@/content/articles/memilih-ac-untuk-daerah-pesisir";

export const articleItems = [
  panduanBeliAcBaru,
  sharpBeyPurwokerto,
  ac1PkUntukRuanganBerapa,
  acInverterVsLowWatt,
  acKurangDinginBelumTentuFreonHabis,
  panduanInstalasiAcBaru,
  caraMemilihAcUntukKamar3x4,
  acBagusMerkApa,
  acPalingHematListrik,
  rekomendasiAcKamarTidur,
  acUntukListrik900Watt,
  biayaPasangAcBaru,
  pilihanAc12PkTerbaik,
  biayaServisAcVsGantiBaru,
  tandaAcHarusGantiUnit,
  acBorosListrikGantiInverter,
  greeVsDaikinUntukRumah,
  mideaVsHisenseBudgetTerbatas,
  daikinVsPanasonicJangkaPanjang,
  acGreeCocokUntukSiapa,
  caraMenghitungKebutuhanAcKost,
  checklistPengadaanAcHotel,
  panduanBoqAcKontraktor,
  acUntukTokoDanRukoPilihPkBerapa,
  acKantorKecilInverterAtauLowWatt,
  acUntukKosMahasiswaPurwokerto,
  acUntukVillaDanPenginapanBaturraden,
  memilihAcUntukDaerahPesisir,
];

export function getArticleItem(slug) {
  return articleItems.find((item) => item.slug === slug);
}
