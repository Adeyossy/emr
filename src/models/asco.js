const options = ["Completely Absent (0)",
  "Definitely a potential cause of the index stroke (1)",
  "Causality uncertain (2)", 
  "Unlikely a direct cause of the index stroke (but disease is present) (3)",
  "Grading is not possible due to insufficient work-up (9)"
];

const atheroItems = [
  [options, "atherosclerosis", 0, 9]
];

const smallVesselItems = [
  [options, "smallvesseldisease", 0, 9]
];

const cardiacItems = [
  [options, "cardiac", 1, 6]
];

const otherItems = [
  [options, "other", 0, 9]
]

export const ascoItems = [
  ["Atherosclerosis", atheroItems],
  ["Small Vessel Disease", smallVesselItems],
  ["Cardiac Source", cardiacItems],
  ["Other Cause", otherItems]
];