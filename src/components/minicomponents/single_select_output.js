import React from 'react'
import SingleItemSelectComponent from '../minicomponents/single_item_select';

export default class SingleSelectOutputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      reactins: ["None", "Fever | Hyperthermia", "Required ICU admission", "Other"]
    }
  }

  displaySelectedInInputBox = (index) => {
    let currentReaction = this.state.item;
    if (currentReaction === this.props.items[index]) {
      this.setState({
        item: ""
      });
    } else {
      this.setState({
        item: this.props.items[index]
      });
    }
  }

  render() {
    return (
      <div className="emr-clerking-tab-data-item">
        <SingleItemSelectComponent selectableItems={this.props.items} displayInBox={this.displaySelectedInInputBox} />
        <input type="text" name={`transfusionreaction${this.props.index}`}
          id={`transfusionreaction${this.props.index}`} defaultValue={this.state.item}></input>
      </div>
    )
  }
}