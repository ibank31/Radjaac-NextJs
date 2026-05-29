# RADJAAC_TRUST_ASSET_MAP.md

## RADJAAC Trust Asset Map

File: `RADJAAC_TRUST_ASSET_MAP.md`

### Status

Needs quarterly refresh

### Fungsi Dokumen

Dokumen ini mengatur bagaimana trust proof RADJA AC dipakai lintas halaman supaya membantu konversi tanpa menimbulkan klaim palsu. Dari riset publik saat ini, trust asset yang sudah terlihat/terverifikasi adalah: identitas fisik showroom/stok di Pamijen, Sokaraja, Banyumas pada halaman kontak; halaman tentang kami dengan identitas bisnis publik; halaman proof yang canonical-nya menuju halaman bukti pengiriman/proyek; serta listing resmi **Proshop Gree RADJA AC Purwokerto** pada situs resmi Gree Indonesia. citeturn6search0turn5search2turn30view1turn30view3

### Prinsip Utama

- Trust proof harus **mendekatkan user ke chat**, bukan sekadar mempercantik halaman.
- Untuk kota luar basis fisik, trust proof diposisikan sebagai **reputasi dan kapasitas RADJA AC**, bukan bukti toko lokal palsu.
- Gunakan claim yang benar-benar bisa dibuktikan secara publik atau operasional.
- Proof visual lebih baik jika dekat dengan CTA, terutama pada area page, B2B page, dan katalog komersial.
- Untuk brand-specific trust, claim “resmi” hanya dipakai jika verifikasinya jelas. Saat ini verifikasi publik terkuat yang terlihat adalah **Gree Proshop**. citeturn30view3

### Tabel Keputusan

| Trust Asset | Dipakai di Page Type | Fungsi | Copy Pattern | Alt Text Pattern | Catatan |
|---|---|---|---|---|---|
| Showroom fisik Pamijen–Sokaraja–Banyumas | Homepage, Kontak, Tentang Kami, footer semua page, area page sebagai secondary proof | Menguatkan entity dan alamat basis | “Showroom dan titik stok RADJA AC berada di Pamijen, Sokaraja, Banyumas. Dari basis ini admin bantu cek stok, pengiriman unit, dan koordinasi opsi pemasangan.” | “Showroom RADJA AC di Pamijen Sokaraja Banyumas” | Halaman kontak publik sudah menyebut area showroom & stok di Pamijen, Sokaraja – Banyumas. citeturn6search0 |
| Gudang / stok unit | Homepage, Katalog, Kontak, Proof page | Menjawab kecemasan ketersediaan unit | “Foto stok unit di-update sebagai bukti jenis AC yang benar-benar masuk jalur suplai RADJA AC.” | “Stok unit AC RADJA AC di Banyumas” | Perlu disiplin tanggal foto; jangan pakai foto stok lama tanpa konteks. |
| Public contact identity | Kontak, footer, semua CTA section | Menegaskan bahwa lead chat menuju admin bisnis nyata | “Admin WhatsApp RADJA AC siap bantu cek PK, stok, dan opsi pemasangan.” | Tidak wajib alt; biasanya teks bukan gambar | About/Kontak publik menampilkan WhatsApp dan email info. citeturn5search2turn5search4 |
| Proof page `bukti-pengiriman-proyek` | Homepage, Area, B2B, Katalog, Brand, Kontak | Bukti aktivitas pengiriman/proyek | “Lihat dokumentasi pengiriman dan pekerjaan yang pernah ditangani RADJA AC.” | “Bukti pengiriman unit AC RADJA AC” | `gallery` saat ini terlihat redirect ke `bukti-pengiriman-proyek`; URL final itulah yang harus dipakai. citeturn30view1 |
| Listing resmi Proshop Gree | Homepage, `brand/gree`, Tentang Kami, page trust khusus | Trust brand-specific yang kuat | “RADJA AC tercantum di daftar Toko Offline Proshop Gree Indonesia.” | “Listing resmi Proshop Gree RADJA AC Purwokerto” | Klaim ini bisa dipakai aman karena diverifikasi publik di situs resmi Gree Indonesia, lengkap dengan alamat. citeturn30view3 |
| Garansi teknisi 1 bulan | Katalog, terutama `ac-inverter`, area page, CTA support section | Mengurangi kekhawatiran pemasangan | “Untuk pekerjaan pemasangan tertentu, tersedia garansi teknisi 1 bulan.” | “Dokumentasi pemasangan AC RADJA AC” | Publik sudah menampilkan klaim ini pada snippet katalog inverter; **konfirmasi operasional bulanan** sebelum dipasang sitewide. citeturn23search6 |
| Konsultasi PK | Homepage, Area, Katalog, Kalkulator, Artikel, Brand | Menjembatani pengguna dari riset ke lead | “Sebelum pilih unit, admin bantu hitung kebutuhan PK awal dari ukuran ruangan dan daya listrik.” | “Konsultasi kebutuhan PK AC oleh RADJA AC” | Bukti publik kuat di homepage, area, kalkulator, dan artikel. citeturn3search6turn23search10turn3search1turn31search4 |
| Bukti pengiriman luar kota | Area page, B2B, Proof page | Menjawab keraguan layanan luar Banyumas | “Untuk area luar kota, RADJA AC bantu pengiriman unit dan koordinasi opsi pemasangan sesuai kebutuhan.” | “Bukti pengiriman unit AC RADJA AC ke [kota]” | Hanya gunakan nama kota pada alt/copy jika dokumentasinya memang kota tersebut. |
| Sertifikat dealer / brand lain | Brand page, Tentang Kami, Homepage | Mengangkat trust supply chain | “Dokumen pendukung brand ditampilkan sesuai status yang masih berlaku.” | “Dokumen pendukung brand AC di RADJA AC” | Hanya tampilkan sertifikat yang masih valid dan bisa diverifikasi; jangan generalisasi semua brand. |
| Bantuan klaim unit / garansi resmi | Brand, Kontak, FAQ, B2B | Menjawab post-sale anxiety | “Admin bantu arahkan proses klaim unit sesuai jalur garansi yang berlaku.” | “Bantuan klaim unit AC oleh RADJA AC” | **Asumsi operasional** dari owner; tampilkan hanya setelah owner mengonfirmasi prosedurnya aktif. |

