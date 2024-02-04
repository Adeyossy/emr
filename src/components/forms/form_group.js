import React from "react";
import FormItemComponent from "./form_item";

export default class FormGroupComponent extends React.Component {
  render() {
    return (
      <div className="pt-4">
        <h6 className="emr-card-headers">{this.props.groupName}</h6>
        <div className="emr-clerking-tab-data-items">
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}