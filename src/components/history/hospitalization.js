import React from "react";
import { PatientContext } from "../../models/patient_context";
import SingleItemSelectComponent from "../minicomponents/single_item_select";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class HospitalizationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recovery: "",
      recoveries: ["Complete Recovery", "Partial Recovery", "No Recovery", "Other"]
    }
  }

  static contextType = PatientContext;

  onRecoveryItemChange = (id, value) => {
    this.props.updatePMHArrays(id, value,
      ["past_medical_history", "hospitalizations"], this.props.index - 1);
  }

  onItemChange = (event) => {
    this.onRecoveryItemChange(event.target.name, event.target.value);
  }

  displaySelectedInInputBox = (index) => {
    this.setState({
      recovery: this.state.recoveries[index]
    });
  }

  render() {
    const hospitalization = "hospitalizations";
    console.log("hospitalization => ", this.context.past_medical_history[hospitalization]);
    return (
      <div className="emr-clerking-tab-data-item">
        <h4 className="emr-card-headers">Hospitalization {this.props.index}</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`hospitalizationdiagnosis1${this.props.index}`}>What was the diagnosis?</label>
            <input type="text" name={"diagnosis"}
              id={`hospitalizationdiagnosis1${this.props.index}`}
              value={this.context.past_medical_history[hospitalization][this.props.index - 1].diagnosis}
              onChange={this.onItemChange}
              placeholder="e.g severe malaria"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`hospitalizationduration1${this.props.index}`}>Length of hospital stay (in days)</label>
            <input type="number" name={"duration"}
              id={`hospitalizationduration1${this.props.index}`}
              value={this.context.past_medical_history[hospitalization][this.props.index - 1].duration}
              onChange={this.onItemChange}
              placeholder="e.g 2" required></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`hospitalizationhospital1${this.props.index}`}>Health Facility</label>
            <input type="text" name={"facility"}
              id={`hospitalizationhospital1${this.props.index}`}
              value={this.context.past_medical_history[hospitalization][this.props.index - 1].facility}
              onChange={this.onItemChange}
              placeholder="e.g UCH"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`hospitalizationtreatment1${this.props.index}`}>Treatment received</label>
            <input type="text" name={`treatment`}
              id={`hospitalizationtreatment1${this.props.index}`}
              value={this.context.past_medical_history[hospitalization][this.props.index - 1].treatment}
              onChange={this.onItemChange}
              placeholder="e.g IV fluids"></input>
          </div>
          <SingleSelectOutputComponent name={"Recovery after treatment"}
            inputName={"recovery"}
            id={`hospitalizationrecovery1${this.props.index}`}
            items={this.state.recoveries}
            value={this.context.past_medical_history[hospitalization][this.props.index - 1].recovery}
            onItemChange={this.onRecoveryItemChange} />
        </div>
      </div>
    )
  }
}