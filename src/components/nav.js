import React from "react";
import "./nav.css";

export default class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.appbar = [
      ["History", "bi-file-earmark-medical-fill"],
      ["Epilepsy Questionnaire", "bi-question-circle-fill"],
      ["Other Forms", "bi-code-square"],
      ["Examination", "bi-wrench"],
      ["Investigation", "bi-card-image"],
      ["Assessment", "bi-lightbulb-fill"],
      ["Treatment", "bi-check-circle-fill"]
    ];
    // this.changeState = this.props.changeState.bind(this, index);
  }

  render() {
    const appBarItems = this.appbar.map((item, index) =>
      <div className={`emr-icon-bg ${this.props.navAppBarState[index]}`} key={ index } onClick={this.props.changeState.bind(this, index)}>
        <i className={`bi ${item[1]} emr-icons emr-center-icon`}></i>
        <i className="emr-icon-tooltip">{item[0]}</i>
      </div>
    )
    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="emr-nav-dropdown">
              <div className="emr-current-view">
                <h6 className="emr-headers d-inline">Patients</h6>
                <i className="bi bi-caret-down-fill emr-icons"></i>
              </div>
              <div className="emr-other-views show">
                <p className="emr-other-view">Dashboard</p>
                <p className="emr-other-view">Patients</p>
                <p className="emr-other-view">Investigations</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-flex">
            <div className="emr-app-center emr-app-search">
              <div className="emr-icon-bg">
                <i className="bi bi-search emr-icons emr-center-icon"></i>
              </div>
              <input type="text" name="search" id="search" placeholder="Search"></input>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-flex">
            <div className="emr-app-toolbar">
              { appBarItems }
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-flex">
            <div className="emr-app-center emr-app-auth-and-overflow">
              <div className="emr-app-auth-group emr-app-center">
                <div className="emr-icon-bg emr-icon-bg-light">
                  <i className="bi bi-person-fill emr-icons emr-center-icon"></i>
                </div>
                <h6 className="emr-headers d-inline w-50">DR. JOHN</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}