import React from "react";

export default class RightSideBarComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container-fluid">
      <div className="row g-0">
        <div className="offset-lg-9 col-lg-3 emr-sidebar emr-sidebar-r">
          <div className="emr-right-sidebar emr-column">
            <div className="emr-quick-info-card emr-right-sidebar-item">
              <div className="emr-icon-bg emr-icon-bg-dark">
                <i className="bi bi-lightbulb-fill emr-icons emr-center-icon"></i>
              </div>
              <p className="emr-quick-info-card-title">Diagnosis</p>
              <p className="emr-quick-info-card-details">Recurrent seizures secondary to falcine meningioma</p>
            </div>
            <div className="emr-right-sidebar-item">
              <h6 className="emr-card-headers emr-right-sidebar-item-header">Notes</h6>
              <div className="emr-right-sidebar-item-content">
                <textarea name="consultation_notes" id="consultation" className="emr-right-sidebar-item-textbox" defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.">
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}