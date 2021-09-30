import React from 'react';
import './emr.css';
import AppComponent from './components/app.js';
import { authStateObserver } from './modules/auth';

const patient = {
  biodata: {
    firstname: "",
    middlename: "",
    lastname: "",
    ageinyears: "",
    gender: "",
    occupation: "",
    maritalstatus: "",
    address: "",
    religion: "",
    tribe: "",
    informant: ""
  },
  presenting_complaint: {
    complaints: [
      {
        complaint: "",
        duration: ""
      }
    ],
    course: "",
    cause: "",
    complications: "",
    care_so_far: ""
  },
  review_of_systems: [
    {
      system: "",
      symptoms: [""]
    }
  ],
  past_medical_history: {
    hospitalizations: [
      {
        diagnosis: "",
        duration: 0,
        facility: "",
        treatment: "",
        recovery: ""
      }
    ],
    surgeries: [
      {
        diagnosis: "",
        duration: 0,
        facility: "",
        treatment: "",
        recovery: ""
      }
    ],
    blood_transfusions: [
      {
        pints: 0,
        donor: "",
        facility: "",
        reaction: ""
      }
    ],
    hypertension: {
      year_diagnosed: 0,   //number
      duration: 0,    //number
      treatment: "",
      compliance: ""
    },
    blood_group: "",
    rhesus: "",
    genotype: "",
    notes: ""
  },
  drugs: [
    {
      drug_name: "",
      dosage: "",
      usage: "",
      reaction: ""
    }
  ],
  allergies: [
    {
      substance: "",
      reaction: ""
    }
  ],
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
  summary: ""
}

export default class EMRComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: true,
      patients: [],
      patient: {}
    }
  }

  authStateObserver();

  render(){
    if(this.state.user) {
      return(
        <AppComponent/>
      )
    }
  }
}