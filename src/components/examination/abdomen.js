import React from "react";
import NotesOnlyComponent from "../minicomponents/notes_only";

export default class AbdominalExamComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <NotesOnlyComponent fields={["abdomen"]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={"Abdomen"} />
    );
  }
}