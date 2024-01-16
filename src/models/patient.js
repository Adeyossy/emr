import { appointmentModel } from "./appointment";
import { biodata } from "./biodata";
import { presenting_complaint } from "./complaint";
import { getFreshEpilepsyForm } from "./epilepsy";

// const system = { system: "", symptoms: [""] };

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
  age_diagnosed: "",
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
  last_viewed: "",
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
  }, // this is here for legacy reasons
  cvs: { notes: "" }, chest: { notes: "" }, abdomen: { onexamination: [], notes: "" }, 
  others: { notes: "" },imaging: { tests:[], notes: "" }, electrical: { tests: [], notes: "" }, 
  haematology: { tests: [], notes: "" }, labs: { tests: [], notes: "" }, 
  microbiology: { tests: [], notes: "" }, procedures: { tests: [], notes: "" },
  pharmacological: { notes: "" }, nonpharmacological: { notes: "" }, other: { notes: "" },
  assessment: { notes: "" }, plan: { notes: "" }, monitoring: { notes: "" },
  primary_diagnosis: "", secondary_diagnosis: "", forms: {}, last_notes: ""
}
// Do not edit this patient model. It is here for legacy reasons

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
        if (key === "notes" || key === "date_seen") apntmnt[key] = item[key];
        else apntmnt[key] = firstApntmnt[key];
        if (!apntmnt[key]) apntmnt[key] = firstApntmnt[key]
      } else {
        apntmnt[key] = firstApntmnt[key];
      }

      if (apntmnt['forms'] === undefined) {
        apntmnt[key] = {};
        apntmnt[key].epilepsy = getFreshEpilepsyForm();
      }

      if (apntmnt['notes'] === undefined) {
        apntmnt['notes'] = "";
      }
    });

    newPatient.appointment = apntmnt;
    // newPatient.forms = {};
    // newPatient.forms.epilepsy = getFreshEpilepsyForm();
    return apntmnt;
  });

  // newPatient.appointments.push(firstApntmnt);
  // console.log("New appointment model => ", newPatient.appointments);
  return newPatient;
}

export function newEmrPatient() {
  const newPatient = JSON.parse(JSON.stringify(patientModel));
  const idApntmntTime = Date.now();
  newPatient._id = idApntmntTime.toString();
  newPatient.first_seen = idApntmntTime;
  newPatient.last_seen = idApntmntTime;
  newPatient.last_viewed = idApntmntTime.toString();
  newPatient.appointment_keys = [idApntmntTime];
  const newApntmnt = getAppointment(idApntmntTime);
  newPatient[idApntmntTime.toString()] = newApntmnt;
  // newPatient.appointment = newApntmnt;
  // newPatient.appointments = [newApntmnt];

  return newPatient;
  // newApntmnt
}

// This function parse
export function parseApntmntDB(apntmnt) {
  this.date_seen = apntmnt.date_seen;
  this.biodata = JSON.parse(JSON.stringify(apntmnt.biodata));
  this.presenting_complaints = JSON.parse(JSON.stringify(apntmnt.presenting_complaints));
  this.review_of_systems = JSON.parse(JSON.stringify(apntmnt.review_of_systems));
  this.past_medical_history = JSON.parse(JSON.stringify(apntmnt.past_medical_history));
  this.alcohol = JSON.parse(JSON.stringify(apntmnt.alcohol));
  this.cigarette = JSON.parse(JSON.stringify(apntmnt.cigarette));
  this.forms = JSON.parse(JSON.stringify(apntmnt.forms));
  this.drugs = apntmnt.drugs.slice();
  this.allergies = JSON.parse(JSON.stringify(apntmnt.allergies));
  this.drugs_and_allergies_notes = apntmnt.drugs_and_allergies_notes;
  this.family_history = apntmnt.family_history.slice();
  this.general = JSON.parse(JSON.stringify(apntmnt.general));
  this.neuro = JSON.parse(JSON.stringify(apntmnt.neuro));
  this.cvs = JSON.parse(JSON.stringify(apntmnt.cvs));
  this.chest = JSON.parse(JSON.stringify(apntmnt.chest));
  this.abdomen = JSON.parse(JSON.stringify(apntmnt.abdomen));
  if (!apntmnt.abdomen.onexamination) {
    this.abdomen.onexamination = [];
  }
  this.others = JSON.parse(JSON.stringify(apntmnt.others));
  this.imaging = JSON.parse(JSON.stringify(apntmnt.imaging));
  this.electrical = JSON.parse(JSON.stringify(apntmnt.electrical));
  this.haematology = JSON.parse(JSON.stringify(apntmnt.haematology));
  this.labs = JSON.parse(JSON.stringify(apntmnt.labs));
  this.microbiology = JSON.parse(JSON.stringify(apntmnt.microbiology));
  this.procedures = JSON.parse(JSON.stringify(apntmnt.procedures));
  ['imaging', 'electrical', 'haematology', 'labs', 'microbiology', 'procedures']
  .forEach(each => { if (!apntmnt[each].tests) this[each].tests = [] })
  this.pharmacological = JSON.parse(JSON.stringify(apntmnt.pharmacological));
  this.nonpharmacological = JSON.parse(JSON.stringify(apntmnt.nonpharmacological));
  this.other = JSON.parse(JSON.stringify(apntmnt.other));
  this.assessment = JSON.parse(JSON.stringify(apntmnt.assessment));
  this.plan = JSON.parse(JSON.stringify(apntmnt.plan));
  this.monitoring = JSON.parse(JSON.stringify(apntmnt.monitoring));
  this.next_visit = apntmnt.next_visit;
  this.notes = apntmnt.notes;
  // Object.keys(apntmnt).forEach(field => {
  //   if (typeof apntmnt[field] === 'object') {
  //     if (Array.isArray(apntmnt[field])) {
  //       this[field] = apntmnt[field].slice();
  //       // console.log(field, " => ", this);
  //     } else {
  //       this[field] = JSON.parse(JSON.stringify(apntmnt[field]));
  //     }
  //   } else {
  //     this[field] = apntmnt[field];
  //   }
  // }, this);
}

