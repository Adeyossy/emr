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

export const mdsItems = [
  [
    ["Present (0)", "Absent (1)"],
    "parkinsonism",
    0,
    1,
    "Parkinsonism",
    "",
    ""
  ],
  [
    ["Bradykinesia (0)", "Rest tremor (1)", "Rigidity (2)"],
    "criteria",
    0,
    2,
    "Criteria (tick all that apply)",
    "",
    ""
  ],
  [
    ["Clinically Established PD (0)", "Clinically Probable PD (1)"],
    "diagnosticcategory",
    0,
    1,
    "Diagnostic category (see criteria below category)",
    "",
    ""
  ],
  [
    [
      "Clear and dramatic beneficial response to dopaminergic therapy (1)", 
      "Presence of levodopa-induced dyskinesia (2)",
      "Rest tremor of a limb, documented on clinical examination (in past, or on current examination) (3)",
      "The presence of either olfactory loss (or cardiac sympathetic denervation on MIBG Scintigraphy) (4)"
    ],
    "supportivecriteria",
    1,
    4,
    "Supportive criteria (Check box if criteria met)",
    "",
    ""
  ],
  [
    [
      `Unequivocal cerebellar abnormalities such as cerebellar gait, limb ataxia, or cerebellar 
       oculomotor abnormalities (e.g. sustained gaze evoked nystagmus, macro square wave jerks,
        hypermetric saccades) (1)`,
      `Downward vertical supranuclear gaze palsy, or selective slowing of downward vertical 
      saccades (2)`,
      `Diagnosis of probable behavioural variant frontotemporal dementia or primary progressive 
      aphasia, defined according to consensus criteria within the first 5 years of disease (3)`,
      `Parkinsonian features restricted to the lower limbs for more than 3 years (4)`,
      `Treatment with a dopamine receptor blocker or a dopamine-depleting agent in a dose and 
      time-course consistent with drug-induced parkinsonism (5)`,
      `Absence of observable response to high-dose levodopa despite at least moderate severity 
      of disease (6)`,
      `Unequivocal cortical sensory loss (i.e. graphaesthesia, stereognosis with intact primary 
      sensory modalities), clear limb ideomotor apraxia, or progressive aphasia (7)`,
      `Normal functional neuroimaging of the presynaptic dopaminergic system (8)`,
      `Documentation of an alternative condition known to produce parkinsonism and plausibly 
      connected to the patient's symptoms, or, the expert evaluating physician, based on the 
      full diagnostic assessment feels that an alternative syndrome is more likely than PD (9)`
    ],
    "absoluteexclusioncriteria",
    1,
    9,
    "Absolute exclusion criteria",
    "",
    ""
  ],
  [
    [
      `Rapid progression of gait impairment requiring regular use of wheelchair within 5 years 
      of onset (1)`,
      `A complete absence of progression of motor symptoms or signs over 5 or more years unless 
      stability is related to treatment (2)`,
      `Early bulbar dysfunction: severe dysphonia or dysarthria (speech unintelligble most of 
      the time) or severe dysphagia (requiring soft food, NG tube, or gastrostomy feeding) 
      within first 5 years (3)`,
      `Inspiratory respiratory dysfunction: either diurnal or nocturnal inspiratory stridor or
      frequent inspiratory sighs (4)`,
      `Severe autonomic failure in the first 5 years of disease. This can include: Orthostatic 
      hypotension or severe urinary retention or urinary incontinence in the first 5 years of 
      disease that is not simply functional incontinence (5)`,
      `Recurrent (>1/y) falls because of impaired balance within 3 years of onset (6)`,
      `Disproportionate anterocollis (dystonic) or contractures of hand or feet within the 
      first 10 years (7)`,
      `Absence of any of the common nonmotor features of disease despite 5 years disease duration.
      These include sleep dysfunction (sleep-maintenance insomnia, excessive daytime somnolence, 
      symptoms of REM sleep behaviour disorder), autonomic dysfunction (constipation, daytime 
      urinary urgency, symptomatic orthostasis), hyposmia, or psychiatric dysfunction 
      (depression, anxiety, or hallucinations) (8)`,
      `Otherwise-unexplained pyramidal tract signs, defined as pyramidal weakness or clear 
      pathologic hyperreflexia (excluding mild reflex asymmetry and isolated extensor plantar 
      response) (9)`,
      `Bilateral symmetric parkinsonism. The patient or caregiver reports bilateral symptom 
      onset with no side predominance, and no side predominance is observed on objective 
      examination (10)`
    ],
    "redflags",
    1,
    10,
    "Red flags",
    "",
    ""
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