# RADJAAC_INTERNAL_LINK_MAP.md

## Status

Needs quarterly refresh

## Fungsi Dokumen

Dokumen ini menjadi acuan internal linking untuk memastikan Google dan calon pembeli memahami hierarki situs RADJA AC: homepage sebagai hub utama, katalog/brand/B2B/area sebagai money page, artikel sebagai feeder, dan `/kontak` atau CTA WhatsApp sebagai titik akhir konversi. Audit publik menunjukkan homepage RADJA AC sudah memakai title yang lebih luas ke Pulau Jawa, tetapi heading utama dan quick links yang terlihat masih sangat lokal ke Purwokerto; halaman kontak juga menegaskan basis fisik showroom/stok ada di Pamijen, Sokaraja, Banyumas, sementara gallery dan tentang-kami sudah memuat showroom, gudang, pengiriman, pemasangan, dan sertifikasi dealer. Google sendiri menegaskan bahwa link internal membantu crawler menemukan halaman penting, anchor text harus deskriptif, setiap halaman penting sebaiknya mendapat link dari halaman lain, dan halaman penting sebaiknya mudah dicapai dari homepage. citeturn3search2turn1view0turn27search0turn28search2turn28search3turn20view0turn21view1turn21view3

## Prinsip Utama

- Internal link harus mengikuti model **hub → money page → trust/conversion**, bukan blog roll acak. Fokus urutan: homepage → katalog/brand/B2B/area → `/kontak` atau WhatsApp. citeturn20view0turn21view1turn21view3
- Anchor text wajib jelas, ringkas, dan sesuai intent halaman tujuan. Hindari anchor generik seperti “klik di sini”, “baca selengkapnya”, atau “lihat detail” tanpa konteks. citeturn21view0turn21view2
- Artikel edukasi bukan tujuan akhir. Artikel harus mendorong user ke money page yang paling relevan: katalog kapasitas/tipe, brand page, area page, atau B2B segment page. citeturn20view0turn21view1
- Halaman yang sudah 301 redirect **tidak boleh lagi** menjadi target internal link. Google menyebut redirect sebagai sinyal kanonik kuat dan menyarankan linking internal ke canonical URL, bukan ke versi duplikat/lama. citeturn20view7turn33view1
- Homepage tidak boleh hanya menyalurkan otoritas ke Purwokerto. Untuk ekspansi Jawa, homepage harus mengangkat katalog, B2B, kalkulator, proof, dan minimum beberapa area prioritas yang benar-benar dilayani. Audit saat ini masih memperlihatkan quick links lokal Purwokerto sebagai blok yang paling kasat mata. citeturn1view0turn3search2
- Proof pages wajib ikut dalam arsitektur link. Karena gallery dan halaman tentang-kami sudah mengandung showroom, gudang, pengiriman, pemasangan, dan sertifikasi dealer, kedua aset ini harus dipakai sebagai trust layer untuk area page dan B2B page. citeturn28search2turn28search3turn28search5turn28search7turn28search11

## Tabel Keputusan

