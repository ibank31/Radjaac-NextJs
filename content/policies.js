export const businessPolicies = {
  installationWarranty: {
    label: "Garansi pemasangan",
    duration: "1 bulan",
    summary:
      "Garansi pemasangan 1 bulan untuk pekerjaan pemasangan yang dikerjakan melalui RADJA AC.",
    publicCopy:
      "Garansi pemasangan 1 bulan untuk pemasangan yang dikerjakan melalui RADJA AC.",
  },

  unitWarranty: {
    label: "Garansi unit",
    summary:
      "Garansi unit mengikuti ketentuan resmi dari brand masing-masing sesuai yang tercantum pada kemasan, kartu garansi, atau dokumen garansi unit.",
    publicCopy:
      "Garansi unit mengikuti ketentuan resmi dari brand yang tertera pada kemasan, kartu garansi, atau dokumen garansi unit.",
  },

  claimAssistance: {
    label: "Bantuan klaim unit",
    summary:
      "Jika ada kendala pada unit, hubungi RADJA AC untuk arahan klaim ke brand terkait sesuai ketentuan garansi brand.",
    publicCopy:
      "Jika ada kendala pada unit, RADJA AC mengarahkan proses klaim ke brand terkait sesuai ketentuan garansi brand.",
  },

  legalEntity: {
    publicName: "CV. Prima Sedaya",
    relationship:
      "CV. Prima Sedaya merupakan bagian dari operasional RADJA AC dan boleh disebut di website publik.",
    publicCopy:
      "Beberapa dokumen kerja sama atau sertifikat brand dapat tercatat atas nama RADJA AC maupun CV. Prima Sedaya, yang merupakan bagian dari operasional RADJA AC.",
  },
};

export const warrantyHighlights = [
  businessPolicies.installationWarranty.publicCopy,
  businessPolicies.unitWarranty.publicCopy,
  businessPolicies.claimAssistance.publicCopy,
];

export const legalEntityCopy = businessPolicies.legalEntity.publicCopy;
