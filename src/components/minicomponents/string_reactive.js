import React from "react";

export default class StringReactiveComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strings: []
    }
  }

  render() {
    const children = this.state.strings.map((item, index) =>
      
      this.props.children
    );

    return (
      <div className="emr-clerking-tab-data-item">
        <label htmlFor="numberofdrugs">Number of Intercurrent Drugs</label>
        <input type="number" name="numberofdrugs" id="numberofdrugs" className="mb-4"
          value={this.state.strings} onChange={this.updateInt} min="0" max="20" required></input>
        {children}
      </div>
    )
  }
}