| Source Page | Link To | Anchor Text | Tujuan Link | Prioritas | Catatan |
|---|---|---|---|---|---|
| `/` | `/katalog`<br>`/pengadaan-ac`<br>`/kalkulator-pk-ac`<br>`/gallery`<br>`/kontak` | katalog AC original<br>pengadaan AC proyek & banyak unit<br>kalkulator PK AC<br>gallery showroom, stok & pengiriman<br>kontak & WhatsApp RADJA AC | Menetapkan homepage sebagai hub utama | Tinggi | Tambahkan juga 3 link brand utama dan 2–3 area prioritas yang benar-benar dilayani; jangan hanya quick links Purwokerto |
| `/` | `/brand/daikin`<br>`/brand/gree`<br>`/brand/midea` | AC Daikin original<br>AC Gree original<br>AC Midea original | Menyalurkan intent brand dari homepage | Tinggi | Brand yang diprioritaskan di homepage cukup 3–5; yang lain masuk ke `/brand/lainnya` atau blok brand |
| `/jual-ac-purwokerto` | `/katalog/ac-1-2-pk`<br>`/katalog/ac-low-watt`<br>`/katalog/ac-inverter`<br>`/kalkulator-pk-ac`<br>`/kontak` | AC 1/2 PK untuk kamar & rumah<br>AC low watt untuk listrik 900–1300 watt<br>AC inverter untuk pemakaian lama<br>hitung kebutuhan PK AC<br>chat admin & cek stok | Mengubah area intent menjadi konsultasi dan order | Tinggi | `/jual-ac-purwokerto` adalah money page area; semua CTA artikel “toko AC Purwokerto” harus berakhir di sini |
| `/katalog` | `/katalog/ac-split-rumah`<br>`/katalog/ac-1-2-pk`<br>`/katalog/ac-low-watt`<br>`/katalog/ac-inverter`<br>`/katalog/ac-kantor-komersial`<br>`/kalkulator-pk-ac` | AC split rumah<br>AC 1/2 PK<br>AC low watt<br>AC inverter<br>AC kantor & komersial<br>kalkulator PK AC | Menjelaskan struktur katalog | Tinggi | Katalog hub harus jadi pintu utama intent produk, bukan artikel |
| `/katalog/ac-1-2-pk` | `/kalkulator-pk-ac`<br>`/brand/daikin`<br>`/brand/gree`<br>`/brand/midea`<br>`/kontak` | hitung PK sebelum pilih 1/2 PK<br>pilihan Daikin 1/2 PK<br>pilihan Gree 1/2 PK<br>pilihan Midea 1/2 PK<br>cek stok & ongkir | Mengubah intent kapasitas menjadi shortlist brand dan konsultasi | Tinggi | Saat `/katalog/ac-1-pk` live, tambah link silang dua arah agar 1/2 PK dan 1 PK tidak kabur |
| `/katalog/ac-low-watt` | `/kalkulator-pk-ac`<br>`/katalog/ac-inverter`<br>`/brand/midea`<br>`/brand/gree`<br>`/brand/hisense`<br>`/kontak` | cek PK & daya listrik dulu<br>bandingkan low watt vs inverter<br>opsi low watt Midea<br>opsi low watt Gree<br>opsi low watt Hisense<br>tanya admin soal daya rumah | Membantu user membedakan problem listrik vs problem pola pakai | Tinggi | Sertakan 1 artikel komparasi, bukan 5 artikel turunan |
| `/katalog/ac-inverter` | `/kalkulator-pk-ac`<br>`/katalog/ac-low-watt`<br>`/brand/daikin`<br>`/brand/gree`<br>`/brand/samsung`<br>`/kontak` | cek kebutuhan PK ruangan<br>beda inverter vs low watt<br>opsi Daikin inverter<br>opsi Gree inverter<br>opsi Samsung inverter<br>cek stok inverter | Menjaga intent kategori inverter tetap komersial | Tinggi | Artikel “inverter vs low watt” harus mengarah ke sini, bukan sebaliknya mendominasi |
| `/katalog/ac-split-rumah` | `/katalog/ac-1-2-pk`<br>`/katalog/ac-inverter`<br>`/katalog/ac-low-watt`<br>`/kalkulator-pk-ac`<br>`/kontak` | AC split rumah 1/2 PK<br>AC split inverter<br>AC split low watt<br>hitung PK untuk rumah<br>konsultasi pembelian AC rumah | Menjadi parent untuk kebutuhan residensial | Tinggi | Setelah halaman kapasitas 1 PK, 1.5 PK, 2 PK live, link-kan dari blok “pilih berdasarkan ukuran ruangan” |
| `/katalog/ac-kantor-komersial` | `/pengadaan-ac`<br>`/pengadaan-ac/kontraktor-developer`<br>`/pengadaan-ac/hotel-guest-house`<br>`/pengadaan-ac/kost-apartemen-skala-besar`<br>`/gallery`<br>`/kontak` | pengadaan AC proyek<br>AC untuk kontraktor & developer<br>AC untuk hotel & guest house<br>AC untuk kost & apartemen banyak unit<br>bukti pengiriman & pemasangan<br>minta estimasi via WhatsApp | Menjembatani katalog komersial ke B2B | Tinggi | Ini money page semi-hub; jangan diarahkan ke artikel generik |
| `/brand/daikin` | `/katalog/ac-inverter`<br>`/katalog/ac-split-rumah`<br>`/katalog/ac-kantor-komersial`<br>`/kalkulator-pk-ac`<br>`/gallery`<br>`/kontak` | Daikin inverter<br>Daikin untuk rumah<br>Daikin untuk kantor & proyek<br>hitung PK sebelum pilih Daikin<br>lihat sertifikat & pengiriman<br>cek stok Daikin | Menjaga brand intent tetap dekat ke transaksi | Tinggi | Gunakan proof sertifikat di halaman brand sebagai alasan mengirim traffic dari area/B2B |
| `/brand/gree` | `/katalog/ac-inverter`<br>`/katalog/ac-low-watt`<br>`/katalog/ac-split-rumah`<br>`/kalkulator-pk-ac`<br>`/kontak` | Gree inverter<br>Gree low watt<br>Gree untuk rumah & kost<br>hitung PK sebelum pilih Gree<br>cek stok Gree | Menghubungkan Gree ke use case hemat dan mass market | Tinggi | Cocok juga jadi brand default untuk beberapa area page dan B2B budget-menengah |
| `/brand/midea` | `/katalog/ac-low-watt`<br>`/katalog/ac-split-rumah`<br>`/katalog/ac-inverter`<br>`/kalkulator-pk-ac`<br>`/kontak` | Midea low watt<br>Midea untuk kamar & rumah<br>Midea inverter<br>hitung PK dulu<br>cek stok Midea | Menjaga halaman brand sebagai filter pilihan, bukan artikel info | Tinggi | Jangan link ke artikel lama “harga AC Midea Purwokerto”; langsung ke brand canonical |
| `/pengadaan-ac` | `/pengadaan-ac/kontraktor-developer`<br>`/pengadaan-ac/hotel-guest-house`<br>`/pengadaan-ac/kost-apartemen-skala-besar`<br>`/katalog/ac-kantor-komersial`<br>`/gallery`<br>`/kontak` | pengadaan untuk kontraktor & developer<br>pengadaan untuk hotel & guest house<br>pengadaan untuk kost & apartemen<br>katalog AC komersial<br>proof pengiriman & showroom<br>minta estimasi proyek | Menetapkan hub B2B utama | Tinggi | Tambahkan section “data yang perlu disiapkan sebelum minta estimasi” dengan link ke CTA |
| `/pengadaan-ac/kontraktor-developer` | `/katalog/ac-kantor-komersial`<br>`/brand/daikin`<br>`/brand/gree`<br>`/gallery`<br>`/tentang-kami`<br>`/kontak` | pilihan AC untuk proyek bangunan<br>brand Daikin untuk proyek<br>brand Gree untuk proyek<br>bukti pengiriman proyek<br>profil & sertifikasi dealer<br>kirim data proyek via WhatsApp | Menutup query pengadaan proyek ke konsultasi teknis | Tinggi | Hubungkan ke proof, bukan ke artikel area |
| `/pengadaan-ac/hotel-guest-house` | `/katalog/ac-kantor-komersial`<br>`/katalog/ac-inverter`<br>`/brand/gree`<br>`/brand/daikin`<br>`/gallery`<br>`/kontak` | AC untuk lobby, kamar & area komunal<br>opsi inverter untuk pemakaian lama<br>opsi Gree untuk banyak kamar<br>opsi Daikin untuk kebutuhan premium<br>lihat pemasangan & pengiriman<br>minta rekomendasi unit hotel | Menghubungkan intent hospitality ke tipe dan brand yang cocok | Tinggi | Tambahkan CTA “kirim jumlah kamar, tipe ruangan, dan daya listrik” |
| `/pengadaan-ac/kost-apartemen-skala-besar` | `/katalog/ac-1-2-pk`<br>`/katalog/ac-low-watt`<br>`/brand/midea`<br>`/brand/gree`<br>`/gallery`<br>`/kontak` | AC 1/2 PK untuk banyak kamar<br>opsi low watt untuk daya terbatas<br>brand Midea untuk kost<br>brand Gree untuk apartemen sewa<br>bukti pengiriman banyak unit<br>konsultasi banyak unit via WhatsApp | Menutup intent kost/apartemen ke solusi banyak unit | Tinggi | Jangan arahkan user ke artikel kost lama yang sudah/harus redirect |
| `/artikel/panduan-beli-ac-baru`* | `/kalkulator-pk-ac`<br>`/katalog/ac-1-2-pk`<br>`/katalog/ac-low-watt`<br>`/katalog/ac-inverter`<br>`/pengadaan-ac`<br>`/kontak` | hitung PK sebelum beli<br>lihat pilihan AC rumah<br>cek opsi low watt<br>bandingkan opsi inverter<br>butuh banyak unit?<br>chat admin untuk cek stok | Mengubah artikel becoming guide menjadi feeder komersial | Tinggi | *Audit publik masih menampilkan slug buying-guide lain; pilih satu slug canonical saja dan pakai konsisten citeturn9search0 |
| `/kalkulator-pk-ac` | `/katalog/ac-1-2-pk`<br>`/katalog/ac-low-watt`<br>`/katalog/ac-inverter`<br>`/pengadaan-ac`<br>`/kontak` | lihat AC sesuai hasil hitung<br>opsi untuk listrik terbatas<br>opsi untuk pemakaian lama<br>butuh banyak unit?<br>kirim ukuran ruangan via WhatsApp | Mengubah tool menjadi entry komersial | Tinggi | Output kalkulator wajib memberi branch CTA berbeda untuk rumah vs banyak unit |
| `/kontak` | `/gallery`<br>`/tentang-kami`<br>`/katalog`<br>`/pengadaan-ac` | lihat showroom & bukti pengiriman<br>profil & sertifikasi RADJA AC<br>kembali ke katalog<br>butuh pengadaan banyak unit? | Memperkuat trust sebelum user chat/kunjungan | Sedang | Halaman kontak tetap minimal; outbound jangan terlalu ramai |
| `/gallery` | `/kontak`<br>`/pengadaan-ac`<br>`/brand/daikin`<br>`/brand/midea`<br>`/brand/hisense` | chat admin sekarang<br>konsultasi pengadaan proyek<br>lihat brand Daikin<br>lihat brand Midea<br>lihat brand Hisense | Memanfaatkan proof untuk memvalidasi brand dan proyek | Sedang | Gallery bukan dead-end; harus mengalir ke money page |
| Semua halaman | **Jangan link ke:** `/artikel/harga-ac-1-2-pk-purwokerto-pemasangan`, `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto`, `/artikel/harga-ac-daikin-purwokerto`, `/artikel/harga-ac-gree-purwokerto`, `/artikel/harga-ac-midea-purwokerto`, `/artikel/daikin-inverter-purwokerto`, `/artikel/ac-untuk-kost-purwokerto`, `/pengadaan-ac-proyek` | — | Membersihkan sinyal ke canonical URL | Tinggi | Redirect-redirect ini sudah terverifikasi saat audit, jadi internal link harus langsung ke target final. citeturn6view0turn6view1turn6view2turn6view3turn8view0turn8view1turn8view2turn8view3 |

