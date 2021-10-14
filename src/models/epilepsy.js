const axisI = {
  aura_side: "",
  visual_hallucination: "",
  dysaesthesia: "",
  abdominal: "",
  psychic: "",
  auditory: "",
  autonomic: "",
  consciousness_alteration_duration: "",
  consciousness_alteration_description: "",
  blank_spell_duration: "",
  blank_spell_description: "",
  amnesia_duration: "",
  amnesia_description: "",
  motor_side: "",
  clonus_description: "",
  tonic_description: "",
  motor_version: "",
  myoclonus_description: "",
  myoclonus_description: "",
  version_description: "",
  atonic_description: "",
  hypermotor_description: "",
  akinetic_description: "",
  automatism: "",
  automatism_duration: "",
  automatism_description: "",
  others_axis_i: "",
  postictal_manifestation: "",
  postictal_duration: "",
  symptoms_per_month: "",
  seizures_per_month: "",
  age_at_first_seizure: "",
  age_at_first_diagnosis: "",
  date_of_last_seizure: "",
  time_of_day: "",
  more_at_night_or_day: "",
  incomplete_seizure_manifestation: ""
};

const axisII = {
  classification: "",
  brain_locations: ""
}

const axisIII = {
  ecs_syndromes: ""
}

const axisIV = {
  aetiology: "",
  familyhistoryepilepsy: "",
  statusepilepticus: "",
  attacksinclusters: "",
  seizure_precipitant: ""
}

const axisV = {
  axisvcomorbidities: "",
  typeoftreatment: "",
  prescriber: "",
  treatmentresult: "",
  adverseeffects: "",
  cognitivedeficit: "",
  socialconsequences: "",
  moodpersonalitychanges: "",
  restrictedqol: "",
  postictalinjuries: "",
  persistentseizures: ""
}

export function getFreshEpilepsyForm(){
  const epilepsy = {};
  epilepsy.axisI = Object.assign({}, axisI);
  epilepsy.axisII = Object.assign({}, axisII);
  epilepsy.axisIII = Object.assign({}, axisIII);
  epilepsy.axisIV = Object.assign({}, axisIV);
  epilepsy.axisV = Object.assign({}, axisV);
  return epilepsy;
}
