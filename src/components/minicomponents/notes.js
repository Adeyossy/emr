import React from "react";
import { PatientContext } from '../../models/patient_context';

export default class NotesComponent extends React.Component {
  static contextType = PatientContext;

  onThisItemChange = (event) => {
    const fields = [this.context.last_viewed, ...this.props.fields]
    this.props.onItemChange(event.target.name, event.target.value, fields, null);
    // console.log(event.target.name, " => ", event.target.value);
  }

  render() {
    return (
      <div className={`emr-clerking-tab-data-item ${this.props.value ? "filled" : ""}`}>
        <label htmlFor={this.props.id}>{this.props.name ? this.props.name : "Notes"}</label>
        <textarea name={this.props.id} id={this.props.id} cols="30"
          rows={this.props.height ? this.props.height : "4"} placeholder="write here..." 
          onChange={this.onThisItemChange} value={this.props.value} 
          className={this.props.value ? "filled" : ""}></textarea>
      </div>
    );
  }
}