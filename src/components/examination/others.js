import React from "react";
import NotesOnlyComponent from "../minicomponents/notes_only";

export default class OtherExamComponent extends React.Component{
  render(){
    return(
      <NotesOnlyComponent fields={["others"]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={"Others"} />
    );
  }
}