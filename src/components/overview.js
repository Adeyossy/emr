import React from "react";
import { PatientContext } from "../models/patient_context";

export default class OverviewComponent extends React.Component {
  static contextType = PatientContext;

  render() {
    const comorbiditiesMap = {
      hypertension: "HTN",
      diabetes: "DM",
      pepticulcerdx: "PUD",
      asthma: "AST",
      epilepsy: "EPI"
    }
    return (
      <div className="container-fluid">
        <div className="row g-0">
          <div className="offset-xl-3 col-xl-6">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="emr-card emr-biodata-summary-card">
                    <div className="emr-biodata-summary-top">
                      <div className="emr-biodata-name-and-icon d-inline-block">
                        <div className="emr-icon-bg emr-icon-bg-light emr-summary-icon-bg d-inline-block">
                          {/* <!-- Insert age-appropriate icon here --> */}
                          <i className="bi bi-person-fill emr-center-icon emr-summary-icon"></i>
                        </div>
                        <div className="emr-biodata-summary-name ml-3 d-inline-block">
                          <p className="emr-biodata-summary-title">
                            {
                              this.context.appointment.biodata.maritalstatus === "Single" ?
                                this.context.appointment.biodata.gender === "Female" ? "Ms." : "Mrs." : "Mr."
                            }
                          </p>
                          <p className="emr-biodata-summary-first-name">{this.context.appointment.biodata.firstname}</p>
                          <p className="emr-biodata-summary-last-name">{this.context.appointment.biodata.lastname.toUpperCase()}</p>
                        </div>
                      </div>
                      <div className="emr-summary-divider"></div>
                      <div className="emr-biodata-summary-other">
                        <p className="emr-biodata-summary-gender">{this.context.appointment.biodata.gender}</p>
                        <p className="emr-biodata-summary-age">{this.context.appointment.biodata.ageinyears} yrs</p>
                      </div>
                    </div>
                    <div className="emr-biodata-summary-bottom">
                      <div className="emr-biodata-bottom-item">
                        <i className="bi bi-briefcase-fill emr-accent-icon"></i>
                        <p className="emr-biodata-bottom-text">{this.context.appointment.biodata.occupation}</p>
                      </div>
                      <div className="emr-biodata-bottom-item">
                        <i className="bi bi-person-fill emr-accent-icon"></i>
                        <p className="emr-biodata-bottom-text">{this.context.appointment.biodata.tribe.toUpperCase() + "   |   "
                          + this.context.appointment.biodata.religion.toUpperCase()}</p>
                      </div>
                      <div className="emr-biodata-bottom-item">
                        <i className="bi bi-geo-alt-fill emr-accent-icon"></i>
                        <p className="emr-biodata-bottom-text">{this.context.appointment.biodata.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 emr-column">
                  <div className="emr-quick-info">
                    <div className="emr-quick-info-top-item emr-quick-visits">
                      <p className="emr-quick-info-value">{this.context.appointments.length}</p>
                      <h6 className="emr-quick-info-category">VISIT(S)</h6>
                    </div>
                    {
                      this.context.appointment.past_medical_history.comorbidities
                        .filter(item => item.comorbidity && item.duration).slice(0, 2).map((item) =>
                          <>
                            <div className="emr-quick-info-divider"></div>
                            <div className="emr-quick-info-top-item emr-quick-comorbidity-2">
                              <p className="emr-quick-info-value">{item.duration} yr{item.duration > 1 ? "s" : ""}</p>
                              <h6 className="emr-quick-info-category">{
                                item.comorbidity ? Object.keys(comorbiditiesMap)
                                  .find(key => key = item.comorbidity.split(" ").join("").toLowerCase())
                                  ? comorbiditiesMap[item.comorbidity.split(" ").join("").toLowerCase()]
                                  : item.comorbidity.subString(0, 3).toUpperCase
                                  : ""
                              }</h6>
                            </div>
                          </>
                        )
                    }
                    {/* <div className="emr-quick-info-divider"></div>
                    <div className="emr-quick-info-top-item emr-quick-comorbidity-1">
                      <p className="emr-quick-info-value">5 yrs</p>
                      <h6 className="emr-quick-info-category">HTN</h6>
                    </div> */}
                    <div className="emr-horizontal-divider">
                      <hr></hr>
                    </div>
                    <div className="emr-quick-info-bottom-item emr-quick-drug-one">
                      <i className="bi bi-suit-heart-fill emr-accent-icon"></i>
                      <p className="emr-quick-info-drug-duration">duration</p>
                      <p className="emr-quick-info-drug-name">Drug name</p>
                      <p className="emr-quick-info-drug-dosage">Dosage</p>
                    </div>
                    <div className="emr-plus-button">+</div>
                    <div className="emr-quick-info-bottom-item emr-quick-drug-two">
                      <i className="bi bi-suit-heart-fill emr-accent-icon"></i>
                      <p className="emr-quick-info-drug-duration">duration</p>
                      <p className="emr-quick-info-drug-name">Drug name</p>
                      <p className="emr-quick-info-drug-dosage">Dosage</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="emr-quick-info-card">
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="bi bi-file-earmark-medical-fill emr-icons emr-center-icon"></i>
                    </div>
                    <p className="emr-quick-info-card-title">Last Seen</p>
                    <p className="emr-quick-info-card-details">{new Date(this.context.last_seen).toLocaleString('en-ng')}</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="emr-quick-info-card emr-quick-info-card-2">
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="bi bi-stopwatch-fill emr-icons emr-center-icon emr-accent-icon"></i>
                    </div>
                    <p className="emr-quick-info-card-title">Next Appointment</p>
                    <p className="emr-quick-info-card-details">To be determined</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="emr-quick-info-card emr-quick-info-card-3">
                    <div className="emr-icon-bg emr-icon-bg-dark">
                      <i className="bi bi-lightbulb-fill emr-icons emr-center-icon emr-accent-icon-2"></i>
                    </div>
                    <p className="emr-quick-info-card-title">Diagnosis</p>
                    <p className="emr-quick-info-card-details">{this.context.primary_diagnosis
                      ? this.context.primary_diagnosis : "pending"}</p>
                  </div>
                </div>
                <div className="col-12 emr-column">
                  <p className="emr-section-header emr-card-headers">TIMELINE</p>
                </div>
                <div className="col-lg-6 emr-column">
                  <div className="emr-chart emr-history-chart">
                    <h6 className="emr-chart-header">History: Symptom over Time</h6>
                    <div className="emr-coming-soon emr-card">
                      <p className="emr-coming-soon-text">coming soon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 emr-column">
                  <div className="emr-chart emr-examination-chart">
                    <h6 className="emr-chart-header">Examination: Sign over Time</h6>
                    <div className="emr-coming-soon emr-card">
                      <p className="emr-coming-soon-text">coming soon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 emr-column">
                  <div className="emr-chart emr-investigation-chart">
                    <h6 className="emr-chart-header">Investigations: Result</h6>
                    <div className="emr-coming-soon emr-card">
                      <p className="emr-coming-soon-text">coming soon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 emr-column">
                  <div className="emr-chart emr-management-chart">
                    <h6 className="emr-chart-header">Management: Drugs and Adjunct Therapy</h6>
                    <div className="emr-coming-soon emr-card">
                      <p className="emr-coming-soon-text">coming soon</p>
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