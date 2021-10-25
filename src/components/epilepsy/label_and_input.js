import React from "react";

export default class LabelAndInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      [this.props.id]: ""
    }
  }

  onItemChangeInComponent = (event) => {
    this.props.onItemChange(event.target.name, event.target.value);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data-item">
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <input type={this.props.type} name={this.props.id} id={this.props.id}
          value={this.props.value} onChange={this.onItemChangeInComponent}>
        </input>
      </div>
    )
  }
}