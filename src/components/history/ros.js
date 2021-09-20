import React from "react";

export default class RoSComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="emr-clerking-tab-data emr-card m-0">
        <h4 className="emr-card-headers">Review of Systems</h4>
        <div className="emr-clerking-tab-data-items">
          <details className="emr-clerking-tab-data-item">
            <summary htmlFor="cardiovascular">Cardiorespiratory</summary>
            <div className="emr-selectable-items-group">
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Cough</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Dyspnoea</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Orthopnoea</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">PND</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Chest Pain</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Haemoptysis</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Leg swelling</p>
              </div>
              <div className="emr-selectable-item selected">
                <p className="emr-selectable-item-text">Palpitations</p>
              </div>
              <div className="emr-selectable-item selected">
                <p className="emr-selectable-item-text">Cyanosis</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Other</p>
              </div>
            </div>
            <input type="text" name="cardiovascular" id="cardiovascular" placeholder="" required></input>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary htmlFor="gastrointestinal">Gastrointestinal</summary>
            <div className="emr-selectable-items-group">
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Abd.pain</p>
              </div>
              <div className="emr-selectable-item selected">
                <p className="emr-selectable-item-text">Abd. swelling</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Anorexia</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Nausea</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Diarrhoea</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Constipation</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Vomiting</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Jaundice</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Haematemesis</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Haematochezia</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Melena</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Other</p>
              </div>
            </div>
            <input type="text" name="gastrointestinal" id="gastrointestinal" required></input>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary htmlFor="genitourinary">Genitourinary</summary>
            <div className="emr-selectable-items-group">
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Dysuria</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Frequency</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Urgency</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Dribbling</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Hesitancy</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Intermittency</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Haematuria</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Incontinence</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Weak stream</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Discharge</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Other</p>
              </div>
            </div>
            <input type="text" name="genitourinary" id="genitourinary" required></input>
          </details>
          <details className="emr-clerking-tab-data-item">
            <summary htmlFor="endocrine">Endocrine</summary>
            <div className="emr-selectable-items-group">
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Polyuria</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Polydipsia</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Polyphagia</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Weight loss</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Recurrent Infections</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Heat intolerance</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Cold intolerance</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Diarrhoea</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Snoring</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Palpitations</p>
              </div>
              <div className="emr-selectable-item">
                <p className="emr-selectable-item-text">Other</p>
              </div>
            </div>
            <input type="text" name="endocrine" id="endocrine" required></input>
          </details>
          <div className="emr-clerking-tab-data-item">
            <label htmlFor="address">Descriptive Notes</label>
            <textarea name="address" id="address" cols="30" rows="10" placeholder="write here..."></textarea>
          </div>
        </div>
      </div>
    )
  }
}