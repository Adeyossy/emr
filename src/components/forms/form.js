import React from "react";
import { PatientContext } from "../../models/patient_context";
import FormGroupComponent from "./form_group";
import FormItemComponent from "./form_item";

export default class FormComponent extends React.Component {
  /**
   * This component organizes a form into:
   * - A form group which coordinates the items in a form i.e. FormItemComponent
   * 
   */
  static contextType = PatientContext;

  onValueChange = (name, value) => {
    this.props.updateAnyObject(name, Number(value),
      [this.context.last_viewed, "forms", this.props.formTag], null);
  }

  render() {
    const value = this.context[this.context.last_viewed].forms[this.props.formTag];

    if (value) return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">{this.props.name}</h4>
        <br />
        <div className="emr-clerking-tab-data-items">
          {
            this.props.form.map((item, key) =>
              <FormGroupComponent groupName={item[0]} formgroupitems={item[1]} key={key.toString()}>
                {
                  item[1].map((formitem, key2) =>
                    <div className="emr-clerking-tab-data-item" key={(key2 + 100).toString()}>
                      <FormItemComponent desc={formitem[0]} field={formitem[1]}
                        min={formitem[2]} max={formitem[3]} formTag={this.props.formTag}
                        onItemChange={this.onValueChange} />
                    </div>
                  )
                }
              </FormGroupComponent>
            )
          }
        </div>
        <br />
        <button className="w-100"
          onClick={this.props.deleteForm.bind(Object.create(null), this.props.formTag)}>
          DELETE FORM
        </button>
      </div>
    ); else return null
  }
}