import React from 'react';
import './emr.css';
import AuthComponent from './components/auth';
import { AppComponent } from './components/app.js';
import { getAppointment, getAppointmentWithDefaultValues, newEmrPatient, parseFromDatabase, parseOldPatient } from './models/patient';
import { authStateObserver, backup, downloadBackup, getCurrentUser, uploadToStorage } from './modules/auth';
import DashboardComponent from './components/dashboard';
import PatientTableComponent from './components/dashboard/patient_table';
import { createDB, createNewDoc, deleteDoc, fetchFromRemote, getOfflineDocs, restoreCloudBackup, updateDoc } from './modules/db';
import NotificationComponent from './components/minicomponents/notification';
import { formsLookUp } from './models/forms';
import BackDropComponent from './components/minicomponents/backdrop';
import ActionDialogComponent from './components/minicomponents/action_dialog';
import SelectDialogComponent from './components/minicomponents/select_dialog';
import NoDuplicatesComponent from './components/minicomponents/no_duplicates';

export const PatientContext = React.createContext(null);

export class EMRComponent extends React.Component {
  constructor(props) {
    super(props);

    this.dialog = { message: "", title: "", action: this.dismissDialog.bind(this) }

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
      dialog: this.dialog,
      dialogID: 0,
      authComplete: false,
      hasDataChanged: false,
      downloadURL: ''
    }

