import React from "react";

export default class PMHComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Past Medical History</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofhospitalizations">Number of Previous Hospitalizations</label>
            <input type="number" name="numberofhospitalizations" id="numberofhospitalizations" placeholder="e.g 2"
              className="mb-4" required></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Hospitalization 1</h4>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="hospitalizationdiagnosis1">What was the diagnosis?</label>
                    <input type="text" name="hospitalizationdiagnosis1" id="hospitalizationdiagnosis1"
                      placeholder="e.g severe malaria"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="hospitalizationduration1">Length of hospital stay (in days)</label>
                    <input type="number" name="hospitalizationduration1" id="hospitalizationduration1"
                      placeholder="e.g 2" required></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="hospitalizationhospital1">Health Facility</label>
                    <input type="text" name="hospitalizationhospital1" id="hospitalizationhospital1"
                      placeholder="e.g UCH"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="hospitalizationtreatment1">Treatment received</label>
                    <input type="number" name="hospitalizationtreatment1" id="hospitalizationtreatment1"
                      placeholder="e.g IV fluids"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="hospitalizationrecovery1">Recovery after treatment</label>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Complete Recovery</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Partial Recovery</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">No Recovery</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Other</p>
                      </div>
                    </div>
                    <input type="number" name="hospitalizationrecovery1" id="hospitalizationrecovery1"
                      placeholder="e.g IV fluids"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofsurgeries">Number of Previous Surgeries</label>
            <input type="number" name="numberofsurgeries" id="numberofsurgeries" className="mb-4"></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Surgery 1</h4>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="surgerydiagnosis1">What was the diagnosis?</label>
                    <input type="text" name="surgerydiagnosis1" id="surgerydiagnosis1"
                      placeholder="e.g appendicitis"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="surgeryduration1">Length of hospital stay (in days)</label>
                    <input type="number" name="surgeryduration1" id="surgeryduration1" placeholder="e.g 2"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="surgeryhospital1">Health Facility</label>
                    <input type="text" name="surgeryhospital1" id="surgeryhospital1" placeholder="e.g UCH"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="surgerytreatment1">Treatment received</label>
                    <input type="number" name="surgerytreatment1" id="surgerytreatment1"
                      placeholder="e.g appendectomy"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="surgeryrecovery1">Recovery after treatment</label>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Complete Recovery</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Partial Recovery</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">No Recovery</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Other</p>
                      </div>
                    </div>
                    <input type="number" name="surgeryrecovery1" id="surgeryrecovery1"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberoftransfusions">Number of Previous Blood Transfusions</label>
            <input type="number" name="numberoftransfusions" id="numberoftransfusions" className="mb-4"></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <h4 className="emr-card-headers">Blood Transfusion 1</h4>
                <div className="emr-clerking-tab-data-items">
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="transfusionvolume1">How many pints (500ml) of blood?</label>
                    <input type="number" name="transfusionvolume1" id="transfusionvolume1"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="transfusiondonor1">Who donated blood?</label>
                    <input type="text" name="transfusiondonor1" id="transfusiondonor1"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="transfusionfacility1">Health Facility</label>
                    <input type="text" name="transfusionfacility1" id="transfusionfacility1" placeholder="e.g UCH"></input>
                  </div>
                  <div className="emr-clerking-tab-data-item">
                    <label htmlFor="transfusionreaction1">Transfusion Reaction</label>
                    <div className="emr-selectable-items-group">
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">None</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Fever | Hyperthermia</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Required ICU</p>
                      </div>
                      <div className="emr-selectable-item">
                        <p className="emr-selectable-item-text">Other</p>
                      </div>
                    </div>
                    <input type="number" name="transfusionreaction1" id="transfusionreaction1"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="hypertension">Hypertension</label>
            {/* Next list level */}
            <div className="emr-clerking-tab-data-items">
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="hypertensionyeardiagnosed">Year diagnosed</label>
                <input type="number" name="hypertensionyeardiagnosed" id="hypertensionyeardiagnosed"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="yearslivedwithhypertension">Years lived with hypertension</label>
                <input type="number" name="yearslivedwithhypertension" id="yearslivedwithhypertension"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="hypertensiontreatment">Treatment</label>
                <input type="text" name="hypertensiontreatment" id="hypertensiontreatment"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="hypertensioncompliance">Compliance</label>
                <div className="emr-selectable-items-group">
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">None</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Compliant</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Other</p>
                  </div>
                </div>
                <input type="number" name="hypertensioncompliance" id="hypertensioncompliance"
                  placeholder="e.g appendectomy"></input>
              </div>
              <div className="emr-clerking-tab-data-item">
                <label htmlFor="hypertensionresponse">Response to treatment</label>
                <div className="emr-selectable-items-group">
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Not responsive</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Responsive</p>
                  </div>
                  <div className="emr-selectable-item">
                    <p className="emr-selectable-item-text">Other</p>
                  </div>
                </div>
                <input type="text" name="hypertensionresponse" id="hypertensionresponse"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="emr-clerking-tab-data-item">
          <h4 className="emr-card-headers">Blood Group and Rhesus</h4>
          <div className="emr-clerking-tab-data-items">
            <div className="emr-clerking-tab-data-item">
              <label htmlFor="bloodgroup">Blood Group</label>
              <div className="emr-selectable-items-group">
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">O</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">A</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">B</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">AB</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">Unknown</p>
                </div>
              </div>
              <input type="text" name="bloodgroup" id="bloodgroup" placeholder="" required></input>
            </div>
            <div className="emr-clerking-tab-data-item">
              <label htmlFor="rhesus">Rhesus</label>
              <div className="emr-selectable-items-group">
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">Positive</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">Negative</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">Indeterminate</p>
                </div>
                <div className="emr-selectable-item">
                  <p className="emr-selectable-item-text">Unknown</p>
                </div>
              </div>
              <input type="text" name="rhesus" id="rhesus" placeholder=""></input>
            </div>
          </div>
        </div>
        <div className="emr-clerking-tab-data-item">
          <label htmlFor="genotype">Genotype</label>
          <div className="emr-selectable-items-group">
            <div className="emr-selectable-item">
              <p className="emr-selectable-item-text">AA</p>
            </div>
            <div className="emr-selectable-item">
              <p className="emr-selectable-item-text">AS</p>
            </div>
            <div className="emr-selectable-item">
              <p className="emr-selectable-item-text">AC</p>
            </div>
            <div className="emr-selectable-item">
              <p className="emr-selectable-item-text">SC</p>
            </div>
            <div className="emr-selectable-item">
              <p className="emr-selectable-item-text">SS</p>
            </div>
            <div className="emr-selectable-item">
              <p className="emr-selectable-item-text">Other</p>
            </div>
          </div>
          <input type="text" name="genotype" id="genotype"></input>
        </div>
        <div className="emr-clerking-tab-data-item">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" cols="30" rows="10" placeholder="write here..."></textarea>
        </div>
      </div>
    );
  }
}