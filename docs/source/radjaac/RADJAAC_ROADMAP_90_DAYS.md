# RADJAAC_ROADMAP_90_DAYS.md

## RADJAAC Roadmap Ninety Days

File: `RADJAAC_ROADMAP_90_DAYS.md`

### Status

Needs monthly refresh

### Fungsi Dokumen

Dokumen ini menetapkan urutan kerja 30/60/90 hari untuk RADJA AC berdasarkan kondisi publik website saat ini: homepage dan beberapa halaman utama sudah mengarah ke positioning Pulau Jawa, area pages seperti Purwokerto, Banyumas, Cilacap, Kebumen, dan Yogyakarta sudah terlihat publik, artikel sizing/inverter/instalasi sudah mulai terbentuk, trust proof sudah punya halaman bukti, dan legacy redirect sudah berjalan. Namun audit publik juga memperlihatkan dua masalah yang wajib didahulukan: **template heading yang masih seragam di banyak page type** dan **jejak halaman lokal/legacy yang masih muncul di SERP**. Google sendiri menekankan bahwa title link bisa dibentuk dari main visible title/H1 dan sumber lain bila struktur judul tidak jelas. citeturn3search6turn23search0turn23search8turn23search9turn23search10turn25search13turn25search14turn25search16turn31search0turn30view1turn4view0turn4view1turn4view2turn4view3turn4view4turn17view5turn2view0turn2view1turn2view2turn2view3

### Prinsip Utama

- Selesaikan **template hygiene** lebih dulu sebelum ekspansi volume.
- Prioritaskan page yang paling dekat ke lead: area inti, katalog inti, brand inti, B2B inti.
- Gunakan artikel yang sudah live sebagai feeder; jangan menambah artikel baru jika intent-nya belum jelas dibedakan dari money page.
- Semua task harus berujung pada dua outcome: **lebih mudah diindex** dan **lebih mudah menghasilkan chat WhatsApp berkualitas**.
- Ekspansi Jawa Barat/Jawa Timur/Banten/DKI hanya dilakukan setelah query dan lead signal dari Jawa Tengah/DIY stabil.

### Tabel Keputusan

| Periode | Task | Page/Cluster | Tujuan | Dependency | Output | Metrik Sukses |
|---|---|---|---|---|---|---|
| Hari awal–bulan pertama | Audit title/H1/hero per template family | `home`, area, brand, katalog, B2B, kontak, proof | Mengurangi title rewrite dan memperjelas intent per page type | Tidak ada | Template brief per family | Semua page prioritas punya H1/hero unik; tidak lagi berbagi heading generik yang sama |
| Hari awal–bulan pertama | Audit redirect hygiene dan internal link final | Legacy article/brand/proof URL | Menghilangkan kebocoran authority ke URL lama | Mapping URL final | Semua link internal ke target final | Nol internal link ke source redirect pada audit internal |
| Hari awal–bulan pertama | Audit area prioritas | `jual-ac-yogyakarta`, `jual-ac-purwokerto`, `jual-ac-banyumas`, serta jika live `jual-ac-semarang` dan `jual-ac-solo` | Menyiapkan area expansion yang benar-benar siap diindex dan konversi | Template audit | Copy polish + CTA + trust block | Peningkatan impresi area page prioritas dan CTA click rate |
| Hari awal–bulan pertama | Audit area menengah | `jual-ac-cilacap`, `jual-ac-kebumen`, `jual-ac-tegal` bila live | Menentukan mana yang layak didorong dulu | Template audit | Status: polish / hold / expand | Tidak ada area page tipis yang diminta index prematur |
| Hari awal–bulan pertama | Buat halaman B2B baru | `pengadaan-ac/instansi-pemerintah` | Menambah segment dekat ke tender/instansi | Trust proof + CTA model B2B | Draft siap publish atau page live | URL live, linked from `pengadaan-ac`, dan masuk sitemap |
| Hari awal–bulan pertama | Buat katalog kapasitas berikutnya | `katalog/ac-1-pk` | Menangkap demand sizing yang sudah tampak di artikel | Katalog template final | Halaman live | URL `ac-1-pk` live dan mendapatkan link dari kalkulator + artikel sizing |
| Hari awal–bulan pertama | Audit GSC pasca-redirect | semua target redirect utama | Memastikan source lama normal sebagai `Page with redirect` dan target final tidak bermasalah | GSC access | Status board redirect | Tidak ada request indexing ke source redirect |
| Hari awal–bulan pertama | Audit sitemap dan URL Inspection | semua Priority 1 URL | Memastikan hanya canonical final yang didorong | Sitemap rule | Daftar final request indexing | Sitemap bersih dari redirect source |
| Hari awal–bulan pertama | Implementasi tracking WhatsApp | semua CTA utama | Membaca lead source dengan rapi | GTM/GA4 access | Event `wa_click` + custom params | Event masuk di Realtime/DebugView dan param utama terisi |
| Bulan kedua | Update artikel feeder yang sudah live | `artikel/ac-1-pk-untuk-ruangan-berapa`, `artikel/cara-memilih-ac-untuk-kamar-3x4`, `artikel/ac-inverter-vs-low-watt`, `artikel/panduan-instalasi-ac-baru` | Mengalirkan traffic edukasi ke money page yang benar | `katalog/ac-1-pk` live | Internal link + CTA baru | Naik klik/WA click dari artikel feeder |
| Bulan kedua | Buat artikel biaya pasang dan material | cluster biaya | Menangkap intent biaya tanpa memakan katalog | CTA model retail/B2B | Artikel live | Artikel ranking dan mengalir ke katalog/B2B |
| Bulan kedua | Tambah B2B kedua | `pengadaan-ac/gedung-perkantoran` atau `instansi-pemerintah` | Memperkuat demand non-hotel/non-kost | Trust proof + CTA B2B | Halaman live | Query B2B bertambah dan lead brief lebih lengkap |
| Bulan kedua | Perkuat trust proof | brand, katalog, B2B | Menambah keyakinan sebelum chat | Proof assets siap | Modul proof seragam | Peningkatan CTR ke WA pada page yang dipoles |
| Bulan kedua | Evaluasi cannibalization lokal | `jual-ac-purwokerto` vs `toko-ac-terdekat-purwokerto`, brand page vs artikel brand | Menghindari fragmentasi ranking | GSC query/page map | Rekomendasi merge / relink / hold | Query utama mendarat ke URL target final | 
| Bulan ketiga | Evaluasi ekspansi luar Jateng/DIY | Jawa Barat, Jatim, Banten, DKI | Memutuskan lanjut atau tahan area rollout | Data GSC + lead WA | Market shortlist | Hanya kota dengan sinyal impresi/lead yang naik yang masuk backlog |
| Bulan ketiga | Buat kategori komersial lanjutan bila sinyal B2B ada | `katalog/ac-cassette`, `katalog/ac-floor-standing` | Menangkap equipment komersial bila demand mulai nyata | Lead B2B berkualitas | Halaman live atau draft hold | Ada query/lead berulang terkait tipe komersial |
| Bulan ketiga | Tambah segment institusional tambahan bila ada sinyal | `pengadaan-ac/sekolah-kampus`, `pengadaan-ac/klinik` | Ekspansi B2B bertahap | Data query + lead | Draft prioritas | Page baru hanya dibuat jika ada demand nyata |
| Bulan ketiga | Refresh SERP map dan conversion review | sitewide | Memutuskan fokus kuartal berikutnya | 90 hari data | Growth memo baru | Query, CTR, indexed count, dan WA quality membaik |

