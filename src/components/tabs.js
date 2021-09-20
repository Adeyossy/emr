import React from "react";

export default class TabComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tabItems = this.props.items.map((item, index) =>
      <div className="col emr-history-tab" key={index.toString()} onClick={this.props.changeTabState.bind(this, index)}>
        <div className={`emr-history-tab-item ${this.props.tabState[index]}`}>
          <p className="emr-history-tab-text">{item}</p>
        </div>
      </div>
      );
    return (
      <div className="container-fluid">
        <div className="row g-0 emr-history-tabs">
          { tabItems }
        </div>
      </div>
    )
  }
}