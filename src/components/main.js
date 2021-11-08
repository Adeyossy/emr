import React from "react";
import './patient.css';
import RightSideBarComponent from "./rightsidebar";

export default class MainComponent extends React.Component {
  render() {
    return (
      <main>
        {this.props.children}
        <div className="container-fluid">
          <div className="row g-0">
            <div className="offset-xl-9 col-xl-3 d-none d-xl-block emr-sidebar emr-sidebar-r">
              <RightSideBarComponent updateAnyObject={this.props.updateAnyObject} />
            </div>
          </div>
        </div>
      </main>
    )
  }
}