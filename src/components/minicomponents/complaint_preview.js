import React from "react";

export default class ComplaintPreview extends React.Component {
  render() {
    const complaint = this.props.complaint;
    const selected = this.props.whereId === this.props.index ? 'filled' : '';
    return (
      <div className={`emr-clerking-tab-data-item ${selected} emr-complaint-preview`}
      key={this.props.index} onClick={this.props.setWhere.bind(this, this.props.index, 
      'complaint')}>
        <p className="emr-card-headers">{complaint.complaint.toUpperCase()}</p>
        <div className="container-fluid p-0">
          <div className="row">
            {
              Object.entries(complaint).filter(entry => entry[0] !== 'complaint')
              .map((entry, index) =>
                <div className="col" key={index.toString()}>
                  <p className="emr-preview-list-item emr-rounded-edges">
                    <span className="emr-small-text">{entry[0].split("_").join(" ")}: </span> 
                    <span>{entry[1] ? entry[1] : '---'}</span>
                  </p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}