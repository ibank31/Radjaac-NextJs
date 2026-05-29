# Area Batch Source Audit

Status: working audit
Scope: remaining live sitemap area gaps
Target URLs:
- /jual-ac-yogyakarta
- /jual-ac-semarang
- /jual-ac-solo
- /jual-ac-purbalingga
- /jual-ac-cilacap
- /jual-ac-kebumen
- /jual-ac-tegal
- /jual-ac-banjarnegara


## Area Blueprint

Source: `docs/source/radjaac/RADJAAC_AREA_PAGE_BLUEPRINT.md`

9:Menjadi standar baku halaman ` /jual-ac-{area}` agar halaman area tetap jujur, unik, tidak copy-paste, dan tetap kuat untuk mengubah search intent lokal menjadi lead WhatsApp berkualitas.
11:Blueprint ini memakai prinsip people-first content, title/H1 yang sinkron, serta menghindari doorway/scaled page. Google secara eksplisit menyebut doorway pages merusak pengalaman pengguna, scaled low-value pages dapat dianggap spam, dan title link sebaiknya jelas sesuai judul utama halaman. Snippet area RADJA AC yang relatif aman saat ini juga sudah bergerak ke pola “konsultasi PK, cek stok, harga unit, dan opsi pengiriman/pemasangan” alih-alih klaim toko fisik lokal. citeturn36search0turn15search4turn36search1turn15search2turn27search1turn27search2turn27search3
15:- Fungsi utama halaman area adalah **money page lokal yang aman**, bukan halaman artikel.
18:- Satu halaman area wajib punya blok unik yang benar-benar relevan dengan kota tersebut.
19:- Halaman area harus mendorong user ke **WhatsApp dengan brief yang lebih lengkap**, bukan sekadar klik kosong.
25:| Hero / above the fold | Menangkap intent transaksi lokal | Kalimat utama: “Butuh AC untuk rumah, kost, toko, kantor, atau proyek di {Kota}? RADJA AC bantu cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan.” | Hindari opening “kami bukan toko di kota ini” yang terlalu defensif |
26:| H1 pattern | Menyamakan intent + value proposition | `Jual AC {Kota} | Cek Stok, Konsultasi PK, Pengiriman & Opsi Pemasangan` | H1 jangan generik seperti “Toko AC Purwokerto” di halaman area luar |
27:| Title pattern | CTR + konsistensi SERP | `Jual AC {Kota} | Cek Stok, Konsultasi PK & Opsi Pasang` | Jaga erat dengan H1 agar Google tidak rewrite ke judul generik |
28:| Meta pattern | Memperjelas value prop | `Butuh AC untuk rumah, kost, toko, kantor, atau proyek di {Kota}? RADJA AC bantu cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan via WhatsApp.` | Jangan tulis harga pasti jika stok/harga berubah |
29:| Opening copy | Menjelaskan posisi bisnis | “RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area {Kota} untuk cek stok, rekomendasi PK, pengiriman unit, dan opsi pemasangan sesuai kebutuhan.” | Ini adalah pola copy aman untuk semua kota target |
33:| Blok pengiriman/pemasangan | Menjawab pertanyaan paling sensitif | Jelaskan unit only, pengiriman, dan opsi pemasangan terkoordinasi | Jangan janji teknisi lokal permanen jika belum ada |
34:| Trust proof | Menambah kepercayaan | Basis Banyumas, foto stok/gudang, foto pengiriman/pemasangan yang nyata, jam layanan, merek resmi yang dijual | Jangan pakai testimonial/proyek palsu |
36:| Internal link wajib | Mengarahkan user ke money page lain | Minimal ke ` /kalkulator-pk-ac`, ` /katalog`, 2–3 brand page, 1 kategori, dan 1 halaman B2B yang relevan | Wajib berbeda sesuai kota |
37:| CTA pattern | Menghasilkan lead berkualitas | CTA utama: `Chat WhatsApp untuk cek stok AC {Kota}`; CTA sekunder: `Kirim ukuran ruangan & daya listrik` | Satu primary CTA yang dominan, bukan lima CTA sejajar |
38:| Aturan anti-thin content | Menjaga kualitas | Tiap area page wajib punya: opening unik, demand kota unik, use case unik, FAQ unik, link unik, dan CTA unik | Struktur boleh sama; isi bisnisnya harus beda |
42:- Semua area page mengikuti H1/title/meta pattern baku di atas.
44:- Copy area page harus fokus pada **konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan**.
45:- Jika satu area page tidak punya 5 blok unik, jangan publish.
46:- CTA WA harus meminta data: area, ukuran ruangan, daya listrik, jumlah unit, dan butuh pemasangan atau tidak.
47:- Halaman area wajib link ke halaman yang bisa menutup lead: katalog, kalkulator, brand, atau B2B.
49:**Jangan Dilakukan**
51:- Jangan klaim punya toko fisik, showroom, atau cabang di kota target jika tidak ada bukti.
52:- Jangan copy-paste body lalu hanya ganti nama kota.
53:- Jangan memulai halaman dengan narasi yang melemahkan seperti “walaupun kami dari Purwokerto…”.
54:- Jangan isi halaman area dengan paragraf geografis umum yang tidak menolong pembeli AC.
55:- Jangan membuat halaman area menjadi artikel edukasi panjang yang kehilangan CTA.
59:| URL | H1 | Title | Meta Lead | CTA Utama | Sudut Unik |
61:| `/jual-ac-semarang` | `Jual AC Semarang | Cek Stok, Konsultasi PK, Pengiriman & Opsi Pemasangan` | `Jual AC Semarang | Cek Stok, Konsultasi PK & Opsi Pasang` | Fokus rumah, kantor/ruko, developer, dan pengadaan banyak unit area Semarang | `Chat WA untuk cek stok AC Semarang` | Tekankan kantor, ruko, proyek ringan, dan hotel kecil |
62:| `/jual-ac-yogyakarta` | `Jual AC Yogyakarta | Untuk Kost, Hotel, Rumah & Usaha` | `Jual AC Yogyakarta | Cek Stok, Konsultasi PK & Opsi Pasang` | Cocok untuk kost, guest house, rumah, cafe, dan kebutuhan banyak unit area Yogyakarta | `Chat WA: kirim jumlah kamar/ruangan` | Tekankan kost, guest house, hotel kecil, kampus |
63:| `/jual-ac-solo` | `Jual AC Solo | Rumah, Kost, Hotel Kecil & Kantor` | `Jual AC Solo | Cek Stok AC, Konsultasi PK & Opsi Pasang` | Untuk rumah baru, kost, kantor kecil, toko, dan hospitality area Solo | `Chat WA: tanya rekomendasi PK Solo` | Tekankan kost, hotel kecil, toko, kantor |
64:| `/jual-ac-cilacap` | `Jual AC Cilacap | Cek Stok, Harga Unit & Opsi Pemasangan` | `Jual AC Cilacap | Konsultasi PK, Cek Stok & Opsi Pasang` | Untuk rumah, toko/usaha, kantor, dan kebutuhan banyak unit area Cilacap | `Chat WA: kirim kecamatan di Cilacap` | Tekankan lead cepat, logistik dekat, kebutuhan usaha |
65:| `/jual-ac-kebumen` | `Jual AC Kebumen | Konsultasi PK, Cek Stok & Opsi Pasang` | `Jual AC Kebumen | Cek Stok AC untuk Rumah, Kost & Usaha` | Untuk rumah, kost kecil, toko, ruko, dan kantor area Kebumen | `Chat WA: kirim ukuran ruangan Kebumen` | Tekankan rumah, kost, usaha kecil, keputusan cepat |
67:**Pola copy aman yang dipakai di semua area page**
69:- Dipakai: `RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area {Kota} untuk konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai kebutuhan rumah, kost, toko, kantor, atau proyek.`
70:- Jangan dipakai: `RADJA AC adalah toko AC {Kota} terdekat`, `cabang resmi {Kota}`, atau frasa lain yang mengesankan lokasi fisik yang tidak ada.

## Market Map Jawa

Source: `docs/source/radjaac/RADJAAC_MARKET_MAP_JAWA.md`

9:Menentukan urutan kota/area di Pulau Jawa yang paling layak dikerjakan untuk SEO dan lead WhatsApp RADJA AC, sambil menjaga posisi bisnis tetap jujur: basis fisik di Banyumas, tetapi melayani kebutuhan AC kota-kota target lewat konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan.
13:- Tier adalah **urutan build SEO**, bukan ranking omzet nasional.
14:- Kota dekat Banyumas dan koridor DIY–Jawa Tengah dinaikkan lebih dulu bila demand cukup dan risiko logistik lebih rendah.
15:- Kota besar dengan demand raksasa tetapi kompetisi lokal sangat padat masuk **Tier 2**, bukan karena jelek, tetapi karena lebih berat untuk dimenangkan sekarang.
16:- Untuk kota yang tidak punya toko fisik RADJA AC, positioning aman adalah **“cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan ke [kota]”**, bukan “toko AC [kota]”.
17:- Tier 3 cukup disebut di halaman area induk, halaman B2B, atau bagian cakupan layanan sampai proof/logistik siap.
19:Tingkat prioritas di bawah disusun dari gabungan skala pasar Jawa, sinyal hospitality/pendidikan di kota-kota kunci, dan snapshot SERP. Kota besar seperti Yogyakarta, Bandung, Surabaya, Jakarta, Bekasi, dan Tangerang memperlihatkan kompetisi yang padat dari dealer lokal/authorized dealer; sebaliknya, SERP Cilacap, Kebumen, Tegal, Magelang, dan Cirebon masih lebih terfragmentasi sehingga lebih winnable untuk fase awal. Yogyakarta juga kuat untuk segmen kost dan hospitality karena APK perguruan tinggi DIY sangat tinggi dan okupansi hotelnya tetap aktif; Semarang dan Surakarta juga punya sinyal pendidikan/hotel yang jelas. citeturn11search0turn7search0turn6search15turn7search6turn7search9turn7search15turn18search8turn18search16turn20search0turn20search5turn18search10turn21search7turn21search10turn21search19turn39search0turn39search1
23:| Kota/Area | Provinsi | Tier | Demand Utama | Potensi Lead | Kompetisi | Risiko Logistik | Risiko Klaim Lokal | URL Ideal | Positioning Aman | CTA Utama | Prioritas |
25:| Semarang | Jawa Tengah | Tier 1 | Rumah; kantor/ruko; developer; instansi; hotel | Tinggi | Tinggi | Sedang | Tinggi | `/jual-ac-semarang` | Dealer AC original multi-brand dari Banyumas untuk konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan ke Semarang | `Chat WA: kirim ukuran ruangan + area + butuh pasang/tidak` | P1 |
26:| Yogyakarta | DIY | Tier 1 | Kost; hotel/guest house; rumah; kampus; villa/homestay | Tinggi | Tinggi | Sedang | Tinggi | `/jual-ac-yogyakarta` | RADJA AC bantu cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan ke Yogyakarta | `Chat WA: kirim lokasi proyek + jumlah unit` | P1 |
27:| Solo | Jawa Tengah | Tier 1 | Kost; hotel; rumah; toko/usaha; kantor | Tinggi | Sedang–Tinggi | Sedang | Sedang–Tinggi | `/jual-ac-solo` | Dealer AC dari Banyumas untuk kebutuhan rumah, kost, hotel kecil, toko, dan kantor area Solo | `Chat WA: tanya stok + rekomendasi PK` | P1 |
28:| Cilacap | Jawa Tengah | Tier 1 | Rumah; toko/usaha; kantor; proyek ringan | Tinggi | Sedang | Rendah | Rendah | `/jual-ac-cilacap` | Cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan ke Cilacap | `Chat WA: kirim kecamatan + kebutuhan unit` | P1 |
29:| Kebumen | Jawa Tengah | Tier 1 | Rumah; kost; toko/usaha; kantor | Menengah–Tinggi | Sedang–Rendah | Rendah | Rendah | `/jual-ac-kebumen` | RADJA AC melayani kebutuhan AC Kebumen dengan konsultasi PK, pengiriman unit, dan opsi pemasangan | `Chat WA: kirim ukuran ruangan + daya listrik` | P1 |
30:| Tegal/Slawi | Jawa Tengah | Tier 1 | Rumah; toko/usaha; kantor; proyek kecil | Menengah–Tinggi | Sedang | Sedang | Sedang | `/jual-ac-tegal` | Supplier AC original dari Banyumas untuk area Tegal/Slawi dengan cek stok dan opsi pemasangan | `Chat WA: kirim area Tegal/Slawi + kebutuhan` | P1 |
31:| Magelang | Jawa Tengah | Tier 1 | Hotel/guest house; rumah; toko; instansi | Menengah–Tinggi | Sedang | Sedang | Sedang | `/jual-ac-magelang` | RADJA AC bantu pengadaan unit, konsultasi PK, pengiriman, dan opsi pemasangan ke Magelang | `Chat WA: kirim jenis bangunan + jumlah ruangan` | P1 |
32:| Cirebon | Jawa Barat | Tier 1 | Rumah; toko/ruko; hotel kecil; kantor | Menengah–Tinggi | Sedang | Sedang | Sedang–Tinggi | `/jual-ac-cirebon` | Dealer AC multi-brand dari Banyumas untuk kebutuhan AC rumah, usaha, dan hotel kecil area Cirebon | `Chat WA: kirim area Cirebon + tipe kebutuhan` | P1 |
33:| Purbalingga | Jawa Tengah | Tier 2 | Rumah; kost; toko/usaha | Menengah | Rendah–Sedang | Rendah | Rendah | `/jual-ac-purbalingga` | Pertahankan sebagai koridor inti, tetapi bukan fokus ekspansi baru | `Chat WA: cek stok hari ini` | P2 |
34:| Purworejo | Jawa Tengah | Tier 2 | Rumah; toko/usaha; proyek kecil | Menengah | Rendah–Sedang | Sedang | Rendah | `/jual-ac-purworejo` | Konsultasi PK, pengiriman unit, dan opsi pemasangan ke Purworejo | `Chat WA: kirim ukuran ruangan` | P2 |
35:| Pekalongan | Jawa Tengah | Tier 2 | Rumah; toko/usaha; hotel kecil | Menengah | Sedang | Sedang | Sedang | `/jual-ac-pekalongan` | RADJA AC bantu kebutuhan rumah dan usaha area Pekalongan tanpa klaim toko fisik lokal | `Chat WA: tanya stok + ongkir` | P2 |
36:| Bandung | Jawa Barat | Tier 2 | Rumah; kantor/ruko; hotel; cafe/resto | Tinggi | Sangat Tinggi | Tinggi | Sangat Tinggi | `/jual-ac-bandung` | Positioning supply-first: cek stok, konsultasi PK, kirim unit, opsi pemasangan terkoordinasi | `Chat WA: kirim kebutuhan unit + timeline` | P2 |
37:| Bekasi | Jawa Barat | Tier 2 | Perumahan; ruko; developer; kantor | Sangat Tinggi | Sangat Tinggi | Tinggi | Sangat Tinggi | `/jual-ac-bekasi` | Fokus ke supply unit original + koordinasi kebutuhan proyek ringan | `Chat WA: kirim jumlah unit + alamat area` | P2 |
38:| Jakarta | DKI Jakarta | Tier 2 | Kantor; apartemen; hotel; instansi; developer | Sangat Tinggi | Sangat Tinggi | Sangat Tinggi | Sangat Tinggi | `/jual-ac-jakarta` | Bukan “toko AC Jakarta”; pakai positioning dealer dari Banyumas untuk cek stok, supply, dan opsi instalasi | `Chat WA: kirim brief proyek/ruangan` | P2 |
39:| Tangerang Raya | Banten | Tier 2 | Perumahan; kantor; ruko; developer | Sangat Tinggi | Sangat Tinggi | Tinggi | Sangat Tinggi | `/jual-ac-tangerang` | Supply AC original multi-brand untuk area Tangerang/Tangsel dengan opsi pemasangan | `Chat WA: kirim area + butuh pasang/tidak` | P2 |
40:| Surabaya | Jawa Timur | Tier 2 | Rumah; kantor; hotel; developer | Sangat Tinggi | Sangat Tinggi | Sangat Tinggi | Sangat Tinggi | `/jual-ac-surabaya` | Fokus B2B ringan dan supply unit, bukan klaim toko lokal | `Chat WA: kirim jumlah ruangan/proyek` | P2 |
41:| Malang | Jawa Timur | Tier 2 | Kost; hotel; rumah; cafe/resto; kampus | Tinggi | Tinggi | Tinggi | Tinggi | `/jual-ac-malang` | Supplier AC multi-brand untuk kost, hospitality, rumah, dan usaha area Malang | `Chat WA: kirim tipe bangunan + jumlah kamar` | P2 |
42:| Sidoarjo/Gresik | Jawa Timur | Tier 3 | Proyek; kantor; gudang ringan; usaha | Menengah–Tinggi | Tinggi | Sangat Tinggi | Tinggi | `/jual-ac-sidoarjo` | Sebut dulu di halaman B2B/proyek, belum wajib area page | `Chat WA proyek` | P3 |
43:| Serang/Cilegon | Banten | Tier 3 | Instansi; pabrik/gudang; kantor | Menengah | Tinggi | Sangat Tinggi | Tinggi | `/jual-ac-serang` | Masuk coverage B2B dulu, bukan area page prioritas sekarang | `Chat WA proyek` | P3 |
45:Keputusan paling penting dari tabel ini: **Jabodetabek, Bandung, dan Surabaya sengaja ditahan di Tier 2** walaupun pasarnya raksasa. Alasannya bukan demand kurang, melainkan karena kompetisi lokal sudah sangat padat dan footprint SERP RADJA AC sendiri masih belum cukup konsisten non-lokal. Sebaliknya, koridor **Semarang–Solo–Yogyakarta–Cilacap–Kebumen–Tegal–Magelang–Cirebon** lebih sehat untuk membangun authority Jawa yang kredibel dari Banyumas. citeturn20search0turn20search5turn20search9turn20search13turn18search16turn18search10turn22search0turn22search1turn22search4turn23search10turn39search0turn39search1
49:- Buat halaman area baru **hanya** untuk Tier 1 lebih dulu.
50:- Tier 2 baru dinaikkan setelah template area page, internal link, dan CTA WA Tier 1 sudah stabil.
51:- Tier 3 tidak dibuat sebagai halaman sendiri kecuali ada bukti kebutuhan lead atau proof proyek.
53:- Satu kota = satu sudut intent utama; jangan tumpuk rumah, hotel, proyek, dan instansi menjadi halaman yang kabur.
54:- Kota yang lebih cocok untuk B2B berat boleh disebut dulu di halaman segmen proyek sebelum dibuat area page.
56:**Jangan Dilakukan**
58:- Jangan membuat puluhan halaman ` /jual-ac-{area}` sekaligus hanya karena nama kota tersedia.
59:- Jangan menaikkan Jakarta/Bandung/Surabaya ke prioritas eksekusi awal sebelum snippet brand/katalog RADJA AC sendiri lebih rapi.
60:- Jangan menurunkan Semarang, Solo, atau Yogyakarta ke Tier 2; tiga kota ini adalah jangkar ekspansi Jawa Tengah–DIY.
61:- Jangan pakai klaim “toko AC [kota]” pada kota yang tidak punya lokasi fisik publik.
62:- Jangan gabungkan area yang berbeda intent ke satu slug aneh seperti ` /jual-ac-jateng`.
66:| Target | URL | Judul Disarankan | CTA Utama |
68:| Hub Jateng utara–tengah | `/jual-ac-semarang` | `Jual AC Semarang | Cek Stok, Konsultasi PK & Opsi Pasang` | `Chat WA untuk cek stok area Semarang` |
69:| Hub hospitality + kost | `/jual-ac-yogyakarta` | `Jual AC Yogyakarta | Untuk Kost, Hotel, Rumah & Usaha` | `Chat WA: kirim jumlah kamar/ruangan` |
70:| Hub B2B ringan Solo Raya | `/jual-ac-solo` | `Jual AC Solo | Rumah, Kost, Hotel Kecil & Kantor` | `Chat WA: tanya rekomendasi PK` |
71:| Jalur lead paling dekat uang | `/jual-ac-cilacap` | `Jual AC Cilacap | Cek Stok, Harga Unit & Opsi Pemasangan` | `Chat WA: kirim kecamatan + kebutuhan` |
72:| Jalur lead paling mudah dimenangkan | `/jual-ac-kebumen` | `Jual AC Kebumen | Konsultasi PK, Cek Stok & Opsi Pasang` | `Chat WA: kirim ukuran ruangan` |

