const preparationItems = [
  [
    [
      "I am going to read out a list of words. Please listen carefully and I will ask you to repeat them back to me once I have finished (read out the words slowly)", 
      "First attempt: tick on the grid the words remembered", 
      "Second attempt: tick on the grid the words remembered"
    ], "", 0, 0
  ]
];

const describeItems = [
  [
    [
      "I will tell you the name of something and I want you to describe what it is. What is a bridge?",
      "(correct answer: something that goes across a river, canyon or road)"
    ], "describe", 0, 2
  ]
];

const animalsItems = [
  [
    [
      "I want you to name as many different animals as you can in one minute."
    ], "animals", 0, 2
  ]
];

const leaderItems = [
  [
    [
      "Who is the chief/head/leader of this village?"
    ], "leader", 0, 1
  ]
];

const dayOfWeekItems = [
  [
    [
      "What day of week is it?"
    ], "dayofweek", 0, 2
  ]
];

const recallItems = [
  [
    [
      "Can you tell me the ten words we learned earlier?",
      "Try to remember as many as you can."
    ], "recall", 0, 5
  ]
];

const matchstickItems = [
  [
    [
      "Can you make the design shown below using these four matchsticks? -<",
      "I will show you once and then you have to copy exactly.",
      "The examiner should make the design first using the matchsticks and specifically point out to the person that the head of the matchsticks all need to point the same way.",
      "Once the examiner has made the shape, collect up the matchsticks in a bunch and place them in front of the person being interviewed.",
      "Repeat matchstick task allowing the patient to see the design above as they make the shape.",
      "Only enter best score on matchstick test here",
      "Middle two matchstick heads pointing same way. (1)",
      "Outside two matchsticks pointing at an angle. (1)",
      "Matchstick heads are orientated correctly. (1)"
    ], "matchstick", 0, 3
  ]
];

export const ideaItems = [
  ["Preparation", preparationItems],
  ["Describe named thing", describeItems],
  ["Name different animals", animalsItems],
  ["Name leader", leaderItems],
  ["Day of week", dayOfWeekItems],
  ["Delayed Recall", recallItems],
  ["Matchsticks test", matchstickItems]
];