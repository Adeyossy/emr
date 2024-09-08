const yesOrNo = ["Yes (0)", "No (1)"]
const options = [...yesOrNo, "Uncertain (2)"];
const options2 = [...options, "Predate PK (3)"];

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
      interferes with isolated activities and social interactions.`, `(3) Moderate: Apathy 
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

const nM_EDL = [
  [
    ["Normal: No problems (0)", "Slight: Sleep problems are present but usually do not cause trouble getting a full night of sleep (1)", "Mild: Sleep problems usually cause some diffuculties getting a full night of sleep (2)", "Moderate: Sleep problems cause of a lot of difficulties getting a full night of sleep, but I still usually sleep for more than half a night (3)", "Severe: I usually do not sleep for most of the night (4)"
    ],
    "sleepProblems",
    0,
    4,
    "Sleep Problems: Over the past week, have you had trouble going to sleep at night or staying asleep through the night? Conside how rested you felt after waking up in the morning.",
    "",
    ""
  ],
  [
    [
      "Normal: No daytime sleepiness (0), Slight: Daytime sleepiness occurs but I can resist and I stay awake (1)", "Mild: Sometimes I fall asleep when alone and relaxing. For example, while reading or watching TV (2)", "Moderate: I sometimes fall asleep when I should not. For example, while eating or talking with other people (3)", "Severe: I often fall asleep when I should not. For example, while eating or talking with other people (4)"
    ], "daytimeSleepiness",
    0,
    4,
    "Daytime Sleepiness: Over the past week, have you had trouble staying awake during the daytime?",
    "",
    ""
  ],
  [
    [
      "Normal: No uncomfortable feelings (0), Slight: I have these feelings. However, I can do things and be with other people without difficulty (1)", "Mild: These feelings cause some problems when I do things or am with other people (2)", "Moderate: These feelings cause a lot of problems, but they do not stop me from doing things or being with other people (3)", "Severe: These feelings stop me from doing things or being with other people (4)"
    ], "painSensations",
    0,
    4,
    "Pain and other sensations: Over the past week, have you had uncomfortable feelings in your body like pain, aches tingling or cramps?",
    "",
    ""
  ],
  [
    [
      "Normal: No urine control problems (0), Slight: I need to urinate often or urgently. However, these problems do not cause difficulties with my daily activities (1)", "Mild: Sleep problems usually cause some diffuculties getting a full night of sleep (2)", "Moderate: Sleep problems cause of a lot of difficulties getting a full night of sleep, but I still usually sleep for more than half a night (3)", "Severe: I usually do not sleep for most of the night (4)"
    ], "urinaryProblems",
    0,
    4,
    "Urinary Problems: Over the past week, have you had trouble with urine control? For example, an urgent need to urinate, a need to urinate too often, or urine accidents?",
    "",
    ""
  ],
  [
    [
      "Normal: No constipation (0)", "Slight: I have been constipated. I use extra effort to move my bowels. However, this problem does not disturb my activities or my being comfortable (1)", "Mild: Constipation causes me to have some troubles doing things or being comfortable (2)", "Moderate: Constipation causes me to have a lot of trouble doing things or being comfortable. However, it does not stop me from doing anything (3)", "Severe: I usually need physical help from someone else to empty my bowels (4)"
    ], "constipationProblems",
    0,
    4,
    "Constipation Problems: Over the past week, have you had constipation troubles that cause you difficulty moving your bowels?",
    "",
    ""
  ],
  [
    [
      "Normal: No dizzy or foggy feelings (0)", "Slight: Dizzy or foggy feelings occur. However, they do not cause me troubles doing things (1)", "Mild: Dizzy or foggy feelings cause me to hold on to something, but I do not need to sit or lie back down (2)", "Moderate: Dizzy or foggy feelings cause me to sit or lie down to avoid fainting or falling (3)", "Severe: Dizzy or foggy feelings cause me to fall or faint (4)"
    ], "lightHeadednessStanding",
    0,
    4,
    "Light-Headedness on Standing: Over the past week, have you felt faint, dizzy or foggy when you stand up after sitting or lying down?",
    "",
    ""
  ],
  [
    [
      "Normal: No fatigue (0)", "Slight: Fatigue occurs. However, it does not cause me troubles doing things or being with people (1)", "Mild: Fatigue causes me some troubles doing things or being with people (2)", "Moderate: Fatigue causes me a lot of troubles doing things or being with people. However, it does not stop me from doing anything (3)", "Severe: Fatigue stops me from doing things or being with people (4)"
    ], "fatigue",
    0,
    4,
    "Fatigue: Over the past week, have you usually felt fatigued? This feeling is not part of being sleepy or sad",
    "",
    ""
  ]
];

const m_EDL = [
  [
    [
      "Normal: Not at all (no problems) (0)", "Slight: My speech is soft, slurred or uneven, but it does not cause others to ask me to repeat myself (1)", "Mild: My speech causes people to ask me to occasionally repeat myself, but not everyday (2)", "Moderate: My speech is unclear enough that others ask me to repeat myself every day even though most of my speech is understood (3)", "Severe: Most or all of my speech cannot be understood (4)"
    ], "speech",
    0,
    4,
    "Speech: Over the past week, have you had problems with your speech?",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all (no problems) (0)", "Slight: I have too much saliva, but do not drool (1)", "Mild: I have some drooling during sleep, but none when I am awake (2)", "Moderate: I have some drooling when I am awake, but I usually do not need tissues or a handkerchief (3)", "Severe: I have so much drooling that I regularly need to use tissues or a handkerchief to protech my clothes (4)"
    ], "salivaDrooling",
    0,
    4,
    "Saliva & Drooling: Over the past week, have you usually had too much saliva during when you are awake or when you sleep?",
    "",
    ""
  ],
  [
    [
      "Normal: No problems (0)", "Slight: I am aware of slowness in my chewing or increased effort at swallowing, but I do not choke or need to have my food specially prepared (1)", "Mild: I need to have my pills cut or my food specially prepared because of chewing or swallowing problems, but I have not choked over the past week (2)", "Moderate: I choked at least once in the past week (3)", "Severe: Because of chewing and swallowing problems, I need a feeding tube (4)"
    ], "chewingSwallowing",
    0,
    4,
    "Chewing and Swallowing: Over the past week, have you usually had problems swallowing pills or eating meals? Do you need your pills cut or crushed or your meals to be made soft, chopped or blended to avoid choking?",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all (No problems) (0)", "Slight: I am slow, but I do not need any help handling my food and have not had food spills while eating (1)", "Mild: I am slow with my eating and have occasional food spills. I may need help with a few tasks such as cutting meat (2)", "Moderate: I need help with many eating tasks but can manage some alone (3)", "Severe: I need help for most or all eating tasks (4)"
    ], "eatingTasks",
    0,
    4,
    "Eating Tasks: Over the past week, have you usually had troubles handling your foood and using eating utensils? For example, do you have trouble handling finger foods or using forks, knives, spoons, chopsticks?",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all (No problems) (0)", "Slight: I am slow but I do not need help (1)", "Mild: I am slow and need help for a few dressing tasks (buttons, bracelets) (2)", "Moderate: I need help for many dressing tasks (3)", "Severe: I need help for most or all dressing tasks (4)"
    ], "dressing",
    0,
    4,
    "Dressing: Over the past week, have you usually had problems dressing? For example, are you slow or do you need help with buttoning, using zippers, putting on or taking off your clothes or jewelry?",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all (no problems) (0)", "Slight: I am slow but I do not need any help (1)", "Mild: I need someone else to help me with some hygiene tasks (2)", "Moderate: I need help for many hygiene tasks (3)", "Severe: I need help for most or all of my hygiene tasks (4)"
    ], "hygiene",
    0,
    4,
    "Hygiene: Over the past week, have you usually been slow or do you need help with washing, bathing, shaving, brushing teeth, combing your hair or with other personal hygiene?",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all (no problems) (0)", "Slight: My writing is slow, clumsy or uneven, but all words are clear", "Mild: Some words are unclear and difficult to read (2)", "Moderate: Many words are unclear and difficult to read (3)", "Severe: Most or all words cannot be read (4)"
    ], "handwriting",
    0,
    4,
    "Handwriting: Over the past week, have people usually have trouble reading your handwriting?",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all ( No problems) (0)", "Slight: I am a bit slow but do these activities easily (1)", "Mild: I have some difficulty doing these activities (2)", "Moderate: I have major problems doing these activities, but still do most (3)", "Severe: I am unable to do most or all of these activities (4)"
    ], "hobbiesOtherActivities",
    0,
    4,
    "Doing Hobbies and other Activities: Over the past week, have you usually had trouble doing your hobbies or other things that you like to do?",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all (0)", "Slight: I have a bit of trouble turning, but I do not need any help (1)", "Mild: I have a lot of trouble turning and need occasional help from someone else (2)", "Moderate: To turn over, I often need help from someone else (3)", "Severe: I am unable to turn over without help from someone else (4)"
    ], "turningInBed",
    0,
    4,
    "Turning in Bed: Over the past week, do you usually have trouble turning over in bed",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all. I have no shaking or tremor (0)", "Slight: Shaking or tremor occurs but does not cause problems with any activities (1)", "Mild: Shaking or tremor causes problems with only a few activities (2)", "Moderate: Shaking or tremor causes problems with many of my daily activities (3)", "Severe: Shaking or tremor causes problems with most or all activities (4)"
    ], "tremor",
    0,
    4,
    "Tremor: Over the past week, have you usually had shaking or tremor?",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all (no problems) (0)", "Slight: I am slightly slow or awkward, but I usually can do it on my first try (1)", "Mild: I need more than one try to get up or need occasional help (2)", "Moderate: I sometimes need help to get up, but most times I can still do it on my own (3)", "Severe: I need help most or all of the time (4)"
    ], "gettingOut",
    0,
    4,
    "Getting out of Bed, A car, or A Deep Chair: Over the past week, have you usually had trouble getting out of bed, a car seat, or a deep chair?",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all (no problems) (0)", "Slight: I am slightly slow or may drag a leg. I never use a walking aid (1)", "Mild: I occasionally use walking aid, but I do not need any help from another person (2)", "Moderate: I usually use a walking aid (cane, walker) to walk safely without falling. However, I do not usually need the support of another person (3)", "Severe: I usually use the support  of another persons to walk safely without falling (4)"
    ], "walkingBalance",
    0,
    4,
    "Walking and Balance: Over the past week, have you usually had problems with balance and walking?",
    "",
    ""
  ],
  [
    [
      "Normal: Not at all (no problems) (0)", "Slight: I briefly freeze but I can easily start walking again. I do not need help from someone else or a walking aid (cane or walker) because of freezing (1)", "Mild: I freeze but I can easily start walking again. I do not need someone's help or a walking aid (cane or walker) because of freezing (2)", "Moderate: When I freeze I have a lot of trouble starting to walking again, and because of freezing. I sometimes need to use a walking aid or need someone else's help (3)", "Severe: Because of freezing, most or all of the time. I need to use a walking aid or someone's help (4)"
    ], "freezing",
    0,
    4,
    "Freezing: Over the past week, on your usual day when walking, do you suddenly stop or freeze as if your feet are stuck to the floor?",
    "",
    ""
  ]
];

