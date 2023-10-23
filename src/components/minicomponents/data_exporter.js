import React from "react";
import MultiItemSelectComponent from "./multi_item_select";
import { newEmrPatient } from "../../models/patient";
import MultiSelectOutputComponent from "./multi_select_output";
import { biodata } from "../../models/biodata";

export default class DataExporter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      biodata: [],
      presenting_complaints: [],
      ros: []
    }
  }

  onItemChange = (id, value) => {
    // Retrieve the appropriate field whose value changed and push the 'value'
    const idState = this.state[id];
    idState.push(value);
    this.setState({
      [id]: idState
    });
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
              value={this.state.biodata.join(", ")} onItemChange={this.onItemChange} />
          </div>
        </div>
      </div>
    )
  }
}