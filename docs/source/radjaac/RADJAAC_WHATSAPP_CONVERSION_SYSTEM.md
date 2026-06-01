# Current Repo Status Note

Status terbaru repo mengungguli detail lama di dokumen ini.

Implementasi aktif saat ini:
- Repo memakai gtag langsung, bukan GTM container.
- Event aktif: `whatsapp_click`.
- Event lead utama: `generate_lead`.
- `components/ui/WhatsappLink.jsx` mengirim event langsung dan memakai `data-wa-direct="true"` untuk mencegah double count dari listener global.
- `components/analytics/GoogleAnalytics.jsx` tetap menjadi fallback global listener untuk link WhatsApp biasa.
- Jangan memakai `purchase` sebagai patokan klik WhatsApp.
- Istilah lama seperti `wa_click`, `wa_click_sticky`, dan `wa_click_after_calc` hanya dianggap referensi historis, bukan standar aktif.

Gunakan `docs/RADJA_WORKFLOW.md` sebagai pegangan operasional terbaru.

# RADJAAC_WHATSAPP_CONVERSION_SYSTEM.md

## RADJAAC WhatsApp Conversion System

File: `RADJAAC_WHATSAPP_CONVERSION_SYSTEM.md`

### Status

Needs monthly refresh

### Fungsi Dokumen

Dokumen ini menetapkan standar CTA WhatsApp, prefilled message, data kualifikasi lead, dan tracking GA4/gtag agar semua page type di RADJA AC mendorong user ke chat yang lebih jelas maksudnya. Google Analytics mendukung custom event dan custom parameter melalui Google tag; GTM hanya dianggap referensi umum/historis karena repo aktif memakai gtag langsung. Parameter baru menjadi benar-benar reportable setelah didaftarkan sebagai custom dimension atau metric. Untuk traffic acquisition, Google juga tetap menggunakan standar UTM pada URL campaign masuk. citeturn28view0turn28view2turn28view1

### Prinsip Utama

- Gunakan **satu primary WhatsApp pathway** sitewide, kecuali owner punya keputusan resmi lain.
- CTA harus menyebut **aksi dan konteks**, bukan sekadar “Hubungi Kami”.
- Prefilled message harus meminta data yang cukup untuk mengkualifikasi lead, tetapi tidak terlalu panjang.
- `wa_source` dan `wa_label` sebaiknya ditangkap sebagai **event parameters** di GA4/gtag, bukan dibebankan ke user.
- Artikel edukasi harus menjadi feeder ke money page atau konsultasi, bukan membuat user berputar-putar.

### Tabel Keputusan

