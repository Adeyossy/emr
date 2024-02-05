const rosier = [
  [
    ["No", "Yes"], "facialweakness", 0, 1, "Unilateral Facial Weakness (+1)"
  ],
  [
    ["No", "Yes"], "gripweakness", 0, 1, "Unilateral Grip Weakness (+1)"
  ],
  [
    ["No", "Yes"], "armweakness", 0, 1, "Unilateral Arm Weakness (+1)"
  ],
  [
    ["No", "Yes"], "legweakness", 0, 1, "Unilateral Leg Weakness (+1)"
  ],
  [
    ["No", "Yes"], "speechloss", 0, 1, "Speech Loss (+1)"
  ],
  [
    ["No", "Yes"], "visualfielddefect", 0, 1, "Visual Field Defect (+1)"
  ],
  [
    ["Loss of Consciousness (-1)", "No LOC"], "lossofconsciousness", -1, 0, "Consciousness"
  ],
  [
    ["Present (-1)", "Absent (0)"], "seizure", -1, 0, "Seizure"
  ],
];

export const rosierItems = [
  ["Rosier Scale (To indicate probability of stroke in acute presentations)", rosier]
];