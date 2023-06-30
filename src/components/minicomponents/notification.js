import React from "react";

export default class NotificationComponent extends React.Component {
  componentDidUpdate (prevProps) {
    if(this.props.showNotification){
      setTimeout(this.props.dismissNotification, 3000);
    }
  }
  render() {
    return (
      <div className={`emr-notification-box ${this.props.showNotification ? "show" : ""}`}>
        <div className="emr-quick-button emr-quick-button-notification emr-quick-button-dark-bg">
          <div className="emr-icon-bg">
            <i className="bi bi-info-lg emr-icons emr-center-icon"></i>
          </div>
          <div className="emr-quick-button-text">
            <h6 className="emr-headers emr-card-headers">{this.props.info}</h6>
          </div>
        </div>
      </div>
    )
  }
}