| Page Type | CTA Button | Microcopy | Data yang Diminta | Prefilled Message | `wa_source` | `wa_label` |
|---|---|---|---|---|---|---|
| Homepage | **Chat Admin RADJA AC** | “Kirim kebutuhan ruangan, kota, dan daya listrik. Admin bantu arahkan brand dan tipe awal.” | kota, ukuran ruangan, daya listrik, budget, unit saja/pasang | “Halo RADJA AC, saya mau konsultasi AC. Lokasi saya di [kota], ukuran ruangan [x], listrik [daya], butuh [unit saja/pasang]. Mohon arahan tipe yang cocok.” | `home` | `hero_primary` |
| Area page | **Chat untuk Area [Kota]** | “Tulis kota, jenis bangunan, dan kebutuhan unit/pasang agar admin bisa arahkan lebih cepat.” | kota target, jenis bangunan, ukuran ruangan, daya listrik, unit saja/pasang | “Halo RADJA AC, saya dari [kota]. Mau konsultasi AC untuk [rumah/kost/toko/kantor]. Ukuran ruangan [x], listrik [daya], kebutuhan [unit saja/pasang].” | `area_[kota]` | `hero_area` |
| Brand page | **Cek Stok [Brand] via WhatsApp** | “Kirim ukuran ruangan, kota, dan brand yang diminati.” | brand, kota, ukuran ruangan, daya listrik, budget | “Halo RADJA AC, saya mau tanya AC [brand]. Lokasi [kota], ukuran ruangan [x], listrik [daya], budget [range]. Bisa bantu cek stok?” | `brand_[brand]` | `brand_stock_check` |
| Brand lainnya page | **Tanya Brand Lain yang Ready** | “Sebut brand incaran atau kebutuhan ruangan.” | brand incaran, ukuran ruangan, kota, budget | “Halo RADJA AC, saya cari brand AC selain brand utama. Lokasi [kota], ukuran ruangan [x], budget [range]. Ada rekomendasi yang ready?” | `brand_other` | `brand_other_consult` |
| Katalog hub | **Minta Rekomendasi AC** | “Kirim ukuran ruangan dan daya listrik, nanti admin bantu pilih kategori yang cocok.” | ukuran ruangan, daya listrik, kota, budget | “Halo RADJA AC, saya mau minta rekomendasi AC. Ukuran ruangan [x], listrik [daya], lokasi [kota], budget [range].” | `cat_hub` | `hero_catalog` |
| Katalog AC 1/2 PK | **Tanya AC 1/2 PK yang Cocok** | “Cocok untuk ruang kecil, tapi admin perlu cek ukuran dan listrik dulu.” | ukuran ruangan, daya listrik, kota, unit/pasang | “Halo RADJA AC, saya mau tanya AC 1/2 PK. Ruangan saya [x], listrik [daya], lokasi [kota], butuh [unit saja/pasang].” | `cat_1_2pk` | `capacity_consult` |
| Katalog AC Low Watt | **Tanya AC Low Watt** | “Kirim daya listrik rumah dan ukuran ruangan.” | daya listrik, ukuran ruangan, MCB bila tahu, kota | “Halo RADJA AC, saya cari AC low watt. Listrik rumah [daya], MCB [jika tahu], ukuran ruangan [x], lokasi [kota]. Mohon rekomendasi.” | `cat_lowwatt` | `lowwatt_primary` |
| Katalog AC Inverter | **Tanya AC Inverter** | “Sebut jam pemakaian harian, ukuran ruangan, dan listrik rumah.” | jam pakai, ukuran ruangan, daya listrik, budget, kota | “Halo RADJA AC, saya mau konsultasi AC inverter. Pemakaian sekitar [jam/hari], ukuran ruangan [x], listrik [daya], lokasi [kota].” | `cat_inverter` | `inverter_primary` |
| Katalog AC Split Rumah | **Tanya AC untuk Rumah** | “Cocok untuk kamar, ruang keluarga, dan rumah harian.” | jenis ruangan, ukuran, listrik, kota, budget | “Halo RADJA AC, saya mau cari AC untuk rumah. Ruangan [jenis], ukuran [x], listrik [daya], lokasi [kota], budget [range].” | `cat_split_home` | `home_split_consult` |
| Katalog AC Kantor/Komersial | **Konsultasi AC Usaha / Kantor** | “Kirim jenis usaha, jumlah ruang, dan kebutuhan unit.” | jenis usaha, jumlah ruang, ukuran kira-kira, kota, unit/pasang | “Halo RADJA AC, saya butuh AC untuk [kantor/toko/cafe/showroom]. Lokasi [kota], kebutuhan [jumlah ruang/unit], mohon arahannya.” | `cat_commercial` | `commercial_consult` |
| B2B hub | **Kirim Kebutuhan Pengadaan AC** | “Untuk proyek atau pembelian banyak unit, kirim brief awal agar admin bisa arahkan cepat.” | lokasi proyek, jenis bangunan, jumlah unit perkiraan, preferensi brand | “Halo RADJA AC, saya butuh pengadaan AC. Lokasi proyek [kota], jenis bangunan [x], perkiraan kebutuhan [jumlah unit], preferensi brand [jika ada].” | `b2b_hub` | `hero_b2b` |
| B2B kontraktor/developer | **Kirim Brief Proyek Kontraktor** | “Lebih cepat diproses jika kirim lokasi, jumlah unit, timeline, dan BOQ/denah.” | lokasi proyek, jumlah unit, timeline, BOQ/denah, brand, budget | “Halo RADJA AC, saya dari [kontraktor/developer]. Lokasi proyek [kota], kebutuhan [jumlah unit], timeline [waktu], brand [opsional]. Saya bisa kirim BOQ/denah.” | `b2b_contractor` | `project_brief` |
| B2B hotel/guest house | **Konsultasi Pengadaan AC Hotel** | “Kirim jumlah kamar/area, lokasi, dan target timeline.” | jumlah kamar/ruang, lokasi proyek, timeline, brand, instalasi/tidak | “Halo RADJA AC, saya mau konsultasi pengadaan AC untuk hotel/guest house. Lokasi [kota], jumlah kamar/area [x], timeline [waktu], kebutuhan [unit saja/instalasi].” | `b2b_hotel` | `hospitality_brief` |
| B2B kost/apartemen | **Tanya Paket Banyak Unit untuk Kost** | “Sebut jumlah kamar, daya listrik umum, dan lokasi.” | jumlah kamar, lokasi, daya listrik, target budget, instalasi/tidak | “Halo RADJA AC, saya mau pengadaan AC untuk kost/apartemen. Lokasi [kota], jumlah kamar [x], daya listrik [jika tahu], budget [range].” | `b2b_kost` | `kost_bulk_brief` |
| Artikel edukasi | **Konsultasi Kebutuhan AC** | “Kalau sudah baca panduan, kirim ukuran ruangan dan kota agar admin bantu finalisasi pilihan.” | ukuran ruangan, kota, daya listrik, topik artikel | “Halo RADJA AC, saya habis baca panduannya dan mau lanjut konsultasi. Topik saya [isi], ukuran ruangan [x], lokasi [kota], listrik [daya].” | `article_[topic]` | `article_cta` |
| Kalkulator PK | **Kirim Hasil Kalkulator ke Admin** | “Kirim hasil estimasi PK dan kebutuhan Anda agar admin bantu cocokkan ke unit yang ready.” | hasil PK, ukuran ruangan, kota, daya listrik, unit/pasang | “Halo RADJA AC, saya sudah cek kalkulator PK. Estimasi saya [hasil], ukuran ruangan [x], listrik [daya], lokasi [kota]. Mohon rekomendasi unit.” | `calc_pk` | `after_result` |
| Kontak | **Chat Admin Sekarang** | “Jika sudah siap order atau ingin tanya stok, kirim kebutuhan singkat Anda.” | kebutuhan singkat, kota, nomor callback opsional | “Halo RADJA AC, saya mau konsultasi/order AC. Lokasi [kota], kebutuhan [isi singkat].” | `contact` | `contact_primary` |
| Gallery / proof | **Tanya Pengiriman & Bukti Proyek** | “Kalau ingin lihat contoh serupa dengan kebutuhan Anda, tulis kota dan jenis proyek.” | kota, jenis proyek, jumlah unit perkiraan | “Halo RADJA AC, saya sudah lihat bukti pengiriman/proyek. Saya butuh untuk [jenis proyek] di [kota], perkiraan kebutuhan [jumlah unit].” | `proof_gallery` | `proof_followup` |

