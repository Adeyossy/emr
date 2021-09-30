import React from 'react'
import SingleItemSelectComponent from '../minicomponents/single_item_select';

export default class SingleSelectOutputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    }
  }

  displaySelectedInInputBox = (index) => {
    let currentReaction = this.state.item;
    const isAlreadySelected = currentReaction === this.props.items[index];
    if (isAlreadySelected) {
      this.setState({
        item: ""
      });
      if (this.props.onItemChange) {
        this.props.onItemChange(this.props.id, "");
      }
    } else {
      this.setState({
        item: this.props.items[index]
      });
      if (this.props.onItemChange) {
        this.props.onItemChange(this.props.id, this.props.items[index]);
      }
    }
  }

  onItemChange = (event) => {
    if (event.target.name === this.props.id) {
      this.setState({
        item: event.target.value
      });

      this.props.onItemChange(this.props.id, event.target.value);
    }
  }

  render() {
    return (
      <div className="emr-clerking-tab-data-item">
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <SingleItemSelectComponent selectedItem={this.state.item} selectableItems={this.props.items}
          displayInBox={this.displaySelectedInInputBox} />
        <input type="text" name={this.props.id}
          id={this.props.id} value={this.state.item} onChange={this.onItemChange.bind(this)}></input>
      </div>
    )
  }
}