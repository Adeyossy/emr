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

  componentDidUpdate(){
    console.log("biodata state => ", this.state);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Identifying Information</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="firstname">Name</label>
            <div className="emr-clerking-biodata-names">
              <input type="text" name="firstname" id="firstname" placeholder="First name" required></input>
              <input type="text" name="middlename" id="middlename" placeholder="Middle name" required></input>
              <input type="text" name="surname" id="surname" placeholder="Surname" required></input>
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="age">Age (in years)</label>
            <input type="number" name="age" id="age" placeholder="e.g. 39" min="0" max="200" required></input>
          </div>
          <SingleSelectOutputComponent name={"Gender"} id={"gender"} items={["Male", "Female", "Other"]}
            onItemChange={this.onItemChange}
            displayInBox={this.displaySelectedInInputBox} />
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="occupation">Occupation</label>
            <input type="text" name="occupation" id="occupation" placeholder="e.g. teacher" required></input>
          </div>
          <SingleSelectOutputComponent name={"Marital Status"} id={"maritalstatus"} 
            items={["Single", "Married", "Separated", "Divorced", "Widowed"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="address">Address</label>
            <textarea name="address" id="address" cols="30" rows="10" placeholder="Address goes here"></textarea>
          </div>
          <SingleSelectOutputComponent name={"Religion"} id={"religion"} 
            items={["Christianity", "Islam", "Traditional", "Other"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <SingleSelectOutputComponent name={"Tribe"} id={"tribe"} 
            items={["Yoruba", "Igbo", "Hausa", "Fulani", "Ibiobio", "Kanuri", "Other"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <SingleSelectOutputComponent name={"Informant"} id={"informant"} 
            items={["Patient", "Parents", "Father", "Mother", "Brother", "Sister", "Other"]}
            onItemChange={this.onItemChange} displayInBox={this.displaySelectedInInputBox} />
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="hospital">Hospital</label>
            <input type="text" name="hospital" id="hospital" placeholder="e.g. UCH" required></input>
          </div>
        </div>
      </div>
    )
  }
}