const m_Exam = [
  [
    [
      "No (0)", "Yes (1)"
    ], "motorexammedication",
    0,
    1,
    "Is the patient on medication for treating the symptoms of Parkinson's Disease?",
    "",
    ""
  ],
  [
    [
      "ON: On is the typical functional state when patients are receiving medication and have a good response (0)", "OFF: Off is the typical functional state when patients have a poor response in spite of taking medications (1)",
    ], "motorexamclinicalstate",
    0,
    1,
    "If the patient is receiving medication for treating the symptoms of Parkinson's Disease, mark the patient's clinical state using the following defintions: ",
    "",
    ""
  ],
  [
    [
      "No(0)", "Yes (1)", "If yes, minutes since last levodopa dose (2)"
    ], "motorexamlevodopa",
    0,
    2,
    "Is the patient on Levodopa?",
    "",
    ""
  ],
  [
    [
      "Normal: No speech problems (0)", "Slight: Loss of modulation, diction or volume, but still all words easy to understand.(1)", "Mild: Loss of modulation, diction, or volume, with a few words unclear, but the overall sentences easy to follow. (2)", "Speech is difficult to understand to the point that some, but not most, sentences are poorly understood. (3)", "Severe: Most speech is difficult to understand or unintelligible. (4)"
    ], "motorexamspeech",
    0,
    4,
    "Speech",
    "Listen to the patient's free-flowing speech and engage in conversation if necessary. Suggested topics: ask about the patient's work, hobbies, exercise, or how he got to the doctor's office. Evaluate volume, modulation (prosody) and clarity, including slurring, palilalia (repetition or syllables) and tachyphemia (rapid speech, running syllables together)",
    ""
  ],
  [
    [
      "Normal: Normal facial expression (0)", "Slight: Minimal masked facies manifested only by decreased frequency of blinking. (1)", "Mild: In addition to decreased eye-blink frequency, Masked facies present in the lower face as well, namely fewer movements around the mouth, such as less spontaneous smiling, but lips not parted. (2)", "Moderate: Masked facies with lips parted some of the time when the mouth is at rest. (3)", "Severe: Masked facies with lips parted most of the time when the mouth is at rest. (4)"
    ], "motorexamfacialexpression",
    0,
    4,
    "Facial Expression",
    "Observe the patient sitting at rest for 10 seconds, without talking and also while talking, observe eye-blink frequency, masked facies or loss of facial expression, spontaneous smiling and parting of lips. ",
    ""
  ],
  [
    [
      "Normal: No rigidity (0)", "Slight: Rigidity only detected with activation maneuver. (1)", "Mild: Rigidity detected without the activation maneuver, but full range of motion is easily achieved. (2)", "Moderate: Rigidity detected without activation maneuver; full range of motion is achieved with effort. (3)", "Severe: Rigidity detected without the activation maneuver and full range of motion not achieved.(4)"
    ], "motorexamrigidity",
    0,
    4,
    "Rigidity",
    "Rigidity is judged on slow passive movement of major joints with the patient in a relaxed position and the examiner manipulating the limbs and neck. First, test without an activation maneuver. Test and rate neck and each limb separately. For arms, test the wrist and elbow joints simultaneously. For legs, test the hip and knee joints simultaneously. if no rigidity is detected, use an activation maneuver such as tapping fingers, fist opening/closing, or heel tapping in a limb not being tested. Explain to the patient to go as limp as possible as you test for rigidity. ",
    ""
  ],
  [
    [
      "Normal: No problems. (0)", "Slight: Any of the following: a) the regular rhythm is broken with one or two interruptions or hesitations of the tapping movement; b) slight slowing; c) the amplitude decrements near the end of the 10 taps. (1)", "Mild: Any of the following: a) 3 to 5 interruptions during tapping; b) mild slowing; c) the amplitude decrements midway in the 10-tap sequence. (2)", "Moderate: Any of the following: a) more than 5 interruptions during tapping or least one longer arrest (freeze) in ongoing movement; b) mdoerate slowing; c) the amplitude decrements starting after the first tap. (3)", "Severe: Cannot or can only barely perform the task because of slowing, interruptions or decrements. (4)"
    ], "motorexamtapping",
    0,
    4,
    "Finger Tapping",
    "Each hand is tested separately. Demonstrate the task, but do not continue to perform the task while the patient is being tested. Instruct the patient to tap the index finger on the thumb 10 times as quickly and as big as possible. Rate each side separately, evaluating speed, amplitude, hesitations, halts and decrementing amplitude. ",
    ""
  ],
  [
    [
      "Normal: No problems. (0)", "Slight: Any of the following: a) the regular rhythm is broken with one or two interruptions or hesitations of the movement; b) slight slowing; c) the amplitude decrements near the end of the task. (1)", "Mild: Any of the following: a) 3 to 5 interruptions during the movements; b) mild slowing; c) the amplitude decrements midway in the task. (2)", "Moderate: Any of the following: a) more than 5 interruptions during the movements or at least one longer arrest (freeze) in ongoing movement; b) moderate slowing; c) the amplitude devrements starting after the 1st open-and-close sequence. (3)", "Severe: Cannot or can only barely perform the task perform the task because of slowing, interruptions or documents. (4)"
    ], "motorexamhandmovements",
    0,
    4,
    "Hand Movements",
    "Test each hand separately. Demonstarate the task, but do not continue to perform the task while the patient is being tested. Instruct the patient to make a tight fist with the arm bent at the elbow so that the palm faces the examiner. Have the patient open the hand 10 times as fully AND as quickly as possible. If the patient fails to make a tight fist or to open the hand fully, remind him/her to do so. Rate each side separately, evaluating speed, amplitude, hestitations, halts, and decrementing amplitudes. ",
    ""
  ],
  [
    [
      "Normal: No problems. (0)", "Slight: Any of the following: a) the regular rhythm is broken with one or two interruptions or hesitations of the movement; b) slight slowing; c) the amplitude decremtns near the end of the sequence. (1)", "Moderate: Any of the following: a) 3 to 5 interruptions during the movements; b) mild slowing; c) the amplitude decrements midway in the sequence. (2)", "Moderate: Any of the following: a) more than 5 interruptions during the movement or at least one longer arrest (freeze) in ongoing movement; b) moderate slowing; c) the amplitude decrements starting after the 1st supination-pronation sequence. (3)", "Severe: Cannot or can only barely perform the task because of slowing, interruptions or decrements. (4)"
    ], "motorexampronationsupination",
    0,
    4,
    "Pronation-Supination movements of Hands",
    "Test each hand separately. Demonstrate the task, but do not continue to perform the task while the patient is being tested. Instruct the patient to extend the arm out in front of his/her body with the palms down; then to turn the palm up and down alternately 10 times as fast and as fully as possible. Rate each side separately, evaluating speed, amplitude, hesitations, halts and decrementing amplitude. ",
    ""
  ],
  [
    [
      "Normal: No problem. (0)", "Slight: Any of the following: a) the regular rhythm is broken with one or two interruptions or hesitations of the tapping movement; b) slight slowing; c) amplitude decremtns near the end of the tap taps. (1)", "Mild: Any of the following: a) 3 to 5 interruptions during the tappin movements; b) mild slowing; c) amplitude decrements midway in the task. (2)", "Moderate: Any of the following: a) more than 5 interruptions during the tapping movements or at least one longer arrest (freeze) in ongoing movement; b) moderate slowing; c) amplitude decrements after the first tap. (3)", "Severe: Cannot or can only barely perform the task because of slowing, interruptions or decrements. (4)"
    ], "motorexamtoetapping",
    0,
    4,
    "Top Tapping",
    "Have the patient sit in a straight-backed chair with arms, both feet on the floor. Test each foot separately. Demonstrate the task while the patient is being tested. Instruct the patient to place the heel on the ground in a comfortable position and then tap the toes 10 times as big and as fast as possible. Rate each side separately, evaluating speed, amplitude, hesitations, halts and decrementing amplitude. ",
    ""
  ],
  [
    [
      "Normal: No problems. (0)", "Slight: Any of the following: a) the regular rhythm is broken with one or two interruptions or hesitations of the movement; b) slight slowing; c) amplitude decrements near the end of the task. (1)", "Mild: Any of the following: a) 3 to 5 interruptions during the movements; b) mild slowness; c) amplitude decremtns midway in the task. (2)", "Moderate: Any of the following: a) more than 5 interruptions during the movement or at least one longer arrest (freeze) in ongoing movement; b) moderate slowing in speed; c) amplitude decrements after the first tap. (3)", "Severe: Cannot or can only barely perform the task because of slowing, interruptions or decrements. (4)"
    ], "motorexamlegagility",
    0,
    4,
    "Leg Agility",
    "Have the patient sit in a straight-backed chair with arms. The patient should have both feet comfortably on the floor. Test each leg separately. Demonstrate the task, but do not continue to perform the test while the patient is being tested. Instruct the patient to place the foot on the ground in a comfortable position and then raise the stomp the foot on the ground 10 times as high and as fast possible. Rate each side separately, evaluating speed, amplitude, hesitations, halts and decrementing amplitude. ",
    ""
  ],
  [
    [
      "Normal: No problems. Able to arise quickly without hesitations. (0)", "Slight: Arising is slower than normal; or may need more than one attempt; or may need to move forward in the chair to arise. No need to use the arms of the chair. (1)", "Mild: Pushes self up from arms of chair without difficulty. (2)", "Moderate: Needs to push off, but tends to fall back; or may have to try more than one time using arms of chair, but can get up without help. (3)", "Severe: Unable to arise without help. (4)"
    ], "motorexamarising",
    0,
    4,
    "Arising from chair",
    "Have the patient sit in a straight-backed chair with arms, with both feet on the floor and sitting back in the chair (if the patient is not too short). Ask the patient to cross his/her arms across the chest and then to stand up. If the patient is not successful, repeat this attempt a maximumm up to two more times. If still unsuccessful, allow the patient to move forward in the chair to arise with arms folded across the chest. Allow a maximum of three trials of pushing off. If still not successful, assist the patient to arise. After the patient stands up, observe the posture for item 3.13",
    ""
  ],
  [
    [
      "Normal: No problems. (0)", "Slight: Independent walking with minor gait impairment. (1)", "Mild: Independent walking but with substantial gait impairment (2)", "Moderate: Requires an assistance device for safe walking (walking stick, walker) but not a person. (3)", "Cannot walk at all or only with another person's assistance. (4)"
    ], "motorexamgait",
    0,
    4,
    "Gait",
    "Testing gait is best performed by having the patient walking away from and towards the examiner so that both right and left sides of the body can be easily observed simultaneously. The patient should walk at least 10 meters (30 feet), then turn around and return to the examiner. This item measures multiple behaviors; stride amplitude, stride speed, height of foot lift, heel strike during walking, turning, and arm swing, but not freezing. Assess also for 'freezing of gait' (next item 3.11) while patient is walking. Observe posture for item 3.13",
    ""
  ],
  [
    [
      "Normal: No freezing. (0)", "Slight: Freezes on starting, turning or walking through doorway with a single halt during any of these events, but then continues smoothly without freezing during straight walking. (1)", "Mild: Freezes on starting, turning or walking through doorway with more than one halt during any of these activities, but continues smoothly without freezing during straight walking. (2)", "Freezes once during straight walking. (3)", "Freezes multiple times during straight walking. (4)"
    ], "motorexamfreezinggait",
    0,
    4,
    "Freezing of Gait",
    "While assessing gait, also assess for the presence of any gait freezing episodes. Observe for start hesitation and stuttering movements especially when turning and reaching the end of the task. To the extent that safety permits, patients may NOT use sensory tricks during the assessment. ",
    ""
  ],
  [
    [
      "Normal: No problems. Recovers with one or two steps. (0)", "Slight: 3 to 5 steps, but subject recovers unaided. (1)", "Mild: More than 5 steps, but subject recovers unaided. (2)", "Moderate: Stands safely, but with absence of postural responsem falls if not caught by examiner. (3)", "Very unstable, tends to lose balance spontaneously or with just a gentle pull on the shoulders. (4)"
    ], "motorexamposturalstability",
    0,
    4,
    "Postural stability",
    "The test examines the response to sudden body displacement produced by a 'quick, forceful' pull on the shoulders while the patient is standing erect with eyes open and feet comfortably apart and parallel to each other. Test retropulsion. Stand behind the patient and instruct the patient on what is about to happen. Explain that s/he is allowed to take a step backwards to avoid falling. There should be a solid wall behind the examiner, at least 1-2 meters away to allow  for the observation of the number of retropulsive steps. The first pull is an instructional demonstration and is purposely milder and not rated. The second time the shoulders are pulled briskly and forcefully towards the examiner with enough force to displace the center of gravity so that patient MUST take a step backwards. The examiner needs to be ready to catch the tpatient, but must stand sufficiently back so as to allow enough room for the patient to take several steps to recover independently. do not allow the patient to flex the body abnormally forward in anticipation of the pull. Observe for the number of steps backwards or falling. Up to and including two steps for recovery is considered normal, so abnormal ratings begin with three steps. If the patient fails to understand the test, the examiner can repeat the test so that the rating is based on an assessment that the examiner feels reflects the patient's limitations rather than misunderstanding or lack of preparedness. Observe standing posture for item 3.13",
    ""
  ],
  [
    [
      "Normal: NO problems. (0)", "Slight: Not quite erect, but posture could be normal for older person. (1)", "Mild: Definite flexion, scoliosis or leaning to one side, but patient can correct posture to normal posture when asked to do so. (2)", "Moderate: Stooped posture, scoliosis or leaning to one side that cannot be corrected volitionally to a normal posture by the patient. (3)", "Flexion, scoliosis or leaning with extreme abnormality of posture. (4)"
    ], "motorexamposture",
    0,
    4,
    "Posture",
    "Posture is assessed with the patient standing erect after arising from a chir, enduring walking, and while being tested for postural reflexes. If you notice poor posture, tell the patient to stand up straight and see if the posture improves (see option 2 below). Rate the worst posture seen in these three observation points. Observe for flexion and side-to-side leaning. ",
    ""
  ],
  [
    [
      "Normal: No problems. (0)", "Slight: Slight global slowness and poverty of spontaneous movements. (1)", "Mild: Mild global slowness and poverty of spontaneous movements. (2)", "Moderate: Moderate global slowness and poverty of spontaneous movements. (3)", "Severe: Severe global slowness and poverty of spontaneous movements. (4)"
    ], "motorexambodybradykinesia",
    0,
    4,
    "Global Spontaneity of Movement (Body Bradykinesia)",
    "This global rating combines all observations on slowness, hesitancy, and small amplitude and poverty of movement in general, including a reduction of gesturing and of crossing the legs. This assessment is based on the examiner's global impression after observing for spontaneous gestures while sitting, and the nature of arising and walking. ",
    ""
  ],
  [
    [
      "Normal: No tremor. (0)", "Slight: Tremor is present but less than 1cm in amplitude. (1)", "Mild: Tremor is at least 1 but less than 3cm in amplitude. (2)", "Moderate: Tremor is at least 3 but less than 10cm in amplitude. (3)", "Severe: Tremor is at least 10cm in amplitude. (4)"
    ], "motorexamposturaltremorhands",
    0,
    4,
    "Postural tremor of the hands",
    "All tremor, including re-emergent rest tremor, that is present in this posture is to be included in this rating. Rate each hand separately. Rate the highest amplitude seen. Instruct the patient to stretch the arms out in front of the body with palms down. The wrist should be straight and the fingers comfortably separated so that they do not touch each other. Observe this posture for 10 seconds. ",
    ""
  ],
  [
    [
      "Normal:  No tremor. (0)", "Slight: Tremor is present but less than 1cm in amplitude. (1)", "Mild: Tremor is at least 1 but 3 cm in amplitude. (2)", "Moderate: Tremor is at least 3 but less than 10 cm in amplitude. (3)", "Severe: Tremor is at least 10cm in amplitude. (4)"
    ], "motorexamkinetictremor",
    0,
    4,
    "Kinetic tremor of the Hands",
    "This is tested by the finger-to-nose maneuver. With the arm starting from the outstretched position, have the patient perform at least three finger-to-nose maneuvers with each hand reaching as far as possible to touch the examiner's finger. The finger-to-nose maneuver should be performed slowly enough not to hide any tremor that could occur with very fast arm movements. Repeat with the other hand, rating each hand separately. The tremor can be present throughout the movement or as the tremor reaches either target (nose or finger). Rate the highest amplitude seen. ",
    ""
  ],
  [
    [
      "Normal: No tremor. (0)", "Slight: Less than 1cm in maximal amplitude. (1)", "Mild: Greater than 1cm but less than 3cm in maximal amplitude. (2)", "Moderate: 3-10cm in maximal amplitude. (3)", "Severe: Greater than 10cm in maximal amplitude. (4)"
    ], "motorexamextremityratingsresttremoramplitude",
    0,
    4,
    "Extremity ratings of the rest tremor amplitude ",
    "This and the next item have been placed purposefully at the end of the examination to allow the rater to gather observations on rest tremor that may appear at any time during the exam, including when quietly sitting, during walking and during activities when some body parts are moving but others are at rest. Score the maximum amplitude that is seen at any time as the final score. Rate only tha amplitude and not the persistence or the intermittency of the tremor. As part of this rating, the patient should sit quietly in a chair with the hands placed on the arms of the chair (not in the lap) and the feet comfortably supported on the floor for 10 seconds with no other directives. Rest tremor is assessed separately for all four limbs and also for the lip/jaw. Rate only the maximum amplitude that is seen at any time as the final rating. ",
    ""
  ],
  [
    [
      "Normal: No tremor. (0)", "Slight: Less than 1cm in maximal amplitude. (1)", "Mild: Greater than 1cm but less than 2cm in maximal amplitude. (2)", "Moderate: Greater than 2cm but less than 3cm in maximal amplitude. (3)", "Severe: Greater than 3cm in maximal amplitude. (4)"
    ], "motorexamjawratingsresttremoramplitude",
    0,
    4,
    "Lip/Jaw ratings of the rest tremor amplitude",
    "This and the next item have been placed purposefully at the end of the examination to allow the rater to gather observations on rest tremor that may appear at any time during the exam, including when quietly sitting, during walking and during activities when some body parts are moving but others are at rest. Score the maximum amplitude that is seen at any time as the final score. Rate only tha amplitude and not the persistence or the intermittency of the tremor. As part of this rating, the patient should sit quietly in a chair with the hands placed on the arms of the chair (not in the lap) and the feet comfortably supported on the floor for 10 seconds with no other directives. Rest tremor is assessed separately for all four limbs and also for the lip/jaw. Rate only the maximum amplitude that is seen at any time as the final rating. ",
    ""
  ],
  [
    [
      "Normal: No tremor. (0)", "Slight: Tremor at rest is present <25% of the entire examination period. (1)", "Mild: Tremor at rest is present 26-50% of the examination period. (2)", "Moderate: Tremor at rest is present 51-75% of the entire examination period. (3)", "Severe: Tremor at rest is present >75% of the entire examination period. (4)"
    ], "motorexamconstancytremor",
    0,
    4,
    "Constancy of rest tremor",
    "This item receives one rating for all rest tremor and focuses on the constancy of rest tremor during the examination period when different body parts are variously at rest. It is rated purposefully at the end of the examination so that several minutes of information can be coalesced into the rating. ",
    ""
  ],
  [
    [
      "No (0)", "Yes (1)"
    ], "motorexamdyskinesias1",
    0,
    1,
    "Dyskinesia Impact on part III ratings",
    "Were dyskinesias (chorea or dystonia) present during examination? ",
    ""
  ],
  [
    [
      "No (0)", "Yes (1)"
    ], "motorexamdyskinesias2",
    0,
    1,
    "Dyskinesia Impact on part III ratings",
    "If yes, did these movements interfere with your ratings? ",
    ""
  ],
  [
    [
      "Asymptomatic (0)", "Unilateral involvement (1)", "Bilateral involvement without impairment of balance (2)", "Mile to moderate involvement; some postural instability but physically independent; needs assistance to recover from pull test. (3)", "Severe disability; still able to walk or stand unassisted. (4)", "Wheelchair bound or bedridden unless aided (5)"
    ], "motorexamhoehnyahr",
    0,
    5,
    "Hoehn and Yahr Stage",
    "",
    ""
  ]
]

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
    ["Other or unspecified", "Pure (uncomplicated)", "Complicated", "Unknown"],
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
  [pthOptions, "dopaminereceptoragonist", 0, 4, "Dopamine receptor agonist", "", ""],
  [pthOptions, "anticholinergic", 0, 4, "Anticholinergic", "", ""],
  [pthOptions, "amantadine", 0, 4, "Amantadine", "", ""],
  [pthOptions, "other", 0, 4, "Other", "", ""],
  [[], "agestartedlevodopa", 0, 200, "Age started levodopa (if relevant) (years)", "", ""]
];

