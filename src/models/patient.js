import { biodata } from "./biodata";
import { presenting_complaint } from "./complaint";
import { getFreshEpilepsyForm } from "./epilepsy";

const system = {
  system: "",
  symptoms: [""]
};

export const appointment = {
  notes: "",
  assessment: "",
  plan: "",
  date_seen: "",
  next_visit: "",
  monitoring: []
}

export const monitoring = {
  field: "",
  value: "",
  unit: ""
}

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

export const drug = {
  name: "",
  dosage: "",
  usage: "",
  reaction: ""
};

export const allergy = {
  substance: "",
  reaction: ""
};

export const alcohol = {
  alcoholtype: "",
  alcoholbottlesperweek: "",   //number
  alcoholbottlesize: "",   //number
  alcoholconsumptionduration: ""   //number
};

export const cigarette = {
  cigarettesticksperday: "",
  cigarettesmokingduration: ""
}

export const patient = {
  next_appointment: 0,
  last_seen: 0,
  first_seen: 0,
  appointment: 0,
  appointments: [],
  biodata: {},
  presenting_complaint: Object.assign({}, presenting_complaint),
  review_of_systems: {},
  past_medical_history: {},
  drugs: [],
  allergies: [],
  drugs_and_allergies_notes: "",
  family_history: [],
  alcohol: {},
  cigarette: {},
  fshx_notes: "",
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
  secondary_diagnosis: "",
  forms: {}
}

export function getFreshPatient() {
  const appointmentTime = Date.now();
  const newPatient = Object.assign({}, patient);
  newPatient.first_seen = appointmentTime;
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

  newPatient.past_medical_history = {
    hospitalizations: [], //array of hospitalization(s)
    surgeries: [],
    blood_transfusions: [],
    comorbidities: [],
    blood_group: "",
    rhesus: "",
    genotype: "",
    notes: ""
  };

  newPatient.drugs = [];
  newPatient.allergies = [];

  const appointment = {
    notes: "",
    assessment: "",
    plan: "",
    date_seen: appointmentTime,
    next_visit: "",
    monitoring: []
  };

  newPatient.appointment = appointment;

  newPatient.appointments = [
    appointment
  ];

  newPatient.alcohol = Object.assign({}, alcohol);
  newPatient.cigarette = Object.assign({}, cigarette);
  newPatient.fshx_notes = "";
  newPatient.forms = {};
  newPatient.forms.epilepsy = getFreshEpilepsyForm();

  return newPatient;
}

export function getAppointment() {
  const appointment = {
    notes: "",
    assessment: "",
    plan: "",
    date_seen: "",
    next_visit: "",
    monitoring: []
  }

  return appointment;
}
