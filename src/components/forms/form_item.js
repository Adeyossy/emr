import React from 'react';

export default class FormItemComponent extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="emr-form-item">
              <p className="emr-form-item-description">
                {this.props.desc}
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="emr-form-item-score">
              <input type="number" name={"interpolation"} min={this.props.min}
                max={this.props.max} placeholder="#" value={this.props.score}></input>
            </div>
          </div>
        </div>
      </div>
    )
  }
}