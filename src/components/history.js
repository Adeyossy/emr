import React from "react";
import './history.css';
import BiodataComponent from "./history/biodata";
import ComplaintComponent from "./history/complaint";
import DrugsAllergiesComponent from "./history/drug_allergies";
import FSHxComponent from "./history/fshx";
import PMHComponent from "./history/pmh";
import RoSComponent from "./history/ros";
import TabComponent from "./tabs";

export default class HistoryComponent extends React.Component {
  constructor(props){
    super(props);
    this.items = [ "Biodata", "Complaint", "RoS", "PMH", "Drugs | Allergies", "FSHx" ];
    this.itemsComponents = [ <BiodataComponent/>, <ComplaintComponent/>, <RoSComponent/>, <PMHComponent/>,
      <DrugsAllergiesComponent/>, <FSHxComponent/> ];
    this.stateFromItems = this.items.slice().fill("");
    this.stateFromItems[0] = "selected";
    this.state = {
      tabState: this.stateFromItems,
      tabIndex: 0
    }
  }

  updateTabState = (index) => {
    let stateFromItems = this.state.tabState;
    stateFromItems = stateFromItems.fill("");
    stateFromItems[index] = "selected";
    this.setState({
      tabState: stateFromItems,
      tabIndex: index
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row g-0">
          <div className="offset-xl-3 col-xl-6">
            {/* <!-- This is a list of the tabs controlling the various history sections of the app --> */}
            <TabComponent items={ this.items } tabState={ this.state.tabState } changeTabState={this.updateTabState}></TabComponent>
            {/* <ContentComponent></ContentComponent> */}
            { this.itemsComponents[this.state.tabIndex] }
          </div>
        </div>
      </div>
    );
  }
}