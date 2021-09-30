import React from "react";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import SingleItemSelectComponent from "../minicomponents/single_item_select";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";
import LabelAndInputComponent from "./label_and_input";

export default class AxisIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consciousnessduration: "",
      consciousnessdescription: "",
      blankspellduration: "",
      blankspelldescription: "",
      amnesiaduration: "",
      amnesiadescription: "",
      clonusdescription: "",
      tonicdescription: ""
    }
  }

  onItemChange = (id, value) => {
    this.setState({
      [id]: value
    });
  }

  onItemChangeInComponent = (event) => {
    this.onItemChange(event.target.name, event.target.value);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Semiology Description</h4>
        <div className="emr-clerking-tab-data-items">
          <details className="emr-clerking-tab-data-item">
            <summary htmlFor="familyhistory">Aura</summary>
            <div className="emr-clerking-tab-data-items">
              <SingleSelectOutputComponent name={""} id={"auraside"}
                items={["Left", "Right", "Both"]} onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Visual Hallucination"} id={"visualhallucination"}
                items={["Flashing lights", "Amaurosis", "Visual illusions",
                  "Visual hallucinations", "Blinking", "Ocular movements"]}
                onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Dysaesthesia"} id={"dysaesthesia"}
                items={["Primary sensations e.g. tingling", "Unpleasant sensation e.g. heat",
                  "Negative sensation e.g. absent limb"]}
                onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Abdominal"} id={"abdominal"}
                items={["Yes", "No"]} onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Psychic"} id={"psychic"}
                items={["Mood symptoms e.g. fear, elation",
                  "Experiential symptoms e.g. deja vu, jamais vu, out of body experience",
                  "Olfactory hallucinations or illusion",
                  "Behavioural abnormalities e.g. emotional or mood changes"]}
                onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Auditory"} id={"auditory"}
                items={["Simple hallucinations e.g. buzz, noise",
                  "Vertiginous symptoms"]}
                onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Autonomic"} id={"autonomic"}
                items={["Palpitations", "Sweating", "Tachycardia", "Flushing",
                  "Vomiting", "Urinary urge"]}
                onItemChange={this.onItemChange} />
            </div>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary htmlFor="hypertension">Consciousness</summary>
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Alteration in Consciousness</h4>
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"consciousnessduration"} title={"Duration"}
                    onItemChange={this.onItemChange} type={"number"} />
                  <LabelAndInputComponent id={"consciousnessdescription"} title={"Describe"}
                    onItemChange={this.onItemChange} type={"text"} />
                </div>
              </div>
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Blank Spell</h4>
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"blankspellduration"} title={"Duration"}
                    onItemChange={this.onItemChange} type={"number"} />
                  <LabelAndInputComponent id={"blankspelldescription"} title={"Describe"}
                    onItemChange={this.onItemChange} type={"text"} />
                </div>
              </div>
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Amnesia of event</h4>
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"amnesiaduration"} title={"Duration"}
                    onItemChange={this.onItemChange} type={"number"} />
                  <LabelAndInputComponent id={"amnesiadescription"} title={"Describe"}
                    onItemChange={this.onItemChange} type={"text"} />
                </div>
              </div>
            </div>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary>Motor</summary>
            <div className="emr-clerking-tab-data-items">
              <SingleSelectOutputComponent name={""} id={"motorside"}
                items={["Left", "Right", "Both"]} onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"clonusdescription"} title={"Clonus (describe)"}
                onItemChange={this.onItemChange} type={"text"} />
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Tonic (describe)</h4>
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"tonicdescription"} title={"Describe"}
                    onItemChange={this.onItemChange} type={"text"} />
                  <MultiSelectOutputComponent name={""} id={"motorversion"}
                    items={["Version", "Fencing (M2e) position", "Figure four position"]}
                    onItemChange={this.onItemChange} />
                </div>
              </div>
              <LabelAndInputComponent id={"myoclonusdescription"} title={"Myoclonus (describe)"}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"versiondescription"} title={"Version (describe)"}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"atonicdescription"} title={"Atonic (describe)"}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"hypermotordescription"} title={"Hyper-motor (describe)"}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"akineticdescription"} title={"Akinetic (describe)"}
                onItemChange={this.onItemChange} type={"text"} />
              <details className="emr-clerking-tab-data-item">
                <summary>Automatism</summary>
                <MultiSelectOutputComponent name={"Automatism (smack lips, fidget, behave in an unusual way)"}
                  id={"automatism"} onItemChange={this.onItemChange}
                  items={["Oro-alimentary", "Gestural", "Manipulative e.g. picking, fumbling"]} />
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"automatismduration"} title={"Duration"}
                    onItemChange={this.onItemChange} type={"number"} />
                  <LabelAndInputComponent id={"automatismdescription"} title={"Describe"}
                    onItemChange={this.onItemChange} type={"text"} />
                </div>
              </details>
            </div>
          </details>
          <MultiSelectOutputComponent name={"Others"} id={"othersaxisi"}
            items={["Aphasia", "Dystonic posturing", "Ictal speech", "Urinary urge",
              "Speech arrest", "Forced thinking", "Laryngeal symptoms", "Sphincteric dysfunction"]}
            onItemChange={this.onItemChange} />
          <details className="emr-clerking-tab-data-item">
            <summary>Post-ictal manifestation</summary>
            <div className="emr-clerking-tab-data-items">
              <MultiSelectOutputComponent name={"Post-ictal manifestations"}
                id={"postictalmanifestation"}
                items={["Confusion", "Sleep", "Headache", "Motor deficit", "Aphasia", "Nose wipe",
                  "Fatigue", "Sphincteric dysfunction"]} onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"postictalduration"} type={"number"}
                title={"Duration of post-ictal phase"} onItemChange={this.onItemChange} />
            </div>
          </details>
          <LabelAndInputComponent id={"symptomspermonth"} type={"number"}
            title={"How often do these symptoms occur per month in the last year?"}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"seizurespermonth"} type={"number"}
            title={"How many seizures have you experienced in the last month?"}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"ageatfirstseizure"} type={"number"}
            title={"Age at first seizure"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"ageatfirstdiagnosis"} type={"number"}
            title={"Age at first diagnosis"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"dateoflastseizure"} type={"text"}
            title={"When was the last seizure?"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"timeofday"} type={"text"}
            title={"Do these symptoms occur at a particular time of day?"} 
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"moreatnightorday"} type={"text"}
            title={"Does your attack occur more at night or day? From sleep"} 
            onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent 
            name={"Do you have incomplete seizure manifestation i.e. aura alone?"} 
            id={"incompleteseizuremanifestation"} items={["Yes", "No"]} 
            onItemChange={this.onItemChange} />
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="notes">Notes</label>
            <textarea name="notes" id="notes" cols="30" rows="10" placeholder="write here..."></textarea>
          </div>
        </div>
      </div>
    );
  }
}