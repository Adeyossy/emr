import React from "react";
import NotesOnlyComponent from "../minicomponents/notes_only";

export default class ChestExamComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <NotesOnlyComponent fields={["appointment", "chest"]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={"Chest"} />
    );
  }
}