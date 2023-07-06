import React from "react";
import { PatientContext } from "../../models/patient_context";
import NotesComponent from "../minicomponents/notes";

export default class AxisIIComponent extends React.Component {
  static contextType = PatientContext;

  onItemChange = (id, value) => {
    this.props.updateAnyObject(id, value, [this.context.last_viewed, "forms", "epilepsy", "axisII"], null);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">Seizure Classification (with brain location)</h4>
        <div className="emr-clerking-tab-data-items">
          <NotesComponent id={"classification"} name={"Classification"}
            fields={["forms", "epilepsy", "axisII"]}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisII.classification}
            onItemChange={this.props.updateAnyObject} />
          <NotesComponent id={"brain_locations"} name={"Possible Brain Locations"}
           fields={["forms", "epilepsy", "axisII"]}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisII.brain_locations}
            onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    );
  }
}