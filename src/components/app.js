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

export class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    // this.tabState = [[], [], [], [], [], [], []].map((item) => {
    //   item = this.componentItems.slice().fill("");
    //   item[0] = "selected";
    //   return item;
    // });
    this.componentItems = [
      ["Biodata", "Complaint", "RoS", "PMH", "Drugs | Allergies", "FSHx"],
      ["Axis I", "Axis II", "Axis III", "Axis IV", "Axis V"],
      [],
      ["General", "Neuro", "CVS", "Chest", "Abdomen", "Other"],
      ["Imaging", "Electrical", "Haematology", "Labs", "Microbiology", "Procedures"],
      ["Assessment", "Plan", "Monitoring"],
      ["Pharmacological", "Nonpharmacological", "Other"]
    ];

    const tabState = this.componentItems.map(item => item.slice().fill("selected", 0, 1)
      .fill("", 1, item.length));

    // console.log("tabState => ", tabState);

    this.state = {
      navState: ["", "", "", "", "", "", ""], //history, Epilepsy form, other forms, examination, investigations, assessment, treatment
      navIndex: 0,
      contextItems: ["Dashboard", "Patients", "Investigations"],
      tabIndex: [0, 0, 0, 0, 0, 0, 0],
      tabState: tabState
    }
  }

  updateNavState = (index) => {
    let navState = this.state.navState;
    navState = navState.fill("");
    navState[index] = "selected";
    this.setState({
      navState: navState,
      navIndex: index
    });
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
    let tabState = this.state.tabState.slice();
    let stateFromItems = tabState[this.state.navIndex];
    stateFromItems = stateFromItems.fill("");
    stateFromItems[index] = "selected";
    tabState[this.state.navIndex] = stateFromItems;

    let tabIndex = this.state.tabIndex.slice();
    tabIndex[this.state.navIndex] = index;

    this.setState({
      tabState: tabState,
      tabIndex: tabIndex
    });
  }

  render() {
    const componentItems = [
      ["Biodata", "Complaint", "RoS", "PMH", "Drugs | Allergies", "FSHx"],
      ["Axis I", "Axis II", "Axis III", "Axis IV", "Axis V"],
      [],
      ["General", "Neuro", "CVS", "Chest", "Abdomen", "Other"],
      ["Imaging", "Electrical", "Haematology", "Labs", "Microbiology", "Procedures"],
      ["Assessment", "Plan", "Monitoring"],
      ["Pharmacological", "Nonpharmacological", "Other"]
    ];

    const historyComponents = [
      <BiodataComponent patient={this.props.patient} updateBiodata={this.props.updateObjectField} />,
      <ComplaintComponent updateComplaints={this.props.updateComplaints}
        updateAnyObject={this.props.updateAnyObject} />,
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
    const otherFormsComponents = [];

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
      <NotesOnlyComponent fields={[item.toLowerCase()]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={item} />);

    //Tabbed components under Other Forms
    // this.assessmentComponents = [  ];
    const assessmentComponents = this.componentItems[5].map((item) =>
      <NotesOnlyComponent fields={[item.toLowerCase()]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={item} />);

    //Tabbed components under Other Forms
    const treatmentComponents = this.componentItems[6].map((item) =>
      <NotesOnlyComponent fields={[item.toLowerCase()]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={item} />);

    const componentContents = [historyComponents, epilepsyComponents, otherFormsComponents,
      examComponents, investigationsComponents, assessmentComponents,
      treatmentComponents];

    return (
      <>
        <nav>
          <NavComponent navAppBarState={this.state.navState} changeState={this.updateNavState}
            dashboard={this.props.dashboard} patientView={this.props.patientView}
            currentView={this.props.currentView} navIndex={this.state.navIndex}
            patient={this.props.patient} createNewPatient={this.props.createNewPatient} />
        </nav>
        {
          this.props.children ? this.props.children :
            <PatientContext.Provider value={this.props.patient}>
              <MainComponent navIndex={this.state.navIndex} dashboard={this.props.dashboard}>
                <div className="container-fluid">
                  <div className="row g-0">
                    <div className="col-lg-3 emr-sidebar emr-sidebar-l">
                      <LeftSideBarComponent patient={this.props.patient}
                        patients={this.props.patients} changePatient={this.props.changePatient}
                        deletePatient={this.props.deletePatient}
                        updateItemsInArray={this.props.updateItemsInArray}
                        switchToAppointment={this.props.switchToAppointment}
                        createNewAppointment={this.props.createNewAppointment} >
                      </LeftSideBarComponent>
                    </div>
                  </div>
                </div>
                {
                  !this.props.patient.appointment && this.props.patient.appointments.length > 1 ?
                    <OverviewComponent /> :
                    <Selectable
                      index={this.state.navIndex} updateAnyObject={this.props.updateAnyObject}
                      updateItemsInArray={this.props.updateItemsInArray} >
                      <TabComponent items={this.componentItems[this.state.navIndex]}
                        tabState={this.state.tabState[this.state.navIndex]}>
                        {/* {console.log("inner", this.state.tabState)} */}
                        {
                          this.componentItems[this.state.navIndex].map((item, index) =>
                            <div className="col emr-history-tab" key={index.toString() + item}
                              onClick={this.updateTabState.bind(this, index)}>
                              <div className={`emr-history-tab-item 
                              ${this.state.tabState[this.state.navIndex][index]}`}>
                                <p className="emr-history-tab-text">{item}</p>
                              </div>
                            </div>
                          )
                        }
                      </TabComponent>
                      {componentContents[this.state.navIndex].length > 0 ?
                        componentContents[this.state.navIndex][this.state.tabIndex[this.state.navIndex]] : null}
                    </Selectable>
                }
              </MainComponent>
            </PatientContext.Provider>
        }
      </>
    )
  }
}