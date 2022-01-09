import React from "react";

export default class PatientTableComponent extends React.Component {
  render() {
    return (
      <div className="emr-patient-list">
        <h6 className="emr-headers">Patients</h6>
        <table>
          <thead>
            <tr>
              <th scope="col" className="d-none d-lg-table-cell">ICON</th>
              <th scope="col" onClick={this.props.sortPatients
                .bind(Object.create(null), "name")}>NAME</th>
              <th scope="col" onClick={this.props.sortPatients
                .bind(Object.create(null), "age")}>AGE</th>
              <th scope="col" className="d-none d-lg-table-cell" onClick={this.props.sortPatients
                .bind(Object.create(null), "id")}>HOSPITAL NUMBER</th>
              <th scope="col" onClick={this.props.sortPatients
                .bind(Object.create(null), "d")}>1<sup>o</sup> DIAGNOSIS</th>
              <th scope="col" className="d-none d-lg-table-cell" onClick={this.props.sortPatients
                .bind(Object.create(null), "dd")}>2<sup>o</sup> DIAGNOSIS</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.authComplete ?
                this.props.patients.sort((a, b) => b - a).map((item, index) =>
                  <tr key={index.toString()} onClick={this.props.onItemClicked.bind(this, item._id)}>
                    <td className="d-none d-lg-table-cell">
                      <div className="emr-icon-bg emr-icon-bg-dark">
                        {/* <!-- Insert age-appropriate icon here --> */}
                        <i className="bi bi-person-fill emr-center-icon"></i>
                      </div>
                    </td>
                    <td>{item.appointment.biodata.firstname || item.appointment.biodata.lastname ?
                      item.appointment.biodata.lastname + " " + item.appointment.biodata.firstname : "--"}</td>
                    <td>{item.appointment.biodata.ageinyears ? `${item.appointment.biodata.ageinyears} 
                    yrs` : "--"}</td>
                    <td className="d-none d-lg-table-cell">{item.appointment.biodata.id}</td>
                    <td className="emr-text-wrap">{item.primary_diagnosis}</td>
                    <td className="d-none d-lg-table-cell emr-text-wrap">{item.secondary_diagnosis}</td>
                  </tr>) :
                new Array(5).fill("").map((item, index) =>
                  <tr key={index.toString()} className="emr-loading">
                    {new Array(6).fill().map((h, i) => <td key={i.toString()} className="emr-loading">
                      <p className="emr-loading">Loading... Loading...</p>
                    </td>)}
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}