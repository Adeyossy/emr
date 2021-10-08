import React from "react";
import { PatientContext } from "../../models/patient_context";
import SingleItemSelectComponent from "../minicomponents/single_item_select";

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
            <input type="text" name={`surgerydiagnosis${this.props.index}`}
              id={`surgerydiagnosis${this.props.index}`}
              value={this.context.past_medical_history[surgeries][this.props.index - 1].diagnosis}
              placeholder="e.g appendicitis"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`surgeryduration${this.props.index}`}>Length of hospital stay (in days)</label>
            <input type="number" name={`surgeryduration${this.props.index}`}
              id={`surgeryduration${this.props.index}`}
              value={this.context.past_medical_history[surgeries][this.props.index - 1].duration}
              placeholder="e.g 2"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`surgeryhospital${this.props.index}`}>Health Facility</label>
            <input type="text" name={`surgeryhospital${this.props.index}`}
              id={`surgeryhospital${this.props.index}`}
              value={this.context.past_medical_history[surgeries][this.props.index - 1].facility}
              placeholder="e.g UCH"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`surgerytreatment${this.props.index}`}>Treatment received</label>
            <input type="number" name={`surgerytreatment${this.props.index}`}
              id={`surgerytreatment${this.props.index}`}
              value={this.context.past_medical_history[surgeries][this.props.index - 1].treatment}
              placeholder="e.g appendectomy"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`surgeryrecovery${this.props.index}`}>Recovery after treatment</label>
            <SingleItemSelectComponent selectableItems={this.state.surgeryReactions} displayInBox={this.displaySelectedInInputBox} />
            <input type="text" name={`surgeryrecovery${this.props.index}`}
              id={`surgeryrecovery${this.props.index}`}
              value={this.context.past_medical_history[surgeries][this.props.index - 1].recovery}
              defaultValue={this.state.surgeryReaction} disabled></input>
          </div>
        </div>
      </div>
    );
  }
}