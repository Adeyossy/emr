import React from "react";

export default class AxisIIComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Seizure Classification (with brain location)</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="classification">Classification</label>
            <textarea name="classification" id="classification" cols="30" rows="10" placeholder="write here..."></textarea>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="brainlocations">Possible Brain Locations</label>
            <textarea name="brainlocations" id="brainlocations" cols="30" rows="10" placeholder="write here..."></textarea>
          </div>
        </div>
      </div>
    );
  }
}