import React from "react";
import NotesOnlyComponent from "../minicomponents/notes_only";

export default class CVSExamComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <NotesOnlyComponent fields={["appointment", "cvs"]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={"CVS"} />
    );
  }
}