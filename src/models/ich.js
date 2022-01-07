const gcsItems = [
  [
    [
      "3 - 4 (2)", "5 - 12 (1)",
      "13 - 15 (0)"
    ], "gcs", 0, 2
  ]
];

const ichVolumeItems = [
  [
    [
      ">= 30 (1)", "< 30 (0)"
    ], "ichvolume", 0, 1
  ]
]

const ivhItems = [
  [
    [
      "Yes (1)", "No (0)"
    ], "ivh", 0, 1
  ]
];

const infratentorialItems = [
  [
    [
      "Yes (1)", "No (0)"
    ], "infratentorial", 0, 1
  ]
];

const ageItems = [
  [
    [
      ">= 80 (1)", "< 80 (0)"
    ], "age", 0, 1
  ]
];

export const ichItems = [
  ["GCS Score", gcsItems],
  ["ICH Volume (cubic centimetres)", ichVolumeItems],
  ["Intraventricular Haemorrhage", ivhItems],
  ["Infratentorial Origin of ICH", infratentorialItems],
  ["Age (year)", ageItems]
];