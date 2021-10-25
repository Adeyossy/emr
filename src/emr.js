import React from 'react';
import './emr.css';
import { AppComponent } from './components/app.js';
import { getAppointment, getFreshPatient, patient } from './models/patient';
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
    this.state.patients.push(newPatient);
    this.setState({
      patient: newPatient,
      emrContext: "Patients"
    });

    //TODO: create on database as well
  }

  deletePatient = (id) => {
    // console.log("state patient id => ", this.state.patient.id);
    // console.log("id => ", id);
    const undeletedPatients = this.state.patients.filter(item => item.id !== id);
    if (this.state.patient.id === id) {
      // console.log("true");
      this.setState({
        patient: null,
        patients: undeletedPatients
      });
    } else {
      this.setState({
        patients: this.state.patients.filter(item => item.id !== id)
      });
    }

    //TODO: delete from database as well
  }

  onPatientTableClicked = (dateId) => {
    this.setState({
      patient: this.state.patients.find((value) => dateId === value.id),
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

  updateObjectField = (name, value, fields) => {
    const thisPatient = this.state.patient;
    const thisField = this.getWhereSwitched(fields);
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
  updateAnyObject = (name, value, fields, index) => {
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
    // console.log("pmhArray => ", pmhArray);
    // console.log("fields => ", fields);
    if (value) {
      if (pmhArray.length < value) {
        let additions = new Array(value - pmhArray.length).fill(pmhObject);
        if (typeof pmhObject === 'object') {
          additions = additions.map(() => JSON.parse(JSON.stringify(pmhObject)));
        }
        pmhArray.splice(pmhArray.length, 0, ...additions);
      } else {
        pmhArray.splice(value, pmhArray.length - value);
      }
    } else {
      if (typeof pmhObject === 'object') {
        pmhArray = pmhArray.filter((item) => !Object.is(item, pmhObject));
      }

      if (typeof pmhObject === 'object') {
        pmhArray = pmhArray.filter((item) => item !== pmhObject);
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

  createNewAppointment = () => {
    const appointment = getAppointment();
    this.state.patient.last_seen = appointment.date_seen;
    this.state.patient.appointments.unshift(appointment);
    this.switchToAppointment(appointment);
  }

  switchToAppointment = (appointment) => {
    console.log("appointment => ", appointment);
    this.state.patient.appointment = appointment;
    this.setState({
      patient: this.state.patient
    });
  }

  componentDidUpdate() {
    console.log("patient => ", this.state.patient);
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
          deletePatient={this.deletePatient}
          updateObjectField={this.updateObjectField} updateComplaints={this.updateComplaints}
          updateAnyObject={this.updateAnyObject} createNewPatient={this.onCreateIconClicked}
          updateItemsInArray={this.updateItemsInArray}
          switchToAppointment={this.switchToAppointment}
          createNewAppointment={this.createNewAppointment} >
          {
            this.state.patient !== null ?
              null :
              <DashboardComponent
                recents={this.state.patients.filter(patient => patient.appointments.length === 1)
                  .sort((a, b) => b.id - a.id).slice(0, 3)}
                createNewPatient={this.onCreateIconClicked}>
                <PatientTableComponent patients={this.state.patients
                  .sort((a, b) => b.last_seen - a.last_seen).slice(0, 10)
                  .map((item) => {
                    item.biodata.primary_diagnosis = item.primary_diagnosis;
                    item.biodata.secondary_diagnosis = item.secondary_diagnosis;
                    item.biodata.patient_id = item.id;
                    return item.biodata;
                  })} onItemClicked={this.onPatientTableClicked} />
              </DashboardComponent>
          }
        </AppComponent>
      )
    }
  }
}