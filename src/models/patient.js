import { getCurrentUser } from "../modules/auth";
import { appointmentModel } from "./appointment";
import { biodata } from "./biodata";
import { presenting_complaint, complaint } from "./complaint";
import { getFreshEpilepsyForm } from "./epilepsy";

const system = { system: "", symptoms: [""] };

export const appointment = {
  notes: "", assessment: { notes: "" },
  plan: { notes: "" }, date_seen: "", next_visit: "", monitoring: { markers: [], notes: "" },
  pharmacological: { notes: "" }, nonpharmacological: { notes: "" }, other: { notes: "" }
}

export const monitoringMarker = { field: "", value: "", unit: "" }

export const hospitalization = {
  diagnosis: "", duration: 0, facility: "", treatment: "", recovery: ""
};

export const surgery = Object.assign({}, hospitalization);

export const bloodTransfusion = { pints: 0, donor: "", facility: "", reaction: "" };

export const comorbidity = {
  comorbidity: "",
  year_diagnosed: 0,   //number
  duration: 0,    //number
  treatment: "", compliance: "", response: ""
};

export const drug = { name: "", dosage: "", usage: "", reaction: "" };

export const allergy = {
  substance: "", reaction: ""
};

export const alcohol = {
  alcoholtype: [],
  alcoholbottlesperweek: "",   //number
  alcoholbottlesize: "",   //number
  alcoholconsumptionduration: ""   //number
};

export const cigarette = { cigarettesticksperday: "", cigarettesmokingduration: "" }

export const patientModel = {
  _id: "",
  next_appointment: 0,
  last_seen: 0,
  first_seen: 0,
  appointment: {},
  appointments: [],
  primary_diagnosis: "",
  secondary_diagnosis: "",
  last_notes: ""
}

//this is the old patient model kept for legacy reasons: for any old code that may need conversion
export const patient = {
  _id: "",
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
    highermentalfunctions: "", cranialnerves: "", motor_sides: [], motor_limbs: [],
    motor_inspection: [], motor_tone: "", motor_power: "", motor_reflexes: "", ankle_clonus: "",
    babinski: "", sensorysides: [], sensorylimbs: [], sensoryfinetouch: "", sensorycoarsetouch: "",
    sensorytemperature: "", sensoryvibration: "", sensoryproprioception: "", sensorypressure: "",
    gaitandcoordination: "", notes: ""
  },
  cvs: { notes: "" }, chest: { notes: "" }, abdomen: { notes: "" }, others: { notes: "" },
  imaging: { notes: "" }, electrical: { notes: "" }, haematology: { notes: "" },
  labs: { notes: "" }, microbiology: { notes: "" }, procedures: { notes: "" },
  pharmacological: { notes: "" }, nonpharmacological: { notes: "" }, other: { notes: "" },
  assessment: { notes: "" }, plan: { notes: "" }, monitoring: { notes: "" },
  primary_diagnosis: "", secondary_diagnosis: "", forms: {}, last_notes: ""
}

export function getFreshPatient() {
  const appointmentTime = Date.now();
  const newPatient = JSON.parse(JSON.stringify(patient));
  newPatient._id = appointmentTime.toString();
  newPatient.first_seen = appointmentTime;
  newPatient.last_seen = appointmentTime;
  newPatient.appointments = [];
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

  // const appointment = JSON.parse(JSON.stringify(appointment));

  newPatient.appointment = JSON.parse(JSON.stringify(appointment));
  newPatient.appointment.date_seen = appointmentTime;

  newPatient.appointments = [
    newPatient.appointment
  ];

  newPatient.alcohol = JSON.parse(JSON.stringify(alcohol));
  newPatient.cigarette = Object.assign({}, cigarette);
  newPatient.fshx_notes = "";
  newPatient.forms = {};
  newPatient.forms.epilepsy = getFreshEpilepsyForm();

  return newPatient;
}

