import React from "react";
import { PatientContext } from "../../models/patient_context";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import NotesComponent from "../minicomponents/notes";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class NeuroExamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.higherMentalFunctionItems = [];
    this.inspectionItems = ["Scars", "Wasting", "Involuntary movements", "Fasciculations", "Tremors"];
    this.sides = ["Right", "Left"];
    this.limbs = ["Upper Limb", "Lower Limb"];
    this.ankleClonus = ["Sustained", "Absent"];
    this.babinski = ["Flexion", "Extension", "Flat"];
  }

  static contextType = PatientContext;

  onItemChange = (id, value) => {
    this.props.updateAnyObject(id, value, ["neuro"], null);
  }

  onMultiItemChange = (id, value) => {
    this.props.updateItemsInArray(["neuro", id], value.split(", "), null);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">Neurological Examination</h4>
        <div className="emr-clerking-tab-data-items">
          <NotesComponent name="Higher Mental Functions" id="highermentalfunctions"
            value={this.context.neuro.highermentalfunctions}
            onItemChange={this.props.updateAnyObject} fields={["neuro"]} />
          <NotesComponent name="Cranial Nerves" id="cranialnerves"
            value={this.context.neuro.cranialnerves}
            onItemChange={this.props.updateAnyObject} fields={["neuro"]} />
          {/* <details className="emr-clerking-tab-data-item">
            <summary>Cranial Nerves</summary>
            <label htmlFor="cranialnerves">Describe</label>
            <textarea name="cranialnerves" id="cranialnerves" cols="30" rows="10"
              placeholder="write here..."></textarea>
          </details> */}
          <details className="emr-clerking-tab-data-item"
            open={this.context.neuro.motor_sides.join(", ")}>
            <summary>Motor examination</summary>
            <div className="emr-clerking-tab-data-items">
              <MultiSelectOutputComponent name={"Laterality"} id={"motor_sides"}
                items={this.sides} value={this.context.neuro.motor_sides.join(", ")}
                onItemChange={this.onMultiItemChange} />
              <MultiSelectOutputComponent name={"Limbs"} id={"motor_limbs"}
                items={this.limbs} value={this.context.neuro.motor_limbs.join(", ")}
                onItemChange={this.onMultiItemChange} />
              <MultiSelectOutputComponent name={"Inspection"} id={"motor_inspection"}
                items={this.inspectionItems} value={this.context.neuro.motor_inspection.join(", ")}
                onItemChange={this.onMultiItemChange} />
            </div>
            <div className="emr-clerking-tab-data-items">
              {/* <div className="emr-clerking-tab-data-item">
                <label htmlFor="motortone">Tone</label>
                <textarea name="motortone" id="motor_tone" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="motorpower">Power</label>
                <textarea name="motorpower" id="motor_power" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="motorreflexes">Reflexes</label>
                <textarea name="motorreflexes" id="motor_reflexes" cols="30" rows="5" placeholder="write here..."></textarea>
              </div> */}
              <SingleSelectOutputComponent name={"Tone"} id={"motor_tone"}
                value={this.context.neuro.motor_tone}
                items={["Hypotonia", "Normal", "Hypertonia"]} onItemChange={this.onItemChange} />
              <SingleSelectOutputComponent name={"Power"} id={"motor_power"}
                value={this.context.neuro.motor_power}
                items={["0", "1", "2", "3", "4", "5"]} onItemChange={this.onItemChange} />
              <SingleSelectOutputComponent name={"Reflexes"} id={"motor_reflexes"}
                value={this.context.neuro.motor_reflexes}
                items={["Reduced", "Normal", "Increased", "Brisk"]}
                onItemChange={this.onItemChange} />
              <SingleSelectOutputComponent name={"Ankle Clonus"} id={"ankle_clonus"}
                value={this.context.neuro.ankle_clonus}
                items={this.ankleClonus} onItemChange={this.onItemChange} />
              <SingleSelectOutputComponent name={"Babinski"} id={"babinski"}
                value={this.context.neuro.babinski}
                items={this.babinski} onItemChange={this.onItemChange} />
            </div>
          </details>
          <details className="emr-clerking-tab-data-item"
            open={this.context.neuro.sensorysides.join(", ")}>
            <summary>Sensory examination</summary>
            <MultiSelectOutputComponent name={"Laterality"} id={"sensorysides"}
              value={this.context.neuro.sensorysides.join(", ")}
              items={this.sides} onItemChange={this.onMultiItemChange} />
            <MultiSelectOutputComponent name={"Limbs"} id={"sensorylimbs"}
              value={this.context.neuro.sensorylimbs.join(", ")}
              items={this.limbs} onItemChange={this.onMultiItemChange} />
            <div className="emr-clerking-tab-data-items">
              <NotesComponent name="Fine touch" id="sensoryfinetouch" fields={["neuro"]}
                value={this.context.neuro.sensoryfinetouch}
                onItemChange={this.props.updateAnyObject} />
              <NotesComponent name="Coarse touch" id="sensorycoarsetouch" fields={["neuro"]}
                value={this.context.neuro.sensorycoarsetouch}
                onItemChange={this.props.updateAnyObject} />
              <NotesComponent name="Temperature" id="sensorytemperature" fields={["neuro"]}
                value={this.context.neuro.sensorytemperature}
                onItemChange={this.props.updateAnyObject} />
              <NotesComponent name="Vibration" id="sensoryvibration" fields={["neuro"]}
                value={this.context.neuro.sensoryvibration}
                onItemChange={this.props.updateAnyObject} />
              <NotesComponent name="Proprioception" id="sensoryproprioception" fields={["neuro"]}
                value={this.context.neuro.sensoryproprioception}
                onItemChange={this.props.updateAnyObject} />
              <NotesComponent name="Pressure" id="sensorypressure" fields={["neuro"]}
                value={this.context.neuro.sensorypressure}
                onItemChange={this.props.updateAnyObject} />
            </div>
          </details>
          <details className="emr-clerking-tab-data-item"
            open={this.context.neuro.gaitandcoordination}>
            <summary>Gait and Coordination</summary>
            <div className="emr-clerking-tab-data-items">
              <NotesComponent id={"gaitandcoordination"} fields={["neuro"]}
                value={this.context.neuro.gaitandcoordination} onItemChange={this.props.updateAnyObject} />
            </div>
          </details>
          <NotesComponent id={"notes"} fields={["neuro"]}
            value={this.context.neuro.notes} onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    );
  }
}