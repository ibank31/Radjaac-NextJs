<!--
CURRENT STATUS NOTE (2026-05-31):
This document is retained as historical audit context.
For current migration readiness, use:
docs/audit/MIGRATION_READINESS_CURRENT.md
Do not treat old BLOCKER/PENDING/Hold/FINAL-MISSING labels here as current status without re-audit.
-->

# Legacy Asset Inventory

Status: completed source inventory
Basis: `main` after PR #29
Legacy repo: `ibank31/radjaac-premium`
Purpose: inspect asset candidates from the old live repo without copying them into the clean Next.js repo.

## Rules

- This audit is inventory-only.
- Do not bulk-copy legacy `public/` assets.
- Only migrate assets that are approved, used by final Next.js pages, and source-safe.
- Reject assets that imply unsupported showroom, branch, dealer-resmi, or unclear brand/product rights.
- Compress and rename approved images before adding them to the final repo.

## Current Next.js asset issue

The clean Next.js repo still contains starter/default assets and references `/og-default.jpg` from `lib/seo.js`, but the asset inventory has not confirmed that final OG image exists in the clean repo yet.

## Legacy public asset extension summary

```text
    125 webp
      9 png
      8 gitkeep
      3 mp4
      2 ico
      1 webmanifest
      1 txt
      1 svg
      1 asset-tmp/radjaac-premium/public/_redirects
      1 asset-tmp/radjaac-premium/public/_headers
```

## Legacy key asset paths

```text
public/assets/brands/daikin/.gitkeep
public/assets/brands/daikin/ac-daikin-inventer.webp
public/assets/brands/daikin/ac-daikin-low-watt.webp
public/assets/brands/daikin/ac-daikin-standar.webp
public/assets/brands/daikin/daikin-showcase.webp
public/assets/brands/daikin/sertificate-daikin.webp
public/assets/brands/gree/gree-inverter.webp
public/assets/brands/gree/gree-low-wat.webp
public/assets/brands/gree/gree-showcase.webp
public/assets/brands/gree/gree-standar.webp
public/assets/brands/gree/rekor-muri-gree.webp
public/assets/brands/hisense/ac-hisense-standar.webp
public/assets/brands/hisense/sertifikat-hisense.webp
public/assets/brands/hisense/showcase-hisense.webp
public/assets/brands/midea/ac-midea-low-wat.webp
public/assets/brands/midea/ac-midea-standar.webp
public/assets/brands/midea/midea-showcase.webp
public/assets/brands/midea/sertificate-midea.webp
public/assets/brands/samsung/samsung-inverter.webp
public/assets/brands/sansui/ac-sansui-deluxe.webp
public/assets/brands/sansui/ac-sansui-standar-basic.webp
public/assets/brands/sansui/ac-sansui-standar.webp
public/assets/brands/sansui/sansui-showcase.webp
public/assets/brands/sansui/sertificate-sansui.webp
public/assets/brands/sharp/ac-sharp-bey.webp
public/assets/daikin-cassette-display.webp
public/assets/gallery/display/display-ariston-new.webp
public/assets/gallery/display/display-ariston-radja-ac.webp
public/assets/gallery/display/display-daikin-new.webp
public/assets/gallery/display/display-daikin-radja-ac.webp
public/assets/gallery/display/display-flife-new.webp
public/assets/gallery/display/display-gree-flife-radja-ac.webp
public/assets/gallery/display/display-gree-inverter-radja-ac.webp
public/assets/gallery/display/display-gree-new.webp
public/assets/gallery/display/display-gree-residential-ac-radja-ac.webp
public/assets/gallery/display/display-hisense-new.webp
public/assets/gallery/display/display-modena-new.webp
public/assets/gallery/display/display-sansui-gree-radja-ac.webp
public/assets/gallery/display/display-sansui-new.webp
public/assets/gallery/large/daikin-cassette-display-radja-ac-01.webp
public/assets/gallery/large/display-ac-flife-radja-ac-01.webp
public/assets/gallery/large/display-ac-gree-low-watt-radja-ac-01.webp
public/assets/gallery/large/display-daikin-nusantara-radja-ac-01.webp
public/assets/gallery/large/display-daikin-sansui-radja-ac-01.webp
public/assets/gallery/large/display-outdoor-daikin-radja-ac-01.webp
public/assets/gallery/large/display-reiwa-portable-ac-radja-ac-01.webp
public/assets/gallery/large/gudang-stok-ac-aqua-radja-ac-01.webp
public/assets/gallery/large/gudang-stok-ac-daikin-gree-radja-ac-01.webp
public/assets/gallery/large/gudang-stok-ac-gree-radja-ac-01.webp
public/assets/gallery/large/gudang-stok-ac-gree-radja-ac-02.webp
public/assets/gallery/large/gudang-stok-ac-gree-radja-ac-03.webp
public/assets/gallery/large/gudang-stok-ac-radja-ac-purwokerto-01.webp
public/assets/gallery/large/material-instalasi-ac-radja-ac-01.webp
public/assets/gallery/large/showroom-daikin-gree-radja-ac-01.webp
public/assets/gallery/large/showroom-gree-radja-ac-purwokerto-01.webp
public/assets/gallery/large/showroom-gree-radja-ac-purwokerto-02.webp
public/assets/gallery/large/showroom-multibrand-radja-ac-purwokerto-01.webp
public/assets/gallery/large/stok-pipa-ac-radja-ac-purwokerto-01.webp
public/assets/gallery/pemasangan/outdoor-ac-cassete.webp
public/assets/gallery/pemasangan/pemasangan-ac-cassete.webp
public/assets/gallery/pemasangan/pemasangan-ac-daikin-untuk-kost-indoor-01.webp
public/assets/gallery/pemasangan/pemasangan-ac-daikin-untuk-kost-indoor-02.webp
public/assets/gallery/pemasangan/pemasangan-ac-daikin-untuk-kost-indoor-03.webp
public/assets/gallery/pemasangan/pemasangan-ac-daikin-untuk-kost-outdoor-01.webp
public/assets/gallery/pengiriman/loading-ac-ariston.webp
public/assets/gallery/pengiriman/new-armada-radjaac-daikin.webp
public/assets/gallery/pengiriman/outdoor-ac-daikin-restock.webp
public/assets/gallery/pengiriman/pengiriman-ac-ariston.webp
public/assets/gallery/pengiriman/pengiriman-ariston-daikin.webp
public/assets/gallery/pengiriman/pengiriman-sharp-midea.webp
public/assets/gallery/pengiriman/radja-ac-loading-ac-sharp-truk-kuning.webp
public/assets/gallery/pengiriman/radja-ac-pengiriman-stok-aqua-truk-putih.webp
public/assets/gallery/pengiriman/radja-ac-persiapan-pengiriman.webp
public/assets/gallery/pengiriman/radja-ac-stok-sharp.webp
public/assets/gallery/pengiriman/restock-ac-daikin.webp
public/assets/gallery/stok-gudang/.gitkeep
public/assets/gallery/stok-gudang/midea-restock.webp
public/assets/gallery/stok-gudang/restock-midea-ac.webp
public/assets/gallery/stok-gudang/restock-tcl-midea-lg.webp
public/assets/gallery/stok-gudang/stock-gudang-gree-aqva.webp
public/assets/gallery/stok-gudang/stok-gudang-ac-gree.webp
public/assets/gallery/stok-gudang/stok-gudang-aqva.webp
public/assets/gallery/stok-gudang/stok-gudang-material-pipa.webp
public/assets/gallery/stok-gudang/stok-gudang-outdoor-gree.webp
public/assets/gallery/stok-gudang/stok-material-pipa.webp
public/assets/gallery/thumb/daikin-cassette-display-radja-ac-01-thumb.webp
public/assets/gallery/thumb/display-ac-flife-radja-ac-01-thumb.webp
public/assets/gallery/thumb/display-ac-gree-low-watt-radja-ac-01-thumb.webp
public/assets/gallery/thumb/display-daikin-nusantara-radja-ac-01-thumb.webp
public/assets/gallery/thumb/display-daikin-sansui-radja-ac-01-thumb.webp
public/assets/gallery/thumb/display-outdoor-daikin-radja-ac-01-thumb.webp
public/assets/gallery/thumb/display-outdoor-modena-radja-ac-01-thumb.webp
public/assets/gallery/thumb/display-reiwa-portable-ac-radja-ac-01-thumb.webp
public/assets/gallery/thumb/gudang-stok-ac-aqua-radja-ac-01-thumb.webp
public/assets/gallery/thumb/gudang-stok-ac-daikin-gree-radja-ac-01-thumb.webp
public/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-01-thumb.webp
public/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-02-thumb.webp
public/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-03-thumb.webp
public/assets/gallery/thumb/gudang-stok-ac-radja-ac-purwokerto-01-thumb.webp
public/assets/gallery/thumb/material-instalasi-ac-radja-ac-01-thumb.webp
public/assets/gallery/thumb/showroom-gree-radja-ac-purwokerto-01-thumb.webp
public/assets/gallery/thumb/showroom-gree-radja-ac-purwokerto-02-thumb.webp
public/assets/gallery/thumb/showroom-multibrand-radja-ac-purwokerto-01-thumb.webp
public/assets/gallery/thumb/stok-pipa-ac-radja-ac-purwokerto-01-thumb.webp
public/assets/gallery/video-thumbnails/pengiriman-ac-radja-ac-purwokerto-01.webp
public/assets/gallery/video-thumbnails/pengiriman-stok-ac-radja-ac-clean.webp
public/assets/gallery/video-thumbnails/pengiriman-stok-ac-radja-ac-purwokerto-02.webp
public/assets/gallery/videos/pengiriman-ac-radja-ac-purwokerto-01.mp4
public/assets/gallery/videos/pengiriman-stok-ac-radja-ac-clean.mp4
public/assets/gallery/videos/pengiriman-stok-ac-radja-ac-purwokerto-02.mp4
public/assets/logos/daikin-logo.webp
public/assets/logos/gree-logo.webp
public/assets/logos/hisense-logo.png
public/assets/logos/midea-logo.webp
public/assets/logos/panasonic-logo.webp
public/assets/logos/samsung-logo.webp
public/assets/logos/sansui-logo.png
public/assets/logos/sansui-logo.webp
public/assets/logos/sharp-logo.webp
public/assets/midea-cassette-display.webp
public/assets/radjaac-favicon/android-chrome-192x192.png
public/assets/radjaac-favicon/android-chrome-512x512.png
public/assets/radjaac-favicon/apple-touch-icon.png
public/assets/radjaac-favicon/favicon-16x16.png
public/assets/radjaac-favicon/favicon-32x32.png
public/assets/radjaac-favicon/favicon-48x48.png
public/assets/radjaac-favicon/favicon.ico
public/assets/radjaac-favicon/master-icon-1024.png
public/assets/radjaac-favicon/site.webmanifest
public/assets/sansui-cassette-display.webp
public/assets/showroom/Showroom-utama.webp
public/assets/showroom/depan-proshop-gree.webp
public/assets/showroom/display-ariston-radja-ac.webp
public/assets/showroom/display-daikin-radja-ac.webp
public/assets/showroom/display-gree-flife-radja-ac.webp
public/assets/showroom/display-gree-inverter-radja-ac.webp
public/assets/showroom/display-gree-residential-ac-radja-ac.webp
public/assets/showroom/display-midea-cassette-floor-standing-radja-ac.webp
public/assets/showroom/display-sansui-gree-radja-ac.webp
public/assets/showroom/showroom-display-hisense-modena-01.webp
public/assets/ui/whatsapp.svg
public/favicon-radjaac.ico
public/logo-radjaac.webp
```

