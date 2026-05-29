# RADJAAC_SITEMAP_INDEXING_PRIORITY.md

## RADJAAC Sitemap Indexing Priority

File: `RADJAAC_SITEMAP_INDEXING_PRIORITY.md`

### Status

Needs monthly refresh

### Fungsi Dokumen

Dokumen ini menentukan URL mana yang **wajib masuk sitemap**, mana yang **hanya masuk jika sudah live dan unik**, serta urutan request indexing yang aman setelah deploy besar, publish halaman baru, atau setelah redirect. Google merekomendasikan sitemap berisi **canonical URLs**, menyebut submit sitemap sebagai **hint**, mengabaikan `<priority>` dan `<changefreq>`, serta menggunakan `<lastmod>` jika akurat dan dapat diverifikasi. Redirect source sendiri tidak diindeks. citeturn17view0turn22view0turn22view4turn21view4

### Prinsip Utama

- Sitemap hanya untuk URL final yang ingin terlihat di Google.
- `lastmod` harus diubah hanya ketika ada perubahan **signifikan** pada konten, link, atau structured data. citeturn22view0turn17view1
- Jangan memasukkan redirect source, trailing-slash duplicate, atau URL legacy ke sitemap.
- Jika URL belum live atau belum unik, **jangan** buru-buru dimasukkan.
- Jika CMS mendukung segmented sitemap per template family, itu lebih baik untuk debugging indexing; jika tidak, satu sitemap tetap valid. Ini keputusan proyek, bukan kewajiban Google.

### Tabel Keputusan

| URL | Page Type | Sitemap Status | Indexing Priority | Request Indexing? | Alasan | Catatan |
|---|---|---|---|---|---|---|
| `home` | Homepage | Include | Priority 1 | Ya, setelah deploy besar | Pusat entity, navigasi, distribusi internal link | Homepage publik sudah membawa positioning se-Pulau Jawa. citeturn3search6 |
| `jual-ac-purwokerto` | Area | Include | Priority 1 | Ya | Money page lokal inti | Live dan menjadi target redirect lokal. citeturn23search0turn4view4 |
| `jual-ac-banyumas` | Area | Include | Priority 1 | Ya | Area dekat basis fisik, relevan secara trust dan lead | Live di SERP publik. citeturn23search9 |
| `jual-ac-semarang` | Area | Conditional include | Priority 2 | Hanya jika live dan unik | Target ekspansi, tetapi jangan diindex bila masih draft/templated tipis | Asumsi: saat ini belum terverifikasi publik lewat SERP snapshot. |
| `jual-ac-yogyakarta` | Area | Include | Priority 1 | Ya | Area ekspansi kuat, intent komersial tinggi | Live di SERP publik. citeturn23search10 |
| `jual-ac-solo` | Area | Conditional include | Priority 2 | Hanya jika live dan unik | Target ekspansi berikutnya | Asumsi: belum terverifikasi publik di snapshot ini. |
| `katalog` | Katalog hub | Include | Priority 1 | Ya | Hub kategori dan feeder utama | Live dan jelas sebagai katalog hub. citeturn1search4 |
| `katalog/ac-1-2-pk` | Katalog kapasitas | Include | Priority 1 | Ya | Money page komersial utama dan target legacy redirect | Target final dari legacy 1/2 PK. citeturn4view0 |
| `katalog/ac-low-watt` | Katalog tipe | Include | Priority 1 | Ya | Intent komersial kuat | Target final dari legacy low watt. citeturn4view1turn31search6 |
| `katalog/ac-inverter` | Katalog tipe | Include | Priority 1 | Ya | Intent komersial kuat + feeder banyak | Live; sudah mengangkat stok, harga, dan pemasangan. citeturn23search6 |
| `katalog/ac-split-rumah` | Katalog tipe | Include | Priority 1 | Ya | Kategori rumah tangga utama | Live di SERP publik. citeturn23search2 |
| `katalog/ac-kantor-komersial` | Katalog tipe | Include | Priority 1 | Ya | Jembatan retail bisnis ke proyek/B2B | Live dan sudah menyebut kebutuhan usaha/proyek. citeturn25search11 |
| `pengadaan-ac` | B2B hub | Include | Priority 1 | Ya | Hub proyek/B2B utama | Sudah terlihat publik sebagai target final dari `pengadaan-ac-proyek`. citeturn2view5 |
| `pengadaan-ac/kontraktor-developer` | B2B segment | Include | Priority 1 | Ya | Segment langsung ke uang | URL ini diberikan user sebagai live inventory; treat as core B2B URL. |
| `pengadaan-ac/hotel-guest-house` | B2B segment | Include | Priority 1 | Ya | Segment hospitality bernilai tinggi | URL ini diberikan user sebagai live inventory; treat as core B2B URL. |
| `pengadaan-ac/kost-apartemen-skala-besar` | B2B segment | Include | Priority 1 | Ya | Segment banyak unit dan recurring | Terlihat publik sebagai target final dari legacy artikel kost. citeturn2view4 |
| `brand/daikin` | Brand | Include | Priority 1 | Ya | Brand utama, high-intent | Jadi target final redirect legacy Daikin. citeturn4view3 |
| `brand/gree` | Brand | Include | Priority 1 | Ya | Brand utama + trust asset Proshop | Live dan punya trust asset resmi Gree. citeturn1search6turn30view3 |
| `brand/midea` | Brand | Include | Priority 1 | Ya | Brand utama | Jadi target final redirect legacy Midea. citeturn4view2 |
| `brand/hisense` | Brand | Include | Priority 2 | Ya | Brand pendukung komersial | User menyebut URL ini sudah live. |
| `brand/sansui` | Brand | Include | Priority 2 | Ya | Brand pendukung komersial | User menyebut URL ini sudah live. |
| `brand/sharp` | Brand | Include | Priority 2 | Ya | Brand pendukung komersial | User menyebut URL ini sudah live. |
| `brand/samsung` | Brand | Include | Priority 2 | Ya | Brand pendukung; perlu diawasi cannibalization dengan artikel brand | Ada publik brand page dan artikel Samsung lokal. citeturn23search5turn31search7 |
| `brand/panasonic` | Brand | Include | Priority 2 | Ya | Brand pendukung komersial | Brand page live di SERP publik. citeturn25search9 |
| `brand/lainnya` | Brand collection | Include | Priority 2 | Ya | Menangkap long-tail brand yang belum punya page sendiri | Live di SERP publik. citeturn25search6 |
| `artikel/panduan-beli-ac-baru` | Artikel edukasi | Conditional include | Priority 2 | Hanya jika slug final live | Saat ini snapshot publik lebih jelas menampilkan `panduan-instalasi-ac-baru`; jangan masukkan URL yang canonical-nya belum pasti | Publik kini menampilkan `artikel/panduan-instalasi-ac-baru`. citeturn31search0 |
| `kalkulator-pk-ac` | Tool / feeder | Include | Priority 1 | Ya | Tool berintensi tinggi, feeder ke katalog/WA | Live di SERP publik. citeturn3search1turn25search8 |
| `kontak` | Contact / entity | Include | Priority 2 | Ya | Menguatkan entity dan konversi | Kontak publik menyebut showroom/stok di Pamijen, Sokaraja, Banyumas. citeturn6search0 |
| `bukti-pengiriman-proyek` | Proof / gallery | Include | Priority 3 | Ya setelah update proof besar | Trust page, bukan money page primer | `gallery` mengarah ke URL final ini. citeturn30view1 |

