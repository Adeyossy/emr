import React from "react";
import LabelAndInputComponent from "../epilepsy/label_and_input";
import { search, searchForId, searchForName, searchOne, searchOneForName } from "../../helpers/search";
import PatientItemComponent from "./patient_item";

export default class NoDuplicatesComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      id: "",
      exists: true
    }
  }

  onItemChange = (name, value) => {
    this.setState({
      [name]: value,
      exists: search(value, this.props.patients)
    });
  }

  onPatientClicked = (id) => {
    this.props.dismissDialog();
    this.props.onPatientClicked(id);
  }

  onOKButtonClicked = () => {
    const nameOrId = parseInt(this.state.input) ? ["", this.state.input] 
    : [this.state.input, ""]
    this.props.dismissDialog();
    this.props.dialog.action(...nameOrId);
  }

  render() {
    return (
      <div className="offset-md-1 col-md-10 d-flex 
        justify-content-center align-items-center">
        <div className="emr-dialog w-100">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-7">
                <div className="emr-dialog-input d-flex flex-column justify-content-between">
                  <div className="emr-dialog-desc">
                    <div className="emr-dialog-title p-4">
                      <h6 className="emr-dialog-title-text">
                        {this.props.dialog.title ? this.props.dialog.title : "UNTITLED"}
                      </h6>
                    </div>
                    <div className="emr-dialog-details">
                      <p className="">
                        {this.props.dialog.message ? this.props.dialog.message :
                          "Oops! No details to show. Kindly cancel this dialog window"}
                      </p>
                    </div>
                  </div>
                  <div className="px-3">
                    <LabelAndInputComponent id="input" value={this.state.input} title="Patient's Name or Id"
                      onItemChange={this.onItemChange} type="text" />
                    {/* <LabelAndInputComponent id="id" value={this.state.id} title={"Hospital Id"}
                    onItemChange={this.onItemChange} type="text" /> */}
                  </div>
                  <div className="emr-dialog-buttons container-fluid p-3">
                    <div className="row">
                      <div className="col">
                        <button className="emr-dialog-cancel-button"
                          onClick={this.props.dismissDialog}>Cancel</button>
                      </div>
                      <div className="col">
                        <button className="emr-dialog-ok-button"
                          onClick={this.onOKButtonClicked}
                          disabled={this.state.exists}>OK</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 bg-light emr-dialog-patients p-4">
                <h6 className="emr-card-headers">Search Result</h6>
                <div>Existing patient(s) whose name(s) match the name supplied.</div>
                <div className="emr-patients-no-duplicate">
                  {
                    this.props.patients
                      .filter(patient => searchOne(this.state.input, patient))
                      .map(patient =>
                        <PatientItemComponent patient={patient} key={patient._id}
                          goToPatient={this.onPatientClicked} />
                      )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}