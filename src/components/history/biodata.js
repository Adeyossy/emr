import React from "react";
import LabelAndInputComponent from "../epilepsy/label_and_input";
import NotesComponent from "../minicomponents/notes";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class BiodataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderItem: "",
      genderItems: ["Male", "Female"]
    }
  }

  onItemChange = (id, value) => {
    if (id !== "date_seen") {
      this.props.updateAnyObject(id, value, ["appointment", "biodata"]);
    } else {
      const enteredDate = new Date(value);
      console.log("entered date => ", enteredDate.toLocaleString('en-NG'));
      // console.log("entered time in milliseconds => ", enteredDate.getTime());
      this.props.updateAnyObject(id, enteredDate.getTime(), ["appointment"]);
    }
  }

  updateField = (event) => {
    // console.log("biodata => ", this.props.patient.appointment.biodata);
    // this.props.patient.appointment.biodata[event.target.name] = event.target.value;
    this.onItemChange(event.target.name, event.target.value.trim());
  }

  displaySelectedInInputBox = (index) => {
    let currentReaction = this.state.genderItem;
    if (currentReaction === this.state.genderItems[index]) {
      this.setState({
        genderItem: ""
      });
    } else {
      this.setState({
        genderItem: this.state.genderItems[index]
      });
    }
  }

  render() {
    // console.log("this.props.patient => ", this.props.patient);
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">Identifying Information</h4>
        <div className="emr-clerking-tab-data-items">
          <LabelAndInputComponent id="date_seen" title="Date of Encounter"
            value={new Date(this.props.patient.appointment.date_seen).toISOString().substring(0, 16)}
            type="datetime-local" onItemChange={this.onItemChange} />
          <div className={`emr-clerking-tab-data-item ${this.props.patient.appointment.biodata.firstname
            && this.props.patient.appointment.biodata.lastname ? "filled" : ""}`}>
            <label htmlFor="firstname">Name</label>
            <div className="emr-clerking-biodata-names">
              <input type="text" name="lastname" id="lastname" placeholder="Surname"
                value={this.props.patient.appointment.biodata.lastname} onChange={this.updateField}
                className={this.props.patient.appointment.biodata.lastname ? "filled" : ""} required></input>
              <input type="text" name="firstname" id="firstname" placeholder="First name"
                value={this.props.patient.appointment.biodata.firstname} onChange={this.updateField}
                className={this.props.patient.appointment.biodata.firstname ? "filled" : ""} required></input>
              <input type="text" name="middlename" id="middlename" placeholder="Middle name"
                value={this.props.patient.appointment.biodata.middlename} onChange={this.updateField}
                className={this.props.patient.appointment.biodata.middlename ? "filled" : ""} required></input>
            </div>
          </div>
          <LabelAndInputComponent id="ageinyears" title="Age (in years)"
            value={this.props.patient.appointment.biodata.ageinyears}
            type="text" onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name={"Gender"} id={"gender"} items={["Male", "Female"]}
            value={this.props.patient.appointment.biodata.gender}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="occupation" title="Occupation"
            value={this.props.patient.appointment.biodata.occupation}
            type="text" onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name={"Marital Status"} id={"maritalstatus"}
            items={["Single", "Married", "Separated", "Divorced", "Widowed"]}
            value={this.props.patient.appointment.biodata.maritalstatus}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <NotesComponent id="address" name="Address" value={this.props.patient.appointment.biodata.address}
            onItemChange={this.props.updateAnyObject} fields={["biodata"]} />
          <LabelAndInputComponent id="state" title="State"
            value={this.props.patient.appointment.biodata.state}
            type="text" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="city" title="City"
            value={this.props.patient.appointment.biodata.city}
            type="text" onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name={"Religion"} id={"religion"}
            items={["Christianity", "Islam", "Traditional"]}
            value={this.props.patient.appointment.biodata.religion}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <SingleSelectOutputComponent name={"Tribe"} id={"tribe"}
            items={["Yoruba", "Igbo", "Hausa", "Fulani", "Ibiobio", "Kanuri"]}
            value={this.props.patient.appointment.biodata.tribe}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <LabelAndInputComponent id="hospital" title="Hospital"
            value={this.props.patient.appointment.biodata.hospital}
            type="text" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="id" title="Identification Number"
            value={this.props.patient.appointment.biodata.id}
            type="text" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="phone_number" title="Phone Number"
            value={this.props.patient.appointment.biodata.phone_number}
            type="tel" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="phone_number_1" title="Alternate Phone Number"
            value={this.props.patient.appointment.biodata.phone_number_1}
            type="tel" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="email_address" title="Email Address"
            value={this.props.patient.appointment.biodata.email_address}
            type="email" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="next_of_kin" title="Next of Kin Name"
            value={this.props.patient.appointment.biodata.next_of_kin} type="text"
            onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name="Relationship to next of kin"
            id="next_of_kin_relationship" value={this.props.patient.appointment.biodata.next_of_kin_relationship}
            onItemChange={this.onItemChange} items={["Father", "Mother", "Brother",
              "Sister", "Child", "Cousin", "Spouse"]} />
        </div>
      </div>
    )
  }
}