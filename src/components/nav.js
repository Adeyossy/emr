import React from "react";
import { signUserOut } from "../modules/auth";
import { closeDB } from "../modules/db";
import "./nav.css";
import { navTabs } from "../models/nav";

export default class NavComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "Dashboard",
      items: ["Dashboard", "Patients", "Investigations"]
    }
    // this.changeState = this.props.changeState.bind(this, index);
  }

  switchView = (item, index) => {
    this.setState({
      item: item
    });

    if (this.props.currentView === "Patients") {
      this.props.dashboard();
    }
  }

  onSignOut = () => {
    closeDB(signUserOut.bind(this, this.props.onUserSignOut));
  }

  onSearchInput = (event) => {
    this.props.filterPatients(event.target.value);
  }

  render() {
    const appBarItems = navTabs.map((item, index) =>
      <div className={`emr-icon-bg ${this.props.navIndex === index ? "selected" : ""}`}
        key={index} onClick={this.props.changeState.bind(this, index)}>
        <i className={`bi ${item[1]} emr-icons emr-center-icon`}></i>
        <i className="emr-icon-tooltip">{item[0]}</i>
      </div>
    );

    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* <div className="col-1">
            {
              this.props.patient ? <div className="emr-new-patient">
                <div className="emr-icon-bg emr-icon-bg-dark" onClick={this.props.createNewPatient}>
                  <i className="bi bi-list emr-icons emr-center-icon"></i>
                  <i className="emr-icon-tooltip">Sidebar</i>
                </div>
              </div> : null
            }
          </div> */}
          <div className="col-5 col-md-3 col-lg-2 d-inline-block">
            {
              this.props.patient ? <div className="emr-new-patient d-inline-block">
                <div className="emr-icon-bg emr-icon-bg-dark" onClick={this.props.changeDrawerState}>
                  <i className={`bi ${this.props.isDrawerOpen ? 'bi-arrow-left' : 'bi-list'} emr-icons emr-center-icon`}></i>
                  <i className="emr-icon-tooltip">Sidebar</i>
                </div>
              </div> : null
            }
            <div className="emr-nav-dropdown">
              <div className="emr-current-view">
                <h6 className="emr-headers d-inline">{this.props.currentView}</h6>
                <i className="bi bi-caret-down-fill emr-icons"></i>
              </div>
              <div className="emr-other-views show">
                {
                  this.state.items.map((item, index) =>
                    <p className="emr-other-view" key={index.toString()}
                      disabled={this.props.currentView === item}
                      onClick={this.switchView.bind(this, item, index)}>{item}</p>)
                }
              </div>
            </div>
          </div>
          <div className="col-1 offset-2 offset-md-0">
            {
              this.props.patient ? <div className="emr-new-patient">
                <div className="emr-icon-bg emr-icon-bg-dark" onClick={this.props.createNewPatient}>
                  <i className="bi bi-plus-lg emr-icons emr-center-icon"></i>
                  <i className="emr-icon-tooltip">New patient</i>
                </div>
              </div> : null
            }
          </div>
          <div className="col-lg-7 col-xl-6 d-none d-lg-flex">
            <div className="emr-app-toolbar d-flex">
              {this.props.patient && this.props.patient.appointment ? appBarItems : null}
            </div>
          </div>
          <div className="col-lg-1 col-xl-2 d-none d-lg-flex">
            <div className="emr-app-center emr-app-search">
              <div className="emr-icon-bg">
                <i className="bi bi-search emr-icons emr-center-icon"></i>
              </div>
              <input type="text" name="search" id="search" placeholder="Search"
                onChange={this.onSearchInput}></input>
            </div>
          </div>
          <div className="col-3 offset-1 offset-md-0 col-lg-1 d-lg-block">
            <div className="emr-app-center emr-app-auth-and-overflow">
              <div className="emr-app-auth-group emr-app-center">
                <div className="emr-icon-bg emr-icon-bg-light">
                  <i className="bi bi-person-fill emr-icons emr-center-icon"></i>
                </div>
                {/* <h6 className="emr-headers emr-app-user d-inline w-50">DR. {this.props.user ? this.props.user.displayName : ""}</h6> */}
              </div>
              <div className="emr-other-views show">
                <p className="emr-other-view">Your Profile</p>
                <p className="emr-other-view" onClick={this.props.createBackup}>Create Backup</p>
                <p className="emr-other-view" onClick={this.props.restoreBackup}>Restore Backup</p>
                <p className="emr-other-view" onClick={this.onSignOut}>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}