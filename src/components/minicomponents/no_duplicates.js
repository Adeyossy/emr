import React from "react";

export default class NoDuplicatesComponent extends React.Component {
  render() {
    return (
      <div className="emr-no-duplicates">
        <h1 className="emr-title">Create New Patient</h1>
        <h2 className="emr-subtitle">Check if a patient's record 
          already exists before creating a new one.</h2>
        <label htmlFor="emr-patient-name"></label>
        <input type="text" name="name" id="emr-patient-name" placeholder="Surname Firstname"/>
      </div>
    )
  }
}