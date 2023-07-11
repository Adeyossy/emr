import React from "react";
import { PatientContext } from "../models/patient_context";

export default class LeftSideBarComponent extends React.Component {
  static contextType = PatientContext;

  deletePatient = (item, event) => {
    event.stopPropagation();
    this.props.showDialogOnClick({
      title: "Delete Patient",
      message: `${item[item.last_viewed].biodata.lastname ?
        item[item.last_viewed].biodata.lastname.toUpperCase() : "This patient"} will be deleted`,
      action: this.props.deletePatient.bind(this, item._id)
    }, 2);
  }

  render() {
    // console.log("patient's first seen => ", this.props.patient._id);
    const ordinalNumbers = ["st", "nd", "rd", "th"];

    return (
      <div className="container-fluid emr-leftbar" >
        <div className="row g-0">
          <div className={`${this.props.isDrawerOpen ? "d-block col-md-6" : "d-none"} d-lg-block col-xl-3 col-lg-4 emr-sidebar emr-sidebar-l`}>
            <div className="emr-left-sidebar">
              <div className="emr-patients-sidebar">
                {
                  this.props.patients.sort((a, b) => b.last_seen - a.last_seen).map((item, index) =>
                    <div className={`emr-patient-list-item 
                      ${this.props.patient._id === item._id ? "clicked" : ""}`}
                      key={index.toString()} onClick={this.props.patient._id !== item._id ?
                        this.props.changePatient.bind(this, item) : null}>
                      <div className="emr-patient-delete">
                        <div className="emr-icon-bg emr-icon-bg-dark"
                          onClick={this.deletePatient.bind(this, item)}>
                          <i className="bi bi-trash-fill emr-center-icon"></i>
                        </div>
                      </div>
                      <div className="emr-icon-bg emr-icon-bg-dark">
                        <i className="bi bi-person-fill emr-center-icon"></i>
                      </div>
                      <div className="emr-patient-description">
                        <p className="emr-patient-name">{item[item.last_viewed].biodata.firstname || item[item.last_viewed].biodata.lastname ?
                          item[item.last_viewed].biodata.lastname + " " + item[item.last_viewed].biodata.firstname : "New patient"}</p>
                        <div className="emr-patient-biodata">
                          <p className="emr-patient-gender">{item[item.last_viewed].biodata.gender.charAt(0)}</p>
                          <p className="emr-separator">|</p>
                          <p className="emr-patient-age">{`${item[item.last_viewed].biodata.ageinyears} yrs`}</p>
                          <p className="emr-separator">|</p>
                          <p className="emr-patient-diagnosis">
                            {item.primary_diagnosis ? item.primary_diagnosis.substring(0, 7) : "pending"}</p>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              {/* <!-- Timeline section of the app showing the number of visits --> */}
              <div className="emr-patients-timeline">
                <div className="emr-patients-timeline-bar text-center">
                  {/* <!-- This is a list of icons in the timeline bar --> */}
                  <div className={`emr-icon-bg emr-icon-bg-dark 
                            ${this.props.showOverview ? "selected" : ""}`}
                    onClick={this.props.setOverview}
                    disabled={this.context.appointment_keys.length === 1}>
                    <i className="bi bi-info-circle emr-center-icon emr-timeline-bar-icons"
                      disabled={this.context.appointment_keys.length === 1}></i>
                  </div>
                  <div className="emr-patients-timeline-visits">
                    {
                      this.context.appointment_keys.sort((a, b) => b - a)
                        .map((item, index, array) =>
                          <React.Fragment key={index.toString()}>
                            <div className={`emr-icon-bg emr-icon-bg-dark timeline
                            ${this.context[item] !== null && this.context[this.context.last_viewed]
                                && this.context[item].date_seen === this.context[this.context.last_viewed]
                                  .date_seen ? "selected" : ""}`
                            }
                              key={index.toString()} onClick={this.context[this.context.last_viewed].date_seen
                                !== this.context[item].date_seen ? this.props.switchToAppointment
                                  .bind(this, this.context[item].date_seen) : null}>
                              <i className={`emr-center-icon emr-timeline-bar-icons`}>
                                #{array.length - index}</i>
                              <div className="emr-icon-bg emr-icon-bg-dark timeline-delete"
                                onClick={index < array.length - 1 ? this.props.showDialogOnClick
                                  .bind(this, {
                                    title: "Delete Appointment",
                                    message: `The ${String(array.length - index).concat(array.length - index - 1 % 10 < 3 ?
                                      array.length - index / 10 === 1 ? 
                                      ordinalNumbers[3] : ordinalNumbers[array.length - index - 1] :
                                      ordinalNumbers[3])} appointment seen on 
                                        ${this.context[item].date_seen ?
                                        new Date(this.context[item].date_seen).toLocaleString() :
                                        "(missing date field"} will be deleted`,
                                    action: this.props.deleteAppointment.bind(this, this.context[item].date_seen)
                                  }, 2) : null}>
                                <i className="bi bi-trash-fill emr-center-icon timeline-delete"></i>
                              </div>
                            </div>
                            {index < array.length - 1 ? <div className="emr-timeline-visits-divider"></div> : null}
                          </React.Fragment>
                        )
                    }
                  </div>
                  <div className="emr-new-patient">
                    <div className="emr-icon-bg emr-icon-bg-dark"
                      onClick={this.props.createNewAppointment}>
                      <i className="bi bi-plus-lg emr-icons emr-center-icon"></i>
                      <i className="emr-icon-tooltip">New</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}