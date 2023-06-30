import React from "react";
import './patient.css';
import RightSideBarComponent from "./rightsidebar";

export default class MainComponent extends React.Component {
  render() {
    return (
      <main>
        {this.props.children}
        <RightSideBarComponent updateAnyObject={this.props.updateAnyObject} 
          isDrawerOpen={this.props.isDrawerOpen}
        />
        {/* <div className="container-fluid">
          <div className="row g-0">
            <div className={`${this.props.isDrawerOpen? 
            'offset-lg-8 col-lg-4 offset-xl-6 col-xl-6' : 'offset-lg-8 col-lg-4 offset-xl-9 col-xl-3'} 
            d-none d-xl-block emr-sidebar emr-sidebar-r`}>
              <RightSideBarComponent updateAnyObject={this.props.updateAnyObject} />
            </div>
          </div>
        </div> */}
      </main>
    )
  }
}