### Aturan untuk Assistant/Codex

- Pastikan sitemap hanya memuat URL yang:
  - `200 OK`,
  - canonical ke dirinya sendiri,
  - bukan redirect source,
  - bukan duplicate trailing slash,
  - dan benar-benar ingin di-rank.
- Jika ada publish baru, submit halaman itu ke sitemap **setelah** copy, internal link, canonical, CTA, dan metadata final sudah siap.
- Jika ada redirect, request indexing **target final** saja.
- Jika template area/brand/B2B belum unik secara body dan trust proof, tahan dulu sitemap inclusion.
- Jika CMS mengizinkan segmented sitemap, prioritaskan pemisahan ke keluarga: `pages`, `areas`, `brands`, `katalog`, `b2b`, `articles`, `proof`.

### Jangan Dilakukan

- Jangan memasukkan URL redirect lama ke sitemap.
- Jangan memasukkan URL yang belum live hanya karena sudah direncanakan.
- Jangan mengandalkan `<priority>` dan `<changefreq>` untuk “memaksa” indexing; Google mengabaikannya. citeturn22view0
- Jangan memalsukan `lastmod`; Google hanya memakai nilai itu bila konsisten dengan perubahan nyata. citeturn17view1turn22view0
- Jangan request indexing source redirect, duplicate variant, atau slug yang canonical-nya belum jelas.

### Contoh Implementasi

**Urutan request indexing setelah deploy besar**

| Gelombang | URL |
|---|---|
| Gelombang inti | `home`, `katalog`, `pengadaan-ac`, `kontak` |
| Gelombang money page | `jual-ac-purwokerto`, `jual-ac-banyumas`, `jual-ac-yogyakarta`, `katalog/ac-1-2-pk`, `katalog/ac-low-watt`, `katalog/ac-inverter`, `brand/daikin`, `brand/gree`, `brand/midea` |
| Gelombang support | `kalkulator-pk-ac`, `bukti-pengiriman-proyek`, artikel feeder yang benar-benar diupdate |

**Aturan setelah redirect**

| Jenis URL | Request indexing? | Sitemap? | Internal link? |
|---|---|---|---|
| URL final target | Ya, bila baru diubah | Ya | Ya |
| URL source redirect | Tidak | Tidak | Tidak |
| Trailing slash duplicate | Tidak | Tidak | Tidak |
| URL draft / belum unik | Tidak | Tidak | Tidak |

**Exclude list wajib**

- `artikel/harga-ac-1-2-pk-purwokerto-pemasangan`
- `artikel/beli-ac-baru-purwokerto-panduan-sebelum-order`
- `artikel/ac-low-watt-listrik-900-1300-watt-purwokerto`
- trailing-slash variant dari legacy low watt
- legacy brand article yang sudah diarahkan ke `brand/{brand}`
- `pengadaan-ac-proyek`
- `gallery`  
Semua ini harus dianggap **do not request indexing** dan **do not include in sitemap**. citeturn4view0turn4view1turn4view2turn4view3turn2view5turn30view1
