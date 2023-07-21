export const symptomsBySystem = {
  git: ['Dysphagia', 'Odynophagia', 'Feeling of lump in the throat', 'Regurgitation', 
    'Swallowed any substance', 'diarrhoea', 'Constipation', 'Vomiting', 'Jaundice', 
    'Haematemesis', 'Haematochezia', 'Meleana', 'Anorexia', 'Early Satiety',
    'Alternating Bowel Habit', 'Weight Loss', 'Abdominal Pain', 'Abdominal Swelling', 
    'Dizziness', 'Change in Sleep Pattern', 'Loss of Consciousness', 'Water Brash',
    'Heartburn']
}

export const symptoms = {
  dysphagia: {
    consistency: ['Solid', 'Liquid', 'Both']
  },
  odynophagia: {},
  feeling_of_lump_in_the_throat: {},
  regurgiation: {},
  swallowed_any_substance: {},
  diarrhoea: {
    how_long: "",
    how_many_times: "",
    bloody: ["Yes", "No"],
    mucoid: ["Yes", "No"],
    greenish: ["Yes", "No"]
  },
  constipation: {},
  vomiting: {},
  jaundice: {},
  haematemesis: {},
  haematochezia: {},
  melaena: {},
  anorexia: {},
  early_satiety: {},
  alternating_bowel_habit: {},
  weight_loss: {},
  abdominal_pain: {
    location: ['Epigastrum', 'RUQ', 'LUQ', 'Suprapubic'],
    related_to_meals: ["Yes", "No"],
    timing: "",
    radiates_to_back: ["Yes", "No"],
    better_lying: ["Yes", "No"],
    bend_forward: ["Yes", "No"],
    colicky: ["Yes", "No"],
    peppery: ["Yes", "No"],
    waxes_and_wanes: ["Yes", "No"],
    relieved_by_medications: ['Antacids', 'PPIs', 'Analgesics', 'None']
  },
  abdominal_swelling: {
    feeling_of_a_mass: ["Yes", "No"],
    insidious: ["Yes", "No"]
  },
  dizziness: {},
  change_in_sleep_pattern: {},
  loss_of_consciousness: {},
  water_brash: {}
}

export function getForStorage(dictionary, symptomKey, section) {
  symptomKey = symptomKey.toLowerCase();
  const item = dictionary[symptomKey.replace(/ /g, "_")];
  for (const key in item) {
    if(Object.hasOwn(item, key)) {
      this[key] = typeof item[key] === 'boolean' ? false : "";
    }
  }
  
  this[section] = symptomKey.replace(symptomKey[0], symptomKey[0].toUpperCase());
  return this;
}