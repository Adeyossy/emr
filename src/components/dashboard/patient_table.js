import React from "react";

export default class PatientTableComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="emr-patient-list">
        <h6 className="emr-headers">Patients</h6>
        <table>
          <thead>
            <tr>
              <th scope="col">ICON</th>
              <th scope="col">NAME</th>
              <th scope="col">AGE</th>
              <th scope="col">HOSPITAL NUMBER</th>
              <th scope="col">1<sup>o</sup> DIAGNOSIS</th>
              <th scope="col">2<sup>o</sup> DIAGNOSIS</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.patients.map((item, index) => 
              <tr key={index.toString()} onClick={this.props.onItemClicked.bind(this, item.patient_id)}>
                <td>
                  <div className="emr-icon-bg emr-icon-bg-dark">
                    {/* <!-- Insert age-appropriate icon here --> */}
                    <i className="bi bi-person-fill emr-center-icon"></i>
                  </div>
                </td>
                <td>{item.firstname || item.lastname ? item.firstname + " " + item.lastname : "--"}</td>
                <td>{item.ageinyears ? `${item.ageinyears} yrs` : "--"}</td>
                <td>{item.id}</td>
                <td>{item.primary_diagnosis}</td>
                <td>{item.secondary_diagnosis}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}