### Aturan untuk Assistant/Codex

- Simpan `wa_source`, `wa_label`, `page_type`, dan `intent_type` sebagai atribut HTML/dataLayer agar gtag dapat mengirimnya sebagai parameter event ke GA4. GA4 memang mendukung custom event parameters, tetapi agar terbaca di report/exploration, param tersebut harus didaftarkan sebagai custom dimensions. citeturn28view0turn28view2
- Gunakan event aktif: `whatsapp_click`, lalu kirim `generate_lead` sebagai event lead utama.
- Param minimum event: `wa_source`, `wa_label`, `page_type`, `intent_type`.
- Param tambahan per context:
  - area: `city_target`
  - brand: `brand_target`
  - katalog: `category_target`
  - B2B: `segment_target`
  - kalkulator: `pk_estimate_band`
- B2B CTA wajib meminta minimal: lokasi proyek, jenis bangunan, jumlah unit kira-kira, timeline.
- Artikel edukasi wajib punya CTA yang mengarah ke konsultasi atau money page terdekat, bukan CTA umum.

### Jangan Dilakukan

- Jangan pakai CTA generik seperti “Hubungi Kami”, “Klik di Sini”, atau “Tanya-Tanya”.
- Jangan arahkan user ke nomor WhatsApp yang berbeda-beda tanpa governance.
- Jangan membuat prefilled message terlalu panjang sampai user malas mengirim.
- Jangan minta semua data di awal untuk retail; cukup data yang paling mempengaruhi rekomendasi.
- Jangan menampilkan CTA sebelum ada konteks trust pada page type berisiko tinggi seperti B2B, area luar kota, dan katalog komersial.
- Jangan jadikan review Google Maps sebagai CTA utama sebelum strategi listing disepakati.

