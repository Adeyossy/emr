import React from "react";

export default class IntReactiveComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      int: 0
    }
  }

  updateInt = (event) => {
    this.setState({
      int: event.target.value
    });
  }

  render() {
    const children = [];
    for(let i = 0; i < this.state.int; i++){
      children.push(this.props.children);
    }
    return (
      <div className="emr-clerking-tab-data-item">
        <label htmlFor="numberofdrugs">Number of Intercurrent Drugs</label>
        <input type="number" name="numberofdrugs" id="numberofdrugs" className="mb-4" 
          value={this.state.int} onChange={this.updateInt} min="0" max="20" required></input>
        { children }
      </div>
    );
  }
}