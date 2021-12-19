import React from "react";
import { PatientContext } from "../models/patient_context";
import ItemSelectComponent from "./minicomponents/item_select";

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
          <div className="offset-xl-3 offset-lg-4 offset-md-1 col-md-10 col-lg-8 col-xl-6">
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
                    <p className="emr-quick-info-card-details">{new Date(this.context.last_seen).toLocaleString('en-NG')}</p>
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
                  <p className="emr-section-header emr-card-headers">SUMMARY</p>
                </div>
                <div className="col-12">
                  <div className="emr-clerking-tab-data m-0">
                    <h4 className="emr-card-headers">History</h4>
                    <div className="emr-clerking-tab-data-items">
                      <div className="emr-clerking-tab-data-item filled">
                        <div className="emr-patient-summary">
                          <h4 className="emr-card-headers">Biodata</h4>
                          <div className="emr-patient-summary-category">
                            <p className="emr-patient-summary-item text-wrap">The patient is <strong>{this.context.appointment.biodata.lastname.toUpperCase()}</strong> {this.context.appointment.biodata.firstname}, a <strong>{this.context.appointment.biodata.ageinyears}</strong> year old {this.context.appointment.biodata.gender.toLowerCase()} who works as <strong>{this.context.appointment.biodata.occupation}</strong> and lives at {this.context.appointment.biodata.address}, {this.context.appointment.biodata.city}, {this.context.appointment.biodata.state}. {this.context.appointment.biodata.gender.toLowerCase() === 'male' ? 'He' : 'She'} is <strong>{this.context.appointment.biodata.maritalstatus}</strong>, of the <strong>{this.context.appointment.biodata.tribe}</strong> tribe, and practises <strong>{this.context.appointment.biodata.religion}</strong>.</p>
                            {/* <br/>
                            <p className="emr-patient-summary-item text-wrap"><strong>Name:</strong> {this.context.appointment.biodata.lastname.toUpperCase()} {this.context.appointment.biodata.firstname}</p>
                            <p className="emr-patient-summary-item text-wrap"><strong>Age:</strong> {this.context.appointment.biodata.ageinyears}</p>
                            <p className="emr-patient-summary-item text-wrap"><strong>Sex:</strong> {this.context.appointment.biodata.gender}</p>
                            <p className="emr-patient-summary-item text-wrap"><strong>Occupation:</strong> {this.context.appointment.biodata.occupation}</p>
                            <p className="emr-patient-summary-item text-wrap"><strong>Marital Status:</strong> {this.context.appointment.biodata.maritalstatus}</p>
                            <p className="emr-patient-summary-item text-wrap"><strong>Address:</strong> {this.context.appointment.biodata.address}, {this.context.appointment.biodata.city}, {this.context.appointment.biodata.state}</p>
                            <p className="emr-patient-summary-item text-wrap"><strong>Religion:</strong> {this.context.appointment.biodata.religion}</p>
                            <p className="emr-patient-summary-item text-wrap"><strong>Tribe:</strong> {this.context.appointment.biodata.tribe}</p> */}
                          </div>
                          <br /><br />
                          <div className="emr-patient-summary">
                            <h4 className="emr-card-headers">Presenting Complaint</h4>
                            <div className="emr-patient-summary-category">
                              <ul>
                                {this.context.appointment.presenting_complaints.complaints.map(complaint =>
                                  <li><p className="emr-patient-summary-item text-wrap">{complaint.complaint} ({complaint.duration})</p></li>)}
                              </ul>
                              <p className="emr-patient-summary-item text-wrap">{this.context.appointment.presenting_complaints.notes}</p>
                            </div>
                          </div>
                          <br /><br />
                          <div className="emr-patient-summary">
                            <h4 className="emr-card-headers">Review of Systems</h4>
                            <div className="emr-patient-summary-category">
                              <div className="emr-selectable-items-group">
                                <p className="emr-patient-summary-item text-wrap">
                                  {[...this.context.appointment.review_of_systems.cardiorespiratory, ...this.context.appointment.review_of_systems.gastrointestinal, ...this.context.appointment.review_of_systems.genitourinary, ...this.context.appointment.review_of_systems.endocrine].join(", ")}
                                </p>
                              </div>
                              <p className="emr-patient-summary-item text-wrap">{this.context.appointment.review_of_systems.notes}</p>
                            </div>
                          </div>
                          <br /><br />
                          <div className="emr-patient-summary">
                            <h4 className="emr-card-headers">Past Medical History</h4>
                            <div className="emr-patient-summary-category">
                              <div className="emr-selectable-items-group">
                                <p className="emr-patient-summary-item text-wrap">
                                  The patient has had {this.context.appointment.past_medical_history.hospitalizations.length} hospitalization(s), {this.context.appointment.past_medical_history.surgeries.length} surgeries, {this.context.appointment.past_medical_history.blood_transfusions.length}. The patient has {this.context.appointment.past_medical_history.comorbidities > 0 ? this.context.appointment.past_medical_history.comorbidities.join(", ") : "no comorbidites"}. Blood group is {this.context.appointment.past_medical_history.blood_group.toUpperCase()} {this.context.appointment.past_medical_history.rhesus.toLowerCase()}. The genotype is {this.context.appointment.past_medical_history.genotype}.
                                </p>
                                <br />
                                <p className="emr-patient-summary-item text-wrap">
                                  {this.context.appointment.past_medical_history.notes}
                                </p>
                              </div>
                            </div>
                          </div>
                          <br /><br />
                          <div className="emr-patient-summary">
                            <h4 className="emr-card-headers">Drugs and Allergies</h4>
                            <div className="emr-patient-summary-category">
                              <div className="emr-selectable-items-group">
                                <p className="emr-patient-summary-item text-wrap">
                                  The patient is on {this.context.appointment.drugs.length} drug(s){this.context.appointment.drugs.length > 0 ? `: ${this.context.appointment.drugs.map(drug => drug.name).join(", ")}` : ""}. There is/are {this.context.appointment.allergies.length} allerg(ies).
                                </p>
                              </div>
                            </div>
                          </div>
                          <br /><br />
                          <div className="emr-patient-summary">
                            <h4 className="emr-card-headers">Family History</h4>
                            <div className="emr-patient-summary-category">
                              <div className="emr-selectable-items-group">
                                <p className="emr-patient-summary-item text-wrap">
                                  {this.context.appointment.family_history.length > 0 ? `Positive family history(s) include ${this.context.appointment.family_history.join(", ")}` : "No family history of disease"}. {this.context.appointment.alcohol.alcoholbottlesperweek ? `${this.context.appointment.alcohol.alcoholbottlesperweek} bottle(s) of ${this.context.appointment.alcohol.alcoholbottletype.join(", ")} is/are consumed per week` : "No history of alcohol consumption"}. The patient smokes {Number(this.context.appointment.cigarette.cigarettesticksperday) * Number(this.context.appointment.cigarette.cigarettesmokingduration) / 20} pack-year.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4 className="emr-card-headers">Examinations and Investigations</h4>
                      <div className="emr-clerking-tab-data-item filled">
                        <div className="emr-patient-summary">
                          <h4 className="emr-card-headers">Examinations</h4>
                          <div className="emr-patient-summary-category">
                            <p className="emr-patient-summary-item text-wrap">On general examination, the following is/are the pertinent findings: {this.context.appointment.general.onexamination.join(", ")}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.general.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.cvs.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.chest.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.abdomen.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.others.notes}</p>
                            <br />
                            <p className="emr-patient-summary-item text-wrap"><strong>On neurological examination,</strong></p>
                            <p className="emr-patient-summary-item text-wrap">Higher mental functions: {this.context.appointment.neuro.highermentalfunctions}</p>
                            <p className="emr-patient-summary-item text-wrap">Cranial nerves: {this.context.appointment.neuro.cranialnerves}</p>
                            <p className="emr-patient-summary-item text-wrap">Notes: {this.context.appointment.neuro.notes}</p>
                          </div>
                        </div>
                        <br />
                        <div className="emr-patient-summary">
                          <h4 className="emr-card-headers">Investigations</h4>
                          <div className="emr-patient-summary-category">
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.imaging.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.electrical.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.haematology.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.labs.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.microbiology.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.procedures.notes}</p>
                          </div>
                        </div>
                      </div>
                      <h4 className="emr-card-headers">{'Summary'}</h4>
                      <div className="emr-clerking-tab-data-item filled">
                        <div className="emr-patient-summary">
                          <h4 className="emr-card-headers">Assessment and Plan</h4>
                          <div className="emr-patient-summary-category">
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.assessment.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.plan.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.monitoring.notes}</p>
                          </div>
                        </div>
                        <br />
                        <div className="emr-patient-summary">
                          <h4 className="emr-card-headers">Treatment</h4>
                          <div className="emr-patient-summary-category">
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.pharmacological.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.nonpharmacological.notes}</p>
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.other.notes}</p>
                          </div>
                        </div>
                        <br />
                        <div className="emr-patient-summary">
                          <h4 className="emr-card-headers">Supplementary Notes</h4>
                          <div className="emr-patient-summary-category">
                            <p className="emr-patient-summary-item text-wrap">{this.context.appointment.notes}</p>
                          </div>
                        </div>
                      </div>
                    </div>
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