    this.timeNow = Date.now();
  }

  componentDidMount() {
    authStateObserver(this.authStateChanged);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user === null && this.state.user) { }

    if ((Date.now() - this.timeNow) > 5000) {
      setTimeout(this.saveChanges.bind(this), 5000);
      // this.saveChanges();
      this.timeNow = Date.now();
    }
    // this.intervalDuration = 500;
  }

  componentWillUnmount() {
  }

  saveChanges = () => {
    if (this.state.patient) {
      updateDoc(this.state.patient);
    }
  }

  createBackup = () => {
    // create backup when the user clicks it.
    // Maintain 1 backup
    backup(this.state.patients, this.state.user)
      .then((uploadResult => {
        this.setState({
          showNotification: true,
          info: "Backup Created Successfully"
        });
      }))
      .catch((err) => {
        // console.log(err);
        this.setState({
          showNotification: true,
          info: "Error creating backup"
        });
      });
  }

  restoreBackup = () => {
    this.switchBackToDashboard();
    this.setState({
      authComplete: false
    });
    let docs = [];
    downloadBackup(this.state.user)
      .then(url => fetch(url))
      .then(response => response.json())
      .then(patients => {
        docs = patients;
        return restoreCloudBackup(patients)
      })
      .then(responses => {
        // console.log(responses);
        getOfflineDocs(this.docsFromOfflineDB)
        this.setState({
          showNotification: true,
          info: 'Backup Restored'
        });
        responses.filter(response => response.status === 'rejected')
          .filter(rejected => rejected.reason.message === 'missing')
          .forEach((item) => {
            console.log('item => ', item);
            const deletedDoc = docs.find(doc => doc._id === item.reason.docId);
            if (deletedDoc) {
              console.log('there is a deleted doc');
              // deletedDoc._id = Date.now().toString();
              // const patients = this.state.patients;
              // patients.push(...this.upgradeDataStructure([deletedDoc]));
              // this.setState({
              //   showNotification: true,
              //   info: 'Restored Deleted Files',
              //   patients: patients
              // });
              // // createNewDoc(deletedDoc);
              // docs.filter(doc => doc._id === item.reason.docId)
              //   .forEach(doc => {
              //   });
            }
          });


        // this.switchBackToDashboard();
        // getOfflineDocs(this.docsFromOfflineDB);
      }).catch(err => {
        // console.log(err);
        this.setState({
          showNotification: true,
          info: 'Error Restoring Backup'
        });
      });
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
    if (docs.length > 0) {
      docs = this.upgradeDataStructure(docs);
    }

    this.setState({
      patients: docs,
      filteredPatients: docs,
      authComplete: true,
      downloadURL: URL.createObjectURL(new Blob([JSON.stringify(docs)],
        { type: 'application/json' }))
    });
  }

  upgradeDataStructure = (dataFromDocs) => {
    const currentAppointmentModel = getAppointment(Date.now());
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

          if (Object.hasOwn(item, 'appointment')) {
            console.log('appointment exists');
            if (item.appointment.date_seen === apntmnt.date_seen) {
              console.log('appointment assigned');
              apntmnt = item.appointment;
            }
          }

          item[apntmnt.date_seen.toString()] = apntmnt;

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
    this.showDialog({
      title: "Create New Patient",
      message: "Fill in the name or hospital number of the patient below",
      action: this.createNewPatient
    }, 3);
  }

  createNewPatient = (name, id) => {
    // const newPatient = parseOldPatient.call(JSON.parse(JSON.stringify(getFreshPatient())));
    const newPatient = newEmrPatient();
    if (name) {
      const [lastname, firstname] = name.split(" ");
      newPatient[newPatient.last_viewed].biodata.firstname = firstname;
      newPatient[newPatient.last_viewed].biodata.lastname = lastname;
    }

    if (id) {
      newPatient[newPatient.last_viewed].biodata.id = id;
    }
    // newPatient.appointment = newPatient.appointments[0];
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
    const undeletedPatients = this.state.patients.filter(item => item._id !== id);
    if (this.state.patient._id === id) {
      const foundPatient = this.state.patients
        .find(item => item._id === id);
      const foundPatientLastName = foundPatient[foundPatient.last_viewed].biodata.lastname;
      const deleteString = foundPatientLastName ? foundPatientLastName : "Patient";
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
    const patient = this.state.patients.find((value) => id === value._id);

    this.setState({
      patient: patient,
      emrContext: "Patients"
    });
  }

  onPatientChange = (patient) => {
    this.setState({
      patient: patient,
      showNotification: true,
      info: `Switched ${patient[patient.last_viewed].biodata.firstname ?
        "to ".concat(patient[patient.last_viewed].biodata.firstname.toUpperCase()) : "patient"}`
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

      case 6:
        return this.state.patient[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]][fields[5]]

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
    const patient = this.state.patient;
    // if (patient.appointments.length > 1) {
    //   patient.appointments.sort((a, b) => b.date_seen - a.date_seen);
    // }
    patient.appointment_keys.sort((a, b) => b - a);
    const lastAppointment = patient[patient.appointment_keys[0]];
    const last_seen = Date.now();
    const appointment = getAppointmentWithDefaultValues.call(lastAppointment, last_seen);
    patient.last_seen = last_seen;
    patient.last_viewed = last_seen.toString();
    patient[last_seen.toString()] = appointment;
    patient.appointment_keys.push(last_seen.toString());
    // patient.appointments.unshift(appointment);
    this.setState({
      patient: patient
    });
    this.switchToAppointment(last_seen);
  }

  switchToAppointment = (date_seen) => {
    const patient = this.state.patient;
    // patient.appointment = patient.appointments.find(apntmnt =>
    //   apntmnt.date_seen === date_seen);
    // console.log("switched appointment forms => ", this.state.patient.appointment.forms);
    patient.last_viewed = date_seen.toString();

    this.setState({
      patient: patient
    });

    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });

    // updateDoc(this.state.patient);
  }

  deleteAppointment = (date_seen) => {
    // console.log("deleteAppointment called => ", date_seen);
    if (this.state.patient.appointment_keys.length > 1) {
      const patient = this.state.patient;
      patient.appointment_keys = patient.appointment_keys
        .filter(key => String(key) !== date_seen.toString()).sort((a, b) => b - a);
      patient.last_viewed = patient.appointment_keys[0];
      patient.last_seen = parseInt(patient.appointment_keys[0]);
      this.setState({
        patient: patient
      });
    } else { }

    // updateDoc(this.state.patient);
  }

  showDialog = (dialog, id) => {
    this.setState({
      showDialog: true,
      dialog: dialog,
      dialogID: id
    });
  }

  dismissDialog = () => {
    this.setState({
      showDialog: false,
      dialog: Object.create(this.dialog),
      dialogID: 0
    });
  }

  addForm = (formTag) => {
    if (!this.state.patient[this.state.patient.last_viewed].forms.hasOwnProperty(formTag)) {
      if (formsLookUp.hasOwnProperty(formTag)) {
        this.state.patient[this.state.patient.last_viewed].forms[formTag] =
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
    if (this.state.patient[this.state.patient.last_viewed].forms.hasOwnProperty(formTag)) {
      delete this.state.patient[this.state.patient.last_viewed].forms[formTag]
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
          patient[patient.last_viewed].biodata.lastname.toLowerCase().includes(value) ||
          patient[patient.last_viewed].biodata.middlename.toLowerCase().includes(value) ||
          patient[patient.last_viewed].biodata.firstname.toLowerCase().includes(value)
      }

      if (field === '#') {
        filter = patient =>
          String(patient[patient.last_viewed].biodata.id).includes(value)
      }

      if (field === 'n') {
        filter = patient =>
          patient.appointment_keys.length >= Number(value);
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
        if (a[a.last_viewed].biodata.lastname.toLowerCase()
          < b[b.last_viewed].biodata.lastname.toLowerCase())
          return -1;
      };
    }

    if (sortBy === "age") {
      sorter = (a, b) =>
        a[a.last_viewed].biodata.ageinyears - b[b.last_viewed].biodata.ageinyears;
    }

    if (sortBy === "id") {
      sorter = (a, b) => a[a.last_viewed].biodata.id - b[b.last_viewed].biodata.id;
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
    const invModality = currentPatient[currentPatient.last_viewed][modality];
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
    const itemForUpload = this.state.patient[this.state.patient.last_viewed][modality].uploads
      .find(uploadItem => uploadItem.id === uploadID);
    getCurrentUser(uploadToStorage.bind(Object.create(null), modality, itemForUpload, (info) => {
      this.setState({
        showNotification: true,
        info: info
      });
    }, this.afterUpload.bind(this, modality, itemForUpload.id), updateCallback));
  }

  afterUpload = (modality, uploadID, downloadURL) => {
    const itemForUpload = this.state.patient[this.state.patient.last_viewed][modality].uploads
      .find(uploadItem => uploadItem.id === uploadID);
    itemForUpload.downloadURL = downloadURL;

    this.setState({
      patient: this.state.patient
    });

    // updateDoc(this.state.patient);
  }

  deleteUpload = (modality, uploadID) => {
    const thisPatient = this.state.patient;
    let uploads = thisPatient[thisPatient.last_viewed][modality].uploads;
    thisPatient[thisPatient.last_viewed][modality].uploads =
      uploads.filter((upload) => upload.id !== uploadID);

    this.setState({
      patient: thisPatient,
      showNotification: true,
      info: "Successfully Deleted"
    });

    // updateDoc(this.state.patient);
  }

  openDataExporter = () => {
    this.showDialog({
      title: "Data Exporter",
      message: "Select the data you want to export",
      action: this.dismissDialog.bind(this)
    }, 4);
  }

  render() {
    if (this.state.isSignedIn) {
      return (
        <>
          <BackDropComponent showDialog={this.state.showDialog}>
            {
              this.state.dialogID === 1
                ?
                <SelectDialogComponent dialog={this.state.dialog}
                  dismissDialog={this.dismissDialog} />
                : null
            }
            {
              this.state.dialogID === 2 ?
                <ActionDialogComponent dismissDialog={this.dismissDialog}
                  dialog={this.state.dialog} />
                : null
            }
            {
              this.state.dialogID === 3 ?
                <NoDuplicatesComponent dismissDialog={this.dismissDialog}
                  dialog={this.state.dialog} patients={this.state.patients}
                  onPatientClicked={this.onPatientTableClicked} />
                : null
            }
            {
              this.state.dialogID === 4 ?
                <NoDuplicatesComponent dismissDialog={this.dismissDialog}
                  dialog={this.state.dialog} patients={this.state.patients} />
                : null
            }
          </BackDropComponent>
          <NotificationComponent showNotification={this.state.showNotification}
            info={this.state.info} dismissNotification={this.dismissNotification} />
          <AppComponent currentView={this.state.patient ? "Patients" : "Dashboard"}
            dashboard={this.switchBackToDashboard} patient={this.state.patient}
            patients={this.state.patients.filter(this.state.filter)}
            deletePatient={this.deletePatient} changePatient={this.onPatientChange}
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
            deleteUpload={this.deleteUpload} createBackup={this.createBackup}
            restoreBackup={this.restoreBackup} openDataExporter={this.openDataExporter} >
            {
              this.state.patient !== null ?
                null :
                <DashboardComponent
                  recents={this.state.patients.filter(patient => patient.appointment_keys.length === 1)
                    .sort((a, b) => b._id - a._id).slice(0, 3)} downloadURL={this.state.downloadURL}
                  createNewPatient={this.onCreateIconClicked} patients={this.state.patients}
                  viewPatient={this.onPatientTableClicked} user={this.state.user}
                  createBackup={this.createBackup}>
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