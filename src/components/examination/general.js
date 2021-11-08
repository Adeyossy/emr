import React from "react";
import { PatientContext } from "../../models/patient_context";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import NotesComponent from "../minicomponents/notes";

export default class GeneralExamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["Febrile", "Pale", "Icteric", "Cyanosed", "Dehydrated", "Digital Clubbing",
      "Peripheral Lymphadenopathy", "Pedal Oedema"];
  }

  static contextType = PatientContext;

  onItemChange = (id, value) => {
      this.props.updateItemsInArray(["general", id], value.split(", "), null);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">General Examination</h4>
        <div className="emr-clerking-tab-data-items">
          <MultiSelectOutputComponent name={"On Examination: "} id={"onexamination"}
            value={this.context.general.onexamination.join(", ")}
            items={this.items} onItemChange={this.onItemChange} />
          {/* <div className="emr-clerking-tab-data-item">
            <label htmlFor="generalexamnotes">Notes</label>
            <textarea name="generalexamnotes" id="generalexamnotes" cols="30" rows="10" placeholder="write here..."></textarea>
          </div> */}
          <NotesComponent id={"notes"} fields={["general"]}
            value={this.context.general.notes} onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    );
  }
}