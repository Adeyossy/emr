import React from "react";
import FormItemComponent from "./form_item";

export default class FormGroupComponent extends React.Component {
  render() {
    return (
      <div className="pt-4 mb-5">
        <h6 className="emr-card-headers">{this.props.group[0]}</h6>
        {
          this.props.group.length > 2 ?
          this.props.group[2].split("|").map((item, index) =>
          item ? <p className="text-wrap d-block" key={index.toString()}>{item}</p> : <br />)
          : null
        }
        <br />
        <div className="emr-clerking-tab-data-items">
          {
            this.props.children
          }
        </div>
        <br /><br />
        <hr />
      </div>
    )
  }
}