import React from "react";
import FormGroupComponent from "./form_group";
import FormItemComponent from "./form_item";

export default class FormComponent extends React.Component {
  render() {
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">{this.props.name}</h4>
        {
          this.props.form.map((item, key) =>
            <FormGroupComponent name={item[0]} formgroupitems={item[1]} key={key.toString()}>
              {
                item[1].map((formitem, key2) =>
                  <div className="emr-clerking-tab-data-item" key={key2.toString()}>
                    <FormItemComponent desc={formitem[0]} score={formitem[1]}
                      min={formitem[2]} max={formitem[3]} />
                  </div>
                )
              }
            </FormGroupComponent>
          )
        }
      </div>
    )
  }
}