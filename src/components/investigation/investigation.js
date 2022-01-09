import React from "react";

export default class InvestigationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedImgSrc: "",
      uploadedImgName: ""
    }

    this.emrUploadFile = React.createRef();
  }

  onFileReceived = (event, arg) => {
    console.log("event.target.value => ", event.target.files[0]);
    console.log("Size in bytes => ", event.target.files[0].size, "bytes");
    // console.log("Input File Ref => ", URL.createObjectURL(event.target.files[0]));

    this.setState({
      uploadedImgSrc: URL.createObjectURL(event.target.files[0]),
      uploadedImgName: event.target.files[0].name
    })
  }

  render() {
    return (
      <div className="emr-investigation">
        {this.props.children}
        {/* <label className="emr-selectable-item text-center w-100"
          htmlFor="emr-upload">+ Upload</label> */}
        {/* <input name="emr-upload" id="emr-upload" type={'file'} accept=".png, .jpg, .jpeg"
          onChange={this.onFileReceived} ref={this.emrUploadFile}
          className="d-none"></input> */}
        {
          this.state.uploadedImgSrc
            ?
            <img src={this.state.uploadedImgSrc} alt=""></img>
            :
            null
        }
      </div>
    )
  }
}