### Aturan untuk Assistant/Codex

- Jangan membuka front ekspansi baru sebelum audit template selesai.
- Untuk sizing cluster, **update artikel yang sudah live** terlebih dahulu sebelum membuat artikel baru. RADJA AC saat ini sudah punya artikel `AC 1 PK`, `kamar 3x4`, `inverter vs low watt`, dan `panduan instalasi`. citeturn25search13turn25search14turn25search16turn31search0
- Untuk brand cluster, audit dulu apakah ada artikel brand yang masih muncul publik dan berpotensi memakan brand page.
- Untuk local cluster, audit apakah URL seperti `toko-ac-terdekat-purwokerto` perlu dipertahankan atau digabungkan secara intent ke `jual-ac-purwokerto`. citeturn23search7turn23search0
- Semua page baru harus punya: internal link masuk, CTA WhatsApp spesifik, dan blok trust yang relevan.
- Semua proof asset baru harus di-link dari `home`, `pengadaan-ac`, dan minimal satu katalog atau brand page.

### Jangan Dilakukan

- Jangan mass publish area pages lintas Jawa hanya karena slug sudah siap.
- Jangan membuat brand article komersial baru jika sudah ada brand page mapan.
- Jangan mendorong `request indexing` untuk puluhan URL sekaligus sesudah deploy besar.
- Jangan menambah katalog komersial berat seperti cassette/floor standing sebelum ada sinyal query atau lead B2B yang cukup.
- Jangan menaruh review Google Maps sebagai trust utama sebelum strategi nomor Maps vs nomor website diputuskan.

### Contoh Implementasi

**Do Now**

| Bucket | Isi |
|---|---|
| Do Now | audit H1/title/hero, audit redirect hygiene, `katalog/ac-1-pk`, `pengadaan-ac/instansi-pemerintah`, tracking WA, sitemap audit |
| Do Next | polish area Jateng/DIY, update artikel feeder, artikel biaya pasang/material, trust module |
| Do Later | Jabar/Jatim/Banten/DKI, `ac-cassette`, `ac-floor-standing`, segmen sekolah/kampus/klinik |
| Do Not Do Yet | mass city rollout, mass brand article rollout, schema offer palsu, multiple WA number tanpa governance |

**Dependency paling penting**

1. `template audit` → 2. `internal link & sitemap cleanup` → 3. `publish page baru` → 4. `request indexing` → 5. `monitor GSC & WA quality`

**Risiko jika terlalu banyak deploy sekaligus**

- `Discovered - currently not indexed` akan lebih sering muncul pada batch baru.
- Sulit membaca penyebab performa turun/naik karena terlalu banyak variabel berubah.
- Cannibalization lebih sulit dilacak.
- Tim sulit membedakan halaman mana yang benar-benar menghasilkan chat berkualitas.  
Semua risiko ini konsisten dengan cara Google menjelaskan Page Indexing, URL Inspection, dan crawl scheduling. citeturn21view1turn20search0turn17view3
