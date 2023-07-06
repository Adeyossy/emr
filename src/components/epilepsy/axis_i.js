import React from "react";
import { PatientContext } from "../../models/patient_context";
import MultiSelectOutputComponent from "../minicomponents/multi_select_output";
import NotesComponent from "../minicomponents/notes";
import SingleSelectOutputComponent from "../minicomponents/single_select_output";
import LabelAndInputComponent from "./label_and_input";

export default class AxisIComponent extends React.Component {
  static contextType = PatientContext;

  onItemChange = (id, value) => {
    this.props.updateAnyObject(id, value, [this.context.last_viewed, "forms", "epilepsy", "axisI"], 
    null);
  }

  onMultiItemChange = (id, value) => {
    this.props.updateItemsInArray(
      [this.context.last_viewed, "forms", "epilepsy", "axisI", id], value.split(", "), null);
  }

  onItemChangeInComponent = (event) => {
    this.onItemChange(event.target.name, event.target.value);
  }

  componentDidUpdate() {
    // console.log("Patient => ", this.context[item.last_viewed].forms.epilepsy);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data m-0">
        <h4 className="emr-card-headers">Semiology Description</h4>
        <div className="emr-clerking-tab-data-items">
          <details className="emr-clerking-tab-data-item"
            open={this.context[this.context.last_viewed].forms.epilepsy.axisI.aura_side}>
            <summary htmlFor="familyhistory">Aura</summary>
            <div className="emr-clerking-tab-data-items">
              <SingleSelectOutputComponent name={""} id={"aura_side"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.aura_side}
                items={["Left", "Right", "Both"]} onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Visual Hallucination"} id={"visual_hallucination"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.visual_hallucination.join(", ")}
                items={["Flashing lights", "Amaurosis", "Visual illusions",
                  "Visual hallucinations", "Blinking", "Ocular movements"]}
                onItemChange={this.onMultiItemChange} />
              <MultiSelectOutputComponent name={"Dysaesthesia"} id={"dysaesthesia"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.dysaesthesia.join(", ")}
                items={["Primary sensations e.g. tingling", "Unpleasant sensation e.g. heat",
                  "Negative sensation e.g. absent limb"]}
                onItemChange={this.onMultiItemChange} />
              <SingleSelectOutputComponent name={"Abdominal"} id={"abdominal"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.abdominal}
                items={["Yes", "No"]} onItemChange={this.onItemChange} />
              <MultiSelectOutputComponent name={"Psychic"} id={"psychic"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.psychic.join(", ")}
                items={["Mood symptoms e.g. fear",
                  "Experiential symptoms e.g. deja vu",
                  "Olfactory hallucinations or illusion",
                  "Behavioural abnormalities e.g. emotional or mood changes"]}
                onItemChange={this.onMultiItemChange} />
              <MultiSelectOutputComponent name={"Auditory"} id={"auditory"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.auditory.join(", ")}
                items={["Simple hallucinations e.g. buzz",
                  "Vertiginous symptoms"]}
                onItemChange={this.onMultiItemChange} />
              <MultiSelectOutputComponent name={"Autonomic"} id={"autonomic"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.autonomic.join(", ")}
                items={["Palpitations", "Sweating", "Tachycardia", "Flushing",
                  "Vomiting", "Urinary urge"]}
                onItemChange={this.onMultiItemChange} />
            </div>
          </details>
          <details className="emr-clerking-tab-data-item"
            open={this.context[this.context.last_viewed].forms.epilepsy.axisI.consciousness_alteration_duration}>
            <summary htmlFor="hypertension">Consciousness</summary>
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Alteration in Consciousness</h4>
                <div className="emr-clerking-tab-data-items">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6">
                        <LabelAndInputComponent id={"consciousness_alteration_duration"} title={"Duration"}
                          value={this.context[this.context.last_viewed].forms.epilepsy.axisI.consciousness_alteration_duration}
                          onItemChange={this.onItemChange} type={"text"} />
                      </div>
                      <div className="col-md-6">
                        <LabelAndInputComponent id={"consciousness_alteration_description"} title={"Describe"}
                          value={this.context[this.context.last_viewed].forms.epilepsy.axisI.consciousness_alteration_description}
                          onItemChange={this.onItemChange} type={"text"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Blank Spell</h4>
                <div className="emr-clerking-tab-data-items">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6">
                        <LabelAndInputComponent id={"blank_spell_duration"} title={"Duration"}
                          value={this.context[this.context.last_viewed].forms.epilepsy.axisI.blank_spell_duration}
                          onItemChange={this.onItemChange} type={"text"} />
                      </div>
                      <div className="col-md-6">
                        <LabelAndInputComponent id={"blank_spell_description"} title={"Describe"}
                          value={this.context[this.context.last_viewed].forms.epilepsy.axisI.blank_spell_description}
                          onItemChange={this.onItemChange} type={"text"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Amnesia of event</h4>
                <div className="emr-clerking-tab-data-items">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6">
                        <LabelAndInputComponent id={"amnesia_duration"} title={"Duration"}
                          value={this.context[this.context.last_viewed].forms.epilepsy.axisI.amnesia_duration}
                          onItemChange={this.onItemChange} type={"text"} />
                      </div>
                      <div className="col-md-6">
                        <LabelAndInputComponent id={"amnesia_description"} title={"Describe"}
                          value={this.context[this.context.last_viewed].forms.epilepsy.axisI.amnesia_description}
                          onItemChange={this.onItemChange} type={"text"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
          <details className="emr-clerking-tab-data-item"
            open={this.context[this.context.last_viewed].forms.epilepsy.axisI.motor_side}>
            <summary>Motor</summary>
            <div className="emr-clerking-tab-data-items">
              <SingleSelectOutputComponent name={""} id={"motor_side"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.motor_side}
                items={["Left", "Right", "Both"]} onItemChange={this.onItemChange} />
              <LabelAndInputComponent id={"clonus_description"} title={"Clonus (describe)"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.clonus_description}
                onItemChange={this.onItemChange} type={"text"} />
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Tonic (describe)</h4>
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"tonic_description"} title={"Describe"}
                    value={this.context[this.context.last_viewed].forms.epilepsy.axisI.tonic_description}
                    onItemChange={this.onItemChange} type={"text"} />
                  <MultiSelectOutputComponent name={"Version or other"} id={"motor_version"}
                    value={this.context[this.context.last_viewed].forms.epilepsy.axisI.motor_version.join(", ")}
                    items={["Version", "Fencing (M2e) position", "Figure four position"]}
                    onItemChange={this.onMultiItemChange} />
                </div>
              </div>
              <LabelAndInputComponent id={"myoclonus_description"} title={"Myoclonus (describe)"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.myoclonus_description}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"version_description"} title={"Version (describe)"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.version_description}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"atonic_description"} title={"Atonic (describe)"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.atonic_description}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"hypermotor_description"} title={"Hyper-motor (describe)"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.hypermotor_description}
                onItemChange={this.onItemChange} type={"text"} />
              <LabelAndInputComponent id={"akinetic_description"} title={"Akinetic (describe)"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.akinetic_description}
                onItemChange={this.onItemChange} type={"text"} />
              <details className="emr-clerking-tab-data-item">
                <summary>Automatism</summary>
                <MultiSelectOutputComponent name={"Automatism (smack lips, fidget, behave in an unusual way)"}
                  id={"automatism"} onItemChange={this.onMultiItemChange}
                  value={this.context[this.context.last_viewed].forms.epilepsy.axisI.automatism.join(", ")}
                  items={["Oro-alimentary", "Gestural", "Manipulative e.g. picking"]} />
                <div className="emr-clerking-tab-data-items">
                  <LabelAndInputComponent id={"automatism_duration"} title={"Duration"}
                    value={this.context[this.context.last_viewed].forms.epilepsy.axisI.automatism_duration}
                    onItemChange={this.onItemChange} type={"text"} />
                  <LabelAndInputComponent id={"automatism_description"} title={"Describe"}
                    value={this.context[this.context.last_viewed].forms.epilepsy.axisI.automatism_description}
                    onItemChange={this.onItemChange} type={"text"} />
                </div>
              </details>
            </div>
          </details>
          <MultiSelectOutputComponent name={"Others"} id={"others_axis_i"}
            items={["Aphasia", "Dystonic posturing", "Ictal speech", "Urinary urge",
              "Speech arrest", "Forced thinking", "Laryngeal symptoms", "Sphincteric dysfunction"]}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisI.others_axis_i.join(", ")}
            onItemChange={this.onMultiItemChange} />
          <details className="emr-clerking-tab-data-item">
            <summary>Post-ictal manifestation</summary>
            <div className="emr-clerking-tab-data-items">
              <MultiSelectOutputComponent name={"Post-ictal manifestations"}
                id={"postictal_manifestation"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.postictal_manifestation.join(", ")}
                items={["Confusion", "Sleep", "Headache", "Motor deficit", "Aphasia", "Nose wipe",
                  "Fatigue", "Sphincteric dysfunction"]} onItemChange={this.onMultiItemChange} />
              <LabelAndInputComponent id={"postictal_duration"} type={"text"}
                value={this.context[this.context.last_viewed].forms.epilepsy.axisI.postictal_duration}
                title={"Duration of post-ictal phase"} onItemChange={this.onItemChange} />
            </div>
          </details>
          <LabelAndInputComponent id={"symptoms_per_month"} type={"text"}
            title={"How often do these symptoms occur per month in the last year?"}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisI.symptoms_per_month}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"seizures_per_month"} type={"number"}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisI.seizures_per_month}
            title={"How many seizures have you experienced in the last month?"}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"age_at_first_seizure"} type={"number"}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisI.age_at_first_seizure}
            title={"Age at first seizure"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"age_at_first_diagnosis"} type={"number"}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisI.age_at_first_diagnosis}
            title={"Age at first diagnosis"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"date_of_last_seizure"} type={"text"}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisI.date_of_last_seizure}
            title={"When was the last seizure?"} onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"time_of_day"} type={"text"}
            title={"Do these symptoms occur at a particular time of day?"}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisI.time_of_day}
            onItemChange={this.onItemChange} />
          <LabelAndInputComponent id={"more_at_night_or_day"} type={"text"}
            title={"Does your attack occur more at night or day? From sleep"}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisI.more_at_night_or_day}
            onItemChange={this.onItemChange} />
          <SingleSelectOutputComponent
            name={"Do you have incomplete seizure manifestation i.e. aura alone?"}
            id={"incomplete_seizure_manifestation"} items={["Yes", "No"]}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisI.incomplete_seizure_manifestation}
            onItemChange={this.onItemChange} />
          <NotesComponent id={"notes"} fields={["forms", "epilepsy", "axisI"]}
            value={this.context[this.context.last_viewed].forms.epilepsy.axisI.notes}
            onItemChange={this.props.updateAnyObject} />
        </div>
      </div>
    );
  }
}