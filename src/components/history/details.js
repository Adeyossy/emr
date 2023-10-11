import React from "react";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";
import LabelAndInputComponent from "../epilepsy/label_and_input";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";

export default class DetailsComponent extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div className="emr-edit p-3">
          <p className="emr-card-headers">
            Edit {item[this.props.whereId][this.props.section].replace(/_/g, " ").toUpperCase()}
          </p>
          <div className="emr-clerking-tab-data-items">
            {
              this.props.dictionary.map(([key, value], index) =>
                  typeof value === 'boolean' ?
                    <SingleSelectOutputComponent id={key} key={index.toString()}
                      name={key.replace(key[0], key[0].toUpperCase()).split("_").join(" ")}
                      items={["Yes", "No"]}
                      value={String(item[this.props.whereId][key])}
                      onItemChange={this.props.onBooleanSymptomChange} />
                    :
                    typeof value === 'object' ?
                      <MultiSelectOutputComponent id={key} key={index.toString()}
                        name={key.replace(key[0], key[0].toUpperCase()).split("_").join(" ")}
                        items={value} value={item[this.props.whereId][key]}
                        onItemChange={this.props.onItemChange.bind(this)} /> :
                      <LabelAndInputComponent
                        title={key.replace(key[0], key[0].toUpperCase())
                          .split("_").join(" ")} id={key} key={index.toString()}
                        value={item[this.props.whereId][key]}
                        onItemChange={this.props.onItemChange} type={'text'} />
                )
            }
          </div>
        </div>
    )
  }
}