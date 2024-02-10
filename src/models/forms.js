import { ascoItems } from "./asco"
import { aspectsItems } from "./aspects"
import { fastItems } from "./fast"
import { fisherItems } from "./fisher"
import { gcsItems } from "./gcs"
import { ichItems } from "./ich"
import { ideaItems } from "./idea"
import { mmseItems } from "./mmse"
import { mocaItems } from "./moca"
import { mrsItems } from "./mrs"
import { nihssItems } from "./nihss"
import { pdItems } from "./pd"
import { rosierItems } from "./rosier"
import { smashuItems } from "./smashu"
import { toastItems } from "./toast"
import { wfnsItems } from "./wfns"

export const gcsModel = {
  eyeopening: -1,
  verbalresponse: -1,
  motorresponse: -1
}

export const mmseModel = {
  orientationtime: -1,
  orientationplace: -1,
  registration: -1,
  attention: -1,
  recall: -1,
  languagename: -1,
  languagerepeat: -1,
  languagegive: -1,
  languageread: -1,
  languagewrite: -1,
  copying: -1
}

export const nihssModel = {
  loc: -1,
  locquestions: -1,
  loccommands: -1,
  bestgaze: -1,
  visual: -1,
  facialpalsy: -1,
  motorleftarm: -1,
  motorrightarm: -1,
  motorleftleg: -1,
  motorrightleg: -1,
  limbataxia: -1,
  sensory: -1,
  bestlanguage: -1,
  dysarthria: -1,
  extinction: -1
}

export const aspectsModel = {
  caudate: -1,
  insularribbon: -1,
  internalcapsule: -1,
  lentiformnucleus: -1,
  m1: -1,
  m2: -1,
  m3: -1,
  m4: -1,
  m5: -1,
  m6: -1
}

export const rosierModel = {
  facialweakness: -1,
  gripweakness: -1,
  armweakness: -1,
  legweakness: -1,
  speechloss: -1,
  visualfielddefect: -1,
  lossofconsciousness: -1,
  seizure: -1
}

export const mrsModel = {
  mrs: -1
}

export const fastModel = {
  fast: ""
}

export const toastModel = {
  toast: ""
}

export const smashuModel = {
  smashu: ""
}

export const mocaModel = {
  visuospatial: -1,
  naming: -1,
  attentiondigits: -1,
  attentionletters: -1,
  attentionsubtraction: -1,
  languagerepeat: -1,
  languagefluency: -1,
  abstraction: -1,
  delayedrecall: -1,
  orientation: -1
}

const ichModel = {
  gcs: -1,
  ichvolume: -1,
  ivh: -1,
  infratentorial: -1,
  age: -1
}

const fisherModel = {
  fisher: ""
}

const wfnsModel = {
  wfns: ""
}

const ascoModel = {
  atherosclerosis: -1,
  smallvesseldisease: -1,
  cardiac: -1,
  other: -1
}

const ideaModel = {
  describe: -1,
  animals: -1,
  leader: -1,
  dayofweek: -1,
  recall: -1,
  matchstick: -1
}

const pdModel = {
  bradykinesia: -1,
  rigidity: -1,
  resttremor: -1,
  posturaldisturbance: -1,
  stoopedposture: -1,
  decreasedarmswing: -1,
  shufflinggait: -1,
  micrographia: -1,
  diminishedolfaction: -1,
  seborrheicdermatitis: -1,
  dreamenactment: -1,
  posturalinstability: -1,
  supranuclear: -1,
  dysphagia: -1,
  dysarthria: -1,
  inspiratorystridor: -1,
  anterocollis: -1,
  cerebellar: -1,
  myoclonus: -1,
  dystonia: -1,
  practiontremor: -1
}

export const formsLookUp = {
  aspects: {
    title: "ASPECTS Scale",
    items: aspectsItems,
    model: aspectsModel,
    type: "sum"
  },
  gcs: {
    title: "Glasgow Coma Scale",
    items: gcsItems,
    model: gcsModel,
    type: "sum"
  },
  rosier: {
    title: "ROSIER Score",
    items: rosierItems,
    model: rosierModel,
    type: "sum"
  },
  nihss: {
    title: "NIHSS Scale",
    items: nihssItems,
    model: nihssModel,
    type: "sum"
  },
  mmse: {
    title: "Mini Mental State Examination",
    items: mmseItems,
    model: mmseModel,
    type: "sum"
  },
  mrs: {
    title: "Modified Rankin Scale",
    items: mrsItems,
    model: mrsModel,
    type: "sum"
  },
  moca: {
    title: "Montreal Cognitive Assessment (MOCA)",
    items: mocaItems,
    model: mocaModel,
    type: "sum"
  },
  fast: {
    title: "Functional Assessment Staging (FAST) Scale",
    items: fastItems,
    model: fastModel,
    type: "single"
  },
  toast: {
    title: "Trial of Org 10172 in Acute Stroke Treatment",
    items: toastItems,
    model: toastModel,
    type: "single"
  },
  smashu: {
    title: "SMASH-U Aetiological Classification of Stroke",
    items: smashuItems,
    model: smashuModel,
    type: "single"
  },
  ich: {
    title: "Intracerebral Haemorrhage Score",
    items: ichItems,
    model: ichModel,
    type: "sum"
  },
  fisher: {
    title: "Modified Fisher Scale",
    items: fisherItems,
    model: fisherModel,
    type: "single"
  },
  wfns: {
    title: "World Federation of Neurological Surgeons Grade",
    items: wfnsItems,
    model: wfnsModel,
    type: "single"
  },
  asco: {
    title: "A-S-C-O Phenotypic Classification for Stroke",
    items: ascoItems,
    model: ascoModel,
    type: "sum"
  },
  idea: {
    title: "IDEA Cognitive Screen",
    items: ideaItems,
    model: ideaModel,
    type: "sum"
  },
  pd: {
    title: "PD Diagnostic Ascertainment",
    items: pdItems,
    model: pdModel,
    type: "sum"
  }
}
