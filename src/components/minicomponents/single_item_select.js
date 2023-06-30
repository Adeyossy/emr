import React from "react";
import ItemSelectComponent from "./item_select";

export default class SingleItemSelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.selectionState = this.props.selectableItems.slice().fill("");
    this.state = {
      selectionState: this.selectionState
    }
  }

  updateSelection = (index) => {
    // //next line checks if the current item is not selected and stores the result for later use
    // const isCurrentItemNotSelected = this.state.selectionState[index] == "";

    // //next line deselects all items
    // let currentSelectionState = this.state.selectionState.slice().fill("");

    // //"if" block below uses the stored result above to select the item if it was not selected
    // if (isCurrentItemNotSelected) {
    //   currentSelectionState[index] = "selected";
    // }

    // this.setState({
    //   selectionState: currentSelectionState
    // });

    if (this.props.displayInBox) {
      this.props.displayInBox(index);
    }
  }

  render() {
    const singleSelectableItems = this.props.selectableItems.map((item, index) =>
      <ItemSelectComponent itemText={item} key={index} itemIndex={index} selected=
        {this.props.selectedItem === item ? "selected" : ""} updateSelectionOnClick={this.updateSelection} />
    );
    return (
      <div className="emr-selectable-items-group">
        {singleSelectableItems}
      </div>
    );
  }
}