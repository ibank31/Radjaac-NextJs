import { panduanBeliAcBaru } from "./panduan-beli-ac-baru";
import { sharpBeyPurwokerto } from "./sharp-bey-purwokerto";
import { ac1PkUntukRuanganBerapa } from "./ac-1-pk-untuk-ruangan-berapa";
import { acInverterVsLowWatt } from "./ac-inverter-vs-low-watt";
import { acKurangDinginBelumTentuFreonHabis } from "./ac-kurang-dingin-belum-tentu-freon-habis";
import { panduanInstalasiAcBaru } from "./panduan-instalasi-ac-baru";
import { caraMemilihAcUntukKamar3x4 } from "./cara-memilih-ac-untuk-kamar-3x4";
import { acBagusMerkApa } from "./ac-bagus-merk-apa";
import { acPalingHematListrik } from "./ac-paling-hemat-listrik";
import { rekomendasiAcKamarTidur } from "./rekomendasi-ac-kamar-tidur";
import { acUntukListrik900Watt } from "./ac-untuk-listrik-900-watt";
import { biayaPasangAcBaru } from "./biaya-pasang-ac-baru";
import { pilihanAc12PkTerbaik } from "./pilihan-ac-1-2-pk-terbaik";
import { biayaServisAcVsGantiBaru } from "./biaya-servis-ac-vs-ganti-baru";
import { tandaAcHarusGantiUnit } from "./tanda-ac-harus-ganti-unit";
import { acBorosListrikGantiInverter } from "./ac-boros-listrik-ganti-inverter";
import { greeVsDaikinUntukRumah } from "./gree-vs-daikin-untuk-rumah";
import { mideaVsHisenseBudgetTerbatas } from "./midea-vs-hisense-budget-terbatas";
import { daikinVsPanasonicJangkaPanjang } from "./daikin-vs-panasonic-jangka-panjang";
import { acGreeCocokUntukSiapa } from "./ac-gree-cocok-untuk-siapa";
import { caraMenghitungKebutuhanAcKost } from "./cara-menghitung-kebutuhan-ac-kost";
import { checklistPengadaanAcHotel } from "./checklist-pengadaan-ac-hotel";
import { panduanBoqAcKontraktor } from "./panduan-boq-ac-kontraktor";
import { acUntukTokoDanRukoPilihPkBerapa } from "./ac-untuk-toko-dan-ruko-pilih-pk-berapa";
import { acKantorKecilInverterAtauLowWatt } from "./ac-kantor-kecil-inverter-atau-low-watt";
import { acUntukKosMahasiswaPurwokerto } from "./ac-untuk-kos-mahasiswa-purwokerto";
import { acUntukVillaDanPenginapanBaturraden } from "./ac-untuk-villa-dan-penginapan-baturraden";
import { memilihAcUntukDaerahPesisir } from "./memilih-ac-untuk-daerah-pesisir";

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
