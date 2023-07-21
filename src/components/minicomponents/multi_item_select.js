import React from "react";
import ItemSelectComponent from "./item_select";

export default class MultiItemSelectComponent extends React.Component {
  updateSelection = (index) => {
    if (this.props.displayInBox) {
      this.props.displayInBox(index);
    }
  }

  render() {
    const multiSelectableItems = this.props.selectableItems.map((item, index) =>
      <ItemSelectComponent itemText={item} key={index} itemIndex={index}
        updateSelectionOnClick={this.updateSelection}
        selected={this.props.selectedItems.find((selectedItem) =>
          selectedItem.toLowerCase().includes(item.toLowerCase())) ? "selected" : ""} />);
    return (
      <div className="emr-selectable-items-group">
        {multiSelectableItems}
      </div>
    );
  }
}