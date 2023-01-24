const visuospatialItems = [
  [
    [
      "Trace a set of circled letters and numbers (+1)", 
      "Copy cube", 
      "Draw CLOCK (Ten past eleven)"
    ], "visuospatial", 0, 5
  ]
];

const namingItems = [
  [
    [
      "Name some drawings or items"
    ], "naming", 0, 3
  ]
];

const memoryItems = [
  [
    [
      "Read list of words, subject must repeat them.",
      "Do 2 trials.", "Do a recall after 5 minutes."
    ], "", 0, 3
  ]
];

const attentionItems = [
  [
    [
      "Read list of digits (1 digit/sec).",
      "Subject has to repeat them in the forward order.", 
      "Subject has to repeat them in the backward order."
    ], "attentiondigits", 0, 2
  ],
  [
    [
      "Read list of letters.",
      "The subject must tap with his hand at each letter A.", 
      "No point if greater than or equal to 2 errors", 
      "F B A C M N A A J K L B A F A K D E A A A J A M O F A A B"
    ], "attentionletters", 0, 1
  ],
  [
    [
      "Serial 7 subtraction starting at 100.",
      "93 86 79 72 65", 
      "4 or 5 correct subtractions: 3 pts",
      "2 or 3 correct: 2 pts",
      "1 correct: 1 pt", "0 correct: 0 pt"
    ], "attentionsubtraction", 0, 3
  ],
];

const languageItems = [
  [
    [
      "Repeat: I only know that John is the one to help today.",
      "Repeat: The cat always hid under the couch when dogs were in the room.",
      "1 point for each correct repetition."
    ], "languagerepeat", 0, 2
  ],
  [
    [
      "Fluency / Name maximum number of words in one minute that begin with the letter F",
      "Number of words must be greater than or equal to 11 words"
    ], "languagefluency", 0, 1
  ]
];

const abstractionItems = [
  [
    [
      "Similarity between e.g. banana - orange = fruit",
      "Train - bicycle",
      "Watch - ruler"
    ], "abstraction", 0, 2
  ]
];

const delayedRecallItems = [
  [
    [
      "Has to recall words WITH NO CUE",
      "Points for uncued recall only"
    ], "delayedrecall", 0, 5
  ]
];

const orientationItems = [
  [
    [
      "Date (1), Month (1), Year (1), Day (1), Place (1), City (1)"
    ], "orientation", 0, 6
  ]
];

export const mocaItems = [
  ["Visuospatial/Executive", visuospatialItems],
  ["Naming", namingItems],
  ["Memory", memoryItems],
  ["Attention", attentionItems],
  ["Language", languageItems],
  ["Abstraction", abstractionItems],
  ["Delayed Recall", delayedRecallItems],
  ["Orientation", orientationItems]
];