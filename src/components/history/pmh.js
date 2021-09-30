import React from "react";
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
      hospitalizationInt: 0,
      surgeryInt: 0,
      bloodTransfusionInt: 0,
      positiveComorbidites: []
    }
  }

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });

    if (id === "comorbidities") {
      if(value){
        this.setState({
          positiveComorbidites: value.split(", ")
        });
      } else {
        this.setState({
          positiveComorbidites: []
        });
      }
    }
  }

  updateInts = (event) => {
    if (event.target.name === "numberofhospitalizations") {
      this.setState({
        hospitalizationInt: event.target.value
      });
    }

    if (event.target.name === "numberofsurgeries") {
      this.setState({
        surgeryInt: event.target.value
      });
    }

    if (event.target.name === "numberoftransfusions") {
      this.setState({
        bloodTransfusionInt: event.target.value
      });
    }
  }

  componentDidUpdate() {
    console.log("State: ", this.state);
  }

  render() {
    const hospitalizationChildren = [];
    for (let i = 0; i < this.state.hospitalizationInt; i++) {
      hospitalizationChildren.push(
        <HospitalizationComponent key={String(i)} index={i + 1} />
      );
    }

    const surgeryChildren = [];
    for (let i = 0; i < this.state.surgeryInt; i++) {
      surgeryChildren.push(
        <SurgeryComponent key={String(i)} index={i + 1} />
      );
    }

    const transfusionChildren = [];
    for (let i = 0; i < this.state.bloodTransfusionInt; i++) {
      transfusionChildren.push(
        <TransfusionComponent key={String(i)} index={i + 1} />
      );
    }

    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Past Medical History</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofhospitalizations">Number of Previous Hospitalizations</label>
            <input type="number" name="numberofhospitalizations" id="numberofhospitalizations" placeholder="e.g 2"
              className="mb-4" value={this.state.hospitalizationInt} onChange={this.updateInts} required></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {hospitalizationChildren}
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofsurgeries">Number of Previous Surgeries</label>
            <input type="number" name="numberofsurgeries" id="numberofsurgeries" className="mb-4"
              value={this.state.surgeryInt} onChange={this.updateInts}></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {surgeryChildren}
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberoftransfusions">Number of Previous Blood Transfusions</label>
            <input type="number" name="numberoftransfusions" id="numberoftransfusions" className="mb-4"
              value={this.state.bloodTransfusionInt} onChange={this.updateInts}></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {transfusionChildren}
            </div>
          </div>
          <MultiSelectOutputComponent id={"comorbidities"} name={"Comorbidities"}
            items={["Hypertension", "Diabetes", "Peptic Ulcer Disease", "Asthma", "Epilepsy"]}
            onItemChange={this.onItemChange} />
          { this.state.positiveComorbidites.map((item, index) => <Comorbidities key={index.toString()} comorbidity={item} />) }
        </div>
        <details className="emr-clerking-tab-data-item">
          <summary>Blood Group and Rhesus</summary>
          <div className="emr-clerking-tab-data-items">
            <SingleSelectOutputComponent name={"Blood Group"} id={"bloodgroup"}
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