## Java Expansion By Province

Source: `docs/source/radjaac/RADJAAC_JAVA_EXPANSION_BY_PROVINCE.md`

11:Dokumen ini menjadi acuan ekspansi Pulau Jawa untuk memilih provinsi, kota, jenis halaman, dan urutan deploy. Isinya memisahkan mana yang cocok untuk **retail area page**, mana yang lebih sehat sebagai **B2B/proyek**, mana yang baru layak sebagai **sebutan area pengiriman**, dan mana yang jelas harus ditunda. Dokumen ini juga menjaga agar ekspansi Jawa tidak merusak fondasi lokal Purwokerto/Banyumas yang saat ini tetap menjadi basis kepercayaan RADJA AC. Basis keputusan terutama berasal dari snapshot SERP aktual dan temuan bahwa beberapa halaman non-Purwokerto RADJA AC masih dicemari boilerplate Purwokerto, sehingga rollout harus bertahap dan disiplin. citeturn34view0turn34view1turn34view2turn34view3turn34view4turn35view1
15:- Urutan ekspansi provinsi harus mengikuti **dua cincin**: cincin dekat untuk retail-area capture, lalu cincin jauh untuk B2B/proyek. Dari basis Banyumas, itu berarti **Jawa Tengah dan DIY lebih dulu**, baru kemudian provinsi barat/timur yang lebih kompetitif. citeturn22search1turn22search3turn23search2turn26search1turn26search4
16:- Kota besar jauh tidak boleh menjadi alasan melupakan quick win regional. Cilacap, Kebumen, Tegal, Purbalingga, dan Banjarnegara lebih memungkinkan mendatangkan lead lebih cepat dibanding memaksa Bandung atau Surabaya sekarang. citeturn2search19turn3search0turn3search1turn3search2turn3search3
17:- Metro seperti Bandung, Bekasi, Tangerang, Jakarta, dan Surabaya tetap penting, tetapi entry point-nya harus **B2B-first** karena struktur kompetitor di sana sudah matang: showroom resmi, distributor, commercial AC, hingga proyek. citeturn24view3turn30view1turn18view4turn29view2turn17view3
18:- Sebelum ekspansi jauh, RADJA AC harus membereskan empat fondasi: **snippet/H1 non-local**, **gallery/bukti pengiriman**, **katalog kapasitas menengah-besar**, dan **brand pages yang benar-benar non-lokal**. SERP kompetitor di kota besar menunjukkan bahwa kategori seperti cassette, floor standing, dan commercial AC sering ikut menjadi bukti kompetensi. citeturn34view0turn35view2turn17view3turn18view4turn24view1
19:- Asumsi strategis dokumen ini: pengiriman unit ke Pulau Jawa tetap feasible, sedangkan pemasangan luar kota tetap diposisikan sebagai **opsi** sampai operasionalnya benar-benar pasti. Bila asumsi ini tidak benar, semua kota jauh harus langsung diturunkan ke status B2B-only atau coverage-only.
23:**Urutan ekspansi provinsi**
25:| Provinsi | Peluang Utama | Kota Tier 1 | Kota Tier 2 | B2B Priority | Risiko Utama | Strategi |
27:| Jawa Tengah | Retail regional + kantor/ruko + proyek ringan | Purwokerto, Semarang, Solo, Cilacap, Kebumen, Tegal citeturn21search0turn5search9turn24view1turn2search19turn3search0turn3search1 | Purbalingga, Banjarnegara, Magelang, Pekalongan, Salatiga citeturn3search2turn3search3turn4search0turn29view0turn5search5 | Semarang, Solo, Pekalongan citeturn20search8turn24view1turn29view0 | Kompetisi Semarang/Solo, copy-paste area page, snippet Purwokerto | Provinsi pertama; retail-first + B2B support |
28:| DI Yogyakarta | Retail + hotel/kost + kantor + proyek ringan | Yogyakarta citeturn6search0turn18view2 | Sleman, Bantul citeturn6search15turn6search19 | Yogyakarta, Sleman/Bantul untuk hotel-kost-gedung citeturn25search15turn7search17 | Kompetitor lokal kuat, risk thin bila 5 kabupaten dibuat semua | Satu page Yogya yang sangat kuat, kabupaten sebagai coverage dulu |
30:| Banten | B2B dan komersial yang dekat ke koridor Jabodetabek | Tangerang, Tangerang Selatan, Serang dalam arti “masuk provinsi”, bukan retail langsung citeturn18view4turn27search8turn24view5 | Cilegon citeturn14search2 | Tangerang, Tangsel, Cilegon, Serang citeturn17view5turn27search4turn28search1turn24view5 | Kompetisi dealer resmi, klaim lokal palsu, expectation proyek | B2B-first; retail ditahan |
31:| DKI Jakarta | B2B/proyek, kantor, apartemen, gedung, kontraktor | Tidak ada retail Tier 1 untuk fase ini | Semua wilayah retail ditahan | Jakarta Barat, Jakarta Selatan, Jakarta Utara, Jakarta Timur, Jakarta Pusat citeturn29view2turn33search6turn16search9turn32search2turn32search10 | Kompetisi level metro, showroom banyak, trust gap tinggi | Hanya B2B/proyek setelah asset cukup |
32:| Jawa Timur | B2B/proyek dan komersial kota besar | Tidak ada retail Tier 1 untuk fase ini | Malang sebagai hybrid nanti; lainnya ditahan citeturn24view0 | Surabaya, Malang, Sidoarjo, Gresik citeturn17view3turn24view0turn11search1turn11search2 | Jarak, dealer matang, proyek expectation tinggi | B2B-only setelah fondasi barat/central kuat |
34:**Urutan ekspansi kota**
36:| Kota | Tier | Cocok Untuk | URL Ideal | Angle Utama | CTA | Risiko | Prioritas |
38:| Purwokerto | Tier 1 | Retail inti + local defense | `/jual-ac-purwokerto` | toko fisik, cek stok, pemasangan, basis nyata | `Chat stok AC Purwokerto` | cannibalization lokal | Sekarang |
39:| Banyumas | Tier 2 lokal | Retail support | `/jual-ac-banyumas` bila ada | kabupaten coverage dari basis fisik | `Chat kebutuhan AC Banyumas` | tumpang tindih dengan Purwokerto | Sekarang, tapi polish ringan |
40:| Sokaraja | Tier 2 lokal | Trust page, bukan ekspansi | `/jual-ac-sokaraja` | basis showroom/gudang | `Chat showroom Sokaraja` | thin content | Sekarang untuk trust |
41:| Semarang | Tier 1 | Retail + kantor + proyek ringan | `/jual-ac-semarang` | kirim unit, konsultasi PK, opsi pemasangan | `Cek stok AC ke Semarang` | kompetisi tinggi | Sekarang |
42:| Yogyakarta | Tier 1 | Retail + hotel/kost + kantor | `/jual-ac-yogyakarta` | rumah-kost-hotel-gedung kecil | `Konsultasi AC area Yogya` | local specialists kuat | Sekarang |
43:| Solo | Tier 1 | Retail + kantor + toko + kost | `/jual-ac-solo` | multi-brand, rumah sampai usaha | `Cek stok AC Solo` | dealer resmi kuat | Setelah Semarang |
44:| Cilacap | Tier 1 | Retail regional | `/jual-ac-cilacap` | unit original + pengiriman + opsi pasang | `Tanya stok AC Cilacap` | price-only leads | Sekarang |
45:| Kebumen | Tier 1 | Retail regional | `/jual-ac-kebumen` | rumah, toko, kost kecil | `Chat kebutuhan AC Kebumen` | lead murah | Sekarang |
46:| Tegal | Tier 1 | Retail regional | `/jual-ac-tegal` | rumah, cafe, toko, banyak unit | `Cek stok AC Tegal` | harga-only query | Sekarang |
47:| Purbalingga | Tier 2 | Retail regional | `/jual-ac-purbalingga` | rumah dan usaha kecil | `Chat AC Purbalingga` | butuh copy unik | Setelah ring utama |
48:| Banjarnegara | Tier 2 | Retail regional | `/jual-ac-banjarnegara` | unit only + banyak unit | `Tanya AC Banjarnegara` | volume lebih sempit | Setelah ring utama |
49:| Magelang | Tier 2 | Retail + proyek ringan | `/jual-ac-magelang` | AC baru original, bukan AC bekas/service | `Konsultasi AC Magelang` | banyak SERP service | Setelah ring utama |
50:| Pekalongan | Tier 2 | Retail + kantor/ruko | `/jual-ac-pekalongan` | multi-brand original + kirim unit | `Cek stok AC Pekalongan` | ada dealer resmi | Setelah ring utama |
51:| Salatiga | Tier 3 | Area pengiriman atau page nanti | `/jual-ac-salatiga` nanti | coverage Semarang-Solo corridor | `Chat area Salatiga` | tidak sekuat kota inti | Nanti |
52:| Sleman | Tier 3 | Coverage Yogyakarta | sebut di `/jual-ac-yogyakarta` | area layanan Yogya utara | `Kebutuhan AC Sleman via WA` | duplikasi Yogya | Jangan page dulu |
53:| Bantul | Tier 3 | Coverage Yogyakarta | sebut di `/jual-ac-yogyakarta` | area hotel/kost/rumah | `Kebutuhan AC Bantul via WA` | duplikasi Yogya | Jangan page dulu |
54:| Kulon Progo | Tier 3 | Coverage Yogyakarta | sebut di `/jual-ac-yogyakarta` | pengiriman + opsi pasang | `Kebutuhan AC Kulon Progo` | thin content | Jangan page dulu |
55:| Gunungkidul | Watchlist | Coverage Yogyakarta | sebut di `/jual-ac-yogyakarta` | only mention coverage | `Tanya area Gunungkidul` | thin tinggi | Tunda |
58:| Bogor | Watchlist B2B | kantor/ruko/perumahan | B2B page atau coverage | pengiriman + konsultasi | `Chat kebutuhan AC Bogor` | kompetisi lokal | 90 hari+ |
59:| Cirebon | Tier 3 / retail nanti | retail gateway Jabar timur | `/jual-ac-cirebon` nanti | kirim unit dan stok | `Tanya AC Cirebon` | belum prioritas | 90 hari+ |
64:| Serang | Tier 3 / B2B hybrid | retail nanti + kantor/proyek | `/jual-ac-serang` nanti atau B2B dulu | kirim unit + pengadaan | `Chat AC Serang` | dealer resmi ada | 6 bulan |
66:| Jakarta Barat | B2B-only | ruko, kantor, proyek | B2B page dulu | supplier dan project support | `Kirim kebutuhan AC Jakarta Barat` | kompetisi showroom berat | 6 bulan |
68:| Jakarta Utara | B2B-only | komersial dan proyek | B2B page dulu | proyek, gudang, komersial | `Kirim data proyek Jakarta Utara` | showroom besar | 6 bulan |
76:**Roadmap ekspansi**
80:| 30 hari | Purwokerto, Yogyakarta, Cilacap, Kebumen, Tegal, Banjarnegara | polish area pages | Bersihkan H1/snippet/body pembuka yang masih Purwokerto, perjelas CTA dan trust | Halaman-halaman ini sudah muncul di SERP, jadi impact tercepat datang dari cleanup, bukan dari URL baru citeturn22search1turn22search3turn23search2turn26search1turn26search4turn34view0turn34view4 | copy cleanup, template cleanup, internal link | impresi area naik, CTR naik, snippet lebih bersih |
81:| 30 hari | Semarang | area page baru / rebuild | Build atau rebuild `/jual-ac-semarang` | SERP Semarang sudah dibentuk oleh dealer lokal dan official store, sementara RADJA AC belum tampak sebagai result Semarang yang kuat citeturn5search9turn17view6turn31view0turn26search0 | template area yang bersih, gallery proof, CTA WA area | URL terindeks, query Semarang mulai muncul |
82:| 30 hari | Homepage + Tentang + Bukti Pengiriman | site-level clean up | Selaraskan narasi “dealer multi-brand se-Pulau Jawa” | Saat ini homepage/about/proof masih memunculkan body awal Purwokerto-heavy dan berpotensi mengganggu ekspansi non-lokal citeturn35view1turn35view2turn35view3 | revisi hero, meta, intro, schema | snippet membaik, internal coherence |
83:| 60 hari | Solo, Purbalingga | area pages | Launch/polish Solo dan Purbalingga | Solo adalah kota prioritas besar berikutnya; Purbalingga adalah quick-win regional berikutnya citeturn24view1turn28search2turn3search2 | Semarang live, local proof tertata | impresi baru, WA leads tersegmentasi |
84:| 60 hari | Yogyakarta | B2B support | Tambah support `hotel-guest-house` dan `kost-apartemen` linking kuat dari page Yogya | Jogja punya sinyal kuat untuk hotel/kost/gedung dan kompetitor juga memakainya citeturn18view2turn25search15 | page Yogya bersih | lead B2B dari Yogya |
85:| 60 hari | Katalog | katalog kapasitas / komersial | Perkuat `ac-1-pk`, `ac-1-5-pk`, `ac-2-pk`, siapkan `ac-cassette`, `ac-floor-standing` | Kota kompetitif menampilkan kategori AC non-rumah sebagai bukti kematangan dealer citeturn17view3turn18view4turn24view1 | cluster katalog & internal link | query non-brand/non-area bertambah |
86:| 90 hari | Jawa Tengah utara dan tengah | area pages | Pertimbangkan Magelang, Pekalongan, Salatiga | Ini ring berikutnya setelah area inti stabil citeturn4search0turn29view0turn5search5 | GSC area inti stabil | impresi area tier 2 |
87:| 90 hari | Bandung, Tangerang, Tangsel | B2B pages | Aktivasi B2B-first kota besar | Kompetitor di kota-kota ini menonjol di retail karena showroom resmi; masuk lewat proyek lebih realistis citeturn24view3turn18view4turn17view5turn27search8 | trust proof proyek, katalog komersial | lead B2B, bukan traffic acak |
89:| 6 bulan | Surabaya - Malang | B2B/proyek | Uji ekspansi Jawa Timur via proyek, bukan retail | Distribusi dan dealer resmi di Surabaya-Malang sangat kuat; retail head-on belum efisien citeturn17view3turn24view0 | B2B assets lengkap, komersial katalog | closing rate B2B timur |
91:**Daftar halaman area yang layak dibuat atau dipoles dulu**
93:Prioritas paling awal adalah: `/jual-ac-purwokerto`, `/jual-ac-yogyakarta`, `/jual-ac-cilacap`, `/jual-ac-kebumen`, `/jual-ac-tegal`, `/jual-ac-banjarnegara`, dan `/jual-ac-semarang` sebagai URL baru/rebuild utama. Setelah itu beralih ke `/jual-ac-solo` dan `/jual-ac-purbalingga`. Urutan ini menyeimbangkan antara **defend lokal**, **quick win regional**, dan **satu serangan besar ke kota inti Jawa Tengah**. citeturn35view0turn34view0turn34view1turn34view3turn34view4turn34view2turn5search9turn24view1turn3search2
95:**Daftar halaman B2B yang harus dibuat untuk menopang ekspansi Jawa**
106:**Daftar katalog dan brand yang harus diperkuat sebelum ekspansi jauh**
121:Kompetitor kota besar menampilkan bukti kedalaman kategori dan brand dengan cukup jelas, termasuk commercial AC dan tipe proyek. Tanpa fondasi itu, halaman area jauh akan terlihat dangkal. citeturn17view3turn18view4turn24view1turn24view3turn29view2
123:**Risiko terbesar ekspansi Pulau Jawa**
125:Risiko paling besar bukan “kurang banyak halaman”, tetapi **terlalu cepat memperluas halaman ketika template inti masih salah**. Saat halaman Yogyakarta, Cilacap, Kebumen, Tegal, hingga homepage masih terbaca sebagai “Toko AC Purwokerto”, Google bisa bingung terhadap intent kota dan kualitas ekspansi non-lokal. Risiko besar lain adalah memaksa retail page ke metro yang sudah dipenuhi dealer resmi dan kontraktor beralamat jelas. citeturn34view0turn34view1turn34view3turn34view4turn35view1turn24view3turn18view4turn17view3
127:**Aturan agar ekspansi tidak merusak SEO lokal Purwokerto/Banyumas**
129:Halaman `/jual-ac-purwokerto` harus tetap menjadi halaman lokal utama. Banyumas dan Sokaraja dipakai sebagai penguat trust lokal, bukan diturunkan nilainya demi kota luar. Homepage tetap menjadi brand hub, bukan dipindah menjadi city-money-page. Bukti pengiriman/proyek dan halaman tentang tetap harus menegaskan basis fisik Banyumas sambil menjelaskan bahwa RADJA AC melayani cek stok, pengiriman unit, dan opsi pemasangan ke kota lain. citeturn35view0turn35view1turn35view2turn35view3
134:- Jika kota masuk **Tier 1**, pastikan copy benar-benar unik dan menyebut demand setempat dengan jujur.
135:- Jika kota masuk **B2B-only**, jangan buat retail city page-nya dulu.
136:- Jika kota masuk **Tier 3** atau **Watchlist**, masukkan sebagai coverage area di page yang lebih kuat.
137:- Jangan naik ke Jakarta, Surabaya, Bandung, atau Tangerang sebelum:
138:  - halaman area inti bersih,
139:  - gallery/bukti pengiriman kuat,
141:  - CTA WhatsApp B2B siap.
142:- Jika sebuah halaman area sudah muncul di SERP tetapi fetch-nya masih Purwokerto-heavy, tugas pertama adalah polish, bukan create new page.
144:### Jangan Dilakukan
146:- Jangan ekspansi semua provinsi sekaligus.
147:- Jangan membuat halaman kota Tier 3 sebelum Tier 1 dan Tier 2 stabil.
148:- Jangan membuat retail page untuk Jakarta/Surabaya/Bandung/Tangerang hanya karena “volume besar”.
149:- Jangan mengorbankan Purwokerto/Banyumas yang sudah punya dasar trust.
150:- Jangan menjadikan semua kota sebagai “jual AC + pasang” jika operasional pemasangan belum pasti.
151:- Jangan memakai data kompetitor yang sudah tua lebih dari 3 bulan untuk kota-kota kompetitif.
152:- Jangan membiarkan boilerplate Purwokerto tetap hidup di halaman area luar kota. citeturn34view0turn34view4turn35view1
159:  Fokus: polish lokal, Semarang, Solo, Yogyakarta, quick win regional.
167:- Jawa Tengah: `konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan untuk rumah, toko, kost, kantor, dan banyak unit`
169:- Jawa Barat/Banten: `pengadaan unit AC original multi-brand untuk kantor, ruko, proyek, dan pengiriman unit area kota target`
170:- DKI/Jatim: `supplier/pengadaan AC multi-brand dengan konsultasi spesifikasi, cek stok, pengiriman unit, dan koordinasi instalasi`
174:1. Bersihkan homepage, tentang, dan bukti pengiriman agar tidak lagi terbaca sebagai boilerplate Purwokerto-only. citeturn35view1turn35view2turn35view3
175:2. Polish `/jual-ac-yogyakarta` sampai H1, intro, FAQ, dan CTA benar-benar relevan Yogyakarta. citeturn34view0
176:3. Polish `/jual-ac-cilacap`, `/jual-ac-kebumen`, dan `/jual-ac-tegal` dengan pola yang sama. citeturn34view1turn34view3turn34view4
177:4. Polish `/jual-ac-banjarnegara` agar siap menjadi ring regional berikutnya. citeturn34view2
178:5. Buat atau rebuild `/jual-ac-semarang` sebagai city page besar pertama. citeturn5search9turn31view0
179:6. Siapkan `/jual-ac-solo` sebagai peluncuran berikutnya setelah Semarang. citeturn24view1turn28search2
180:7. Perkuat gallery/bukti pengiriman dengan section yang bisa dipakai lintas kota. citeturn35view2
183:10. Setelah area inti stabil di GSC dan WhatsApp, baru aktifkan B2B-first untuk Bandung, Tangerang/Tangsel, lalu Jakarta/Surabaya. citeturn24view3turn17view5turn29view2turn17view3

