export const symptomsBySystem = {
  git: ['Dysphagia', 'Odynophagia', 'Feeling of lump in the throat', 'Regurgitation', 
    'Swallowed any substance', 'diarrhoea', 'Constipation', 'Vomiting', 'Jaundice', 
    'Haematemesis', 'Haematochezia', 'Meleana', 'Anorexia', 'Early Satiety',
    'Alternating Bowel Habit', 'Weight Loss', 'Abdominal Pain', 'Abdominal Swelling', 
    'Dizziness', 'Change in Sleep Pattern', 'Loss of Consciousness', 'Water Brash',
    'Heartburn']
}

export const gitSymptoms = {
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
    bloody: false,
    mucoid: false,
    greenish: false
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
    related_to_meals: false,
    timing: "",
    radiates_to_back: false,
    better_lying: false,
    bend_forward: false,
    colicky: false,
    peppery: false,
    waxes_and_wanes: false,
    relieved_by_medications: ['Antacids', 'PPIs', 'Analgesics', 'None']
  },
  abdominal_swelling: {
    feeling_of_a_mass: false,
    insidious: false
  },
  dizziness: {},
  change_in_sleep_pattern: {},
  loss_of_consciousness: {},
  water_brash: {}
}