import React from "react";
import "./dashboard.css";

export default class DashboardComponent extends React.Component {
  render() {
    return (
      <main>
        <div className="container-fluid emr-dashboard-container">
          <div className="row">
            {/* <!-- Start of the first column of the app --> */}
            <div className="col-xl-3 col-lg-4 col-md-10 mx-auto emr-column">
              <div className="emr-dashboard-welcome emr-first">
                <h1 className="emr-large-text emr-headers">Welcome</h1>
                <div className="emr-user">
                  <div className="emr-icon-bg emr-user-icon-bg">
                    <i className="bi bi-person-fill emr-center-icon"></i>
                  </div>
                  <h4 className="emr-user-name">DR. {this.props.user ? this.props.user.displayName.split(" ")[0].toUpperCase() : ""}</h4>
                </div>
              </div>
              <div className="emr-recent-patients">
                <h6 className="emr-headers">Recent Patients</h6>
                <div className="emr-card">
                  <div className="emr-patient-list">
                    {/* <!-- Anything with classname as -list-item will be in a for-loop --> */}
                    {this.props.recents.map((item, index) =>
                      <div className="emr-patient-list-item" key={index.toString()}
                        onClick={this.props.viewPatient.bind(this, item._id)}>
                        <div className="emr-icon-bg emr-icon-bg-dark">
                          {/* <!-- Insert age-appropriate icon here --> */}
                          <i className="bi bi-person-fill emr-center-icon"></i>
                        </div>
                        <div className="emr-patient-description">
                          <p className="emr-patient-name">{item.biodata.firstname + " " + item.biodata.lastname}</p>
                          <div className="emr-patient-biodata">
                            <p className="emr-patient-gender">{item.biodata.gender.charAt(0).toUpperCase()}</p>
                            <p className="emr-separator">|</p>
                            <p className="emr-patient-age">{item.biodata.ageinyears} yrs</p>
                            <p className="emr-separator">|</p>
                            <p className="emr-patient-diagnosis">{item.primary_diagnosis}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <button className="emr-button emr-card-button">ALL PATIENTS</button>
                </div>
              </div>
              <div className="emr-stats emr-card d-none d-lg-block">
                {/* <!-- stats on diagnoses go here --> */}
                <h6 className="emr-headers emr-card-headers">STATS: Diagnoses</h6>
                <div className="emr-coming-soon">
                  <p className="emr-coming-soon-text">coming soon</p>
                </div>
              </div>
            </div>
            {/* <!-- End of the first column of the app --> */}
            {/* <!-- Start of the second column of the app --> */}
            <div className="col-lg-8 col-xl-6 emr-column">
              <div className="container-fluid emr-first">
                <div className="row">
                  <div className="col-md-6">
                    <div className="emr-quick-button emr-new-patient emr-quick-button-light-bg"
                      onClick={this.props.createNewPatient}>
                      <div className="emr-icon-bg">
                        <i className="bi bi-file-earmark-plus emr-icons emr-center-icon"></i>
                      </div>
                      <div className="emr-quick-button-text">
                        <h6 className="emr-headers emr-card-headers">Create New Patient</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="emr-quick-button emr-investigation-portal emr-quick-button-dark-bg">
                      <div className="emr-icon-bg">
                        <i className="bi bi-file-earmark-medical-fill emr-icons emr-center-icon"></i>
                      </div>
                      <div className="emr-quick-button-text">
                        <h6 className="emr-headers emr-card-headers">Investigations Portal</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {this.props.children}
            </div>
            <div className="col-xl-3 col-lg-8 col-md-10 mx-auto emr-column">
              {/* <div className="emr-first"></div> */}
              <div className="emr-calendar-schedule">
                <h6 className="emr-headers">My Schedule</h6>
                <div className="emr-card emr-schedule-card">
                  <div className="emr-coming-soon">
                    <p className="emr-coming-soon-text">coming soon</p>
                  </div>
                </div>
              </div>
              <div className="emr-next-appointment">
                <h6 className="emr-headers">Next Appointment</h6>
                <div className="emr-card emr-appointment-card">
                  <div className="emr-coming-soon">
                    <p className="emr-coming-soon-text">coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}