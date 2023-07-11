import React from "react";

export default class ActionDialogComponent extends React.Component {
  onOKButtonClicked = () => {
    this.props.dialog.action();
    this.props.dismissDialog();
  }
  render() {
    return (
      <div className="offset-lg-4 col-lg-4 offset-md-2 col-md-8">
        <div className="emr-dialog">
          <div className="emr-dialog-title">
            <h6 className="emr-dialog-title-text">
              {this.props.dialog.title ? this.props.dialog.title : "UNTITLED"}
            </h6>
          </div>
          <div className="emr-dialog-details">
            <p className="emr-dialog-details-text text-wrap">
              {this.props.dialog.message ? this.props.dialog.message :
                "Oops! No details to show. Kindly cancel this dialog window"}
            </p>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <button className="emr-dialog-cancel-button"
                  onClick={this.props.dismissDialog}>Cancel</button>
              </div>
              <div className="col">
                <button className="emr-dialog-ok-button"
                  onClick={this.onOKButtonClicked}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}