const orientationItems = [
  [["Year (1), Month (1), Day (1), Date (1), Season (1)"], "orientationtime", 0, 5],
  [["Country (1), State (1), Town (1), Hospital (1), Ward/Clinic (1)"], "orientationplace", 0, 5]
];

const registrationInstructions = [
  "Examiner names three objects (e.g. apple, pen, and table",
  "Patient asked to repeat objects, one point for each."
];

const registrationItems = [
  [registrationInstructions, "registration", 0, 3]
];

const attentionInstructions = [
  "Subtract 7 from 100 then repeat from result, stop after five subtractions",
  "(Answers: 93, 86, 79, 72, 65)",
  "Alternatively if patients errs on subtraction, get them to spell backwards: D L R O W",
  "Score best performance on either task"
]

const attentionItems = [
  [attentionInstructions, "attention", 0, 5]
];

const recallItems = [
  [["Ask for the names of the obects learned earlier."], "recall", 0, 3]
];

const languageItems = [
  [["Name two objects (e.g. pencil, watch)."], "languagename", 0, 2],
  [["Repeat 'No ifs, ands, or buts'."], "languagerepeat", 0, 1],
  [["Give a three-stage command. Score 1 for each stage. (e.g. Place index finger of right hand on your nose and then on your left ear)."], "languagegive", 0, 3],
  [["Ask the patient to read and obey a written command on a piece of paper. The written instruction is: 'Close your eyes'."], "languageread", 0, 1],
  [["Ask the patient to write a sentence. Score 1 if it is sensible and has a subject and a verb."], "languagewrite", 0, 1]
];

const copyingItems = [
  [["Ask patient to copy intersecting pentagons. \nScore as correct if they overlap and each has five sides."], "copying", 0, 1]
];

export const mmseItems = [
  ["Orientation", orientationItems],
  ["Registration", registrationItems],
  ["Attention", attentionItems],
  ["Recall", recallItems],
  ["Language", languageItems],
  ["Copying", copyingItems]
];