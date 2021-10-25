import React from "react";
import { PatientContext } from "../models/patient_context";

export default class RightSideBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = PatientContext;

  onItemChange = (event) => {
    this.props.updateAnyObject(event.target.name, event.target.value, ["appointment"])
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row g-0">
          <div className="offset-lg-9 col-lg-3 emr-sidebar emr-sidebar-r">
            <div className="emr-right-sidebar emr-column">
              <div className="emr-quick-info-card emr-right-sidebar-item">
                <div className="emr-icon-bg emr-icon-bg-dark">
                  <i className="bi bi-lightbulb-fill emr-icons emr-center-icon"></i>
                </div>
                <p className="emr-quick-info-card-title">Diagnosis</p>
                <p className="emr-quick-info-card-details">{this.context.primary_diagnosis}</p>
              </div>
              <div className="emr-right-sidebar-item">
                <h6 className="emr-card-headers emr-right-sidebar-item-header">Notes</h6>
                <div className="emr-right-sidebar-item-content">
                  <textarea name="notes" id="consultation"
                    className="emr-right-sidebar-item-textbox" 
                    value={!this.context.appointment ? 
                      this.context.last_notes : this.context.appointment.notes }
                    onChange={this.onItemChange}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}