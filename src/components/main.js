import React from "react";
import './patient.css';
import RightSideBarComponent from "./rightsidebar";

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        {this.props.children}
        <div className="container-fluid">
          <div className="row g-0">
            <div className="offset-lg-9 col-lg-3 emr-sidebar emr-sidebar-r">
              <RightSideBarComponent updateAnyObject={this.props.updateAnyObject} />
            </div>
          </div>
        </div>
      </main>
    )
  }
}