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

  render() {
    const appBarItems = this.appbar.map((item, index) =>
      <div className={`emr-icon-bg ${this.props.navIndex === index ? "selected" : ""}`}
        key={index} onClick={this.props.changeState.bind(this, index)}>
        <i className={`bi ${item[1]} emr-icons emr-center-icon`}></i>
        <i className="emr-icon-tooltip">{item[0]}</i>
      </div>
    );

    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2">
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
          <div className="col-lg-1">
            {
              this.props.patient ? <div className="emr-new-patient">
                <div className="emr-icon-bg emr-icon-bg-dark" onClick={this.props.createNewPatient}>
                  <i className="bi bi-plus-lg emr-icons emr-center-icon"></i>
                  <i className="emr-icon-tooltip">New patient</i>
                </div>
              </div> : null
            }
          </div>
          <div className="col-lg-6 d-none d-lg-flex">
            <div className="emr-app-toolbar">
              {this.props.patient ? appBarItems : null}
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
          <div className="col-lg-1 d-none d-lg-flex">
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