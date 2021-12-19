import React from "react";
import { PatientContext } from "../../models/patient_context";
import FormComponent from "./form";
import FormGroupComponent from "./form_group";

export default class GCSComponent extends React.Component {

  static contextType = PatientContext;

  render() {
    const eyeOpening = ["Eyes opening spontaneously (4)",
      "Eyes open to verbal command, speech, or shout (3)",
      "Eyes open to pain (2)", "No eye opening (1)"];

    const verbalResponse = ["Oriented (5)", "Confused conversation (4)",
      "Inappropriate responses (3)", "Incomprehensible sounds (2)", "No verbal response (1)"];

    const motorResponse = ["Obeys commands (6)", "Purposeful movement to painful stimulus (5)",
      "Withdraws from pain (4)", "Abnormal flexion, decorticate posture (3)",
      "Abnormal Extension, decerebrate posture (2)", "No motor response (1)"];

    const eyeOpeningItems = [
      [eyeOpening.join(", "), this.context.appointment.forms.gcs.eyeopening, 1, 4]
    ];

    const verbalItems = [
      [verbalResponse.join(", "), this.context.appointment.forms.gcs.verbalresponse, 1, 5]
    ];

    const motorItems = [
      [motorResponse.join(", "), this.context.appointment.forms.gcs.motorresponse, 1, 6]
    ];

    const gcsItems = [
      ["Eye Opening Response", eyeOpeningItems],
      ["Verbal Response", verbalItems],
      ["Motor Response", motorItems]
    ];

    return (
      <FormComponent name="Glasgow Coma Scale" form={gcsItems} />
    )
  }
}