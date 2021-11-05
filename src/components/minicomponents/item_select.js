import React from "react";

export default class ItemSelectComponent extends React.Component {
  render() {
    return (
      <div className={`emr-selectable-item ${this.props.selected}`} 
        onClick={ this.props.updateSelectionOnClick.bind(this, this.props.itemIndex) }>
        <p className="emr-selectable-item-text">{ this.props.itemText }</p>
      </div>
    );
  }
}