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
import MMSEComponent from "./forms/neuro_mmse";
import FormComponent from "./forms/form";
import { formsLookUp } from "../models/forms";
import FormSingleComponent from "./forms/form_single";
import InvestigationComponent from "./investigation/investigation";
import BottomNavComponent from "./bottom_nav";
import RightSideBarComponent from "./rightsidebar";
import { symptoms } from "../models/symptoms";
import { complaint } from "../models/complaint";
import DetailsComponent from "./history/details";
import ListComponent from "./minicomponents/list";
import { tests } from "../models/tests";
import { updateListDetails } from "../helpers/update_list_details";
import PreviewComponent from "./minicomponents/preview";

export class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.componentItems = [
      ["Biodata", "Complaint", "RoS", "PMH", "Drug | Allergy", "FSHx"],
      [],
      ["General", "Neuro", "CVS", "Chest", "Abdomen", "Other"],
      ["Imaging", "Electrical", "Haematology", "Labs", "Microbiology", "Procedures"],
      ["Assessment", "Plan", "Monitoring"],
      ["Pharmacological", "Nonpharmacological", "Other"]
    ];

    this.tabState = this.componentItems.map(item => item.slice().fill("selected", 0, 1)
      .fill("", 1, item.length));

    this.state = {
      navState: ["", "", "", "", "", ""], //history, Epilepsy form, other forms, examination, investigations, assessment, treatment
      navIndex: 0,
      contextItems: ["Dashboard", "Patients", "Investigations"],
      tabIndex: [0, 0, 0, 0, 0, 0],
      showOverview: false,
      booleanState: false,
      isDrawerOpen: false,
      whereIds: {
        complaint: -1,
        test: -1
      }
    }

  }
  
  componentDidMount() {
    window.addEventListener('keydown', this.listener);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (!prevProps.patient && this.props.patient) {
    //   this.addFormFields();
    // }

    // if (prevProps.patient && this.props.patient
    //   && prevProps.patient._id !== this.props.patient._id) {
    //   // this.addFormFields();
    //   this.resetWheres();
    // }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.listener);
    // window.removeEventListener("keydown", this.listener.bind(this));
  }

  listener = (e) => {
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
          index -= 1;
          this.onHotkeysPressed(index);
          // handleAnimations(--currentNumber, "animateOutClass");
        }
      }
    }
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
    this.resetWheres();
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
    this.resetWheres();
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

  showFormSelectionDialog = () => {
    this.props.showDialogOnClick({
      title: "Forms",
      message: "Choose from the list of available forms",
      action: this.props.addForm
    }, 1);
  }

  otherFormsUpdate = () => {
    const keys = Object.keys(this.props.patient[this.props.patient.last_viewed].forms)
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
    this.state.tabState[1] = this.state.componentItems[1].slice().fill("");

    this.setState({
      otherFormsComponents: this.state.otherFormsComponents,
      componentItems: this.state.componentItems,
      tabIndex: this.state.tabIndex
    });
  }

  addFormFields = (whereToSelect) => {
    const tabToSelect = whereToSelect ? whereToSelect : 0;
    this.cleanUpFormFields();
    const forms = this.props.patient[this.props.patient.last_viewed].forms;
    if (forms.hasOwnProperty('gcs')) {
      this.state.otherFormsComponents.push(
        <GCSComponent updateAnyObject={this.props.updateAnyObject}
          patient={this.props.patient} />
      );

      this.state.componentItems[1].push("GCS");
    }

    if (forms.hasOwnProperty('mmse')) {
      this.state.otherFormsComponents.push(
        <MMSEComponent updateAnyObject={this.props.updateAnyObject}
          patient={this.props.patient} />
      );

      this.state.componentItems[1].push("MMSE");
    }

    const localTabState = this.state.tabState;
    localTabState[1] = this.state.componentItems[1].slice().fill("");
    localTabState[1][tabToSelect] = "selected";

    // Get the tab index of the app and reselect as appropriate
    const localTabIndex = this.state.tabIndex
    localTabIndex[1] = tabToSelect;

    this.setState({
      tabState: localTabState,
      otherFormsComponents: this.state.otherFormsComponents,
      componentItems: this.state.componentItems,
      tabIndex: localTabIndex
    });
  }

  processFormSelection = (formTag) => {
    this.props.dialog.action(formTag);
  }

  onFormSelectionDismissed = () => {
    this.props.dismissDialog();
    this.setState({
      booleanState: false
    });
  }

  onItemChange = (where, section, id, value) => {
    this.props.updateAnyObject(id, value, [this.props.patient.last_viewed,
      ...where], this.state.whereIds[section])
  }

  onBooleanSymptomChange = (id, value) => {
    this.onItemChange(id, Boolean(value))
  }

  setWhere = (id, where) => {
    const whereIds = this.state.whereIds;
    whereIds[where] = whereIds[where] === id ? -1 : id;
    this.setState({
      whereIds: whereIds
    });
  }

  resetWheres () {
    const whereIds = Object.values(this.state.whereIds);

    if(whereIds.reduce((a, b) => a + b) > -whereIds.length) {
      this.setState({
        whereIds: {
          complaint: -1,
          test: -1
        }
      });
    }
  }

  render() {
    const historyComponents = [
      <BiodataComponent patient={this.props.patient}
        updateAnyObject={this.props.updateAnyObject} />,
      <ComplaintComponent updateAnyObject={this.props.updateAnyObject}
        updateItemsInArray={this.props.updateItemsInArray}
        setWhere={this.setWhere} whereId={this.state.whereIds.complaint} />,
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

    // Add the floating action button the app
    otherForms[0].push("+ Add New");
    otherForms[1].push(
      <div className="emr-clerking-tab-data m-0">
        <p className="emr-header mb-5">Click the button below to add another form.</p>
        {/* <div className="emr-icon-bg emr-icon-bg-light"
          onClick={this.showFormSelectionDialog}>
          <i className="bi bi-plus-lg emr-icons emr-center-icon"></i>
          <i className="emr-icon-tooltip">Add Form</i>
        </div> */}
        <button className="w-50" onClick={this.showFormSelectionDialog}>
          Add a New Form
        </button>
      </div>
    );

    this.componentItems[1] = otherForms[0];
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
    const investigationsComponents = this.componentItems[3].map((item) => {
      const value = this.props.patient ? this.props.patient[this.props.patient.last_viewed]
      [item.toLowerCase()].tests : [];

      const where = this.props.patient ? [this.props.patient.last_viewed,
      item.toLowerCase(), 'tests', 'test'] : null;

      return (
        <InvestigationComponent modality={item.toLowerCase()}
          createUploadItem={this.props.createUploadItem}
          updateAnyObject={this.props.updateAnyObject}
          beginUpload={this.props.beginUpload} deleteUpload={this.props.deleteUpload}
          showDialog={this.props.showDialogOnClick}>
          <ListComponent dictionary={tests} value={value.map(test => test.test).join(", ")}
            name={item} onItemChange={updateListDetails.bind(Object.create(null),
              tests, value, where, this.props.updateItemsInArray, this.setWhere)} />

          <div className="container-fluid p-0">
            <div className="row g-0 flex-row-reverse justify-content-end">
              {
                value.map((val, index) =>
                  <div className="col-md-6 p-3" key={index.toString()}>
                    <PreviewComponent item={val} index={index} name={val.test}
                      whereId={this.state.whereIds.test} setWhere={this.setWhere}
                      section="test" />
                  </div>
                )
              }
            </div>
          </div>

          <NotesOnlyComponent fields={[item.toLowerCase()]}
            updateAnyObject={this.props.updateAnyObject} notesHeader={item} />
        </InvestigationComponent>
      )
    });

    //Tabbed components under Other Forms
    // this.assessmentComponents = [  ];
    const assessmentComponents = this.componentItems[4].map((item) =>
      <NotesOnlyComponent fields={[item.toLowerCase()]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={item}
        value={item.toLowerCase()} />);

    //Tabbed components under Other Forms
    const treatmentComponents = this.componentItems[5].map((item) =>
      <NotesOnlyComponent fields={[item.toLowerCase()]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={item}
        value={item.toLowerCase()} />);

    const componentContents = [historyComponents, otherFormsComponents,
      examComponents, investigationsComponents, assessmentComponents,
      treatmentComponents];

    this.tabState = this.componentItems.map(item => item.slice().fill(""));

    const complaints = this.props.patient ? this.props.patient[this.props.patient.last_viewed]
      .presenting_complaints.complaints : [];

    const testIndex = this.componentItems.length - 3;
    const selectedTestIndex = this.state.tabIndex[testIndex];
    const selectedTest = this.componentItems[testIndex][selectedTestIndex].toLowerCase();

    // these are the tests under a particular modality saved in the patient's data
    const itests = this.props.patient ? this.props.patient[this.props.patient.last_viewed]
    [selectedTest].tests : null;

    return (
      <>
        <nav>
          <NavComponent navAppBarState={this.state.navState} changeState={this.updateNavState}
            dashboard={this.props.dashboard} patientView={this.props.patientView}
            currentView={this.props.currentView} navIndex={this.state.navIndex}
            patient={this.props.patient} createNewPatient={this.props.createNewPatient}
            onUserSignOut={this.props.onUserSignOut} user={this.props.user}
            filterPatients={this.props.filterPatients} isDrawerOpen={this.state.isDrawerOpen}
            changeDrawerState={this.changeDrawerState} createBackup={this.props.createBackup}
            restoreBackup={this.props.restoreBackup}
          />
        </nav>
        {this.props.patient && this.props.patient[this.props.patient.last_viewed] ?
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
                      {componentContents[this.state.navIndex] ?
                        componentContents[this.state.navIndex][this.state.tabIndex
                        [this.state.navIndex]] : null}
                    </Selectable>
                }
                <RightSideBarComponent updateAnyObject={this.props.updateAnyObject}
                  isDrawerOpen={this.state.isDrawerOpen}>
                  
                  {
                    complaints.length && this.state.whereIds.complaint >= 0
                    && complaints.length > this.state.whereIds.complaint ?
                      <DetailsComponent onItemChange={this.onItemChange.bind(this, [
                        "presenting_complaints", 'complaints'], 'complaint')}
                        onBooleanSymptomChange={this.onBooleanSymptomChange.bind(this, [
                          "presenting_complaints", 'complaints'], 'complaint')}
                        whereId={this.state.whereIds.complaint}
                        dictionary={Object.entries({
                          ...complaint, ...symptoms[complaints[this.state.whereIds.complaint]
                            .complaint.toLowerCase().replace(/ /g, "_")]
                        } || complaints[this.state.whereIds.complaint])} 
                        item={complaints} section={'complaint'} /> : null
                  }
                  {
                    this.state.navIndex === testIndex && itests.length &&
                      this.state.whereIds.test >= 0 && 
                      itests.length > this.state.whereIds.test ?
                      <DetailsComponent onItemChange={this.onItemChange.bind(this, [
                        selectedTest, 'tests'], 'test')}
                        onBooleanSymptomChange={this.onBooleanSymptomChange.bind(this, [
                          selectedTest, 'tests'], 'test')}
                        whereId={this.state.whereIds.test}
                        dictionary={Object.entries(
                          tests[itests[this.state.whereIds.test]
                            .test.replace(/ /g, "_")] || 
                            itests[this.state.whereIds.test])}
                        item={itests} section={'test'} /> : null
                  }
                </RightSideBarComponent>
              </MainComponent>
            </PatientContext.Provider>
        }
      </>
    )
  }
}