Audit publik juga memperlihatkan brand pages, katalog pages, dan banyak artikel masih membawa judul/snippet yang lokal ke Purwokerto/Banyumas, sehingga internal link harus membantu memperjelas peran halaman: brand untuk intent merek, katalog untuk intent tipe/kapasitas, area untuk intent kota, dan B2B untuk intent pembelian banyak unit. citeturn2search1turn2search4turn2search9turn2search12turn2search15turn2search18turn34search1turn34search2turn34search3

## Aturan untuk Assistant/Codex

- Setiap halaman baru harus ditetapkan lebih dulu sebagai **hub**, **money page**, **supporting article**, atau **trust page**. Jangan publish halaman tanpa peran.
- Setiap money page wajib menerima minimal satu link dari homepage atau hub utama, dan minimal satu link kontekstual dari halaman lain yang relevan.
- Artikel harus selalu punya minimal dua outbound internal links: satu ke money page utama, satu ke trust/conversion page (`/kontak`, `/gallery`, atau segmen B2B yang relevan).
- Area page wajib mengarah ke: satu katalog yang paling cocok, satu atau dua brand yang paling relevan, dan `/kontak`. Jangan jadikan area page buntu.
- Brand page wajib mengarah ke katalog yang relevan dengan brand tersebut, kalkulator PK, dan CTA WhatsApp.
- Katalog page wajib mengarah ke kalkulator PK, opsi brand, dan CTA konsultasi.
- B2B page wajib mengarah ke katalog komersial, proof (`/gallery` atau `/tentang-kami`), dan CTA konsultasi data proyek.
- Jika URL sumber sudah 301, semua internal link lama harus diganti ke target final sebelum publish batch berikutnya. citeturn20view7turn33view1
- Anchor text harus memakai intent pengguna, misalnya “AC low watt untuk listrik 900 watt”, “cek stok Daikin”, “pengadaan AC hotel”, bukan frasa generik. citeturn21view0turn21view2
- Jangan membuat blok internal link yang panjang seperti spam footer. Lebih baik sedikit tetapi jelas, kontekstual, dan cukup dekat dengan CTA. citeturn21view1turn21view2

