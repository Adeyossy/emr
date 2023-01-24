import React from "react";
import FormComponent from "./form";

export default class ROSIERComponent extends React.Component {
  render() {
    const rosierItems = [
      [
        ["Unilateral Facial Weakness (+1)"], "facialweakness", 0, 1
      ],
      [
        ["Unilateral Grip Weakness (+1)"], "gripweakness", 0, 1
      ],
      [
        ["Unilateral Arm Weakness (+1)"], "armweakness", 0, 1
      ],
      [
        ["Unilateral Leg Weakness (+1)"], "legweakness", 0, 1
      ],
      [
        ["Speech Loss (+1)"], "speechloss", 0, 1
      ],
      [
        ["Visual Field Defect (+1)"], "visualfielddefect", 0, 1
      ],
      [
        ["Loss of Consciousness (-1)"], "lossofconsciousness", -1, 0
      ],
      [
        ["Seizure (-1)"], "seizure", -1, 0
      ],
    ];

    const items = [
      ["Rosier Scale (To indicate probability of stroke in acute presentations)", rosierItems]
    ];

    return (
      <FormComponent name="ROSIER Scale" form={items} formTag="rosier"
        updateAnyObject={this.props.updateAnyObject} />
    )
  }
}