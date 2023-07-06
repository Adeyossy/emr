import React from "react";
import { PatientContext } from "../../models/patient_context";
import { deleteFromStorage, getCurrentUser } from "../../modules/auth";

export default class InvestigationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploads: {}
    }

    this.emrUploadFile = React.createRef();
    this.uploadDiv = React.createRef();
  }

  static contextType = PatientContext;

  onFileReceived = (event, arg) => {
    // console.log("event.target.value => ", event.target.files[0]);
    // console.log("Size in bytes => ", event.target.files[0].size, "bytes");
    // console.log("Input File Ref => ", URL.createObjectURL(event.target.files[0]));

    const newUploadedUrl = URL.createObjectURL(event.target.files[0]);

    const currentUploadsItem = {
      url: newUploadedUrl,
      name: event.target.files[0].name,
      title: "",
      description: "",
      date: "",
      id: Date.now(),
      lastModified: event.target.files[0].lastModified,
      file: event.target.files[0]
    }

    this.props.createUploadItem(this.props.modality, currentUploadsItem);
  }

  onUploadItemChange = (id, event) => {
    let index = this.context[this.context.last_viewed][this.props.modality].uploads
      .findIndex(upload => upload.id === id);
    this.props.updateAnyObject(event.target.name, event.target.value,
      [this.context.last_viewed, this.props.modality, 'uploads'], index);
  }

  uploadResult = (uploadID) => {
    const uploads = this.state.uploads;

    uploads[uploadID] = "0%"

    this.setState({
      uploads: uploads
    });

    this.props.beginUpload(this.props.modality, uploadID,
      this.updateUploadProgress.bind(this, uploadID));
  }

  updateUploadProgress = (uploadID, progress) => {
    const uploads = this.state.uploads;
    uploads[uploadID] = progress;

    this.setState({
      uploads: uploads
    });
  }

  componentWillUnmount() {
// console.log("investigations will unmount");
  }

  render() {
    const investigation = this.context[this.context.last_viewed][this.props.modality];

    return (
      <div className="emr-investigation">
        {
          investigation.hasOwnProperty("uploads") && investigation.uploads.length > 0 ?
            investigation.uploads.filter(upload => !upload.downloadURL)
              .sort((u, v) => u.id - v.id).map((item, index) =>
                <div className="emr-clerking-tab-data mt-3 ml-0 mr-0" key={item.id.toString()}
                  ref={this.uploadDiv}>
                  {
                    this.state.uploads.hasOwnProperty(item.id.toString()) ?
                      <>
                        <h4 className="emr-card-headers">Uploading...(
                          {100 * Math.round(Number(this.state.uploads[item.id]))}%)</h4>
                        <div className="emr-clerking-tab-data-items">
                          <div className="emr-clerking-tab-data-item">
                            <div className="bg-primary p-2 w-100 emr-upload-progress"
                              style={{ transform: `scaleX(${this.state.uploads[item.id]})` }} />
                          </div>
                        </div>
                      </> :
                      <>
                        <h4 className="emr-card-headers">Preview</h4>
                        <div className="emr-clerking-tab-data-items">
                          <div className="emr-clerking-tab-data-item investigation-preview" key={index.toString()}
                            style={{ background: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.7)), url(${item.url}) center/cover` }}>
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label className="emr-card-headers" htmlFor="investigationtitle">Title</label>
                                  <input type="text" name="title" id="investigationtitle"
                                    placeholder="type here" onChange={this.onUploadItemChange
                                      .bind(this, item.id)} value={item.title}></input>
                                  <br />
                                  <label className="emr-card-headers mt-3"
                                    htmlFor="investigationdescription">Description</label>
                                  <textarea cols="5" rows="5" name="description"
                                    placeholder="description goes here" value={item.description}
                                    onChange={this.onUploadItemChange.bind(this, item.id)}></textarea>
                                </div>
                                <div className="col-lg-6">
                                  <img src={item.url} alt="" className="img-fluid"></img>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-9 col-lg-11">
                                  <button className="emr-button" onClick={this.uploadResult
                                    .bind(this, item.id)}>Upload</button>
                                </div>
                                <div className="col-3 col-lg-1 m-0 p-0">
                                  <button className="emr-button" onClick={this.props.deleteUpload
                                    .bind(this, this.props.modality, item.id)}>
                                    <i className="bi bi-trash-fill"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                  }
                </div>
              ) : null
        }
        {
          investigation.hasOwnProperty("uploads") && investigation.uploads.length > 0 ?
            <div className="emr-clerking-tab-data mt-3 ml-0 mr-0">
              <h4 className="emr-card-headers">Uploads</h4>
              <div className="emr-clerking-tab-data-items">
                {investigation.uploads.filter(upload => upload.downloadURL).map((item, index) =>
                  <div className="emr-clerking-tab-data-item filled" key={item.id.toString()}
                    style={{ background: `linear-gradient(to right, rgba(255,255,255,0.84), rgba(255,255,255,1)), url(${item.downloadURL}) center/cover` }}>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-12">
                          <label className="emr-card-headers" htmlFor="investigationtitle">Title</label>
                          <input type="text" name="title" id="investigationtitle"
                            placeholder="type here" onChange={this.onUploadItemChange
                              .bind(this, item.id)} value={item.title}></input>
                          <br />
                        </div>
                        <div className="col-lg-6">
                          <label className="emr-card-headers mt-3"
                            htmlFor="investigationdescription">Description</label>
                          <textarea cols="5" rows="5" name="description"
                            placeholder="description goes here" value={item.description}
                            onChange={this.onUploadItemChange.bind(this, item.id)}></textarea>
                        </div>
                        <div className="col-lg-6 p-4">
                          <img src={item.downloadURL} alt={item.name} className="img-fluid"></img>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-9 col-lg-11">
                          {/* <button className="emr-button" onClick={this.uploadResult
                            .bind(this, item.id)}>Upload</button> */}
                        </div>
                        <div className="col-3 col-lg-1 m-0 p-0">
                          <button className="emr-button emr-clickable"
                            onClick={this.props.showDialog.bind(this, "Delete Investigation",
                              "This investigation will be deleted",
                              getCurrentUser.bind(Object.create(null),
                                deleteFromStorage.bind(this, this.props.modality.concat('/', item.name),
                                  this.props.deleteUpload.bind(this, this.props.modality, item.id))))}>
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                }
              </div>
            </div>
            : null
        }
        {/* {
          this.state.uploadedImgSrc
            ?
            <img src={this.state.uploadedImgSrc} alt=""></img>
            :
            null
        } */}
        {this.props.children}
        <label className="emr-selectable-item text-center w-100"
          htmlFor="emr-upload">+ Select File</label>
        <input name="emr-upload" id="emr-upload" type={'file'} accept=".png, .jpg, .jpeg"
          onChange={this.onFileReceived} ref={this.emrUploadFile}
          className="d-none"></input>
      </div>
    )
  }
}