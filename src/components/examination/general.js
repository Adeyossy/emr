import React from "react";
import MultiItemSelectComponent from "../minicomponents/multi_item_select";

export default class GeneralExamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["Febrile", "Pale", "Icteric", "Cyanosed", "Dehydrated", "Digital Clubbing",
      "Peripheral Lymphadenopathy", "Pedal Oedema"];
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">General Examination</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <h4 className="emr-card-headers">On examination:</h4>
            <MultiItemSelectComponent selectableItems={this.items} />
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="familyhistoryepilepsy">Family history of epilepsy (describe)</label>
            <textarea name="familyhistoryepilepsy" id="familyhistoryepilepsy" cols="30" rows="10" placeholder="write here..."></textarea>
          </div>
        </div>
      </div>
    );
  }
}