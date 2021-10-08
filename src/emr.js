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
    this.setState({
      patient: newPatient,
      emrContext: "Patients"
    });
    this.state.patients.unshift(newPatient);
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

  updatePMHArrays = (name, value, field, index) => {
    const thisPatient = this.state.patient; //the current patient in the app
    const pmh = thisPatient.past_medical_history; //access the past medical history of the patient
    const pmhArray = pmh[field]; //get either hospitalization, surgery, blood transfusion and comorbidities
    const pmhArrayItem = pmhArray[index];
    pmhArrayItem[name] = value;
    this.setState({
      patient: thisPatient
    });
  }

  updateNumber = (name, value) => {
    const thisPatient = this.state.patient;
    thisPatient[name] = value;
  }

  updateItemsInArray = (field, pmhObject, value) => {
    const thisPatient = this.state.patient;
    let pmhArray = thisPatient.past_medical_history[field];
    console.log("pmhArray.length => ", pmhArray.length);
    console.log("new length => ", value);

    if (field === "comorbidities") {
      pmhArray.splice(pmhArray.length, 0, pmhObject);
    } else {
      if (pmhArray.length < value) {
        // pmhArray = pmhArray.fill(pmhObject, pmhArray.length, value);
        // pmhArray.forEach((element) => pmhArray.push(pmhObject));
        pmhArray.splice(pmhArray.length, 0, pmhObject);
      } else {
        pmhArray = pmhArray.slice(0, value);
      }
    }

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
          updatePMHArrays={this.updatePMHArrays}
          updateItemsInArray={this.updateItemsInArray}>
          {
            this.state.patient ?
              null :
              <DashboardComponent
                recents={this.state.patients.filter(patient => patient.number_of_appointments === 1)
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