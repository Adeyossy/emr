import React from "react";
import './history.css';
import BiodataComponent from "./history/biodata";
import ComplaintComponent from "./history/complaint";
import DrugsAllergiesComponent from "./history/drug_allergies";
import FSHxComponent from "./history/fshx";
import PMHComponent from "./history/pmh";
import RoSComponent from "./history/ros";
import TabComponent from "./tabs";

export default class Selectable extends React.Component {
  constructor(props){
    super(props);
    // this.items = [ "Biodata", "Complaint", "RoS", "PMH", "Drugs | Allergies", "FSHx" ];
    // this.stateFromItems = this.props.items.slice().fill("");
    // // console.log("stateFromItems => ", this.stateFromItems)
    // this.stateFromItems[0] = "selected";
    this.tabState = [[],[],[],[],[],[],[]];
    this.tabIndex = [0, 0, 0, 0, 0, 0, 0]
    // this.tabState[this.props.index] = this.stateFromItems;
    this.state = {
      tabState: this.tabState,
      tabIndex: this.tabIndex
    }
    this.handleSelection();
  }

  handleSelection = () => {
    if(this.state.tabState[this.props.index].length === 0){
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
    this.handleSelection();
    return (
      <div className="container-fluid">
        <div className="row g-0">
          <div className="offset-xl-3 col-xl-6">
            {/* {console.log("navIndex => ", this.props.index)} */}
            {/* {console.log("tabState => ", this.state.tabState)} */}
            <TabComponent items={ this.props.items } tabState={ this.state.tabState[this.props.index] } changeTabState={this.updateTabState}></TabComponent>
            {/* <ContentComponent></ContentComponent> */}
            { this.props.itemsComponents.length > 0 ? this.props.itemsComponents[this.state.tabIndex[this.props.index]] : <div></div> }
          </div>
        </div>
      </div>
    );
  }
}