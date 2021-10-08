import React from "react";

export default class LeftSideBarComponent extends React.Component {
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
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="emr-center-icon emr-timeline-bar-icons">#10</i>
                    </div>
                    <div className="emr-timeline-visits-divider"></div>
                    <div className="emr-icon-bg emr-icon-bg-dark selected">
                      <i className="emr-center-icon emr-timeline-bar-icons">#9</i>
                    </div>
                    <div className="emr-timeline-visits-divider"></div>
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="emr-center-icon emr-timeline-bar-icons">#8</i>
                    </div>
                    <div className="emr-timeline-visits-divider"></div>
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="emr-center-icon emr-timeline-bar-icons">#7</i>
                    </div>
                    <div className="emr-timeline-visits-divider"></div>
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="emr-center-icon emr-timeline-bar-icons">#6</i>
                    </div>
                    <div className="emr-timeline-visits-divider"></div>
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="emr-center-icon emr-timeline-bar-icons">#5</i>
                    </div>
                    <div className="emr-timeline-visits-divider"></div>
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="emr-center-icon emr-timeline-bar-icons">#4</i>
                    </div>
                    <div className="emr-timeline-visits-divider"></div>
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="emr-center-icon emr-timeline-bar-icons">#3</i>
                    </div>
                    <div className="emr-timeline-visits-divider"></div>
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="emr-center-icon emr-timeline-bar-icons">#2</i>
                    </div>
                    <div className="emr-timeline-visits-divider"></div>
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="emr-center-icon emr-timeline-bar-icons">#1</i>
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