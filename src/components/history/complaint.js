import React from "react";
import { complaint } from "../../models/complaint";
import { PatientContext } from "../../models/patient_context";
import LabelAndInputComponent from "../epilepsy/label_and_input";
import NotesComponent from "../minicomponents/notes";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class ComplaintComponent extends React.Component {
  static contextType = PatientContext;

  onItemChange = (index, id, value) => {
    // this.props.updateComplaints(event.target.name)
    this.props.updateAnyObject(id, value, ["presenting_complaints", "complaints"], index);
  }

  onInformantItemChange = (id, value) => {
    this.props.updateAnyObject(id, value, ["biodata"], null);
  }

  updateInts = (event) => {
    const value = event.target.value;
    // console.log("value in PMHComponent => ", value);
    this.props.updateItemsInArray(["presenting_complaints", "complaints"],
      Object.assign({}, complaint), value);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Presenting Complaints</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofcomplaints">Number of Complaints</label>
            <input type="number" name="numberofcomplaints" id="numberofcomplaints"
              placeholder="e.g 2" className="mb-4"
              value={this.context.presenting_complaints.complaints.length}
              onChange={this.updateInts} required></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {
                this.context.presenting_complaints.complaints.map((item, i) =>
                  <div className="emr-clerking-tab-data-item" key={i.toString()}>
                    <details className="emr-clerking-tab-data-items"
                      open={Object.values(item).join("")}>
                      <summary>Complaint {i + 1}:
                        <small className="emr-collapsible-summary">{item.complaint}
                          {item.duration ? " (".concat(item.duration).concat(")")
                            .toLowerCase() : ""}</small></summary>
                      <LabelAndInputComponent id="complaint" type="text" title="Complaint"
                        value={item.complaint} onItemChange={this.onItemChange.bind(this, i)} />
                      <LabelAndInputComponent id="duration" type="text" title="Duration"
                        value={item.duration} onItemChange={this.onItemChange.bind(this, i)} />
                    </details>
                  </div>)
              }
            </div>
          </div>
          <SingleSelectOutputComponent name={"Informant"} id={"informant"}
            items={["Patient", "Parents", "Father", "Mother", "Brother", "Sister"]}
            value={this.context.biodata.informant} onItemChange={this.onInformantItemChange} />
          <NotesComponent id={"notes"} name={"Complaints Notes"}
            fields={["presenting_complaints"]}
            value={this.context.presenting_complaints.notes}
            onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    );
  }
}

// ComplaintComponent.contextType = PatientContext ? PatientContext : "";