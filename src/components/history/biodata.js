import React from "react";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";

export default class BiodataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderItem: "",
      genderItems: ["Male", "Female", "Other"]
    }
  }

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });
    this.props.updateBiodata(id, value, "biodata");
  }

  updateField = (event) => {
    // console.log("biodata => ", this.props.patient.biodata);
    // this.props.patient.biodata[event.target.name] = event.target.value;
    this.onItemChange(event.target.name, event.target.value);
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

  componentDidUpdate() {
    // console.log("biodata state => ", this.state);
  }

  render() {
    // console.log("this.props.patient => ", this.props.patient);
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Identifying Information</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="firstname">Name</label>
            <div className="emr-clerking-biodata-names">
              <input type="text" name="firstname" id="firstname" placeholder="First name"
                value={this.props.patient.biodata.firstname} onChange={this.updateField} required></input>
              <input type="text" name="middlename" id="middlename" placeholder="Middle name"
                value={this.props.patient.biodata.middlename} onChange={this.updateField} required></input>
              <input type="text" name="lastname" id="lastname" placeholder="Surname"
                value={this.props.patient.biodata.lastname} onChange={this.updateField} required></input>
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="ageinyears">Age (in years)</label>
            <input type="number" name="ageinyears" id="ageinyears" placeholder="e.g. 39"
              value={this.props.patient.biodata.ageinyears} onChange={this.updateField} min="0" max="200" required></input>
          </div>
          <SingleSelectOutputComponent name={"Gender"} id={"gender"} items={["Male", "Female", "Other"]}
            value={this.props.patient.biodata.gender}
            onItemChange={this.onItemChange}
            displayInBox={this.displaySelectedInInputBox} />
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="occupation">Occupation</label>
            <input type="text" name="occupation" id="occupation" placeholder="e.g. teacher"
            value={this.props.patient.biodata.occupation} onChange={this.updateField} required></input>
          </div>
          <SingleSelectOutputComponent name={"Marital Status"} id={"maritalstatus"}
            items={["Single", "Married", "Separated", "Divorced", "Widowed"]}
            value={this.props.patient.biodata.maritalstatus}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="address">Address</label>
            <textarea name="address" id="address" cols="30" rows="10"
            value={this.props.patient.biodata.address}
            onChange={this.updateField} placeholder="Address goes here"></textarea>
          </div>
          <SingleSelectOutputComponent name={"Religion"} id={"religion"}
            items={["Christianity", "Islam", "Traditional", "Other"]}
            value={this.props.patient.biodata.religion}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <SingleSelectOutputComponent name={"Tribe"} id={"tribe"}
            items={["Yoruba", "Igbo", "Hausa", "Fulani", "Ibiobio", "Kanuri", "Other"]}
            value={this.props.patient.biodata.tribe}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <SingleSelectOutputComponent name={"Informant"} id={"informant"}
            items={["Patient", "Parents", "Father", "Mother", "Brother", "Sister", "Other"]}
            value={this.props.patient.biodata.informant}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="hospital">Hospital</label>
            <input type="text" name="hospital" id="hospital" placeholder="e.g. UCH"
            value={this.props.patient.biodata.hospital}
            onChange={this.updateField} required></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="id">Identification Number</label>
            <input type="text" name="id" id="id" placeholder="i.e. hospital number or other ID"
            value={this.props.patient.biodata.id}
            onChange={this.updateField} required></input>
          </div>
        </div>
      </div>
    )
  }
}