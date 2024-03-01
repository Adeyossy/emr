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
      const comorbidityArray = value.split(", ").filter(item => item !== "").map((element) => {
        const alreadyExists = this.context[this.context.last_viewed].past_medical_history.comorbidities
          .find(comorbidity => comorbidity.comorbidity === element);
        if (alreadyExists) {
          return alreadyExists;
        }

        if (typeof alreadyExists === 'undefined') {
          const comorbidityObject = Object.assign({}, comorbidity);
          comorbidityObject.comorbidity = element;
          return comorbidityObject;
        }
      });

      
      this.props.updateItemsInArray([this.context.last_viewed, "past_medical_history", "comorbidities"],
      comorbidityArray, 'comorbidity');
    } else {
      console.log(this.context.last_viewed);
      this.props.updateAnyObject(id, value, [this.context.last_viewed, "past_medical_history"]);
    }
  }

  updateInts = (event) => {
    const value = event.target.value;
    // console.log("value in PMHComponent => ", value);
    if (event.target.name === "numberofhospitalizations") {
      this.props.updateItemsInArray([this.context.last_viewed, "past_medical_history", "hospitalizations"],
        Object.assign({}, hospitalization), Number(value));
    }

    if (event.target.name === "numberofsurgeries") {
      this.props.updateItemsInArray([this.context.last_viewed, "past_medical_history", "surgeries"],
        Object.assign({}, surgery), Number(value));
    }

    if (event.target.name === "numberoftransfusions") {
      this.props.updateItemsInArray([this.context.last_viewed, "past_medical_history", "blood_transfusions"],
        Object.assign({}, bloodTransfusion), Number(value));
    }
  }

  render() {
    const pmh = this.context[this.context.last_viewed].past_medical_history;

    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">Past Medical History</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofhospitalizations">Number of Previous Hospitalizations</label>
            <input type="number" name="numberofhospitalizations" id="numberofhospitalizations"
              placeholder="e.g 2" className={`mb-4 
              ${pmh.hospitalizations.length ? 'filled' : ''}`}
              value={pmh.hospitalizations.length}
              onChange={this.updateInts} required></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {/* {hospitalizationChildren} */}
              {
                pmh.hospitalizations.map((item, i) =>
                  <HospitalizationComponent updateAnyObject={this.props.updateAnyObject}
                    key={String(i)} index={i + 1} />)
              }
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofsurgeries">Number of Previous Surgeries</label>
            <input type="number" name="numberofsurgeries" id="numberofsurgeries" className="mb-4"
              value={pmh.surgeries.length} onChange={this.updateInts}></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {
                pmh.surgeries.map((item, i) =>
                  <SurgeryComponent updateAnyObject={this.props.updateAnyObject}
                    key={String(i)} index={i + 1} />)
              }
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberoftransfusions">Number of Previous Blood Transfusions</label>
            <input type="number" name="numberoftransfusions" id="numberoftransfusions" className="mb-4"
              value={pmh.blood_transfusions.length} onChange={this.updateInts}></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {
                pmh.blood_transfusions.map((item, i) =>
                  <TransfusionComponent updateAnyObject={this.props.updateAnyObject}
                    key={String(i)} index={i + 1} />)
              }
            </div>
          </div>
          <SingleSelectOutputComponent items={["None", "Twin", "Triplet", "Multiple Birth"]}
            name={"Is the participant a twin (or triplet/multiple birth)?"} id={"multiple_birth"}
            value={pmh.hasOwnProperty("multiple_birth") ? pmh.multiple_birth : ""}
            onItemChange={this.onItemChange} />
          <MultiSelectOutputComponent id={"comorbidities"} name={"Comorbidities"}
            items={["Hypertension", "Diabetes", "Peptic Ulcer Disease", "Asthma", "Epilepsy",
                    "Parkinson's Disease", "Dyslipidemia", "Osteoarthritis"]}
            value={pmh.comorbidities.map((item) => item.comorbidity).join(", ")}
            onItemChange={this.onItemChange} />
          {
            pmh.comorbidities.map((item, index) =>
              <Comorbidities key={index.toString()} comorbidity={item.comorbidity}
                value={item} updateAnyObject={this.props.updateAnyObject} index={index} 
                last_viewed={this.context.last_viewed}/>)
          }
          <details className="emr-clerking-tab-data-item">
            <summary>Blood Group and Rhesus</summary>
            <div className="emr-clerking-tab-data-items">
              <SingleSelectOutputComponent name={"Blood Group"} id={"blood_group"}
                items={["O", "A", "B", "AB", "Unknown"]}
                value={pmh.blood_group}
                onItemChange={this.onItemChange} />
              <SingleSelectOutputComponent name={"Rhesus"} id={"rhesus"}
                items={["Positive", "Negative", "Indeterminate", "Unknown"]}
                value={pmh.rhesus}
                onItemChange={this.onItemChange} />
              <SingleSelectOutputComponent name={"Genotype"} id={"genotype"}
                items={["AA", "AS", "AC", "SC", "SS"]}
                value={pmh.genotype}
                onItemChange={this.onItemChange} />
            </div>
          </details>
          <NotesComponent id="notes" value={pmh.notes}
            fields={["past_medical_history"]}
            onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    );
  }
}