import React from "react";
import LabelAndInputComponent from "../epilepsy/label_and_input";
import MultiSelectOutputComponent from "./multi_select_output";
import { symptoms } from "../../models/symptoms";

export default class ListComponent extends React.Component {
  render() {
    return (
      <>
        <MultiSelectOutputComponent name={this.props.name} id={this.props.name.toLowerCase()}
          items={Object.keys(this.props.dictionary)
            .map(symptom => symptom.split("_").join(" "))
            .filter(symptom => this.props.value.split(", ")
              .find(val => val.toLowerCase().includes(symptom.toLowerCase()) 
              || symptom.toLowerCase().includes(val.toLowerCase())))}
          value={this.props.value} onItemChange={this.props.onItemChange} />
      </>
    )
  }
}