## SERP Area Competitor Map

Source: `docs/source/radjaac/RADJAAC_SERP_AREA_COMPETITOR_MAP.md`

11:Dokumen ini menjadi peta keputusan sebelum membuat, memoles, atau menunda halaman `/jual-ac-{area}` di Pulau Jawa. Fokusnya bukan sekadar “kota mana yang punya demand”, tetapi “kota mana yang SERP-nya masih bisa dimasuki secara jujur oleh RADJA AC dengan angle cek stok, konsultasi PK, pengiriman unit, opsi pemasangan, dan lead WhatsApp berkualitas.” Snapshot SERP di bawah dibaca per 28 Mei 2026. Semua keputusan peluang, risiko, dan prioritas adalah inferensi strategis dari pola SERP yang terlihat saat ini. Kompetitor dan pola SERP bisa berubah, sehingga dokumen ini memang harus direfresh bulanan. citeturn2search2turn6search0turn8search1turn11search12turn14search10turn16search6
13:Satu temuan yang sangat penting untuk RADJA AC: beberapa halaman area RADJA AC sudah terindeks, tetapi hasil fetch halaman dan snippet yang tertangkap mesin pencari masih tercemar boilerplate “Toko AC Purwokerto” bahkan di halaman seperti `/jual-ac-yogyakarta`, `/jual-ac-cilacap`, `/jual-ac-kebumen`, `/jual-ac-tegal`, dan `/jual-ac-banjarnegara`. Homepage, halaman tentang, dan bukti pengiriman juga masih memunculkan H1/body awal yang sama. Ini berarti pekerjaan pertama bukan membuat puluhan kota baru, tetapi membersihkan relevansi on-page dan snippet halaman yang sudah hidup. citeturn34view0turn34view1turn34view2turn34view3turn34view4turn35view1turn35view2turn35view3
17:- Halaman area retail hanya dibuat jika query kota itu secara realistis bisa dimasuki oleh positioning non-palsu: **AC original, konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan**. Jika SERP dikuasai showroom lokal yang sangat kuat, jalur yang lebih aman adalah **B2B-first** atau cukup disebut sebagai area pengiriman. citeturn17view2turn18view4turn17view3turn29view2
18:- Pasar kota besar seperti Bandung, Tangerang, Jakarta, dan Surabaya menunjukkan satu pola yang jelas: kompetitor kuat cenderung punya **dealer resmi, alamat showroom jelas, katalog kategori lengkap, layanan pemasangan, bahkan jalur proyek/commercial/industrial**. Di pasar seperti ini, RADJA AC tidak boleh pura-pura menjadi “toko lokal kota tersebut”; lebih aman masuk dengan angle **pengiriman + konsultasi + proyek + multi-brand**. citeturn24view3turn18view4turn17view3turn29view2turn16search6turn27search4
19:- Pasar kota regional yang lebih dekat seperti Cilacap, Kebumen, Tegal, Purbalingga, dan Banjarnegara justru menampilkan SERP yang lebih terfragmentasi: banyak IG, Facebook, OLX, Google Sites, atau service listing. Ini membuka celah bagi RADJA AC bila halaman area dibuat lebih rapi, jujur, trust-heavy, dan diarahkan ke WhatsApp dengan konteks yang jelas. citeturn2search19turn3search4turn3search9turn3search12turn5search16
20:- Kota yang sudah punya halaman RADJA AC dan sudah muncul di SERP harus dipoles lebih dulu daripada membuat lonjakan halaman baru. Yogyakarta, Cilacap, Kebumen, Tegal, dan Banjarnegara masuk kategori ini. citeturn22search1turn22search3turn23search2turn26search1turn26search4
21:- RADJA AC harus meniru **mekanisme coverage-page yang jujur**, bukan klaim showroom palsu. Kompetitor seperti Selka dan AC Wahana secara eksplisit menyebut area jangkauan, layanan penjualan, pemasangan, kategori AC, dan jalur bantuan online. Model seperti ini bisa dijadikan referensi struktur, bukan referensi klaim lokasi. citeturn17view2turn17view4turn18view4turn32search8
25:**Catatan baca tabel:** kolom **Pola SERP** dan **Kompetitor Dominan** merujuk ke snapshot SERP aktual dan diberi sitasi. Kolom **Celah Kompetitor**, **Peluang RADJA AC**, **Risiko**, **URL Ideal**, dan **Prioritas** adalah keputusan strategis dari riset tersebut.
29:| Kota | Provinsi | Query Utama | Pola SERP | Kompetitor Dominan | Celah Kompetitor | Peluang RADJA AC | Risiko | URL Ideal | Prioritas |
31:| Purwokerto | Jawa Tengah | toko AC Purwokerto | Dealer lokal + marketplace + toko elektronik | RADJA AC, Central Elektronik Sokaraja, Irama Mas/Blibli mix citeturn21search0turn21search2turn21search4turn21search16turn21search22 | Bisa dimenangkan lewat proof fisik, stok, dan konsultasi PK | Wajib dipertahankan sebagai halaman lokal utama | Cannibalization dari artikel/halaman lokal lain | `/jual-ac-purwokerto` | Priority A |
32:| Banyumas | Jawa Tengah | toko AC Banyumas | Artikel lokal + marketplace + jasa service | RADJA AC, Sejasa/service listing, Blibli area Banyumas citeturn2search5turn21search10turn21search4 | Query kabupaten belum diisi sangat kuat oleh dealer rapi | Layak sebagai pendamping lokal, bukan ekspansi baru agresif | Bisa tumpang tindih dengan Purwokerto | `/jual-ac-banyumas` bila sudah ada; jika belum cukup diperkuat dari Purwokerto | Priority B |
33:| Sokaraja | Jawa Tengah | toko AC Sokaraja | Toko elektronik lokal + service listing | Central Elektronik Sokaraja, Depo Pelita, Sejasa listing citeturn21search2turn21search6turn21search10 | Cocok untuk trust-local, bukan growth-city utama | Pertahankan sebagai proof bahwa basis fisik memang nyata | Thin content bila dijadikan money page besar | `/jual-ac-sokaraja` | Priority A untuk trust, bukan ekspansi |
34:| Semarang | Jawa Tengah | jual AC Semarang | Dealer lokal kuat + Google Sites + official shop + brand pages + listicle | Hai Service, Aren Jaya AC, Midea Pro Shop Semarang, Atlanta, Hitachi distributor citeturn5search9turn17view6turn31view0turn5search2turn5search17 | Banyak kompetitor kuat, tetapi banyak yang sangat lokal/showroom-led | Sangat layak, tetapi angle harus “konsultasi, cek stok, kirim unit, opsi pemasangan/proyek ke Semarang” | Kompetisi tinggi, risiko klaim lokal palsu tinggi | `/jual-ac-semarang` | Priority A |
35:| Solo / Surakarta | Jawa Tengah | jual AC Solo | Official dealer + toko elektronik + marketplace + service | Indocool Jaya, Nagatara 3, Shopee/OLX cluster citeturn24view1turn28search2turn19search3turn5search4turn5search8 | Ada multi-brand dan konsultasi, tapi tetap banyak SERP retail yang tidak terlalu rapi | Layak dibuat/polish dengan angle rumah, kantor, kost, ruko kecil, plus banyak unit | Dealer resmi kuat, kompetisi menengah-tinggi | `/jual-ac-solo` | Priority A |
36:| Tegal | Jawa Tengah | toko AC Tegal | IG seller + marketplace + service-style pages | Takatim AC, Shopee/Lazada seller area Tegal, keyword pages lokal citeturn3search1turn3search8turn3search11 | SERP belum dipenuhi halaman dealer multi-brand yang rapi | Quick win retail regional bila copy unik dan trust kuat | Risiko lead harga-only | `/jual-ac-tegal` | Priority A |
37:| Cilacap | Jawa Tengah | toko AC Cilacap | Marketplace + Facebook/OLX + service cluster | OLX seller cluster, komunitas FB jual AC, service listing citeturn2search19turn2search3turn2search5 | Kompetitor web terstruktur lemah | Sangat layak untuk quick win regional | Perlu jujur soal opsi pemasangan | `/jual-ac-cilacap` | Priority A |
38:| Kebumen | Jawa Tengah | toko AC Kebumen | Toko lokal + FB group + OLX | Toko 17 Kebumen, lapak jual beli, OLX seller cluster citeturn3search0turn3search4turn3search7turn3search13 | Lemah di sisi struktur, trust, dan conversion flow | Sangat layak untuk quick win regional | Lead sensitif harga | `/jual-ac-kebumen` | Priority A |
39:| Purbalingga | Jawa Tengah | toko AC Purbalingga | IG + FB + OLX | local IG/FB/OLX cluster citeturn3search2turn3search9 | Sedikit pemain rapi | Layak setelah Cilacap/Kebumen/Tegal beres | Bisa thin jika copy malas | `/jual-ac-purbalingga` | Priority B |
40:| Banjarnegara | Jawa Tengah | toko AC Banjarnegara | toko elektronik + FB + OLX | Jaya Elektronik, lokal FB group, OLX cluster citeturn3search3turn3search6turn3search10turn3search12 | Web kompetitor tidak terlalu kuat | Layak sebagai regional ring kedua | Daya beli dan volume lebih sempit | `/jual-ac-banjarnegara` | Priority B |
41:| Magelang | Jawa Tengah | toko AC Magelang | IG + service page + OLX | GTM/Griya Teknik, service listings, OLX cluster citeturn4search0turn4search7turn4search18turn4search22 | Banyak hasil service/bekas, sedikit dealer baru yang rapi | Layak, tetapi bukan sebelum kota ring utama selesai | Perlu diferensiasi “unit baru original” | `/jual-ac-magelang` | Priority B |
42:| Pekalongan | Jawa Tengah | toko AC Pekalongan | toko lokal + FB distributor + official dealer | Berkah Jaya, JL Elektronik/distributor, Daikin i-Shop Pekalongan citeturn4search1turn4search16turn4search19turn29view0 | Ada pemain lokal, tetapi belum banyak city page informatif multi-brand | Layak setelah ring inti | Kompetisi menengah | `/jual-ac-pekalongan` | Priority B |
43:| Kudus | Jawa Tengah | toko AC Kudus | IG/FB/promo pages | Mita AC Kudus dan promo pages lokal citeturn4search2turn4search20 | SERP belum terlalu clean, tapi demand tidak sejelas kota inti | Cukup watchlist; belum wajib sekarang | Risiko thin content dan logistik membentang ke timur | Sebut sebagai area pengiriman dulu | Watchlist |
44:| Jepara | Jawa Tengah | toko AC Jepara | IG + FB + OLX + service aggregator | Sentral Elektronik/IG, FB group, OLX, Sejasa citeturn4search3turn4search14turn4search21turn4search23 | Fragmented, tetapi jauh dari basis | Cukup area pengiriman dulu | Thin content + logistik | Sebut di halaman area besar/dekat, jangan city page dulu | Watchlist |
45:| Salatiga | Jawa Tengah | toko AC Salatiga | IG + niche local keyword page + Shopee | Palapa Elektronik, jasa pages, Shopee area Salatiga citeturn5search0turn5search5turn5search14 | Bisa dimasuki, tetapi demand/ROI di bawah Semarang-Solo | Layak nanti setelah ring utama | Kompetisi tidak kosong, volume tengah | `/jual-ac-salatiga` | Priority C |
47:**DI Yogyakarta**
49:| Kota | Provinsi | Query Utama | Pola SERP | Kompetitor Dominan | Celah Kompetitor | Peluang RADJA AC | Risiko | URL Ideal | Prioritas |
51:| Yogyakarta | DI Yogyakarta | jual AC Yogyakarta | Specialist city sites + official dealer + Dodolan + project/service mix | Toko AC Jogja/Griffin, Daikin Jogja, Ekajaya AC, Putra Teknik AC, Qhomemart citeturn6search0turn6search3turn18view2turn7search15turn19search17 | Kompetitor kuat, tapi banyak yang jual campur retail-service-proyek | Sangat layak karena demand tinggi; perlu angle hotel, kost, kantor, proyek kecil | Kompetisi tinggi, risiko klaim “toko Jogja” palsu | `/jual-ac-yogyakarta` | Priority A |
52:| Sleman | DI Yogyakarta | toko AC Sleman | Jogja umbrella pages + local specialist | Toko AC Jogja, Dodolan/service sellers, Qhomemart/rumah elektronik citeturn6search15turn6search11turn7search4 | Lebih cocok dijadikan sub-coverage Yogyakarta | Jangan buat dulu kecuali Yogyakarta sudah kuat | Bisa jadi duplikat dari Yogyakarta | Sebut di `/jual-ac-yogyakarta` | Priority B |
53:| Bantul | DI Yogyakarta | toko AC Bantul | Jogja specialist extension + local sparepart/service | Toko AC Jogja, Karya Gemilang, toko sparepart Bantul, Gree office Jetis Bantul citeturn6search1turn6search5turn6search8turn6search18turn6search19 | Ada demand lokal, tapi masih dapat ditampung oleh page Yogya | Support area dulu; buat page hanya jika query konsisten | Risiko thin content dan over-segmentation | Sebut di `/jual-ac-yogyakarta` | Priority B |
54:| Kulon Progo | DI Yogyakarta | toko AC Kulon Progo | extension page dari seller Jogja + OLX + service | Griffin/Karya Gemilang pages, Jualo, OLX, service listings citeturn6search2turn6search6turn6search12turn6search16turn6search23 | Bisa ditampung sebagai coverage Yogyakarta | Cukup sebut sebagai area layanan | Jarak dan demand lebih tipis | Sebut di `/jual-ac-yogyakarta` | Priority C |
55:| Gunungkidul | DI Yogyakarta | toko AC Gunungkidul | lokal sosial + service + elektronik umum | Wonosari electronics, service listings, sosial seller lokal citeturn7search0turn7search6turn7search9turn7search20 | SERP tipis, tetapi juga tipis secara page value | Belum perlu city page sekarang | Risiko thin content tinggi | Sebut di `/jual-ac-yogyakarta` | Do Not Build Yet |
59:| Kota | Provinsi | Query Utama | Pola SERP | Kompetitor Dominan | Celah Kompetitor | Peluang RADJA AC | Risiko | URL Ideal | Prioritas |
61:| Bandung | Jawa Barat | toko AC Bandung | official dealer cluster + specialist city page + katalog lengkap | Ke-Rumah.com, G-Solusi, Arya Jaya, AJL/Fuji/Daikin i-Shop cluster citeturn8search1turn8search7turn24view3turn29view1turn30view0 | Retail kompetitif, tapi B2B/commercial sangat nyata | Jangan masuk retail biasa dulu; masuk lewat B2B-first dan trust proof | Kompetisi tinggi sekali, showroom resmi banyak | Tunda `/jual-ac-bandung`; kuatkan dulu `/pengadaan-ac/kontraktor-developer` dan `/pengadaan-ac/gedung-perkantoran` | B2B-first |
62:| Bekasi | Jawa Barat | toko AC Bekasi | microsite city page + official dealer resmi + IG | Selka Bekasi, Jaya Elektrindo, Daikin i-Shop Bekasi cluster citeturn17view2turn8search11turn24view4turn30view1 | Model service-area page bekerja di SERP, tapi pemain lokal resmi banyak | B2B-first lebih aman daripada retail langsung | Kompetisi showroom/resmi sangat tinggi | Tunda `/jual-ac-bekasi`; gunakan B2B page dulu | B2B-first |
64:| Bogor | Jawa Barat | toko AC Bogor | microsite city page + IG toko lokal + marketplace | Selka Bogor, Toko AC Bogor IG, SB Elektronik Ko Ahen citeturn8search0turn8search2turn8search13turn8search20 | Bisa dimasuki, tapi tetap banyak pemain lokal beralamat jelas | B2B-first atau area pengiriman premium; retail belum prioritas | Kompetisi lokal dan logistik | Tunda retail city page dulu | Watchlist |
65:| Cirebon | Jawa Barat | toko AC Cirebon | toko elektronik lokal + marketplace + Shopee area | SIP Electronic, AIO Store, Shopee/OLX cluster citeturn9search3turn9search11turn9search14turn9search22 | Masih banyak hasil non-spesialis AC | Layak nanti sebagai gateway Jabar timur | Perlu proof pengiriman antarkota | `/jual-ac-cirebon` | Priority C |
66:| Tasikmalaya | Jawa Barat | toko AC Tasikmalaya | IG dealer + FB group + marketplace | Rayyan Jaya Teknik, Rumah AC Tasikmalaya, FB seller cluster citeturn9search0turn9search4turn9search8 | Belum banyak halaman dealer rapi | Masih cukup jauh; jangan dulu | Risiko thin + logistik | Sebut area pengiriman saja | Watchlist |
67:| Garut | Jawa Barat | toko AC Garut | OLX + toko elektronik umum + Sejasa | OLX cluster, Mega Elektronik Garut, service aggregator citeturn9search1turn9search5turn9search16 | SERP tipis tetapi kualitas demand juga belum tebal untuk RADJA AC | Tidak prioritas | Thin content dan lead tidak relevan | Jangan buat dulu | Do Not Build Yet |
68:| Karawang | Jawa Barat | toko AC Karawang | dealer/service page + toko elektronik + authorized dealer IG | ASE Mandiri, Sinar Abadi, Centra AC Karawang citeturn9search2turn9search6turn9search10turn9search17 | Ada demand komersial dan industri, bukan sekadar retail rumah | B2B-first masuk akal | Kompetisi lokal cukup siap | Tunda retail; prioritaskan B2B/komersial | B2B-first |
70:| Sukabumi | Jawa Barat | toko AC Sukabumi | toko elektronik + official dealer + OLX | Planet/Robinson Electronic, Carlla Electrindo, OLX cluster citeturn10search2turn10search9turn10search19turn10search5 | Demand ada, tapi bukan quick win untuk basis Banyumas | Cukup pantau | Logistik jauh, kompetisi lokal ada | Jangan build sekarang | Watchlist |
71:| Indramayu | Jawa Barat | toko AC Indramayu | IG dealer + toko elektronik umum + FB/Erablue | Centra HVACR Indramayu, AIO Store Jatibarang, FB groups, Erablue citeturn10search1turn10search6turn10search10turn10search20 | SERP campur dan tidak jelas money-page AC murni | Belum layak dari sisi fokus | Risiko thin content | Jangan buat dulu | Do Not Build Yet |
75:| Kota | Provinsi | Query Utama | Pola SERP | Kompetitor Dominan | Celah Kompetitor | Peluang RADJA AC | Risiko | URL Ideal | Prioritas |
77:| Surabaya | Jawa Timur | toko AC Surabaya | distributor resmi + VRV/project + katalog lengkap + IG | Apollo AC, Gudang AC, Bintang Plasma, AC Wahana-style specialist citeturn11search5turn17view3turn11search16turn30view2 | Pasar besar, tapi retail sangat padat dan resmi | Jangan masuk retail biasa; B2B-first saja | Kompetisi sangat tinggi, operasional jauh | Tunda `/jual-ac-surabaya`; dorong B2B nasional/proyek | B2B-first |
80:| Gresik | Jawa Timur | toko AC Gresik | toko elektronik lokal + Surabaya spillover + FB | Hasil Elektronik, Surya Jaya, Dunia AC Gresik/FB citeturn11search2turn11search4turn11search11 | Market ada, namun bukan prioritas jarak jauh | Area support B2B kalau tim timur aktif | Kompetisi lokal dan logistik | Jangan retail dulu | Watchlist |
81:| Kediri | Jawa Timur | toko AC Kediri | FB/IG + service/bengkel + UFO | Lentera Jaya, Sejuk Segar AC, UFO, Bandung Elektronika citeturn12search0turn12search2turn12search5turn12search14 | Mixed demand, tapi belum priority | Cukup pantau | Jauh dari basis | Jangan build sekarang | Watchlist |
83:| Jember | Jawa Timur | toko AC Jember | toko elektronik + HVAC company + marketplace | Jember Makmur, Centro Electronic, Araf Teknik AC citeturn12search1turn12search7turn12search23 | Ada demand, namun jauh sekali | Belum layak | Logistik dan coverage | Jangan build sekarang | Do Not Build Yet |
84:| Banyuwangi | Jawa Timur | toko AC Banyuwangi | toko elektronik umum + blogspot lama + marketplace | Informa Electronics Banyuwangi, Pusat AC Banyuwangi blogspot, seller cluster citeturn12search10turn12search20turn12search25 | SERP lemah secara kualitas, tetapi terlalu jauh untuk dikejar sekarang | Tidak prioritas | Jarak/logistik ekstrem untuk model sekarang | Jangan build sekarang | Do Not Build Yet |
85:| Pasuruan | Jawa Timur | toko AC Pasuruan | toko elektronik + Surabaya spillover + Shopee/Sejasa | Centro Pasuruan, Gaya Baru, marketplace package area Pasuruan citeturn13search0turn13search2turn13search5turn13search9turn13search21 | Lead retail cenderung price-first | Tidak efektif untuk batch ini | Overreach | Jangan build sekarang | Do Not Build Yet |
86:| Mojokerto | Jawa Timur | toko AC Mojokerto | IG local + Surabaya travel package pasang | Mojokerto IG sellers, Gudang AC Surabaya travel charge, Coast AC reel citeturn13search1turn13search3turn13search22 | Lebih cocok sebagai daerah jangkauan vendor Surabaya | Tidak prioritas | Thin content + logistik | Jangan build sekarang | Do Not Build Yet |
90:| Kota | Provinsi | Query Utama | Pola SERP | Kompetitor Dominan | Celah Kompetitor | Peluang RADJA AC | Risiko | URL Ideal | Prioritas |
92:| Tangerang | Banten | toko AC Tangerang | microsite city page + official dealer cluster + specialist showroom | Selka Tangerang, AC Wahana, Symphony AC, Daikin dealer cluster citeturn17view4turn18view4turn17view5turn27search4turn27search14 | SERP membuktikan model city page + coverage bisa jalan, tapi pemainnya berat | Masuk hanya jika B2B-first dan trust proof kuat | Kompetisi sangat tinggi | Tunda `/jual-ac-tangerang`; masuk via B2B | B2B-first |
94:| Serang | Banten | toko AC Serang | official dealer + electronics store + Shopee store | Sanyota/Daikin, Gudang Elektronik Serang, electronics IG lokal citeturn14search0turn24view5turn14search15 | Masih lebih ringan daripada Tangerang/Tangsel | Bisa jadi ekspansi Banten paling masuk akal nanti | Tetap ada pemain resmi | `/jual-ac-serang` hanya setelah Jateng/DIY kuat | Priority C |
95:| Cilegon | Banten | toko AC Cilegon | marketplace lokal kuat + IG electronics | Agung Jaya Cilegon, AC Store Cilegon, Lazada/Shopee area Cilegon-Serang citeturn14search1turn14search2turn14search14 | Bisa via angle pengiriman unit banyak/industri, bukan retail rumah dulu | B2B/komersial lebih cocok | Kompetisi lokal dan industrial expectation | Tunda retail; pakai B2B | Watchlist |
96:| Pandeglang | Banten | toko AC Pandeglang | OLX + service listing + electronics umum | OLX cluster, Sejasa, Erablue Pandeglang citeturn15search1turn15search6turn15search10 | SERP lemah, tetapi terlalu tipis untuk jadi money page | Jangan dibuat dulu | Thin content tinggi | Jangan build | Do Not Build Yet |
97:| Lebak | Banten | toko AC Lebak | elektronik umum + info komunitas | Aneka Jaya/Rangkasbitung mentions, Mahkota Jaya, Damai Sejahtera info lokal citeturn15search0turn15search4turn15search11turn15search15 | Bukan pasar city page yang efisien sekarang | Jangan dibuat dulu | Thin content + intent lemah | Jangan build | Do Not Build Yet |
101:| Kota | Provinsi | Query Utama | Pola SERP | Kompetitor Dominan | Celah Kompetitor | Peluang RADJA AC | Risiko | URL Ideal | Prioritas |
103:| Jakarta Pusat | DKI Jakarta | toko AC Jakarta Pusat | citywide service-area page + kontraktor/proyek | Selka Jakarta, Era Teknik, Prima Jaya/project contractors citeturn32search0turn32search10turn29view2 | Retail terlalu datar dan luas; B2B lebih masuk akal | B2B-only | Kompetisi metro dan ekspektasi proyek tinggi | B2B page dulu, bukan retail-area page | B2B-only |
105:| Jakarta Barat | DKI Jakarta | toko AC Jakarta Barat | local dealers + citywide pages + official dealer | Rencool, Toko Jaya AC, Prima Jaya/Gree, Selka Jakarta citeturn32search3turn32search6turn32search9turn33search1 | Banyak dealer beralamat jelas | Tidak cocok untuk retail-angle awal | Kompetisi showroom keras | B2B page dulu | B2B-only |
107:| Jakarta Utara | DKI Jakarta | toko AC Jakarta Utara | citywide page + major specialist showroom | AC Wahana/Kelapa Gading, Selka Jakarta, pusatacmurah/market pages citeturn16search1turn16search9turn33search0turn33search10 | Banyak kebutuhan komersial, tetapi retail sangat matang | Cocok hanya untuk B2B/proyek besar | Kompetisi showroom & proyek | B2B page dulu | B2B-only |
109:**Tabel detail kompetitor untuk kota prioritas**
111:| Kota | Kompetitor | Jenis | Kekuatan | Kelemahan | CTA | Trust Proof | Peluang Melawan |
113:| Semarang | Aren Jaya AC | Google Sites / dealer lokal | Langsung jual unit baru, range PK jelas, WA jelas, harga narik citeturn17view6 | Tampilannya tipis dan sangat salesy | Tombol beli cepat | Harga + WA | RADJA AC bisa menang di struktur, konsultasi PK, katalog, dan trust |
114:| Semarang | Hai Service | service-led city page | City-intent sangat jelas, jual + pasang kuat di title/snippet citeturn5search9 | Identitas lebih service-centric daripada dealer multi-brand murni | Hubungi sekarang | janji pasang/layanan | RADJA AC bisa ambil angle unit original + brand depth |
115:| Semarang | Midea Pro Shop / Hitachi distributor | official brand store | Alamat resmi, jam operasional, nomor jelas, brand authority citeturn31view0turn5search17 | Fokus brand, bukan konsultasi lintas brand | kontak toko | store resmi | RADJA AC bisa menang sebagai multi-brand neutral advisor |
116:| Yogyakarta | Griffin / Toko AC Jogja | specialist city site | Brand resmi, city relevance kuat, jaringan area Jogja luas citeturn6search0turn6search3 | Sangat lokal Jogja; angle city-specific berulang | bayar di rumah / hubungi | dealer resmi, cakupan area | RADJA AC harus jujur sebagai pengiriman + opsi pemasangan, bukan “toko Jogja” |
117:| Yogyakarta | CV Ekajaya AC | marketplace/service + project | Menyebut retail dan project, cassette-floor standing-VRF ikut tampil citeturn18view2 | Tampilan seperti listing, bukan money page rapi | Hubungi penjual | garansi resmi + pasang 30 hari | RADJA AC bisa menang di kredibilitas page dan alur CTA |
118:| Yogyakarta | Putra Teknik / Dodolan seller cluster | sosial/service | Menyasar pengadaan, hotel, gedung, standing/cassette citeturn7search11turn25search15 | Campur service dan retail | kontak WA | sosial proof | RADJA AC bisa fokus pada AC baru original + stok + proyek |
119:| Solo | Indocool Jaya | official dealer | Dealer resmi, commercial/industrial/services lengkap, testimoni tampil citeturn24view1 | Sangat dealer-led lokal | telepon/IG | testimoni + official dealer | RADJA AC perlu angle multi-brand dan pengiriman ke Solo |
120:| Solo | Nagatara 3 | toko elektronik besar | Garansi resmi, gratis kirim area Solo, marketplace aktif citeturn19search3turn28search2 | Bukan spesialis konsultasi AC mendalam | hubungi toko | toko fisik jelas | RADJA AC bisa menang dengan PK consult dan spesialisasi AC |
121:| Bandung | Ke-Rumah.com | specialist dealer city page | Official dealer, sales-service cepat, testimoni detail, commercial/industrial masuk citeturn24view3turn29view1 | Kompetisi sudah sangat matang | hubungi/visit social | testimoni, dealer resmi | Jangan lawan retail head-on; masuk lewat B2B atau niche intent |
123:| Bekasi | Selka | microsite city page | Menyebut area coverage, penjualan, pemasangan, list harga secara jelas citeturn17view2 | Tidak terlalu kuat pada trust fisik showroom per halaman | list harga / pemasangan | coverage list | Ini bukti bahwa page service-area bisa rank jika rapi |
125:| Tangerang | AC Wahana | specialist site / multi-cabang | Coverage sangat jelas, kategori lengkap, retail-distributor-proyek, banyak nomor WA citeturn18view4 | Sangat matang dan operasional besar | WhatsApp / arahkan | showroom, kategori, cakupan luas | RADJA AC jangan tiru klaim lokasinya; tiru struktur coverage dan kategori |
128:| Surabaya | Bintang Plasma / Apollo AC | distributor / toko AC besar | Proyek dan eceran, multi-brand lengkap, city relevance kuat citeturn11search16turn13search14turn11search5 | Market sangat matang | hubungi / katalog | distributor resmi / pengalaman | Retail area page Surabaya bukan prioritas sekarang |
130:**Daftar 10 kota terbaik untuk halaman area retail**
132:Kota yang paling layak untuk retail-area page sekarang adalah: **Purwokerto, Semarang, Yogyakarta, Solo, Cilacap, Kebumen, Tegal, Purbalingga, Banjarnegara, dan Magelang**. Tujuh nama pertama dipilih karena kombinasi paling sehat antara demand, kedekatan operasional, dan peluang SERP; tiga nama terakhir dipilih sebagai ring lanjut yang masih lebih realistis daripada melompat ke metro barat/timur yang sangat padat dealer resmi. citeturn21search0turn5search9turn6search0turn24view1turn2search19turn3search0turn3search1turn3search2turn3search3turn4search0
136:Kota terbaik untuk jalur B2B atau proyek lebih dulu adalah: **Semarang, Yogyakarta, Solo, Bandung, Bekasi, Tangerang, Tangerang Selatan, Jakarta Barat, Jakarta Selatan, dan Surabaya**. Alasannya sama: di kota-kota ini kompetitor yang menang cenderung punya struktur **retail + pemasangan + commercial/industrial/project**, sehingga area page retail biasa akan berat. Sebaliknya, halaman B2B yang jujur masih bisa dipakai untuk menangkap intent kontraktor, kantor, hotel, kost skala besar, dan pengadaan. citeturn20search8turn18view2turn24view1turn24view3turn17view2turn18view4turn27search8turn32search6turn33search6turn17view3
138:**Daftar kota yang cukup disebut sebagai area pengiriman**
140:Untuk fase sekarang, **Sleman, Bantul, Kulon Progo, Gunungkidul, Sokaraja, Banyumas, Kudus, Jepara, Tasikmalaya, Sukabumi, Kediri, Madiun, Jember, Pasuruan, dan Mojokerto** lebih aman disebut sebagai area pengiriman/coverage dulu daripada dibuatkan halaman retail yang berdiri sendiri. Pola SERP mereka cenderung bertumpu pada sosial, listing, atau dealer lokal yang tidak memberi enough-room untuk city page lain yang masih tipis. citeturn6search15turn6search19turn6search12turn7search9turn21search2turn21search10turn4search20turn4search23turn9search8turn10search19turn12search2turn12search3turn12search23turn13search0turn13search1
142:**Daftar kota yang jangan dibuat dulu**
144:Untuk fase saat ini, **Pandeglang, Lebak, Garut, Indramayu, Banyuwangi, Pasuruan, Mojokerto, dan Gunungkidul** masuk kategori **Do Not Build Yet**. Risikonya bukan hanya logistik, tetapi juga mismatch antara effort pembuatan halaman dan kualitas peluang SERP yang ada sekarang. Di kota-kota ini, hasil pencarian masih berat ke OLX, FB, toko elektronik umum, atau service listing, sehingga area page baru mudah jatuh menjadi thin content. citeturn15search1turn15search15turn9search1turn10search10turn12search20turn13search0turn13search1turn7search9
148:Halaman yang harus dipoles lebih dulu adalah **`/jual-ac-yogyakarta`**, **`/jual-ac-cilacap`**, **`/jual-ac-kebumen`**, **`/jual-ac-tegal`**, dan **`/jual-ac-banjarnegara`**. Judul SERP mereka sudah menyebut kota target, tetapi hasil fetch halaman masih menunjukkan H1 dan paragraf pembuka “Toko AC Purwokerto”, yang berpotensi melemahkan sinyal relevansi area target. Homepage dan halaman tentang juga harus dibersihkan agar narasi “dealer multi-brand se-Pulau Jawa” benar-benar terbaca konsisten. citeturn34view0turn34view1turn34view2turn34view3turn34view4turn35view1turn35view3
152:Halaman baru pertama yang harus dibuat atau di-rebuild serius adalah **`/jual-ac-semarang`**. Alasannya paling kuat secara SEO dan bisnis: Semarang memperlihatkan intent komersial yang jelas, ada dealer resmi dan specialist ranker yang kuat, dan di pengecekan ini RADJA AC belum muncul sebagai hasil Semarang yang berdiri sendiri, sementara kompetitor lokal sudah muncul berulang. Setelah itu, urutan terbaik berikutnya adalah **`/jual-ac-solo`**. citeturn5search9turn17view6turn31view0turn5search17turn26search0turn24view1turn19search3turn28search2
156:- Jangan membuat halaman area hanya karena kota besar. Kota besar baru layak jika angle dan operasionalnya jelas.
157:- Jika prioritas kota adalah **B2B-first**, jangan paksa membuat `/jual-ac-{kota}` retail lebih dulu.
158:- Jika kota cukup sebagai coverage area, sebut kota itu di halaman provinsi/kota induk yang lebih kuat; jangan memaksa halaman tipis.
159:- Untuk metro yang kompetitif, pakai framing aman seperti **“cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan ke [kota]”**.
160:- Gunakan trust asset pusat Banyumas, bukti pengiriman, dan bukti proyek sebagai pembeda; jangan memalsukan showroom lokal.
161:- Jangan deploy area page baru sebelum city page yang sudah terindeks bebas dari boilerplate Purwokerto.
162:- Jadikan Semarang dan Solo sebagai kota build besar pertama setelah cleanup Yogyakarta/Cilacap/Kebumen/Tegal.
163:- Saat menyerang kota dengan official dealer kuat, perkuat juga halaman brand dan katalog kapasitas sebelum launch area page-nya. citeturn34view0turn34view4turn24view3turn24view4turn17view3
165:### Jangan Dilakukan
167:- Jangan membuat 30–50 halaman area sekaligus.
168:- Jangan menyebut “toko AC [kota]” jika basis fisik memang tidak ada di kota itu.
169:- Jangan menyalin narasi Purwokerto ke halaman target kota lain.
170:- Jangan membuat area page retail untuk Jakarta, Surabaya, Bandung, Tangerang pada fase sekarang tanpa halaman B2B dan trust proof yang jauh lebih kuat.
171:- Jangan menggunakan review Google Maps Banyumas sebagai bukti “kota lokal” untuk kota luar.
172:- Jangan memberi CTA yang sama persis ke semua kota tanpa konteks kebutuhan.
173:- Jangan membiarkan halaman area yang sudah live terus memunculkan H1/paragraf pembuka Purwokerto. citeturn34view0turn34view1turn34view3turn35view1
177:**Contoh implementasi untuk Semarang**
179:- URL: `/jual-ac-semarang`
180:- Title: `Jual AC Semarang | Cek Stok, Konsultasi PK, Pengiriman Unit & Opsi Pemasangan`
181:- H1: `Jual AC ke Semarang untuk Rumah, Kantor, Kost, dan Banyak Unit`
182:- CTA WhatsApp: `Chat untuk Cek Stok AC ke Semarang`
184:  - kebutuhan umum Semarang: rumah, kantor, ruko, kost, hotel kecil
186:  - alur order: konsultasi PK → cek stok → estimasi kirim → opsi pemasangan
187:  - bukti pengiriman/proyek yang relevan
188:  - FAQ “apakah RADJA AC punya toko di Semarang?” dengan jawaban jujur
189:- Internal link:
199:- Jangan buat dulu money page retail generik.
205:  - `Melayani konsultasi pengadaan unit AC, cek stok, pengiriman unit, dan koordinasi instalasi untuk proyek Bandung dan sekitarnya.`
206:- CTA:
207:  - `Kirim data proyek AC Bandung via WhatsApp`
212:- Jangan buat `/jual-ac-sleman` dulu.
213:- Tambahkan section di `/jual-ac-yogyakarta`:
214:  - `Area layanan Yogyakarta dan sekitarnya: Sleman, Bantul, Kulon Progo, Gunungkidul.`
215:- CTA:

