import React from "react";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class Comorbidities extends React.Component {
  render() {
    return (
      <div className="emr-clerking-tab-data-item">
        <label htmlFor={this.props.comorbidity.toLowerCase()}>{this.props.comorbidity}</label>
        {/* Next list level */}
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`${this.props.comorbidity.toLowerCase()}yeardiagnosed`}>Year diagnosed</label>
            <input type="number" name={`${this.props.comorbidity.toLowerCase()}yeardiagnosed`} id={`${this.props.comorbidity}yeardiagnosed`}></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`yearslivedwith${this.props.comorbidity.toLowerCase()}`}>Years lived with {this.props.comorbidity}</label>
            <input type="number" name={`yearslivedwith${this.props.comorbidity.toLowerCase()}`} id={`yearslivedwith${this.props.comorbidity.toLowerCase()}`}></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`${this.props.comorbidity.toLowerCase()}treatment`}>Treatment</label>
            <input type="text" name={`${this.props.comorbidity.toLowerCase()}treatment`} id={`${this.props.comorbidity.toLowerCase()}treatment`}></input>
          </div>
          <SingleSelectOutputComponent name={"Compliance"} id={"compliance"}
            items={["None", "Compliant", "Other"]} onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name={"Response to treatment"} id={"treatmentresponse"}
            items={["Not Responsive", "Responsive", "Other"]} onItemChange={this.onItemChange} />
        </div>
      </div>
    )
  }
}