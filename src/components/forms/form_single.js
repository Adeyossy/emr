import React from 'react';
import { PatientContext } from '../../models/patient_context';

export default class FormSingleComponent extends React.Component {
  static contextType = PatientContext;

  onItemClicked = (value) => {
    this.props.updateAnyObject(this.props.formTag, value,
      ["appointment", "forms", this.props.formTag], null);
  }

  render() {
    const value = this.context.appointment.forms[this.props.formTag][this.props.formTag];
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">{this.props.name}</h4>
        <br />
        <div className="emr-clerking-tab-data-items">
          {
            this.props.form.map((item, key) =>
              <details className={`emr-clerking-tab-data-item 
              ${value === item.value ? "filled" : ""}`}
                open={true} key={key.toString()}
                onClick={this.onItemClicked.bind(this, item.value)}>
                <summary>{item.name}</summary>
                <p className='emr-form-item-description text-wrap'>{item.description}</p>
              </details>
            )
          }
        </div>
        <br />
        <button className="w-100"
          onClick={this.props.deleteForm.bind(Object.create(null), this.props.formTag)}>
          DELETE FORM
        </button>
      </div>
    )
  }
}