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

export class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navState: ["", "", "", "", "", "", ""], //history, Epilepsy form, other forms, examination, investigations, assessment, treatment
      navIndex: null,
      contextItems: ["Dashboard", "Patients", "Investigations"]
    }

    this.componentItems = [
      ["Biodata", "Complaint", "RoS", "PMH", "Drugs | Allergies", "FSHx"],
      ["Axis I", "Axis II", "Axis III", "Axis IV", "Axis V"],
      [],
      ["General", "Neuro", "CVS", "Chest", "Abdomen", "Other"],
      ["Imaging", "Scan", "Haematology", "Chem Path", "Microbiology", "Procedures"],
      ["Assessment", "Plan"],
      ["Pharmacological", "Nonpharmacological", "Other"]
    ];
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

  render() {
    // console.log("this.props.patient => ", this.props.patient);
    //Tabbed components under History
    const historyComponents = [
    <BiodataComponent patient={this.props.patient} updateBiodata={this.props.updateObjectField} />, 
    <ComplaintComponent updateComplaints={this.props.updateComplaints} />, 
      <RoSComponent updateRoS={this.props.updateObjectField}/>, 
      <PMHComponent updatePMHArrays={this.props.updatePMHArrays} 
      updateItemsInArray={this.props.updateItemsInArray}/>, 
      <DrugsAllergiesComponent />, <FSHxComponent />];

    //Tabbed components under Epilepsy
    const epilepsyComponents = [<AxisIComponent />, <AxisIIComponent />, <AxisIIIComponent />,
    <AxisIVComponent />, <AxisVComponent />];

    //Tabbed components under Other Forms
    const otherFormsComponents = [];

    //Tabbed components under Examination
    const examComponents = [<GeneralExamComponent />, <NeuroExamComponent />, <CVSExamComponent />,
    <ChestExamComponent />, <AbdominalExamComponent />, <OtherExamComponent />]

    //Tabbed components under Other Forms
    // this.investigationsComponents = [ <NotesOnlyComponent notesHeader={"Imaging"} /> ];
    const investigationsComponents = this.componentItems[4].map((item) =>
      <NotesOnlyComponent notesHeader={item} />);

    //Tabbed components under Other Forms
    // this.assessmentComponents = [  ];
    const assessmentComponents = this.componentItems[5].map((item) =>
      <NotesOnlyComponent notesHeader={item} />);

    //Tabbed components under Other Forms
    const treatmentComponents = this.componentItems[6].map((item) =>
      <NotesOnlyComponent notesHeader={item} />);

    const componentContents = [historyComponents, epilepsyComponents, otherFormsComponents,
      examComponents, investigationsComponents, assessmentComponents,
      treatmentComponents];

    return (
      <>
        <nav>
          <NavComponent navAppBarState={this.state.navState} changeState={this.updateNavState}
            dashboard={this.props.dashboard} patientView={this.props.patientView}
            currentView={this.props.currentView} navIndex={this.state.navIndex} />
        </nav>
        {
          this.props.children ? this.props.children :
            <PatientContext.Provider value={this.props.patient}>
              <MainComponent navIndex={this.state.navIndex} dashboard={this.props.dashboard}>
                <div className="container-fluid">
                  <div className="row g-0">
                    <div className="col-lg-3 emr-sidebar emr-sidebar-l">
                      <LeftSideBarComponent patient={this.props.patient}
                        patients={this.props.patients} changePatient={this.props.changePatient}>
                      </LeftSideBarComponent>
                    </div>
                  </div>
                </div>
                {this.state.navIndex == null ? <div></div> :
                  <Selectable items={this.componentItems[this.state.navIndex]}
                    itemsComponents={componentContents[this.state.navIndex]}
                    index={this.state.navIndex} />}
              </MainComponent>
            </PatientContext.Provider>
        }
      </>
    )
  }
}