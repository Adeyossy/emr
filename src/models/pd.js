const yesOrNo = [ "Yes (0)", "No (1)"]
const options = [ ...yesOrNo, "Uncertain (2)" ];
const options2 = [ ...options, "Predate PK (3)" ];

const featuresItems = [
  [
    [
      "Yes (0)", "No (1)", "Uncertain (2)"
    ], "bradykinesia", 0, 3, "Bradykinesia is present and typical for parkinsonism",
    `Slowness of movement and decrement in amplitude or speed or progressive hesitations/halts 
    as movements are continued`
  ],
  [
    [
      "Yes (0)", "No (1)", "Uncertain (2)"
    ], "rigidity", 0, 2, "Rigidity is present and typical for parkinsonism", 
    `Judged on slow passive movements of major joints with the patient in the relaxed position. 
    Rigidity refers to 'lead-pipe' resistance that is velocity-independence resistance to 
    passive movement not solely reflecting failure to relax. Isolated cogwheeling without 
    lead-pipe rigidity does not fulfill criteria for rigidity`
  ],
  [
    [
      "Yes (0)", "No (1)", "Uncertain (2)"
    ], 
    "resttremor", 0, 2, "Rest tremor is present and typical for parkinsonism",
    `Rest tremor refers to 4-6 Hz tremor in the fully resting limb which is 
    suppressed during movement initiation. Kinetic and postural tremor do not 
    qualify for parkinsonism criteria.`
  ],
  [
    [
      "Yes (0)", "No (1)", "Uncertain (2)"
    ], 
    "posturaldisturbance", 0, 2, "Postural disturbance is present and typical for parkinsonism",
    `Postural instability not caused by primary visual, vestibular, cerebellar or 
    proprioceptive dysfunction`
  ]
];

const otherFeatures = [
  [
    [...options], "stoopedposture", 0, 2, "Stooped posture",
    ``
  ],
  [
    options, "decreasedarmswing", 0, 2, "Decreased arm swing", ``
  ],
  [
    options, "shufflinggait", 0, 2, "Shuffling gait", ``
  ],
  [
    options, "micrographia", 0, 2, "Micrographia", ``
  ],
  [
    options2, "diminishedolfaction", 0, 3, "Diminished olfaction", ``
  ],
  [
    options2, "seborrheicdermatitis", 0, 3, "Seborrheic dermatitis", ``
  ],
  [
    options2, "dreamenactment", 0, 3, "Dream enactment/REM sleep behaviour disordeer", ``
  ]
];

const atypicalMotorFeatures = [
  [
    options, "posturalinstability", 0, 2, 
    "Postural instability or gait freezing in the first 3 years", ``
  ],
  [
    options, "supranuclear", 0, 2, "Supranuclear gaze palsy", ``
  ],
  [
    options, "dysphagia", 0, 2, "Dysphagia", ``
  ],
  [
    options, "dysarthria", 0, 2, "Dysarthria", ``
  ],
  [
    options, "inspiratorystridor", 0, 2, "Inspiratory stridor", ``
  ],
  [
    options, "anterocollis", 0, 2, "Disproportionate anterocollis", ``
  ],
  [
    options, "cerebellar", 0, 2, "Cerebellar features", ``
  ],
  [
    options, "myoclonus", 0, 2, "Myoclonus", ``
  ],
  [
    options, "dystonia", 0, 2, "Dystonia", ``
  ],
  [
    options, "practiontremor", 0, 2, "Prominent action tremor", ``
  ]
]

const neurobehaviouralItems = [
  [
    options2, "cognitivefluctuations", 0, 3, "Cognitive fluctuations", ``
  ],
  [
    options2, "systematizeddelusions", 0, 3, `Systematized delusions or visual hallucinations 
    unrelated to medications`, ``
  ],
  [
    options2, "depression", 0, 3, `Depression`, ``
  ],
  [
    options2, "anxiety", 0, 3, `Anxiety`, ``
  ],
  [
    options2, "apathy", 0, 3, `Apathy`, ``
  ],
]

const otherNonMotorItems = [
  [
    options2, "posturalhypotension", 0, 2, `Symptomatic dysautonomia unrelated to medications, 
    including: Postural Hypotension`, ``
  ],
  [
    options2, "sexualdysfunction", 0, 2, `Symptomatic dysautonomia unrelated to medications, 
    including: Sexual Dysfunction`, ``
  ],
  [
    options2, "urinarydysfunction", 0, 2, `Symptomatic dysautonomia unrelated to medications, 
    including: Urinary Dysfunction`, ``
  ],
  [
    options2, "boweldysfunction", 0, 2, `Symptomatic dysautonomia unrelated to medications, 
    including: Bowel Dysfunction`, ``
  ],
  [
    options2, "corticalsensoryloss", 0, 2, `Unequivocal cortical sensory loss (i.e. 
      graphaestesia, stereognosis with intact primary sensory modalities)`, ``
  ],
  [
    options2, "limbapraxia", 0, 2, `Limb ideomotor apraxia`, ``
  ],
  [
    options2, "pyramidaltractsigns", 0, 2, `Otherwise unexplained pyramidal tract signs`, ``
  ],
  [
    options2, "alienlimbphenomenon", 0, 2, `Alien limb phenomenon`, ``
  ],
  [
    options2, "responsetoalcohol", 0, 2, `Definite response to alcohol`, ``
  ]
]

const responseToTherapyItems = [
  [
    yesOrNo, "responsetolevodopa", 0, 1, `Clear and dramatic response to levodopa`, ``
  ],
  [
    yesOrNo, "noresponsetolevodopa", 0, 1, `Little to no response to levodopa`, ``
  ],
  [
    yesOrNo, "supersensitivity", 0, 1, "Neuroleptic super-sensitivity", ``
  ],
  [
    yesOrNo, "motorfluctuation", 0, 1, "Motor fluctuations", ``
  ],
  [
    yesOrNo, "dyskinesia", 0, 1, "Dyskinesia", ``
  ]
]

export const pdItems = [
  ["Features of Parkinson", featuresItems],
  ["Other features supportive of Parkinson's disease", otherFeatures],
  ["Atypical Motor Features", atypicalMotorFeatures],
  ["Neurobehavioural features", neurobehaviouralItems],
  ["Other non-motor features associated with atypical parkinsonism", otherNonMotorItems],
  ["Response to therapy", responseToTherapyItems]
];