import React from "react";
import FormItemComponent from "./form_item";

export default class FormGroupComponent extends React.Component {
  render() {
    return (
      <div className="emr-clerking-tab-data-items">
        {
          this.props.formitems.map((item, key) =>
            <div className="emr-clerking-tab-data-item" key={key.toString()}>
              <h6 className="">{"<Interpolate name here>"}</h6>
              <div className="emr-clerking-tab-data-items">
                {
                  this.props.children
                }
              </div>
            </div>
          )
        }
      </div>
    )
  }
}