## Jangan Dilakukan

- Jangan menghubungkan artikel langsung ke artikel lain jika intent komersial yang lebih dekat sudah ada di katalog, brand, area, atau B2B.
- Jangan memberi internal link ke URL redirect, URL legacy, atau slug yang belum diputuskan sebagai canonical.
- Jangan memakai anchor text “harga AC murah”, “toko resmi”, “dealer kota X” jika halaman tujuan bukan bukti fisik atau klaim yang bisa diverifikasi.
- Jangan membuat homepage menjadi daftar area page semata; homepage harus tetap dominan sebagai hub kategori dan trust.
- Jangan menjejalkan semua brand ke semua area page. Pilih 2–3 brand yang relevan dengan kebutuhan halaman.
- Jangan menjadikan `/gallery` atau `/tentang-kami` sebagai tujuan akhir tanpa CTA balik ke order.
- Jangan menambah link internal massal ke artikel yang berpotensi cannibalize money page.

## Contoh Implementasi

Contoh blok internal link di akhir artikel edukasi:

- **Butuh rekomendasi unit setelah hitung PK?** Lihat **katalog AC 1/2 PK**, bandingkan **AC low watt** untuk daya terbatas, atau **chat admin** untuk cek stok dan opsi pemasangan.

Contoh blok internal link di brand page:

- **Masih bingung pilih tipe?** Cek **AC inverter**, lihat **AC split rumah**, atau gunakan **kalkulator PK AC** sebelum order.

Contoh blok internal link di B2B page:

- **Sudah punya data jumlah kamar/ruangan?** Lihat **katalog AC kantor & komersial**, cek **gallery pengiriman**, lalu **kirim data proyek via WhatsApp**.

Contoh anchor text aman yang disarankan:

- `hitung kebutuhan PK AC`
- `opsi low watt untuk listrik 900–1300 watt`
- `pengadaan AC hotel & guest house`
- `cek stok Daikin original`
- `gallery showroom, stok & pengiriman`
- `kirim ukuran ruangan via WhatsApp`
