# RADJAAC_B2B_SEGMENT_MAP.md

## RADJAAC_B2B_SEGMENT_MAP.md

**Status**  
Needs quarterly refresh

**Fungsi Dokumen**  
Menentukan segmen B2B/proyek yang paling layak dibangun sebagai money page, mana yang paling dekat ke uang, mana yang digarap lebih dulu dalam 30 hari, dan mana yang dimatangkan sebagai artikel/supporting page sebelum naik jadi money page.

Pembeda utama: **kecepatan closing** dan **kerumitan procurement**. Segmen pemerintah bernilai besar dan layak dikejar; jalurnya formal lewat portal pengadaan nasional, LPSE, dan e-Katalog, jadi diserang penuh begitu dokumen vendor dan template penawaran siap supaya lead langsung qualified. Private B2B — kost, hotel, kontraktor/developer, kantor/ruko, cafe/resto — paling dekat ke transaksi WA dan jadi ujung tombak. Di sisi demand, DIY, Semarang, Surakarta, Bandung, Surabaya, dan Jakarta sama-sama memberi sinyal kuat untuk hospitality, pendidikan, dan properti komersial ringan.

**Prinsip Utama**

- Segmen paling dekat ke uang punya brief standar, volume unit jelas, dan keputusan beli cepat — garap paling agresif.
- Segmen dengan dokumen formal/spesifikasi berat digarap dengan kesiapan dokumen lebih dulu supaya lead-nya benar-benar ditutup, bukan menggantung.
- Setiap halaman B2B mengumpulkan data proyek yang cukup agar admin langsung balas penawaran.
- Halaman B2B wajib lebih “brief-driven” daripada halaman area; CTA mengumpulkan data, bukan sekadar “halo admin”.
- Halaman B2B yang kuat selalu disambungkan ke katalog dan brand page relevan.

**Tabel Keputusan**

| Segmen | URL Ideal | Keyword Utama | Keyword Pendukung | Buyer Concern | Data yang Harus Diminta | Trust Proof | CTA | Internal Link | Prioritas |
|---|---|---|---|---|---|---|---|---|---|
| Kost/apartemen skala besar | `/pengadaan-ac/kost-apartemen-skala-besar` | pengadaan AC kost | AC untuk kost banyak unit; AC apartemen banyak unit | Budget per kamar; listrik; noise; daya tahan; instalasi seragam | Jumlah kamar; ukuran kamar; daya listrik; target budget; butuh pasang/tidak; timeline | Foto stok; opsi low watt/inverter; contoh order multi-unit | `WA: kirim jumlah kamar + ukuran kamar + daya listrik` | `/katalog/ac-low-watt`, `/katalog/ac-inverter`, `/katalog/ac-1-pk`, `/kalkulator-pk-ac` | P1 |
| Hotel/guest house | `/pengadaan-ac/hotel-guest-house` | pengadaan AC hotel | AC guest house; AC homestay; AC kamar hotel | Ketahanan; noise; estetika; waktu pemasangan; brand seragam | Jumlah kamar; tipe kamar; okupansi jadwal proyek; brand preference; akses outdoor | Foto pemasangan rapi; brand resmi; koordinasi pengiriman | `WA: kirim jumlah kamar + target opening date` | `/katalog/ac-inverter`, `/katalog/ac-1-pk`, `/katalog/ac-1-5-pk`, `/brand/daikin` | P1 |
| Kontraktor/developer | `/pengadaan-ac/kontraktor-developer` | supplier AC proyek | pengadaan AC developer; vendor AC proyek | Lead time; volume; spek; dukungan survey; koordinasi lapangan | BOQ; gambar/layout; jumlah unit; deadline; lokasi proyek; butuh survey | Foto gudang/stok; multi-brand; kemampuan supply partai | `WA: kirim BOQ/layout proyek` | `/katalog/ac-kantor-komersial`, `/katalog/ac-cassette`, `/brand/gree`, `/brand/midea` | P1 |
| Gedung perkantoran/ruko | `/pengadaan-ac/gedung-kantor-ruko` | pengadaan AC kantor | AC untuk kantor; AC ruko; AC ruang meeting | Tipe unit; estetika; pekerjaan weekend; downtime kantor | Luas ruangan; plafon; jumlah ruang; kebutuhan indoor/outdoor; jam kerja | Foto instalasi komersial; rekomendasi cassette vs split | `WA: kirim layout ruangan kantor/ruko` | `/katalog/ac-kantor-komersial`, `/katalog/ac-cassette`, `/katalog/ac-2-pk` | P1 |
| Cafe/resto | `/pengadaan-ac/cafe-resto` | AC untuk cafe | pengadaan AC resto; AC ruang makan; AC semi outdoor | Dingin merata; estetika; kaca besar; jam operasional; tipe cassette/floor standing | Luas area; tinggi plafon; kondisi open/semi-open; jumlah titik; jam operasional | Foto proyek usaha; rekomendasi komersial | `WA: kirim foto area + ukuran + plafon` | `/katalog/ac-cassette`, `/katalog/ac-floor-standing`, `/kalkulator-pk-ac` | P1 |
| Sekolah/kampus | `/pengadaan-ac/sekolah-kampus` | pengadaan AC sekolah | AC kelas; AC kampus; AC ruang dosen | Banyak ruangan; listrik; durability; jadwal pemasangan | Jumlah kelas/ruang; ukuran; daya listrik; jadwal libur/pekerjaan | Supply multi-unit; dokumen usaha standar | `WA: kirim jumlah ruang kelas/kantor` | `/katalog/ac-1-5-pk`, `/katalog/ac-2-pk`, `/katalog/ac-kantor-komersial` | P2 |
| Klinik/rumah sakit kecil | `/pengadaan-ac/klinik-rumah-sakit-kecil` | pengadaan AC klinik | AC ruang periksa; AC klinik kecil | Kebersihan; noise; jam operasional; pemasangan minim gangguan | Jumlah ruang; fungsi tiap ruang; jam operasional; kebutuhan suhu | Instalasi rapi; koordinasi jadwal teknisi | `WA: kirim fungsi ruang + jam operasional` | `/katalog/ac-inverter`, `/katalog/ac-cassette`, `/brand/daikin` | P2 |
| Toko chain / showroom | `/pengadaan-ac/toko-chain-showroom` | pengadaan AC toko chain | AC showroom; AC outlet retail | Standardisasi antar cabang; pengiriman bertahap; timeline fit-out | Jumlah outlet; kota; ukuran tiap outlet; tahapan pembukaan | Supply multi-brand; pengiriman batch | `WA: kirim jumlah outlet + timeline opening` | `/katalog/ac-kantor-komersial`, `/katalog/ac-cassette`, `/brand/panasonic` | P2 |
| Villa/homestay | `/artikel/panduan-ac-villa-homestay` | AC untuk villa | AC homestay; AC penginapan kecil | Dekat dengan hotel page; matangkan via artikel sebelum money page terpisah | Jumlah kamar; kondisi bangunan; target budget | Reuse proof hotel/guest house | `WA dari artikel ke hotel page` | `/pengadaan-ac/hotel-guest-house`, `/katalog/ac-inverter` | Artikel dulu |
| Instansi pemerintah | `/artikel/pengadaan-ac-instansi-pemerintah` | pengadaan AC instansi | vendor AC pemerintah; AC kantor dinas | Dokumen vendor; jalur LPSE/e-Katalog; proses formal; waktu tender | NIB/NPWP; kesiapan LPSE/e-Katalog; lingkup kebutuhan; jadwal pengadaan | Legal docs; readiness procurement | `WA untuk vendor pemerintah; siapkan dokumen` | `/pengadaan-ac`, `/katalog/ac-kantor-komersial` | Siapkan dokumen → garap |
| Pabrik/gudang | `/artikel/ac-untuk-kantor-pabrik-gudang` | AC kantor pabrik | AC gudang ringan; AC pos security; AC office factory | Fokus pada area comfort cooling (kantor pabrik, pos, office factory) | Fungsi area; tinggi ruang; proses produksi; kebutuhan comfort vs industrial | Cocok untuk comfort cooling area | `WA: kirim fungsi area dulu` | `/katalog/ac-floor-standing`, `/katalog/ac-3-4-pk` | Artikel dulu |

