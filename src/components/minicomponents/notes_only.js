import React from "react";

export default class NotesOnlyComponent extends React.Component{
  constructor(props){
    super(props);
  }
  
  onThisItemChange = (event) => {
    this.props.onItemChange(event.target.name, event.target.value);
  }

  render(){
    return(
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">{this.props.notesHeader}</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`${this.props.notesHeader.split(" ").join("")}notes`}>Relevant Notes</label>
            <textarea name={`${this.props.notesHeader.split(" ").join("")}notes`} 
              id={`${this.props.notesHeader.split(" ").join("")}notes`} cols="30" 
                rows="10" placeholder="write here..." onChange={this.onThisItemChange}></textarea>
          </div>
        </div>
      </div>
    );
  }
}