# RADJAAC_TRUST_ASSET_MAP.md

## Radja AC Trust Asset Map

File: `RADJAAC_TRUST_ASSET_MAP.md`

### Status

Needs quarterly refresh

### Fungsi Dokumen

Dokumen ini mengatur bagaimana trust proof Radja AC dipakai lintas halaman supaya membantu konversi dengan kuat tanpa menimbulkan klaim palsu. Trust asset yang sudah terverifikasi dan dipakai live adalah: showroom dan gudang fisik di Pamijen, Sokaraja, Banyumas; halaman tentang kami dengan identitas bisnis publik; halaman bukti pengiriman/proyek; sertifikat Authorized Dealer (Daikin, Midea, Hisense, Sansui); serta listing resmi Proshop Gree Radja AC pada situs resmi Gree Indonesia.

### Prinsip Utama

- Trust proof harus **mendekatkan user ke chat** dan memperkuat posisi Radja AC, bukan sekadar mempercantik halaman.
- Untuk kota di luar basis fisik, trust proof diposisikan sebagai **reputasi dan kapasitas Radja AC** (showroom/gudang fisik, stok fisik, dokumentasi pengiriman dan pemasangan), bukan bukti toko lokal palsu.
- Gunakan klaim yang benar-benar bisa dibuktikan secara publik atau operasional, dan tampilkan dengan tegas.
- Proof visual lebih baik jika dekat dengan CTA, terutama pada area page, B2B page, dan katalog komersial.
- Untuk brand-specific trust, klaim “resmi” dipakai jika verifikasinya jelas. Verifikasi publik terkuat saat ini adalah **Proshop Gree** dan **sertifikat Authorized Dealer Daikin, Midea, Hisense, dan Sansui**.

### Tabel Keputusan

| Trust Asset | Dipakai di Page Type | Fungsi | Copy Pattern | Alt Text Pattern | Catatan |
|---|---|---|---|---|---|
| Showroom fisik Pamijen–Sokaraja–Banyumas | Homepage, Kontak, Tentang Kami, footer semua page, area page sebagai secondary proof | Menguatkan entity dan alamat basis | “Showroom dan gudang Radja AC ada di Pamijen, Sokaraja, Banyumas. Dari basis ini admin bantu cek stok, pengiriman unit, dan koordinasi opsi pemasangan.” | “Showroom Radja AC di Pamijen Sokaraja Banyumas” | Halaman kontak publik sudah menyebut area showroom dan stok di Pamijen, Sokaraja, Banyumas. |
| Gudang / stok unit | Homepage, Katalog, Kontak, Proof page | Menjawab kecemasan ketersediaan unit | “Foto stok unit di-update sebagai bukti jenis AC yang benar-benar masuk jalur suplai Radja AC.” | “Stok unit AC Radja AC di Banyumas” | Perlu disiplin tanggal foto; jangan pakai foto stok lama tanpa konteks. |
| Public contact identity | Kontak, footer, semua CTA section | Menegaskan bahwa lead chat menuju admin bisnis nyata | “Admin WhatsApp Radja AC siap bantu cek PK, stok, dan opsi pemasangan.” | Tidak wajib alt; biasanya teks bukan gambar | About/Kontak publik menampilkan WhatsApp dan email info. |
| Proof page `bukti-pengiriman-proyek` | Homepage, Area, B2B, Katalog, Brand, Kontak | Bukti aktivitas pengiriman/proyek | “Lihat dokumentasi pengiriman dan pekerjaan yang pernah ditangani Radja AC.” | “Bukti pengiriman unit AC Radja AC” | `gallery` saat ini redirect ke `bukti-pengiriman-proyek`; URL final itulah yang dipakai. |
| Listing resmi Proshop Gree | Homepage, `brand/gree`, Tentang Kami, page trust khusus | Trust brand-specific yang kuat | “Radja AC tercantum di daftar Toko Offline Proshop Gree Indonesia.” | “Listing resmi Proshop Gree Radja AC Purwokerto” | Klaim ini aman karena diverifikasi publik di situs resmi Gree Indonesia, lengkap dengan alamat. |
| Sertifikat Authorized Dealer (Daikin, Midea, Hisense, Sansui) | Homepage, Tentang Kami, Brand page terkait | Trust supply chain yang kuat dan berbasis dokumen | “Sertifikat Authorized Dealer ditampilkan sebagai bukti jalur unit dan garansi yang jelas.” | “Sertifikat Authorized Dealer {Brand} Radja AC” | Hanya tampilkan sertifikat yang masih valid; jangan generalisasi ke semua brand. |
| Garansi teknisi 1 bulan | Katalog, terutama `ac-inverter`, area page, CTA support section | Mengurangi kekhawatiran pemasangan | “Untuk pekerjaan pemasangan tertentu, tersedia garansi teknisi 1 bulan.” | “Dokumentasi pemasangan AC Radja AC” | Sudah dipakai live; konfirmasi operasional berkala sebelum dipasang sitewide. |
| Konsultasi PK | Homepage, Area, Katalog, Kalkulator, Artikel, Brand | Menjembatani pengguna dari riset ke lead | “Sebelum pilih unit, admin bantu hitung kebutuhan PK awal dari ukuran ruangan dan daya listrik.” | “Konsultasi kebutuhan PK AC oleh Radja AC” | Bukti kuat di homepage, area, kalkulator, dan artikel. |
| Bukti pengiriman luar kota | Area page, B2B, Proof page | Menjawab keraguan layanan luar Banyumas | “Untuk area luar kota, Radja AC bantu pengiriman unit dan koordinasi opsi pemasangan sesuai kebutuhan.” | “Bukti pengiriman unit AC Radja AC ke [kota]” | Gunakan nama kota pada alt/copy hanya jika dokumentasinya memang kota tersebut. |
| Bantuan klaim unit / garansi resmi | Brand, Kontak, FAQ, B2B | Menjawab post-sale anxiety | “Admin bantu arahkan proses klaim unit sesuai jalur garansi yang berlaku.” | “Bantuan klaim unit AC oleh Radja AC” | **Asumsi operasional** dari owner; tampilkan hanya setelah owner mengonfirmasi prosedurnya aktif. |

