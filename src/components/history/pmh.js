import React from "react";
import TransfusionComponent from "./blood_transfusion";
import HospitalizationComponent from "./hospitalization";
import SurgeryComponent from "./surgeries";

export default class PMHComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitalizationInt: 0,
      surgeryInt: 0,
      bloodTransfusionInt: 0
    }
  }

  updateInts = (event) => {
    if(event.target.name === "numberofhospitalizations"){
      this.setState({
        hospitalizationInt: event.target.value
      });
    }

    if(event.target.name === "numberofsurgeries"){
      this.setState({
        surgeryInt: event.target.value
      });
    }

    if(event.target.name === "numberoftransfusions"){
      this.setState({
        bloodTransfusionInt: event.target.value
      });
    }
  }

  render() {
    const hospitalizationChildren = [];
    for(let i = 0; i < this.state.hospitalizationInt; i++){
      hospitalizationChildren.push(
        <HospitalizationComponent key={String(i)} index={i + 1} />
      );
    }

    const surgeryChildren = [];
    for(let i = 0; i < this.state.surgeryInt; i++){
      surgeryChildren.push(
        <SurgeryComponent key={String(i)} index={i + 1} />
      );
    }

    const transfusionChildren = [];
    for(let i = 0; i < this.state.bloodTransfusionInt; i++){
      transfusionChildren.push(
        <TransfusionComponent key={String(i)} index={i + 1} />
      );
    }

    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Past Medical History</h4>
        <div className="emr-clerking-tab-data-items">
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofhospitalizations">Number of Previous Hospitalizations</label>
            <input type="number" name="numberofhospitalizations" id="numberofhospitalizations" placeholder="e.g 2"
              className="mb-4" value={this.state.hospitalizationInt} onChange={this.updateInts} required></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {hospitalizationChildren}
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberofsurgeries">Number of Previous Surgeries</label>
            <input type="number" name="numberofsurgeries" id="numberofsurgeries" className="mb-4"
              value={this.state.surgeryInt} onChange={this.updateInts}></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {surgeryChildren}
            </div>
          </div>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="numberoftransfusions">Number of Previous Blood Transfusions</label>
            <input type="number" name="numberoftransfusions" id="numberoftransfusions" className="mb-4"
              value={this.state.bloodTransfusionInt} onChange={this.updateInts}></input>
            {/* <!-- Next list level --> */}
            <div className="emr-clerking-tab-data-items">
              {transfusionChildren}
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