## Title Meta Library

Source: `docs/source/radjaac/RADJAAC_TITLE_META_LIBRARY.md`

14:- Title, H1, dan hero copy harus selaras. Jangan sampai title non-lokal, tetapi H1/hero masih lokal keras dan akhirnya membingungkan Google. citeturn20view2
16:- Area pages **boleh** menyebut kota target, tetapi harus memakai framing aman: konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan.
18:- Hindari angka harga yang kaku di title/meta kecuali benar-benar dipelihara dan sering diupdate. Audit publik menunjukkan sejumlah area page saat ini memakai pola “mulai 3 jutaan”; pola itu hanya aman bila benar-benar dijaga update-nya. citeturn24search11turn34search4turn34search10
25:| Homepage | `Dealer AC Original Multi-Brand | Cek PK, Stok & Pengiriman Jawa — RADJA AC` | `RADJA AC membantu pembelian AC original multi-brand untuk rumah, kost, toko, kantor, hotel, dan proyek. Basis di Banyumas, melayani konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan.` | `Dealer AC Original Multi-Brand | Cek PK, Stok & Pengiriman Jawa — RADJA AC`<br>`RADJA AC | AC Original Multi-Brand untuk Rumah, Usaha & Proyek`<br>`Dealer AC untuk Rumah, Komersial & Banyak Unit — RADJA AC` | Tidak perlu | `Toko AC Purwokerto` sebagai fokus utama homepage, `termurah`, `ready semua tipe` | Homepage harus non-lokal-moderat: basis Banyumas disebut di meta/body, bukan jadi keyword utama |
26:| Area page | `Jual AC {Kota} | Cek Stok, Konsultasi PK & Opsi Pemasangan — RADJA AC` | `Butuh AC baru untuk area {Kota}? RADJA AC bantu konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan. Basis di Banyumas, melayani rumah, kost, toko, kantor, dan banyak unit.` | `Jual AC Yogyakarta | Cek Stok, Konsultasi PK & Opsi Pemasangan — RADJA AC`<br>`Jual AC Semarang | Cek Unit, Pengiriman & Opsi Pemasangan — RADJA AC`<br>`Jual AC Solo | Konsultasi PK & Pengiriman Unit AC — RADJA AC`<br>`Jual AC Cilacap | Cek Stok, Harga & Opsi Pasang — RADJA AC`<br>`Jual AC Kebumen | Konsultasi PK, Pengiriman & Banyak Unit — RADJA AC` | Ya | `Toko AC {Kota}`, `dealer resmi {Kota}`, `showroom {Kota}` jika tidak ada bukti fisik | Aman untuk SEO kota karena service-led, bukan fake store claim |
27:| Brand page | `AC {Brand} Original | Cek Stok, Tipe & Konsultasi PK — RADJA AC` | `RADJA AC bantu memilih AC {Brand} original sesuai ukuran ruangan, daya listrik, dan kebutuhan pemakaian. Tersedia opsi untuk rumah, usaha, dan banyak unit.` | `AC Daikin Original | Cek Stok, Tipe & Konsultasi PK — RADJA AC`<br>`AC Gree Original | Cek Stok, Tipe & Konsultasi PK — RADJA AC`<br>`AC Midea Original | Cek Stok, Tipe & Konsultasi PK — RADJA AC`<br>`AC Panasonic Original | Cek Stok & Konsultasi PK — RADJA AC` | Tidak, kecuali area-brand page khusus | `Purwokerto`, `Banyumas` sebagai inti title, `harga pasti`, `termurah` | Audit publik menunjukkan banyak brand page masih lokal; library ini menggantikannya. citeturn2search1turn2search4turn2search9turn2search12turn2search15turn2search18⟂turn34search7 |
28:| Brand lainnya page | `Brand AC Lainnya | Cek Stok & Konsultasi Unit Original — RADJA AC` | `Lihat brand AC lain yang tersedia di RADJA AC. Cocok untuk kebutuhan rumah, kost, usaha, dan proyek dengan bantuan konsultasi PK, cek stok, serta pengiriman unit.` | `Brand AC Lainnya | Cek Stok & Konsultasi Unit Original — RADJA AC`<br>`Pilihan Brand AC Lain | Unit Original & Konsultasi PK — RADJA AC`<br>`Brand AC Selain Daikin, Gree, dan Midea — RADJA AC` | Tidak | `Purwokerto & Banyumas` sebagai fokus utama, `semua brand ready` | Halaman ini bersifat navigasional, bukan untuk bersaing dengan brand utama |
30:| Katalog tipe AC | `AC {Tipe} | {Use Case Utama} — RADJA AC` | `Cari AC {Tipe} untuk {use case}? RADJA AC bantu cek stok, kebutuhan PK, daya listrik, dan opsi pemasangan sebelum Anda order.` | `AC Inverter | Untuk Pemakaian Lama & Hemat Tarikan Listrik — RADJA AC`<br>`AC Low Watt | Untuk Daya Listrik Terbatas — RADJA AC`<br>`AC Split Rumah | Untuk Kamar, Ruang Keluarga & Rumah Tinggal — RADJA AC`<br>`AC Kantor & Komersial | Untuk Ruang Usaha, Showroom & Banyak Unit — RADJA AC` | Tidak | `Purwokerto`, `termurah`, `harga fix` | Audit publik menunjukkan beberapa katalog masih lokal. citeturn34search1turn34search2turn34search3 |
31:| Katalog kapasitas PK | `AC {Kapasitas} PK | Cocok untuk Ruangan Berapa & Pilihan Unit — RADJA AC` | `Lihat pilihan AC {Kapasitas} PK untuk kebutuhan ruangan Anda. Konsultasi PK, cek stok unit, dan tanya kebutuhan pemasangan via WhatsApp.` | `AC 1/2 PK | Cocok untuk Kamar Berapa & Pilihan Unit — RADJA AC`<br>`AC 1 PK | Cocok untuk Ruangan Berapa & Pilihan Unit — RADJA AC`<br>`AC 1.5 PK | Untuk Ruangan Lebih Besar — RADJA AC`<br>`AC 2 PK | Untuk Ruang Keluarga, Ruko & Kantor Kecil — RADJA AC`<br>`AC 3–4 PK | Untuk Ruangan Besar & Kebutuhan Komersial — RADJA AC` | Tidak | `harga AC {kapasitas} {kota}`, `mulai sekian juta` jika tidak dijaga | Kapasitas page harus menangkap intent sizing-komersial, bukan area |
32:| B2B hub | `Pengadaan AC Proyek | Rumah, Hotel, Kantor & Banyak Unit — RADJA AC` | `RADJA AC melayani pengadaan AC untuk kontraktor, developer, hotel, guest house, kost, apartemen, kantor, dan kebutuhan banyak unit. Konsultasi spesifikasi, stok, dan pengiriman.` | `Pengadaan AC Proyek | Rumah, Hotel, Kantor & Banyak Unit — RADJA AC`<br>`Supplier AC Banyak Unit | Proyek, Hotel, Kost & Gedung — RADJA AC`<br>`Pengadaan AC untuk Proyek dan Ruang Komersial — RADJA AC` | Boleh `Pulau Jawa`; kota hanya bila segment-specific | `Purwokerto` sebagai keyword utama, `toko AC proyek` | B2B hub harus nasional-regional, bukan lokal sempit |
33:| B2B segment | `Pengadaan AC untuk {Segmen} | Cek Stok & Konsultasi Banyak Unit — RADJA AC` | `Butuh AC untuk {segmen}? RADJA AC bantu pemilihan unit, hitung kebutuhan PK, sinkronisasi stok, pengiriman, dan opsi pemasangan untuk banyak ruangan atau banyak unit.` | `Pengadaan AC untuk Kontraktor & Developer | Cek Stok & Konsultasi Banyak Unit — RADJA AC`<br>`Pengadaan AC untuk Hotel & Guest House | Stok, Spesifikasi & Pengiriman — RADJA AC`<br>`Pengadaan AC untuk Kost & Apartemen | Banyak Unit & Opsi Hemat — RADJA AC` | Ya, bila city-specific child page memang dibuat | `dealer resmi {kota}`, `harga pasti proyek`, `terlengkap se-{kota}` | Fokus pada buyer concern dan scope proyek |
34:| Artikel edukasi | `{Judul Edukasi} | {Outcome Pra-Beli} — RADJA AC` | `Pelajari {topik} sebelum beli AC. RADJA AC bantu menghubungkan hasil analisis ini ke pilihan PK, tipe AC, daya listrik, stok unit, dan kebutuhan pemasangan.` | `Cara Memilih AC untuk Kamar 3x4 | Hitung PK Sebelum Beli — RADJA AC`<br>`AC Inverter vs Low Watt | Pilih Sesuai Pola Pakai dan Daya — RADJA AC`<br>`AC 1 PK Cocok untuk Ruangan Berapa? | Panduan Sebelum Order — RADJA AC` | Umumnya tidak | `jual`, `toko`, `harga {brand} {kota}` | Artikel harus tetap edukatif agar tidak memakan money page |
35:| Kalkulator PK | `Kalkulator PK AC | Estimasi Kebutuhan Ruangan Sebelum Order — RADJA AC` | `Gunakan kalkulator PK AC untuk memperkirakan kebutuhan awal berdasarkan ukuran ruangan. Setelah itu, lanjutkan konsultasi ke admin untuk cek stok, daya listrik, dan opsi pemasangan.` | `Kalkulator PK AC | Estimasi Kebutuhan Ruangan Sebelum Order — RADJA AC`<br>`Hitung PK AC | Cek Kebutuhan Ruangan & Listrik — RADJA AC`<br>`Kalkulator Kapasitas AC | Panduan Awal Sebelum Beli — RADJA AC` | Tidak | `Purwokerto`, `harga`, `dealer` | Tool intent harus tetap universal |
36:| Kontak | `Kontak RADJA AC | WhatsApp, Lokasi Banyumas & Konsultasi AC` | `Hubungi RADJA AC untuk konsultasi PK, cek stok unit, dan pembelian AC original. Basis showroom dan stok di Banyumas, melayani area sekitar dan pengiriman ke kota-kota target.` | `Kontak RADJA AC | WhatsApp, Lokasi Banyumas & Konsultasi AC`<br>`Hubungi RADJA AC | Cek Stok, Konsultasi & Showroom Banyumas`<br>`Kontak Dealer AC RADJA AC | WhatsApp & Lokasi Showroom` | Boleh Banyumas sebagai fakta | `kontak toko AC Semarang`, `kontak Jogja office` | Kontak boleh lokal karena ini halaman identitas fisik |
37:| Gallery / proof | `Gallery RADJA AC | Showroom, Stok, Pengiriman & Pemasangan` | `Lihat gallery RADJA AC berisi showroom, stok unit, pengiriman, dan dokumentasi pemasangan. Dipakai sebagai proof sebelum konsultasi atau pembelian banyak unit.` | `Gallery RADJA AC | Showroom, Stok, Pengiriman & Pemasangan`<br>`Bukti Pengiriman & Pemasangan AC | RADJA AC`<br>`Showroom, Gudang & Dokumentasi Pengiriman AC — RADJA AC` | Boleh Banyumas di meta/body | `hasil kerja terbaik se-Jawa`, `proyek di semua kota` tanpa bukti | Existing gallery sudah tepat sebagai proof. citeturn28search2 |
38:| Pengiriman / pemasangan proof | `Bukti Pengiriman & Pemasangan AC | Rumah, Kost & Proyek — RADJA AC` | `Dokumentasi pengiriman dan pemasangan AC RADJA AC untuk rumah, usaha, kost, hotel, dan pembelian banyak unit. Cocok sebagai halaman trust untuk area dan B2B pages.` | `Bukti Pengiriman & Pemasangan AC | Rumah, Kost & Proyek — RADJA AC`<br>`Dokumentasi Pengiriman AC Banyak Unit — RADJA AC`<br>`Bukti Pemasangan AC untuk Rumah & Usaha — RADJA AC` | Boleh menyebut area jika bukti spesifik | `teknisi terbaik`, `100% paling rapi` tanpa pembuktian | Lebih baik sebagai page proof, bukan artikel berita |
43:- Jika halaman bukan area page, jangan masukkan nama kota target ke title hanya demi SEO.
45:- Gunakan pola kata kerja yang mendukung lead quality: `cek stok`, `konsultasi PK`, `opsi pemasangan`, `pengiriman unit`, `banyak unit`.
50:- Untuk area page, sebut basis Banyumas di meta atau body sebagai fakta operasional, bukan sebagai pengganti intent kota target.
53:## Jangan Dilakukan
55:- Jangan pakai `termurah`, `paling murah`, `nomor 1`, `terlengkap`, kecuali ada pembuktian keras dan siap dipertahankan.
56:- Jangan pakai `toko AC {kota}` untuk area luar yang tidak punya lokasi fisik.
57:- Jangan pakai `dealer resmi {kota}` bila fakta resminya hanya menunjukkan dealer/perusahaan di Banyumas.
58:- Jangan pakai `harga terbaru` jika halaman tidak rutin diperbarui.
59:- Jangan buat article title yang identik dengan money keyword katalog/brand.
60:- Jangan biarkan title non-lokal tetapi H1 tetap “Toko AC Purwokerto” di semua halaman.
61:- Jangan copy-paste meta description yang sama ke puluhan halaman.
65:Contoh title/meta aman untuk area page:
67:- **Title:** `Jual AC Yogyakarta | Cek Stok, Konsultasi PK & Opsi Pemasangan — RADJA AC`
68:- **Meta:** `Butuh AC baru untuk area Yogyakarta? RADJA AC bantu konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan. Basis di Banyumas, melayani rumah, kost, toko, kantor, dan banyak unit.`
72:- **Title:** `AC Daikin Original | Cek Stok, Tipe & Konsultasi PK — RADJA AC`
78:- **Meta:** `Lihat pilihan AC 2 PK untuk ruang keluarga besar, ruko, atau kantor kecil. Chat admin untuk cek stok, kebutuhan daya, dan estimasi pemasangan.`

