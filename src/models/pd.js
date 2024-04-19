const yesOrNo = [ "Yes (0)", "No (1)"]
const options = [ ...yesOrNo, "Uncertain (2)" ];
const options2 = [ ...options, "Predate PK (3)" ];

const featuresItems = [
  [
    [
      "Yes (0)", "No (1)", "Uncertain (2)"
    ], "bradykinesia", 0, 3, "Bradykinesia is present and typical for parkinsonism",
    `Bradykinesia: Slowness of movement and decrement in amplitude or speed or progressive 
    hesitations/halts as movements are continued`
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
    options2, "apathy_neurobehavioural", 0, 3, `Apathy`, ``
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

const mdsUpdrsItems = [
  [
    [
      "(0) Patient", "(1) Caregiver", "(2) Patient and Caregiver in Equal Proportion"
    ],
    "primarysourceinformation",
    0,
    2,
    "Primary source of information",
    "",
    ""
  ],
  [
    [
      "(0) Normal: No cognitive impairment", `(1) Slight: Impairment appreciated by patient 
      or caregiver with no concrete interference with the patient's ability to carry out 
      normal activities and social interactions.`, `(2) Mild: Clinically evident cognitive 
      dysfunction, but only minimal interference with the patient's ability to carry out normal
      activities and social interactions.`, `(3) Moderate: Cognitive deficits interfere with 
      but do not preclude the patient's ability to carry out normal activities and social 
      interactions.`, `(4) Severe: Cognitive dysfunction precludes the patient's ability to 
      carry out normal activities and social interactions.`
    ],
    "cognitiveimpairment",
    0,
    4,
    "1.1 Cognitive impairment",
    `Consider all types of altered level of cognitive function including slowing, impaired 
    reasoning, memory loss, deficits in attention and orientation. Rate their impact on 
    activities of daily living as perceived by the patient and/or caregiver.`,
    `Over the past week have you had problems remembering things, following conversations, 
    paying attention, thinking clearly, or finding your way around the house or in town?.
    [If yes, examiner asks patient or caregiver to elaborate and probes for information]`
  ],
  [
    [
      `(0) Normal: No hallucinations or psychotic behaviour.`, `(1) Slight: Illusions or 
      non-formed hallucinations, but patient recognizes them without loss of insight.`,
      `(2) Mild: Formed hallucinations independent of environmental stimuli. No loss of 
      insight.`, `(3) Moderate: Formed hallucinations with loss of insight.`, `(4) Severe: 
      Patient has delusions or paranoia.`
    ],
    "hallucinationsandpsychosis",
    0,
    4,
    "1.2 Hallucinations and Psychosis",
    `Consider both illusions (minsinterpretations of real stimuli) and hallucinations 
    (spontaneous false sensations). Consider all major sensory domains (visual, auditory, 
    tactile, olfactory and gustatory). Determine presence of unformed (for example sense of 
    presence or fleeting false impressions) as well as formed (fully developed and detailed) 
    sensations. Rate the patients insight into hallucinations and identify delusions and 
    psychotic thinking.`,
    `Over the past week have you seen, heard, smelled or felt things that were not really there? 
    [If yes, examiner asks patient or caregiver to elaborate and probes for information]`
  ],
  [
    [
      `(0) Normal: No depressed mood`, `(1) Slight: Episodes of deperessed mood that are not 
      sustained for more than one day at a time. No interference with patient's ability to carry 
      out normal activities and social interactions.`, `(2) Mild: Depressed mood that is sustained 
      over days, but without interference with normal activities and social interactions.`, `(3) 
      Moderate: Depressed mood that interferes with, but does not preclude, the patient's ability 
      to carry out normal activities and social interactions.`, `(4) Severe: Depressed mood 
      precludes patient's ability to carry out normal activities and social interactions.`
    ],
    "depressedmood",
    0,
    4,
    "1.3 Depressed mood",
    `Consider low mood, sadness, hopelessness, feelings of emptiness or loss of enjoyment. 
    Determine their presence and duration over the past week and rate their interference with 
    the patient's ability to carry out daily routines and engage in social interactions.`,
    `Over the apst week have you felt low, sad, hopeless or unable to enjoy things? If yes, 
    was this feeling for longer than one day at a time? Did it make it difficult for you carry 
    out your usual activities or to be with people? [If yes, examiner asks patient or caregiver 
    to elaborate and probes for information]`
  ],
  [
    [
      `(0) Normal: No anxious feelings.`, `(1) Slight: Anxious feelings present but not sustained 
      for more than one day at a time. No interference with patient's ability to carry out 
      normal activities and social interactions.`, `(2) Mild: Anxious feelings are sustained 
      over more than one day at a time, but without interference with patient's ability to 
      carry out normal activities and social interactions.`, `(3) Moderate: Anxious feelings 
      interfere with, but do not preclude, the patient's ability to carry out normal activities 
      and social interactions.`, `(4) Severe: Anxious feelings preclude patient's ability to 
      carry out normal activities and social interactions.`
    ],
    "anxiousmood",
    0,
    4,
    "1.4 Anxious mood",
    `Determine nervous, tense, worried or anxious feelings (including panic attacks) over the 
    past week and rate their duration and interference with the patient's ability to carry out 
    daily routines and engage in social interactions.`,
    `Over the past week have you felt nervous, worried or tense? If yes, was this feeling for 
    longer than one day at a time? Did it make it difficult for you to follow your usual 
    activities or to be with other people? [If yes, examiner asks patient or caregiver to 
    elaborate and probes for information.]`
  ],
  [
    [
      `(0) Normal: No apathy`, `(1) Slight: Apathy appreciated by patient and/or caregiver, 
      but no interference with daily activities and social interactions.`, `(2) Mild: Apathy 
      interferes with isolated activities and social interactions.`,`(3) Moderate: Apathy 
      interferes with most activities and social interactions.`, `(4) Severe: Passive and 
      withdrawn, complete loss of initiative.`
    ],
    "apathy_mdsupdrs",
    0,
    4,
    "1.5 Apathy",
    `Consider level of spontaneious activity, assertiveness, motivation and initiative and rate 
    the impact of reduced levels on performance of daily routines and social interactions. 
    Here the examiner should attempt to distinguish between apathy and similar symptoms that 
    are best explained by depression`,
    `Over the past week, have you felt indifferent to doing activities or being with people?
    [If yes, examiner asks patient or caregiver to elaborate and probes for information.]`
  ],
  [
    [
      `(0) Normal: No problems present.`, `(1) Slight: Problems are present but usually do not 
      cause any difficulties`, `(2) Mild: Problems are present and usually cause a few 
      difficulties in the patient's personal and family life.`, `(3) Moderate: Problems are 
      present and usually cause a lot of difficulties in the patient's personal and family 
      life.`, `(4) Severe: Problems are present and preclude the patient's ability to carry out 
      normal activities or social interactions or to maintain previous standards in personal and 
      family life.`
    ],
    "dopaminedysregulationsyndrome",
    0,
    4,
    "1.6 Features of dopamine dysregulation syndrome",
    `Consider involvement in a variety of activities including atypical or excessive gambling 
    (e.g. casinos or lottery tickets), atypical or excessive sexual drive or interests (e.g., 
    unusual interest in pornography, masturbation, sexual demands on partner), other repetititive 
    activities (e.g. hobbies, dismantling objects, sorting or organizing), or taking extra 
    non-prescribed medication for non-physical reasons (i.e. addictive beahviour). Rate the 
    impact of such abnormal activities/behaviours on the patient's personal life and on his 
    family and social relations (including need to borrow money or other financial difficulties 
    like withdrawal of credit cards, major family conflicts, lost time from work, or missed meals 
    or sleep because of the activity).`,
    `Over the past week, have you had unusually strong urges that are hard to control? Do you 
    feel driven to do or think about something and find it hard to stop? [Give patient examples 
    such as gambling, cleaning, using the computer, taking extra medicine, obsessing about food 
    or sex, all depending on the patients.]`
  ]
];

// Patient questionnaire and motor examination done by collaborator

const motorComplications = [
  [
    [
      "(0) Normal: No dyskinesias.", `(1) Slight: <= 25% of waking day.`, `(2) Mild: 26 - 50% 
      of waking day.`, `(3) Moderate: 51 - 75% of waking day.`, `(4) Severe: > 75% of waking day.`
    ],
    "timespentwithdyskinesias",
    0,
    4,
    "4.1 Time spent with dyskinesias",
    `Determine the hours in the usual waking day and then the hours of dyskinesias. Calculate 
    the percentage. If the patient has dyskinesias in the office, you can point them out as a 
    reference to ensure that patients and caregivers understand what they are rating. You may 
    also use your own acting skills to enact the dyskinetic movements you have seen in the 
    patient before or show them dyskinetic movements typical of other patients. Exclude from 
    this question early morning and nighttime painful dystonia.`,
    `Over the past week, how many hours do you usually sleep on a daily basis, including nightime 
    sleep and daytime napping? Alright, if you sleep ____ hrs, you are awake ___ hrs. Out of 
    those awake hours, how many hours in total do you have wiggling, twitching or jerking 
    movements? Do not count the times when you have tremor, which is a regular back and forth 
    shaking or times when you have painful foot cramps or spasms in the early morning or at 
    nighttime. I will ask about those later. Concentrate only on these types of wiggling, 
    jerking and irregular movements. Add up all the time during the waking day when these 
    usually occur. How many hours ___ (use this number for your calculation).`
  ],
  [
    [
      "(0) Normal: No dyskinesias or no impact by dyskinesias on activities or social interactions.",
      `(1) Slight: Dyskinesias impact on a few activities, but the patient usually performs all 
      activities and participates in all social interactions during dyskinetic periods.`,
      `(2) Mild: Dyskinesias impact on many activities, but the patient usually performs all 
      activities and participates in all social interactions during dyskinetic periods.`,
      `(3) Moderate: Dyskinesias impact on activities to the point that the patient usually does 
      not perform some activities or does not usually participate in some social activities 
      during dyskinetic episodes.`,
      `(4) Severe: Dyskinesias impact on function to the point that the patient usually does not 
      perform most activities or participate in most social interactions during dyskinetic 
      episodes.`
    ],
    "functionalimpactofdyskinesias",
    0,
    4,
    "4.2 Functional impact of dyskinesias",
    `Determine the degree to which dyskinesias impact on the patient's daily function in terms of 
    activities and social interactions. Use the patient's and caregiver's response to your 
    question and your own observations during the office visit to arrive at the best answer.`,
    `Over the past week, did you usually have trouble doing things or being with people when 
    these jerking movements occurred? Did they stop you from doing things or from being with 
    people?`
  ],
  [
    [
      `(0) Normal: No OFF time.`, `(1) Slight: <= 25% of waking day.`, `(2) Mild: 26 - 50% 
      of waking day.`, `(3) Moderate: 51 - 75% of waking day.`, `(4) Severe: > 75% of waking day.`
    ],
    "timespentintheoffstate",
    0,
    4,
    "4.3 Time spent in the OFF state",
    `Use the number of waking hours derived from 4.1 and determine the hours spent in the "OFF" 
    state. Calculate the percentage. If the patient has an OFF period in the office, you can point 
    to this state as a reference. You may also use your knowledge of the patient to describe a 
    typical OFF period. Additionally you may use your own acting skills to enact an OFF period 
    you have seen in the patient before or show them OFF function typical of other patient. 
    Mark down the typical number of OFF hours, because you will need this number for completing 
    4.6`,
    `Some patients with Parkinson's disease have a good effect from their medications throughout 
    their awake hours and se call that "ON" time. Other patients take their medications but still 
    have some hours of low time, bad time, slow time or shaking time. Doctors call these low 
    periods "OFF" time. Over the past week, you told me before that you are generally awake ___
    hrs each day. Out of these awake hours, how many hours in total do you usually have this 
    type of low level or OFF function ____ (Use this number for your calculations).`
  ],
  [
    [
      `(0) Normal: No fluctuations or No impact by fluctuations on performance of activities 
      or social interactions.`,
      `(1) Slight: Fluctuations impact on a few activities, but during OFF, the patient usually 
      performs all activities and participates in all social interactions that typically occur 
      during the ON state.`,
      `(2) Mild: Fluctuations impact many activities, but during OFF, the patient still usually 
      performs all activities and participates in all social interactions that typically occur 
      during the ON state.`,
      `(3) Moderate: Fluctuations impact on the performance of activities during OFF to the 
      point that the patient usually does not perform some activities or participate in some 
      social interactions that are performed during ON periods.`,
      `(4) Severe: Fluctuations impact on function to the point that, during OFF, the patient 
      usually does not perform most activities or participate in most social interactions that 
      are performed during ON periods.`
    ],
    "functionalimpactoffluctuations",
    0,
    4,
    "4.4 Functional impact of fluctuations",
    `Determine the degree to which motor fluctations impact on the patient's daily function in 
    terms of activities and social interactions. Thie question concentrates on the difference 
    between the ON state and the OFF state. If the patient has no OFF time, the rating must be 
    0, but if patients have very mild fluctuations, it is still possible to be rated 0 on this 
    item if no impact on activities occurs. Use the patient's and caregiver's response to your 
    question and your own observations during the office visit to arrive at the best answer.`,
    `Think about when those low or "OFF" periods have occurred over the past week. Do you usually 
    have more problems doing things or being with people than compared to the rest of the day 
    when you feel your medications working? Are there some things you usually do during a good 
    period that you have trouble with or stop doing during a low period?`
  ],
  [
    [
      `(0) Normal: No motor fluctuations.`,
      `(1) Slight: OFF times are predictable all or almost all of the time (> 75%).`,
      `(2) Mild: OFF times are predictable most of the time (51 - 75%).`,
      `(3) Moderate: OFF times are predictable some of the time (26 - 50%).`,
      `(4) Severe: OFF episodes are rarely predictable (<= 25%).`
    ],
    "complexofmotorfluctuations",
    0,
    4,
    "4.5 Complexity of motor fluctuations",
    `Determine the usual predictability of OFF function whether due to dose, time of day, food 
    intake or other factors. Use the information provided by the patients and caregiver and 
    supplement with your own observations. You will ask if the patient can count on them always 
    coming at a special time, mostly coming at a special time (in which case you will probe 
    further to separate slight from mild), only sometimes coming at a special time or are they 
    totally unpredictable? Narrowing down the percentage will allow you to find the correct 
    answer.`,
    `For some patients, the low or "OFF" periods happen at certain times during day or when they 
    do activities like eating or exercising. Over the past week, do you usually know when your 
    low periods will occur? In other words, do your low periods always come at a certain time? 
    Do they mostly come at a certain time? Do they only sometimes come at a certain time? Are 
    your low periods totally unpredictable?`
  ],
  [
    [
      "(0) Normal: No dystonia OR NO OFF TIME.",
      "(1) Slight: < 25% of time in OFF state.",
      "(2) Mild: 26 - 50% of time in OFF state.",
      "(3) Moderate: 51 - 75% of time in OFF state.",
      "(4) Severe: > 75% of time in OFF state."
    ],
    "painfuloffstatedystonia",
    0,
    4,
    "4.6 Painful OFF-State dystonia",
    `For patients who have motor fluctuations, determine what proportion of the OFF episodes 
    usually includes painful dystonia? You have already determined the number of hours of OFF 
    time (4.3). Of these hours, determine how many are associated with dystonia and calculate 
    the percentage. If there is no OFF time, mark 0.`,
    `In one of the questions I asked earlier, you said you generally have ____ hours of low 
    or "OFF" time when your Parkinson's disease is under poor control. During these low or "OFF" 
    periods, do you usually have painful cramps or spasms? Out of the total ____ hrs of this low 
    time, if you add up all the time in a day when these painful cramps come, how many hours would 
    this make?`
  ]
]

const pdClinicalSeverityStageItems = [
  [
    [
      "1 - Unilateral involvement only",
      "1.5 - Unilateral and axial involvement",
      `2 - Bilateral involvement without impairment of balance`,
      `2.5 - Mild bilateral disease with recovery on pull test`,
      `3 - Mild to moderate bilateral disease; some postural instability; physically independent`,
      `4 - Severe disability; still able to walk or stand unassisted`,
      `5 - Wheelchair bound or bedridden unless aided`
    ],
    "modifiedhoehnandyahrscale",
    1,
    5,
    "Modified Hoehn and Yahr Scale",
    "",
    ""
  ],
  [
    [
      `(0) Initial: Very mild clinical manifestations; absence of diability; and no need for 
      pharmacological treatment or only initial therapy at low effective doses`,
      `(1) Mild: Mild clinical and functional manifestations; minimal or no complications; and 
      satisfactory response to conventional pharmacological therapy`,
      `(2) Moderate: Moderate clinical manifestations and disability; good response; some 
      complications are present, although not satisfactory to the conventional pharmacological 
      therapy`,
      `(3) Advanced: Severe clinical manisfestations and disability; severe motor and non-motor 
      complications; parital poor response to conventional pharmacological therapy`,
      `(4) Late stage: Very severe clinical manifestations and disability; very severe motor 
      and non-motor complications; no response to conventional pharmacological therapy`
    ],
    "pdclinicalstage",
    0,
    4,
    "PD Clinical Stage (Clinical Judgement Martinez-Martin P et al 2018",
    "",
    ""
  ],
  [
    [
      "Other", "Idiopathic/sporadic", "Familial (unspecified inheritance)", "Autosomal dominant",
      "Autosomal recessive", "X-linked dominant", "Unknown"
    ],
    "diseasetypeinheritance",
    0,
    6,
    "Disease type: Inheritance",
    "",
    ""
  ],
  [
    [
      "Other or unspecified", "Progressive", "Non Progressive", "Unknown"
    ],
    "diseasetypeprogression",
    0,
    3,
    "Disease type: Progression", "", ""
  ],
  [
    [
      "Other or unspecified", "Typical", "Atypical", "Unknown"
    ],
    "diseasetypecharacteristics",
    0, 3, "Disease type: Characteristics", "", ""
  ],
  [
    [
      "Other or unspecified", "Chronic", "Episodic/intermittent", "Unknown"
    ],
    "diseasetypepersistence", 0, 3, "Disease type: Persistence", "", ""
  ],
  [
    [ "Other or unspecified", "Pure (uncomplicated)", "Complicated", "Unknown" ],
    "diseasetypecomplexity", 0, 3, "Disease type: Complexity", "", ""
  ],
  [
    ["Tremor Dominant", "Mixed", "Akinetic/Rigid", "Postural Instability Gait Difficulty (PIGD)"],
    "diseasetypepdtype", 0, 3, "Disease type: PD type", "", ""
  ]
]

const cisiPdItems = [
  [
    [
      "(0) Normal", "(1) Very mild", "(2) Mild", "(3) Mild to moderate", "(4) Moderate", 
      "(5) Severe", "(6) Severe"
    ],
    "motorsigns",
    0,
    6,
    "Motor signs",
    "",
    ""
  ],
  [
    [
      "(0) Normal", "(1) Minimal slowness and/or clumsiness", `(2) Slowness and/or clumsiness; 
      no limitations`, `(3) Limitation for demanding activities; does not need help for basic 
      ADL`, `(4) Limitation to perform basic ADL; help is required for some basic ADL`, `(5) 
      Great limitation to perform basic ADL; help is required for most or all basic ADL`,
      `(6) Severly disabled; helpless; complete assistance needed`
    ],
    "disability",
    0,
    6,
    "Disability",
    "", ""
  ],
  [
    [
      "(0) Not at all", "(1) Very mild", "(2) Mild", "(3) Mild to moderate", "(4) Moderate",
      "(5) Severe", "(6) Very severe"
    ],
    "motorcomplications",
    0, 6, "Motor complications (dyskinesia and fluctuations)", "", ""
  ],
  [
    [
      "(0) Normal", "(1) Slowness and/or minimal cognitive problems", `(2) Mild cognitive 
      problems; no limitations`, `(3) Mild to moderate cognitive problems; does not need help 
      for basic ADL`, `(4) Moderate cognitive problems; help is required for basic 
      ADL`, `(5) Severe cognitive problems; help is required for most or all basic ADL`, 
      `(6) Severely disabled; helpless; complete assistance needed`
    ],
    "cognitivestatus", 0, 6, "Cognitive status", "", ""
  ]
]

const pthOptions = ["Not tried/not given", "Tried and responsive", "Inadequate dose", 
                    "Tried and unresponsive", "Unknown"];

const pthItems = [
  [
    pthOptions,
    "levodopa",
    0,
    4,
    "Levodopa",
    "",
    ""
  ],
  [ pthOptions, "dopaminereceptoragonist", 0, 4, "Dopamine receptor agonist", "", "" ],
  [ pthOptions, "anticholinergic", 0, 4, "Anticholinergic", "", "" ],
  [ pthOptions, "amantadine", 0, 4, "Amantadine", "", "" ],
  [ pthOptions, "other", 0, 4, "Other", "", "" ],
  [ [], "agestartedlevodopa", 0, 200, "Age started levodopa (if relevant) (years)", "", "" ]
];

const antiparkinsonianMeds = [
  [
    [], "levodopacarbidopa", 0, 5000, "Levodopa/Carbidopa: Total active drug dose/24 hours", "", ""
  ],
  [
    [], "levodopabenserazide", 0, 5000, "Levodopa/benserazide: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "Nonergotdra", 0, 5000, "Non-ergot DRA: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "bromocriptine", 0, 5000, "Bromocriptine: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "artanetrihexyphenidyl", 0, 5000, "Artane/Trihexyphenidyl: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "amantadinetotalactivedrug", 0, 5000, "Amantadine: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "entacapone", 0, 5000, "Entacapone: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "pramipaxole", 0, 5000, "Pramipaxole: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "selegeline", 0, 5000, "Selegeline: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "ropinirole", 0, 5000, "Ropinirole: Total active drug dose/24 hours",
    "", ""
  ]
];

const vitalSigns = [
  [
    [], "sbpsitting", 0, 400, "SBP (sitting):", "", ""
  ],
  [
    [], "dbpsitting", 0, 400, "DBP (sitting):", "", ""
  ],
  [
    [], "hrsitting", 0, 400, "HR (sitting):", "", ""
  ],
  [
    [], "sbpstanding", 0, 400, "SBP (standing):", "", ""
  ],
  [
    [], "dbpstanding", 0, 400, "DBP (standing):", "", ""
  ],
  [
    [], "hrstanding", 0, 400, "HR (standing):", "", ""
  ]
]

const osAbnormalitiesOptions = ["(0) Normal", "(1) Abnormal", "(2) Cannot Assess"];
const osAbnormalitiesItems = [
  [
    osAbnormalitiesOptions, "skinabnormalities", 0, 2, "Skin:", "", ""
  ],
  [
    osAbnormalitiesOptions, "headnecklymphatic", 0, 2, "Head/Neck/Lymphatic:", "", ""
  ],
  [
    osAbnormalitiesOptions, "eyesabnormalities", 0, 2, "Eyes:", "", ""
  ],
  [
    osAbnormalitiesOptions, "earsnosethroat", 0, 2, "Ears/Nose/Throat", "", ""
  ],
  [
    osAbnormalitiesOptions, "lungsabnormalities", 0, 2, "Lungs:", "", ""
  ],
  [
    osAbnormalitiesOptions, "cardiovascular", 0, 2, `Cardiovascular (including peripheral 
      vascular)`, "", ""
  ],
  [
    osAbnormalitiesOptions, "abdomenabnormailities", 0, 2, "Abdomen:", "", ""
  ],
  [
    osAbnormalitiesOptions, "musculoskeletalabnormalities", 0, 2, "Musculoskeletal:", "", ""
  ],
  [
    osAbnormalitiesOptions, "neurological", 0, 2, "Neurological (not including PD, if applicable)",
    "", ""
  ]
];

const neurologicalExamOptions = ["(0) Normal", "(1) Abnormal", "(2) Not tested", 
  "(3) Plantar response"];

const neurologicalExamItem = [
  [
    neurologicalExamOptions, "mentalstatus", 0, 3, "Mental status", "", ""
  ],
  [
    neurologicalExamOptions, "cniitoxii", 0, 3, "CN (II - XII)", "", ""
  ],
  [
    neurologicalExamOptions, "motorneurologicalexam", 0, 3, "Motor", "", ""
  ],
  [
    neurologicalExamOptions, "sensoryneurologicalexam", 0, 3, "Sensory", "", ""
  ],
  [
    neurologicalExamOptions, "coordinationneurologicalexam", 0, 3, "Coordination", "", ""
  ],
  [
    neurologicalExamOptions, "reflexesneurologicalexam", 0, 3, "Reflexes", "", ""
  ],
  [
    neurologicalExamOptions, "gaitneurologicalexam", 0, 3, "Gait", "", ""
  ]
];

const rfqOptions = ["(0) No", "(1) Yes", "(2) Possibly", "(3) DNK", "(4) Refused"];

const rfqItems = [
  [
    rfqOptions, "drunkcaffeinatedcoffee", 0, 4, `In your lifetime, have you ever regularly 
    drunk caffeinated coffee (that is, at least once per week for 6 months or longer)?`, "", ""
  ],
  [
    rfqOptions, "drunkcaffeinatedblacktea", 0, 4, `In your lifetime, have you ever regularly 
    drunk hot or iced caffeinated black tea (that is, at least once per week for 6 months or 
    longer)?`, "", ""
  ],
  [
    rfqOptions, "drunkcaffeinatedgreentea", 0, 4, `In your lifetime, have you ever regularly 
    drink caffeinated green tea (that is, at least once per week for 6 months or longer)?`, "", ""
  ],
  [
    rfqOptions, "drunkcaffeinatedsoda", 0, 4, `In your lifetime, have you ever regularly drunk 
    caffeinated soda (that is, at least once per week for 6 months or longer)`, "", ""
  ],
  [
    rfqOptions, "headinjuryorconcussion", 0, 4, `Have you ever had a head injury or concussion?`,
    "", ""
  ],
  [
    rfqOptions, "ibuprofenbasednonaspirin", 0, 4, `Have you ever regularly taken ibuprofen-based 
    non-aspirin medications (that is, at least two pills per week for 6 months or longer)?`, "",
    ""
  ],
  [
    rfqOptions, "regularlytakenaspirin", 0, 4, `Have you ever regularly taken aspirin (that is, 
    at least two pills per week for 6 months or longer)?`, "", ""
  ],
  [
    rfqOptions, "antiinflammatorymedications", 0, 4, `Have you ever regularly taken other 
    anti-inflammatory medications for pain, inflammation, or swelling (that is, at least two 
    pills per week for 6 months or longer)?`, "", ""
  ],
  [
    rfqOptions, "cigarettes100ormore", 0, 4, `In your lifetime, have you smoked 100 or more 
    cigarettes (5 packs)?`, "", ""
  ],
  [
    rfqOptions, "regularlysmokedcigarettes", 0, 4, `In your lifetime, have you ever regularly 
    smoked cigarettes?`, "", ""
  ],
  [
    rfqOptions, "smokelesstobacco", 0, 4, `Have you ever used smokeless tobacco such as chewing 
    tobacco or snuff regularly (that is, at least once per day for 6 months or longer)?`, "", ""
  ],
  [
    rfqOptions, "alcoholicdrinks100ormore", 0, 4, `In your lifetime, have you drunk 100 or more 
    alcoholic drinks (beer, wine, liquor, spirits)?`, "", ""
  ],
  [
    rfqOptions, "regularlydrunkalcohol", 0, 4, `In your lifetime, have you ever regularly drunk 
    alcohol (that is, at least one drink per week for 6 months or longer)?`, "", ""
  ]
];

const singleItemHyposmia = [
  [
    ["(0) Yes", "(1) No", "(2) Don't Know"], "experienceproblemssenseofsmell", 0, 2,
    `Are you experiencing problems with your sense of smell?`, "", ""
  ]
];

const hyposmiaRatingScale = [
  [
    [
      "(0) I am unfamiliar or have never smelt fresh flowers.",
      `(1) I am never aware of, even after being asked by others if I can smell it`,
      `(2) I am only aware of, if asked by others whether I can smell it`,
      `(3) I am sometimes aware of it, without others remarking on it.`,
      `(4) I am always aware of it, without others remarking on it.`
    ], "goingtofloristscentflowers", 0, 4, `1. When going to a florist; the scent of flowers 
    (or When near flowers/plants):`, "", ""
  ],
  [
    [
      "(0) I am unfamiliar or have never smelt it",
      "(1) I am never unaware of, even after being asked by others if I can smell it",
      "(2) I am only aware of, if asked by others whether I can smell it",
      "(3) I am sometimes aware of it, without others remarking on it.",
      "(4) I am always aware of it, without others remarking on it."
    ], "gasleaksmellunburnedgas", 0, 4, `2. If I am close to a gas leak, the smell of unburned 
    gas:`, "", ""
  ],
  [
    [
      "(0) I am unfamiliar or have never smelt garbage or other foul odours",
      "(1) I am never aware of, even after being asked by others if I can smell them",
      "(2) I am only aware of, if asked by others whether I can smell them",
      "(3) I am sometimes aware of it, without others remarking on it.",
      "(4) I am always aware of it, without others remarking on it."
    ], "garbagesewagefoulsmelling", 0, 4, `3. If I am close to garbage, sewage or other 
    foul-smelling materials:`, "", ""
  ],
  [
    [
      "(0) I am unfamiliar of have never smelt perfume",
      "(1) I am never aware of, even after being asked by others if I can smell it",
      "(2) I am only aware of, if asked by others whether I can smell it",
      "(3) I am sometimes aware of it, without others remarking on it.",
      "(4) I am always aware of it, without others remarking on it."
    ], "scentperfumestandingsitting", 0, 4, `4. The scent of perfume on someone I am standing 
    or sitting quite close to:`, "", ""
  ],
  [
    [
      "(0) I am unfamiliar or have never smelt it",
      "(1) I am never aware of, even after being asked by others if I can smell it",
      "(2) I am only aware of, if asked by others whether I can smell it",
      "(3) I am sometimes aware of it, without others remarking on it.",
      "(4) I am always aware of it, without others remarking on it."
    ], "closedconfinedspacesstuffiness", 0, 4, `5. In closed or confined spaces the smell of 
    stuffiness or strong body odour:`, "", "" 
  ],
  [
    [
      "(0) I am unfamiliar or have never smelt the smell of home cooked food.",
      "(1) I am never aware of, even after being asked by others if I can smell it",
      "(2) I am only aware of, if asked by others whether I can smell it",
      "(3) I am sometimes aware of it, without others remarking on it.",
      "(4) I am always aware of it, without others remarking on it."
    ], "smellhomecookingbeingcooked", 0, 4, `6. The smell of home cooking (smell from food 
    being cooked):`, "", ""
  ]
];

const remOptions = ["(0) No", "(1) Yes"];

const remSleepAssessment = [
  [
    [
      "(0) Participant", "(1) Caregiver/Informant", "(2) Both"
    ], "remsleepsourceofinformation", 0, 2, `Source of information`, "", ""
  ],
  [
    [ "(0) No", "(1) Yes" ], "actoutyourdreamswhileasleep", 0, 1, `Have you ever been told, or 
    suspected yourself, that you seem to 'act out your dreams' while asleep (for example, 
    punching, flailing your arms in the air, making running movements, etc.)?`, "", ""
  ],
  [
    remOptions, "remsleepveryvividdreams", 0, 1, `1. I sometimes have very vivid dreams`, "", ""
  ],
  [
    remOptions, "dreamsaggressiveactionpacked", 0, 1, `2. My dreams frequently have an aggressive or 
    action-packed content.`, "", ""
  ],
  [
    remOptions, "dreamcontentsnocturnalbehaviour", 0, 1, `3. The dream contents mostly match 
    my nocturnal behaviour.`, "", ""
  ],
  [
    remOptions, "knowarmslegsmovewhenasleep", 0, 1, `4. I know that my arms or legs move when I 
    sleep.`, "", ""
  ],
  [
    remOptions, "happenedhurtbedpartner", 0, 1, `5. It thereby happened that I (almost) jurt by 
    bed partner or myself.`, "", ""
  ],
  [
    remOptions, "speakingshoutingswearing", 0, 1, `6.1. I have or had the following phenomena during 
    my dreams: speaking, shouting, swearing, laughing loudly`, "", ""
  ],
  [
    remOptions, "suddenlimbmovementsfights", 0, 1, `6.2. I have or had the following phenomena 
    during my dreams: sudden limb movements, "fights":`, "", ""
  ],
  [
    remOptions, "gesturescomplexmovements", 0, 1, `6.3. I have or had the following phenomena 
    during my dreams: gestures, complex movements, that are useless during sleep, e.g. to wave, 
    to salute, to frighten mosquitoes, fall of the bed:`, "", ""
  ],
  [
    remOptions, "thingsfelldownaroundbed", 0, 1, `6.4. I have or had the following phenomena 
    during my dreams: things that fell down around the bed, e.g. bedside lamp, book, glasses:`,
    "", ""
  ],
  [
    remOptions, "ithappensmovementsawake", 0, 1, `7. It happens that my movements awake me.`, 
    "", ""
  ],
  [
    remOptions, "awakeningremembercontentdreams", 0, 1, `8. After awakening I mostly remember 
    the content of my dreams well.`, "", ""
  ],
  [
    remOptions, "sleepfrequentlydisturbed", 0, 1, `9. My sleep is frequently disturbed.`, "", ""
  ],
  [
    remOptions, "parkinsondiseaseatypicalparknisonism", 0, 1, `10. I have Parkinson's disease 
    or atypical parkinsonism`, "", ""
  ]
];

const merqOptions = [ "(0) No", "(1) Yes", "(9) Uncertain" ];

export const merqItems = [
  [
    merqOptions, "jobpesticideherbicides", 0, 9, `1. Over you lifetime, have you ever had a job in 
    which you used any type of pesticide, including herbicides, insecticides, fungicides, or 
    fumigants (e.g. gammalin)?`, "", ""
  ],
  [
    merqOptions, "exposedpesticideshomepet", 0, 9, `2. Over your lifetime, were you ever exposed 
    to pesticides including herbicides, insecticides, fungicides, or fumigants used on your home, 
    lawn, garden or on a pet?`, "", ""
  ],
  [
    merqOptions, "workedchemicalsolvents", 0, 9, `3. Over your lifetime, have you ever worked with 
    chemical solvents for more than 6 months?`, "", ""
  ],
  [
    merqOptions, "workedheavymetals", 0, 9, `4. Over your lifetime, have you ever worked with 
    heavy metals (e.g. iron, lead) for more than 6 months?`, "", ""
  ],
  [
    merqOptions, "workedchemicalsfumes", 0, 9, `5. Over your lifetime, have you ever worked with any 
    other chemicals or fumes for more than 6 months?`, "", ""
  ],
  [
    [], "parkinsoncaffeinebeverages", 0, 50, `6. Before now (if healthy control) or Before you 
    developed symptoms of Parkinson's (if participant has PD or atypical PD), on average, how 
    many cups of caffeine-containing beverage (e.g. coffee, tea, coke) did you drink each day, 
    during the times you were drinking caffeine-containing beverages? ______ cups/day.`, "", ""
  ],
  [
    [], "cupscaffeinecontainingbeverage", 0, 50, `7. At present, how many cups of a caffeine 
    containing beverage (e.g. coffee, cocacola) do you drink on a typical day? ______ cups/day`,
    "", ""
  ],
  [
    merqOptions, "parkinsonsmokecigarettes", 0, 50, `8. Before now (if healthy control) or 
    Before you developed symptoms of Parkinson's (if participant has PD or atypical PD), did 
    you ever smoke cigarettes regularly, that is at least 1 cigarette per day for at least 6 
    months?`, "", ""
  ],
  [
    [], "parkinsonyearssmokecigarettes", 0, 100, `8.1. If yes to 8 above, for how many years 
    did you smoke cigarettes regularly? _______ years`, "", ""
  ],
  [
    [], "parkinsonyearssmokeperday", 0, 50, `8.2. If yes to 8 above, during the time that you 
    smoked regularly, about how much did you smoke per day? (Record number of cigarettes smoked 
    per day): _____sticks/day`, "", ""
  ],
  [
    merqOptions, "smokecigarettesregularlynow9", 0, 9, `9. Do you smoke cigarettes regularly now?`,
    "", ""
  ],
  [
    [], "howmanysmokecigarettesregularlynow91", 0, 100, `9.1. If yes, how much do you smoke per
    per day? (______ sticks per day)`, "", ""
  ],
  [
    merqOptions, "developedsymptomsparkinson10", 0, 9, `10. Before now (if healthy control) or 
    Before you developed symptoms of Parkinson's (if participant has PD or atypical PD), did you 
    live with a smoker?`, "", ""
  ],
  [
    merqOptions, "beforesymptomspdheadinjury", 0, 3000, `11. Before now (if healthy control) or 
    Before you developed symptoms of Parkinson's (if relevant), did you ever have a head 
    injury where you lost consciousness or were diagnosed with a concussion by a doctor?`, "", ""
  ],
  [
    merqOptions, "femaledevelopedpdovaries", 0, 3000, `12. (Female only): Before now (if 
    healthy control) or Before you developed symptoms of Parkinson's (if participant has 
    PD or atypical PD), did you ever have one or both ovaries surgically removed?`, "", ""
  ],
  [
    merqOptions, "beforedevelopedpddepression", 0, 3000, `13. Before now (if healthy control) 
    or Before you developed symptoms of Parkinson's (if participant has PD or atypical PD), 
    were you ever diagnosed with depression?`, "", ""
  ],
  [
    merqOptions, "beforediagnosedpdanxiety", 0, 3000, `14. Before now (if healthy control) or 
    Before you developed symptoms of Parkinson's (if participant has PD or atypical PD), were 
    you ever diagnosed with anxiety?`, "", ""
  ]
];

export const pdItems = [
  ["Features of Parkinson", featuresItems],
  ["Other features supportive of Parkinson's disease", otherFeatures],
  ["Atypical Motor Features", atypicalMotorFeatures],
  ["Neurobehavioural features", neurobehaviouralItems],
  ["Other non-motor features associated with atypical parkinsonism", otherNonMotorItems],
  ["Response to therapy", responseToTherapyItems],
  ["MDS Clinical Diagnostic Criteria for PD", mdsItems],
  ["MDS UPDRS: Part 1 - NonMotor Aspects of Experiences of Daily Living (nM-EDL)", mdsUpdrsItems],
  // Insert patient questionnaire here,
  // Insert Part III - motor examination here
  ["Part IV: Motor Complications", motorComplications, `Overview and Instructions: In this 
  section, the rater uses historical and objective information to assess two motor complications, 
  dyskinesias and motor flucturations that include OFF-state dystonia. Use all information from 
  patient, caregiver, and the examination to answer the six questions that summarize function 
  over the past week including today. As in the other sections, rate using only integers (no 
  half points allowed) and leave no missing ratings. If the item cannot be rated, place UR 
  FOR Unable to Rate. You will need to choose some answers based on percentages, and therefore 
  you will need to establish how many hours generally are awake hours and use this figure as 
  the denominator for "OFF" time and Dyskinesias. For "OFF dystonia", the total "Off" time will 
  be the denominator. Operational definitions for examiner's use:||Dyskinesias: Involuntary 
  random movements. |Words that patients often recognize for dyskinesias include 
  "irregular jerking", "wiggling", "twitching". It is essential to stress to the patient the 
  difference between dyskinesias and tremor, a common error when patients are assessing 
  dyskinesias.||
  Dystonia: contorted posture, often with a twisting component. |Words that patients often 
  recognize for dystonia include "spasms", "cramps", "posture".||
  Motor fluctuation: Variable response to medication:|Words that patients often recognize for 
  motor fluctuation include "wearing out", "wearing off", "roller-coaster effect", "on-off", 
  "uneven medication effects".||
  OFF: Typical functional state when patients have a poor response in spite of taking mediation 
  or the typical functional response when patients are on NO treatment for parkinsonism. Words 
  that ptients often recognize include "low time", "bad time", "shaking time", "slow time", 
  "time when my medications don't work".||
  ON: Typical functional state when patients are receiving medication and have a good response:|
  Words that patients often recognize include "good time", "walking time", 
  "time when my medications work".`],
  [
    "PD Clinical Severity Stage", pdClinicalSeverityStageItems
  ],
  ["CISI-PD (Select the appropriate stage for each item)", cisiPdItems],
  // Create family history items,
  ["Parkinsonism Treatment History", pthItems],
  ["If on antiparkinsonian medication complete the table below", antiparkinsonianMeds],
  ["Behavioural/Social History (RFQ)", rfqItems]
];