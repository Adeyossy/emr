import React from "react";
import NotesOnlyComponent from "../minicomponents/notes_only";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import { PatientContext } from "../../models/patient_context";

export default class AbdominalExamComponent extends React.Component{
  componentDidMount() {
    if (!this.context[this.context.last_viewed].abdomen.onexamination) {
      console.log('abdominal signs do not exist');
    }
  }

  static contextType = PatientContext;

  onItemChange = (id, value) => {
    this.props.updateItemsInArray([this.context.last_viewed, "abdomen", id], 
    value.split(", "), null);
  }
  
  render(){
    const items = ["Caput Medusae", "Excoriations", "Flat", "Spider Naevi", "Ascites",
      "Full", "Tenderness", "Distended"]
    const abdomen = this.context[this.context.last_viewed].abdomen;
    const abdominalSigns = abdomen.onexamination && Array.isArray(abdomen.onexamination) ?
      abdomen.onexamination : [];
    return(
      <>
        <MultiSelectOutputComponent name={"Abdominal Signs"} id={"onexamination"}
            value={abdominalSigns.join(", ")}
            items={items} onItemChange={this.onItemChange} />
            
      <NotesOnlyComponent fields={["abdomen"]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={"Abdomen"} />
      </>
    );
  }
}