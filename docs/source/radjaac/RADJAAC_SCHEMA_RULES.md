# RADJAAC_SCHEMA_RULES.md

## Status

Needs quarterly refresh

## Fungsi Dokumen

Dokumen ini menetapkan aturan schema agar RADJA AC hanya memakai structured data yang benar, berguna, dan sejalan dengan isi halaman. Google menegaskan bahwa structured data harus mengikuti pedoman kualitas, tidak boleh bertentangan dengan isi halaman, tidak boleh diblokir dari crawling, dan perlu divalidasi dengan Rich Results Test serta URL Inspection. Untuk RADJA AC, titik pentingnya adalah: `Organization` cocok untuk identitas bisnis; `LocalBusiness` harus merepresentasikan lokasi fisik yang nyata dan memerlukan alamat fisik; `Article` cocok untuk artikel edukasi; `BreadcrumbList` aman untuk struktur halaman; `Product`/`Offer` hanya aman jika benar-benar ada produk spesifik dengan nama, harga, dan penawaran yang valid; review self-serving untuk `LocalBusiness` dan `Organization` tidak lagi ditampilkan oleh Google; dan `FAQPage` untuk rich result kini hanya tersedia bagi situs pemerintah dan kesehatan yang otoritatif, sehingga default project rule untuk situs komersial seperti RADJA AC adalah **jangan mengandalkan FAQ schema untuk rich result**. Selain itu, Google Search Gallery tidak menempatkan `Service` sebagai feature-rich-result yang didukung, meski `Service` tetap valid di Schema.org. citeturn11search15turn14search4turn16view3turn18view0turn18view1turn16view4turn16view5turn38view0turn38view3turn36view0turn15view0turn19search2turn19search0

## Prinsip Utama

- Gunakan **JSON-LD** sebagai format default karena Google merekomendasikan format ini untuk rich results. citeturn13search4
- Schema harus selalu sama dengan konten yang terlihat user di halaman. Jangan markup sesuatu yang tidak tampil. citeturn11search15turn15view0
- Prioritaskan schema yang benar-benar didukung Google Search untuk tipe halaman yang ada di RADJA AC: `Organization`, `LocalBusiness`, `BreadcrumbList`, `Article`, dan `Product`/`Offer` bila syaratnya terpenuhi. citeturn13search6turn17search19turn16view4turn16view5turn16view0
- Untuk identitas bisnis, bedakan antara **entitas organisasi** dan **lokasi fisik**. RADJA AC punya basis fisik di Banyumas; jangan menyalin `LocalBusiness` palsu ke semua kota target. citeturn27search0turn18view0turn18view1
- Structured data bukan pengganti copy yang jelas. Jika H1, body, dan title semrawut, schema tidak akan menyelamatkan halaman.
- Semua deployment schema baru harus diuji di Rich Results Test dan dicek ulang lewat URL Inspection setelah publish. citeturn14search4turn15view0turn16view0

## Tabel Keputusan

