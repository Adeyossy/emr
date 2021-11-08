import React from "react";
import { PatientContext } from "../models/patient_context";

export default class LeftSideBarComponent extends React.Component {
  static contextType = PatientContext;

  render() {
    // console.log("patient's first seen => ", this.props.patient._id);
    return (
      <div className="container-fluid">
        <div className="row g-0">
          <div className="d-none d-lg-block col-xl-3 col-lg-4 emr-sidebar emr-sidebar-l">
            <div className="emr-left-sidebar">
              <div className="emr-patients-sidebar">
                {
                  this.props.patients.sort((a, b) => a.last_seen - b.last_seen).map((item, index) =>
                    <div className={`emr-patient-list-item 
                      ${this.props.patient._id === item._id ? "clicked" : ""}`}
                      key={index.toString()} onClick={this.props.patient._id !== item._id ?
                        this.props.changePatient.bind(this, item) : null}>
                      <div className="emr-patient-delete">
                        <div className="emr-icon-bg emr-icon-bg-dark"
                          onClick={this.props.showDialogOnClick.bind(this, "DELETE PATIENT",
                            `${item.biodata.firstname ? item.biodata.firstname : "This patient"} will be deleted`,
                            this.props.deletePatient.bind(this, item._id))}>
                          <i className="bi bi-trash-fill emr-center-icon"></i>
                        </div>
                      </div>
                      <div className="emr-icon-bg emr-icon-bg-dark">
                        <i className="bi bi-person-fill emr-center-icon"></i>
                      </div>
                      <div className="emr-patient-description">
                        <p className="emr-patient-name">{item.biodata.firstname || item.biodata.lastname ?
                          item.biodata.firstname + " " + item.biodata.lastname : "New patient"}</p>
                        <div className="emr-patient-biodata">
                          <p className="emr-patient-gender">{item.biodata.gender.charAt(0)}</p>
                          <p className="emr-separator">|</p>
                          <p className="emr-patient-age">{`${item.biodata.ageinyears} yrs`}</p>
                          <p className="emr-separator">|</p>
                          <p className="emr-patient-diagnosis">
                            {item.primary_diagnosis ? item.primary_diagnosis : "pending"}</p>
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
                            ${!this.context.appointment ? "selected" : ""}`}
                    onClick={this.props.switchToAppointment.bind(this, null)}
                    disabled={this.context.appointments.length === 1}>
                    <i className="bi bi-info-circle emr-center-icon emr-timeline-bar-icons"
                      disabled={this.context.appointments.length === 1}></i>
                  </div>
                  <div className="emr-patients-timeline-visits">
                    {
                      this.context.appointments.sort((a, b) => b.date_seen - a.date_seen)
                        .map((item, index, array) =>
                          <React.Fragment key={index.toString()}>
                            <div className={`emr-icon-bg emr-icon-bg-dark 
                            ${item !== null && this.context.appointment && item.date_seen ===
                                this.context.appointment.date_seen ? "selected" : ""}`}
                              key={index.toString()} onClick={this.props.switchToAppointment.bind(this, item)}>
                              <i className={`emr-center-icon emr-timeline-bar-icons`}>
                                #{array.length - index}</i>
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