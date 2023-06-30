import React from "react";
import TabComponent from "./tabs";
import AxisIComponent from "./epilepsy/axis_i";
import AxisIIComponent from "./epilepsy/axis_ii";
import AxisIIIComponent from "./epilepsy/axis_iii";
import AxisIVComponent from "./epilepsy/axis_iv";
import AxisVComponent from "./epilepsy/axis_v";

export default class EpilepsyComponent extends React.Component{
  constructor(props){
    super(props);
    this.items = [ "Axis I", "Axis II", "Axis III", "Axis IV", "Axis V" ];
    this.itemsComponents = [ <AxisIComponent/>, <AxisIIComponent/>, <AxisIIIComponent/>, <AxisIVComponent/>, <AxisVComponent/> ];
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
      <div class="container-fluid">
        <div class="row g-0">
          <div class="offset-xl-3 col-xl-6">
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