| Page Type | Schema Boleh | Schema Hindari | Syarat | Catatan |
|---|---|---|---|---|
| Homepage | `Organization` | `Product`, `Offer`, `AggregateRating`, `FAQPage` | Nama bisnis, URL, logo, email/telepon, alamat fisik/mailing yang benar, `sameAs` profil resmi jika ada | `Organization` di homepage membantu Google memahami identitas bisnis. Jangan pasang rating bintang untuk bisnis sendiri. citeturn16view3turn37view0turn37view1turn36view0 |
| `/kontak` atau `/tentang-kami` | `LocalBusiness` + `BreadcrumbList` | `LocalBusiness` untuk kota selain lokasi nyata, `AggregateRating` self-serving | Harus menampilkan alamat fisik Banyumas, nama bisnis, telepon, URL, dan idealnya jam operasional jika tersedia | Google meminta tiap lokasi bisnis lokal didefinisikan sebagai lokasi nyata dengan alamat. Karena RADJA AC berbasis Banyumas, markup lokasi hanya untuk basis itu. citeturn18view0turn18view1turn27search0 |
| Area page `/jual-ac-{area}` | `BreadcrumbList` | `LocalBusiness`, `Review`, `AggregateRating`, `Product` | Breadcrumb jelas; konten service area jujur | Jangan membuat `LocalBusiness` per kota target. Area page itu halaman layanan, bukan cabang fisik. citeturn18view0turn18view1 |
| Brand page `/brand/{brand}` | `BreadcrumbList` | `LocalBusiness` kota target, `Product` generik, `Offer` generik, `Review/AggregateRating` bisnis sendiri | Konten brand hub, sertifikat, brand copy, CTA stok | Halaman brand RADJA AC saat ini lebih cocok sebagai hub brand, bukan detail produk tunggal. Product schema jangan dipaksa di sini. citeturn16view0turn38view0turn28search7turn28search11 |
| Katalog hub `/katalog` | `BreadcrumbList` | `Product`, `Offer`, `AggregateRating` | Struktur kategori jelas | Category page bukan product detail page; jangan tempel schema produk massal dari plugin e-commerce jika harga/stok tidak akurat. citeturn16view0turn38view0turn38view3 |
| Katalog tipe/kapasitas `/katalog/{kategori}` | `BreadcrumbList` | `Product`, `Offer` jika halaman hanya kumpulan produk/opsi tanpa data offer valid; `FAQPage` default | Gunakan hanya schema navigasi sampai ada product detail yang benar | Aman sebagai category page. Jika suatu hari ada modul produk individual di halaman ini, tetap jangan markup seluruh page sebagai satu product bila isinya banyak item berbeda |
| B2B hub dan segment page `/pengadaan-ac*` | `BreadcrumbList` | `LocalBusiness` kota target, `Product` generik, `Review` self-serving, `FAQPage` default | Fokus pada struktur navigasi; bila ingin semantic tambahan, `Service` boleh hanya sebagai non-rich-result semantic, bukan core strategy | Search Gallery Google tidak mencantumkan `Service` sebagai rich result; jika dipakai, gunakan sangat hati-hati dan jangan berharap enhancement. citeturn19search2turn19search0 |
| Artikel edukasi `/artikel/{slug}` | `Article` atau `BlogPosting` + `BreadcrumbList` | `Product` generik, `FAQPage` default, `Review` | Harus ada judul, tanggal, isi artikel, dan idealnya image, author/publisher, datePublished/dateModified yang sinkron dengan halaman | Google mendukung `Article` untuk artikel berita/blog/sports; cocok untuk artikel edukasi RADJA AC. citeturn16view4 |
| Kalkulator `/kalkulator-pk-ac` | `BreadcrumbList` | `FAQPage` default, `Product`, `Offer`, `SoftwareApplication` terburu-buru | Gunakan schema ringan dulu; jangan over-markup tool jika properti tidak lengkap | Secara praktis, cukup breadcrumb + entitas organisasi sitewide. Naik kelas hanya jika tool benar-benar dikonsep sebagai aplikasi dengan metadata lengkap |
| Gallery / proof `/gallery`, future `/bukti-pengiriman-proyek` | `BreadcrumbList` | `Review`, `AggregateRating`, `Product` | Struktur halaman jelas dan isi proof benar-benar tampil | Jangan markup foto proof sebagai review atau rating. Proof cukup didukung oleh konten nyata dan link internal |
| Product detail page future | `Product` + `Offer` + `BreadcrumbList` | `AggregateRating` atau `Review` palsu | Wajib ada nama produk, harga valid, currency, dan jika dipakai `Offer`, sebaiknya availability juga; data harus sesuai yang tampil | Google mewajibkan `name` dan salah satu dari `review`, `aggregateRating`, atau `offers`; untuk `Offer`, harga adalah properti wajib dan `priceCurrency` sangat disarankan. citeturn38view0turn38view2turn38view3 |

## Aturan untuk Assistant/Codex

- Default schema stack RADJA AC:
  - sitewide/entity: `Organization`
  - location page: `LocalBusiness`
  - navigational pages: `BreadcrumbList`
  - article pages: `Article`
  - product detail future only: `Product` + `Offer`
- `Organization` taruh di homepage dan/atau page identitas utama, dengan `name`, `url`, `logo`, `telephone`, `email`, `address`, dan `sameAs` hanya ke profil resmi yang benar. citeturn16view3turn37view0turn37view1
- `LocalBusiness` hanya untuk lokasi fisik RADJA AC yang nyata. Jangan duplikasi node berbeda untuk Semarang, Jogja, Solo, Tegal, atau kota lain jika tidak ada cabang yang benar-benar ada di sana. citeturn18view0turn18view1
- `FAQPage` default **OFF** untuk situs ini. Jika tetap dipasang untuk alasan non-Google, pastikan:
  - FAQ benar-benar tampil di halaman,
  - bukan untuk iklan,
  - dan tim paham bahwa rich result FAQ untuk Google Search saat ini terbatas ke situs kesehatan/pemerintah yang otoritatif. citeturn15view0