const antiparkinsonianMeds = [
  [
    [], "antipdlevodopacarbidopa", 0, 5000, "Levodopa/Carbidopa: Total active drug dose/24 hours", "", ""
  ],
  [
    [], "antipdlevodopabenserazide", 0, 5000, "Levodopa/benserazide: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "antipdnonergotdra", 0, 5000, "Non-ergot DRA: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "antipdbromocriptine", 0, 5000, "Bromocriptine: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "antipdartanetrihexyphenidyl", 0, 5000, "Artane/Trihexyphenidyl: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "antipdamantadinetotalactivedrug", 0, 5000, "Amantadine: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "antipdentacapone", 0, 5000, "Entacapone: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "antipdpramipaxole", 0, 5000, "Pramipaxole: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "antipdselegeline", 0, 5000, "Selegeline: Total active drug dose/24 hours",
    "", ""
  ],
  [
    [], "antipdropinirole", 0, 5000, "Ropinirole: Total active drug dose/24 hours",
    "", ""
  ]
];

const vitalSigns = [
  [
    [], "vitalssbpsitting", 0, 400, "SBP (sitting):", "", ""
  ],
  [
    [], "vitalsdbpsitting", 0, 400, "DBP (sitting):", "", ""
  ],
  [
    [], "vitalshrsitting", 0, 400, "HR (sitting):", "", ""
  ],
  [
    [], "vitalssbpstanding", 0, 400, "SBP (standing):", "", ""
  ],
  [
    [], "vitalsdbpstanding", 0, 400, "DBP (standing):", "", ""
  ],
  [
    [], "vitalshrstanding", 0, 400, "HR (standing):", "", ""
  ]
]

