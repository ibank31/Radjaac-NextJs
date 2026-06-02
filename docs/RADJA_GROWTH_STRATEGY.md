# RADJA AC Growth Strategy

Dokumen ini adalah strategi pertumbuhan aktif RADJA AC untuk SEO lokal, ekspansi area, B2B/proyek, dan lead WhatsApp.

Source repo terbaru tetap menjadi sumber kebenaran teknis. Dokumen ini mengarahkan prioritas ekspansi, bukan menggantikan audit source, GSC, GA4, atau live production.

## Misi Besar

RADJA AC membangun website sebagai mesin lead untuk:
- pembelian AC rumah dan usaha
- katalog AC multi-brand
- area lokal dan regional
- pengadaan AC banyak unit
- WhatsApp lead yang bisa diukur

Fokus utama bukan sekadar traffic, tetapi lead berkualitas yang masuk melalui WhatsApp.

## Basis Authority

Basis kepercayaan RADJA AC tetap:
- Purwokerto
- Banyumas
- Sokaraja
- showroom/gudang Pamijen, Sokaraja, Banyumas
- bukti pengiriman/proyek
- konsultasi PK
- cek stok
- pengiriman unit
- opsi pemasangan yang dikonfirmasi

Homepage tetap brand hub. Jangan mengubah homepage menjadi city-money-page tunggal.

## Prinsip Ekspansi

Ekspansi memakai dua cincin:

1. Cincin dekat untuk retail-area capture:
   - Banyumas Raya
   - Jawa Tengah
   - DI Yogyakarta

2. Cincin jauh untuk B2B/proyek:
   - Jawa Barat
   - Banten
   - DKI Jakarta
   - Jawa Timur

Kota besar jauh penting, tetapi tidak boleh diserang dengan retail page biasa sebelum trust, proof, B2B assets, dan data lead cukup kuat.

## Area Aktif Saat Ini

Area lokal dan regional yang sudah ada di source repo terbaru:
- `/jual-ac-purwokerto`
- `/jual-ac-banyumas`
- `/jual-ac-sokaraja`
- `/jual-ac-jatilawang`
- `/jual-ac-cilongok`
- `/jual-ac-ajibarang`
- `/jual-ac-baturraden`
- `/jual-ac-wangon`
- `/jual-ac-karanglewas`
- `/jual-ac-kembaran`
- `/jual-ac-patikraja`
- `/jual-ac-rawalo`
- `/jual-ac-yogyakarta`
- `/jual-ac-semarang`
- `/jual-ac-solo`
- `/jual-ac-purbalingga`
- `/jual-ac-cilacap`
- `/jual-ac-kroya`
- `/jual-ac-majenang`
- `/jual-ac-sidareja`
- `/jual-ac-kesugihan`
- `/jual-ac-adipala`
- `/jual-ac-kebumen`
- `/jual-ac-tegal`
- `/jual-ac-banjarnegara`

Kalau daftar ini berubah, cek `content/routes.js`, `content/areas.js`, sitemap live, dan live 200.


## Retail Area Priority

Kota yang layak untuk retail-area page atau polish serius:
- Purwokerto
- Banyumas
- Sokaraja
- Semarang
- Yogyakarta
- Solo
- Cilacap
- Kebumen
- Tegal
- Purbalingga
- Banjarnegara
- Magelang

Prioritas dekat:
1. Pertahankan Purwokerto/Banyumas/Sokaraja sebagai fondasi trust.
2. Perkuat Banyumas ring: Ajibarang, Baturraden, Wangon, Karanglewas, Kembaran, Patikraja, Rawalo.
3. Polish regional yang sudah live sebelum membuat banyak kota baru.
4. Cilacap sudah live sebagai hub regional; child Cilacap seperti Kroya, Majenang, Sidareja, Kesugihan, dan Adipala harus tetap diperlakukan sebagai child, bukan semua dipromosikan setara homepage.

## B2B-First Priority

Kota besar yang lebih aman masuk lewat B2B/proyek dulu:
- Bandung
- Bekasi
- Tangerang
- Tangerang Selatan
- Jakarta Barat
- Jakarta Selatan
- Jakarta Utara
- Jakarta Timur
- Jakarta Pusat
- Surabaya
- Malang
- Karawang
- Purwakarta
- Cilegon

Untuk kota ini, jangan membuat retail page generik yang seolah-olah RADJA AC punya toko lokal di sana. Gunakan angle:
- pengadaan unit AC original
- kantor/ruko/proyek
- hotel/guest house/kost banyak unit
- pengiriman unit
- konsultasi spesifikasi
- koordinasi instalasi bila memungkinkan
- brief via WhatsApp

