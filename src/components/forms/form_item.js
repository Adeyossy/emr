import React from 'react';
import { PatientContext } from '../../models/patient_context';

export default class FormItemComponent extends React.Component {
  static contextType = PatientContext;

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="emr-form-item">
              <ul>
                {
                  this.props.desc.map((item, key) =>
                    <li className="emr-form-item-description text-wrap" key={key.toString()}>{item}</li>
                  )
                }
              </ul>
            </div>
          </div>
          {
            this.props.field ?
              <div className="col-3">
                <div className="emr-form-item-score">
                  <input type="number" name={this.props.field} min={this.props.min}
                    max={this.props.max} onChange={this.props.onItemChange}
                    value={this.context[this.context.last_viewed].forms[this.props.formTag][this.props.field]}>
                  </input>
                </div>
              </div> : null
          }
        </div>
      </div>
    )
  }
}