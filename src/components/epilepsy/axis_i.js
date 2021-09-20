import React from "react";

export default class AxisIComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="emr-clerking-tab-data emr-card m-0">
            <h4 className="emr-card-headers">Semiology Description</h4>
            <div className="emr-clerking-tab-data-items">
              <details className="emr-clerking-tab-data-item">
                <summary htmlFor="familyhistory">Aura</summary>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Left</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Right</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Both</p>
                      </div>
                    </div>
                  </div>
                  <details className="emr-clerking-tab-data-item">
                    <summary>Visual Hallucination</summary>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Flashing lights</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Amaurosis</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Visual illusions</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Visual hallucinations</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Blinking</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Ocular movements</p>
                      </div>
                    </div>
                  </details>
                  <details className="emr-clerking-tab-data-item">
                    <summary>Dysaethesia</summary>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Primary sensations e.g. tingling</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Unpleasant sensation e.g. heat</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Negative sensation e.g. absent limb</p>
                      </div>
                    </div>
                  </details>
                  <div className="emr-clerking-tab-data-item">
                    <h4>Abdominal</h4>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Yes</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">No</p>
                      </div>
                    </div>
                  </div>
                  <details className="emr-clerking-tab-data-item">
                    <summary>Psychic</summary>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Mood symptoms e.g. fear, elation</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Experiential symptoms e.g. deja vu, jamais vu, out of body
                          experience</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Olfactory hallucinations or illusion</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Behavioural abnormalities e.g. emotional or mood changes</p>
                      </div>
                    </div>
                  </details>
                  <details className="emr-clerking-tab-data-item">
                    <summary>Auditory</summary>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Simple hallucinations e.g. buzz, noise</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Vertiginous symptoms</p>
                      </div>
                    </div>
                  </details>
                  <details className="emr-clerking-tab-data-item">
                    <summary>Autonomic</summary>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Palpitations</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Sweating</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Tachycardia</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Flushing</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Vomiting</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Urinary urge</p>
                      </div>
                    </div>
                  </details>
                </div>
              </details>
              <details className="emr-clerking-tab-data-item">
                <summary htmlFor="hypertension">Consciousness</summary>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <h4 className="emr-card-headers">Alteration in Consciousness</h4>
                    <div className="emr-clerking-tab-data-items">
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="consciousnessduration">Duration</label>
                        <input type="number" name="consciousnessduration" id="consciousnessduration"></input>
                      </div>
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="consciousnessdescription">Describe</label>
                        <input type="text" name="consciousnessdescription" id="consciousnessdescription"></input>
                      </div>
                    </div>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <h4 className="emr-card-headers">Blank Spell</h4>
                    <div className="emr-clerking-tab-data-items">
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="blankspellduration">Duration</label>
                        <input type="number" name="blankspellduration" id="blankspellduration"></input>
                      </div>
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="blankspelldescription">Describe</label>
                        <input type="text" name="blankspelldescription" id="blankspelldescription"></input>
                      </div>
                    </div>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <h4 className="emr-card-headers">Amnesia of event</h4>
                    <div className="emr-clerking-tab-data-items">
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="amnesiaduration">Duration</label>
                        <input type="number" name="amnesiaduration" id="amnesiaduration"></input>
                      </div>
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="amnesiadescription">Describe</label>
                        <input type="text" name="amnesiadescription" id="amnesiadescription"></input>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              <details className="emr-clerking-tab-data-item">
                <summary>Motor</summary>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Left</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Right</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Both</p>
                      </div>
                    </div>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="clonusdescription">Clonus (describe)</label>
                    <input type="text" name="clonusdescription" id="clonusdescription"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <h4 className="emr-card-headers">Tonic (describe)</h4>
                    <div className="emr-clerking-tab-data-items">
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="tonicdescription">Describe</label>
                        <input type="text" name="tonicdescription" id="tonicdescription"></input>
                      </div>
                      <div className="emr-clerking-tab-data-item">
                        <div className="emr-selectable-items-group">
                          <div className="emr-selectable-item">
                            <p className="emr-selectable-item-text">Version</p>
                          </div>
                          <div className="emr-selectable-item">
                            <p className="emr-selectable-item-text">Fencing (M2e) position</p>
                          </div>
                          <div className="emr-selectable-item">
                            <p className="emr-selectable-item-text">Figure four position</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="myoclonusdescription">Myoclonus (describe)</label>
                    <input type="text" name="myoclonusdescription" id="myoclonusdescription"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="versiondescription">Version (describe)</label>
                    <input type="text" name="versiondescription" id="versiondescription"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="atonicdescription">Atonic (describe)</label>
                    <input type="text" name="atonicdescription" id="atonicdescription"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="hypermotordescription">Hyper-motor (describe)</label>
                    <input type="text" name="hypermotordescription" id="hypermotordescription"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="akineticdescription">Akinetic (describe)</label>
                    <input type="text" name="akineticdescription" id="akineticdescription"></input>
                  </div>
                  <details className="emr-clerking-tab-data-item">
                    <summary>Automatism (smack lips, fidget, behave in an unusual way)</summary>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Oro-alimentary</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Gestural</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Manipulative e.g. picking, fumbling</p>
                      </div>
                    </div>
                    <div className="emr-clerking-tab-data-items">
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="automatismduration">Duration</label>
                        <input type="number" name="automatismduration" id="automatismduration"></input>
                      </div>
                      <div className="emr-clerking-tab-data-item">
                        <label htmlFor="automatismdescription">Describe</label>
                        <input type="text" name="automatismdescription" id="automatismdescription"></input>
                      </div>
                    </div>
                  </details>
                </div>
              </details>
              <details className="emr-clerking-tab-data-item">
                <summary>Others</summary>
                <div className="emr-selectable-items-group">
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Aphasia</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Dystonic posturing</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Ictal speech</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Urinary urge</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Speech arrest</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Forced thinking</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Laryngeal symptoms</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Sphincteric dysfunction</p>
                  </div>
                </div>
              </details>
              <details className="emr-clerking-tab-data-item">
                <summary>Post-ictal manifestation</summary>
                <div className="emr-selectable-items-group">
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Confusion</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Sleep</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Headache</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Motor deficit</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Aphasia</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Nose wipe</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Fatigue</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Sphincteric dysfunction</p>
                  </div>
                </div>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="postictalduration">Duration of post-ictal phase</label>
                    <input type="number" name="postictalduration" id="postictalduration"></input>
                  </div>
                </div>
              </details>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="symptomspermonth">How often do these symptoms occur per month in the last year?</label>
                <input type="number" name="symptomspermonth" id="symptomspermonth"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="seizurespermonth">How many seizures have you experienced in the last month?</label>
                <input type="number" name="seizurespermonth" id="seizurespermonth"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="ageatfirstseizure">Age at first seizure</label>
                <input type="number" name="ageatfirstseizure" id="ageatfirstseizure"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="ageatfirstdiagnosis">Age at first diagnosis</label>
                <input type="number" name="ageatfirstdiagnosis" id="ageatfirstdiagnosis"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="dateoflastseizure">When was the last seizure?</label>
                <input type="number" name="dateoflastseizure" id="dateoflastseizure"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="timeofday">Do these symptoms occur at a particular time of day?</label>
                <input type="number" name="timeofday" id="timeofday"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="moreatnightorday">Does your attack occur more at night or day? From sleep</label>
                <input type="number" name="moreatnightorday" id="moreatnightorday"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Do you have incomplete seizure manifestation i.e. aura alone?</h4>
                <div className="emr-selectable-items-group">
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Yes</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">No</p>
                  </div>
                </div>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="notes">Notes</label>
                <textarea name="notes" id="notes" cols="30" rows="10" placeholder="write here..."></textarea>
              </div>
            </div>
          </div>
    );
  }
}