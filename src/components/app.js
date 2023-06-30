import React from "react";
import "./app.css";
import NavComponent from "./nav";
import MainComponent from "./main";
import LeftSideBarComponent from "./leftsidebar";
import BiodataComponent from "./history/biodata";
import ComplaintComponent from "./history/complaint";
import RoSComponent from "./history/ros";
import PMHComponent from "./history/pmh";
import DrugsAllergiesComponent from "./history/drug_allergies";
import FSHxComponent from "./history/fshx";
import AxisIComponent from "./epilepsy/axis_i";
import AxisIIComponent from "./epilepsy/axis_ii";
import AxisIIIComponent from "./epilepsy/axis_iii";
import AxisIVComponent from "./epilepsy/axis_iv";
import AxisVComponent from "./epilepsy/axis_v";
import GeneralExamComponent from "./examination/general";
import NeuroExamComponent from "./examination/neuro";
import CVSExamComponent from "./examination/cardiovascular";
import ChestExamComponent from "./examination/chest";
import AbdominalExamComponent from "./examination/abdomen";
import OtherExamComponent from "./examination/others";
import Selectable from "./selectable";
import NotesOnlyComponent from "./minicomponents/notes_only";
import { PatientContext } from "../models/patient_context";
import OverviewComponent from "./overview";
import TabComponent from "./tabs";
import GCSComponent from "./forms/neuro_gcs";
import BackDropComponent from "./minicomponents/backdrop";
import ActionDialogComponent from "./minicomponents/action_dialog";
import SelectDialogComponent from "./minicomponents/select_dialog";
import MMSEComponent from "./forms/neuro_mmse";
import FormComponent from "./forms/form";
import { formsLookUp } from "../models/forms";
import FormSingleComponent from "./forms/form_single";
import InvestigationComponent from "./investigation/investigation";
import BottomNavComponent from "./bottom_nav";