## Internal Link Map

Source: `docs/source/radjaac/RADJAAC_INTERNAL_LINK_MAP.md`

9:Dokumen ini menjadi acuan internal linking untuk memastikan Google dan calon pembeli memahami hierarki situs RADJA AC: homepage sebagai hub utama, katalog/brand/B2B/area sebagai money page, artikel sebagai feeder, dan `/kontak` atau CTA WhatsApp sebagai titik akhir konversi. Audit publik menunjukkan homepage RADJA AC sudah memakai title yang lebih luas ke Pulau Jawa, tetapi heading utama dan quick links yang terlihat masih sangat lokal ke Purwokerto; halaman kontak juga menegaskan basis fisik showroom/stok ada di Pamijen, Sokaraja, Banyumas, sementara gallery dan tentang-kami sudah memuat showroom, gudang, pengiriman, pemasangan, dan sertifikasi dealer. Google sendiri menegaskan bahwa link internal membantu crawler menemukan halaman penting, anchor text harus deskriptif, setiap halaman penting sebaiknya mendapat link dari halaman lain, dan halaman penting sebaiknya mudah dicapai dari homepage. citeturn3search2turn1view0turn27search0turn28search2turn28search3turn20view0turn21view1turn21view3
13:- Internal link harus mengikuti model **hub → money page → trust/conversion**, bukan blog roll acak. Fokus urutan: homepage → katalog/brand/B2B/area → `/kontak` atau WhatsApp. citeturn20view0turn21view1turn21view3
15:- Artikel edukasi bukan tujuan akhir. Artikel harus mendorong user ke money page yang paling relevan: katalog kapasitas/tipe, brand page, area page, atau B2B segment page. citeturn20view0turn21view1
16:- Halaman yang sudah 301 redirect **tidak boleh lagi** menjadi target internal link. Google menyebut redirect sebagai sinyal kanonik kuat dan menyarankan linking internal ke canonical URL, bukan ke versi duplikat/lama. citeturn20view7turn33view1
17:- Homepage tidak boleh hanya menyalurkan otoritas ke Purwokerto. Untuk ekspansi Jawa, homepage harus mengangkat katalog, B2B, kalkulator, proof, dan minimum beberapa area prioritas yang benar-benar dilayani. Audit saat ini masih memperlihatkan quick links lokal Purwokerto sebagai blok yang paling kasat mata. citeturn1view0turn3search2
18:- Proof pages wajib ikut dalam arsitektur link. Karena gallery dan halaman tentang-kami sudah mengandung showroom, gudang, pengiriman, pemasangan, dan sertifikasi dealer, kedua aset ini harus dipakai sebagai trust layer untuk area page dan B2B page. citeturn28search2turn28search3turn28search5turn28search7turn28search11
22:| Source Page | Link To | Anchor Text | Tujuan Link | Prioritas | Catatan |
24:| `/` | `/katalog`<br>`/pengadaan-ac`<br>`/kalkulator-pk-ac`<br>`/gallery`<br>`/kontak` | katalog AC original<br>pengadaan AC proyek & banyak unit<br>kalkulator PK AC<br>gallery showroom, stok & pengiriman<br>kontak & WhatsApp RADJA AC | Menetapkan homepage sebagai hub utama | Tinggi | Tambahkan juga 3 link brand utama dan 2–3 area prioritas yang benar-benar dilayani; jangan hanya quick links Purwokerto |
25:| `/` | `/brand/daikin`<br>`/brand/gree`<br>`/brand/midea` | AC Daikin original<br>AC Gree original<br>AC Midea original | Menyalurkan intent brand dari homepage | Tinggi | Brand yang diprioritaskan di homepage cukup 3–5; yang lain masuk ke `/brand/lainnya` atau blok brand |
26:| `/jual-ac-purwokerto` | `/katalog/ac-1-2-pk`<br>`/katalog/ac-low-watt`<br>`/katalog/ac-inverter`<br>`/kalkulator-pk-ac`<br>`/kontak` | AC 1/2 PK untuk kamar & rumah<br>AC low watt untuk listrik 900–1300 watt<br>AC inverter untuk pemakaian lama<br>hitung kebutuhan PK AC<br>chat admin & cek stok | Mengubah area intent menjadi konsultasi dan order | Tinggi | `/jual-ac-purwokerto` adalah money page area; semua CTA artikel “toko AC Purwokerto” harus berakhir di sini |
32:| `/katalog/ac-kantor-komersial` | `/pengadaan-ac`<br>`/pengadaan-ac/kontraktor-developer`<br>`/pengadaan-ac/hotel-guest-house`<br>`/pengadaan-ac/kost-apartemen-skala-besar`<br>`/gallery`<br>`/kontak` | pengadaan AC proyek<br>AC untuk kontraktor & developer<br>AC untuk hotel & guest house<br>AC untuk kost & apartemen banyak unit<br>bukti pengiriman & pemasangan<br>minta estimasi via WhatsApp | Menjembatani katalog komersial ke B2B | Tinggi | Ini money page semi-hub; jangan diarahkan ke artikel generik |
33:| `/brand/daikin` | `/katalog/ac-inverter`<br>`/katalog/ac-split-rumah`<br>`/katalog/ac-kantor-komersial`<br>`/kalkulator-pk-ac`<br>`/gallery`<br>`/kontak` | Daikin inverter<br>Daikin untuk rumah<br>Daikin untuk kantor & proyek<br>hitung PK sebelum pilih Daikin<br>lihat sertifikat & pengiriman<br>cek stok Daikin | Menjaga brand intent tetap dekat ke transaksi | Tinggi | Gunakan proof sertifikat di halaman brand sebagai alasan mengirim traffic dari area/B2B |
34:| `/brand/gree` | `/katalog/ac-inverter`<br>`/katalog/ac-low-watt`<br>`/katalog/ac-split-rumah`<br>`/kalkulator-pk-ac`<br>`/kontak` | Gree inverter<br>Gree low watt<br>Gree untuk rumah & kost<br>hitung PK sebelum pilih Gree<br>cek stok Gree | Menghubungkan Gree ke use case hemat dan mass market | Tinggi | Cocok juga jadi brand default untuk beberapa area page dan B2B budget-menengah |
35:| `/brand/midea` | `/katalog/ac-low-watt`<br>`/katalog/ac-split-rumah`<br>`/katalog/ac-inverter`<br>`/kalkulator-pk-ac`<br>`/kontak` | Midea low watt<br>Midea untuk kamar & rumah<br>Midea inverter<br>hitung PK dulu<br>cek stok Midea | Menjaga halaman brand sebagai filter pilihan, bukan artikel info | Tinggi | Jangan link ke artikel lama “harga AC Midea Purwokerto”; langsung ke brand canonical |
36:| `/pengadaan-ac` | `/pengadaan-ac/kontraktor-developer`<br>`/pengadaan-ac/hotel-guest-house`<br>`/pengadaan-ac/kost-apartemen-skala-besar`<br>`/katalog/ac-kantor-komersial`<br>`/gallery`<br>`/kontak` | pengadaan untuk kontraktor & developer<br>pengadaan untuk hotel & guest house<br>pengadaan untuk kost & apartemen<br>katalog AC komersial<br>proof pengiriman & showroom<br>minta estimasi proyek | Menetapkan hub B2B utama | Tinggi | Tambahkan section “data yang perlu disiapkan sebelum minta estimasi” dengan link ke CTA |
37:| `/pengadaan-ac/kontraktor-developer` | `/katalog/ac-kantor-komersial`<br>`/brand/daikin`<br>`/brand/gree`<br>`/gallery`<br>`/tentang-kami`<br>`/kontak` | pilihan AC untuk proyek bangunan<br>brand Daikin untuk proyek<br>brand Gree untuk proyek<br>bukti pengiriman proyek<br>profil & sertifikasi dealer<br>kirim data proyek via WhatsApp | Menutup query pengadaan proyek ke konsultasi teknis | Tinggi | Hubungkan ke proof, bukan ke artikel area |
38:| `/pengadaan-ac/hotel-guest-house` | `/katalog/ac-kantor-komersial`<br>`/katalog/ac-inverter`<br>`/brand/gree`<br>`/brand/daikin`<br>`/gallery`<br>`/kontak` | AC untuk lobby, kamar & area komunal<br>opsi inverter untuk pemakaian lama<br>opsi Gree untuk banyak kamar<br>opsi Daikin untuk kebutuhan premium<br>lihat pemasangan & pengiriman<br>minta rekomendasi unit hotel | Menghubungkan intent hospitality ke tipe dan brand yang cocok | Tinggi | Tambahkan CTA “kirim jumlah kamar, tipe ruangan, dan daya listrik” |
39:| `/pengadaan-ac/kost-apartemen-skala-besar` | `/katalog/ac-1-2-pk`<br>`/katalog/ac-low-watt`<br>`/brand/midea`<br>`/brand/gree`<br>`/gallery`<br>`/kontak` | AC 1/2 PK untuk banyak kamar<br>opsi low watt untuk daya terbatas<br>brand Midea untuk kost<br>brand Gree untuk apartemen sewa<br>bukti pengiriman banyak unit<br>konsultasi banyak unit via WhatsApp | Menutup intent kost/apartemen ke solusi banyak unit | Tinggi | Jangan arahkan user ke artikel kost lama yang sudah/harus redirect |
41:| `/kalkulator-pk-ac` | `/katalog/ac-1-2-pk`<br>`/katalog/ac-low-watt`<br>`/katalog/ac-inverter`<br>`/pengadaan-ac`<br>`/kontak` | lihat AC sesuai hasil hitung<br>opsi untuk listrik terbatas<br>opsi untuk pemakaian lama<br>butuh banyak unit?<br>kirim ukuran ruangan via WhatsApp | Mengubah tool menjadi entry komersial | Tinggi | Output kalkulator wajib memberi branch CTA berbeda untuk rumah vs banyak unit |
42:| `/kontak` | `/gallery`<br>`/tentang-kami`<br>`/katalog`<br>`/pengadaan-ac` | lihat showroom & bukti pengiriman<br>profil & sertifikasi RADJA AC<br>kembali ke katalog<br>butuh pengadaan banyak unit? | Memperkuat trust sebelum user chat/kunjungan | Sedang | Halaman kontak tetap minimal; outbound jangan terlalu ramai |
44:| Semua halaman | **Jangan link ke:** `/artikel/harga-ac-1-2-pk-purwokerto-pemasangan`, `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto`, `/artikel/harga-ac-daikin-purwokerto`, `/artikel/harga-ac-gree-purwokerto`, `/artikel/harga-ac-midea-purwokerto`, `/artikel/daikin-inverter-purwokerto`, `/artikel/ac-untuk-kost-purwokerto`, `/pengadaan-ac-proyek` | — | Membersihkan sinyal ke canonical URL | Tinggi | Redirect-redirect ini sudah terverifikasi saat audit, jadi internal link harus langsung ke target final. citeturn6view0turn6view1turn6view2turn6view3turn8view0turn8view1turn8view2turn8view3 |
46:Audit publik juga memperlihatkan brand pages, katalog pages, dan banyak artikel masih membawa judul/snippet yang lokal ke Purwokerto/Banyumas, sehingga internal link harus membantu memperjelas peran halaman: brand untuk intent merek, katalog untuk intent tipe/kapasitas, area untuk intent kota, dan B2B untuk intent pembelian banyak unit. citeturn2search1turn2search4turn2search9turn2search12turn2search15turn2search18turn34search1turn34search2turn34search3
50:- Setiap halaman baru harus ditetapkan lebih dulu sebagai **hub**, **money page**, **supporting article**, atau **trust page**. Jangan publish halaman tanpa peran.
52:- Artikel harus selalu punya minimal dua outbound internal links: satu ke money page utama, satu ke trust/conversion page (`/kontak`, `/gallery`, atau segmen B2B yang relevan).
53:- Area page wajib mengarah ke: satu katalog yang paling cocok, satu atau dua brand yang paling relevan, dan `/kontak`. Jangan jadikan area page buntu.
54:- Brand page wajib mengarah ke katalog yang relevan dengan brand tersebut, kalkulator PK, dan CTA WhatsApp.
55:- Katalog page wajib mengarah ke kalkulator PK, opsi brand, dan CTA konsultasi.
56:- B2B page wajib mengarah ke katalog komersial, proof (`/gallery` atau `/tentang-kami`), dan CTA konsultasi data proyek.
57:- Jika URL sumber sudah 301, semua internal link lama harus diganti ke target final sebelum publish batch berikutnya. citeturn20view7turn33view1
59:- Jangan membuat blok internal link yang panjang seperti spam footer. Lebih baik sedikit tetapi jelas, kontekstual, dan cukup dekat dengan CTA. citeturn21view1turn21view2
61:## Jangan Dilakukan
63:- Jangan menghubungkan artikel langsung ke artikel lain jika intent komersial yang lebih dekat sudah ada di katalog, brand, area, atau B2B.
64:- Jangan memberi internal link ke URL redirect, URL legacy, atau slug yang belum diputuskan sebagai canonical.
65:- Jangan memakai anchor text “harga AC murah”, “toko resmi”, “dealer kota X” jika halaman tujuan bukan bukti fisik atau klaim yang bisa diverifikasi.
66:- Jangan membuat homepage menjadi daftar area page semata; homepage harus tetap dominan sebagai hub kategori dan trust.
67:- Jangan menjejalkan semua brand ke semua area page. Pilih 2–3 brand yang relevan dengan kebutuhan halaman.
68:- Jangan menjadikan `/gallery` atau `/tentang-kami` sebagai tujuan akhir tanpa CTA balik ke order.
69:- Jangan menambah link internal massal ke artikel yang berpotensi cannibalize money page.
73:Contoh blok internal link di akhir artikel edukasi:
75:- **Butuh rekomendasi unit setelah hitung PK?** Lihat **katalog AC 1/2 PK**, bandingkan **AC low watt** untuk daya terbatas, atau **chat admin** untuk cek stok dan opsi pemasangan.
77:Contoh blok internal link di brand page:
81:Contoh blok internal link di B2B page:
83:- **Sudah punya data jumlah kamar/ruangan?** Lihat **katalog AC kantor & komersial**, cek **gallery pengiriman**, lalu **kirim data proyek via WhatsApp**.
91:- `gallery showroom, stok & pengiriman`
92:- `kirim ukuran ruangan via WhatsApp`