const osAbnormalitiesOptions = ["(0) Normal", "(1) Abnormal", "(2) Cannot Assess"];
const osAbnormalitiesItems = [
  [
    osAbnormalitiesOptions, "skinabnormalities", 0, 2, "Skin:", "", ""
  ],
  [
    osAbnormalitiesOptions, "headnecklymphaticabnormalities", 0, 2, "Head/Neck/Lymphatic:", "", ""
  ],
  [
    osAbnormalitiesOptions, "eyesabnormalities", 0, 2, "Eyes:", "", ""
  ],
  [
    osAbnormalitiesOptions, "earsnosethroatabnormalities", 0, 2, "Ears/Nose/Throat", "", ""
  ],
  [
    osAbnormalitiesOptions, "lungsabnormalities", 0, 2, "Lungs:", "", ""
  ],
  [
    osAbnormalitiesOptions, "cardiovascularabnormalities", 0, 2, `Cardiovascular (including peripheral 
      vascular)`, "", ""
  ],
  [
    osAbnormalitiesOptions, "abdomenabnormailities", 0, 2, "Abdomen:", "", ""
  ],
  [
    osAbnormalitiesOptions, "musculoskeletalabnormalities", 0, 2, "Musculoskeletal:", "", ""
  ],
  [
    osAbnormalitiesOptions, "neurologicalabnormalities", 0, 2, "Neurological (not including PD, if applicable)",
    "", ""
  ]
];

