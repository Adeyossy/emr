import React from "react";
import { PatientContext } from "../../models/patient_context";

export default class NotesOnlyComponent extends React.Component {
  static contextType = PatientContext;

  onThisItemChange = (event) => {
    // console.log("notes only where => ", event.target.name, this.props.fields);
    this.props.updateAnyObject(event.target.name, event.target.value,
      [this.context.last_viewed, ...this.props.fields], null);
  }

  componentDidUpdate() {
    // console.log("notes only: ", this.props.notesHeader.split(" ").join("_").toLowerCase(), " => ",
    //   this.context[this.props.notesHeader.split(" ").join("_").toLowerCase()]);
  }

  render() {
    const value = this.props.value ? 
    this.context[this.context.last_viewed][this.props.value].notes :
    this.context[this.context.last_viewed][this.props.notesHeader
      .split(" ").join("_").toLowerCase()].notes;
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">{this.props.notesHeader}</h4>
        <div className="emr-clerking-tab-data-items">
          <div className={`emr-clerking-tab-data-item ${value ? "filled" : ""}`}>
            <label htmlFor={`${this.props.notesHeader.split(" ").join("_")}notes`}>Relevant Notes</label>
            <textarea name={`notes`}
              id={`${this.props.notesHeader.split(" ").join("")}notes`} cols="30"
              rows="10" placeholder="write here..." onChange={this.onThisItemChange}
              value={value} className={value ? "filled" : ""}></textarea>
          </div>
        </div>
      </div>
    );
  }
}