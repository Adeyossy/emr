import React from "react";
import { PatientContext } from "../../models/patient_context";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import NotesComponent from "../minicomponents/notes";
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

  static contextType = PatientContext;

  onItemChange = (id, value) => {
    this.props.updatePMHArrays(id, value, ["forms", "epilepsy", "axisI"], null);
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
              <SingleSelectOutputComponent name={""} id={"aura_side"}
                value={this.context.forms.epilepsy.axisI.aura_side}
                items={["Left", "Right", "Both"]} onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Visual Hallucination"} id={"visual_hallucination"}
                value={this.context.forms.epilepsy.axisI.visual_hallucination}
                items={["Flashing lights", "Amaurosis", "Visual illusions",
                  "Visual hallucinations", "Blinking", "Ocular movements"]}
                onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Dysaesthesia"} id={"dysaesthesia"}
                value={this.context.forms.epilepsy.axisI.dysaesthesia}
                items={["Primary sensations e.g. tingling", "Unpleasant sensation e.g. heat",
                  "Negative sensation e.g. absent limb"]}
                onItemChange={this.onItemChange} />
              <SingleSelectOutputComponent name={"Abdominal"} id={"abdominal"}
                value={this.context.forms.epilepsy.axisI.abdominal}
                items={["Yes", "No"]} onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Psychic"} id={"psychic"}
                value={this.context.forms.epilepsy.axisI.psychic}
                items={["Mood symptoms e.g. fear, elation",
                  "Experiential symptoms e.g. deja vu, jamais vu, out of body experience",
                  "Olfactory hallucinations or illusion",
                  "Behavioural abnormalities e.g. emotional or mood changes"]}
                onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Auditory"} id={"auditory"}
                value={this.context.forms.epilepsy.axisI.auditory}
                items={["Simple hallucinations e.g. buzz, noise",
                  "Vertiginous symptoms"]}
                onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Autonomic"} id={"autonomic"}
                value={this.context.forms.epilepsy.axisI.autonomic}
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
                  <LabelAndInputComponent id={"consciousness_alteration_duration"} title={"Duration"}
                    value={this.context.forms.epilepsy.axisI.consciousness_alteration_duration}
                    onItemChange={this.onItemChange} type={"number"} />
                  <LabelAndInputComponent id={"consciousness_alteration_description"} title={"Describe"}
                    value={this.context.forms.epilepsy.axisI.consciousness_alteration_description}
                    onItemChange={this.onItemChange} type={"text"} />
                </div>
              </div>
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Blank Spell</h4>
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"blank_spell_duration"} title={"Duration"}
                    value={this.context.forms.epilepsy.axisI.blank_spell_duration}
                    onItemChange={this.onItemChange} type={"number"} />
                  <LabelAndInputComponent id={"blank_spell_description"} title={"Describe"}
                    value={this.context.forms.epilepsy.axisI.blank_spell_description}
                    onItemChange={this.onItemChange} type={"text"} />
                </div>
              </div>
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Amnesia of event</h4>
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"amnesia_duration"} title={"Duration"}
                    value={this.context.forms.epilepsy.axisI.amnesia_duration}
                    onItemChange={this.onItemChange} type={"number"} />
                  <LabelAndInputComponent id={"amnesia_description"} title={"Describe"}
                    value={this.context.forms.epilepsy.axisI.amnesia_description}
                    onItemChange={this.onItemChange} type={"text"} />
                </div>
              </div>
            </div>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary>Motor</summary>
            <div className="emr-clerking-tab-data-items">
              <SingleSelectOutputComponent name={""} id={"motor_side"}
                value={this.context.forms.epilepsy.axisI.motor_side}
                items={["Left", "Right", "Both"]} onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"clonus_description"} title={"Clonus (describe)"}
                value={this.context.forms.epilepsy.axisI.clonus_description}
                onItemChange={this.onItemChange} type={"text"} />
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Tonic (describe)</h4>
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"tonic_description"} title={"Describe"}
                    value={this.context.forms.epilepsy.axisI.tonic_description}
                    onItemChange={this.onItemChange} type={"text"} />
                  <MultiSelectOutputComponent name={""} id={"motor_version"}
                    value={this.context.forms.epilepsy.axisI.motor_version}
                    items={["Version", "Fencing (M2e) position", "Figure four position"]}
                    onItemChange={this.onItemChange} />
                </div>
              </div>
              <LabelAndInputComponent id={"myoclonus_description"} title={"Myoclonus (describe)"}
                value={this.context.forms.epilepsy.axisI.myoclonus_description}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"version_description"} title={"Version (describe)"}
                value={this.context.forms.epilepsy.axisI.version_description}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"atonic_description"} title={"Atonic (describe)"}
                value={this.context.forms.epilepsy.axisI.atonic_description}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"hypermotor_description"} title={"Hyper-motor (describe)"}
                value={this.context.forms.epilepsy.axisI.hypermotor_description}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"akinetic_description"} title={"Akinetic (describe)"}
                value={this.context.forms.epilepsy.axisI.akinetic_description}
                onItemChange={this.onItemChange} type={"text"} />
              <details className="emr-clerking-tab-data-item">
                <summary>Automatism</summary>
                <MultiSelectOutputComponent name={"Automatism (smack lips, fidget, behave in an unusual way)"}
                  id={"automatism"} onItemChange={this.onItemChange}
                  value={this.context.forms.epilepsy.axisI.automatism}
                  items={["Oro-alimentary", "Gestural", "Manipulative e.g. picking, fumbling"]} />
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"automatism_duration"} title={"Duration"}
                    value={this.context.forms.epilepsy.axisI.automatism_duration}
                    onItemChange={this.onItemChange} type={"number"} />
                  <LabelAndInputComponent id={"automatism_description"} title={"Describe"}
                    value={this.context.forms.epilepsy.axisI.automatism_description}
                    onItemChange={this.onItemChange} type={"text"} />
                </div>
              </details>
            </div>
          </details>
          <MultiSelectOutputComponent name={"Others"} id={"others_axis_i"}
            items={["Aphasia", "Dystonic posturing", "Ictal speech", "Urinary urge",
              "Speech arrest", "Forced thinking", "Laryngeal symptoms", "Sphincteric dysfunction"]}
            value={this.context.forms.epilepsy.axisI.others_axis_i}
            onItemChange={this.onItemChange} />
          <details className="emr-clerking-tab-data-item">
            <summary>Post-ictal manifestation</summary>
            <div className="emr-clerking-tab-data-items">
              <MultiSelectOutputComponent name={"Post-ictal manifestations"}
                id={"postictal_manifestation"}
                value={this.context.forms.epilepsy.axisI.postictal_manifestation}
                items={["Confusion", "Sleep", "Headache", "Motor deficit", "Aphasia", "Nose wipe",
                  "Fatigue", "Sphincteric dysfunction"]} onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"postictal_duration"} type={"number"}
                value={this.context.forms.epilepsy.axisI.postictal_duration}
                title={"Duration of post-ictal phase"} onItemChange={this.onItemChange} />
            </div>
          </details>
          <LabelAndInputComponent id={"symptoms_per_month"} type={"number"}
            title={"How often do these symptoms occur per month in the last year?"}
            value={this.context.forms.epilepsy.axisI.symptoms_per_month}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"seizures_per_month"} type={"number"}
            value={this.context.forms.epilepsy.axisI.seizures_per_month}
            title={"How many seizures have you experienced in the last month?"}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"age_at_first_seizure"} type={"number"}
            value={this.context.forms.epilepsy.axisI.age_at_first_seizure}
            title={"Age at first seizure"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"age_at_first_diagnosis"} type={"number"}
            value={this.context.forms.epilepsy.axisI.age_at_first_diagnosis}
            title={"Age at first diagnosis"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"date_of_last_seizure"} type={"text"}
            value={this.context.forms.epilepsy.axisI.date_of_last_seizure}
            title={"When was the last seizure?"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"time_of_day"} type={"text"}
            title={"Do these symptoms occur at a particular time of day?"}
            value={this.context.forms.epilepsy.axisI.time_of_day}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"more_at_night_or_day"} type={"text"}
            title={"Does your attack occur more at night or day? From sleep"}
            value={this.context.forms.epilepsy.axisI.more_at_night_or_day}
            onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent
            name={"Do you have incomplete seizure manifestation i.e. aura alone?"}
            id={"incomplete_seizure_manifestation"} items={["Yes", "No"]}
            value={this.context.forms.epilepsy.axisI.incomplete_seizure_manifestation}
            onItemChange={this.onItemChange} />
          <NotesComponent id={"notes"}
            value={this.context.forms.epilepsy.axisI.motor_side}
            onItemChange={this.onItemChange} />
        </div>
      </div>
    );
  }
}