## Trust Asset Map

Source: `docs/source/radjaac/RADJAAC_TRUST_ASSET_MAP.md`

13:Dokumen ini mengatur bagaimana trust proof RADJA AC dipakai lintas halaman supaya membantu konversi tanpa menimbulkan klaim palsu. Dari riset publik saat ini, trust asset yang sudah terlihat/terverifikasi adalah: identitas fisik showroom/stok di Pamijen, Sokaraja, Banyumas pada halaman kontak; halaman tentang kami dengan identitas bisnis publik; halaman proof yang canonical-nya menuju halaman bukti pengiriman/proyek; serta listing resmi **Proshop Gree RADJA AC Purwokerto** pada situs resmi Gree Indonesia. citeturn6search0turn5search2turn30view1turn30view3
20:- Proof visual lebih baik jika dekat dengan CTA, terutama pada area page, B2B page, dan katalog komersial.
27:| Showroom fisik Pamijen–Sokaraja–Banyumas | Homepage, Kontak, Tentang Kami, footer semua page, area page sebagai secondary proof | Menguatkan entity dan alamat basis | “Showroom dan titik stok RADJA AC berada di Pamijen, Sokaraja, Banyumas. Dari basis ini admin bantu cek stok, pengiriman unit, dan koordinasi opsi pemasangan.” | “Showroom RADJA AC di Pamijen Sokaraja Banyumas” | Halaman kontak publik sudah menyebut area showroom & stok di Pamijen, Sokaraja – Banyumas. citeturn6search0 |
28:| Gudang / stok unit | Homepage, Katalog, Kontak, Proof page | Menjawab kecemasan ketersediaan unit | “Foto stok unit di-update sebagai bukti jenis AC yang benar-benar masuk jalur suplai RADJA AC.” | “Stok unit AC RADJA AC di Banyumas” | Perlu disiplin tanggal foto; jangan pakai foto stok lama tanpa konteks. |
29:| Public contact identity | Kontak, footer, semua CTA section | Menegaskan bahwa lead chat menuju admin bisnis nyata | “Admin WhatsApp RADJA AC siap bantu cek PK, stok, dan opsi pemasangan.” | Tidak wajib alt; biasanya teks bukan gambar | About/Kontak publik menampilkan WhatsApp dan email info. citeturn5search2turn5search4 |
30:| Proof page `bukti-pengiriman-proyek` | Homepage, Area, B2B, Katalog, Brand, Kontak | Bukti aktivitas pengiriman/proyek | “Lihat dokumentasi pengiriman dan pekerjaan yang pernah ditangani RADJA AC.” | “Bukti pengiriman unit AC RADJA AC” | `gallery` saat ini terlihat redirect ke `bukti-pengiriman-proyek`; URL final itulah yang harus dipakai. citeturn30view1 |
32:| Garansi teknisi 1 bulan | Katalog, terutama `ac-inverter`, area page, CTA support section | Mengurangi kekhawatiran pemasangan | “Untuk pekerjaan pemasangan tertentu, tersedia garansi teknisi 1 bulan.” | “Dokumentasi pemasangan AC RADJA AC” | Publik sudah menampilkan klaim ini pada snippet katalog inverter; **konfirmasi operasional bulanan** sebelum dipasang sitewide. citeturn23search6 |
33:| Konsultasi PK | Homepage, Area, Katalog, Kalkulator, Artikel, Brand | Menjembatani pengguna dari riset ke lead | “Sebelum pilih unit, admin bantu hitung kebutuhan PK awal dari ukuran ruangan dan daya listrik.” | “Konsultasi kebutuhan PK AC oleh RADJA AC” | Bukti publik kuat di homepage, area, kalkulator, dan artikel. citeturn3search6turn23search10turn3search1turn31search4 |
34:| Bukti pengiriman luar kota | Area page, B2B, Proof page | Menjawab keraguan layanan luar Banyumas | “Untuk area luar kota, RADJA AC bantu pengiriman unit dan koordinasi opsi pemasangan sesuai kebutuhan.” | “Bukti pengiriman unit AC RADJA AC ke [kota]” | Hanya gunakan nama kota pada alt/copy jika dokumentasinya memang kota tersebut. |
35:| Sertifikat dealer / brand lain | Brand page, Tentang Kami, Homepage | Mengangkat trust supply chain | “Dokumen pendukung brand ditampilkan sesuai status yang masih berlaku.” | “Dokumen pendukung brand AC di RADJA AC” | Hanya tampilkan sertifikat yang masih valid dan bisa diverifikasi; jangan generalisasi semua brand. |
40:- Setiap area page harus punya **minimal satu trust block** yang menegaskan basis RADJA AC di Banyumas dan satu jalur ke proof page.
41:- Setiap B2B page harus punya **proof module** sebelum CTA terakhir.
47:### Jangan Dilakukan
49:- Jangan klaim punya showroom di Semarang, Solo, Yogyakarta, atau kota lain jika basis fisik yang terverifikasi hanya di Banyumas.
50:- Jangan pakai review/rating palsu.
51:- Jangan pakai sertifikat brand yang masa berlakunya tidak jelas.
52:- Jangan overclaim “dealer resmi” untuk semua brand.
53:- Jangan jadikan Google Maps review sebagai trust utama sebelum strategi nomor dan listing diputuskan.
54:- Jangan menempelkan trust proof jauh di bawah halaman sampai tidak ikut mendukung CTA utama.
60:> “RADJA AC berbasis di Pamijen, Sokaraja, Banyumas dan membantu pembelian AC original multi-brand untuk rumah, kost, toko, kantor, hotel, dan proyek di Pulau Jawa. Admin bantu cek PK, stok unit, pengiriman, dan opsi pemasangan.”
64:**Area page safe trust copy**
66:> “Basis RADJA AC ada di Pamijen, Sokaraja, Banyumas. Untuk kebutuhan area Yogyakarta, admin bantu konsultasi PK, cek stok unit, pengiriman, dan koordinasi opsi pemasangan sesuai kebutuhan.”
76:- Judul: “Bukti Pengiriman dan Penanganan Banyak Unit”
77:- Isi: 6–12 foto proyek/pengiriman nyata
78:- CTA: “Kirim Brief Proyek ke Admin”

