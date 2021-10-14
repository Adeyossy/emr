import React from "react";
import { getAppointment } from "../models/patient";
import { PatientContext } from "../models/patient_context";

export default class LeftSideBarComponent extends React.Component {
  static contextType = PatientContext;

  render() {
    // console.log("patient's first seen => ", this.props.patient.first_seen);
    return (
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-lg-3 emr-sidebar emr-sidebar-l">
            <div className="emr-left-sidebar">
              <div className="emr-patients-sidebar">
                {
                  this.props.patients.map((item, index) =>
                    <div className={`emr-patient-list-item 
                      ${this.props.patient.first_seen === item.first_seen ? "clicked" : ""}`}
                      key={index.toString()} onClick={this.props.changePatient.bind(this, item)}>
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
                          <p className="emr-patient-diagnosis">{item.primary_diagnosis ? item.primary_diagnosis : "pending"}</p>
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
                  <div className="emr-icon-bg emr-icon-bg-dark">
                    <i className="bi bi-info-circle emr-center-icon emr-timeline-bar-icons"></i>
                  </div>
                  <div className="emr-patients-timeline-visits">
                    {
                      this.context.appointments.sort((a, b) => b - a).map((item, index) =>
                        <>
                          <div className={`emr-icon-bg emr-icon-bg-dark 
                            ${this.context.appointments[index].date_seen ===
                              this.context.appointment.date_seen ? "selected" : ""}`}
                              key={index.toString()}>
                            <i className={`emr-center-icon emr-timeline-bar-icons`}>#{index + 1}</i>
                          </div>
                          {index > 0 ? <div className="emr-timeline-visits-divider"></div> : null}
                        </>
                      )
                    }
                  </div>
                  <div className="emr-new-patient">
                    <div className="emr-icon-bg emr-icon-bg-dark"
                      onClick={this.props.updateItemsInArray.bind(this, ["appointments"], getAppointment(),
                        this.context.appointments.length)}>
                      <i className="bi bi-plus-lg emr-icons emr-center-icon"></i>
                      <i className="emr-icon-tooltip">New appointment</i>
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