### Aturan untuk Assistant/Codex

- Setiap area page harus punya **minimal satu trust block** yang menegaskan basis Radja AC di Banyumas dan satu jalur ke proof page.
- Setiap B2B page harus punya **proof module** sebelum CTA terakhir.
- `brand/gree` wajib jadi rumah utama untuk trust claim Proshop Gree.
- Untuk brand dengan sertifikat Authorized Dealer (Daikin, Midea, Hisense, Sansui), tampilkan sertifikat tersebut sebagai trust kuat. Untuk brand lain, gunakan copy aman seperti “original”, “bergaransi”, “bisa cek stok”.
- Alt text harus mendeskripsikan **aktivitas nyata**, bukan keyword stuffing.
- Jika aset visual belum tersedia untuk kota target, gunakan proof perusahaan (showroom/gudang/pengiriman) + copy aman, **bukan** foto generik yang dibuat seolah-olah di kota target.

### Jangan Dilakukan

- Jangan klaim punya showroom di Semarang, Solo, Yogyakarta, atau kota lain bila basis fisik yang terverifikasi hanya di Banyumas.
- Jangan pakai review/rating palsu.
- Jangan pakai sertifikat brand yang masa berlakunya tidak jelas.
- Jangan overclaim “dealer resmi” untuk semua brand.
- Jangan jadikan Google Maps review sebagai trust utama sebelum strategi nomor dan listing diputuskan.
- Jangan menempatkan trust proof jauh di bawah halaman sampai tidak ikut mendukung CTA utama.

### Contoh Implementasi

**Homepage trust strip**

> “Radja AC punya showroom dan gudang fisik di Pamijen, Sokaraja, Banyumas, dengan stok fisik yang bisa dicek. Sebagai supplier AC original multi-brand, Radja AC melayani rumah, kost, toko, kantor, hotel, dan proyek di Pulau Jawa. Admin bantu cek PK, stok unit, pengiriman, dan opsi pemasangan.”

Copy ini kuat dan tetap jujur karena menggambarkan basis fisik dan cakupan layanan nyata tanpa berpura-pura punya toko di semua kota.

**Area page safe trust copy**

> “Showroom dan gudang Radja AC ada di Pamijen, Sokaraja, Banyumas. Untuk kebutuhan area Yogyakarta, admin bantu konsultasi PK, cek stok unit, pengiriman, dan koordinasi opsi pemasangan sesuai kebutuhan.”

**Gree proof card**

> “Radja AC tercantum di daftar Toko Offline Proshop Gree Indonesia. Jika Anda sedang membandingkan Gree untuk rumah, kost, atau proyek, admin bisa bantu cek stok dan pilihan tipenya.”

**B2B proof module**

- Judul: “Bukti Pengiriman dan Penanganan Banyak Unit”
- Isi: 6–12 foto proyek/pengiriman nyata
- CTA: “Kirim Brief Proyek ke Admin”
