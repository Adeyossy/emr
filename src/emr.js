import React from 'react';
import './emr.css';
import AuthComponent from './components/auth';
import { AppComponent } from './components/app.js';
import { getAppointment, getAppointmentWithDefaultValues, newEmrPatient, parseFromDatabase, parseOldPatient } from './models/patient';
import { authStateObserver, deleteFromStorage, getCurrentUser, signOut, signUserOut, uploadToStorage } from './modules/auth';
import DashboardComponent from './components/dashboard';
import PatientTableComponent from './components/dashboard/patient_table';
import { createDB, createNewDoc, deleteDoc, fetchFromRemote, getOfflineDocs, updateDoc } from './modules/db';
import NotificationComponent from './components/minicomponents/notification';
import { formsLookUp } from './models/forms';

export const PatientContext = React.createContext(null);

export class EMRComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      patients: [],
      filter: p => true,
      patient: null,
      emrContext: "Dashboard",
      isSignedIn: false,
      showNotification: false,
      info: "",
      showDialog: false,
      dialogMessage: "",
      dialogTitle: "",
      dialogAction: this.dismissDialog.bind(this),
      authComplete: false,
      hasDataChanged: false
    }

    this.intervalDuration = 5000
  }

  componentDidMount() {
    // "I am in main branch"
    authStateObserver(this.authStateChanged);

    this.setSavingInterval()
    setInterval(this.updateInterval, 15000)
    // getOfflineDocs(this.docsFromOfflineDB);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user === null && this.state.user) { }

    this.intervalDuration = 500;
  }

  componentWillUnmount() {
  }

  saveChanges = () => {
    if (this.state.patient) {
      updateDoc(this.state.patient);
    }
  }

  setSavingInterval = () => {
    this.savingInterval = setInterval(this.saveChanges, this.intervalDuration);
  }

  updateInterval = () => {
    this.intervalDuration += 5000
    clearInterval(this.savingInterval)
    this.setSavingInterval()
  }

  authStateChanged = (user) => {
    if (user) {
      createDB(user);
    }

    this.setState({
      user: user
    });
  }

  continueToApp = () => {
    this.setState({
      isSignedIn: true,
      showNotification: true,
      info: "Welcome"
    });

    setTimeout(() => {
      this.setState({
        showNotification: true,
        info: "Fetching your files"
      });
    }, 500);

    fetchFromRemote(this.docsFromOfflineDB);
    // getOfflineDocs(this.docsFromOfflineDB);
  }

  signUserIn = () => { }

  onUserSignOut = () => {
    this.setState({
      user: null,
      isSignedIn: false,
      patient: null,
      patients: [],
      authComplete: false
    });
  }

  dismissNotification = () => {
    this.setState({
      showNotification: false,
      info: ""
    });
  }

  docsFromOfflineDB = (docs) => {
    //We're expecting an array of object with 'doc' as the needed key for the value
    
    let dataFromDocs = docs.map(item => item.doc);

    // const data1Parsed = JSON.parse(JSON.stringify(data2));
    // console.log('parsed JSON file => ', data1Parsed);
    // let data = data1Parsed.rows.map(item => item.doc);
    //if there are any updates to the data structure
    // data = this.upgradeDataStructure(data);

    if (dataFromDocs.length > 0) {
      dataFromDocs = this.upgradeDataStructure(dataFromDocs);
      // if (dataFromDocs.find(item => item._id === "1636025887772"));
      // else
      // dataFromDocs.splice(dataFromDocs.length, 0, ...data);
    }

    // console.log("data1.json parsed => ", data);
    // console.log("new dataFromDocs => ", dataFromDocs);

    this.setState({
      patients: dataFromDocs,
      filteredPatients: dataFromDocs,
      authComplete: true
    });
  }

  upgradeDataStructure = (dataFromDocs) => {
    const currentAppointmentModel = getAppointment();
    const currentAppointmentModelKeys = Object.keys(currentAppointmentModel);

    const upgradedDataFromDocs = dataFromDocs.map((item, index) => {
      // console.log("item => ", item);
      // console.log("item.biodata => ", item.biodata);
      if (item.biodata) {
        let dbAppointmentKeys = [];
        //The next line is to prevent any unintended changes
        item = JSON.parse(JSON.stringify(item));
        item.appointments = item.appointments.map(apntmnt => {
          if (typeof apntmnt === 'object') {
            dbAppointmentKeys = Object.keys(apntmnt);
            currentAppointmentModelKeys.forEach((modelKey) => {
              if (apntmnt.hasOwnProperty(modelKey)) {
                if (apntmnt[modelKey]) {
                  if (typeof currentAppointmentModel[modelKey] === 'object') {
                    currentAppointmentModel[modelKey].notes = apntmnt[modelKey].notes;
                  }
                } else {
                  apntmnt[modelKey] = currentAppointmentModel[modelKey];
                }
              }
            });
          }

          item.appointment = apntmnt;
          return apntmnt;
        });

        // const isApt = apntmntItems.find(apt => apt.date_seen === item.last_seen);
        // item.appointment = isApt ? isApt : getAppointment();

        // console.log("Old patient data => ", item);
        return parseOldPatient.call(item);
      }

      const newData = new parseFromDatabase(item);
      return newData;
    });

    return upgradedDataFromDocs;
  }

  onCreateIconClicked = () => {
    // const newPatient = parseOldPatient.call(JSON.parse(JSON.stringify(getFreshPatient())));
    const newPatient = newEmrPatient();
    this.state.patients.push(newPatient);
    this.setState({
      patient: newPatient,
      emrContext: "Patients",
      showNotification: true,
      info: "New patient created"
    });

    //TODO: create on database as well
    createNewDoc(newPatient, null);
  }

  deletePatient = (id) => {
    // console.log("state patient id => ", this.state.patient._id);
    // console.log("id => ", id);
    const undeletedPatients = this.state.patients.filter(item => item._id !== id);
    if (this.state.patient._id === id) {
      const foundPatientLastName = this.state.patients.find(item => item._id === id).appointment.biodata.lastname;
      const deleteString = foundPatientLastName ? foundPatientLastName : "Patient";
      // console.log("true");
      this.setState({
        patient: null,
        patients: undeletedPatients,
        showNotification: true,
        info: `${deleteString} deleted`
      });
    } else {
      this.setState({
        patients: this.state.patients.filter(item => item._id !== id)
      });
    }

    //TODO: delete from database as well
    deleteDoc(id);
  }

  onPatientTableClicked = (id) => {
    // console.log("Patient appointments => ", this.state.patients.find((value) => id === value._id));
    this.setState({
      patient: this.state.patients.find((value) => id === value._id),
      emrContext: "Patients"
    });
  }

  onPatientChange = (patient) => {
    this.setState({
      patient: patient,
      showNotification: true,
      info: `Switched ${patient.appointment.biodata.firstname ? "to ".concat(patient.appointment.biodata.firstname.toUpperCase()) : "patient"}`
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

    // updateDoc(thisPatient);
  }

  updateComplaints = (name, value) => {
    const thisPatient = this.state.patient;
    const complaints = thisPatient.presenting_complaint;
    complaints.notes = value;
    this.setState({
      patient: thisPatient
    });
    // console.log("complaint notes => ", value);

    // updateDoc(thisPatient);
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

      case 5:
        return this.state.patient[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]]

      default:
        break;
    }
  }

  //Update already existing past medical history sections modelled with arrays
  updateAnyObject = (name, value, fields, index) => {
    const thisPatient = this.state.patient; //the current patient in the app
    // const pmh = thisPatient.past_medical_history; //access the past medical history of the patient
    const pmhArray = this.getWhereSwitched(fields);
    //get either hospitalization, surgery, blood transfusion and comorbidities
    // console.log("pmhArray => ", pmhArray);
    let pmhArrayItem = undefined;
    if (Array.isArray(pmhArray))
      pmhArrayItem = pmhArray[index];
    else
      pmhArrayItem = pmhArray;
    pmhArrayItem[name] = value;

    // console.log(name, " => ", this.state.patient.appointment.forms);

    this.setState({
      patient: thisPatient
    });

    // updateDoc(thisPatient);
  }

  //add or remove entire items (i.e an hospitalization history) in the past medical history array
  updateItemsInArray = (fields, pmhObject, value) => {
    const thisPatient = this.state.patient;
    let pmhArray = this.getWhereSwitched(fields);
    if (typeof value === 'number') {
      if (pmhArray.length < value) {
        let additions = new Array(value - pmhArray.length).fill(pmhObject);
        if (typeof pmhObject === 'object') {
          additions = additions.map(() => JSON.parse(JSON.stringify(pmhObject)));
        }
        pmhArray.splice(pmhArray.length, 0, ...additions);
      } else {
        pmhArray.splice(value, pmhArray.length - value);
      }
      //else if there is no numeric $value supplied, it is likely string or object
    } else {
      pmhArray.splice(0, pmhArray.length, ...pmhObject);
    }

    this.setState({
      patient: thisPatient
    });

    // updateDoc(thisPatient);
  }

  createNewAppointment = () => {
    const lastAppointment = this.state.patient.appointments
      .sort((a, b) => b.date_seen - a.date_seen)[0];
    const appointment = getAppointmentWithDefaultValues.call(lastAppointment);
    this.state.patient.last_seen = appointment.date_seen;
    this.state.patient.appointments.unshift(appointment);
    this.switchToAppointment(appointment);
  }

  switchToAppointment = (appointment) => {
    this.state.patient.appointment = appointment;
    // console.log("switched appointment forms => ", this.state.patient.appointment.forms);
    this.setState({
      patient: this.state.patient
    });

    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });

    // updateDoc(this.state.patient);
  }

  deleteAppointment = (date_seen) => {
    // console.log("deleteAppointment called => ", date_seen);
    if (this.state.patient.appointments.length > 1) {
      const patient = this.state.patient;
      patient.appointments = patient.appointments
        .filter(item => item.date_seen !== date_seen).sort((a, b) => b.date_seen - a.date_seen);
      patient.appointment = patient.appointments[0];
      patient.last_seen = patient.appointment[0].date_seen
      this.setState({
        patient: patient
      });
    } else { }

    // updateDoc(this.state.patient);
  }

  showDialog = (title, message, action) => {
    this.setState({
      showDialog: true,
      dialogMessage: message,
      dialogTitle: title,
      dialogAction: action
    });
  }

  dismissDialog = () => {
    this.setState({
      showDialog: false,
      dialogMessage: "",
      dialogTitle: ""
    });
  }

  addForm = (formTag) => {
    if (!this.state.patient.appointment.forms.hasOwnProperty(formTag)) {
      if (formsLookUp.hasOwnProperty(formTag)) {
        this.state.patient.appointment.forms[formTag] =
          JSON.parse(JSON.stringify(formsLookUp[formTag].model));
      }

      this.setState({
        patient: this.state.patient,
        showNotification: true,
        info: `${formTag.toUpperCase()} form added`
      });
    }

    // updateDoc(this.state.patient);
  }

  deleteForm = (formTag) => {
    if (this.state.patient.appointment.forms.hasOwnProperty(formTag)) {
      delete this.state.patient.appointment.forms[formTag]
    }

    this.setState({
      patient: this.state.patient,
      showNotification: true,
      info: `${formTag.toUpperCase()} form deleted`
    });

    // updateDoc(this.state.patient);
  }

  filterPatients = (sortString) => {
    sortString = String(sortString).toLowerCase();
    let filter = this.state.filter

    if (sortString.includes("=")) {
      const splitSortString = sortString.split("=", 2);
      const field = splitSortString[0].trim();
      const value = splitSortString[1].trim();

      if (field === 'name') {
        filter = patient => 
          patient.appointment.biodata.lastname.toLowerCase().includes(value) ||
          patient.appointment.biodata.middlename.toLowerCase().includes(value) ||
          patient.appointment.biodata.firstname.toLowerCase().includes(value)
      }

      if (field === '#') {
        filter = patient =>
          String(patient.appointment.biodata.id).includes(value)
      }

      if (field === 'n') {
        filter = patient =>
          patient.appointments.length >= Number(value);
      }

      if (field === 'd' || field.includes('diagnosis')) {
        filter = patient =>
          String(patient.primary_diagnosis).toLowerCase().includes(value) ||
          String(patient.secondary_diagnosis).toLowerCase().includes(value)
      }

      if (field === 'dd' || field.includes('differential')) {
        filter = patient =>
          String(patient.secondary_diagnosis).toLowerCase().includes(value)
      }
    } else {
    }

    this.setState({
      filter: filter
    });
  }

  sortPatients = (sortBy) => {
    let sorter = (a, b) => 0

    if (sortBy === "name") {
      sorter = (a, b) => {
          if (a.appointment.biodata.lastname.toLowerCase()
            < b.appointment.biodata.lastname.toLowerCase())
            return -1;
        };
    }

    if (sortBy === "age") {
      sorter = (a, b) => 
        a.appointment.biodata.ageinyears - b.appointment.biodata.ageinyears;
    }

    if (sortBy === "id") {
      sorter = (a, b) => a.appointment.biodata.id - b.appointment.biodata.id;
    }

    if (sortBy === "d") {
      sorter = (a, b) => a.primary_diagnosis.toLowerCase() <
          b.primary_diagnosis.toLowerCase() ? -1 : 0;
    }

    if (sortBy === "d") {
      sorter = (a, b) => a.secondary_diagnosis.toLowerCase()
          < b.secondary_diagnosis.toLowerCase() ? -1 : 0;
    }

    this.setState({
      patients: this.state.patients.sort(sorter)
    });
  }

  createUploadItem = (modality, uploadItem) => {
    const currentPatient = this.state.patient;
    const invModality = currentPatient.appointment[modality];
    if (!invModality.hasOwnProperty('uploads') || !Array.isArray(invModality.uploads)) {
      invModality.uploads = [];
    }

    invModality.uploads.push(uploadItem);

    this.setState({
      patient: currentPatient
    });

    // updateDoc(this.state.patient);
  }

  beginUpload = (modality, uploadID, updateCallback) => {
    const itemForUpload = this.state.patient.appointment[modality].uploads
      .find(uploadItem => uploadItem.id === uploadID);
    getCurrentUser(uploadToStorage.bind(Object.create(null), modality, itemForUpload, (info) => {
      this.setState({
        showNotification: true,
        info: info
      });
    }, this.afterUpload.bind(this, modality, itemForUpload.id), updateCallback));
  }

  afterUpload = (modality, uploadID, downloadURL) => {
    const itemForUpload = this.state.patient.appointment[modality].uploads
      .find(uploadItem => uploadItem.id === uploadID);
    itemForUpload.downloadURL = downloadURL;

    this.setState({
      patient: this.state.patient
    });

    // updateDoc(this.state.patient);
  }

  deleteUpload = (modality, uploadID) => {
    const thisPatient = this.state.patient;
    let uploads = thisPatient.appointment[modality].uploads;
    this.state.patient.appointment[modality].uploads =
      uploads.filter((upload) => upload.id !== uploadID);

    this.setState({
      patient: thisPatient,
      showNotification: true,
      info: "Successfully Deleted"
    });

    // updateDoc(this.state.patient);
  }

  render() {
    if (this.state.isSignedIn) {
      return (
        <>
          <NotificationComponent showNotification={this.state.showNotification}
            info={this.state.info} dismissNotification={this.dismissNotification} />
          <AppComponent currentView={this.state.patient ? "Patients" : "Dashboard"}
            dashboard={this.switchBackToDashboard} patient={this.state.patient}
            patients={this.state.patients.filter(this.state.filter)}
            deletePatient={this.deletePatient} changePatient={this.onPatientChange}
            updateObjectField={this.updateObjectField} updateComplaints={this.updateComplaints}
            updateAnyObject={this.updateAnyObject} createNewPatient={this.onCreateIconClicked}
            updateItemsInArray={this.updateItemsInArray}
            switchToAppointment={this.switchToAppointment}
            createNewAppointment={this.createNewAppointment}
            onUserSignOut={this.onUserSignOut} showDialogOnClick={this.showDialog}
            showDialog={this.state.showDialog} dialogMessage={this.state.dialogMessage}
            dismissDialog={this.dismissDialog} dialogAction={this.state.dialogAction}
            dialogTitle={this.state.dialogTitle} user={this.state.user}
            deleteAppointment={this.deleteAppointment} addForm={this.addForm}
            deleteForm={this.deleteForm} filterPatients={this.filterPatients}
            createUploadItem={this.createUploadItem} beginUpload={this.beginUpload}
            deleteUpload={this.deleteUpload}>
            {
              this.state.patient !== null ?
                null :
                <DashboardComponent
                  recents={this.state.patients.filter(patient => patient.appointments.length === 1)
                    .sort((a, b) => b._id - a._id).slice(0, 3)}
                  createNewPatient={this.onCreateIconClicked}
                  viewPatient={this.onPatientTableClicked} user={this.state.user}>
                  <PatientTableComponent patients={this.state.patients.filter(this.state.filter)}
                    onItemClicked={this.onPatientTableClicked}
                    authComplete={this.state.authComplete}
                    sortPatients={this.sortPatients} />
                </DashboardComponent>
            }
          </AppComponent>
        </>
      )
    } else {
      return (
        <>
          <NotificationComponent />
          <AuthComponent signIn={this.signUserIn} continueToApp={this.continueToApp}
            user={this.state.user}
          />
        </>
      )
    }
  }
}