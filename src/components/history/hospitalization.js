import React from "react";
import SingleItemSelectComponent from "../minicomponents/single_item_select";

export default class HospitalizationComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recovery: "",
      recoveries: ["Complete Recovery", "Partial Recovery", "No Recovery", "Other"]
    }
  }
  
  displaySelectedInInputBox = (index) => {
    this.setState({
      recovery: this.state.recoveries[index]
    });
  }

  render() {
    return (
      <div className="emr-clerking-tab-data-item">
        <h4 className="emr-card-headers">Hospitalization {this.props.index}</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`hospitalizationdiagnosis1${this.props.index}`}>What was the diagnosis?</label>
            <input type="text" name={`hospitalizationdiagnosis1${this.props.index}`} id={`hospitalizationdiagnosis1${this.props.index}`}
              placeholder="e.g severe malaria"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`hospitalizationduration1${this.props.index}`}>Length of hospital stay (in days)</label>
            <input type="number" name={`hospitalizationduration1${this.props.index}`} id={`hospitalizationduration1${this.props.index}`}
              placeholder="e.g 2" required></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`hospitalizationhospital1${this.props.index}`}>Health Facility</label>
            <input type="text" name={`hospitalizationhospital1${this.props.index}`} id={`hospitalizationhospital1${this.props.index}`}
              placeholder="e.g UCH"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`hospitalizationtreatment1${this.props.index}`}>Treatment received</label>
            <input type="number" name={`hospitalizationtreatment1${this.props.index}`} id={`hospitalizationtreatment1${this.props.index}`}
              placeholder="e.g IV fluids"></input>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor={`hospitalizationrecovery1${this.props.index}`}>Recovery after treatment</label>
            <SingleItemSelectComponent selectableItems={this.state.recoveries} displayInBox={this.displaySelectedInInputBox} />
            <input type="text" name={`hospitalizationrecovery1${this.props.index}`} id={`hospitalizationrecovery1${this.props.index}`}
              placeholder="e.g IV fluids" defaultValue={this.state.recovery}></input>
          </div>
        </div>
      </div>
    )
  }
}