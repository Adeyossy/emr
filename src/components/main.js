import React from "react";
import './patient.css';
import LeftSideBarComponent from "./leftsidebar";
import HistoryComponent from "./history";
import EpilepsyComponent from "./epilepsy";
import RightSideBarComponent from "./rightsidebar";
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

export default class MainComponent extends React.Component {
  constructor(props){
    super(props);

    //Tabbed components under History
    this.historyComponents = [ <BiodataComponent/>, <ComplaintComponent/>, <RoSComponent/>, <PMHComponent/>,
      <DrugsAllergiesComponent/>, <FSHxComponent/> ];

    //Tabbed components under Epilepsy
    this.epilepsyComponents = [ <AxisIComponent />, <AxisIIComponent />, <AxisIIIComponent />, 
      <AxisIVComponent />, <AxisVComponent /> ];

    //Tabbed components under Other Forms
    this.otherFormsComponents = [  ];

    //Tabbed components under Examination
    this.examComponents = [ <GeneralExamComponent />, <NeuroExamComponent />, <CVSExamComponent />,
      <ChestExamComponent />, <AbdominalExamComponent />, <OtherExamComponent /> ]
    
    //Tabbed components under Other Forms
    this.investigationsComponents = [  ];
    
    //Tabbed components under Other Forms
    this.assessmentComponents = [  ];
    
    //Tabbed components under Other Forms
    this.treatmentComponents = [  ];
    
    this.componentItems = [
      [ "Biodata", "Complaint", "RoS", "PMH", "Drugs | Allergies", "FSHx" ],
      [ "Axis I", "Axis II", "Axis III", "Axis IV", "Axis V" ],
      [  ],
      [ "General", "Neuro", "CVS", "Chest", "Abdomen", "Other" ],
      [ "Imaging", "Scan", "Haematology", "Chem. Path", "Microbiology", "Procedures" ],
      [ "Assessment", "Plan" ],
      [ "Pharmacological", "Nonpharmacological", "Other" ]
    ];
    this.componentContents = [ this.historyComponents, this.epilepsyComponents, this.otherFormsComponents,
      this.examComponents, this.investigationsComponents, this.assessmentComponents, 
        this.treatmentComponents ];
  }
  
  render() {
    return (
      <main>
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-lg-3 emr-sidebar emr-sidebar-l">
              <LeftSideBarComponent></LeftSideBarComponent>
            </div>
          </div>
        </div>
        { this.props.navIndex == null ? <div></div> : 
          <Selectable items={this.componentItems[this.props.navIndex]}  
            itemsComponents={this.componentContents[this.props.navIndex]}
            index={this.props.navIndex} /> }
        <div className="container-fluid">
          <div className="row g-0">
            <div className="offset-lg-9 col-lg-3 emr-sidebar emr-sidebar-r">
              <RightSideBarComponent/>
            </div>
          </div>
        </div>
      </main>
    )
  }
}