## WhatsApp Conversion System

Source: `docs/source/radjaac/RADJAAC_WHATSAPP_CONVERSION_SYSTEM.md`

1:# RADJAAC_WHATSAPP_CONVERSION_SYSTEM.md
3:## RADJAAC WhatsApp Conversion System
5:File: `RADJAAC_WHATSAPP_CONVERSION_SYSTEM.md`
13:Dokumen ini menetapkan standar CTA WhatsApp, prefilled message, data kualifikasi lead, dan tracking GA4/GTM agar semua page type di RADJA AC mendorong user ke chat yang lebih jelas maksudnya. Google Analytics mendukung custom event dan custom parameter melalui Google tag atau GTM, dan parameter baru menjadi benar-benar reportable setelah didaftarkan sebagai custom dimension atau metric. Untuk traffic acquisition, Google juga tetap menggunakan standar UTM pada URL campaign masuk. citeturn28view0turn28view2turn28view1
17:- Gunakan **satu primary WhatsApp pathway** sitewide, kecuali owner punya keputusan resmi lain.
18:- CTA harus menyebut **aksi dan konteks**, bukan sekadar “Hubungi Kami”.
25:| Page Type | CTA Button | Microcopy | Data yang Diminta | Prefilled Message | `wa_source` | `wa_label` |
28:| Area page | **Chat untuk Area [Kota]** | “Tulis kota, jenis bangunan, dan kebutuhan unit/pasang agar admin bisa arahkan lebih cepat.” | kota target, jenis bangunan, ukuran ruangan, daya listrik, unit saja/pasang | “Halo RADJA AC, saya dari [kota]. Mau konsultasi AC untuk [rumah/kost/toko/kantor]. Ukuran ruangan [x], listrik [daya], kebutuhan [unit saja/pasang].” | `area_[kota]` | `hero_area` |
29:| Brand page | **Cek Stok [Brand] via WhatsApp** | “Kirim ukuran ruangan, kota, dan brand yang diminati.” | brand, kota, ukuran ruangan, daya listrik, budget | “Halo RADJA AC, saya mau tanya AC [brand]. Lokasi [kota], ukuran ruangan [x], listrik [daya], budget [range]. Bisa bantu cek stok?” | `brand_[brand]` | `brand_stock_check` |
36:| Katalog AC Kantor/Komersial | **Konsultasi AC Usaha / Kantor** | “Kirim jenis usaha, jumlah ruang, dan kebutuhan unit.” | jenis usaha, jumlah ruang, ukuran kira-kira, kota, unit/pasang | “Halo RADJA AC, saya butuh AC untuk [kantor/toko/cafe/showroom]. Lokasi [kota], kebutuhan [jumlah ruang/unit], mohon arahannya.” | `cat_commercial` | `commercial_consult` |
41:| Artikel edukasi | **Konsultasi Kebutuhan AC** | “Kalau sudah baca panduan, kirim ukuran ruangan dan kota agar admin bantu finalisasi pilihan.” | ukuran ruangan, kota, daya listrik, topik artikel | “Halo RADJA AC, saya habis baca panduannya dan mau lanjut konsultasi. Topik saya [isi], ukuran ruangan [x], lokasi [kota], listrik [daya].” | `article_[topic]` | `article_cta` |
44:| Gallery / proof | **Tanya Pengiriman & Bukti Proyek** | “Kalau ingin lihat contoh serupa dengan kebutuhan Anda, tulis kota dan jenis proyek.” | kota, jenis proyek, jumlah unit perkiraan | “Halo RADJA AC, saya sudah lihat bukti pengiriman/proyek. Saya butuh untuk [jenis proyek] di [kota], perkiraan kebutuhan [jumlah unit].” | `proof_gallery` | `proof_followup` |
57:- B2B CTA wajib meminta minimal: lokasi proyek, jenis bangunan, jumlah unit kira-kira, timeline.
58:- Artikel edukasi wajib punya CTA yang mengarah ke konsultasi atau money page terdekat, bukan CTA umum.
60:### Jangan Dilakukan
62:- Jangan pakai CTA generik seperti “Hubungi Kami”, “Klik di Sini”, atau “Tanya-Tanya”.
63:- Jangan arahkan user ke nomor WhatsApp yang berbeda-beda tanpa governance.
64:- Jangan membuat prefilled message terlalu panjang sampai user malas mengirim.
65:- Jangan minta semua data di awal untuk retail; cukup data yang paling mempengaruhi rekomendasi.
66:- Jangan menampilkan CTA sebelum ada konteks trust pada page type berisiko tinggi seperti B2B, area luar kota, dan katalog komersial.
67:- Jangan jadikan review Google Maps sebagai CTA utama sebelum strategi listing disepakati.
75:| `wa_click` | klik link ke WhatsApp | `wa_source`, `wa_label`, `page_type`, `intent_type`, `city_target`, `brand_target`, `segment_target`, `pk_estimate_band` | Membaca sumber dan niat lead |
76:| `wa_click_sticky` | klik CTA sticky mobile | semua param di atas + `placement=sticky` | Membandingkan performa sticky CTA |
77:| `wa_click_after_calc` | klik CTA sesudah kalkulator | semua param di atas + `calc_result` | Menghubungkan kalkulator dengan lead |
79:**Contoh markup CTA**
99:| High quality | Menyebut ukuran ruangan, daya listrik, kota, budget atau brand; untuk B2B menyebut jumlah unit + lokasi + timeline | Follow-up cepat, prioritaskan |
103:**Mapping query ke CTA intent**
105:| Query Family | CTA intent yang dipakai | Data minimal |

