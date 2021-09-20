import React from "react";

export default class DrugsAllergiesComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Drugs and Allergies</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofdrugs">Number of Intercurrent Drugs</label>
            <input type="number" name="numberofdrugs" id="numberofdrugs" className="mb-4" required></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Drug 1</h4>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="transfusionvolume1">Drug Name</label>
                    <input type="text" name="transfusionvolume1" id="transfusionvolume1"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="drugdosage">Drug Dosage (in mg)</label>
                    <input type="number" name="drugdosage" id="drugdosage"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="drugusage">Drug Usage</label>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Once Daily</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Twice Daily</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Three times daily</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Other</p>
                      </div>
                    </div>
                    <input type="text" name="drugusage" id="drugusage"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofallergies">Number of Allergies</label>
            <input type="number" name="numberofallergies" id="numberofallergies" className="mb-4" required></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Allergies 1</h4>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="allergyname">Allergic to:</label>
                    <input type="text" name="allergyname" id="allergyname"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="allergicreaction">Allergic reaction experienced</label>
                    <input type="number" name="allergicreaction" id="allergicreaction"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="notes">Notes</label>
            <textarea name="notes" id="notes" cols="30" rows="10" placeholder="write here..."></textarea>
          </div>
        </div>
      </div>
    );
  }
}