import React from "react";
import { allergy, drug } from "../../models/patient";
import { PatientContext } from "../../models/patient_context";
import IntReactiveComponent from "../minicomponents/int_reactive";
import NotesComponent from "../minicomponents/notes";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class DrugsAllergiesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number_of_drugs: 0,
      number_of_allergies: 0
    }
  }

  static contextType = PatientContext;

  onItemChangeKeyed = (index, fields, id, value) => {
    console.log("index => ", index);
    console.log("id => ", id);
    console.log("value => ", value);
    this.props.updateAnyObject(id, value, fields, index);
  }

  onItemChange = (name, index, fields, event) => {
    console.log("arguments => ", name);
    this.onItemChangeKeyed(index, fields, name, event.target.value);
  }

  updateInts = (event) => {
    const value = event.target.value;
    if (event.target.name === "numberofdrugs") {
      this.props.updateItemsInArray(["drugs"],
        Object.assign({}, drug), value);
    } else {
      this.props.updateItemsInArray(["allergies"],
        Object.assign({}, allergy), value);
    }
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Drugs and Allergies</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofdrugs">Number of Intercurrent Drugs</label>
            <input type="number" name="numberofdrugs" id="numberofdrugs"
              className="mb-4" value={this.context.drugs.length} onChange={this.updateInts}
              min={0} max={20}></input>
            {
              this.context.drugs.map((item, index) =>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <h4 className="emr-card-headers">Drug {index + 1}</h4>
                    <div className="emr-clerking-tab-data-items">
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="drugname">Drug Name</label>
                        <input type="text" name="drugname" id="drugname"
                          value={this.context.drugs[index].drug_name}
                          onChange={this.onItemChange.bind(this, "name", index, ["drugs"])}></input>
                      </div>
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="drugdosage">Drug Dosage (in mg)</label>
                        <input type="number" name="drugdosage" id="drugdosage"
                          value={this.context.drugs[index].dosage}
                          onChange={this.onItemChange.bind(this, "dosage", index, ["drugs"])}></input>
                      </div>
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="drugdosage">Drug Reaction</label>
                        <input type="text" name="drugreaction" id="drugreaction"
                          value={this.context.drugs[index].reaction}
                          onChange={this.onItemChange.bind(this, "reaction", index, ["drugs"])}></input>
                      </div>
                      <SingleSelectOutputComponent name={"Drug Usage"} id={"usage"}
                        items={["Once Daily", "Twice Daily", "Three times daily",
                          "Four times daily"]}
                        value={this.context.drugs[index].usage}
                        onItemChange={this.onItemChangeKeyed.bind(this, index, ["drugs"])} />
                    </div>
                  </div>
                </div>
              )
            }
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofallergies">Number of Allergies</label>
            <input type="number" name="numberofallergies" id="numberofallergies"
              className="mb-4" value={this.context.allergies.length} onChange={this.updateInts}
              min={0} max={20}></input>
            {/* <!-- Next list level --> */}
            {
              this.context.allergies.map((item, index) =>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <h4 className="emr-card-headers">Allergies {index + 1}</h4>
                    <div className="emr-clerking-tab-data-items">
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="allergyname">Allergic to:</label>
                        <input type="text" name="allergyname" id="allergyname"
                          value={this.context.allergies[index].substance}
                          onChange={this.onItemChange.bind(this, "substance", index, ["allergies"])}></input>
                      </div>
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="allergicreaction">Allergic reaction experienced</label>
                        <input type="text" name="allergicreaction" id="allergicreaction"
                          value={this.context.allergies[index].reaction}
                          onChange={this.onItemChange.bind(this, "reaction", index, ["allergies"])}></input>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
          <NotesComponent id="drugs_and_allergies_notes"
            value={this.context.drugs_and_allergies_notes} fields={[]}
            onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    );
  }
}