import React from "react";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";
import LabelAndInputComponent from "./label_and_input";

export default class AxisVComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      axisvcomorbidities: ""
    }
  }

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <div class="emr-clerking-tab-data emr-card m-0">
        <h4 class="emr-card-headers">Comorbidities</h4>
        <div class="emr-clerking-tab-data-items">
          <SingleSelectOutputComponent name={`Has there been prior treatment or 
            surgery for this problem?`} id={"axisvcomorbidities"}
            items={["Yes", "No"]} onItemChange={this.onItemChange} />
          {this.state.axisvcomorbidities === "Yes" ?
            <div class="emr-clerking-tab-data-items">
              <LabelAndInputComponent id={"typeoftreatment"} title={"What type of treatment?"}
                type={"text"} onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"prescriber"} title={"Who prescribed it?"}
                type={"text"} onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"treatmentresult"} title={"What was the result of the treatment?"}
                type={"text"} onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"adverseeffects"} title={"Treatment adverse effects"}
                type={"text"} onItemChange={this.onItemChange} />
            </div>
            : null}
          <MultiSelectOutputComponent name={"Cognitive deficit"} id={"cognitivedeficit"}
            items={["Memory", "Language", "Orientation", "Attention", "Visuospatial",
              "Executive function"]} onItemChange={this.onItemChange} />
          <MultiSelectOutputComponent name={"Social consequences"} id={"socialconsequences"}
            items={["Vocational", "Educational", "Social relationship"]}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"moodpersonalitychanges"} title={"Mood and personality changes"}
            type={"text"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"restrictedqol"} title={"Subjective restricted quality of life"}
            type={"text"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"postictalinjuries"} title={"Post-ictal injuries"}
            type={"text"} onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name={"Persistent seizures"}
            id={"persistentseizures"} items={["Yes", "No"]} onItemChange={this.onItemChange} />
        </div>
      </div>
    );
  }
}