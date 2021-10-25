import React from "react";
import './history.css';
import BiodataComponent from "./history/biodata";
import ComplaintComponent from "./history/complaint";
import DrugsAllergiesComponent from "./history/drug_allergies";
import FSHxComponent from "./history/fshx";
import PMHComponent from "./history/pmh";
import RoSComponent from "./history/ros";
import TabComponent from "./tabs";
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
import NotesOnlyComponent from "./minicomponents/notes_only";

export default class Selectable extends React.Component {
  constructor(props) {
    super(props);

    

    this.state = {
      tabIndex: [0, 0, 0, 0, 0, 0, 0],
      tabState: this.tabState
    }
  }

  componentDidMount() {
    // this.tabState = [[], [], [], [], [], [], []].map((item) => {
    //   item = this.props.items.slice().fill("");
    //   item[0] = "selected";
    //   return item;
    // });

    // this.setState({
    //   tabState: this.tabState
    // });
  }

  handleSelection = () => {
    if (this.state.tabState[this.props.index].length === 0) {
      this.stateFromItems = this.props.items.slice().fill("");
      // let selectedIndex = this.state.tabIndex[this.props.index];
      this.stateFromItems[0] = "selected";
      this.tabState[this.props.index] = this.stateFromItems;
      // this.tabState = this.state.tabState;
      this.setState({
        tabState: this.tabState
      });
    }
  }

  updateTabState = (index) => {
    let tabState = this.state.tabState.slice();
    let stateFromItems = tabState[this.props.index];
    stateFromItems = stateFromItems.fill("");
    stateFromItems[index] = "selected";
    tabState[this.props.index] = stateFromItems;

    let tabIndex = this.state.tabIndex.slice();
    tabIndex[this.props.index] = index;

    this.setState({
      tabState: tabState,
      tabIndex: tabIndex
    });
  }

  render() {
    // console.log("this.props.patient => ", this.props.patient);
    //Tabbed components under History

    return (
      <div className="container-fluid">
        <div className="row g-0">
          <div className="offset-xl-3 col-xl-6 emr-app-main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}