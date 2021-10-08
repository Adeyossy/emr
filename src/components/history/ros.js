import React from "react";
import { PatientContext } from "../../models/patient_context";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import NotesOnlyComponent from "../minicomponents/notes_only";

export default class RoSComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = PatientContext;

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });

    this.props.updateRoS(id, value, "review_of_systems");
  }

  displaySelectedInInputBox = (index) => {
    let currentReaction = this.state.genderItem;
    if (currentReaction === this.state.genderItems[index]) {
      this.setState({
        genderItem: ""
      });
    } else {
      this.setState({
        genderItem: this.state.genderItems[index]
      });
    }
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Review of Systems</h4>
        <div className="emr-clerking-tab-data-items">
          <MultiSelectOutputComponent name={"Cardiorespiratory"} id={"cardiorespiratory"}
            items={["Cough", "Dyspnoea", "Orthopnoea", "PND", "Chest Pain", "Haemoptysis",
              "Leg Swelling", "Palpitations", "Cyanosis", "Other"]}
            value={this.context.review_of_systems["cardiorespiratory"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <MultiSelectOutputComponent name={"Gastrointestinal"} id={"gastrointestinal"}
            items={["Abd pain", "Abd swelling", "Anorexia", "Nausea", "Diarrhoea", "Constipation",
              "Vomiting", "Jaundice", "Haematemesis", "Melena", "Other"]}
            value={this.context.review_of_systems["gastrointestinal"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <MultiSelectOutputComponent name={"Genitourinary"} id={"genitourinary"}
            items={["Dysuria", "Frequency", "Urgency", "Dribbling", "Hesitancy", "Intermittency",
              "Haematuria", "Incontinence", "Weak Stream", "Discharge", "Other"]}
            value={this.context.review_of_systems["genitourinary"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <MultiSelectOutputComponent name={"Endocrine"} id={"endocrine"}
            items={["Polyuria", "Polyphagia", "Polydipsia", "Weight loss", "Recurrent Infections", "Heat Intolerance",
              "Cold Intolerance", "Incontinence", "Weak Stream", "Discharge", "Other"]}
            value={this.context.review_of_systems["endocrine"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="notes">Notes</label>
            <textarea name="notes" id="notes" cols="30" rows="10"
              value={this.context.review_of_systems["notes"]}
              onChange={this.onItemChange} placeholder="write here...">
            </textarea>
          </div>
        </div>
      </div>
    )
  }
}