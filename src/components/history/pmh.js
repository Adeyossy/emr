import React from "react";
import { bloodTransfusion, comorbidity, hospitalization, surgery } from "../../models/patient";
import { PatientContext } from "../../models/patient_context";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";
import TransfusionComponent from "./blood_transfusion";
import Comorbidities from "./comorbidites";
import HospitalizationComponent from "./hospitalization";
import SurgeryComponent from "./surgeries";

export default class PMHComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positiveComorbidites: []
    }
  }

  static contextType = PatientContext;

  onItemChange = (id, value) => {
    if (id === "comorbidities") {
      if (value) {
        this.setState({
          positiveComorbidites: value.split(", ")
        });

        value.split(", ").forEach((element, index, valueArray) => {
          const isAlreadyCreated = this.context.past_medical_history.comorbidities
            .find((item) => item.comorbidity === element);
          if (!isAlreadyCreated) {
            this.props.updateItemsInArray("comorbidities", Object.assign({}, comorbidity),
              valueArray.length);
            this.props.updatePMHArrays("comorbidity", element, "comorbidities", index);
          }
        });

      } else {
        this.setState({
          positiveComorbidites: []
        });
      }
    }
  }

  updateInts = (event) => {
    const value = event.target.value;
    console.log("value in PMHComponent => ", value);
    if (event.target.name === "numberofhospitalizations") {
      this.props.updateItemsInArray("hospitalizations", Object.assign({}, hospitalization),
        value);
      // hospitalizationArray.push(hospitalization); 
    }

    if (event.target.name === "numberofsurgeries") {
      this.props.updateItemsInArray("surgeries", Object.assign({}, surgery),
        value);
    }

    if (event.target.name === "numberoftransfusions") {
      this.props.updateItemsInArray("blood_transfusions", Object.assign({}, bloodTransfusion),
        value);
    }
  }

  componentDidUpdate() {
    console.log("Context: ", this.context);
  }

  render() {
    const hospitalizationChildren = [];
    for (let i = 0; i < this.context.past_medical_history.hospitalizations.length; i++) {
      hospitalizationChildren.push(
        <HospitalizationComponent updatePMHArrays={this.props.updatePMHArrays}
          key={String(i)} index={i + 1} />
      );
    }

    const surgeryChildren = [];
    for (let i = 0; i < this.state.surgeryInt; i++) {
      surgeryChildren.push(
        <SurgeryComponent updatePMHArrays={this.props.updatePMHArrays}
          key={String(i)} index={i + 1} />
      );
    }

    const transfusionChildren = [];
    for (let i = 0; i < this.state.bloodTransfusionInt; i++) {
      transfusionChildren.push(
        <TransfusionComponent updatePMHArrays={this.props.updatePMHArrays}
          key={String(i)} index={i + 1} />
      );
    }

    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Past Medical History</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofhospitalizations">Number of Previous Hospitalizations</label>
            <input type="number" name="numberofhospitalizations" id="numberofhospitalizations"
              placeholder="e.g 2" className="mb-4"
              value={this.context.past_medical_history.hospitalizations.length}
              onChange={this.updateInts} required></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {hospitalizationChildren}
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofsurgeries">Number of Previous Surgeries</label>
            <input type="number" name="numberofsurgeries" id="numberofsurgeries" className="mb-4"
              value={this.context.past_medical_history.surgeries.length} onChange={this.updateInts}></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {surgeryChildren}
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberoftransfusions">Number of Previous Blood Transfusions</label>
            <input type="number" name="numberoftransfusions" id="numberoftransfusions" className="mb-4"
              value={this.context.past_medical_history.blood_transfusions.length} onChange={this.updateInts}></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {transfusionChildren}
            </div>
          </div>
          <MultiSelectOutputComponent id={"comorbidities"} name={"Comorbidities"}
            items={["Hypertension", "Diabetes", "Peptic Ulcer Disease", "Asthma", "Epilepsy"]}
            value={this.context.past_medical_history.comorbidities.map((item) => item.comorbidity).join(", ")}
            onItemChange={this.onItemChange} />
          {
            this.context.past_medical_history.comorbidities.map((item, index) =>
              <Comorbidities key={index.toString()} comorbidity={item.comorbidity} />)
          }
        </div>
        <details className="emr-clerking-tab-data-item">
          <summary>Blood Group and Rhesus</summary>
          <div className="emr-clerking-tab-data-items">
            <SingleSelectOutputComponent name={"Blood Group"} id={"blood_group"}
              items={["O", "A", "B", "AB", "Unknown"]} onItemChange={this.onItemChange} />
            <SingleSelectOutputComponent name={"Rhesus"} id={"rhesus"}
              items={["Positive", "Negative", "Indeterminate", "Unknown"]}
              onItemChange={this.onItemChange} />
            <SingleSelectOutputComponent name={"Genotype"} id={"genotype"}
              items={["AA", "AS", "AC", "SC", "SS", "Other"]}
              onItemChange={this.onItemChange} />
          </div>
        </details>
        <div className="emr-clerking-tab-data-item">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" cols="30" rows="10" placeholder="write here..."></textarea>
        </div>
      </div>
    );
  }
}