import React from "react";
import { complaint } from "../../models/complaint";
import { PatientContext } from "../../models/patient_context";
import LabelAndInputComponent from "../epilepsy/label_and_input";
import NotesComponent from "../minicomponents/notes";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";
import { getForStorage, symptoms } from "../../models/symptoms";
import ComplaintPreview from "../minicomponents/complaint_preview";
import ListComponent from "../minicomponents/list";

export default class ComplaintComponent extends React.Component {
  static contextType = PatientContext;

  onItemChange = (index, id, value) => {
    this.props.updateAnyObject(id, value, [this.context.last_viewed, "presenting_complaints", "complaints"], index);
  }

  onInformantItemChange = (id, value) => {
    this.props.updateAnyObject(id, value, [this.context.last_viewed, "biodata"], null);
  }

  updateInts = (event) => {
    const value = event.target.value;
    // console.log("value in PMHComponent => ", value);
    console.log('complaint => ', this.context[this.context.last_viewed].presenting_complaints.complaints);
    this.props.updateItemsInArray([this.context.last_viewed, "presenting_complaints", "complaints"],
      Object.assign({}, complaint), Number(value));
  }

  updateComplaints = (id, value) => {
    /*
      There is a general purpose function for this in the file named update_list_details.js
      It does the same thing as this function but I have not adapted it for complaints, yet
    */
    const complaints = this.context[this.context.last_viewed].presenting_complaints.complaints;
    let entereedSymptoms = value.split(", ");
    if (entereedSymptoms.length === 1) 
      entereedSymptoms = entereedSymptoms.filter(val => val !== "");
    if (complaints.length > entereedSymptoms.length) {
      this.props.setWhere(-1, '');
    }
    const symptomObjects = entereedSymptoms
      .map(sym => {
        const found = complaints.find(comp => sym.toLowerCase().replace(",", "")
        .trim() === comp.complaint.toLowerCase().replace(",", "").trim());
        if (found) {
          found.complaint = sym;
          return found;
        } else {
          const replacedSym = sym.toLowerCase().replace(/ /g, "_");
          if (Object.keys(symptoms).find(symp => symp === replacedSym)) {
            return getForStorage.call({ ...complaint }, symptoms, sym, 'complaint');
          } else {
            const cmplnt = Object.assign({}, complaint);
            cmplnt.complaint = sym;
            return cmplnt;
          }
        }
      });

    this.props.updateItemsInArray([this.context.last_viewed, "presenting_complaints", "complaints"],
      symptomObjects, 'complaint');
  }

  render() {
    const appointment = this.context[this.context.last_viewed];
    const complaints = appointment.presenting_complaints.complaints;
    const complaintNames = complaints.map(comp => comp.complaint).join(", ");
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">Presenting Complaints</h4>
        <div className="emr-clerking-tab-data-items">
          <ListComponent value={complaintNames} onItemChange={this.updateComplaints}
            dictionary={symptoms} name={"Symptoms"} />
          <div className="container-fluid p-0">
            <div className="row g-0 flex-row-reverse justify-content-end">
              {
                complaints.map((complaint, index) =>
                  <div className="col-md-6 p-3" key={index.toString()}>
                    <ComplaintPreview complaint={complaint} index={index} 
                      whereId={this.props.whereId} setWhere={this.props.setWhere} />
                  </div>
                )
              }
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofcomplaints">Number of Complaints</label>
            <input type="number" name="numberofcomplaints" id="numberofcomplaints"
              placeholder="e.g 2" className="mb-4"
              value={appointment.presenting_complaints.complaints.length}
              onChange={this.updateInts} required></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {
                complaints.map((item, i) =>
                  <div className={`emr-clerking-tab-data-item 
                  ${item.complaint && item.duration ? "filled" : ""}`}
                    key={i.toString()}>
                    <details className="emr-clerking-tab-data-items"
                      open={Object.values(item).join("")}>
                      <summary>Complaint {i + 1}:
                        <small className="emr-collapsible-summary">{item.complaint}
                          {item.duration ? " (".concat(item.duration).concat(")")
                            .toLowerCase() : ""}</small></summary>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-6">
                            <LabelAndInputComponent id="complaint" type="text" title="Complaint"
                              value={item.complaint} onItemChange={this.onItemChange.bind(this, i)} />
                          </div>
                          <div className="col-md-6">
                            <LabelAndInputComponent id="duration" type="text" title="Duration"
                              value={item.duration} onItemChange={this.onItemChange.bind(this, i)} />
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>)
              }
            </div>
          </div>
          <SingleSelectOutputComponent name={"Informant"} id={"informant"}
            items={["Patient", "Parents", "Father", "Mother", "Brother", "Sister"]}
            value={appointment.biodata.informant} onItemChange={this.onInformantItemChange} />
          <NotesComponent id={"notes"} name={"Complaints Notes"}
            fields={["presenting_complaints"]} height="10"
            value={appointment.presenting_complaints.notes}
            onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    );
  }
}

// ComplaintComponent.contextType = PatientContext ? PatientContext : "";