- `BreadcrumbList` boleh dipakai luas karena aman membantu struktur; idealnya trail-nya juga tampil di UI atau minimal jelas dalam hierarki halaman. citeturn16view5
- `Product`/`Offer` hanya dipasang jika halaman mewakili satu produk atau satu penawaran yang benar-benar punya harga aktif dan cocok dengan isi halaman. Jangan markup category page, area page, brand hub, atau B2B page sebagai satu product tunggal. citeturn16view0turn38view3
- `Review`/`AggregateRating` jangan dipakai untuk homepage, kontak, area, brand, katalog, atau B2B page RADJA AC sendiri. Google sudah menonaktifkan review self-serving untuk `LocalBusiness` dan `Organization`. citeturn36view0
- Setelah deploy, tes dengan Rich Results Test, lalu cek lagi di URL Inspection. Monitor status report bila ada. citeturn14search4turn15view0

## Jangan Dilakukan

- Jangan memakai `LocalBusiness` untuk semua kota target.
- Jangan memakai `Product`/`Offer` di halaman yang hanya berisi ajakan “cek stok” tanpa data produk yang nyata.
- Jangan membuat harga, availability, atau rating palsu di schema.
- Jangan menaruh FAQ schema jika pertanyaan-jawabannya tidak tampil di halaman.
- Jangan mencampur banyak tipe schema yang saling bertentangan di satu halaman.
- Jangan membiarkan plugin SEO otomatis memasang product/review schema di category page tanpa audit.
- Jangan menyisipkan `AggregateRating` untuk bisnis sendiri di homepage, kontak, atau page layanan.
- Jangan mengandalkan `Service` sebagai strategi utama rich result Google.
- Jangan publish schema baru tanpa validasi.

## Contoh Implementasi

Contoh aman `Organization` untuk homepage:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RADJA AC",
  "url": "https://www.radjaac.com",
  "logo": "https://www.radjaac.com/path/logo.png",
  "telephone": "+62-xxx-xxxx-xxxx",
  "email": "info@radjaac.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pamijen, Sokaraja",
    "addressLocality": "Banyumas",
    "addressRegion": "Jawa Tengah",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://www.instagram.com/...",
    "https://maps.google.com/..."
  ]
}
```

Struktur ini mengikuti rekomendasi Google untuk `Organization`: gunakan properti yang relevan, terutama `name`, `url`, `logo`, `address`, `telephone`, dan `sameAs` yang benar-benar resmi. citeturn16view3turn37view0turn37view1

Contoh aman `LocalBusiness` hanya untuk halaman kontak/tentang-kami:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RADJA AC",
  "url": "https://www.radjaac.com/kontak",
  "telephone": "+62-xxx-xxxx-xxxx",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pamijen, Sokaraja",
    "addressLocality": "Banyumas",
    "addressRegion": "Jawa Tengah",
    "postalCode": "xxxxx",
    "addressCountry": "ID"
  }
}
```

Ini aman karena `LocalBusiness` memang merepresentasikan lokasi fisik tertentu, dan Google mensyaratkan alamat fisik untuk business location tersebut. citeturn18view0turn18view1

Contoh aman `BreadcrumbList` untuk halaman katalog:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.radjaac.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Katalog",
      "item": "https://www.radjaac.com/katalog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AC Inverter",
      "item": "https://www.radjaac.com/katalog/ac-inverter"
    }
  ]
}
```

Google mendukung `BreadcrumbList` untuk membantu mengkategorikan halaman dalam hasil pencarian. citeturn16view5

Contoh aman `Product` hanya untuk product detail future:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Daikin FTKF 1 PK",
  "brand": {
    "@type": "Brand",
    "name": "Daikin"
  },
  "offers": {
    "@type": "Offer",
    "price": 4999000,
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock"
  }
}
```

Gunakan pola ini hanya bila halaman memang merepresentasikan satu produk yang jelas dan angka harga/stok pada schema sama dengan yang tampil. Google mensyaratkan `name` dan salah satu di antara `review`, `aggregateRating`, atau `offers`; untuk `Offer`, `price` adalah properti wajib dan `priceCurrency` sangat disarankan. citeturn38view0turn38view2turn38view3
