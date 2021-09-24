import React from "react";
import IntReactiveComponent from "../minicomponents/int_reactive";

export default class DrugsAllergiesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number_of_drugs: 0,
      number_of_allergies: 0
    }
  }

  updateInts = (event) => {
    if (event.target.name === "numberofdrugs") {
      this.setState({
        number_of_drugs: event.target.value
      });
    } else {
      this.setState({
        number_of_allergies: event.target.value
      });
    }
  }

  render() {
    const drugChildren = [];
    for (let i = 0; i < this.state.number_of_drugs; i++) {
      drugChildren.push(
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <h4 className="emr-card-headers">Drug {i + 1}</h4>
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
      );
    }

    const allergiesChildren = [];
    for (let j = 0; j < this.state.number_of_allergies; j++) {
      allergiesChildren.push(
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <h4 className="emr-card-headers">Allergies {j + 1}</h4>
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
      )
    }

    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Drugs and Allergies</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofdrugs">Number of Intercurrent Drugs</label>
            <input type="number" name="numberofdrugs" id="numberofdrugs"
              className="mb-4" value={this.state.number_of_drugs} onChange={this.updateInts}
                min={0} max={20}></input>
            {drugChildren}
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofallergies">Number of Allergies</label>
            <input type="number" name="numberofallergies" id="numberofallergies"
              className="mb-4" value={this.state.number_of_allergies} onChange={this.updateInts}
                min={0} max={20}></input>
            {/* <!-- Next list level --> */}
            {allergiesChildren}
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