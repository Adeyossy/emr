import React from "react";
import MultiItemSelectComponent from "../minicomponents/multi_item_select";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import SingleItemSelectComponent from "../minicomponents/single_item_select";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class NeuroExamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.higherMentalFunctionItems = [];
    this.inspectionItems = ["Scars", "Wasting", "Involuntary movements", "Fasciculations", "Tremors"];
    this.sides = ["Right", "Left"];
    this.limbs = ["Upper Limb", "Lower Limb"];
    this.ankleClonus = ["Sustained", "Absent"];
    this.babinski = ["Flexor", "Extensor", "Flat"];
  }

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Neurological Examination</h4>
        <div className="emr-clerking-tab-data-items">
          <details className="emr-clerking-tab-data-item">
            <summary>Higher Mental Functions</summary>
            <label htmlFor="highermentalfunctions">Describe</label>
            <textarea name="highermentalfunctions" id="highermentalfunctions" cols="30" rows="10" placeholder="write here..."></textarea>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary>Cranial Nerves</summary>
            <label htmlFor="cranialnerves">Describe</label>
            <textarea name="cranialnerves" id="cranialnerves" cols="30" rows="10" placeholder="write here..."></textarea>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary>Motor examination</summary>
            <div className="emr-clerking-tab-data-items">
              <MultiSelectOutputComponent name={"Laterality"} id={"sides"}
                items={this.sides} onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Limbs"} id={"limbs"}
                items={this.limbs} onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Inspection"} id={"inspection"}
                items={this.inspectionItems} onItemChange={this.onItemChange} />
            </div>
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="motortone">Tone</label>
                <textarea name="motortone" id="motortone" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="motorpower">Power</label>
                <textarea name="motorpower" id="motorpower" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="motorreflexes">Reflexes</label>
                <textarea name="motorreflexes" id="motorreflexes" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
              <SingleSelectOutputComponent name={"Ankle Clonus"} id={"ankleclonus"}
                items={this.ankleClonus} onItemChange={this.onItemChange} />
              <SingleSelectOutputComponent name={"Babinski"} id={"babinski"}
                items={this.babinski} onItemChange={this.onItemChange} />
            </div>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary>Sensory examination</summary>
            <MultiSelectOutputComponent name={"Laterality"} id={"sensorysides"}
                items={this.sides} onItemChange={this.onItemChange} />
            <MultiSelectOutputComponent name={"Limbs"} id={"sensorylimbs"}
                items={this.limbs} onItemChange={this.onItemChange} />
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="sensoryfinetouch">Fine touch</label>
                <textarea name="sensoryfinetouch" id="sensoryfinetouch" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="sensorycoarsetouch">Coarse touch</label>
                <textarea name="sensorycoarsetouch" id="sensorycoarsetouch" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="sensorytemperature">Temperature</label>
                <textarea name="sensorytemperature" id="sensorytemperature" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="sensoryvibration">Vibration</label>
                <textarea name="sensoryvibration" id="sensoryvibration" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="sensoryproprioception">Proprioception</label>
                <textarea name="sensoryproprioception" id="sensoryproprioception" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="sensorypressure">Pressure</label>
                <textarea name="sensorypressure" id="sensorypressure" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
            </div>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary>Gait and Coordination</summary>
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="gaitandcoordination">Describe</label>
                <textarea name="gaitandcoordination" id="gaitandcoordination" cols="30" rows="5" placeholder="write here..."></textarea>
              </div>
            </div>
          </details>
        </div>
      </div>
    );
  }
}