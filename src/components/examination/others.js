import React from "react";
import NotesOnlyComponent from "../minicomponents/notes_only";

export default class OtherExamComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <NotesOnlyComponent fields={["appointment", "others"]}
        updateAnyObject={this.props.updateAnyObject} notesHeader={"Others"} />
    );
  }
}