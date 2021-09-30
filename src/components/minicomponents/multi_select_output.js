import React from 'react'
import SingleItemSelectComponent from '../minicomponents/single_item_select';
import MultiItemSelectComponent from './multi_item_select';

export default class MultiSelectOutputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      items: []
    }
  }

  displaySelectedInInputBox = (index) => {
    const itemAtIndex = this.props.items[index];
    let currentSelectedItems = this.state.items.slice();
    const isAlreadySelected = currentSelectedItems.find((value) => value === itemAtIndex);
    //if the item is already selected, deselect it
    if (isAlreadySelected) {
      currentSelectedItems = currentSelectedItems.filter((value) => value !== itemAtIndex);
      this.setState({
        item: "",
        items: currentSelectedItems
      });

      if (this.props.onItemChange) {
        this.props.onItemChange(this.props.id, "");
      }
    } else { //else select the item
      currentSelectedItems.push(itemAtIndex);
      this.setState({
        item: this.props.items[index],
        items: currentSelectedItems
      });
    }
    if (this.props.onItemChange) {
      this.props.onItemChange(this.props.id, currentSelectedItems.join(", "));
      // this.props.onItemChange(this.props.id, this.props.items[index]);
    }
  }

  onItemChange = (event) => {
    console.log("text box text => ", event.target.value);
    this.setState({
      item: event.target.value
    });
    const isTypedTextinItems = this.props.items.find((value) => value === event.target.value);
    const currentSelectedItems = this.state.items.slice();
    const isItAlreadySelected = currentSelectedItems.find((value) => value === event.target.value);
    if (isTypedTextinItems && !isItAlreadySelected) {
      currentSelectedItems.push(event.target.value);
      if (event.target.name === this.props.id) {
        this.setState({
          item: event.target.value,
          items: currentSelectedItems
        });
      }

      this.props.onItemChange(this.props.id, event.target.value);
    }
  }

  componentDidUpdate() {
    console.log("State post-update => ", this.state.items);
  }

  render() {
    return (
      <details className="emr-clerking-tab-data-item">
        <summary htmlFor={this.props.id}>{this.props.name}</summary>
        <MultiItemSelectComponent selectedItem={this.state.items} selectableItems={this.props.items} displayInBox={this.displaySelectedInInputBox} />
        <input type="text" name={this.props.id}
          id={this.props.id} value={this.state.items.join(", ")} onChange={this.onItemChange.bind(this)}></input>
      </details>
    )
  }
}