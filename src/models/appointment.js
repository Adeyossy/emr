import { formsLookUp } from "./forms"

export const appointmentModel = {
  biodata: {},
  presenting_complaints: {},
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
  general: { onexamination: [], notes: "" },
  neuro: {
    highermentalfunctions: "", cranialnerves: "", motor_sides: [], motor_limbs: [],
    motor_inspection: [], motor_tone: "", motor_power: "", motor_reflexes: "", ankle_clonus: "",
    babinski: "", sensorysides: [], sensorylimbs: [], sensoryfinetouch: "", sensorycoarsetouch: "",
    sensorytemperature: "", sensoryvibration: "", sensoryproprioception: "", sensorypressure: "",
    gaitandcoordination: "", notes: ""
  },
  cvs: { notes: "" }, chest: { notes: "" }, abdomen: { notes: "" }, others: { notes: "" },
  imaging: { tests: [], notes: "" }, electrical: { tests: [], notes: "" }, haematology: { tests: [], notes: "" },
  labs: { tests: [], notes: "" }, microbiology: { tests: [], notes: "" }, procedures: { tests: [], notes: "" },
  pharmacological: { notes: "" }, nonpharmacological: { notes: "" }, other: { notes: "" },
  assessment: {
    notes: ""
  },
  plan: {
    notes: ""
  },
  date_seen: "",
  next_visit: "",
  monitoring: {
    markers: [],
    notes: ""
  }, 
  forms: {},
  notes: ""
}

export const apntmntForm = {
  biodata: {
    firstname: "",
    middlename: "",
    lastname: "",
    ageinyears: "",
    gender: "",
    occupation: "",
    maritalstatus: "",
    address: "",
    city: "",
    state: "",
    religion: "",
    tribe: "",
    informant: "",
    hospital: "",
    id: "",
    phone_number: "",
    phone_number_1: "",
    email_address: "",
    next_of_kin: "",
    next_of_kin_relationship: ""
  },
  presenting_complaints: {
    complaints: [  ], //contains complaint objects
    course: "",
    cause: "",
    complications: "",
    care_so_far: "",
    notes: ""
  },
  review_of_systems: {
    cardiorespiratory: [],
    gastrointestinal: [],
    genitourinary: [],
    endocrine: [],
    notes: ""
  },
  past_medical_history: {
    hospitalizations: [], //array of hospitalization(s)
    surgeries: [],
    blood_transfusions: [],
    comorbidities: [],
    blood_group: "",
    rhesus: "",
    genotype: "",
    notes: ""
  },
  drugs: [],
  allergies: [],
  drugs_and_allergies_notes: "",
  family_history: [],
  alcohol: {
    alcoholtype: [],
    alcoholbottlesperweek: "",   //number
    alcoholbottlesize: "",   //number
    alcoholconsumptionduration: ""   //number
  },
  cigarette: { cigarettesticksperday: "", cigarettesmokingduration: "" },
  fshx_notes: "",
  summary: "",
  general: { onexamination: [], notes: "" },
  neuro: {
    highermentalfunctions: "", cranialnerves: "", motor_sides: [], motor_limbs: [],
    motor_inspection: [], motor_tone: "", motor_power: "", motor_reflexes: "", ankle_clonus: "",
    babinski: "", sensorysides: [], sensorylimbs: [], sensoryfinetouch: "", sensorycoarsetouch: "",
    sensorytemperature: "", sensoryvibration: "", sensoryproprioception: "", sensorypressure: "",
    gaitandcoordination: "", notes: ""
  },
  cvs: { notes: "" }, chest: { notes: "" }, abdomen: { notes: "" }, others: { notes: "" },
  imaging: { tests: [], notes: "" }, electrical: { tests: [], notes: "" }, haematology: { tests: [], notes: "" },
  labs: { tests: [], notes: "" }, microbiology: { tests: [], notes: "" }, procedures: { tests: [], notes: "" },
  pharmacological: { notes: "" }, nonpharmacological: { notes: "" }, other: { notes: "" },
  assessment: {
    notes: ""
  },
  plan: {
    notes: ""
  },
  date_seen: "",
  next_visit: "",
  monitoring: {
    markers: [],
    notes: ""
  }, 
  forms: { ...formsLookUp, epilepsy: {} },
  notes: ""
}