**Aturan untuk Assistant/Codex**

- Dalam 30 hari pertama: pertajam **3 halaman existing** (`kontraktor/developer`, `hotel/guest house`, `kost/apartemen skala besar`) dan tambah **2 halaman baru**: `gedung-kantor-ruko` dan `cafe-resto`.
- Setiap halaman B2B wajib punya komponen: brief fields, use case, buyer concern, data yang diminta, dan CTA WA spesifik.
- Segmen pemerintah digarap penuh begitu owner mengonfirmasi kesiapan dokumen vendor dan template penawaran.
- Segmen villa/homestay diarahkan ke hotel/guest house + artikel pendukung sampai sinyalnya cukup untuk money page sendiri.
- Segmen pabrik/gudang difokuskan pada comfort cooling (kantor pabrik, pos security, office factory), bukan process cooling industrial.

**Jangan Dilakukan**

- Jangan menjadikan semua segmen B2B sebagai “pengadaan AC” generik.
- Jangan buat halaman B2B tanpa meminta data proyek sebelum estimasi.
- Jangan gabungkan `kantor`, `rumah sakit`, `instansi`, `pabrik`, dan `cafe` dalam satu page.
- Jangan menjanjikan lead pemerintah secepat buyer private; set ekspektasi jalur formalnya dengan jelas.
- Jangan buat money page tanpa penawaran dan SOP yang jelas, supaya tiap lead bisa langsung ditutup.

**Contoh Implementasi**

| Keputusan | Isi Konkret |
|---|---|
| Segmen paling dekat ke uang | Kost/apartemen besar; hotel/guest house; kontraktor/developer; kantor/ruko; cafe/resto |
| Yang harus dibuat dalam 30 hari | Pertajam 3 existing + buat `/pengadaan-ac/gedung-kantor-ruko` + `/pengadaan-ac/cafe-resto` |
| Yang digarap setelah 3+2 kuat | Sekolah/kampus; klinik/RS kecil; toko chain/showroom |
| Yang dimatangkan via artikel dulu | Villa/homestay; instansi pemerintah; pabrik/gudang |
| CTA WhatsApp baku B2B | `Kirim lokasi proyek, jumlah unit, ukuran ruang, daya listrik, timeline, dan butuh pemasangan atau tidak` |
