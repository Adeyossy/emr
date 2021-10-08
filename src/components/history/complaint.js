import React from "react";
import { PatientContext } from "../../models/patient_context";
import NotesOnlyComponent from "../minicomponents/notes_only";

export default class ComplaintComponent extends React.Component{
  constructor(props){
    super(props);
  }

  static contextType = PatientContext;

  onItemChange = (event) => {
    this.props.updateComplaints(event.target.name)
  }

  render(){
    console.log("this.context => ", this.context);
    return(
      <NotesOnlyComponent notesHeader={"Presenting Complaint(s)"} 
      value={this.context.presenting_complaint.notes} 
        onItemChange={this.props.updateComplaints}
      />
    );
  }
}

// ComplaintComponent.contextType = PatientContext ? PatientContext : "";