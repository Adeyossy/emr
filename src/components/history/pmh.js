import React from "react";
import { bloodTransfusion, comorbidity, hospitalization, surgery } from "../../models/patient";
import { PatientContext } from "../../models/patient_context";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import NotesComponent from "../minicomponents/notes";
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

  onStringItemChange = (event) => {
    this.onItemChange(event.target.name, event.target.value);
  }

  updateNotes

  onItemChange = (id, value) => {
    if (id === "comorbidities") {
      if (value) {
        value.split(", ").forEach((element, index, valueArray) => {
          const comorbidityObject = Object.assign({}, comorbidity);
          comorbidityObject.comorbidity = element;
          this.props.updateItemsInArray(["past_medical_history", "comorbidities"],
            comorbidityObject, this.context.past_medical_history.comorbidities
              .slice().filter(cmdy => cmdy.comorbidity === element).length + 1);
          // this.props.updateAnyObject("comorbidity", element,
          //   ["past_medical_history", "comorbidities"], index);
        });

      } else { //remove from source of truth
      }
    } else {
      this.props.updateAnyObject(id, value, ["past_medical_history"]);
    }
  }

  updateInts = (event) => {
    const value = event.target.value;
    console.log("value in PMHComponent => ", value);
    if (event.target.name === "numberofhospitalizations") {
      this.props.updateItemsInArray(["past_medical_history", "hospitalizations"],
        Object.assign({}, hospitalization), value);
    }

    if (event.target.name === "numberofsurgeries") {
      this.props.updateItemsInArray(["past_medical_history", "surgeries"],
        Object.assign({}, surgery), value);
    }

    if (event.target.name === "numberoftransfusions") {
      this.props.updateItemsInArray(["past_medical_history", "blood_transfusions"],
        Object.assign({}, bloodTransfusion), value);
    }
  }

  render() {
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
              {/* {hospitalizationChildren} */}
              {
                this.context.past_medical_history.hospitalizations.map((item, i) =>
                  <HospitalizationComponent updateAnyObject={this.props.updateAnyObject}
                    key={String(i)} index={i + 1} />)
              }
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofsurgeries">Number of Previous Surgeries</label>
            <input type="number" name="numberofsurgeries" id="numberofsurgeries" className="mb-4"
              value={this.context.past_medical_history.surgeries.length} onChange={this.updateInts}></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {
                this.context.past_medical_history.surgeries.map((item, i) =>
                  <SurgeryComponent updateAnyObject={this.props.updateAnyObject}
                    key={String(i)} index={i + 1} />)
              }
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberoftransfusions">Number of Previous Blood Transfusions</label>
            <input type="number" name="numberoftransfusions" id="numberoftransfusions" className="mb-4"
              value={this.context.past_medical_history.blood_transfusions.length} onChange={this.updateInts}></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {
                this.context.past_medical_history.blood_transfusions.map((item, i) =>
                  <TransfusionComponent updateAnyObject={this.props.updateAnyObject}
                    key={String(i)} index={i + 1} />)
              }
            </div>
          </div>
          <MultiSelectOutputComponent id={"comorbidities"} name={"Comorbidities"}
            items={["Hypertension", "Diabetes", "Peptic Ulcer Disease", "Asthma", "Epilepsy"]}
            value={this.context.past_medical_history.comorbidities.map((item) => item.comorbidity).join(", ")}
            onItemChange={this.onItemChange} />
          {
            this.context.past_medical_history.comorbidities.map((item, index) =>
              <Comorbidities key={index.toString()} comorbidity={item.comorbidity}
                value={item} updateAnyObject={this.props.updateAnyObject} index={index} />)
          }
        </div>
        <details className="emr-clerking-tab-data-item">
          <summary>Blood Group and Rhesus</summary>
          <div className="emr-clerking-tab-data-items">
            <SingleSelectOutputComponent name={"Blood Group"} id={"blood_group"}
              items={["O", "A", "B", "AB", "Unknown"]}
              value={this.context.past_medical_history.blood_group}
              onItemChange={this.onItemChange} />
            <SingleSelectOutputComponent name={"Rhesus"} id={"rhesus"}
              items={["Positive", "Negative", "Indeterminate", "Unknown"]}
              value={this.context.past_medical_history.rhesus}
              onItemChange={this.onItemChange} />
            <SingleSelectOutputComponent name={"Genotype"} id={"genotype"}
              items={["AA", "AS", "AC", "SC", "SS", "Other"]}
              value={this.context.past_medical_history.genotype}
              onItemChange={this.onItemChange} />
          </div>
        </details>
        <NotesComponent id="notes" value={this.context.past_medical_history.notes}
          fields={["past_medical_history"]}
          onItemChange={this.props.updateAnyObject} />
      </div>
    );
  }
}