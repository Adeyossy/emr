import React from 'react';
import { PatientContext } from '../../models/patient_context';
import SingleItemSelectComponent from '../minicomponents/single_item_select';

export default class FormItemComponent extends React.Component {
  static contextType = PatientContext;

  update = (index) => {
    const thisForm = this.context[this.context.last_viewed].forms[this.props.formTag];
    const value = thisForm[this.props.field];
    const found = this.props.desc.findIndex(des => des === value);
    if (found === index) this.props.onItemChange(this.props.field, -1);
    else this.props.onItemChange(this.props.field, index + this.props.min);
  }

  render() {
    const thisForm = this.context[this.context.last_viewed].forms[this.props.formTag];
    const value = thisForm[this.props.field];
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="emr-form-item">
            <label htmlFor={this.props.field}>{this.props.label}</label>
              <SingleItemSelectComponent selectableItems={this.props.desc}
                selectedItem={this.props.desc[value - this.props.min]} displayInBox={this.update} />
            </div>
          </div>
          {
            this.props.field ?
              <div className="col-3">
                <div className="emr-form-item-score">
                  <input type="number" name={this.props.field} min={this.props.min}
                    max={this.props.max} onChange={(event) => this.props.onItemChange(event.target.name,
                      event.target.value)} value={value} id={this.props.field}>
                  </input>
                </div>
              </div> : null
          }
        </div>
      </div>
    )
  }
}