## Do Not Violate Rules

Source: `docs/source/radjaac/RADJAAC_DO_NOT_VIOLATE_RULES.md`

9:Menjadi guardrail keras agar pengembangan website RADJA AC tetap jujur, efektif, aman untuk SEO, dan tidak menyimpang dari target utama: **lead WhatsApp berkualitas dari Pulau Jawa**.
11:Aturan keras ini dikunci oleh tiga sumber risiko utama: pedoman Google Business Profile/LocalBusiness untuk akurasi lokasi; pedoman Search Central tentang helpful content, doorway pages, dan scaled content abuse; serta best practice Google untuk title link, redirects, sitemap, noindex, dan URL Inspection/Search Console. Audit publik RADJA AC juga menunjukkan aturan ini perlu ditegakkan karena beberapa area snippet sudah aman, tetapi banyak brand/katalog masih tampil terlalu Purwokerto-sentris di SERP. citeturn35search7turn35search16turn35search1turn36search0turn15search4turn36search1turn15search2turn16search0turn16search1turn17search0turn17search6turn22search0turn22search1turn22search4turn22search11
17:- Semua perubahan besar harus memikirkan redirect, sitemap, indexing, internal link, dan dampak ke lead WA.
25:| Area pages | Bangun sesuai Tier; jangan mass-produce | SEO + Dev | Sebelum publish batch baru |
26:| Brand/katalog | Non-area page tidak boleh dipimpin keyword Purwokerto | SEO | Sebelum ganti title/H1 |
29:| CTA WhatsApp | Satu CTA utama per halaman | SEO + Owner | Saat review copy |
30:| Harga/stok | Jangan hardcode angka pasti bila cepat berubah | Owner + SEO | Saat update katalog |
31:| Schema | LocalBusiness hanya untuk entitas/lokasi nyata | Dev | Sebelum deploy schema |
37:- Selalu cek apakah halaman baru punya keyword, intent, CTA, dan money page target yang jelas.
39:- Jangan publish halaman yang title, H1, meta, dan CTA-nya saling bertabrakan.
40:- Setiap halaman baru wajib punya internal link masuk dan keluar.
41:- Semua area page wajib memakai copy aman: konsultasi PK, cek stok, pengiriman unit, opsi pemasangan.
42:- Jangan mengubah URL existing tanpa daftar redirect 301.
43:- Jangan memperluas ke Tier 2 sebelum Tier 1 rapi.
44:- Jangan memecah kategori komersial besar tanpa alasan intent yang jelas.
50:- Jika ada asumsi readiness bisnis, beri label **asumsi**, jangan ditulis sebagai fakta.
52:- Jangan menyimpulkan performa organik aktual tanpa data GSC.
56:- Jangan setujui halaman area baru bila SOP pengiriman/opsi pemasangan per koridor belum jelas.
57:- Jangan setujui money page B2B baru bila admin belum tahu data apa yang harus diminta.
58:- Jangan buka halaman VRV/VRF sebagai sales page jika readiness teknis belum ada.
59:- Jangan mendorong segmen pemerintah lebih dulu bila dokumen/vendor readiness belum matang.
60:- Jangan fokus pada traffic mentah; ukur page berdasarkan kualitas lead WA dan kesiapan closing.
62:**Jangan Dilakukan**
64:1. Jangan klaim punya toko fisik di kota luar Banyumas jika tidak ada alamat publik yang benar.
65:2. Jangan membuat “cabang” atau “showroom” fiktif hanya untuk SEO lokal.
66:3. Jangan membuat Google Business Profile baru untuk kota yang tidak punya lokasi nyata.
67:4. Jangan memakai schema `LocalBusiness` untuk kota target yang bukan lokasi bisnis yang sebenarnya.
68:5. Jangan menjadikan “Purwokerto” sebagai keyword utama di halaman brand, katalog, atau B2B non-area.
69:6. Jangan membiarkan title brand/katalog tetap terlalu Purwokerto-sentris jika target halaman itu sudah Jawa-wide.
70:7. Jangan membuat area page copy-paste yang hanya mengganti nama kota.
71:8. Jangan membuat banyak halaman area sekaligus bila isi utamanya tipis dan tidak unik.
72:9. Jangan membuat halaman yang fungsi utamanya hanya menangkap keyword lalu melempar user ke halaman lain; itu pola doorway page.
73:10. Jangan memproduksi page programmatic dalam jumlah besar jika nilainya untuk user rendah.
74:11. Jangan menulis title yang berbeda jauh dari H1 utama.
75:12. Jangan menaruh beberapa heading besar yang membingungkan Google soal judul utama halaman.
76:13. Jangan menulis meta description yang berjanji sesuatu yang tidak ada di halaman.
77:14. Jangan menulis harga pasti jika stok dan harga berubah cepat.
78:15. Jangan menulis “ready semua brand/semua PK” jika belum diverifikasi hari itu.
79:16. Jangan menjanjikan pemasangan nasional tanpa SOP partner dan batas cakupan yang jelas.
80:17. Jangan membuat artikel yang memakan money page.
81:18. Jangan membuat artikel head-term transaksi seperti “harga AC 1 PK”, “jual AC 2 PK”, atau “harga AC cassette” jika katalog halaman itu menjadi prioritas.
82:19. Jangan biarkan ` /kalkulator-pk-ac` mencoba ranking untuk semua keyword transaksi kapasitas.
83:20. Jangan menghapus URL lama tanpa redirect 301 ke URL terdekat yang paling relevan.
84:21. Jangan memakai 302 untuk perpindahan halaman yang permanen.
85:22. Jangan mengubah struktur slug besar tanpa audit redirect, sitemap, dan dampak GSC.
86:23. Jangan publish halaman baru sebelum masuk sitemap.
87:24. Jangan request indexing massal tanpa memastikan canonical, robots, dan status indexability benar.
88:25. Jangan memberi `noindex` ke money page utama.
89:26. Jangan memakai canonical ke halaman induk jika halaman child sebenarnya harus berdiri sendiri.
90:27. Jangan mengandalkan `robots.txt` untuk menyelesaikan masalah duplikasi halaman yang sebenarnya butuh canonical/redirect.
91:28. Jangan membuat CTA terlalu banyak dan membingungkan; satu halaman harus punya satu CTA WA dominan.
92:29. Jangan membuka terlalu banyak nomor WhatsApp berbeda tanpa routing yang jelas.
93:30. Jangan memakai testimonial, project photo, atau klaim merek resmi yang tidak bisa dibuktikan.
94:31. Jangan memasang FAQ markup bila FAQ tidak benar-benar tampil dan relevan di halaman.
95:32. Jangan membuat halaman B2B tanpa blok “data yang harus diminta sebelum estimasi”.
96:33. Jangan mendorong halaman instansi pemerintah sebagai money page utama sebelum readiness dokumen vendor jelas.
97:34. Jangan membuat halaman `VRV/VRF` sebagai sales page sebelum ada capability, survey flow, dan partner yang benar-benar siap.
98:35. Jangan menambah halaman baru sebelum jelas target keyword, intent, dan target money page-nya.
99:36. Jangan mengubah struktur besar website tanpa audit sitemap, redirect, internal link, dan dampak GSC.
100:37. Jangan menganggap traffic artikel sebagai kemenangan bila tidak mendorong lead WA yang qualified.
101:38. Jangan menaikkan Tier 2/Tier 3 sebelum Tier 1 rapi secara snippet, internal link, dan CTA.
102:39. Jangan biarkan halaman live tanpa owner yang bertanggung jawab atas update stok/copy/CTA.
103:40. Jangan menunda audit bulanan SERP dan snippet untuk area, brand, dan katalog.
109:| Buat halaman area baru | Cek Tier, tentukan intent, buat title/H1/CTA unik, masukkan sitemap, link dari katalog/brand/B2B | Publish slug baru hanya karena nama kota besar |
110:| Merge artikel lama ke katalog | Redirect 301 ke page paling relevan dan update internal link | Hapus URL lama tanpa redirect |
111:| Update brand page | Kurangi bias Purwokerto bila page dimaksudkan non-area, tambahkan link ke katalog/CTA WA | Membiarkan semua brand page terlihat seperti landing lokal yang sama |
