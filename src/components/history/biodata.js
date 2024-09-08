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
      this.props.updateAnyObject(id, value, [this.props.patient.last_viewed, "biodata"]);
    } else {
      const enteredDate = new Date(value);
      // console.log("entered date => ", enteredDate.toLocaleString('en-NG'));
      // console.log("entered time in milliseconds => ", enteredDate.getTime());
      this.props.updateAnyObject(id, enteredDate.getTime(), [this.props.patient.last_viewed]);
    }
  }

  updateField = (event) => {
    // console.log("biodata => ", this.props.patient[this.props.patient.last_viewed].biodata);
    // this.props.patient[this.props.patient.last_viewed].biodata[event.target.name] = event.target.value;
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

  /**
   * Create new entry for items that do not currently exist
   * @param {string} id 
   */
  createMissingField = (id) => {
    this.onItemChange(id, "");
  }

  differenceInYears = (past) => {
    let age = 0;
    const pastDate = new Date(past);
    const today = new Date();
    if (pastDate) age = today.getFullYear() - pastDate.getFullYear();
    if (pastDate.getMonth() > today.getMonth()) age = age - 1;
    else 
      if (pastDate.getMonth() === today.getMonth() && pastDate.getDate() > today.getDate()) --age;
    return age;
  }

  render() {
    // console.log("this.props.patient => ", this.props.patient);
    const apntmnt = this.props.patient[this.props.patient.last_viewed];
    const biodata = apntmnt.biodata;
    let age = 0;

    // Estimating patient age from date of birth if the property exists
    if (biodata.date_of_birth) {
      console.log("date_of_birth => ", biodata.date_of_birth);
      age = this.differenceInYears(biodata.date_of_birth);
    } else {
      let first_seen = this.props.patient["first_seen"];
      if (typeof first_seen === "string") first_seen = parseInt(first_seen);
      const ageinyears = typeof biodata.ageinyears === "string" 
      ? 
        biodata.ageinyears === "" ? 0 : parseInt(biodata.ageinyears)
      : 
        biodata.ageinyears;
      age = ageinyears + this.differenceInYears(first_seen);
    }

    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">Identifying Information</h4>
        <div className="emr-clerking-tab-data-items">
          <LabelAndInputComponent id="date_seen" title="Date of Encounter"
            value={new Date(apntmnt.date_seen).toISOString().substring(0, 16)}
            type="datetime-local" onItemChange={this.onItemChange} />
          <div className={`emr-clerking-tab-data-item ${biodata.firstname
            && biodata.lastname ? "filled" : ""}`}>
            <label htmlFor="firstname">Name</label>
            <div className="emr-clerking-biodata-names">
              <input type="text" name="lastname" id="lastname" placeholder="Surname"
                value={biodata.lastname} onChange={this.updateField}
                className={biodata.lastname ? "filled" : ""} required></input>
              <input type="text" name="firstname" id="firstname" placeholder="First name"
                value={biodata.firstname} onChange={this.updateField}
                className={biodata.firstname ? "filled" : ""} required></input>
              <input type="text" name="middlename" id="middlename" placeholder="Middle name"
                value={biodata.middlename} onChange={this.updateField}
                className={biodata.middlename ? "filled" : ""} required></input>
            </div>
          </div>
          <LabelAndInputComponent id="date_of_birth" title="Date of Birth"
            value={biodata.hasOwnProperty('date_of_birth') && biodata.date_of_birth ?
              new Date(biodata.date_of_birth).toISOString().substring(0, 10) : "1970-01-01"}
            type="date" onItemChange={this.onItemChange} />
          <div className="container-fluid p-0">
            <div className="row mb-4 pb-3">
              <div className="col">
                <LabelAndInputComponent id="ageinyears" title="Age at first visit (in years)"
                  value={biodata.ageinyears}
                  type="text" onItemChange={this.onItemChange} />
              </div>
              <div className="col">
                <LabelAndInputComponent id="agetodayinyears" title="Age Today (in years)"
                  value={age}
                  type="text" onItemChange={() => {}} />
              </div>
            </div>
          </div>
          <SingleSelectOutputComponent name={"Gender"} id={"gender"} items={["Male", "Female"]}
            value={biodata.gender}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="occupation" title="Occupation"
            value={biodata.occupation}
            type="text" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="years_of_formal_education" title="Years of Formal Education"
            value={biodata.hasOwnProperty("years_of_formal_education") ?
              biodata.years_of_formal_education : ""}
            type="number" onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name={"Marital Status"} id={"maritalstatus"}
            items={["Single", "Married", "Separated", "Divorced", "Widowed"]}
            value={biodata.maritalstatus}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <NotesComponent id="address" name="Address" value={biodata.address}
            onItemChange={this.props.updateAnyObject} fields={["biodata"]} />
          <LabelAndInputComponent id="lga_of_origin" title="LGA of Origin"
            value={biodata.hasOwnProperty("lga_of_origin") ? biodata.lga_of_origin : ""}
            type="text" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="city" title="City"
            value={biodata.city}
            type="text" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="state" title="State"
            value={biodata.state}
            type="text" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="country_of_origin" title="Country of Origin"
            value={biodata.hasOwnProperty("country_of_origin") ? biodata.country_of_origin :
              ""}
            type="text" onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name={"Religion"} id={"religion"}
            items={["Christianity", "Islam", "Traditional"]}
            value={biodata.religion}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <SingleSelectOutputComponent name={"Tribe"} id={"tribe"}
            items={["Yoruba", "Igbo", "Hausa", "Fulani", "Ibiobio", "Kanuri", "Efik",
              "Anang", "Ijaw", "Urhobo", "Esan/Ishan", "Tiv", "Nupe"]}
            value={biodata.tribe}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <LabelAndInputComponent id="hospital" title="Hospital"
            value={biodata.hospital}
            type="text" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="id" title="Identification Number"
            value={biodata.id}
            type="text" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="phone_number" title="Phone Number"
            value={biodata.phone_number}
            type="tel" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="phone_number_1" title="Alternate Phone Number"
            value={biodata.phone_number_1}
            type="tel" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="email_address" title="Email Address"
            value={biodata.email_address}
            type="email" onItemChange={this.onItemChange} />
          <LabelAndInputComponent id="next_of_kin" title="Next of Kin Name"
            value={biodata.next_of_kin} type="text"
            onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name="Relationship to next of kin"
            id="next_of_kin_relationship" value={biodata.next_of_kin_relationship}
            onItemChange={this.onItemChange} items={["Father", "Mother", "Brother",
              "Sister", "Child", "Cousin", "Spouse"]} />
          <LabelAndInputComponent id="nok_phone_number" title="Next of Kin Phone Number"
            value={biodata.hasOwnProperty("nok_phone_number") ? biodata.nok_phone_number :
              ""}
            type="tel" onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent name={"Handedness"} id={"handedness"}
            items={["Left", "Right", "Both (Ambidextrous)"]}
            value={biodata.hasOwnProperty("handedness") ? biodata.handedness : ""}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
        </div>
      </div>
    )
  }
}