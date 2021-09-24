import React from "react";
import MultiItemSelectComponent from "../minicomponents/multi_item_select";
import SingleItemSelectComponent from "../minicomponents/single_item_select";

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
              <div className="emr-clerking-tab-data-item">
                <MultiItemSelectComponent selectableItems={this.sides} />
              </div>
              <div className="emr-clerking-tab-data-item">
                <MultiItemSelectComponent selectableItems={this.limbs} />
              </div>
              <div className="emr-clerking-tab-data-item">
                <MultiItemSelectComponent selectableItems={this.inspectionItems} />
              </div>
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
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Ankle Clonus</h4>
                <SingleItemSelectComponent selectableItems={this.ankleClonus} />
              </div>
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Babinski</h4>
                <SingleItemSelectComponent selectableItems={this.babinski} />
              </div>
            </div>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary>Sensory examination</summary>
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <MultiItemSelectComponent selectableItems={this.sides} />
              </div>
            </div>
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <MultiItemSelectComponent selectableItems={this.limbs} />
              </div>
            </div>
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