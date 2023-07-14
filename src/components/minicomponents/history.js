import React from "react";
import LabelAndInputComponent from "../epilepsy/label_and_input";

export default class HistoryPopUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      symptom: ""
    }
  }

  onItemChange = (event) => {
    this.setState({
      symptom: event.target.value
    });
  }
  
  render() {
    return(
      <LabelAndInputComponent id="complaint" type="text" title="complaint"
        value={this.state.symptom} onItemChange={this.onItemChange.bind(this)} />
    )
  }
}