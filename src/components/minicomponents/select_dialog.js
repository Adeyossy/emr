import React from "react";
import { formsLookUp } from "../../models/forms";

export default class SelectDialogComponent extends React.Component {
  onFormClicked = (formTag) => {
    this.props.dialogAction(formTag);
    this.props.dismissDialog();
  }

  render() {
    const forms = Object.keys(formsLookUp)
      .map(item => [item.toUpperCase(), formsLookUp[item].title]);

    return (
      <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10">
        <div className="emr-dialog emr-select-dialog">
          <div className="emr-icon-bg emr-icon-bg-light emr-clicable"
            onClick={this.props.dismissDialog}>
            <i className="bi bi-x-lg emr-icons emr-center-icon"></i>
            <i className="emr-icon-tooltip">Close</i>
          </div>
          <div className="emr-dialog-title">
            <h6 className="emr-dialog-title-text">
              {this.props.dialogTitle ? this.props.dialogTitle : "UNTITLED"}
            </h6>
          </div>
          <div className="emr-dialog-details">
            <p className="emr-dialog-details-text text-wrap">
              {this.props.dialogMessage ? this.props.dialogMessage :
                "Oops! No details to show. Kindly cancel this dialog window"}
            </p>
          </div>
          <div className="container-fluid">
            <div className="row">
              {
                forms.map((item, index) =>
                  <div className="col-md-6 col-lg-4 col-xl-3" key={index.toString()}>
                    <div className="emr-quick-info-card emr-clickable" onClick={this.onFormClicked.bind(this, item[0].toLowerCase())}>
                      <div className="emr-icon-bg emr-icon-bg-dark">
                        <i className="bi bi-file-earmark-medical-fill emr-icons emr-center-icon"></i>
                      </div>
                      <p className="emr-quick-info-card-title">{item[0]}</p>
                      <p className="emr-quick-info-card-details">{item[1]}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}