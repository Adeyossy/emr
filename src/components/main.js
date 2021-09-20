import React from "react";
import './patient.css';
import LeftSideBarComponent from "./leftsidebar";
import HistoryComponent from "./history";
import EpilepsyComponent from "./epilepsy";
import RightSideBarComponent from "./rightsidebar";

export default class MainComponent extends React.Component {
  constructor(props){
    super(props);
    this.contents = [ <HistoryComponent/>, <EpilepsyComponent/> ]
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
        { this.props.navIndex == null ? <div></div> : this.contents[this.props.navIndex] }
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