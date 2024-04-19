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
        <div className="row px-5 pt-5 pb-4">
          <div className="col-12">
            <div className="emr-form-item">
              <label htmlFor={this.props.field}>{this.props.label}</label>
              {
                this.props.examiner ?
                  <>
                    <p className="text-wrap">{this.props.examiner}</p>
                    <br />
                  </> : null
              }
              <SingleItemSelectComponent selectableItems={this.props.desc}
                selectedItem={this.props.desc[value - this.props.min]} displayInBox={this.update} />
            </div>
          </div>
        </div>
        <div className="row g-0 bg-light px-5 py-3">
          {
            this.props.field ?
              <div className="col-12 col-md-6 col-lg-4">
                <div className="emr-form-item-score">
                  <span>Score: </span>
                  <input type="text" name={this.props.field} min={this.props.min}
                    max={this.props.max} onChange={(event) => this.props.onItemChange(event.target.name,
                      event.target.value)} value={value !== "" ? value : this.props.min - 1}
                    id={this.props.field} className={`d-inline w-auto 
                    p-1${value || parseInt(value) === 0 ? " filled" : ""}`}>
                  </input>
                </div>
              </div> : null
          }
        </div>
      </div>
    )
  }
}