import React from "react";
import { PatientContext } from "../../models/patient_context";
import NotesComponent from "../minicomponents/notes";

export default class AxisIIIComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = PatientContext;

  onItemChange = (id, value) => {
    this.props.updateAnyObject(id, value, ["forms", "epilepsy", "axisIII"], null);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Electro-clinical Syndrome</h4>
        <div className="emr-clerking-tab-data-items">
        <NotesComponent id={"ecs_syndromes"} name={"Possible Electro-clinical Syndromes"}
         fields={["forms", "epilepsy", "axisIII"]}
            value={this.context.forms.epilepsy.axisIII.ecs_syndromes}
            onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    );
  }
}