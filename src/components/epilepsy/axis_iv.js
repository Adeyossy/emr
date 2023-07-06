import React from "react";
import { PatientContext } from "../../models/patient_context";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import NotesComponent from "../minicomponents/notes";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class AxisIVComponent extends React.Component {
  static contextType = PatientContext;

  onItemChange = (id, value) => {
    this.props.updateAnyObject(id, value, [this.context.last_viewed, "forms", "epilepsy", "axisIV"], null);
  }

  onMultiItemChange = (id, value) => {
      this.props.updateItemsInArray([this.context.last_viewed, "forms", "epilepsy", "axisIV", id], value.split(", "), null);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">Aetiology</h4>
        <div className="emr-clerking-tab-data-items">
          <MultiSelectOutputComponent name={"Etiology"} id={"aetiology"}
            items={["Simple febrile seizures", "Complex febrile seizures",
              "Localized headaches", "Previous head injury", "CNS tumours",
              "Previous loss of consciousness", "Family history of epilepsy",
              "Eventful pregnancy or birth history", "Previous stroke", "Learning disability",
              "Developmental disability", "Childhood afebrile seizures", 
              "Status epilepticus or Acute repetitive seizures at onset of seizures"]}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisIV.aetiology.join(", ")}
            onItemChange={this.onMultiItemChange} />
          {
            this.context[this.context.last_viewed].forms.epilepsy.axisIV.aetiology.includes("Family history of epilepsy") ?
              <NotesComponent name={"Family history of epilepsy (describe)"}
                id="familyhistoryepilepsy"  fields={["forms", "epilepsy", "axisIV"]}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisIV.familyhistoryepilepsy}
                onItemChange={this.props.updateAnyObject} /> :
              null
          }
          {
            this.context[this.context.last_viewed].forms.epilepsy.axisIV.aetiology
              .includes("Status epilepticus or Acute repetitive seizures at onset of seizures") ?
              <SingleSelectOutputComponent
                name={"Status epilepticus or Acute repetitive seizures at onset of seizures"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisIV.statusepilepticus}
                id={"statusepilepticus"} items={["Yes", "No"]} onItemChange={this.onItemChange} />
              : null
          }
          <SingleSelectOutputComponent
            name={`Ever had attacks occur in clusters that last more than 5 mins or regain 
                consciousness more than 1 hour`}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisIV.attacksinclusters}
            id={"attacksinclusters"} items={["Yes", "No"]}
            onItemChange={this.onItemChange} />
          <NotesComponent id={"seizure_precipitant"} name={"List seizure precipitant"}
           fields={["forms", "epilepsy", "axisIV"]}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisIV.seizure_precipitant}
            onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    );
  }
}