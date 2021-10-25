import React from "react";
import { PatientContext } from "../../models/patient_context";
import SingleItemSelectComponent from "../minicomponents/single_item_select";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class SurgeryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surgeryReaction: "",
      surgeryReactions: ["Complete Recovery", "Partial Recovery", "No Recovery", "Other"]
    }

    this.surgeryReactions = ["Complete Recovery", "Partial Recovery", "No Recovery", "Other"];
  }

  static contextType = PatientContext;

  onRecoveryItemChange = (id, value) => {
    this.props.updateAnyObject(id, value,
      ["past_medical_history", "surgeries"], this.props.index - 1);
  }

  onItemChange = (event) => {
    this.onRecoveryItemChange(event.target.name, event.target.value);
  }

  displaySelectedInInputBox = (index) => {
    console.log("index of selected => ", index)
    console.log("Value => ", this.surgeryReactions[index])
    this.setState({
      surgeryReaction: this.surgeryReactions[index]
    });
  }

  render() {
    const surgeries = "surgeries";
    return (
      <div className="emr-clerking-tab-data-item">
        <h4 className="emr-card-headers">Surgery {this.props.index}</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`surgerydiagnosis${this.props.index}`}>What was the diagnosis?</label>
            <input type="text" name={`diagnosis`}
              id={`surgerydiagnosis${this.props.index}`}
              value={this.context.past_medical_history[surgeries][this.props.index - 1].diagnosis}
              onChange={this.onItemChange}
              placeholder="e.g appendicitis"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`surgeryduration${this.props.index}`}>Length of hospital stay (in days)</label>
            <input type="number" name={`duration`}
              id={`surgeryduration${this.props.index}`}
              value={this.context.past_medical_history[surgeries][this.props.index - 1].duration}
              onChange={this.onItemChange} placeholder="e.g 2"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`surgeryhospital${this.props.index}`}>Health Facility</label>
            <input type="text" name={`facility`}
              id={`surgeryhospital${this.props.index}`}
              value={this.context.past_medical_history[surgeries][this.props.index - 1].facility}
              onChange={this.onItemChange} placeholder="e.g UCH"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`surgerytreatment${this.props.index}`}>Treatment received</label>
            <input type="text" name={`treatment`}
              id={`surgerytreatment${this.props.index}`}
              value={this.context.past_medical_history[surgeries][this.props.index - 1].treatment}
              onChange={this.onItemChange}
              placeholder="e.g appendectomy"></input>
          </div>
          <SingleSelectOutputComponent id={'recovery'} name={`Recovery after treatment`}
            items={this.state.surgeryReactions} onItemChange={this.onRecoveryItemChange}
            value={this.context.past_medical_history[surgeries][this.props.index - 1].recovery} />
        </div>
      </div>
    );
  }
}