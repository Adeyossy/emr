import React from "react";
import NotesOnlyComponent from "../minicomponents/notes_only";

export default class CVSExamComponent extends React.Component{
  render(){
    return(
      <NotesOnlyComponent fields={["cvs"]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={"CVS"} />
    );
  }
}