import React from "react";
import { PatientContext } from "../../models/patient_context";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import NotesComponent from "../minicomponents/notes";
import NotesOnlyComponent from "../minicomponents/notes_only";

export default class RoSComponent extends React.Component {
  static contextType = PatientContext;

  onItemChange = (id, value) => {
    // value.split(", ").forEach((item, index) => {
    // });
    this.props.updateItemsInArray(["review_of_systems", id], value,
      null);
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
              "Leg Swelling", "Palpitations", "Cyanosis"]}
            value={this.context.review_of_systems["cardiorespiratory"].join(", ")}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <MultiSelectOutputComponent name={"Gastrointestinal"} id={"gastrointestinal"}
            items={["Abd pain", "Abd swelling", "Anorexia", "Nausea", "Diarrhoea", "Constipation",
              "Vomiting", "Jaundice", "Haematemesis", "Melena"]}
            value={this.context.review_of_systems["gastrointestinal"].join(", ")}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <MultiSelectOutputComponent name={"Genitourinary"} id={"genitourinary"}
            items={["Dysuria", "Frequency", "Urgency", "Dribbling", "Hesitancy", "Intermittency",
              "Haematuria", "Incontinence", "Weak Stream", "Discharge"]}
            value={this.context.review_of_systems["genitourinary"].join(", ")}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <MultiSelectOutputComponent name={"Endocrine"} id={"endocrine"}
            items={["Polyuria", "Polyphagia", "Polydipsia", "Weight loss", "Recurrent Infections", "Heat Intolerance",
              "Cold Intolerance", "Incontinence", "Weak Stream", "Discharge"]}
            value={this.context.review_of_systems["endocrine"].join(", ")}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <NotesComponent id="notes" fields={["review_of_systems"]}
            value={this.context.review_of_systems.notes} 
            onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    )
  }
}