const eyeOpening = ["Eyes opening spontaneously (4)",
  "Eyes open to verbal command, speech, or shout (3)",
  "Eyes open to pain (2)", "No eye opening (1)"];

const verbalResponse = ["Oriented (5)", "Confused conversation (4)",
  "Inappropriate responses (3)", "Incomprehensible sounds (2)", "No verbal response (1)"];

const motorResponse = ["Obeys commands (6)", "Purposeful movement to painful stimulus (5)",
  "Withdraws from pain (4)", "Abnormal flexion, decorticate posture (3)",
  "Abnormal Extension, decerebrate posture (2)", "No motor response (1)"];

const eyeOpeningItems = [
  [eyeOpening, "eyeopening", 1, 4]
];

const verbalItems = [
  [verbalResponse, "verbalresponse", 1, 5]
];

const motorItems = [
  [motorResponse, "motorresponse", 1, 6]
];

export const gcsItems = [
  ["Eye Opening Response", eyeOpeningItems],
  ["Verbal Response", verbalItems],
  ["Motor Response", motorItems]
];