// Maps each area slug to a content cluster. Keeping this as a central map
// (rather than a field per item) makes cluster assignment scalable and easy
// to audit. An item may still set its own `clusterType` to override the map.
export const areaClusterMap = {
  // Hospitality & wisata
  "jual-ac-baturraden": "hospitality",
  "jual-ac-banjarnegara": "hospitality",
  "jual-ac-magelang": "hospitality",
  // Kos & pendidikan (Kembaran = kos kecil/rumah sewa/kontrakan sekitar kampus)
  "jual-ac-kembaran": "education",
  "jual-ac-salatiga": "education",
  // Residential
  "jual-ac-banyumas": "residential",
  "jual-ac-karanglewas": "residential",
  "jual-ac-sumbang": "residential",
  "jual-ac-kedungbanteng": "residential",
  "jual-ac-cilongok": "residential",
  "jual-ac-patikraja": "residential",
  // Perdagangan & transit
  "jual-ac-sokaraja": "trade",
  "jual-ac-kalibagor": "trade",
  "jual-ac-rawalo": "trade",
  "jual-ac-ajibarang": "trade",
  "jual-ac-wangon": "trade",
  "jual-ac-jatilawang": "trade",
  "jual-ac-kebumen": "trade",
  "jual-ac-gombong": "trade",
  "jual-ac-karanganyar-kebumen": "trade",
  "jual-ac-kutowinangun": "trade",
  "jual-ac-pekalongan": "trade",
  "jual-ac-kroya": "trade",
  "jual-ac-majenang": "trade",
  "jual-ac-sidareja": "trade",
  "jual-ac-kesugihan": "trade",
  "jual-ac-adipala": "trade",
  // Industri & pengadaan
  "jual-ac-purbalingga": "industrial",
  "jual-ac-cilacap": "industrial",
  "jual-ac-tegal": "industrial",
  "jual-ac-semarang": "industrial",
  // Kota besar & hospitality urban
  // Purwokerto = pusat kota komersial (UNSOED, hotel, kantor, perdagangan)
  "jual-ac-purwokerto": "urban",
  "jual-ac-yogyakarta": "urban",
  "jual-ac-solo": "urban",
};