export function parseOldPatient() {
  const newPatient = JSON.parse(JSON.stringify(patientModel));
  newPatient._id = this._id;
  newPatient.first_seen = this.first_seen;
  newPatient.last_seen = this.last_seen;
  const firstApntmnt = JSON.parse(JSON.stringify(this));
  // firstApntmnt.date_seen = this.first_seen;
  // firstApntmnt = this;
  delete firstApntmnt.first_seen; delete firstApntmnt.last_seen; delete firstApntmnt._id;
  delete firstApntmnt.primary_diagnosis; delete firstApntmnt.secondary_diagnosis;
  delete firstApntmnt.next_appointment; delete firstApntmnt.last_notes;
  delete firstApntmnt.appointment; delete firstApntmnt.appointments;

  newPatient.appointments = this.appointments.map(item => {
    const apntmnt = JSON.parse(JSON.stringify(appointmentModel));
    Object.keys(apntmnt).map(key => {
      if (item.hasOwnProperty(key)) {
        if(key === "notes" || key === "date_seen") apntmnt[key] = item[key];
        else apntmnt[key] = firstApntmnt[key];
        if(!apntmnt[key]) apntmnt[key] = firstApntmnt[key]
      } else {
        apntmnt[key] = firstApntmnt[key];
      }

      if (apntmnt['forms'] === undefined) {
        apntmnt[key] = {};
        apntmnt[key].epilepsy = getFreshEpilepsyForm();
      }

      if (apntmnt['notes'] === undefined){
        apntmnt['notes'] = "";
      }
    });

    newPatient.appointment = apntmnt;
    // newPatient.forms = {};
    // newPatient.forms.epilepsy = getFreshEpilepsyForm();
    return apntmnt;
  });

  // newPatient.appointments.push(firstApntmnt);
  console.log("New appointment model => ", newPatient.appointments);
  return newPatient;
}

export function newEmrPatient() {
  const newPatient = JSON.parse(JSON.stringify(patientModel));
  const idApntmntTime = Date.now();
  newPatient._id = idApntmntTime.toString();
  newPatient.first_seen = idApntmntTime;
  newPatient.last_seen = idApntmntTime;
  const newApntmnt = getAppointment();
  newPatient.appointment = newApntmnt;
  newPatient.appointments = [ newApntmnt ];

  return newPatient;
  // newApntmnt
}

export function getOldAppointment() {
  const newAppointment = JSON.parse(JSON.stringify(appointment));
  newAppointment.date_seen = Date.now();
  return newAppointment;
}

export function getAppointment() {
  const newAppointment = JSON.parse(JSON.stringify(appointmentModel));
  newAppointment.date_seen = Date.now();

  newAppointment.biodata = JSON.parse(JSON.stringify(biodata));
  newAppointment.presenting_complaints = JSON.parse(JSON.stringify(presenting_complaint));
  newAppointment.review_of_systems = {
    cardiorespiratory: [],
    gastrointestinal: [],
    genitourinary: [],
    endocrine: [],
    notes: ""
  };

  newAppointment.past_medical_history = {
    hospitalizations: [], //array of hospitalization(s)
    surgeries: [],
    blood_transfusions: [],
    comorbidities: [],
    blood_group: "",
    rhesus: "",
    genotype: "",
    notes: ""
  };

  newAppointment.alcohol = JSON.parse(JSON.stringify(alcohol));
  newAppointment.cigarette = JSON.parse(JSON.stringify(cigarette));
  newAppointment.forms.epilepsy = getFreshEpilepsyForm();

  return newAppointment;
}

export function getAppointmentWithDefaultValues() {
  const newAppointment = getAppointment();
  const previousAppointment = JSON.parse(JSON.stringify(this));
  newAppointment.biodata = previousAppointment.biodata;
  newAppointment.biodata.informant = "";
  // newAppointment.presenting_complaints = previousAppointment.presenting_complaints;
  newAppointment.review_of_systems = previousAppointment.review_of_systems;
  newAppointment.past_medical_history = previousAppointment.past_medical_history;
  newAppointment.alcohol = previousAppointment.alcohol;
  newAppointment.cigarette = previousAppointment.cigarette;
  newAppointment.forms.epilepsy = previousAppointment.forms.epilepsy;

  return newAppointment;
}

export function createPatientFromDB(patientFromDB) {
}
