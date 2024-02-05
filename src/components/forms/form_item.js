import React from 'react';
import { PatientContext } from '../../models/patient_context';
import SingleItemSelectComponent from '../minicomponents/single_item_select';

export default class FormItemComponent extends React.Component {
  static contextType = PatientContext;

  update = (index) => {
    const thisForm = this.context[this.context.last_viewed].forms[this.props.formTag];
    const value = thisForm[this.props.field];
    const found = this.props.desc.find((_des, i) => i === index);
    if (found) this.props.onItemChange(this.props.field, this.props.min);
    else this.props.onItemChange(this.props.field, index);
  }

  render() {
    const thisForm = this.context[this.context.last_viewed].forms[this.props.formTag];
    const value = thisForm[this.props.field];
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="emr-form-item">
              <ul>
                {
                  <SingleItemSelectComponent selectableItems={this.props.desc} 
                    selectedItem={this.props.desc[value]} displayInBox={this.update} />
                }
              </ul>
            </div>
          </div>
          {
            this.props.field ?
              <div className="col-3">
                <div className="emr-form-item-score">
                  <input type="number" name={this.props.field} min={this.props.min}
                    max={this.props.max} onChange={(event) => this.props.onItemChange(event.target.name, 
                      event.target.value)}
                    value={value}>
                  </input>
                </div>
              </div> : null
          }
        </div>
      </div>
    )
  }
}