export function parseFromDatabase(dbPatient) {
  this._id = dbPatient._id;
  this._rev = dbPatient._rev;
  this.next_appointment = dbPatient.next_appointment;
  this.last_seen = dbPatient.last_seen;
  this.first_seen = dbPatient.first_seen;

  // If the data still uses the deprecated 'appointment' key
  // Change it to match the current schema
  let appointment = {};
  if (Object.hasOwn(dbPatient, 'appointment') &&
    Object.keys(dbPatient.appointment).length) {
    appointment = new parseApntmntDB(JSON.parse(JSON.stringify(dbPatient.appointment)));
    this.last_viewed = appointment.date_seen;
  } else {
    this.last_viewed = dbPatient.last_viewed;
  }

  if (Object.hasOwn(dbPatient, 'appointments') &&
    dbPatient.appointments.length) {
    const appointments = dbPatient.appointments.map(apntmnt => {
      let newApntmnt = new parseApntmntDB(JSON.parse(JSON.stringify(apntmnt)));

      if (appointment.date_seen === newApntmnt.date_seen ||
        !apntmnt.biodata.firstname || !apntmnt.biodata.lastname) {
        newApntmnt = appointment;
      }

      this[newApntmnt.date_seen.toString()] = newApntmnt;
      return newApntmnt;
    });

    this.appointment_keys = appointments.map(apntmnt => apntmnt.date_seen);
  } else {
    this.appointment_keys = dbPatient.appointment_keys;
    this.appointment_keys.forEach(key => {
      if (Object.hasOwn(dbPatient, key)) {
        this[key] = new parseApntmntDB(dbPatient[key]);
      } else {
        console.log('key does not exist');
      }
    })
  }

  this.primary_diagnosis = dbPatient.primary_diagnosis;
  this.secondary_diagnosis = dbPatient.secondary_diagnosis;
  this.last_notes = dbPatient.last_notes;
}

export function getOldAppointment() {
  const newAppointment = JSON.parse(JSON.stringify(appointment));
  newAppointment.date_seen = Date.now();
  return newAppointment;
}

export function getAppointment(date) {
  const newAppointment = JSON.parse(JSON.stringify(appointmentModel));
  newAppointment.date_seen = date;

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
    multiple_birth: "",
    blood_group: "",
    rhesus: "",
    genotype: "",
    notes: ""
  };

  newAppointment.alcohol = JSON.parse(JSON.stringify(alcohol));
  newAppointment.cigarette = JSON.parse(JSON.stringify(cigarette));
  newAppointment.forms = {};
  newAppointment.forms.epilepsy = getFreshEpilepsyForm();

  return newAppointment;
}

export function getAppointmentWithDefaultValues(date) {
  const newAppointment = getAppointment(date);
  const previousAppointment = JSON.parse(JSON.stringify(this));
  newAppointment.biodata = previousAppointment.biodata;
  newAppointment.biodata.informant = "";
  // newAppointment.presenting_complaints = previousAppointment.presenting_complaints;
  newAppointment.review_of_systems = previousAppointment.review_of_systems;
  newAppointment.past_medical_history = previousAppointment.past_medical_history;
  newAppointment.alcohol = previousAppointment.alcohol;
  newAppointment.cigarette = previousAppointment.cigarette;
  newAppointment.forms = JSON.parse(JSON.stringify(previousAppointment.forms));
  // console.log("previous apntmnt forms => ", previousAppointment.forms);
  // console.log("new apntmnt forms => ", newAppointment.forms);

  return newAppointment;
}

export function createPatientFromDB(patientFromDB) {
}
