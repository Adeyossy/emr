import React from "react";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class AxisIVComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Aetiology</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <h4 className="emr-card-headers">Possible electro-clinical syndrome(s)</h4>
            <MultiSelectOutputComponent name={"Syndromes"} id={"electroclinicalsyndromes"}
              items={["Simple febrile seizures", "Complex febrile seizures",
                "Localized headaches", "Previous head injury", "CNS tumours",
                "Previous loss of consciousness", "Family history of epilepsy",
                "Eventful pregnancy or birth history", "Previous stroke", "Learning disability",
                "Developmental disability",
                "Status epilepticus or Acute repetitive seizures at onset of seizures"]}
              onItemChange={this.onItemChange} />
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="familyhistoryepilepsy">Family history of epilepsy (describe)</label>
                <textarea name="familyhistoryepilepsy" id="familyhistoryepilepsy" cols="30" rows="10" placeholder="write here..."></textarea>
              </div>
              <SingleSelectOutputComponent
                name={"Status epilepticus or Acute repetitive seizures at onset of seizures"}
                id={"statusepilepticus"} items={["Yes", "No"]}
                onItemChange={this.onItemChange} />
              <SingleSelectOutputComponent
                name={`Ever had attacks occur in clusters that last more than 5 mins or regain 
                consciousness more than 1 hour`}
                id={"attacksinclusters"} items={["Yes", "No"]}
                onItemChange={this.onItemChange} />
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="seizureprecipitant">List seizure precipitant</label>
                <textarea name="seizureprecipitant" id="seizureprecipitant" cols="30" rows="10" placeholder="write here..."></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}