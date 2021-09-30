import React from "react";
import LabelAndInputComponent from "../epilepsy/label_and_input";
import MultiItemSelectComponent from "../minicomponents/multi_item_select";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import SingleItemSelectComponent from "../minicomponents/single_item_select";

export default class FSHxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positiveFamilyHistory: [],
      familyHistory: ["Hypertension", "Diabetes Mellitus", "Asthma", "Peptic Ulcer Dx", "Epilepsy", "Other"]
    }
  }

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });
  }

  displayPositivesInInputBox = (index) => {
    const positiveFamilyHistory = this.state.familyHistory[index];
    const positiveFamilyHistories = this.state.positiveFamilyHistory.slice();
    const alreadyExists = this.state.positiveFamilyHistory.find((contents) => contents === positiveFamilyHistory);
    if (alreadyExists) {
      this.setState({
        positiveFamilyHistory: this.state.positiveFamilyHistory.filter((value) => value !== positiveFamilyHistory)
      });
    } else {
      positiveFamilyHistories.push(positiveFamilyHistory);
      this.setState({
        positiveFamilyHistory: positiveFamilyHistories
      });
    }
  }

  render() {
    const positiveFamilyHistory = this.state.positiveFamilyHistory.join(", ");
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Family and Social History</h4>
        <div className="emr-clerking-tab-data-items">
          <MultiSelectOutputComponent name={"Family History"} id={"familyhistory"}
            items={["Hypertension", "Diabetes Mellitus", "Asthma", "Peptic Ulcer Dx", "Epilepsy", "Other"]}
            onItemChange={this.onItemChange} displayInBox={this.displayPositivesInInputBox} />
          {/* <div className="emr-clerking-tab-data-item">
            <label htmlFor="familyhistory">Family History of any of the following?</label>
            <MultiItemSelectComponent selectableItems={this.state.familyHistory} displayInBox={this.displayPositivesInInputBox} />
            <input type="text" name="familyhistory" id="familyhistory" defaultValue={positiveFamilyHistory}></input>
          </div> */}
          <details className="emr-clerking-tab-data-item">
            <summary htmlFor="hypertension">Alcohol Consumption</summary>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              <MultiSelectOutputComponent id={"alcoholtype"}
                name={"What kind of alcohol is consumed?"}
                items={["Beer", "Red wine", "Whiskey", "Brandy", "Vodka", "Other"]}
                onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"alcoholbottlesperweek"}
                title={"Number of bottles consumed per week"} type={"number"}
                onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"alcoholbottlesize"}
                title={"Size of each bottle (in ml)"} type={"number"}
                onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"alcoholconsumptionduration"}
                title={"Total duration of alcohol consumption (in years)"} type={"number"}
                onItemChange={this.onItemChange} />
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