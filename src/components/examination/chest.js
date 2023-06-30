import React from "react";
import NotesOnlyComponent from "../minicomponents/notes_only";

export default class ChestExamComponent extends React.Component{
  render(){
    return(
      <NotesOnlyComponent fields={["chest"]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={"Chest"} />
    );
  }
}