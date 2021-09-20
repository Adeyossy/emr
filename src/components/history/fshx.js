import React from "react";

export default class FSHxComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Family and Social History</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="familyhistory">Family History of any of the following?</label>
            <div className="emr-selectable-items-group">
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Hypertension</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Diabetes Mellitus</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Asthma</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Peptic Ulcer Disease</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Epilepsy</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Other</p>
              </div>
            </div>
            <input type="text" name="familyhistory" id="familyhistory"></input>
          </div>
          <details className="emr-clerking-tab-data-item">
            <summary htmlFor="hypertension">Alcohol Consumption</summary>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="alcoholtype">What kind of alcohol is consumed?</label>
                <div className="emr-selectable-items-group">
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Beer</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Red wine</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Whiskey</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Brandy</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Vodka</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Other</p>
                  </div>
                </div>
                <input type="text" name="alcoholtype" id="alcoholtype"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="alcoholbottlesperweek">Number of bottles consumed per week</label>
                <input type="number" name="alcoholbottlesperweek" id="alcoholbottlesperweek"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="alcoholbottlesize">Size of each bottle (in ml)</label>
                <input type="number" name="alcoholbottlesize" id="alcoholbottlesize"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="alcoholconsumptionduration">Total duration of alcohol consumption (in years)</label>
                <input type="number" name="alcoholconsumptionduration" id="alcoholconsumptionduration"></input>
              </div>
            </div>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary htmlFor="hypertension">Cigarette Smoking</summary>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="cigarettesticksperday">Number of sticks per day</label>
                <input type="number" name="cigarettesticksperday" id="cigarettesticksperday"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="cigarettesmokingduration">Total duration of cigarette smoking (in years)</label>
                <input type="number" name="cigarettesmokingduration" id="cigarettesmokingduration"></input>
              </div>
            </div>
          </details>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="notes">Notes</label>
            <textarea name="notes" id="notes" cols="30" rows="10" placeholder="write here..."></textarea>
          </div>
        </div>
      </div>
    );
  }
}