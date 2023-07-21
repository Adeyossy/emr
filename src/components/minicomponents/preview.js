import React from "react";

export default class PreviewComponent extends React.Component {
  render() {
    const item = this.props.item;
    const selected = this.props.whereId === this.props.index ? 'filled' : '';
    return (
      <div className={`emr-clerking-tab-data-item ${selected} emr-complaint-preview`}
      key={this.props.index} onClick={this.props.setWhere.bind(this, this.props.index, 
      this.props.section)}>
        <p className="emr-card-headers">{this.props.name.toUpperCase()}</p>
        <div className="container-fluid p-0">
          <div className="row">
            {
              Object.entries(item).filter(entry => entry[0] !== this.props.section)
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