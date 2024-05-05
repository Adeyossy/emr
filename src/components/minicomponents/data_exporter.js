import React from "react";
import { newEmrPatient } from "../../models/patient";
import MultiSelectOutputComponent from "./multi_select_output";
import { dataExporterHelper } from "../../data/data";
import { apntmntForm } from "../../models/appointment";

export default class DataExporter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      biodata: "",
      presenting_complaints: "",
      review_of_systems: "",
      past_medical_history: "",
      others: "",
      downloadFile: null
    }
  }

  onItemChange = (ids, value) => {
    // Retrieve the appropriate field whose value changed and push the 'value'
    this.setState({
      [ids]: value
    });
  }

  onExportClicked = () => {
    // Begin Processing here
    const exportData = dataExporterHelper(this.props.patients, Object.assign(this.state));
    // console.log(exportData);
    this.setState({
      downloadFile: exportData.join("\r\n")
    });
  }

  onOKButtonClicked = () => {
    // Begin Processing here
    // console.log(dataExporterHelper(this.props.patients, this.state));
    this.props.dismissDialog();
  }

  render() {
    const patientModel = newEmrPatient();
    const lastAppointment = patientModel[patientModel.last_viewed];
    const date = new Date();

    return (
      <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
        <div className="emr-dialog emr-select-dialog">
          <div className="emr-dialog-title">
            <h6 className="emr-dialog-title-text">Export Your Data</h6>
            <br></br>
            {/* <MultiSelectOutputComponent items={Object.keys(biodata)} id="biodata" name="Biodata"
              value={this.state.biodata} onItemChange={this.onItemChange} />
            <MultiSelectOutputComponent items={Object.keys(presenting_complaint)}
              id="presenting_complaints" name="Complaints" value={this.state.presenting_complaints}
              onItemChange={this.onItemChange} />
            <MultiSelectOutputComponent items={Object.keys(review_of_systems)}
              id="review_of_systems" name="Review of Systems" value={this.state.review_of_systems}
              onItemChange={this.onItemChange} />
            <MultiSelectOutputComponent items={Object.keys(past_medical_history)}
              id="past_medical_history" name="Past Medical History" value={this.state.past_medical_history}
              onItemChange={this.onItemChange} /> */}
            {
              Object.keys(apntmntForm).map((key, index) => typeof apntmntForm[key] === "object" 
                && !Array.isArray(apntmntForm[key]) ?
                <MultiSelectOutputComponent key={index} items={Object.keys(apntmntForm[key])}
                  id={key} name={key.toUpperCase().replace(/_/g, " ")} onItemChange={this.onItemChange}
                  value={this.state.hasOwnProperty(key) ? this.state[key] : ""} /> : null
              )
            }
            <MultiSelectOutputComponent items={Object.keys(apntmntForm)
              .filter(key => typeof apntmntForm[key] === "string" || 
                Array.isArray(apntmntForm[key]))} id="others" name="Others" 
              value={this.state.others} onItemChange={this.onItemChange} />
            <button className="w-auto px-5 py-3" onClick={this.onExportClicked}>Export Data</button>
          </div>
          <div className="container-fluid emr-dialog-buttons">
            <div className="row justify-content-end">
              <div className="col offset-lg-4 col-lg-4 offset-xl-6 col-xl-3">
                <button className="emr-dialog-cancel-button"
                  onClick={this.props.dismissDialog}>Cancel</button>
              </div>
              <div className={this.state.downloadFile ? 'col col-lg-4 col-xl-3' : 'd-none'}>
                <a href={URL.createObjectURL(new Blob([this.state.downloadFile],
                  { type: 'application/json' }))}
                  download={`data.${date.getHours()}.${date.getMinutes()}.${date.
                    getSeconds()}.${date.getDate()}.${date.getMonth() + 1}.${date.
                    getFullYear()}.csv`}>
                  <button className="emr-dialog-ok-button"
                    onClick={this.onOKButtonClicked}>Download</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}