const neurologicalExamOptions = ["(0) Normal", "(1) Abnormal", "(2) Not tested",
  "(3) Plantar response"];

const neurologicalExamItem = [
  [
    neurologicalExamOptions, "neurologicalmentalstatus", 0, 3, "Mental status", "", ""
  ],
  [
    neurologicalExamOptions, "neurologicalcniitoxii", 0, 3, "CN (II - XII)", "", ""
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
    ["(0) No", "(1) Yes"], "actoutyourdreamswhileasleep", 0, 1, `Have you ever been told, or 
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

const merqOptions = ["(0) No", "(1) Yes", "(9) Uncertain"];

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

// Parkinson's Diseases Quality of Life Questionnaire (PDQ 8)
const pdQOLOptions = ["Never (0)", "Occassionally (1)", "Sometimes (2)", "Often (3)", "Always or cannot do at all (4)"];

const parkinsondiseaseItems = [
  [
    pdQOLOptions, "pddifficultygettingaround", 0, 4, "Had difficulty getting around in public?",
    "", ""
  ],
  [
    pdQOLOptions, "pddifficultydressing", 0, 4, "Had difficulty dressing yourself", "", ""
  ],
  [
    pdQOLOptions, "pdfeltdepressed", 0, 4, "Felt depressed?", "", ""
  ],
  [
    pdQOLOptions, "pdproblemswithyourclosepersonalrelationships", 0, 4,
    "Had probelms with your close personal relationships?", "", ""
  ],
  [
    pdQOLOptions, "pdproblemswithyourconcentration", 0, 4,
    "Had problems with your concentration, e.g. when reading or watching TV?", "", ""
  ],
  [
    pdQOLOptions, "pdunabletocommunicate", 0, 4, "Felt unable to communicate with people properly?",
    "", ""
  ],
  [
    pdQOLOptions, "pdpainfulmusclecramps", 0, 4, "Had painful muscle cramps or spasms?", "", ""
  ],
  [
    pdQOLOptions, "pdembarrassedinpublic", 0, 4, "Felt embarrassed in public due to having Parkinson's disease?",
    "",
    ""
  ],
];

// Assessment for Constipation (ROME III DIAGNOSTIC CRITERIA)
const constipationOptions = ["Yes (0)", "No (1)"]

const constipationItems = [
  [
    constipationOptions, "constipationthreedefecationsperweek", 0, 1,
    "Fewer than 3 defecations per week", "", ""
  ],
  [
    constipationOptions, "constipationinordertotomovebowel", 0, 1,
    "Straining in order to move bowel (in at least 25% or 1 in 4 defecations)", "", ""
  ],
  [
    constipationOptions, "constipationhardstools", 0, 1,
    "Lumpy or hard stools (in at least 25% or 1 in 4 defecations)", "", ""
  ],
  [
    constipationOptions, "constipationanorectalobstruction", 0, 1,
    "Sensation of anorectal obstruction for at least 25% or 1 in 4 defecations", "", ""
  ],
  [
    constipationOptions, "constipationincompletedefecation", 0, 1,
    "Sensation of incomplete defecation for at least 25% or 1 in 4 defecation", "", ""
  ],
  [
    constipationOptions, "constipationmaneuversrequiredtodefecate", 0, 1,
    "Manual maneuvers required to defecate (in at least 25% or 1 in 4 defecations)", "", ""
  ],
  [
    constipationOptions, "constipationaboveforatleast3months", 0, 1,
    ">=2 of the above for at least 3 months", "", ""
  ],
  [
    constipationOptions, "constipationstoolsarerarelypresent", 0, 1,
    "Loose stools are rarely present without use of laxatives", "", ""
  ],
  [
    constipationOptions, "insufficientcriteriaforirritablebowelsyndrome", 0, 1,
    `There are insufficient criteria for irritable bowel syndrome (IBS criteria: recurrent 
    abdominal discomfort >=3 days per month for >=3 months associated with at least 2 of: 
    improvement with defecation; onset associated with change in frequency in stool; onset 
    associated with change in form of stool; <25% of bowel movements are loose stools.)`,
    "", ""
  ],
  [
    ["Present (0)", "Absent (1)"], "conclusionconstipationromecriteria", 0, 1,
    `Conclusion: Constipation by Rome III criteria:`, "", ""
  ]
];

const gdsOptions = ["No (0)", "Yes (1)", "N/A (2)"];

const gdsItems = [
  [
    gdsOptions, "gdsbasicallysatisfied", 0, 2, "Are you basically satisfied with your life?", "", ""
  ],
  [
    gdsOptions, "gdsdroppedactivitiesandinterests", 0, 2,
    "Have you dropped many of your activities and interests?", "", ""
  ],
  [
    gdsOptions, "gdsfeellifeempty", 0, 2, "Do you feel that your life is empty?", "", ""
  ],
  [
    gdsOptions, "gdsoftengetbored", 0, 2, "Do you often get bored?", "", ""
  ],
  [
    gdsOptions, "gdsgoodspirits", 0, 2, "Are you in good spirits most of the time?", "", ""
  ],
  [
    gdsOptions, "gdsafraidsomethingbad", 0, 2,
    "Are you afraid that something bad is going to happen to you?", "", ""
  ],
  [
    gdsOptions, "gdsfeelhappymosttime", 0, 2, "Do you feel happy most of the time?", "", ""
  ],
  [
    gdsOptions, "gdsoftenfeelhelpless", 0, 2, "Do you often feel helpless?", "", ""
  ],
  [
    gdsOptions, "gdsprefertostayathome", 0, 2,
    "Do you prefer to stay at home, rather than going out and doing new things?", "", ""
  ],
  [
    gdsOptions, "gdsmoreprobelmswithmemories", 0, 2,
    "Do you feel you have more problems with memories than most?", "", ""
  ],
  [
    gdsOptions, "gdsthinkitiswonderfultobealive", 0, 2, "Do you think it is wonderful to be alive?",
    "", ""
  ],
  [
    gdsOptions, "gdsfeelprettyworthless", 0, 2, "Do you feel pretty worthless the way you are now?",
    "", ""
  ],
  [
    gdsOptions, "gdsfeelfullofenergy", 0, 2, "Do you feel full of energy?", "", "",
  ],
  [
    gdsOptions, "gdsfeelsituationishopeless", 0, 2, "Do you feel that you situation is hopeless?",
    "", ""
  ],
  [
    gdsOptions, "gdsmostpeoplearebetteroff", 0, 2,
    "Do you think that most people are better off than you are?", "", "",
  ]
];

const hadsItems = [
  [
    ["Most of the time (0)", "A lot of the time (1)", "From time to time (2)",
      "Not at all (3)"], "hadstenseorwoundup", 0, 3, "I feel tense or 'wound up'", "", ""
  ],
  [
    ["Definitely as much (0)", "Not quite so much (1)", "Only a little (2)", "Hardly at all (3)"],
    "hadsthingsiusedtoenjoy", 0, 3, "I still enjoy the things I used to enjoy", "", ""
  ],
  [
    ["Very definitely and quite badly (0)", "Yes, but not too badly (1)",
      "A little but it doesn't worry me (2)", "Not at all (3)"], "hadsfrightenedfeeling", 0, 3,
    "I get a sort of frightened feeling as if something awful is about to happen", "", ""
  ],
  [
    ["As much as I always could (0)", "Not quite so much now (1)",
      "Definitely not so much (2)", "Not at all (3)"], "hadsseethefunnysideofthings", 0, 3,
    "I can laugh and see the funny side of things", "", ""
  ],
  [
    ["A great deal of the time (0)", "A lot of time (1)",
      "From time to time, but not too often (2)", "Only occasionally (3)"],
    "hadsworryingthoughts", 0, 3, "Worrying thoughts go through my mind", "", ""
  ],
  [
    ["Not at all (0)", "Not often (1)", "Sometimes (2)", "Most of the time (3)"],
    "hadsfeelcheerful", 0, 3, "I feel cheerful", "", ""
  ],
  [
    ["Definitely (0)", "Usually (1)", "Not often (2)", "Not at all (3)"],
    "hadssitatease", 0, 3, "I can sit at ease and feel relaxed", "", ""
  ],
  [
    ["Nearly all the time (0)", "Very often (1)", "Sometimes (2)", "Not at all (3)"],
    "hadssloweddown", 0, 3, "I feel as if I am slowed down", "", ""
  ],
  [
    ["Not at all (0)", "Occasionally (1)", "Quite often (2)", "Very often (3)"],
    "hadsfrightenedfeelinglikebutterfliesinthestomach", 0, 3,
    "I get sort of a frightened feeling like 'butterflies' in the stomach", "", ""
  ],
  [
    ["Definitely (0)", "I don't take as much care as I should (1)",
      "I may not take quite as much care (2)", "I take just as much care as ever(3)"],
    "hadslostinterestinmyappearance", 0, 3, "I have lost interest in my appearance", "", ""
  ],
  [
    ["Very much indeed(0)", "Quite a lot(1)", "Not very much(2)", "Not at all(3)"],
    "hadsfeelrestlessasihavetobeonthemove", 0, 3, "I feel restless as I have to be on the move",
    "", ""
  ],
  [
    ["As much as I ever did(0)", "Rather less than I used to(1)", "Definitely less than I used to(2)",
      "Hardly at all(3)"], "hadslookforwardwithenjoymenttothings", 0, 3,
    "I look forward with enjoyment to things", "", ""
  ],
  [
    ["Very often indeed(0)", "Quite often(1)", "Not very often(2)", "Not at all(3)"],
    "hadssuddenfeelingsofpanic", 0, 3, "I get sudden feeling of panic", "", ""
  ],
  [
    ["Often(0)", "Sometimes(1)", "Not often(2)", "Very seldom(3)"],
    "hadsenjoyagoodbook", 0, 3, "I can enjoy a good book or radio or TV program", "", ""
  ],
];

const essOptions = ["Would never dose(0)", "Slight chance of dosing(1)", "Moderate chance of dosing(2)",
  "High chance of dosing(3)"]

const essItems = [
  [
    essOptions, "esssittingandreading", 0, 3, "Sitting and reading", "", ""
  ],
  [
    essOptions, "esswatchingtv", 0, 3, "Watching TV", "", ""
  ],
  [
    essOptions, "essinactiveinapublicplace", 0, 3,
    "Sitting, inactive in a public place (e.g. a theatre or a meeting)", "", ""
  ],
  [
    essOptions, "esspassengerinacar", 0, 3, "As a passenger in a car for an hour without a break",
    "", ""
  ],
  [
    essOptions, "esslyingdowntorest", 0, 3,
    "Lying down to rest in the afternoon when circumstances permit", "", ""
  ],
  [
    essOptions, "esstalkingtosomeone", 0, 3, "Sitting and talking to someone", "", ""
  ],
  [
    essOptions, "esssittingquietlyafterlunch", 0, 3, "Sitting quietly after lunch without alcohol",
    "", ""
  ]
];

const quipRSOptions = ["Never(0)", "Rarely(1)", "Sometimes(2)", "Often(3)", "Very often(4)"]

const quiprsItems1 = [
  [
    quipRSOptions, "quiprs1gambling", 0, 4, "How much do you think about gambling?", "", ""
  ],
  [
    quipRSOptions, "quiprs1sexualbehavior", 0, 4, "How much do you think about sexual behavior?", "", ""
  ],
  [
    quipRSOptions, "quiprs1buying", 0, 4, "How much do you think about buying?", "", ""
  ],
  [
    quipRSOptions, "quiprs1eating", 0, 4, "How much do you think about eating?", "", ""
  ],
  [
    quipRSOptions, "quiprs1performingtasksorhobbies", 0, 4,
    "How much do you think about performing tasks or hobbies?", "", ""
  ],
  [
    quipRSOptions, "quiprs1repeatingsimpleactivities", 0, 4,
    "How much do you think about repeating simple activities?", "", ""
  ],
  [
    quipRSOptions, "quiprs1takingyourPDmedications", 0, 4,
    "How much do you think about taking your PD medications?", "", ""
  ]
];

const quiprsItems2 = [
  [
    quipRSOptions, "quiprs2gambling", 0, 4,
    "Do you have urges or desires for gambling that you feel are excessive or cause you distress?",
    "", ""
  ],
  [
    quipRSOptions, "quiprs2sexualbehaviour", 0, 4,
    "Do you have urges or desires for sexual behaviour that you feel are excessive or cause you distress?",
    "", ""
  ],
  [
    quipRSOptions, "quiprs2buying", 0, 4,
    "Do you have urges or desires for buying that you feel are excessive or cause you distress?",
    "", ""
  ],
  [
    quipRSOptions, "quiprs2eating", 0, 4,
    "Do you have urges or desires for eating that you feel are excessive or cause you distress?",
    "", ""
  ],
  [
    quipRSOptions, "quiprs2performingtasksorhobbies", 0, 4,
    `Do you have urges or desires for performing tasks or hobbies that you feel are excessive 
    or cause you distress?`, "", ""
  ],
  [
    quipRSOptions, "quiprs2repeatingsimpleactivities", 0, 4,
    `Do you have urges or desires for repeating simple activties that you feel are excessive 
    or cause you distress?`, "", ""
  ],
  [
    quipRSOptions, "quiprs2takingyourPDmedications", 0, 4,
    `Do you have urges or desires for taking your PD medications that you feel are excessive 
    or cause you distress?`, "", ""
  ]
];

const quiprsItems3 = [
  [
    quipRSOptions, "quiprs3gambling", 0, 4, "Do you have difficulty controlling gambling?", "", ""
  ],
  [
    quipRSOptions, "quiprs3sexualbehaviour", 0, 4, "Do you have difficulty controlling sexual behaviour?",
    "", ""
  ],
  [
    quipRSOptions, "quiprs3buying", 0, 4, "Do you have difficulty controlling buying?", "", ""
  ],
  [
    quipRSOptions, "quiprs3eating", 0, 4, "Do you have difficulty controlling eating?", "", ""
  ],
  [
    quipRSOptions, "quiprs3performingtasksorhobbies", 0, 4,
    "Do you have difficulty controlling (performing) tasks or hobbies?", "", ""
  ],
  [
    quipRSOptions, "quiprs3repeatingsimpleactivities", 0, 4,
    "Do you have difficulty in (controlling) repeating simple activities", "", ""
  ],
  [
    quipRSOptions, "quiprs3takingyourPDmedications", 0, 4,
    "Do you have difficulty controlling taking your PD medications?", "", ""
  ]
];

const quiprsItems4 = [
  [
    quipRSOptions, "quiprs4gambling", 0, 4,
    "Do you engage in activities (such as lying or illegal acts) to continue gambling?", "", ""
  ],
  [
    quipRSOptions, "quiprs4sexualbehaviour", 0, 4,
    "Do you engage in activities (such as lying or illegal acts) to continue sexual behaviour?",
    "", ""
  ],
  [
    quipRSOptions, "quiprs4buying", 0, 4,
    "Do you engage in activities (such as lying or illegal acts) to continue buying?", "", ""
  ],
  [
    quipRSOptions, "quiprs4eating", 0, 4,
    "Do you engage in activities (such as lying or illegal acts) to continue eating?", "", ""
  ],
  [
    quipRSOptions, "quiprs4performingtasksorhobbies", 0, 4,
    `Do you engage in activities (such as lying or illegal acts) to continue performing 
    tasks or hobbies?`, "", ""
  ],
  [
    quipRSOptions, "quiprs4repeatingsimpleactivities", 0, 4,
    "Do you engage in activities (such as lying or illegal acts) to continue repeating simple actvities?",
    "", ""
  ],
  [
    quipRSOptions, "quiprs4takingyourPDmedications", 0, 4,
    "Do you engage in activities (such as lying or illegal acts) to continue taking your PD medications?",
    "", ""
  ]
];

const scopaautOptions = ["Never (0)", "Sometimes (1)", "Regularly (2)", "Often (3)"]
const scopaautOptions1 = ["Never (0)", "Sometimes (1)", "Regularly (2)", "Often (3)", "Catheter (4) "]
const scopaautOptionsna = [...scopaautOptions, "N/A (4)"];
const scopaautOptionsYesNo = ["Yes (0)", "No (1)"];

const scopaautItems = [
  [
    scopaautOptions,
    "scopaautswallowing",
    0,
    3,
    "1. In the past month, have you had difficulty swallowing or have you choked?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautsalivadribbled",
    0,
    3,
    "2. In the past month, has saliva dribbled out of your mouth?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautfoodeverbecomestuck",
    0,
    3,
    "3. In the past month, has food ever become stuck in your throat?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautfeelingduringamealthatyouwerefull",
    0,
    3,
    "4. In the past month, did you ever have the feeling during a meal that you were full very quickly?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautconstipation",
    0,
    3,
    "5. In the past month, have you had constipation (bowel movement twice a week or less)?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautstrainhardtopassstools?",
    0,
    3,
    "6. In the past month, did you have to strain hard to pass stools?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautinvoluntarylossofstools",
    0,
    3,
    "7. In the past month, have you had involuntary loss of stools?",
    "",
    ""
  ],
  [
    scopaautOptions1,
    "scopaautdifficultyretainingurine",
    0,
    4,
    "8. In the past month, have you had difficulty retaining urine?",
    "",
    ""
  ],
  [
    scopaautOptions1,
    "scopaautinvoluntarylossofurine",
    0,
    4,
    "9. In the past month, have you had involuntary loss of urine?",
    "",
    ""
  ],
  [
    scopaautOptions1,
    "scopaautafterpassingurine",
    0,
    4,
    "10. In the past month, have you had the feeling that after passing urine your bladder was not completely empty?",
    "",
    ""
  ],
  [
    scopaautOptions1,
    "scopaautstreamofurinebeenweak",
    0,
    4,
    "11. In the past month, has the stream of urine been weak?",
    "",
    ""
  ],
  [
    scopaautOptions1,
    "scopaautpassurineagain",
    0,
    4,
    "12. In the past month, have you had to pass urine again within 2 hours of te previous time?",
    "",
    ""
  ],
  [
    scopaautOptions1,
    "scopaautpassurineatnight",
    0,
    4,
    "13. In the past month, have you had to pass urine at night?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautbecominglightheaded",
    0,
    3,
    "14. In the past month, when standing up, have you had the feeling of either becoming lightheaded, or no longer beging able to see properly, or no longer being able to think clearly?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautbecomelightheadedafterstanding",
    0,
    3,
    "15. In the past month, did you become light-headed after standing for some time?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautfainted",
    0,
    3,
    "16. Have you fainted in the past 6 months?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautperspiredexcessivelyduringtheday",
    0,
    3,
    "17. In the past month, have you ever perspired excessively during the day?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaautperspiredexcessivelyduringthenight",
    0,
    3,
    "18. In the past month, have you ever perspired exxcessively during the night?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaauteyeseverbeenoversensitivetolight",
    0,
    3,
    "19. In the past month, have your eyes been over sensitive to light?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaauttroubletoleratingcold",
    0,
    3,
    "20. In the past month, how often have you had trouble tolerating cold?",
    "",
    ""
  ],
  [
    scopaautOptions,
    "scopaauttroubletoleratingheat",
    0,
    3,
    "21. In the past month, how often have you had trouble tolerating heat?",
    "",
    ""
  ],
]

const scopaautItems1 = [
  [
    scopaautOptionsna,
    "scopaautimpotent",
    0,
    4,
    "22. In the past month, have you been impotent(unable to have or maintain an erection)?",
    "This question is intended specifically for men.",
    ""
  ],
  [
    scopaautOptionsna,
    "scopaautejaculate",
    0,
    4,
    "23. In the past month, how often have you been able to ejaculate?",
    "This question is intended specifically for men.",
    ""
  ],
  [
    scopaautOptionsYesNo,
    "scopaauterectiondisorder",
    0,
    1,
    "23a. In the past month, have you taken medication for an erection disorder?",
    "This question is intended specifically for men.",
    ""
  ],
  [
    [],
    "scopaauterectiondisorderifyes",
    0,
    1,
    "If yes, which medication?",
    "",
    ""
  ],
  [
    scopaautOptionsna,
    "scopaautvaginaltoodryduringsexualactivity",
    0,
    4,
    "24. In the past month, was your vagina too dry during sexual activity?",
    "This question is intended specifically for women.",
    ""
  ],
  [
    scopaautOptionsna,
    "scopaautdifficultyreachinganorgasm",
    0,
    4,
    "25. In the past month, have you had difficulty reaching an orgasm?",
    "This question is intended specifically for women.",
    ""
  ],
  [
    scopaautOptionsYesNo,
    "scopaautconstipation",
    0,
    1,
    "26a. In the past month, have you used medication for constipation?",
    "",
    ""
  ],
  [
    [],
    "scopaautconstipationwhichmedication",
    0,
    1,
    "Which medication?",
    "",
    ""
  ],
  [
    scopaautOptionsYesNo,
    "scopaauturinaryproblems",
    0,
    1,
    "26b. In the past month, have you used medication for urinary problems?",
    "",
    ""
  ],
  [
    [],
    "scopaauturinaryproblemsmedication",
    0,
    1,
    "Which medication?",
    "",
    ""
  ],
  [
    scopaautOptionsYesNo,
    "scopaautbloodpressure",
    0,
    1,
    "26c. In the past month, have you used medication for blood pressure?",
    "",
    ""
  ],
  [
    [],
    "scopaautbloodpressuremedication",
    0,
    1,
    "Which medication?",
    "",
    ""
  ],
  [
    scopaautOptionsYesNo,
    "scopaautnotrelatedtoparkingsonsdisease",
    0,
    1,
    "26d. In the past month, have you used medication for other symptoms(not related to Parkinson's disease)?",
    "",
    ""
  ]
];

const pspchecklistOptions = ["Yes (0)", "No (1)"];

const pspchecklistItems = [
  [
    pspchecklistOptions, "pspchecklistverticalsupranucleargazepalsy", 0, 1,
    "1. Vertical supranuclear gaze palsy (O1)", "", ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistverticalsaccades", 0, 1, "2. Slow velocity of vertical saccades (O2)",
    "", ""
  ],
  [
    pspchecklistOptions, "pspchecklistmacrosquarewavejerks", 0, 1,
    "3. Frequent marco square wave jerks or eyelid opening apraxia (O3)", "", ""
  ],
  [
    pspchecklistOptions, "pspchecklistfallonthepulltest", 0, 1,
    "4. Tendency to fall on the pull-test within 3 years (P2)", "", ""
  ],
  [
    pspchecklistOptions, "pspchecklistbackwardonthepulltest", 0, 1,
    "5. More than two steps backward on the pull-test within 3 years (P3)", "", ""
  ],
  [
    pspchecklistOptions, "pspchecklistprogressivegaitfreezing", 0, 1,
    "6. Progressive gait freezing within 3 years (A1)", "", ""
  ],
  [
    pspchecklistOptions, "pspchecklistpredominantlyaxial", 0, 1,
    "7. Parkinsonism, akinetic-rigid, predominantly axial, and levodopa resistant (A2)",
    "", ""
  ],
  [
    pspchecklistOptions, "pspchecklistasymmetric", 0, 1,
    "8. Parkinsonism, with tremor and/or asymmetric and/or levodopa responsive (A3)",
    "", ""
  ],
  [
    pspchecklistOptions, "pspchecklistspeechlanguagedisorder", 0, 1,
    `9. Speech/language disorder, i.e., nonfluent/agrammatic variant of 
        primary progressive aphasia or progressive apraxia of speech (C1)`, "", ""
  ],
  [
    pspchecklistOptions, "pspchecklistcognitivebehaviouralpresentation", 0, 1,
    "10. Frontal cognitive/behavioural presentation (C2)", "", ""
  ],
  [
    pspchecklistOptions, "pspchecklistcorticobasalsyndrome", 0, 1, "11. Corticobasal syndrome (C3)",
    "", ""
  ],
  [
    pspchecklistOptions, "pspchecklistspasticdysarthria", 0, 1,
    "12. Hypokinetic, spastic dysarthria (CC2)", "", ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistdysphagia",
    0,
    1,
    "13. Dysphagia (CC3)",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistphotophobia",
    0,
    1,
    "14. Photophobia (CC4)",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistunexplainedimpairment",
    0,
    1,
    "15. Predominant, otherwise unexplained impairment of episodic memory, suggestive of AD",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistunexplainedautonomicfailure",
    0,
    1,
    "16. Predominant, otherwise unexplained autonomic failure, e.g., orthostatic hypotension (orthostatic reduction in blood pressure after 3 minutes standing >=30 mm Hg systolic or >=15 mm Hg diastolic), suggestive of multiple system atrophy or Lewy body",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistunexplainedvisualhallucinations",
    0,
    1,
    "17. Predominant, otherwise unexplained visual hallucinations or fluctuations in alertness, suggestive of dementia with Lewy bodies",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistrapidprogressionofsymptoms",
    0,
    1,
    "18. Sudden onset or step-wise or rapid progressive or symptoms, in conjunction with corresponding imaging or laboratory findings, suggestive of vascular etiology, autoimmune encephalitis, metabolic encephalopathies, or prion disease",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistencephalitis",
    0,
    1,
    "19. History of encephalitis",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistappendicularataxia",
    0,
    1,
    "20. Prominent appendicular ataxia",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistposturalinstability",
    0,
    1,
    "21. Identifiable cause of postural instability, e.g., primary sensory deficit, vestibular dysfunction, severe spasticity, or lower motor neuron syndome",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistasymmetricalonset",
    0,
    1,
    "22. Asymmetrical onset",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistlimbmyoclonus",
    0,
    1,
    "23. Limb Myoclonus",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistlimbapraxia",
    0,
    1,
    "24. Orobuccal or limb apraxia",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistsensorydeficit",
    0,
    1,
    "25. Cortical sensory deficit",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistalienlimb",
    0,
    1,
    "26. Alien limb more than simple elevation",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistdysfunction",
    0,
    1,
    "27. Executive dysfunction",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistpersonalitychanges",
    0,
    1,
    "28. Behavioural or personality changes",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistvisuospatialdeficits",
    0,
    1,
    "29. Visuospatial deficits",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistagrammaticspeech",
    0,
    1,
    "30. Effortful agrammatic speech",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistsentencecomprehension",
    0,
    1,
    "31. Impaired grammar/sentence comprehension",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistapraxiaofspeech",
    0,
    1,
    "32. Apraxia of speech",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklisturinaryincontinence",
    0,
    1,
    "33. Urinary incontinence",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistsymmetriclimbrigidity",
    0,
    1,
    "34. Axial or symmetric limb rigidity or akinesia",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistposturalinstabilty",
    0,
    1,
    "35. Postural instability or falls",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistverticalgazepalsy",
    0,
    1,
    "36. Supranuclear vertical gaze palsy",
    "",
    ""
  ],
  [
    pspchecklistOptions,
    "pspchecklistverticalsaccades",
    0,
    1,
    "37. Decreased velocity of vertical saccades",
    "",
    ""
  ],
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
  ["Patient Questionnaire: Part I - NonMotor Aspects of Experiences of Daily Living (nM-EDL)",
    nM_EDL],
  ["Patient Questionnaire: Part I - Motor Aspects of Experiences of Daily Living (M-EDL)",
    m_EDL],
  // Insert Part III - motor examination here,
  ["Part III: Motor Examination", m_Exam, `Overview: This portion of the scale assesses the motor
    signs of PD. In administering Part III of the MDS-UPDRS the examiner should comply with the 
    following guidelines:||
    At the top of the form, mark whether the patient is on medication for treating the symptoms of
    Parkinson's disease and, if on levodopa, the time since last dose.`],
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
  ["General Physical Exam: Vital Signs", vitalSigns],
  ["General Physical Exam: Organ System Abnormalities by examination:", osAbnormalitiesItems],
  ["General Physical Exam: Neurological examination (other than PD):", neurologicalExamItem],
  ["Behavioural/Social History (RFQ)", rfqItems],
  ["Hyposmia Assessment: Single Item Hyposmia Assessment", singleItemHyposmia],
  ["Hyposmia Assessment: Hyposmia Rating Scale", hyposmiaRatingScale],
  ["REM SLEEP BEHAVIOURAL DISORDER ASSESSMENT", remSleepAssessment],
  ["MINI ENVIRONMENTAL RISK QUESTIONNAIRE (MERQ)-PD", merqItems],
  // insert IDEA cognitive screen here,
  // insert Modified Schwab and England here
  ["PARKINSON'S DISEASE QUALITY OF LIFE QUESTIONNAIRE (PDQ-8)", parkinsondiseaseItems,
    `Due to having Parkinson's disease, how often during the last month have you...:| 
    (Please select one response for each question).`
  ],
  ["ASSESSMENT FOR CONSTIPATION (ROME III DIAGNOSTIC CRITERIA)", constipationItems,
    `Please indicate Yes or No for each criterion`
  ],
  ["GERIATRIC DEPRESSION SCALE-15", gdsItems, `Choose the best answer for how you have felt 
    over the past week.||
    (0 = No, 1 = Yes, N/A - not answered)`],
  // insert MOCA here,
  // insert NMSS here,
  ["HADS - HOSPITAL ANXIETY AND DEPRESSION SCALE", hadsItems],
  ["EPWORTH SLEEPINESS SCALE (ESS)", essItems, `How likely are you to doze off or fall asleep in the 
    following situations, in contrast to feeling just tired? This refers to your usual way of 
    life in recent times. Even if you have not done some of these things recently try to work 
    out how they would have affected you. Use the following scale to choose the most 
    appropriate statement for each situation:`],
  [`QUIP-RS (Questionnaire for Impulsive-Compulsive Disorders in Parkinson's Disease - 
    Rating Scale`, quiprsItems1, `1. How much do you think about the following behaviours 
    (such as having trouble keeping thoughts out of your mind or feeling guilty)?`],
  [`QUIP-RS (Questionnaire for Impulsive-Compulsive Disorders in Parkinson's Disease - 
    Rating Scale`, quiprsItems2, `2. Do you have urges or desires for the following behaviours 
    that you feel are excessive or cause you distress (including becoming restless or irritable 
    when unable to participate in them)?`],
  [`QUIP-RS (Questionnaire for Impulsive-Compulsive Disorders in Parkinson's Disease - 
    Rating Scale`, quiprsItems3, `3. Do you have difficulty controlling the following 
    behaviours (such as increasing them over time, or having trouble cutting down or 
    stopping them)?`],
  [`QUIP-RS (Questionnaire for Impulsive-Compulsive Disorders in Parkinson's Disease - 
    Rating Scale`, quiprsItems4, `4. Do you engage in activities specially to continue the 
    following behaviours (such as hiding what you are doing, lying hoarding things, borrowing 
    from others, accumulating debt, stealing, or being involved in illegal acts)?`],
  [`SCOPA-AUT: SCALES FOR OUTCOMES IN PARKINSON'S DISEASE - AUTONOMIC`, scopaautItems],
  [`SCOPA-AUT`, scopaautItems1, `The following questions are about sexuality. Although it 
    is a highly intimate subject, we would still like you to answer these questions. 
    For the questions on sexual activity, consider every form of sexual contact with a partner 
    or masturbation (self-gratification). Questions 22 and 23 are intended specifically for 
    men, 24 and 25 for women.`],
  // insert PSP here,
  [`PSP CHECKLIST`, pspchecklistItems, `(To be completed by study neurologist. Items 1 - 37)`]
];