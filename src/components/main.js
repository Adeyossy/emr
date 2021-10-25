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
import NotesOnlyComponent from "./minicomponents/notes_only";

export default class MainComponent extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <main>
        {this.props.children}
        <div className="container-fluid">
          <div className="row g-0">
            <div className="offset-lg-9 col-lg-3 emr-sidebar emr-sidebar-r">
              <RightSideBarComponent updateAnyObject={this.props.updateAnyObject}/>
            </div>
          </div>
        </div>
      </main>
    )
  }
}