import React from "react";

export default class PatientItemComponent extends React.Component {
  render() {
    const item = this.props.patient;
    const apntmnt = item[item.last_viewed];
    return (
      <div className="emr-patient-list-item bg-white" key={item._id.toString()}
        onClick={this.props.goToPatient.bind(this, item._id)}>
        <div className="emr-icon-bg emr-icon-bg-dark">
          {/* <!-- Insert age-appropriate icon here --> */}
          <i className="bi bi-person-fill emr-center-icon"></i>
        </div>
        <div className="emr-patient-description">
          <p className="emr-patient-name">
            {apntmnt.biodata.lastname + " " + apntmnt.biodata.firstname}</p>
          <div className="emr-patient-biodata">
            <p className="emr-patient-gender">
              {apntmnt.biodata.gender.charAt(0).toUpperCase() + " / " + 
              apntmnt.biodata.ageinyears + " yrs" }
              </p>
            <p className="emr-separator">|</p>
            <p className="emr-patient-diagnosis">{item.primary_diagnosis}</p>
            <p className="emr-separator">|</p>
            <p className="emr-patient-age">{apntmnt.biodata.id}</p>
          </div>
        </div>
      </div>
    )
  }
}