import React from "react";

export default class NotesComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onThisItemChange = (event) => {
    this.props.onItemChange(event.target.name, event.target.value);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data-item">
        <label htmlFor={this.props.id}>{this.props.name ? this.props.name : "Notes"}</label>
        <textarea name={this.props.id} id={this.props.id} cols="30"
          rows="5" placeholder="write here..." onChange={this.onThisItemChange}
          value={this.props.value}></textarea>
      </div>
    );
  }
}