import React from "react";
import { PatientContext } from "../../models/patient_context";
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

  static contextType = PatientContext;

  onItemChange = (id, value) => {
    this.props.updateAnyObject(id, value, ["forms", "epilepsy", "axisV"], null);
  }

  onMultiItemChange = (id, value) => {
    this.props.updateItemsInArray(["forms", "epilepsy", "axisV", id], value.split(", "), null);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">Comorbidities</h4>
        <div className="emr-clerking-tab-data-items">
          <SingleSelectOutputComponent name={`Has there been prior treatment or 
            surgery for this problem?`} id={"axisvcomorbidities"}
            value={this.context.forms.epilepsy.axisV.axisvcomorbidities}
            items={["Yes", "No"]} onItemChange={this.onItemChange} />
          {
            this.context.forms.epilepsy.axisV.axisvcomorbidities === "Yes" ?
              <div className="emr-clerking-tab-data-items">
                <LabelAndInputComponent id={"typeoftreatment"} title={"What type of treatment?"}
                  value={this.context.forms.epilepsy.axisV.typeoftreatment}
                  type={"text"} onItemChange={this.onItemChange} />
                <LabelAndInputComponent id={"prescriber"} title={"Who prescribed it?"}
                  value={this.context.forms.epilepsy.axisV.prescriber}
                  type={"text"} onItemChange={this.onItemChange} />
                <LabelAndInputComponent id={"treatmentresult"}
                  title={"What was the result of the treatment?"}
                  value={this.context.forms.epilepsy.axisV.treatmentresult}
                  type={"text"} onItemChange={this.onItemChange} />
                <LabelAndInputComponent id={"adverseeffects"} title={"Treatment adverse effects"}
                  value={this.context.forms.epilepsy.axisV.adverseeffects}
                  type={"text"} onItemChange={this.onItemChange} />
              </div>
              : null
          }
          <MultiSelectOutputComponent name={"Cognitive deficit"} id={"cognitivedeficit"}
            items={["Memory", "Language", "Orientation", "Attention", "Visuospatial",
              "Executive function"]}
            value={this.context.forms.epilepsy.axisV.cognitivedeficit.join(", ")}
            onItemChange={this.onMultiItemChange} />
          <MultiSelectOutputComponent name={"Social consequences"} id={"socialconsequences"}
            items={["Vocational", "Educational", "Social relationship"]}
            value={this.context.forms.epilepsy.axisV.socialconsequences.join(", ")}
            onItemChange={this.onMultiItemChange} />
          <LabelAndInputComponent id={"moodpersonalitychanges"}
            title={"Mood and personality changes"}
            value={this.context.forms.epilepsy.axisV.moodpersonalitychanges}
            type={"text"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"restrictedqol"}
            title={"Subjective restricted quality of life"}
            value={this.context.forms.epilepsy.axisV.restrictedqol}
            type={"text"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"postictalinjuries"} title={"Post-ictal injuries"}
            value={this.context.forms.epilepsy.axisV.postictalinjuries}
            type={"text"} onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name={"Persistent seizures"}
            value={this.context.forms.epilepsy.axisV.persistentseizures}
            id={"persistentseizures"} items={["Yes", "No"]} onItemChange={this.onItemChange} />
        </div>
      </div>
    );
  }
}
