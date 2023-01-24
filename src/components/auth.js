import React from 'react';
import { signUserIn, updateUserProfile, signUserOut } from '../modules/auth';
import { closeDB } from "../modules/db";
import './auth.css';

export default class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      displayname: this.props.user ? this.props.user.displayName : "",
      authTriggered: false,
      authState: false
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.user && prevProps.user !== this.props.user) {
      this.setState({
        displayname: this.props.user.displayName
      });
    }
  }

  onItemChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  signInButtonClicked = () => {
    this.setState({
      authTriggered: true
    });
    signUserIn(this.state.username, this.state.password,
      this.onUserSignIn);
  }

  onUserSignIn = (user) => {
    if (user) {
      console.log("sign in successful");
      if (user.displayName) {
        this.setState({
          displayname: user.displayName
        });

        // this.props.continueToApp();
      }
    } else {
      console.log("not signed in");
    }

    //autState indicates if authentication has returned a response irrespective of outcome
    this.setState({
      authState: true
    });
  }

  onSignOut = () => {
    closeDB(signUserOut.bind(this, this.props.onUserSignOut));
  }

  continue = () => {
    if (this.props.user && this.state.displayname !== this.props.user.displayName) {
      updateUserProfile(this.state.displayname, this.props.continueToApp)
    } else {
      this.props.continueToApp();
    }
  }

  render() {
    return (
      <>
        <div className="emr">
          <nav>
            <div className="emr-nav-brand">
              {/* <img src="" alt="" className="emr-nav-brand-icon"></img> */}
              <i className="bi bi-award emr-icons"></i>
              <h6 className="emr-nav-brand-text p-1 d-inline">EMR</h6>
            </div>
          </nav>
          <main>
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="offset-xl-8 col-xl-4 offset-lg-3 col-lg-6 offset-md-2 col-md-8">
                  <div className="emr-centered emr-auth-column">
                    {
                      !this.props.user ? this.props.user === null ?
                        <div className="emr-auth-card emr-rounded-edges emr-default-shadow">
                          {/* <div className="emr-auth-card-details"></div> */}
                          <h6 className="emr-headers emr-auth-header">Login</h6>
                          <div className="emr-username-input-group">
                            <div className="emr-username emr-input-label">
                              <i className="emr-icons emr-username-icon bi bi-person-fill"></i>
                              <label htmlFor="username">Username</label>
                            </div>
                            <input name="username" type="email" value={this.state.username}
                              placeholder="e.g. johndoe@email.com" id="username"
                              onChange={this.onItemChange} required></input>
                          </div>
                          <div className="emr-password-input-group">
                            <div className="emr-password emr-input-label">
                              <i className="emr-icons emr-password-icon bi bi-lock-fill"></i>
                              <label htmlFor="password">Password</label>
                            </div>
                            <input type="password" name="password" placeholder="password"
                              id="password" value={this.state.password} required
                              onChange={this.onItemChange}></input>
                          </div>
                          <button className={`emr-button emr-auth-button 
                        ${this.state.authTriggered && !this.state.authState ? "triggered" : ""}`}
                            onClick={this.signInButtonClicked} disabled={this.state.authTriggered}>
                            <i className="emr-accent-icon bi bi-cursor-fill"></i>
                            Login
                          </button>
                        </div> :
                        <div className="emr-auth-card emr-rounded-edges emr-default-shadow">
                          <div className="emr-auth-check">
                            <div className="emr-auth-loading">
                              <div className="emr-auth-loading-spinner"></div>
                              <div className='emr-auth-loading-cover'></div>
                            </div>
                            <p className='w-100 text-center mt-3'>Checking login status</p>
                          </div>
                        </div> :
                        <div className="emr-auth-card emr-rounded-edges emr-default-shadow">
                          {/* <div className="emr-auth-card-details"></div> */}
                          <h6 className="emr-headers emr-auth-header">Welcome</h6>
                          <div className="emr-username-input-group">
                            <div className="emr-username emr-input-label">
                              <i className="emr-icons emr-username-icon bi bi-person-fill"></i>
                              <label htmlFor="displayname">Display Name</label>
                            </div>
                            <input name="displayname" type="text" value={this.state.displayname}
                              placeholder="" id="displayname" pattern={/[a-z][A-Z]/}
                              onChange={this.onItemChange} required></input>
                          </div>
                          <button className={`emr-button emr-auth-button`}
                            onClick={this.continue}>
                            Continue to App
                            <i className="emr-accent-icon bi bi-caret-right-fill"></i>
                          </button>
                          <a><p className='text-center mb-4 emr-different-user'
                          onClick={this.onSignOut}>Not {this.state.displayname}? Sign in as a different user</p></a>
                        </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* <div className="emr-top-notification">
          <div className="emr-icon-background">
            <i className="emr-icons emr-icons-dark"></i>
          </div>
        </div> */}
      </>
    )
  }
}