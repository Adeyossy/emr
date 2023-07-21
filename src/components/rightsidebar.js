import React from "react";
import { PatientContext } from "../models/patient_context";

export default class RightSideBarComponent extends React.Component {
  static contextType = PatientContext;

  onItemChange = (event) => {
    this.props.updateAnyObject(event.target.name, event.target.value, [this.context.last_viewed])
  }

  onDiagnosisChange = (event) => {
    this.props.updateAnyObject(event.target.name, event.target.value, []);
  }

  render() {
    const apntmnt_notes = !this.context.last_viewed ?
      this.context.last_notes : this.context[this.context.last_viewed].notes;

    return (
      <div className="container-fluid">
        <div className="row g-0">
          <div className={`d-none ${this.props.isDrawerOpen ? 'offset-xl-9 col-xl-3 d-xl-block' : 'offset-lg-8 col-lg-4 d-lg-block'} emr-sidebar emr-sidebar-r`}>
            <div className="emr-right-sidebar emr-column">
              {
                this.props.children.find(child => child) ?
                  this.props.children :
                  <>
                    <div className="container-fluid">
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="emr-quick-info-card diagnosis primary-diagnosis emr-right-sidebar-item">
                            <p className="emr-quick-info-card-title">1<sup>o</sup> Diagnosis</p>
                            <textarea name="primary_diagnosis" id="primary_diagnosis" rows="3"
                              value={this.context.primary_diagnosis} placeholder="Click to type"
                              onChange={this.onDiagnosisChange} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="emr-quick-info-card diagnosis secondary-diagnosis emr-right-sidebar-item">
                            <p className="emr-quick-info-card-title text-white">2<sup>o</sup> Diagnosis</p>
                            <textarea name="secondary_diagnosis" id="secondary_diagnosis" rows="3"
                              value={this.context.secondary_diagnosis} className="text-white"
                              onChange={this.onDiagnosisChange} placeholder="Click to type" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="emr-right-sidebar-item notes">
                      <h6 className="emr-card-headers emr-right-sidebar-item-header">Notes</h6>
                      <div className="emr-right-sidebar-item-content">
                        <textarea name="notes" id="consultation"
                          className={`emr-right-sidebar-item-textbox ${apntmnt_notes ? 'filled' : ''}`}
                          value={apntmnt_notes}
                          onChange={this.onItemChange}>
                        </textarea>
                      </div>
                    </div>
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}