### Aturan untuk Assistant/Codex

- Setiap area page harus punya **minimal satu trust block** yang menegaskan basis RADJA AC di Banyumas dan satu jalur ke proof page.
- Setiap B2B page harus punya **proof module** sebelum CTA terakhir.
- `brand/gree` wajib jadi rumah utama untuk trust claim Proshop Gree.
- Untuk brand lain, gunakan copy aman seperti “original”, “bergaransi”, “bisa cek stok”, kecuali ada bukti status resmi yang valid.
- Alt text harus mendeskripsikan **aktivitas nyata**, bukan keyword stuffing.
- Jika aset visual belum tersedia untuk kota target, gunakan proof generik perusahaan + copy aman, **bukan** foto generik yang dibuat seolah-olah di kota target.

### Jangan Dilakukan

- Jangan klaim punya showroom di Semarang, Solo, Yogyakarta, atau kota lain jika basis fisik yang terverifikasi hanya di Banyumas.
- Jangan pakai review/rating palsu.
- Jangan pakai sertifikat brand yang masa berlakunya tidak jelas.
- Jangan overclaim “dealer resmi” untuk semua brand.
- Jangan jadikan Google Maps review sebagai trust utama sebelum strategi nomor dan listing diputuskan.
- Jangan menempelkan trust proof jauh di bawah halaman sampai tidak ikut mendukung CTA utama.

### Contoh Implementasi

**Homepage trust strip**

> “RADJA AC berbasis di Pamijen, Sokaraja, Banyumas dan membantu pembelian AC original multi-brand untuk rumah, kost, toko, kantor, hotel, dan proyek di Pulau Jawa. Admin bantu cek PK, stok unit, pengiriman, dan opsi pemasangan.”

Copy ini aman karena menggambarkan basis fisik dan cakupan layanan tanpa berpura-pura punya toko di semua kota. Basis Banyumas dan positioning Pulau Jawa sama-sama terlihat publik di halaman kontak dan homepage. citeturn6search0turn3search6

**Area page safe trust copy**

> “Basis RADJA AC ada di Pamijen, Sokaraja, Banyumas. Untuk kebutuhan area Yogyakarta, admin bantu konsultasi PK, cek stok unit, pengiriman, dan koordinasi opsi pemasangan sesuai kebutuhan.”

**Gree proof card**

> “RADJA AC tercantum di daftar Toko Offline Proshop Gree Indonesia. Jika Anda sedang membandingkan Gree untuk rumah, kost, atau proyek, admin bisa bantu cek stok dan pilihan tipenya.”

Copy ini hanya untuk konteks Gree. citeturn30view3

**B2B proof module**

- Judul: “Bukti Pengiriman dan Penanganan Banyak Unit”
- Isi: 6–12 foto proyek/pengiriman nyata
- CTA: “Kirim Brief Proyek ke Admin”
