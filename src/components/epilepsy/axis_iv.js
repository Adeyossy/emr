import React from "react";

export default class AxisIVComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="emr-clerking-tab-data emr-card m-0">
            <h4 class="emr-card-headers">Aetiology</h4>
            <div class="emr-clerking-tab-data-items">
              <div class="emr-clerking-tab-data-item">
                <h4 class="emr-card-headers">Possible electro-clinical syndrome(s)</h4>
                <div class="emr-selectable-items-group">
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Simple febrile seizures</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Complex febrile seizures</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Localized headaches</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Previous head injury</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">CNS tumours</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Previous loss of consciousness</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Family history of epilepsy</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Eventful pregnancy or birth history</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Previous stroke</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Learning disability</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Developmental disability</p>
                  </div>
                  <div class="emr-selectable-item">
                    <p class="emr-selectable-item-text">Status epilepticus or Acute repetitive seizures at onset of
                      seizures</p>
                  </div>
                  <div class="emr-clerking-tab-data-items">
                    <div class="emr-clerking-tab-data-item">
                      <label htmlFor="familyhistoryepilepsy">Family history of epilepsy (describe)</label>
                      <textarea name="familyhistoryepilepsy" id="familyhistoryepilepsy" cols="30" rows="10" placeholder="write here..."></textarea>
                    </div>
                    <div class="emr-clerking-tab-data-item">
                      <h4 class="emr-card-headers">Status epilepticus or Acute repetitive seizures at onset of
                        seizures</h4>
                      <div class="emr-selectable-items-group">
                        <div class="emr-selectable-item">
                          <p class="emr-selectable-item-text">Yes</p>
                        </div>
                        <div class="emr-selectable-item">
                          <p class="emr-selectable-item-text">No</p>
                        </div>
                      </div>
                    </div>
                    <div class="emr-clerking-tab-data-item">
                      <h4 class="emr-card-headers">Ever had attacks occur in clusters that last more than 5 mins or regain
                        consciousness more than 1 hour</h4>
                      <div class="emr-selectable-items-group">
                        <div class="emr-selectable-item">
                          <p class="emr-selectable-item-text">Yes</p>
                        </div>
                        <div class="emr-selectable-item">
                          <p class="emr-selectable-item-text">No</p>
                        </div>
                      </div>
                    </div>
                    <div class="emr-clerking-tab-data-item">
                      <label htmlFor="seizureprecipitant">List seizure precipitant</label>
                      <textarea name="seizureprecipitant" id="seizureprecipitant" cols="30" rows="10" placeholder="write here..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}