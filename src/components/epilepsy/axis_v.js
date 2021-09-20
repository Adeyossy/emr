import React from "react";

export default class AxisVComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="emr-clerking-tab-data emr-card m-0">
        <h4 class="emr-card-headers">Comorbidities</h4>
        <div class="emr-clerking-tab-data-items">
          <div class="emr-clerking-tab-data-item">
            <h4 class="emr-card-headers">Has there been prior treatment or surgery for this problem?</h4>
            <div class="emr-selectable-items-group">
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Yes</p>
              </div>
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">No</p>
              </div>
              <div class="emr-clerking-tab-data-items">
                <div class="emr-clerking-tab-data-item">
                  <label htmlFor="typeoftreatment">What type of treatment?</label>
                  <input type="text" name="typeoftreatment" id="typeoftreatment"></input>
                </div>
                <div class="emr-clerking-tab-data-item">
                  <label htmlFor="prescriber">Who prescribed it?</label>
                  <input type="text" name="prescriber" id="prescriber"></input>
                </div>
                <div class="emr-clerking-tab-data-item">
                  <label htmlFor="treatmentresult">What was the result of the treatment?</label>
                  <input type="text" name="treatmentresult" id="treatmentresult"></input>
                </div>
                <div class="emr-clerking-tab-data-item">
                  <label htmlFor="adverseeffects">Treatment adverse effects</label>
                  <input type="text" name="adverseeffects" id="adverseeffects"></input>
                </div>
              </div>
            </div>
          </div>
          <div class="emr-clerking-tab-data-item">
            <h4 class="emr-card-headers">Cognitive deficit</h4>
            <div class="emr-selectable-items-group">
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Memory</p>
              </div>
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Language</p>
              </div>
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Orientation</p>
              </div>
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Attention</p>
              </div>
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Visuospatial</p>
              </div>
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Executive function</p>
              </div>
            </div>
          </div>
          <div class="emr-clerking-tab-data-item">
            <h4 class="emr-card-headers">Social consequences</h4>
            <div class="emr-selectable-items-group">
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Vocational</p>
              </div>
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Educational</p>
              </div>
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Social relationship</p>
              </div>
            </div>
          </div>
          <div class="emr-clerking-tab-data-item">
            <label htmlFor="moodpersonalitychanges">Mood and personality changes</label>
            <input type="text" name="moodpersonalitychanges" id="moodpersonalitychanges"></input>
          </div>
          <div class="emr-clerking-tab-data-item">
            <label htmlFor="restrictedqol">Subjective restricted quality of life</label>
            <input type="text" name="restrictedqol" id="restrictedqol"></input>
          </div>
          <div class="emr-clerking-tab-data-item">
            <label htmlFor="postictalinjuries">Post-ictal injuries</label>
            <input type="text" name="postictalinjuries" id="postictalinjuries"></input>
          </div>
          <div class="emr-clerking-tab-data-item">
            <h4 class="emr-card-headers">Persistent seizures</h4>
            <div class="emr-selectable-items-group">
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">Yes</p>
              </div>
              <div class="emr-selectable-item">
                <p class="emr-selectable-item-text">No</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}