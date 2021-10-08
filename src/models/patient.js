import { biodata } from "./biodata";
import { presenting_complaint } from "./complaint";

const system = {
  system: "",
  symptoms: [""]
};

const past_medical_history = {
  hospitalizations: [], //array of hospitalization(s)
  surgeries: [],
  blood_transfusions: [],
  comorbidities: [],
  blood_group: "",
  rhesus: "",
  genotype: "",
  notes: ""
};

export const hospitalization = {
  diagnosis: "",
  duration: 0,
  facility: "",
  treatment: "",
  recovery: ""
};

export const surgery = Object.assign({}, hospitalization);

export const bloodTransfusion = {
  pints: 0,
  donor: "",
  facility: "",
  reaction: ""
};

export const comorbidity = {
  comorbidity: "",
  year_diagnosed: 0,   //number
  duration: 0,    //number
  treatment: "",
  compliance: ""
};

const drug = {
  drug_name: "",
  dosage: "",
  usage: "",
  reaction: ""
};

const allergy = {
  substance: "",
  reaction: ""
};

const alcohol = {
  type: "",
  amount_of_bottles: "",   //number
  bottle_volume: "",   //number
  years: ""   //number
};

export const patient = {
  next_appointment: 0,
  last_seen: 0,
  first_seen: 0,
  number_of_appointments: 0,
  appointments: new Array(),
  biodata: {},
  presenting_complaint: Object.assign({}, presenting_complaint),
  review_of_systems: {},
  past_medical_history: {},
  drugs: [],
  allergies: [],
  family_history: [],
  alcohol: {
    type: "",
    amount_of_bottles: "",   //number
    bottle_volume: "",   //number
    years: ""   //number
  },
  smoking: {
    sticks_per_day: "",  //number
    years_smoked: ""  //number
  },
  summary: "",
  general: {
    extras: [],
    notes: ""
  },
  neuro: {
    notes: ""
  },
  cvs: {
    notes: ""
  },
  chest: {
    notes: ""
  },
  abdomen: {
    notes: ""
  },
  others: {
    notes: ""
  },
  imaging: {
    notes: ""
  },
  electrical: {
    notes: ""
  },
  haematology: {
    notes: ""
  },
  chempath: {
    notes: ""
  },
  microbiology: {
    notes: ""
  },
  procedures: {
    notes: ""
  },
  primary_diagnosis: "",
  secondary_diagnosis: ""
}

export function getFreshPatient(){
  const appointmentTime = Date.now();
  const newPatient = Object.assign({}, patient);
  newPatient.first_seen = appointmentTime;
  newPatient.number_of_appointments += 1;
  newPatient.appointments = [];
  newPatient.appointments.unshift({
    time: appointmentTime,
    notes: "",
    assessment: "",
    plan: "",
    others: ""
  });
  newPatient.biodata = Object.assign({}, biodata);
  newPatient.presenting_complaint = Object.assign({}, presenting_complaint);
  newPatient.review_of_systems = {
    cardiorespiratory: "",
    gastrointestinal: "",
    genitourinary: "",
    endocrine: "",
    notes: ""
  };

  newPatient.past_medical_history = Object.assign({}, past_medical_history);
  

  return newPatient;
}
