import React from 'react'
import SingleItemSelectComponent from '../minicomponents/single_item_select';
import SingleSelectOutputComponent from '../minicomponents/single_select_output';

export default class TransfusionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reaction: "",
      reactions: ["None", "Fever | Hyperthermia", "Required ICU admission", "Other"],
    }
  }

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });
    console.log("value of selection => ", value);
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
    return (
      <div className="emr-clerking-tab-data-item">
        <h4 className="emr-card-headers">Blood Transfusion {this.props.index}</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`transfusionvolume${this.props.index}`}>How many pints (500ml) of blood?</label>
            <input type="number" name={`transfusionvolume${this.props.index}`} id={`transfusionvolume${this.props.index}`}></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`transfusiondonor${this.props.index}`}>Who donated blood?</label>
            <input type="text" name={`transfusiondonor${this.props.index}`} id={`transfusiondonor${this.props.index}`}></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`transfusionfacility${this.props.index}`}>Health Facility</label>
            <input type="text" name={`transfusionfacility${this.props.index}`} id={`transfusionfacility${this.props.index}`} placeholder="e.g UCH"></input>
          </div>
          <SingleSelectOutputComponent id={`transfusionreaction${this.props.index}`}
            item={this.state.reaction} items={this.state.reactions}
            index={this.props.index} onItemChange={this.onItemChange}
            displayInBox={this.displaySelectedInInputBox} />
        </div>
      </div>
    );
  }
}