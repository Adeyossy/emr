import React from 'react'
import SingleItemSelectComponent from '../minicomponents/single_item_select';
import MultiItemSelectComponent from './multi_item_select';

export default class MultiSelectOutputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.value ? this.props.value : "",
      items: []
    }
  }

  /* displaySelectedInInputBox = (index) => {
    //Get the clicked item by getting it with the index
    const itemAtIndex = this.props.items[index];

    //Get the current items in store
    const valueItems = this.props.value ? this.props.value.split(", ") : [];

    //Create a new copy
    let currentSelectedItems = valueItems.slice();

    //Find the clicked item in store
    const isAlreadySelected = currentSelectedItems.find((value) => value === itemAtIndex);

    //if the item is already selected i.e. in store, deselect it
    if (isAlreadySelected) {
      currentSelectedItems = currentSelectedItems.filter((value) => value !== itemAtIndex);
      // this.setState({
      //   item: "",
      //   items: currentSelectedItems
      // });

      if (this.props.onItemChange) {
        this.props.onItemChange(this.props.id, "");
      }
    } else { //else select the item
      currentSelectedItems.push(itemAtIndex);
      // this.setState({
      //   item: this.props.items[index],
      //   items: currentSelectedItems
      // });

      if (this.props.onItemChange) {
        this.props.onItemChange(this.props.id, itemAtIndex);
        // this.props.onItemChange(this.props.id, this.props.items[index]);
      }
    }
  } */

  displaySelectedInInputBox = (index) => {
    //Get the clicked item by getting it with the index
    const itemAtIndex = this.props.items[index];

    let currentSelections = this.props.value ? this.props.value.split(", ") : [];
// console.log("currentselections => ", currentSelections);
// console.log("value of currentselections => ", this.props.value);

    const isAlreadySelected = currentSelections.find((value) => value === itemAtIndex);
    if(isAlreadySelected) {
// console.log("Already Selected");
      currentSelections = currentSelections.filter(value => value !== itemAtIndex);
// console.log("currentselections => ", currentSelections);
    } else {
      currentSelections.push(itemAtIndex);
    }
    this.props.onItemChange(this.props.id, currentSelections.join(", "));
  }

  onItemChange = (event) => {
    // console.log("text box text => ", event.target.value);
    // this.setState({
    //   item: event.target.value
    // });

// console.log("event triggered in multi_select_output => ", event.target.value);

    //If user decides to type, check if the typed content is/are among the selectable items
    //I want to select the corresponding clickable items
    //Is it part of the items that I can possibly select?
    // const selectableItemsInTextBox = this.props.items.filter((value) =>
    //   event.target.value.includes(value));

    // //Value from the containing component which should actually be the selected items
    // const valueItems = this.props.value ? this.props.value.split(", ") : [];

    // //Is there a selectable item that has not been stored?
    // const shouldBeStored = selectableItemsInTextBox.find((value) =>
    //   !(valueItems.find((val) => val === value)));

    // if (shouldBeStored) {
    //   this.props.onItemChange(this.props.id, selectableItemsInTextBox.join(", "));
    // }
    
    this.props.onItemChange(this.props.id, event.target.value);
    //Is the item currently selected? The currently selected item
    // const isItAlreadySelected = currentSelectedItems.filter((value) => event.target.value.includes(value));
    // if (isTypedTextinItems && !isItAlreadySelected) {
    //   currentSelectedItems.push(event.target.value);
    //   if (event.target.name === this.props.id) {
    //     this.setState({
    //       item: event.target.value,
    //       items: currentSelectedItems
    //     });
    //   }

    //   this.props.onItemChange(this.props.id, event.target.value);
    // }
  }

  render() {
    return (
      <details className={`emr-clerking-tab-data-item ${this.props.value ? "filled" : ""}`}
        open={this.props.value}>
        <summary htmlFor={this.props.id}>{this.props.name}</summary>
        <MultiItemSelectComponent selectedItems={this.props.value ?
          this.props.value.split(", ") : []}
          selectableItems={this.props.items} displayInBox={this.displaySelectedInInputBox} />
        <input type="text" name={this.props.id} id={this.props.id}
          value={this.props.value} onChange={this.onItemChange.bind(this)}
          className={this.props.value ? "filled" : ""}></input>
      </details>
    )
  }
}