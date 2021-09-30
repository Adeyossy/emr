import React from "react";
import MultiItemSelectComponent from "../minicomponents/multi_item_select";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";

export default class GeneralExamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["Febrile", "Pale", "Icteric", "Cyanosed", "Dehydrated", "Digital Clubbing",
      "Peripheral Lymphadenopathy", "Pedal Oedema"];
  }

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">General Examination</h4>
        <div className="emr-clerking-tab-data-items">
          <MultiSelectOutputComponent name={"On Examination: "} id={"onexamination"} 
            items={this.items} onItemChange={this.onItemChange} />
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="generalexamnotes">Notes</label>
            <textarea name="generalexamnotes" id="generalexamnotes" cols="30" rows="10" placeholder="write here..."></textarea>
          </div>
        </div>
      </div>
    );
  }
}