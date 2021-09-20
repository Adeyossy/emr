import React from "react";

export default class BiodataComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Identifying Information</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="firstname">Name</label>
            <div className="emr-clerking-biodata-names">
              <input type="text" name="firstname" id="firstname" placeholder="First name" required></input>
              <input type="text" name="middlename" id="middlename" placeholder="Middle name" required></input>
              <input type="text" name="surname" id="surname" placeholder="Surname" required></input>
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="age">Age (in years)</label>
            <input type="number" name="age" id="age" placeholder="e.g. 39" min="0" max="200" required></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="gender">Gender</label>
            <div className="emr-selectable-items-group">
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Male</p>
              </div>
              <div className="emr-selectable-item selected">
                <p className="emr-selectable-item-text">Female</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Other</p>
              </div>
            </div>
            <input type="text" name="gender" id="gender" placeholder="e.g. female" required></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="occupation">Occupation</label>
            <input type="text" name="occupation" id="occupation" placeholder="e.g. teacher" required></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="occupation">Marital Status</label>
            <div className="emr-selectable-items-group">
              <div className="emr-selectable-items-group">
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">Single</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">Married</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">Separated</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">Divorced</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">Widowed</p>
                </div>
              </div>
            </div>
            <input type="text" name="informant" id="informant" placeholder="e.g. patient" required></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="address">Address</label>
            <textarea name="address" id="address" cols="30" rows="10" placeholder="Address goes here"></textarea>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="religion">Religion</label>
            <div className="emr-selectable-items-group">
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Christianity</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Islam</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Traditional</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Other</p>
              </div>
            </div>
            <input type="text" name="religion" id="religion" placeholder="e.g. christianity" required></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="tribe">Tribe</label>
            <div className="emr-selectable-items-group">
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Yoruba</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Igbo</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Hausa</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Fulani</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Ibiobio</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Kanuri</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Other</p>
              </div>
            </div>
            <input type="text" name="tribe" id="tribe" placeholder="e.g. yoruba" required></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="tribe">Informant</label>
            <div className="emr-selectable-items-group">
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Patient</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Parents</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Father</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Mother</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Brother</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Sister</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Other</p>
              </div>
            </div>
            <input type="text" name="informant" id="informant" placeholder="e.g. patient" required></input>
          </div>
        </div>
      </div>
    )
  }
}