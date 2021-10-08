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
    const modifiableField = this.props.inputName ? this.props.inputName : this.props.id;
    const isAlreadySelected = currentReaction === this.props.items[index];
    if (isAlreadySelected) {
      this.setState({
        item: ""
      });
      if (this.props.onItemChange) {
        this.props.onItemChange(modifiableField, "");
      }
    } else {
      this.setState({
        item: this.props.items[index]
      });
      if (this.props.onItemChange) {
        this.props.onItemChange(modifiableField, 
          this.props.items[index]);
      }
    }
  }

  onItemChange = (event) => {
    const modifiableField = this.props.inputName ? this.props.inputName : this.props.id;
    if (event.target.name === modifiableField) {
      this.setState({
        item: event.target.value
      });

      this.props.onItemChange(modifiableField, 
        event.target.value);
    }
  }

  render() {
    return (
      <div className="emr-clerking-tab-data-item">
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <SingleItemSelectComponent selectedItem={this.props.value} selectableItems={this.props.items}
          displayInBox={this.displaySelectedInInputBox} />
        <input type="text" name={this.props.inputName ? this.props.inputName : this.props.id}
          id={this.props.id} value={this.props.value} onChange={this.onItemChange.bind(this)}></input>
      </div>
    )
  }
}