import React from "react";
import FormComponent from "./form";

export default class NIHSSComponent extends React.Component {
  render() {
    // 
    const locItems = [
      [["Alert (0)", "Rousable to normal stimulation (1)", "Rousable only to painful stimulation (2)", "Reflex response or unrousable (3)"], "loc", 0, 3],
      [["Ask patient's age and month. If: ", "Both correct (0)", "One correct or dysarthria, foreign language (1)", "Neither correct (2)"], "locquestions", 0, 2],
      [["Level of consciousness commands. Open and close eyes, grip and release your hand.", "Performed both correctly (0)", "Performed one correctly (1)", "Performed neither correctly (2)"], "loccommands", 0, 2]
    ];

    const bestGazeItems = [
      [
        [
          "Test horizontal eye movements tracking object/face", "Normal (0)", "Partial Gaze Palsy, abnormal gaze in 1 or both eyes (1)", "Forced Deviation (2)"
        ], "bestgaze", 0, 2
      ]
    ]

    const visualItems = [
      [
        [
          "No visual lost (0)", "Partial hemianopia (1)", "Complete Hemianopia (2)", "Bilateral Hemianopia"
        ], "visual", 0, 3
      ]
    ];

    const facialPalsyItems = [
      [
        [
          "Show teeth, close eyes tight, raise eyebrows. If stuporous, check symmetry of grimace to pain.", "Normal symmetric movements (0)", "Minor paralysis, flat nasolabial fold, assymetrical smile (1)", "Partial paralysis (lower face) (2)", "Complete paralysis (upper and lower face) of one or both sides (3)"
        ], "facialpalsy", 0, 3
      ]
    ];

    const motorArmItems = [
      [
        [
          "Left arm", "Arms outstretched 90deg (sitting or 45 deg (supine)) for 10 seconds. Encourage best effort. Score for Left and then Right arm.", "No drift for 10 secs (0)", "Drift but does not hit bed (1)", "Some antigravity effort but can't sustain (2)", "Unable to overcome gravity, minimal proximal movement present (3)", "No movement at all (4)", "Unable to assess due to amputation, fusion, fx etc"
        ], "motorleftarm", 0, 4
      ],
      [
        [
          "Right arm", "Arms outstretched 90deg (sitting or 45 deg (supine)) for 10 seconds. Encourage best effort. Score for Left and then Right arm.", "No drift for 10 secs (0)", "Drift but does not hit bed (1)", "Some antigravity effort but can't sustain (2)", "Unable to overcome gravity, minimal proximal movement present (3)", "No movement at all (4)", "Unable to assess due to amputation, fusion, fx etc"
        ], "motorrightarm", 0, 4
      ]
    ];

    const motorLegItems = [
      [
        [
          "Left leg", "No drift for 10 secs (0)", "Drift but does not hit bed (1)", "Some antigravity effort but can't sustain (2)", "Unable to overcome gravity, minimal proximal movement present (3)", "No movement at all (4)", "Unable to assess due to amputation, fusion, fx etc"
        ], "motorleftleg", 0, 4
      ],
      [
        [
          "Right leg", "No drift for 10 secs (0)", "Drift but does not hit bed (1)", "Some antigravity effort but can't sustain (2)", "Unable to overcome gravity, minimal proximal movement present (3)", "No movement at all (4)", "Unable to assess due to amputation, fusion, fx etc"
        ], "motorrightleg", 0, 4
      ]
    ];

    const limbAtaxiaItems = [
      [
        [
          "Absent (0)", "Present in one limb (1)", "Present in two limbs (2)"
        ], "limbataxia", 0, 2
      ]
    ]

    const sensoryItems = [
      [
        [
          "Normal; no sensory loss (0)", "Mild-to-moderate sensory loss (1)", "Severe-to-total sensory loss (2)"
        ], "sensory", 0, 2
      ]
    ]

    const bestLanguageItems = [
      [
        [
          "No aphasia; normal (0)", "Mild-to-moderate aphasia (1)", "Severe aphasia (2)", "Mute, global aphasia (3)"
        ], "bestlanguage", 0, 3
      ]
    ]

    const dysarthriaItems = [
      [
        [
          "Read or repeat list of words", "Normal (0)", "Mild-to-moderate slurred speech but intelligible (1)", "Mute or unintelligible (2)", "Intubation or mechanical barrier (X)"
        ], "dsyarthria", 0, 3
      ]
    ]

    const extinctionItems = [
      [
        [
          "Simultaneously touch patient on both hands or legs with their eyes closed, show fingers in both visual fields", "Normal, none detected (0)", "Neglect or extinction to double simultaneous stimulation in any modality (sensory, visual) OR visual/sensory loss on one side (1)", "Profound neglect in both visual and sensory modalities (2)"
        ], "extinction", 0, 2
      ]
    ]

    const items = [
      ["Level of Consciousness", locItems],
      ["Best Gaze", bestGazeItems],
      ["Visual", visualItems],
      ["Facial Palsy", facialPalsyItems],
      ["Motor Arm", motorArmItems],
      ["Motor Leg", motorLegItems],
      ["Limb Ataxia", limbAtaxiaItems],
      ["Sensory", sensoryItems],
      ["Best Language", bestLanguageItems],
      ["Dysarthria", dysarthriaItems],
      ["Extinction and Inattention", extinctionItems]
    ];

    return (
      <FormComponent name="NIHSS Scale" form={items} formTag="nihss"
        updateAnyObject={this.props.updateAnyObject} />
    )
  }
}