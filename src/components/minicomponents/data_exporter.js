import React from "react";
import MultiItemSelectComponent from "./multi_item_select";
import { newEmrPatient } from "../../models/patient";
import MultiSelectOutputComponent from "./multi_select_output";
import { biodata } from "../../models/biodata";
import { dataExporterHelper } from "../../data/data";

export default class DataExporter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      biodata: "",
      presenting_complaints: "",
      ros: ""
    }
  }

  onItemChange = (ids, value) => {
    // Retrieve the appropriate field whose value changed and push the 'value'
    this.setState({
      [ids]: value
    });
  }

  onOKButtonClicked = () => {
    // Begin Processing here
    console.log(dataExporterHelper(this.props.patients, this.state));
    this.props.dismissDialog();
  }

  render() {
    const patientModel = newEmrPatient();
    const lastAppointment = patientModel[patientModel.last_viewed];

    return (
      <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
        <div className="emr-dialog emr-select-dialog">
          <div className="emr-dialog-title">
            <h6 className="emr-dialog-title-text">Export Your Data</h6>
            <br></br>
            <MultiSelectOutputComponent items={Object.keys(biodata)} id="biodata" name="biodata"
              value={this.state.biodata} onItemChange={this.onItemChange} />
          </div>
          <div className="container-fluid emr-dialog-buttons">
            <div className="row">
              <div className="col offset-lg-4 col-lg-4 offset-xl-6 col-xl-3">
                <button className="emr-dialog-cancel-button"
                  onClick={this.props.dismissDialog}>Cancel</button>
              </div>
              <div className="col col-lg-4 col-xl-3">
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