### Contoh Implementasi

**Catatan implementasi aktif:** repo saat ini hanya wajib mengirim `whatsapp_click` dan `generate_lead`. Varian placement seperti sticky atau after-calc adalah opsi masa depan jika memang diimplementasikan di source.

**Standar event GA4/gtag**

| Event Name | Trigger | Parameters | Tujuan |
|---|---|---|---|
| `whatsapp_click` | klik link ke WhatsApp | `wa_source`, `wa_label`, `page_type`, `intent_type`, `city_target`, `brand_target`, `segment_target`, `pk_estimate_band` | Membaca sumber dan niat lead |
| `whatsapp_click_sticky` | klik CTA sticky mobile | semua param di atas + `placement=sticky` | Membandingkan performa sticky CTA |
| `whatsapp_click_after_calc` | klik CTA sesudah kalkulator | semua param di atas + `calc_result` | Menghubungkan kalkulator dengan lead |

**Contoh markup CTA**

```html
<a
  href="https://wa.me/62XXXXXXXXXXX?text=Halo%20RADJA%20AC,%20saya%20mau%20tanya%20AC%20low%20watt.%20Listrik%20rumah%20[saya],%20ukuran%20ruangan%20[x],%20lokasi%20[kota]."
  data-wa_source="cat_lowwatt"
  data-wa_label="hero_primary"
  data-page_type="katalog"
  data-intent_type="low_watt"
>
  Tanya AC Low Watt
</a>
```

Markup seperti ini harus disesuaikan dengan implementasi repo aktif yang mengirim event melalui gtag langsung. citeturn28view0

**Pembacaan kualitas lead**

| Level | Ciri | Tindakan |
|---|---|---|
| High quality | Menyebut ukuran ruangan, daya listrik, kota, budget atau brand; untuk B2B menyebut jumlah unit + lokasi + timeline | Follow-up cepat, prioritaskan |
| Medium quality | Menyebut sebagian data inti saja | Balas dengan template pertanyaan lanjutan |
| Low quality | Hanya “harga berapa” tanpa konteks | Minta data dasar sebelum kasih rekomendasi |

**Mapping query ke CTA intent**

| Query Family | CTA intent yang dipakai | Data minimal |
|---|---|---|
| `jual ac [kota]` | area consultation | kota, jenis bangunan, unit/pasang |
| `ac low watt` | low watt consultation | daya listrik, ukuran ruangan |
| `ac inverter` | inverter consultation | jam pakai, ukuran ruangan, listrik |
| `[brand] ac` | brand stock check | brand, ukuran ruangan, kota |
| `pengadaan ac` | project brief | lokasi proyek, jumlah unit, jenis bangunan |
| `kalkulator pk ac` | after result consultation | hasil kalkulator, ukuran, listrik, kota |
