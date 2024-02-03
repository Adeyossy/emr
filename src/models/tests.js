export const tests = {
  fbc: {
    name: 'Full Blood Count',
    wcc: -1,
    pcv: -1,
    platelet: -1
  },
  lft: {
    name: 'Liver Function Test',
    ast: -1,
    alt: -1,
    ggt: -1,
    albumin: -1,
    total_protein: -1,
    direct_bilirubin: -1,
    total_bilirubin: -1,
    alp: -1
  },
  eucr: {
    name: 'Electrolytes, Urea and Creatinine',
    na: -1,
    k: -1,
    cl: -1,
    hco3: -1,
    urea: -1,
    cr: -1
  },
  flp: {
    name: 'Fasting Lipid Profile',
    hdl: -1,
    ldl: -1,
    total_cholesterol: -1,
    triglycerides: -1
  },
  fbg: {
    name: 'Fasting Blood Glucose',
    fbg: -1
  },
  ubt: {
    name: 'Urea Breath Test',
    findings: ['Positive', 'Negative']
  },
  ugie: {
    name: 'Upper GI Endoscopy',
    patient_name: '',
    patient_age:  -1,
    hospital_number: '',
    indication: '',
    pre_medication: '',
    oropharynx: ['Erosions', 'Inflammation'],
    oesophagus: ['Erosions', 'Ulcers', 'Inflammation'],
    eGJ: '',
    stomach_cardia: ['Erosion', 'Inflammation', 'Ulcer', 'Tumour', 'Normal'],
    stomach_body: ['Erosion', 'Inflammation', 'Ulcer', 'Tumour'],
    stomach_antrum: ['Erosion', 'Inflammation', 'Ulcer', 'Tumour'],
    stomach_fundus: ['Erosion', 'Inflammation', 'Ulcer', 'Tumour'],
    duodenogastric_reflux: ['Yes', 'No'],
    duodenum_d1: ['Normal', 'Inflammation', 'Erosion', 'Ulcers'],
    duodenum_d2: ['Normal', 'Inflammation', 'Erosion', 'Ulcers'],
    ubt: ['Positive', 'Negative'],
    diagnosis: '',
    histology_findings: ''
  },
  colonoscopy: {
    name: 'Colonoscopy',
    patient_name: '',
    patient_age: '',
    hospital_number: '',
    indication: '',
    caecum_findings: '',
    ascending_colon_findings: '',
    transverse_colon_findings: '',
    descending_colon_findings: '',
    sigmoid_colon_findings: '',
    rectum_findings: '',
    diagnosis: '',
    histology_result: ''
  },
  abd_uss: {
    name: 'Abdominal Ultrasound',
    findings: ''
  },
  abd_ct: {
    name: 'Abdominal CT',
    findings: ''
  },
  mrcp: {
    name: 'Magnetic Resonance Cholangiopancreatography',
    findings: ''
  },
  ercp: {
    name: 'Endoscopic Retrograde Cholangiopancreatography',
    findings: ''
  },
  tumour_markers: {
    name: 'Tumour Markers',
    cea: -1,
    ca199: -1,
    afp: -1,
    ca125: -1
  },
  viral_screening: {
    name: 'Viral Screening',
    hbsag: ['Positive', 'Negative'],
    antihbc: ['Positive', 'Negative'],
    antihcv: ['Positive', 'Negative'],
    rVS: ['Reactive', 'Nonreactive', 'Indeterminate'],
    hBV_DNA: '',
    hCV_RNA: '',
    hbeAg: '',
    hbeAb: '',
    antiHBs: ''
  },
  autoantibodies: {
    name: 'Autoantibodies',
    ana: -1,
    crp: -1,
    esr: -1
  },
  ptinr: {
    name: 'PT/INR',
    value: -1
  },
  blood_culture: {
    name: 'Blood Culture',
    findings: ''
  },
  saag: {
    name: 'Serum Ascites Albumin Gradient',
    value: -1
  },
  amylase: {
    name: 'Amylase',
    value: -1
  },
  lipase: {
    name: 'Lipase',
    value: -1
  },
  ascitic_fluid_analysis: {
    name: 'Ascitic Fluid Analysis',
    findings: ''
  },
  stool_antigen: {
    name: 'Stool Antigen',
    findings: ''
  },
  liver_biopsy: {
    name: 'Liver Biopsy',
    indication: '',
    diagnosis: '',
    histology: ''
  }
}

export function getForStorage(dictionary, key, section) {
  /*

  The purpose of this function is to convert templates for clerking into
  format that can be stored in the patient's data.

  parameters:
    dictionary:
      type: object
      description: object of symptoms, signs and tests.

    key:
      type: string
      description: key used to access the specific symptom, sign or test from
        the dictionary above.
    
    section:
      type: string
      description: used as a key on the dictionary to set it to the key parameter

  */

  // symptom, sign or test
  key = key.toLowerCase();
  const item = dictionary[key.replace(/ /g, "_")];

  for (const key in item) {
    if(Object.hasOwn(item, key)) {
      this[key] = typeof item[key] === 'boolean' ? false : "";
    }
  }
  
  this.name = item.name;
  
  this[section] = key;
  return this;
}
