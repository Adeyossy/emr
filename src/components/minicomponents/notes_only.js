import React from "react";
import { PatientContext } from "../../models/patient_context";

export default class NotesOnlyComponent extends React.Component {
  static contextType = PatientContext;

  onThisItemChange = (event) => {
    // console.log("notes only where => ", event.target.name, this.props.fields);
    this.props.updateAnyObject(event.target.name, event.target.value,
      this.props.fields, null);
  }

  componentDidUpdate() {
    // console.log("notes only: ", this.props.notesHeader.split(" ").join("_").toLowerCase(), " => ",
    //   this.context[this.props.notesHeader.split(" ").join("_").toLowerCase()]);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">{this.props.notesHeader}</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`${this.props.notesHeader.split(" ").join("_")}notes`}>Relevant Notes</label>
            <textarea name={`notes`}
              id={`${this.props.notesHeader.split(" ").join("")}notes`} cols="30"
              rows="10" placeholder="write here..." onChange={this.onThisItemChange}
              value={this.props.value ? this.context[this.props.fields[0]][this.props.fields[1]].notes :
                this.context[this.props.notesHeader.split(" ").join("_").toLowerCase()].notes}></textarea>
          </div>
        </div>
      </div>
    );
  }
}