import React from "react";
import './nav.css';
import { navTabs } from "../models/nav";

export default class BottomNavComponent extends React.Component {
  render() {
    return (
      <div className="container-fluid emr-bottom-nav d-lg-none">
        <div className="row g-0 align-items-center emr-bottom-nav-row flex-nowrap">
          {
            navTabs.map((item, index) =>
              <div className="col-3 emr-app-toolbar d-flex justify-content-center" key={item[0]}>
                <div className={`emr-icon-bg ${this.props.navIndex === index ? "selected" : ""}`}
                  key={index} onClick={this.props.changeState.bind(this, index)}>
                  <i className={`bi ${item[1]} emr-icons emr-center-icon`}></i>
                  <i className="emr-icon-tooltip">{item[0]}</i>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}