export class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.componentItems = [
      ["Biodata", "Complaint", "RoS", "PMH", "Drug | Allergy", "FSHx"],
      ["Axis I", "Axis II", "Axis III", "Axis IV", "Axis V"],
      [],
      ["General", "Neuro", "CVS", "Chest", "Abdomen", "Other"],
      ["Imaging", "Electrical", "Haematology", "Labs", "Microbiology", "Procedures"],
      ["Assessment", "Plan", "Monitoring"],
      ["Pharmacological", "Nonpharmacological", "Other"]
    ];

    this.tabState = this.componentItems.map(item => item.slice().fill("selected", 0, 1)
      .fill("", 1, item.length));

    this.state = {
      navState: ["", "", "", "", "", "", ""], //history, Epilepsy form, other forms, examination, investigations, assessment, treatment
      navIndex: 0,
      contextItems: ["Dashboard", "Patients", "Investigations"],
      tabIndex: [0, 0, 0, 0, 0, 0, 0],
      showOverview: false,
      booleanState: false,
      isDrawerOpen: false
    }
  }

  componentDidMount() {

    window.addEventListener('keydown', (e) => {
      const focusedElement = document.activeElement.tagName.toLowerCase();
      
      if (focusedElement === 'input' || focusedElement === 'textarea') {
      } else {
        if (this.props.patient) {
          let index = this.state.tabIndex[this.state.navIndex]; //last value
          if (e.key === "ArrowRight") {
            index += 1; //new value
            this.onHotkeysPressed(index);
            // handleAnimations(++currentNumber, "animateInClass");
          }

          if (e.key === "ArrowLeft") {
            console.log("Left arrow pressed");
            index -= 1;
            this.onHotkeysPressed(index);
            // handleAnimations(--currentNumber, "animateOutClass");
          }
        }
      }
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (!prevProps.patient && this.props.patient) {
    //   this.addFormFields();
    // }

    // if (prevProps.patient && this.props.patient
    //   && prevProps.patient._id !== this.props.patient._id) {
    //   this.addFormFields();
    // }
  }

  onHotkeysPressed = (newValue) => {
    if (newValue < this.tabState[this.state.navIndex].length) {
      if (newValue >= 0) {
        this.updateTabState(newValue);
      } else {
        if (this.state.navIndex > 0) {
          this.updateNavState(this.state.navIndex - 1);
        }
      }
    } else {
      if (this.state.navIndex < this.tabState.length - 1) {
        this.updateNavState(this.state.navIndex + 1);
      }
    }
  }

  setOverview = () => {
    this.setState({
      showOverview: !this.state.showOverview
    });
  }

  updateNavState = (index) => {
    let navState = this.state.navState;
    navState = navState.fill("");
    navState[index] = "selected";
    this.setState({
      navState: navState,
      navIndex: index
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  changeDrawerState = () => {
    this.setState(
      {
        isDrawerOpen: !this.state.isDrawerOpen
      }
    )
  }

  deselectAnyActiveToolbar = () => {
    let navState = this.state.navState;
    navState = navState.fill("");
    this.setState({
      navState: navState,
      navIndex: null
    });
  }

  updateTabState = (index) => {
    let stateFromItems = this.tabState[this.state.navIndex];
    stateFromItems = stateFromItems.fill("");
    stateFromItems[index] = "selected";
    this.tabState[this.state.navIndex] = stateFromItems;

    let tabIndex = this.state.tabIndex.slice();
    tabIndex[this.state.navIndex] = index;

    this.setState({
      tabIndex: tabIndex
    });
  }

  showFormSelectionDialog = (booleanState) => {
    this.props.showDialogOnClick("Forms", "Choose from the list of available forms",
      this.props.addForm);

    this.setState({
      booleanState: true
    });
  }

  otherFormsUpdate = () => {
    const keys = Object.keys(this.props.patient.appointment.forms)
      .filter(item => item !== 'epilepsy');

    const components = keys.map(key => {
      if (formsLookUp[key].type === "sum") {
        return <FormComponent name={formsLookUp[key].title} form={formsLookUp[key].items}
          formTag={key} updateAnyObject={this.props.updateAnyObject}
          deleteForm={this.props.deleteForm}
        />
      }
      // if (formsLookUp[key].type === "single") {
      return <FormSingleComponent name={formsLookUp[key].title} form={formsLookUp[key].items}
        formTag={key} updateAnyObject={this.props.updateAnyObject}
        deleteForm={this.props.deleteForm}
      />
    }
    );

    const tabs = keys.map(key => key.toUpperCase());

    return [tabs, components];
  }

  updateFormState = (whereToSelect) => {
    this.state.tabState[2] = this.state.componentItems[2].slice().fill("");

    this.setState({
      otherFormsComponents: this.state.otherFormsComponents,
      componentItems: this.state.componentItems,
      tabIndex: this.state.tabIndex
    });
  }

  addFormFields = (whereToSelect) => {
    const tabToSelect = whereToSelect ? whereToSelect : 0;
    this.cleanUpFormFields();
    const forms = this.props.patient.appointment.forms;
    console.log("Forms => ", forms);
    if (forms.hasOwnProperty('gcs')) {
      this.state.otherFormsComponents.push(
        <GCSComponent updateAnyObject={this.props.updateAnyObject}
          patient={this.props.patient} />
      );

      this.state.componentItems[2].push("GCS");
    }

    if (forms.hasOwnProperty('mmse')) {
      this.state.otherFormsComponents.push(
        <MMSEComponent updateAnyObject={this.props.updateAnyObject}
          patient={this.props.patient} />
      );

      this.state.componentItems[2].push("MMSE");
    }

    const localTabState = this.state.tabState;
    localTabState[2] = this.state.componentItems[2].slice().fill("");
    localTabState[2][tabToSelect] = "selected";

    // Get the tab index of the app and reselect as appropriate
    const localTabIndex = this.state.tabIndex
    localTabIndex[2] = tabToSelect;

    this.setState({
      tabState: localTabState,
      otherFormsComponents: this.state.otherFormsComponents,
      componentItems: this.state.componentItems,
      tabIndex: localTabIndex
    });
  }

  processFormSelection = (formTag) => {
    this.props.dialogAction(formTag);
  }

  onFormSelectionDismissed = () => {
    this.props.dismissDialog();
    this.setState({
      booleanState: false
    });
  }

  render() {
    const historyComponents = [
      <BiodataComponent patient={this.props.patient}
        updateAnyObject={this.props.updateAnyObject} />,
      <ComplaintComponent updateComplaints={this.props.updateComplaints}
        updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />,
      <RoSComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />,
      <PMHComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />,
      <DrugsAllergiesComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />,
      <FSHxComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />];

    //Tabbed components under Epilepsy
    const epilepsyComponents = [<AxisIComponent updateAnyObject={this.props.updateAnyObject}
      updateItemsInArray={this.props.updateItemsInArray} />,
    <AxisIIComponent updateAnyObject={this.props.updateAnyObject}
      updateItemsInArray={this.props.updateItemsInArray} />,
    <AxisIIIComponent updateAnyObject={this.props.updateAnyObject}
      updateItemsInArray={this.props.updateItemsInArray} />,
    <AxisIVComponent updateAnyObject={this.props.updateAnyObject}
      updateItemsInArray={this.props.updateItemsInArray} />,
    <AxisVComponent updateAnyObject={this.props.updateAnyObject}
      updateItemsInArray={this.props.updateItemsInArray} />];

    //Tabbed components under Other Forms
    const otherForms = this.props.patient ? this.otherFormsUpdate() : [[], []];
    this.componentItems[2] = otherForms[0];
    const otherFormsComponents = otherForms[1];

    //Tabbed components under Examination
    const examComponents = [
      <GeneralExamComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />,
      <NeuroExamComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />,
      <CVSExamComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />,
      <ChestExamComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />,
      <AbdominalExamComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />,
      <OtherExamComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray} />]

    //Tabbed components under Other Forms
    // this.investigationsComponents = [ <NotesOnlyComponent notesHeader={"Imaging"} /> ];
    const investigationsComponents = this.componentItems[4].map((item) =>
      <InvestigationComponent modality={item.toLowerCase()}
        createUploadItem={this.props.createUploadItem}
        updateAnyObject={this.props.updateAnyObject}
        beginUpload={this.props.beginUpload} deleteUpload={this.props.deleteUpload}
        showDialog={this.props.showDialogOnClick}>
        <NotesOnlyComponent fields={[item.toLowerCase()]}
          updateAnyObject={this.props.updateAnyObject} notesHeader={item} />
      </InvestigationComponent>);

    //Tabbed components under Other Forms
    // this.assessmentComponents = [  ];
    const assessmentComponents = this.componentItems[5].map((item) =>
      <NotesOnlyComponent fields={[item.toLowerCase()]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={item}
        value={item.toLowerCase()} />);

    //Tabbed components under Other Forms
    const treatmentComponents = this.componentItems[6].map((item) =>
      <NotesOnlyComponent fields={[item.toLowerCase()]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={item}
        value={item.toLowerCase()} />);

    const componentContents = [historyComponents, epilepsyComponents, otherFormsComponents,
      examComponents, investigationsComponents, assessmentComponents,
      treatmentComponents];

    this.tabState = this.componentItems.map(item => item.slice().fill(""));

    return (
      <>
        <BackDropComponent showDialog={this.props.showDialog}>
          {
            this.props.showDialog && this.state.booleanState
              ?
              <SelectDialogComponent dismissDialog={this.onFormSelectionDismissed}
                dialogMessage={this.props.dialogMessage} dialogAction={this.processFormSelection}
                dialogTitle={this.props.dialogTitle} />
              :
              <ActionDialogComponent dismissDialog={this.props.dismissDialog}
                dialogMessage={this.props.dialogMessage} dialogAction={this.props.dialogAction}
                dialogTitle={this.props.dialogTitle} />
          }
        </BackDropComponent>
        <nav>
          <NavComponent navAppBarState={this.state.navState} changeState={this.updateNavState}
            dashboard={this.props.dashboard} patientView={this.props.patientView}
            currentView={this.props.currentView} navIndex={this.state.navIndex}
            patient={this.props.patient} createNewPatient={this.props.createNewPatient}
            onUserSignOut={this.props.onUserSignOut} user={this.props.user}
            filterPatients={this.props.filterPatients} isDrawerOpen={this.state.isDrawerOpen}
            changeDrawerState={this.changeDrawerState}
          />
        </nav>
        {this.props.patient && this.props.patient.appointment ?
          <BottomNavComponent changeState={this.updateNavState}
            navIndex={this.state.navIndex} /> : null
        }
        {
          this.props.children ? this.props.children :
            <PatientContext.Provider value={this.props.patient}>
              <MainComponent navIndex={this.state.navIndex} dashboard={this.props.dashboard}
                updateAnyObject={this.props.updateAnyObject}
                isDrawerOpen={this.state.isDrawerOpen}>
                {this.state.isDrawerOpen ?
                  <LeftSideBarComponent patient={this.props.patient}
                    patients={this.props.patients} changePatient={this.props.changePatient}
                    deletePatient={this.props.deletePatient}
                    updateItemsInArray={this.props.updateItemsInArray}
                    switchToAppointment={this.props.switchToAppointment}
                    createNewAppointment={this.props.createNewAppointment}
                    showDialogOnClick={this.props.showDialogOnClick}
                    showOverview={this.state.showOverview}
                    setOverview={this.setOverview} deleteAppointment={this.props.deleteAppointment}
                    isDrawerOpen={this.state.isDrawerOpen}>
                  </LeftSideBarComponent> : null}
                {
                  this.state.showOverview ?
                    <OverviewComponent /> :
                    <Selectable
                      index={this.state.navIndex} updateAnyObject={this.props.updateAnyObject}
                      updateItemsInArray={this.props.updateItemsInArray}
                      isDrawerOpen={this.state.isDrawerOpen}>
                      <TabComponent items={this.componentItems[this.state.navIndex]}
                        tabState={this.tabState[this.state.navIndex]}>
                        {/* {console.log("inner", this.state.tabState)} */}
                        {
                          this.componentItems[this.state.navIndex].map((item, index) =>
                            <div className="col emr-history-tab" key={index.toString() + item}
                              onClick={this.updateTabState.bind(this, index)}>
                              <div className={`emr-history-tab-item 
                              ${this.state.tabIndex[this.state.navIndex] === index ? 'selected' : ''}`}>
                                <p className="emr-history-tab-text">{item}</p>
                              </div>
                            </div>
                          )
                        }
                      </TabComponent>
                      {componentContents[this.state.navIndex].length > 0 ?
                        componentContents[this.state.navIndex][this.state.tabIndex[this.state.navIndex]] : null}
                      {
                        this.state.navIndex === 2 ?
                          <div className="emr-icon-bg emr-icon-bg-light"
                            onClick={this.showFormSelectionDialog}>
                            <i className="bi bi-plus-lg emr-icons emr-center-icon"></i>
                            <i className="emr-icon-tooltip">Add Form</i>
                          </div> :
                          null
                      }
                    </Selectable>
                }
              </MainComponent>
            </PatientContext.Provider>
        }
      </>
    )
  }
}