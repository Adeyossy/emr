import React from 'react';
import './emr.css';
import { AppComponent } from './components/app.js';
import { getFreshPatient } from './models/patient';
import { authStateObserver } from './modules/auth';
import DashboardComponent from './components/dashboard';
import PatientTableComponent from './components/dashboard/patient_table';
import MainComponent from './components/main';

export const PatientContext = React.createContext(null);

export class EMRComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true,
      patients: [],
      patient: null,
      emrContext: "Dashboard"
    }
  }

  onCreateIconClicked = () => {
    const newPatient = Object.assign({}, getFreshPatient());
    this.state.patients.unshift(newPatient);
    this.setState({
      patient: newPatient,
      emrContext: "Patients"
    });
  }

  onPatientTableClicked = (dateId) => {
    this.setState({
      patient: this.state.patients.find((value) => dateId === value.first_seen),
      emrContext: "Patients"
    });
  }

  onPatientChange = (patient) => {
    this.setState({
      patient: patient
    });
  }

  switchBackToDashboard = () => {
    this.setState({
      patient: null,
      emrContext: "Dashboard"
    });
  }

  updateObjectField = (name, value, field) => {
    const thisPatient = this.state.patient;
    const thisField = thisPatient[field];
    thisField[name] = value;
    this.setState({
      patient: thisPatient
    });
  }

  updateComplaints = (name, value) => {
    const thisPatient = this.state.patient;
    const complaints = thisPatient.presenting_complaint;
    complaints.notes = value;
    this.setState({
      patient: thisPatient
    });
    console.log("complaint notes => ", value);
  }

  getWhereToModify = (fields, found) => {
    if (fields.length === 0) {
      return found;
    }

    found = found[fields.shift()];
    this.getWhereToModify(fields, found);
  }

  getWhereSwitched = (fields) => {
    switch (fields.length) {
      case 0:
        return this.state.patient

      case 1:
        return this.state.patient[fields[0]];

      case 2:
        return this.state.patient[fields[0]][fields[1]];

      case 3:
        return this.state.patient[fields[0]][fields[1]][fields[2]]

      case 4:
        return this.state.patient[fields[0]][fields[1]][fields[2]][fields[3]]

      default:
        break;
    }
  }

  //Update already existing past medical history sections modelled with arrays
  updatePMHArrays = (name, value, fields, index) => {
    const thisPatient = this.state.patient; //the current patient in the app
    // const pmh = thisPatient.past_medical_history; //access the past medical history of the patient
    const pmhArray = this.getWhereSwitched(fields); //get either hospitalization, surgery, blood transfusion and comorbidities
    let pmhArrayItem = undefined;
    if (Array.isArray(pmhArray))
      pmhArrayItem = pmhArray[index];
    else
      pmhArrayItem = pmhArray;
    pmhArrayItem[name] = value;
    this.setState({
      patient: thisPatient
    });
  }

  //add or remove entire items (i.e an hospitalization history) in the past medical history array
  updateItemsInArray = (fields, pmhObject, value) => {
    const thisPatient = this.state.patient;
    let pmhArray = this.getWhereSwitched(fields);

    console.log("updateItemsInArray called");
    console.log("fields => ", fields);
    console.log("pmhObject => ", pmhObject);
    console.log("pmhArray => ", pmhArray);

    if (fields.find((item) => item === "comorbidities" || item === "family_history")) {
      pmhArray.splice(pmhArray.length, 0, pmhObject);
    } else {
      if (pmhArray.length < value) {
        // Array.fill()
        let additions = new Array(value - pmhArray.length).fill(pmhObject);
        if(typeof pmhObject === 'object'){
          additions = additions.map(() => Object.assign({}, pmhObject));
        }
        pmhArray.splice(pmhArray.length, value, ...additions);
      } else {
        pmhArray.splice(value, pmhArray.length - value);
      }
    }
    // console.log("pmhArray => ", pmhArray);

    this.setState({
      patient: thisPatient
    });
  }

  updateStringReactiveArray = (field, pmhObject) => {
    const thisPatient = this.state.patient;
    let pmhArray = thisPatient.past_medical_history[field];
  }

  removeItemsInArray = (field, where) => {
    const thisPatient = this.state.patient;
    let pmhArray = thisPatient.past_medical_history[field];
    if (typeof where === 'string') {
      const itemLocation = pmhArray.findIndex((item) => item.comorbidity === where);
      pmhArray.splice(itemLocation, 0);
    }

    this.setState({
      patient: thisPatient
    });
  }

  createNewApointment = () => { }

  // authStateObserver();

  render() {
    //:1 => if there is a user i.e. logged in, display the app
    if (this.state.user) {
      //:2 => if there is a selected patient, display the details
      return (
        <AppComponent currentView={this.state.patient ? "Patients" : "Dashboard"}
          dashboard={this.switchBackToDashboard} patient={this.state.patient}
          patients={this.state.patients} changePatient={this.onPatientChange}
          updateObjectField={this.updateObjectField} updateComplaints={this.updateComplaints}
          updatePMHArrays={this.updatePMHArrays} createNewPatient={this.onCreateIconClicked}
          updateItemsInArray={this.updateItemsInArray} >
          {
            this.state.patient ?
              null :
              <DashboardComponent
                recents={this.state.patients.filter(patient => patient.appointments.length === 1)
                  .sort((a, b) => b.first_seen - a.first_seen).slice(0, 3)} createNewPatient={this.onCreateIconClicked}>
                <PatientTableComponent patients={this.state.patients
                  .sort((a, b) => b.last_seen - a.last_seen).slice(0, 10)
                  .map((item) => {
                    item.biodata.primary_diagnosis = item.primary_diagnosis;
                    item.biodata.secondary_diagnosis = item.secondary_diagnosis;
                    item.biodata.first_seen = item.first_seen;
                    return item.biodata;
                  })} onItemClicked={this.onPatientTableClicked} />
              </DashboardComponent>
          }
        </AppComponent>
      )
    }
  }
}