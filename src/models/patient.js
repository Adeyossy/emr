import { getCurrentUser } from "../modules/auth";
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
  compliance: "",
  response: ""
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
  alcoholtype: [],
  alcoholbottlesperweek: "",   //number
  alcoholbottlesize: "",   //number
  alcoholconsumptionduration: ""   //number
};

export const cigarette = {
  cigarettesticksperday: "",
  cigarettesmokingduration: ""
}

export const patient = {
  id: "",
  next_appointment: 0,
  last_seen: 0,
  first_seen: 0,
  appointment: {},
  appointments: [],
  biodata: {},
  presenting_complaints: Object.assign({}, presenting_complaint),
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
    onexamination: [],
    notes: ""
  },
  neuro: {
    highermentalfunctions: "",
    cranialnerves: "",
    motor_sides: [],
    motor_limbs: [],
    motor_inspection: [],
    motor_tone: "",
    motor_power: "",
    motor_reflexes: "",
    ankle_clonus: "",
    babinski: "",
    sensorysides: [],
    sensorylimbs: [],
    sensoryfinetouch: "",
    sensorycoarsetouch: "",
    sensorytemperature: "",
    sensoryvibration: "",
    sensoryproprioception: "",
    sensorypressure: "",
    gaitandcoordination: "",
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
  labs: {
    notes: ""
  },
  microbiology: {
    notes: ""
  },
  procedures: {
    notes: ""
  },
  pharmacological: {
    notes: ""
  },
  nonpharmacological: {
    notes: ""
  },
  other: {
    notes: ""
  },
  assessment: {
    notes: ""
  },
  plan: {
    notes: ""
  },
  monitoring: {
    notes: ""
  },
  primary_diagnosis: "",
  secondary_diagnosis: "",
  forms: {},
  last_notes: ""
}

export function getFreshPatient() {
  const appointmentTime = Date.now();
  // const newPatient = Object.assign({}, patient);
  const newPatient = JSON.parse(JSON.stringify(patient));
  // newPatient.user = currentUser;
  newPatient._id = appointmentTime.toString();
  newPatient.first_seen = appointmentTime;
  newPatient.last_seen = appointmentTime;
  newPatient.appointments = [];
  newPatient.appointments.unshift({
    time: appointmentTime,
    notes: "",
    assessment: "",
    plan: "",
    others: ""
  });
  newPatient.biodata = Object.assign({}, biodata);
  newPatient.presenting_complaints = Object.assign({}, presenting_complaint);
  newPatient.review_of_systems = {
    cardiorespiratory: [],
    gastrointestinal: [],
    genitourinary: [],
    endocrine: [],
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

  newPatient.alcohol = JSON.parse(JSON.stringify(alcohol));
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
    date_seen: Date.now(),
    next_visit: "",
    monitoring: []
  }

  return appointment;
}