## Coverage-Only / Mention Dulu

Area yang lebih aman disebut sebagai coverage dulu:
- Sleman
- Bantul
- Kulon Progo
- Gunungkidul
- Kudus
- Jepara
- Tasikmalaya
- Sukabumi
- Kediri
- Madiun
- Sidoarjo
- Gresik
- Jember
- Pasuruan
- Mojokerto

Jangan buat halaman tipis untuk area coverage-only. Sebut di halaman induk yang lebih kuat jika relevan.

## Tunda Build

Jangan dibuat dulu kecuali ada data GSC/lead/proof yang kuat:
- retail Jakarta generik
- retail Surabaya generik
- retail Bandung generik
- retail Tangerang generik
- halaman kabupaten kecil yang hanya swap nama
- kota jauh yang tidak punya pembeda intent
- area yang hanya akan menjadi doorway page

## Positioning Aman

Untuk area tanpa toko fisik RADJA AC, gunakan framing:
- cek stok
- konsultasi PK
- pengiriman unit
- opsi pemasangan
- kebutuhan rumah/toko/kost/kantor/banyak unit
- pembayaran fleksibel COD, DP, atau transfer

Jangan gunakan framing palsu:
- toko AC [kota] bila tidak ada toko fisik di kota itu
- cabang [kota]
- showroom [kota]
- pemasangan pasti semua area
- ready semua tipe
- termurah

## Syarat Sebelum Ekspansi Jauh

Sebelum masuk kota besar jauh seperti Bandung, Jakarta, Tangerang, Surabaya:
- tracking WA harus stabil
- `generate_lead` terbaca di GA4
- area inti punya data GSC
- trust/proof page kuat
- B2B page dan katalog komersial siap
- CTA B2B jelas
- internal link tidak berantakan
- tidak ada route/redirect collision

## Decision Gates

Sebelum ekspansi, tambah area, atau membuat halaman baru, assistant wajib mengecek:
- source repo terbaru
- halaman yang sudah live
- sitemap dan internal link
- GSC pages/queries jika tersedia
- GA4 `whatsapp_click` dan `generate_lead` jika relevan
- proof/trust yang mendukung klaim area
- risiko doorway, konten kurang kuat, dan klaim lokal palsu
- apakah ide sudah tercakup di source strategy lama atau belum

Jika ide owner belum ada di dokumen/source:
- jangan langsung eksekusi
- audit source dan live dulu
- cari sumber/data tambahan jika menyangkut pasar, kompetitor, SERP, tren, atau kondisi yang bisa berubah
- baru putuskan: build, polish, hold, B2B-first, coverage-only, redirect, atau wait

Ekspansi boleh lanjut jika:
- intent buyer jelas
- halaman bisa unik
- internal link siap
- trust/proof cukup
- tracking lead bisa diukur
- risiko klaim lokal rendah

Ekspansi harus ditahan jika:
- hanya swap nama area
- template inti belum bersih
- GSC/GA4 belum memberi sinyal cukup
- operasional/proof belum mendukung
- kota terlalu jauh dan lebih cocok B2B-first
- perubahan melebar tanpa verifikasi

## Cara Memilih Next Page

Jangan memilih next page hanya dari feeling.

Gunakan gabungan:
- GSC queries
- GSC pages
- indexed/not indexed status
- GA4 `whatsapp_click`
- GA4 `generate_lead`
- kualitas chat WA
- kedekatan operasional
- risiko klaim lokal
- kekuatan internal link
- kesiapan proof/trust

Keputusan page:
- build jika intent jelas, proof cukup, dan page bisa unik
- polish jika URL sudah live tapi belum kuat
- hold jika risiko konten kurang kuat/copy tinggi
- B2B-first jika kota besar/kompetitif
- coverage-only jika area terlalu kecil atau terlalu jauh
- redirect jika URL lama sudah kalah intent dengan halaman final

## Roadmap Aktif

Fokus saat ini:
1. Jaga Purwokerto/Banyumas/Sokaraja sebagai fondasi.
2. Pastikan area Banyumas ring live, aman, dan terhubung.
3. Pantau GSC dan GA4 setelah tracking WA beres.
4. Perkuat internal link untuk halaman prioritas.
5. Audit/polish Cilacap dengan checklist penuh sebelum ekspansi area baru.
6. Jangan ekspansi metro besar sebelum data GSC + WA lead lebih matang.

## Prinsip Berhenti

Jangan lanjut ekspansi kalau:
- template inti belum bersih
- GSC belum memberi sinyal
- WA tracking belum terbaca
- internal link belum jelas
- halaman baru hanya copy nama area
- bukti/trust belum cukup untuk klaim area jauh
