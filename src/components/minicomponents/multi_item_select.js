import React from "react";
import ItemSelectComponent from "./item_select";

export default class MultiItemSelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.selectionState = this.props.selectableItems.slice().fill("");
    this.state = {
      selectionState: this.selectionState
    }
  }

  updateSelection = (index) => {
    //next line checks if the current item is not selected
    // const isCurrentItemNotSelected = this.state.selectionState[index] == "";

    // let currentSelectionState = this.state.selectionState.slice();
    // if (isCurrentItemNotSelected) {
    //   currentSelectionState[index] = "selected";
    // } else {
    //   currentSelectionState[index] = "";
    // }
    // this.setState({
    //   selectionState: currentSelectionState
    // });

    if(this.props.displayInBox){
      this.props.displayInBox(index);
    }
  }

  render() {
    const multiSelectableItems = this.props.selectableItems.map((item, index) =>
      <ItemSelectComponent itemText={item} key={index} itemIndex={index} updateSelectionOnClick={this.updateSelection}
        selected={this.props.selectedItem.find((selectedItem) => selectedItem === item) ? "selected" : ""} />);
    return (
      <div className="emr-selectable-items-group">
        {multiSelectableItems}
      </div>
    );
  }
}