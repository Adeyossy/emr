import { ascoItems } from "./asco"
import { aspectsItems } from "./aspects"
import { fastItems } from "./fast"
import { fisherItems } from "./fisher"
import { gcsItems } from "./gcs"
import { ichItems } from "./ich"
import { mmseItems } from "./mmse"
import { mocaItems } from "./moca"
import { mrsItems } from "./mrs"
import { nihssItems } from "./nihss"
import { rosierItems } from "./rosier"
import { smashuItems } from "./smashu"
import { toastItems } from "./toast"
import { wfnsItems } from "./wfns"

export const gcsModel = {
  eyeopening: "",
  verbalresponse: "",
  motorresponse: ""
}

export const mmseModel = {
  orientationtime: "",
  orientationplace: "",
  registration: "",
  attention: "",
  recall: "",
  languagename: "",
  languagerepeat: "",
  languagegive: "",
  languageread: "",
  languagewrite: "",
  copying: ""
}

export const nihssModel = {
  loc: "",
  locquestions: "",
  loccommands: "",
  bestgaze: "",
  visual: "",
  facialpalsy: "",
  motorleftarm: "",
  motorrightarm: "",
  motorleftleg: "",
  motorrightleg: "",
  limbataxia: "",
  sensory: "",
  bestlanguage: "",
  dysarthria: "",
  extinction: ""
}

export const aspectsModel = {
  caudate: "",
  insularribbon: "",
  internalcapsule: "",
  lentiformnucleus: "",
  m1: "",
  m2: "",
  m3: "",
  m4: "",
  m5: "",
  m6: ""
}

export const rosierModel = {
  facialweakness: "",
  gripweakness: "",
  armweakness: "",
  legweakness: "",
  speechloss: "",
  visualfielddefect: "",
  lossofconsciousness: "",
  seizure: ""
}

export const mrsModel = {
  mrs: ""
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
  visuospatial: "",
  naming: "",
  attentiondigits: "",
  attentionletters: "",
  attentionsubtraction: "",
  languagerepeat: "",
  languagefluency: "",
  abstraction: "",
  delayedrecall: "",
  orientation: ""
}

const ichModel = {
  gcs: "",
  ichvolume: "",
  ivh: "",
  infratentorial: "",
  age: ""
}

const fisherModel = {
  fisher: ""
}

const wfnsModel = {
  wfns: ""
}

const ascoModel = {
  atherosclerosis: "",
  smallvesseldisease: "",
  cardiac: "",
  other: ""
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
  }
}
