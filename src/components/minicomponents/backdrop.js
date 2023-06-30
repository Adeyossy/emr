import React from "react";

export default class BackDropComponent extends React.Component {

  render() {
    return (
      <div className={`container-fluid emr-dialog-backdrop ${this.props.showDialog ? "show" : ""}`}>
        <div className="row g-0">
          { this.props.children }
        </div>
      </div>
    )
  }
}