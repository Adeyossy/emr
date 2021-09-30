import React from "react";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";

export default class RoSComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });
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
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <MultiSelectOutputComponent name={"Gastrointestinal"} id={"gastrointestinal"}
            items={["Abd pain", "Abd swelling", "Anorexia", "Nausea", "Diarrhoea", "Constipation",
              "Vomiting", "Jaundice", "Haematemesis", "Melena", "Other"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <MultiSelectOutputComponent name={"Genitourinary"} id={"genitourinary"}
            items={["Dysuria", "Frequency", "Urgency", "Dribbling", "Hesitancy", "Intermittency",
              "Haematuria", "Incontinence", "Weak Stream", "Discharge", "Other"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <MultiSelectOutputComponent name={"Endocrine"} id={"endocrine"}
            items={["Polyuria", "Polyphagia", "Polydipsia", "Weight loss", "Recurrent Infections", "Heat Intolerance",
              "Cold Intolerance", "Incontinence", "Weak Stream", "Discharge", "Other"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="address">Descriptive Notes</label>
            <textarea name="address" id="address" cols="30" rows="10" placeholder="write here..."></textarea>
          </div>
        </div>
      </div>
    )
  }
}