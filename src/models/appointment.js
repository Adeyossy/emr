import { presenting_complaint } from "./complaint";

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
  imaging: { notes: "" }, electrical: { notes: "" }, haematology: { notes: "" },
  labs: { notes: "" }, microbiology: { notes: "" }, procedures: { notes: "" },
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