## Legacy key source references to assets

```text
index.html:8:  <link rel="icon" href="/assets/radjaac-favicon/favicon.ico" sizes="any" />
index.html:9:  <link rel="icon" type="image/png" sizes="48x48" href="/assets/radjaac-favicon/favicon-48x48.png" />
index.html:10:  <link rel="icon" type="image/png" sizes="32x32" href="/assets/radjaac-favicon/favicon-32x32.png" />
index.html:11:  <link rel="icon" type="image/png" sizes="16x16" href="/assets/radjaac-favicon/favicon-16x16.png" />
index.html:12:  <link rel="apple-touch-icon" sizes="180x180" href="/assets/radjaac-favicon/apple-touch-icon.png" />
index.html:19:  <meta name="description" content="RADJA AC menyediakan AC original berbagai brand resmi untuk rumah, kost, kantor, hotel, dan proyek. Konsultasi PK, cek stok, pengiriman unit, dan bantuan instalasi se-Pulau Jawa." />
index.html:25:  <meta property="og:description" content="RADJA AC menyediakan AC original berbagai brand resmi untuk rumah, kost, kantor, hotel, dan proyek. Konsultasi PK, cek stok, pengiriman unit, dan bantuan instalasi se-Pulau Jawa." />
index.html:27:  <meta property="og:image" content="https://www.radjaac.com/assets/showroom/Showroom-utama.webp" />
index.html:28:  <meta property="og:image:secure_url" content="https://www.radjaac.com/assets/showroom/Showroom-utama.webp" />
index.html:29:  <meta property="og:image:width" content="1200" />
index.html:30:  <meta property="og:image:height" content="630" />
index.html:31:  <meta property="og:image:alt" content="Showroom dan stok produk AC RADJA AC" />
index.html:35:  <meta name="twitter:description" content="RADJA AC menyediakan AC original berbagai brand resmi untuk rumah, kost, kantor, hotel, dan proyek. Konsultasi PK, cek stok, pengiriman unit, dan bantuan instalasi se-Pulau Jawa." />
index.html:36:  <meta name="twitter:image" content="https://www.radjaac.com/assets/showroom/Showroom-utama.webp" />
index.html:37:  <meta name="twitter:image:alt" content="Showroom dan stok produk AC RADJA AC" />
index.html:40:    img[src="/assets/midea-cassette-display.webp"] {
index.html:58:        "/": ["Dealer AC Multi-Brand se-Pulau Jawa", "RADJA AC menyediakan AC original berbagai brand resmi untuk rumah, kost, kantor, hotel, dan proyek. Konsultasi PK, cek stok, pengiriman unit, dan bantuan instalasi se-Pulau Jawa."],
index.html:59:        "/jual-ac-purwokerto": ["Jual AC Purwokerto + Pemasangan", "Cek stok, harga, rekomendasi PK, dan opsi pemasangan AC baru di Purwokerto."],
index.html:60:        "/katalog": ["Katalog AC Multi-Brand", "Lihat pilihan AC split, inverter, low watt, dan AC kantor sebelum chat admin untuk cek stok dan rekomendasi PK."],
index.html:63:        "/tentang-kami": ["Tentang RADJA AC", "Kenali RADJA AC sebagai dealer AC multi-brand dengan showroom di Sokaraja, Banyumas, stok produk, dan brand resmi."],
index.html:64:        "/kontak": ["Kontak RADJA AC", "Hubungi RADJA AC untuk konsultasi kebutuhan AC, cek stok, estimasi harga, pengiriman unit, dan bantuan pemasangan."],
index.html:65:        "/gallery": ["Gallery RADJA AC", "Lihat dokumentasi showroom, stok, pengiriman, dan display produk RADJA AC."],
index.html:91:        tersedia berbagai brand untuk kebutuhan rumah, kost, atau proyek.
index.html:97:        dan proyek.
src/components/ClosingCTA.jsx:21:            Admin bantu cek stok yang ready hari ini, hitung PK yang pas, cek alamat pengiriman, dan jelaskan opsi pemasangan sesuai kondisi lokasi. Tidak perlu langsung deal — tanya dulu sampai yakin.
src/components/ClosingCTA.jsx:37:              Showroom: Pamijen, Sokaraja • Pengiriman unit by konfirmasi
src/components/ClosingCTA.jsx:42:              Chat dulu sebelum OTW ke showroom
src/components/Footer.jsx:46:  { label: "Bukti Pengiriman", to: "/bukti-pengiriman-proyek" },
src/components/Footer.jsx:57:                src={SITE_DATA.logoUrl}
src/components/Footer.jsx:71:              Dealer AC original berbagai brand resmi. Konsultasi PK, cek stok, pengiriman unit, dan bantuan instalasi se-Pulau Jawa. Showroom di Sokaraja, Banyumas.
src/components/HeroSection.jsx:30:                PK, stok, dan biaya pasang harus jelas dulu.
src/components/HeroSection.jsx:35:              RADJA AC membantu pembelian AC original multi-brand untuk rumah, kost, toko, ruko, kantor, hotel, dan proyek. Admin bantu cek PK sesuai ruangan, stok unit, alamat pengiriman, serta opsi pemasangan by konfirmasi sebelum Anda deal.
src/components/HeroSection.jsx:66:              Kirim ukuran ruangan, daya listrik, alamat/kota tujuan, dan jumlah unit. Admin bantu cek PK, stok, pengiriman, serta estimasi pemasangan bila tersedia.
src/components/HeroSection.jsx:85:                src="/assets/showroom/Showroom-utama.webp"
src/components/HeroSection.jsx:86:                alt="Showroom RADJA AC — dealer AC original multi-brand untuk rumah, bisnis, dan proyek"
src/components/Navbar.jsx:99:    to: "/bukti-pengiriman-proyek",
src/components/Navbar.jsx:159:            src="/logo-radjaac.webp"
src/components/PaymentTrustBlock.jsx:6:    "Pembayaran via transfer setelah stok, harga unit, jadwal, dan kebutuhan pemasangan dikonfirmasi admin. Tidak ada yang minta transfer duluan sebelum semua jelas.",
src/components/PaymentTrustBlock.jsx:30:            Cek stok dulu, bayar setelah semuanya jelas
src/components/PaymentTrustBlock.jsx:33:            Tidak perlu langsung transfer. Harga, stok, jadwal teknisi, dan kebutuhan pemasangan dikonfirmasi dulu — baru bayar. Bisa transfer bank atau bayar di tempat sesuai kesepakatan.
src/components/PaymentTrustBlock.jsx:47:          Cek stok dulu, bayar setelah semuanya jelas
src/components/PaymentTrustBlock.jsx:50:          Tidak perlu langsung transfer. Setelah harga, stok, jadwal, dan kebutuhan pemasangan di {areaName} dikonfirmasi admin, pembayaran bisa melalui transfer bank atau bayar di tempat sesuai kesepakatan.
src/components/SeoHead.jsx:13:  "pengiriman-pemasangan": "Pengiriman & Pemasangan",
src/components/SeoHead.jsx:32:      "RADJA AC menyediakan AC original berbagai brand resmi — Daikin, Gree, Midea, Hisense, Sharp, Panasonic, Samsung, Sansui. Konsultasi PK, cek stok, pengiriman se-Pulau Jawa.",
src/components/SeoHead.jsx:37:      "RADJA AC melayani penjualan AC original bergaransi di Purwokerto, Banyumas, dan sekitarnya untuk kebutuhan rumah, kost, toko, kantor, dan proyek.",
src/components/SeoHead.jsx:52:      "Katalog AC RADJA AC: pilihan AC split rumah, inverter hemat listrik, low watt, hingga AC kantor. Brand resmi bergaransi, tersedia untuk pengiriman se-Pulau Jawa.",
src/components/SeoHead.jsx:57:      "Hubungi RADJA AC untuk konsultasi stok AC, rekomendasi PK, pengiriman unit, opsi pemasangan, dan arahan sebelum datang ke showroom.",
src/components/SeoHead.jsx:61:const DEFAULT_SOCIAL_PREVIEW_IMAGE = `${SITE_DATA.baseUrl}/assets/showroom/Showroom-utama.webp`
src/components/SeoHead.jsx:62:const DEFAULT_SOCIAL_PREVIEW_ALT = "Showroom RADJA AC — dealer AC multi-brand se-Pulau Jawa"
src/components/SeoHead.jsx:138:      logo: {
src/components/SeoHead.jsx:140:        url: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
src/components/SeoHead.jsx:169:      <meta property="og:image" content={imageUrl} />
src/components/SeoHead.jsx:170:      <meta property="og:image:secure_url" content={imageUrl} />
src/components/SeoHead.jsx:171:      <meta property="og:image:alt" content={imageDescription} />
src/components/SeoHead.jsx:176:      <meta name="twitter:image" content={imageUrl} />
src/components/SeoHead.jsx:177:      <meta name="twitter:image:alt" content={imageDescription} />
src/components/_archive/AboutTrustSection.jsx:25:            Mulai dari konsultasi PK, pilihan brand, stok unit, hingga kebutuhan pemasangan,
src/components/_archive/AboutTrustSection.jsx:48:              Respon WhatsApp cepat untuk cek stok, harga, dan rekomendasi unit
src/components/_archive/AreaCoverageSection.jsx:28:            cek stok, pengiriman, dan pemasangan untuk rumah, kantor, toko,
src/components/_archive/InternalLinksSection.jsx:48:    desc: "Lihat dokumentasi showroom, gudang, stok produk, pengiriman, dan aktivitas RADJA AC.",
src/components/_archive/LocationSection.jsx:15:          RADJA AC melayani wilayah Purwokerto, Banyumas, Sokaraja, Ajibarang, dan sekitarnya. Kunjungi lokasi toko atau konsultasikan kebutuhan unit, pengiriman, dan pemasangan langsung ke alamat Anda.
src/components/_archive/MiniReviewSection.jsx:12:      "Admin bantu bandingkan pilihan brand, stok, dan estimasi pemasangan sebelum saya deal.",
src/components/_archive/PortfolioSection.jsx:12:          Proyek pemasangan AC nyata di Purwokerto & Banyumas, menampilkan pembelian unit, pengiriman, dan instalasi untuk rumah, kantor, dan usaha lokal.
src/components/_archive/TrustStripSection.jsx:24:              const Icon = item.icon;
src/components/area/CompactAreaSalesPage.jsx:59:    src: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-01-thumb.webp",
src/components/area/CompactAreaSalesPage.jsx:64:    src: "/assets/gallery/thumb/material-instalasi-ac-radja-ac-01-thumb.webp",
src/components/area/CompactAreaSalesPage.jsx:69:    src: "https://www.radjaac.com/assets/gallery/pengiriman/radja-ac-loading-ac-sharp-truk-kuning.webp",
src/components/area/CompactAreaSalesPage.jsx:70:    alt: "Pengiriman stok AC Sharp RADJA AC dengan truk kuning",
src/components/area/CompactAreaSalesPage.jsx:74:    src: "https://www.radjaac.com/assets/gallery/pengiriman/radja-ac-pengiriman-stok-aqua-truk-putih.webp",
src/components/area/CompactAreaSalesPage.jsx:75:    alt: "Pengiriman stok AC Aqua RADJA AC dengan truk putih",
src/components/area/CompactAreaSalesPage.jsx:129:    title: `Butuh AC banyak unit di ${areaName}? Jangan cari stok satu-satu.`,
src/components/area/CompactAreaSalesPage.jsx:131:      `Untuk toko, kost, ruko, kantor, rumah banyak ruangan, atau proyek ringan di ${areaName}, RADJA AC bantu cek stok AC, pilihan brand, estimasi harga AC, pengiriman AC ke ${areaName}, dan opsi pemasangan. Chat dulu supaya kebutuhan AC lebih jelas sebelum beli.`,
src/components/area/CompactAreaSalesPage.jsx:135:      ["Kantor & Proyek Ringan", "Cek beberapa ruangan, stok unit, estimasi pengiriman, dan jadwal pemasangan sesuai kondisi lokasi."],
src/components/area/CompactAreaSalesPage.jsx:147:    `Gambaran awal supaya Anda tahu budget segini dapat pilihan merek apa saja. Harga final tetap mengikuti tipe unit, stok, promo, dan kondisi pemasangan di area ${areaName}.`
src/components/area/CompactAreaSalesPage.jsx:151:    "Harga menyesuaikan merek, PK, stok, promo, panjang pipa, posisi outdoor, dan kebutuhan instalasi tambahan. Semua dikonfirmasi dulu sebelum pemasangan."
src/components/area/CompactAreaSalesPage.jsx:153:    ? `Chat dulu untuk cek stok, harga, dan jadwal area ${areaName}. Setelah cocok, pembayaran bisa transfer atau COD sesuai kesepakatan.`
src/components/area/CompactAreaSalesPage.jsx:154:    : "Chat dulu untuk cek stok, harga, dan jadwal. Setelah cocok, pembayaran bisa transfer atau COD sesuai kesepakatan."
src/components/area/CompactAreaSalesPage.jsx:162:    ["Cek stok & harga dulu", config.valueStockText, MessageCircle],
src/components/area/CompactAreaSalesPage.jsx:168:    ? ["Cek stok dulu", "Bayar setelah cocok", "Transfer / COD", "Harga final jelas"]
src/components/area/CompactAreaSalesPage.jsx:169:    : ["Cek stok dulu", "Bayar setelah cocok", "Transfer / COD", "Harga final jelas"])
src/components/area/CompactAreaSalesPage.jsx:241:                  src="/assets/showroom/Showroom-utama.webp"
src/components/area/CompactAreaSalesPage.jsx:242:                  alt={`Showroom RADJA AC untuk konsultasi ${config.h1}`}
src/components/area/CompactAreaSalesPage.jsx:342:                  Butuh 5+ unit untuk proyek? Lihat halaman Pengadaan Partai Besar
src/components/area/CompactAreaSalesPage.jsx:376:              <h2 className="mb-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Cek kebutuhan dulu, baru kunci stok dan jadwal</h2>
src/components/home/BrandsSection.jsx:51:        Gree punya value kuat dan stok paling lengkap di sini karena kami Proshop resminya. Daikin lebih mahal tapi tenang jangka panjang. Midea populer karena harga masuk dan kualitas sudah terbukti. Hisense modern, tidak perlu overpay. Sansui untuk budget yang mepet tapi butuh yang fungsional. Belum yakin pilih yang mana? Chat dulu — admin bantu arahkan sesuai ruangan dan listrik.
src/components/home/BrandsSection.jsx:65:                src={brand.logo}
src/components/home/BrandsSection.jsx:97:            <h3 className="text-xl font-black text-white">Brand lain sesuai stok yang ready hari ini</h3>
src/components/home/PriceEstimateSection.jsx:45:            Gambaran awal supaya Anda tahu budget segini dapat pilihan merek apa saja. Harga final tetap mengikuti tipe unit, stok, promo, dan kondisi pemasangan di lokasi.
src/components/home/PriceEstimateSection.jsx:85:          <strong>Catatan:</strong> harga menyesuaikan merek, PK, stok, promo, panjang pipa, posisi outdoor, dan kebutuhan instalasi tambahan. Semua dikonfirmasi dulu sebelum pemasangan.
src/components/home/SalesLandingSection.jsx:9:    description: "Banyak yang sudah transfer, ternyata unit tidak ada. Di sini stok dicek dulu, baru konfirmasi — bukan katalog online yang belum tentu ready.",
src/components/home/SalesLandingSection.jsx:38:              Yang sering jadi masalah bukan harga unitnya — tapi PK tidak sesuai ruangan, stok ternyata kosong, ongkir belum dihitung, atau biaya pemasangan berbeda dari perkiraan. Admin kami bantu cek dari awal supaya pembelian satuan maupun pengadaan banyak unit lebih jelas.
src/components/home/SalesLandingSection.jsx:58:                to="/bukti-pengiriman-proyek"
src/components/home/TrustSection.jsx:8:    image: "/assets/brands/daikin/sertificate-daikin.webp",
src/components/home/TrustSection.jsx:13:    image: "/assets/brands/midea/sertificate-midea.webp",
src/components/home/TrustSection.jsx:18:    image: "/assets/brands/hisense/sertifikat-hisense.webp",
src/components/home/TrustSection.jsx:23:    image: "/assets/brands/sansui/sertificate-sansui.webp",
src/components/home/TrustSection.jsx:36:          Ada showroom, stok fisik, dan sertifikat brand
src/components/home/TrustSection.jsx:61:              Nama RADJA AC tercantum di website resmi Gree Indonesia sebagai Proshop Gree — bukan toko biasa yang sekadar jual. Ini yang bikin stok Gree lebih bisa dikonfirmasi dan harganya bisa dipertanggungjawabkan. Showroom fisik ada di Pamijen, Sokaraja, dekat RS Margono. Chat dulu kalau mau mampir, supaya tidak sia-sia.
src/components/kontak/ContactHero.jsx:9:        Konsultasi beli AC, cek stok, tanya harga, dan rekomendasi PK.
src/components/kontak/ContactHero.jsx:13:        Hubungi RADJA AC untuk konsultasi pilihan AC original berbagai brand resmi, cek ketersediaan unit, estimasi kebutuhan ruangan, area pengiriman, dan bantuan instalasi se-Pulau Jawa.
src/components/kontak/ContactMap.jsx:6:  "Cek stok unit, estimasi harga, dan area pengiriman",
src/components/kontak/ContactMap.jsx:19:          Sampaikan kebutuhan ruangan, daya listrik, pilihan brand, dan lokasi pemasangan. Tim RADJA AC akan bantu arahkan pilihan AC yang sesuai untuk kebutuhan dan area pengiriman Anda.
src/components/kontak/ContactMap.jsx:23:          Area showroom &amp; stok RADJA AC berada di Pamijen, Sokaraja – Banyumas • Dekat RS Margono Purwokerto.
src/components/kontak/ContactMap.jsx:48:          Chat WhatsApp untuk cek stok dan rekomendasi AC
src/components/tentang/AboutCredentials.jsx:3:const GREE_PROSHOP_IMAGE = "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-01.webp"
src/components/tentang/AboutCredentials.jsx:8:    image: "/assets/brands/daikin/sertificate-daikin.webp",
src/components/tentang/AboutCredentials.jsx:13:    image: "/assets/brands/midea/sertificate-midea.webp",
src/components/tentang/AboutCredentials.jsx:18:    image: "/assets/brands/hisense/sertifikat-hisense.webp",
src/components/tentang/AboutCredentials.jsx:23:    image: "/assets/brands/sansui/sertificate-sansui.webp",
src/components/tentang/AboutCredentials.jsx:29:  "Showroom dan display Gree bisa dilihat di dokumentasi gallery RADJA AC.",
src/components/tentang/AboutCredentials.jsx:42:          Bukan cuma nama toko. Ada showroom, stok, dan sertifikat brand.
src/components/tentang/AboutCredentials.jsx:45:          Pembeli AC biasanya ingin bukti dulu sebelum percaya. RADJA AC menampilkan dokumentasi showroom, stok unit, sertifikat dealer, dan pilihan brand resmi supaya pembeli bisa cek lebih jelas sebelum chat atau datang.
src/components/tentang/AboutCredentials.jsx:54:              alt="Showroom Proshop Gree RADJA AC Purwokerto"
src/components/tentang/AboutCredentials.jsx:68:            Untuk pembeli yang mempertimbangkan Gree, stok dan display bisa dicek lebih dulu. Admin tetap bantu bandingkan dengan brand lain kalau kebutuhan ruangan atau budget lebih cocok ke pilihan berbeda.
src/components/tentang/AboutHero.jsx:13:          Di RADJA AC, pembeli tidak hanya diarahkan ke merek tertentu. Ukuran ruangan, daya listrik, stok yang ready, titik indoor-outdoor, dan kebutuhan material ikut dicek sebelum admin kasih rekomendasi.
src/components/tentang/AboutProfile.jsx:16:          RADJA AC berangkat dari kebutuhan pembeli yang sering bingung mulai dari mana: mau cari harga murah, tapi takut salah PK, stok ternyata kosong, atau biaya pasang baru kelihatan setelah teknisi datang.
src/components/tentang/AboutProfile.jsx:19:          Karena itu RADJA AC tidak hanya menampilkan daftar brand. Admin bantu cek kebutuhan ruangan, daya listrik, stok unit, pilihan tipe, dan estimasi pemasangan sebelum pembeli mengambil keputusan.
src/components/tentang/AboutProfile.jsx:22:          Website ini dibuat supaya calon pembeli bisa lihat pilihan AC, bukti showroom, dokumentasi stok, dan jalur chat yang jelas sebelum datang ke toko atau lanjut transaksi.
src/components/tentang/AboutTrust.jsx:27:          Kirim ukuran ruangan, daya listrik, budget, dan area pemasangan. Admin bantu cek stok yang ready, PK yang masuk akal, pilihan brand, dan estimasi pasang sebelum Anda deal.
src/components/ui/WhatsappIcon.jsx:4:      src="/assets/ui/whatsapp.svg"
src/constants/siteData.js:12:  businessDescription: "Dealer AC multi-brand untuk rumah, kost, kantor, hotel, dan proyek skala besar. Melayani pengiriman dan konsultasi se-Pulau Jawa.",
src/constants/siteData.js:51:  defaultDescription: "RADJA AC menyediakan AC original berbagai brand resmi — Daikin, Gree, Midea, Hisense, Sharp, Panasonic, Samsung, Sansui. Konsultasi PK, cek stok, pengiriman se-Pulau Jawa.",
src/constants/siteData.js:54:  logoUrl: "/logo-radjaac.webp",
src/constants/siteData.js:55:  showroomAddress: "Pamijen, Sokaraja, Banyumas",
src/constants/siteData.js:56:  showroomNote: "Dekat RS Margono Purwokerto",
src/data/banyumasBlogPost.js:2:  slug: "jual-ac-banyumas-konsultasi-pk-stok-pasang",
src/data/banyumasBlogPost.js:5:  description: "Panduan membeli AC di Banyumas agar tidak salah pilih: cek ukuran ruangan, daya listrik, stok brand, garansi, dan kebutuhan pemasangan.",
src/data/banyumasBlogPost.js:12:  intro: "Saat mencari tempat jual AC Banyumas, pembeli sebaiknya tidak hanya membandingkan harga unit. Kapasitas PK, daya listrik, pilihan brand, ketersediaan stok, garansi resmi, serta kondisi pemasangan sangat menentukan apakah AC nyaman dipakai setelah dibeli.",
src/data/banyumasBlogPost.js:22:      heading: "Data yang perlu disiapkan sebelum tanya stok",
src/data/banyumasBlogPost.js:31:        "Pembeli di Banyumas bisa membandingkan beberapa pilihan brand seperti Daikin, Gree, Midea, Hisense, Sharp, Panasonic, Sansui, dan brand lain sesuai stok yang tersedia. Setiap brand punya pilihan standard, low watt, atau inverter yang perlu disesuaikan dengan kebutuhan ruangan.",
src/data/banyumasBlogPost.js:38:        "Pembelian AC sering berlanjut ke pengiriman, pemasangan, dan pengecekan kondisi lokasi. Dengan konsultasi lokal, pembeli bisa mendapat arahan yang lebih praktis tentang unit, kapasitas PK, serta kebutuhan teknis sebelum unit dikirim atau dipasang.",
src/data/banyumasBlogPost.js:39:        "RADJA AC membantu calon pembeli area Purwokerto, Banyumas, dan sekitarnya untuk cek pilihan AC, stok, harga, dan estimasi kebutuhan pemasangan lewat WhatsApp."
src/data/blogPosts.js:6:    description: "Panduan cek harga AC Daikin di Purwokerto, mulai dari pilihan tipe, kapasitas PK, stok, ongkir, sampai kebutuhan pemasangan.",
src/data/blogPosts.js:13:    intro: "Saat mencari AC Daikin di Purwokerto, harga saja belum cukup untuk menentukan pilihan. Calon pembeli perlu cek tipe, kapasitas PK, stok unit, paket pemasangan, panjang pipa, bracket, ongkir, dan kondisi titik indoor-outdoor agar total biaya lebih jelas sejak awal.",
src/data/blogPosts.js:25:          "Harga bisa berbeda karena tipe unit, kapasitas PK, seri standard atau inverter, kelengkapan paket pemasangan, lokasi pengiriman, dan stok yang tersedia. Karena itu, membandingkan harga sebaiknya dilakukan dengan spesifikasi yang sama, bukan hanya melihat angka termurah.",
src/data/blogPosts.js:43:    description: "Panduan cek harga AC Gree di Purwokerto, mulai dari pilihan standard, low watt, inverter, kapasitas PK, stok, sampai kebutuhan pemasangan.",
src/data/blogPosts.js:53:        src: "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-01.webp",
src/data/blogPosts.js:54:        alt: "Showroom Gree RADJA AC Purwokerto",
src/data/blogPosts.js:55:        caption: "Showroom Gree RADJA AC Purwokerto"
src/data/blogPosts.js:58:        src: "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-02.webp",
src/data/blogPosts.js:59:        alt: "Display AC Gree di showroom RADJA AC",
src/data/blogPosts.js:60:        caption: "Display AC Gree di showroom RADJA AC"
src/data/blogPosts.js:67:          "Harga AC Gree bisa berbeda tergantung kapasitas PK, tipe unit, fitur, stok yang tersedia, paket pemasangan, panjang pipa, bracket, kabel, dan lokasi pengiriman. Karena itu, membandingkan harga sebaiknya dilakukan dengan spesifikasi yang sama agar hasilnya tidak menyesatkan.",
src/data/blogPosts.js:79:        heading: "Data yang perlu disiapkan sebelum cek stok",
src/data/blogPosts.js:88:          "Hubungi RADJA AC melalui WhatsApp untuk cek stok Gree terbaru, pilihan tipe yang tersedia, rekomendasi kapasitas PK, dan estimasi kebutuhan pemasangan di area Purwokerto, Banyumas, dan sekitarnya.",
src/data/blogPosts.js:99:    description: "Panduan cek harga AC Midea di Purwokerto, mulai dari pilihan AC rumah, low watt, inverter, kapasitas PK, stok, sampai kebutuhan pemasangan.",
src/data/blogPosts.js:111:          "Harga AC Midea bisa berbeda karena kapasitas PK, tipe unit, fitur, stok yang tersedia, paket pemasangan, panjang pipa, bracket, kabel, dan lokasi pengiriman. Membandingkan harga akan lebih adil jika spesifikasi dan kelengkapan paketnya sama.",
src/data/blogPosts.js:123:        heading: "Data yang perlu disiapkan sebelum cek stok",
src/data/blogPosts.js:132:          "Hubungi RADJA AC melalui WhatsApp untuk cek stok Midea terbaru, pilihan tipe yang tersedia, rekomendasi kapasitas PK, dan estimasi kebutuhan pemasangan di area Purwokerto, Banyumas, dan sekitarnya.",
src/data/blogPosts.js:170:          "RADJA AC dapat membantu membandingkan kebutuhan pelanggan dengan stok yang tersedia, sehingga rekomendasi lebih praktis untuk rumah, kos, kontrakan, toko, atau kantor kecil di area Purwokerto dan Banyumas."
src/data/blogPosts.js:180:    description: "RADJA AC Purwokerto bantu pilih AC sesuai ukuran ruangan, daya listrik, dan kebutuhan pasang. Cek stok, tanya PK, dan deal lewat WhatsApp.",
src/data/blogPosts.js:187:    intro: "RADJA AC adalah toko AC fisik di Pamijen, Sokaraja — dekat RS Margono Purwokerto. Kami melayani jual AC, konsultasi PK, cek stok, dan koordinasi pemasangan untuk area Purwokerto, Banyumas, Sokaraja, Ajibarang, Cilongok, dan sekitarnya. Sebelum deal, calon pembeli bisa tanya dulu lewat WhatsApp — gratis, tidak perlu datang ke toko.",
src/data/blogPosts.js:199:          "Sebelum deal, pastikan toko bisa menjawab semua pertanyaan ini: (1) Stok unit ready atau indent? (2) Garansi resmi dari distributor atau hanya toko? (3) Harga sudah termasuk pasang, pipa, bracket, dan kabel, atau belum? (4) Bisa bantu hitung PK sesuai ruangan? (5) Area pengiriman dan jadwal teknisi bisa diatur?",
src/data/blogPosts.js:206:          "RADJA AC menyediakan AC dari brand resmi: Daikin, Gree, Midea, Hisense, Sharp, Panasonic, Sansui, dan Samsung. Tersedia pilihan standard, low watt, dan inverter dari masing-masing brand sesuai stok yang ada.",
src/data/blogPosts.js:213:          "RADJA AC melayani pengiriman dan pemasangan untuk area Purwokerto, Sokaraja, Banyumas, Ajibarang, Wangon, Cilongok, Jatilawang, Purbalingga, Banjarnegara, Cilacap, Kebumen, dan Tegal. Untuk area yang lebih jauh, bisa dikonfirmasi dulu lewat WhatsApp sebelum deal.",
src/data/blogPosts.js:214:          "Showroom kami ada di Pamijen, Sokaraja — bisa dikunjungi langsung untuk lihat stok fisik, atau cukup chat dulu kalau belum sempat datang."
src/data/blogPosts.js:221:          "Tidak ada biaya konsultasi. Tidak perlu datang dulu. Kalau cocok, baru deal dan atur jadwal pengiriman serta pemasangan."
src/data/blogPosts.js:323:          "Kirim ukuran ruangan, daya listrik, durasi pemakaian, dan budget ke RADJA AC. Tim RADJA AC bisa bantu arahkan apakah lebih aman memilih standard, low watt, atau inverter sesuai stok terbaru."
src/data/buyingGuideBlogPost.js:6:    "Panduan beli AC baru agar tidak salah pilih: cek ukuran ruangan, daya listrik, PK, tipe AC, brand, garansi, stok, dan kebutuhan pemasangan.",
src/data/buyingGuideBlogPost.js:20:    "Beli AC baru sebaiknya tidak dimulai dari merek atau harga termurah dulu. Pembeli perlu cek ukuran ruangan, daya listrik, kapasitas PK, tipe AC, garansi, stok unit, dan kebutuhan pemasangan agar AC nyaman dipakai setelah terpasang.",
src/data/buyingGuideBlogPost.js:54:        "RADJA AC bisa membantu cek kebutuhan AC baru, pilihan brand, kapasitas PK, stok, pengiriman unit, dan opsi pemasangan lewat WhatsApp sebelum Anda deal.",
src/data/daikinPriceBlogPost.js:39:        "Cara paling cepat: kirim ukuran ruangan, daya listrik, dan foto titik pemasangan ke WhatsApp RADJA AC. Kami bantu arahkan tipe Daikin yang sesuai, cek stok terbaru, dan estimasi total biaya termasuk pemasangan — sebelum kamu memutuskan."
src/data/freonEducationBlogPost.js:62:        "Untuk rumah dengan daya terbatas, AC low watt bisa dipertimbangkan. Untuk pemakaian lama setiap hari, AC inverter sering lebih nyaman. Untuk toko, kantor, kost, atau banyak ruangan, stok dan jadwal pemasangan perlu dicek lebih awal.",
src/data/freonEducationBlogPost.js:69:        "RADJA AC dapat membantu cek stok, rekomendasi PK, pilihan brand, estimasi harga, dan jadwal pemasangan. Tujuannya sederhana: Anda membeli AC yang sesuai kebutuhan, bukan sekadar mengganti unit lama tanpa perhitungan.",
src/data/halfPkPriceBlogPost.js:5:  description: "Panduan cek harga AC 1/2 PK plus pemasangan. Pahami ukuran ruangan, daya listrik, paket pasang, pipa, bracket, stok brand, dan biaya tambahan sebelum beli.",
src/data/halfPkPriceBlogPost.js:25:        "Yang perlu dibandingkan adalah total paketnya, bukan hanya harga unit. Tanyakan unitnya original, garansi resmi, stok ready atau inden, dan apa saja yang sudah termasuk dalam paket pasang. Kalau tidak jelas dari awal, pembeli bisa kaget saat ada tambahan biaya setelah teknisi cek lokasi."
src/data/halfPkPriceBlogPost.js:50:      heading: "Brand AC 1/2 PK yang bisa dicek sesuai stok",
src/data/halfPkPriceBlogPost.js:52:        "Pilihan AC 1/2 PK bisa berbeda tergantung stok terbaru. Pembeli bisa cek opsi dari beberapa brand seperti Hisense, Midea, Sharp, Gree, Daikin, Sansui, Panasonic, Samsung, dan brand lain sesuai ketersediaan.",
src/data/halfPkPriceBlogPost.js:60:        "RADJA AC bisa bantu cek stok AC 1/2 PK, rekomendasi brand, estimasi kebutuhan pemasangan, dan opsi lain jika ternyata ruangan lebih cocok memakai 3/4 PK atau 1 PK. Tujuannya jelas: jangan sampai pembeli terlihat hemat di awal, tapi menyesal setelah unit terpasang."
src/data/home/brandItems.js:5:    logo: "/assets/logos/daikin-logo.webp",
src/data/home/brandItems.js:11:    logo: "/assets/logos/gree-logo.webp",
src/data/home/brandItems.js:17:    logo: "/assets/logos/midea-logo.webp",
src/data/home/brandItems.js:23:    logo: "/assets/logos/hisense-logo.png",
src/data/home/brandItems.js:29:    logo: "/assets/logos/sansui-logo.png",
src/data/home/brandItems.js:35:    logo: "/assets/logos/sharp-logo.webp",
src/data/home/brandItems.js:41:    logo: "/assets/logos/panasonic-logo.webp",
src/data/home/categoryItems.js:24:    desc: "Untuk toko, kantor, cafe, proyek, dan kebutuhan banyak unit.",
src/data/home/whyChooseItems.js:11:    desc: "Yang perlu dicek bukan cuma harga unit, tapi juga stok, tipe, garansi, dan kebutuhan pemasangan.",
src/data/kostBlogPost.js:31:        "Untuk kebutuhan banyak unit, brand bisa dipilih berdasarkan budget, ketersediaan stok, garansi, dan kemudahan perawatan. Tidak semua kamar harus memakai brand premium jika targetnya adalah pengadaan ekonomis yang tetap layak.",
src/data/kostBlogPost.js:32:        "RADJA AC bisa membantu membandingkan opsi brand seperti Daikin, Gree, Midea, Hisense, Sansui, dan brand lain sesuai stok serta kebutuhan pemilik kost."
src/data/localBuyingGuideBlogPost.js:5:  description: "Panduan membeli AC baru agar lebih aman: cek ukuran ruangan, daya listrik, pilihan brand, stok, garansi, dan kebutuhan pemasangan.",
src/data/localBuyingGuideBlogPost.js:45:        "RADJA AC membantu calon pembeli area Purwokerto, Banyumas, dan sekitarnya untuk cek kebutuhan AC baru, pilihan brand, kapasitas PK, stok, dan estimasi pemasangan lewat WhatsApp."
src/data/lowWattElectricityBlogPost.js:43:      heading: "Data yang wajib dikirim sebelum cek stok",
src/data/mideaPriceBlogPost.js:12:  intro: "RADJA AC menyediakan AC Midea di Purwokerto dengan pilihan tipe standard, low watt, dan inverter. Harga AC Midea di pasaran mulai dari sekitar 3 jutaan tergantung kapasitas PK, tipe unit, dan kelengkapan paket pemasangan. Untuk harga dan stok terbaru, bisa langsung cek lewat WhatsApp atau lihat halaman katalog Midea di website ini.",
src/data/mideaPriceBlogPost.js:39:        "Untuk cek stok dan harga terbaru, bisa lihat halaman Midea di website ini atau langsung kirim ukuran ruangan dan daya listrik ke WhatsApp RADJA AC. Kami bantu arahkan tipe yang paling sesuai dan estimasi total biaya termasuk pemasangan sebelum kamu memutuskan."
src/data/samsungInverterBlogPost.js:5:  description: "Panduan cek AC Samsung inverter Purwokerto untuk kamar, rumah, dan pemakaian rutin. Pahami PK, daya listrik, stok, harga terbaru, dan pemasangan sebelum beli.",
src/data/samsungInverterBlogPost.js:27:        "Samsung inverter bisa dipertimbangkan untuk pembeli yang mencari brand familiar dan ingin kenyamanan harian. Namun pilihan final tetap harus melihat ukuran ruangan, daya listrik, budget, dan stok unit terbaru.",
src/data/samsungInverterBlogPost.js:64:      heading: "Jangan abaikan stok dan tipe yang sedang tersedia",
src/data/samsungInverterBlogPost.js:67:        "Harga yang terlihat cocok tidak akan membantu kalau tipe yang dibutuhkan sedang kosong atau kapasitas PK yang sesuai tidak tersedia. Cek stok lebih awal membuat keputusan lebih cepat dan menghindari bolak-balik pilihan.",
src/data/samsungInverterBlogPost.js:75:        "Cek stok dan harga terbaru via WhatsApp sebelum mengambil keputusan. Stok dan tipe bisa berubah, jadi lebih aman memastikan unit yang ready sebelum datang atau sebelum transfer.",
src/data/samsungInverterBlogPost.js:76:        "Kalau kebutuhan ruangan ternyata tidak cocok dengan Samsung inverter, rekomendasi bisa diarahkan ke kapasitas lain, tipe low watt, standard, atau brand lain sesuai stok terbaru. Yang penting pembeli tidak salah keluar uang di awal."
src/data/sharpBeyBlogPost.js:5:  description: "Panduan cek AC Sharp BEY Purwokerto untuk kamar, rumah, kos, dan kebutuhan harian. Cek stok, PK, harga terbaru, dan paket pemasangan sebelum beli.",
src/data/sharpBeyBlogPost.js:21:  intro: "Sharp BEY bisa jadi pilihan untuk pembeli yang mencari AC standard untuk kamar, rumah harian, kos, atau ruang kecil. Tapi jangan langsung beli hanya karena nama Sharp atau harga terlihat masuk. Tetap cek kapasitas PK, ukuran ruangan, daya listrik, stok unit, dan kebutuhan pemasangan agar tidak salah pilih.",
src/data/sharpBeyBlogPost.js:27:        "Kalau kebutuhan utama adalah AC yang simpel, brand familiar, dan dipakai untuk ruangan rumah biasa, Sharp BEY layak dicek. Tapi pilihan final tetap harus menyesuaikan ukuran ruangan dan stok yang tersedia.",
src/data/sharpBeyBlogPost.js:36:        "Pembeli juga perlu memastikan unit yang ditawarkan sesuai stok terbaru. Jangan sampai sudah cocok dengan harga, tetapi tipe atau kapasitas PK yang dibutuhkan ternyata tidak tersedia saat ingin dipasang."
src/data/sharpBeyBlogPost.js:72:      heading: "Cara cek stok Sharp BEY di RADJA AC",
src/data/sharpBeyBlogPost.js:74:        "Kirim ukuran ruangan, daya listrik, foto titik indoor, foto titik outdoor, lokasi pemasangan, dan budget. Dari data itu, RADJA AC bisa bantu cek apakah Sharp BEY cocok, kapasitas PK apa yang aman, dan apakah stok sedang ready.",
src/data/sharpBeyBlogPost.js:76:        "Kalau Sharp BEY sedang tidak paling cocok untuk kondisi ruangan, RADJA AC bisa bantu arahkan opsi lain seperti AC standard brand lain, low watt, atau inverter sesuai stok terbaru."
src/pages/AcInverter.jsx:84:  { name: "Daikin", href: "/brand/daikin", note: "Pilihan inverter premium yang banyak dicari untuk kamar dan pemakaian harian. Cek stok tipe dan PK dulu." },
src/pages/AcInverter.jsx:85:  { name: "Gree", href: "/brand/gree", note: "Opsi inverter yang cukup menarik untuk rumah harian dan pemakaian panjang, sesuai stok terbaru." },
src/pages/AcInverter.jsx:100:  "Brand dan tipe yang stoknya benar-benar ready",
src/pages/AcInverter.jsx:122:      "Harga AC inverter biasanya mulai 4 jutaan tergantung brand, PK, stok, dan paket pemasangan. Untuk angka tepat, chat admin RADJA AC karena stok dan harga supplier bisa berubah.",
src/pages/AcInverter.jsx:192:        description="Cari AC inverter Purwokerto untuk kamar, rumah, kantor kecil, atau pemakaian lama? RADJA AC bantu cek stok, harga, rekomendasi PK, pilihan brand, dan pemasangan area Purwokerto–Banyumas."
src/pages/AcInverter.jsx:231:                AC inverter cocok untuk ruangan yang dipakai rutin dan lama — kamar tidur semalaman, ruang keluarga aktif, kantor kecil, atau tempat usaha tertentu. RADJA AC bantu cek ukuran ruangan, daya listrik, stok brand, dan estimasi pemasangan supaya Anda tidak salah pilih.
src/pages/AcInverter.jsx:296:                RADJA AC bantu cek stok AC inverter, konfirmasi harga plus pemasangan, dan arahkan pilihan brand sesuai ukuran ruangan. Garansi teknisi 1 bulan untuk pekerjaan pemasangan, garansi unit mengikuti ketentuan brand.
src/pages/AcInverter.jsx:413:            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilihan brand inverter disesuaikan dengan stok yang ready</h2>
src/pages/AcKantorKomersial.jsx:54:    description: "Cocok untuk kantor, cafe, showroom, ruang tunggu, atau ruangan yang butuh udara lebih menyebar merata dan tampilan plafon lebih rapi tanpa unit menonjol di dinding.",
src/pages/AcKantorKomersial.jsx:71:  "Sebaran udara lebih merata untuk kantor, cafe, showroom, dan ruang tunggu",
src/pages/AcKantorKomersial.jsx:79:    src: "/assets/midea-cassette-display.webp",
src/pages/AcKantorKomersial.jsx:80:    alt: "Display AC cassette Midea di showroom RADJA AC",
src/pages/AcKantorKomersial.jsx:81:    note: "Foto display di showroom RADJA AC",
src/pages/AcKantorKomersial.jsx:85:    src: "/assets/daikin-cassette-display.webp",
src/pages/AcKantorKomersial.jsx:86:    alt: "Display AC cassette Daikin di showroom RADJA AC",
src/pages/AcKantorKomersial.jsx:91:    src: "/assets/sansui-cassette-display.webp",
src/pages/AcKantorKomersial.jsx:92:    alt: "Display AC cassette Sansui di showroom RADJA AC",
src/pages/AcKantorKomersial.jsx:103:  { title: "Showroom", icon: ShoppingBag },
src/pages/AcKantorKomersial.jsx:109:  "Pembelian banyak unit untuk kost, kontrakan, kantor, toko, sekolah, atau proyek developer",
src/pages/AcKantorKomersial.jsx:111:  "Cek ketersediaan stok dan alternatif unit — stok bisa berubah, konfirmasi ke admin dulu",
src/pages/AcKantorKomersial.jsx:112:  "Bisa koordinasi kebutuhan pengiriman dan pemasangan beberapa titik sekaligus",
src/pages/AcKantorKomersial.jsx:113:  "Cocok untuk pemilik kost, kontraktor, pemilik usaha, pengadaan kantor, dan proyek perumahan",
src/pages/AcKantorKomersial.jsx:127:  "Lokasi proyek / alamat pemasangan",
src/pages/AcKantorKomersial.jsx:133:  { name: "Midea", href: "/brand/midea", note: "Tersedia tipe split wall dan cassette untuk kebutuhan kantor, cafe, dan ruang komersial. Konfirmasi stok ke admin sebelum deal." },
src/pages/AcKantorKomersial.jsx:136:  { name: "Brand Lainnya", href: "/brand/lainnya", note: "Sharp, Panasonic, LG, Samsung, dan brand lain bisa dicek ketersediaan tipe dan stoknya langsung via WhatsApp." },
src/pages/AcKantorKomersial.jsx:161:    answer: "Melayani. Untuk kost banyak kamar, kantor beberapa ruangan, pengadaan toko, sekolah, atau proyek developer, RADJA AC bisa bantu koordinasi kebutuhan unit, rekomendasi brand, dan instalasi sesuai kondisi lapangan. Stok tetap perlu dikonfirmasi dulu sebelum deal karena bisa berubah.",
src/pages/AcKantorKomersial.jsx:165:    answer: "AC cassette lebih cocok kalau ruangan butuh sebaran udara yang lebih merata dari tengah, atau kalau tampilan ruangan ingin lebih rapi tanpa unit menonjol di dinding. Cocok untuk kantor terbuka, cafe, showroom, klinik, atau ruang tunggu. Tapi perlu cek kondisi plafon, jalur drainase, dan posisi outdoor dulu sebelum deal.",
src/pages/AcKantorKomersial.jsx:173:    answer: "Bisa. Untuk kebutuhan komersial atau banyak unit, instalasi bisa dikonsultasikan sekalian dengan cek stok dan harga unit. Biaya pemasangan tergantung kondisi lokasi, jumlah titik, panjang pipa, dan material tambahan yang diperlukan — semua bisa dijelaskan sebelum deal.",
src/pages/AcKantorKomersial.jsx:181:    answer: "Bisa bantu arahkan. Kalau ada kendala pada unit setelah dipasang, RADJA AC bisa bantu arahan awal proses klaim garansi ke brand terkait sesuai ketentuan resmi — selama nota pembelian, kartu garansi, nomor seri unit, dan bukti kendala tersedia. Klaim diproses melalui jalur resmi brand masing-masing.",
src/pages/AcKantorKomersial.jsx:241:        description="Butuh AC untuk kantor, toko, ruko, cafe, klinik, kost, atau pembelian banyak unit di Purwokerto? RADJA AC bantu cek stok, estimasi harga plus pemasangan, rekomendasi PK dan brand, AC cassette, dan koordinasi pengadaan area Purwokerto–Banyumas."
src/pages/AcKantorKomersial.jsx:280:                Kebutuhan AC untuk tempat usaha beda dari kamar rumah biasa. Jam operasional lebih panjang, orang lebih banyak, dan beban panas ruangan lebih berat — semuanya ikut menentukan kapasitas, tipe, dan jumlah unit yang paling masuk akal. RADJA AC bantu cek stok, rekomendasi, dan estimasi harga plus pemasangan untuk area Purwokerto, Banyumas, Sokaraja, dan sekitarnya.
src/pages/AcKantorKomersial.jsx:319:                    ["3", "Konfirmasi stok dan pilih brand"],
src/pages/AcKantorKomersial.jsx:346:                RADJA AC bantu cek AC kantor dan komersial, konfirmasi stok, estimasi harga plus pemasangan, dan koordinasi pengadaan untuk area Purwokerto, Banyumas, Sokaraja, dan sekitarnya.
src/pages/AcKantorKomersial.jsx:420:                  RADJA AC juga melayani kebutuhan AC cassette untuk kantor, cafe, restoran, showroom, klinik, dan ruang komersial lain yang ingin sebaran udara lebih merata dari tengah — tanpa unit AC menonjol di dinding.
src/pages/AcKantorKomersial.jsx:423:                  Foto display unit di showroom RADJA AC. Ketersediaan tipe dan brand perlu dikonfirmasi ke admin karena stok bisa berubah.
src/pages/AcKantorKomersial.jsx:431:                    src="/assets/midea-cassette-display.webp"
src/pages/AcKantorKomersial.jsx:432:                    alt="Display AC cassette Midea di showroom RADJA AC"
src/pages/AcKantorKomersial.jsx:596:                Kirim jumlah ruangan, ukuran, lokasi, estimasi unit, dan target budget. Tim RADJA AC bantu cek stok, rekomendasikan tipe dan brand yang paling masuk akal, serta berikan estimasi harga plus pemasangan dari awal.
src/pages/AcKantorKomersial.jsx:610:                Sebelum chat admin untuk minta estimasi, halaman-halaman berikut bisa jadi referensi tambahan — terutama untuk kebutuhan proyek banyak unit atau instalasi komersial.
src/pages/AcKantorKomersial.jsx:621:                  <p className="mb-4 text-sm leading-7 text-white/60">Untuk kebutuhan banyak unit, proyek developer, kantor cabang, atau pengadaan usaha skala besar.</p>
src/pages/AcKantorKomersial.jsx:625:                  key="/pengiriman-pemasangan"
src/pages/AcKantorKomersial.jsx:626:                  to="/pengiriman-pemasangan"
src/pages/AcLowWatt.jsx:110:  { name: "Daikin", href: "/brand/daikin", note: "Cek opsi mode hemat atau seri tertentu yang konsumsi dayanya lebih ringan sesuai stok terbaru." },
src/pages/AcLowWatt.jsx:112:  { name: "Midea", href: "/brand/midea", note: "Ada beberapa tipe Midea yang cocok untuk daya terbatas — stok dicek dulu sebelum deal." },
src/pages/AcLowWatt.jsx:113:  { name: "Hisense", href: "/brand/hisense", note: "Cek opsi tipe Hisense yang konsumsi dayanya lebih ringan sesuai stok yang ready." },
src/pages/AcLowWatt.jsx:158:    answer: "Bisa bantu arahkan. Kalau ada kendala pada unit AC setelah dipasang, RADJA AC bisa bantu arahan proses klaim garansi ke brand terkait sesuai ketentuan resmi — selama kartu garansi, nota pembelian, nomor seri unit, dan bukti kendala tersedia.",
src/pages/AcLowWatt.jsx:218:        description="Cari AC low watt Purwokerto untuk rumah listrik 900–1300 watt? RADJA AC bantu cek stok, harga, rekomendasi PK, dan pemasangan. Konsultasi MCB, daya listrik, dan pilihan brand. Garansi teknisi 1 bulan."
src/pages/AcLowWatt.jsx:258:                Low watt bisa bantu meringankan beban listrik — tapi bukan berarti boleh asal pilih PK paling kecil. Kalau ruangannya terlalu besar, AC tetap kerja keras dan ruangan lama dingin. RADJA AC bantu cek kondisi listrik, ukuran ruangan, dan stok AC low watt Purwokerto yang paling aman untuk situasi Anda.
src/pages/AcLowWatt.jsx:498:            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilihan brand low watt disesuaikan dengan stok yang ready</h2>
src/pages/AcSetengahPk.jsx:52:    "Harga AC 1/2 PK tergantung brand, tipe standard/low watt/inverter, stok, promo, dan paket pemasangan. Lebih aman cek stok dan harga terbaru lewat WhatsApp sebelum deal.",
src/pages/AcSetengahPk.jsx:67:    "Bisa cek stok dan pemasangan sekalian?",
src/pages/AcSetengahPk.jsx:68:    "Bisa. Kirim ukuran ruangan, daya listrik, lokasi, dan kebutuhan brand. Admin RADJA AC bantu cek stok, harga, pengiriman, dan opsi pemasangan by konfirmasi.",
src/pages/AcSetengahPk.jsx:75:      href={buildWhatsAppUrl("Halo RADJA AC, saya mau cek stok dan harga AC 1/2 PK. Tolong bantu rekomendasi standard, low watt, atau inverter sesuai ruangan saya.")}
src/pages/AcSetengahPk.jsx:93:        description="Cek harga AC 1/2 PK, pilihan standard, low watt, dan inverter. RADJA AC bantu rekomendasi PK, cek stok, pengiriman, dan opsi pemasangan sebelum beli."
src/pages/AcSetengahPk.jsx:139:                {["harga ac 1/2 pk", "ac 1/2 pk low watt", "ac 1/2 pk inverter", "cek stok sebelum deal"].map((item) => (
src/pages/AcSetengahPk.jsx:231:                  Admin bantu cek stok AC 1/2 PK yang ready, bandingkan low watt vs inverter, dan arahkan brand yang paling masuk untuk kebutuhan Anda.
src/pages/AcSetengahPk.jsx:276:              Tanya dulu tidak apa-apa. Kirim ukuran ruangan, daya listrik, dan kebutuhan Anda — admin bantu cek stok, harga, dan rekomendasi tipe yang paling masuk.
src/pages/AcSplitRumah.jsx:91:  { name: "Gree", href: "/brand/gree", note: "Pilihan yang cukup umum untuk rumah tinggal harian. Ada opsi standard, low watt, dan inverter — stok dicek admin dulu." },
src/pages/AcSplitRumah.jsx:95:  { name: "Brand Lainnya", href: "/brand/lainnya", note: "Sharp, Panasonic, Samsung, LG, dan brand lain bisa dicek ketersediaan tipe dan stoknya langsung via WhatsApp." },
src/pages/AcSplitRumah.jsx:123:    question: "Apakah stok brand dan tipe AC di RADJA AC selalu ready?",
src/pages/AcSplitRumah.jsx:124:    answer: "Tidak selalu. Stok tergantung suplai dan yang sudah terjual. Sebelum deal, sebaiknya chat dulu ke admin untuk konfirmasi stok tipe dan PK yang Anda cari. Jangan sampai sudah sepakat harga tapi unit yang diinginkan tidak tersedia.",
src/pages/AcSplitRumah.jsx:128:    answer: "Bisa. RADJA AC melayani pembelian unit sekaligus pemasangan untuk area Purwokerto, Banyumas, Sokaraja, dan sekitarnya. Biaya pasang dan material tambahan seperti pipa atau braket bisa dikonfirmasi langsung ke admin bersamaan dengan cek stok unit.",
```

## Current Next.js asset paths

```text
app/favicon.ico
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
```

## Initial migration decision

| Asset group | Initial decision | Reason |
|---|---|---|
| Favicon/app icon assets | Candidate for controlled migration | Required for production polish and already referenced by the live old repo. |
| Logo / brand assets | Candidate for controlled migration | Needed for final brand/OG if the source asset is approved. |
| OG/showroom image | Review carefully | Old repo uses showroom/stok wording; must not imply unsupported showroom/cabang claims unless source confirms it. |
| Proof/delivery/project images | Candidate after manual review | Useful for trust pages, but must verify ownership, relevance, and claims. |
| Manufacturer/product images | Defer/restrict | Do not migrate unless rights/source are clear and the image is required by a final page. |
| Starter/default assets in Next.js | Remove/replace in future asset PR | `next.svg`, `vercel.svg`, and other starter assets should not remain as final production assets unless unused and harmless. |

## Recommendation

Do a small implementation PR next: add only approved logo/favicon/app-icon/OG assets, update metadata references, and remove unused starter assets if safe. Proof/project images should be a separate PR after manual review.
