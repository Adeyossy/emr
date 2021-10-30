import React from 'react';
import { signUserIn } from '../modules/auth';
import './auth.css';

export default class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      authTriggered: false,
      authState: false
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
    })
    signUserIn(this.state.username, this.state.password,
      this.onUserSignIn);
  }

  onUserSignIn = (state) => {
    if (state) {
      console.log("sign in successful");
    } else {
      console.log("not signed in");
    }

    this.setState({
      authState: true
    });
  }

  render() {
    return (
      <>
        <div className="emr">
          <nav>
            <div className="emr-nav-brand text-white">
              {/* <img src="" alt="" className="emr-nav-brand-icon"></img> */}
              <i class="bi bi-award emr-icons"></i>
              <h6 className="emr-nav-brand-text p-1 d-inline-block">EMR</h6>
            </div>
          </nav>
          <main>
            <div className="container-fluid">
              <div className="row">
                <div className="offset-lg-8 col-lg-4">
                  <div className="emr-centered emr-auth-column">
                    <div className="emr-auth-card emr-rounded-edges emr-default-shadow">
                      <h6 className="emr-headers emr-auth-header">LOGIN</h6>
                      <div className="emr-username-input-group">
                        <div className="emr-username emr-input-label">
                          <i className="emr-icons emr-username-icon bi bi-person-fill"></i>
                          <label for="username">Username</label>
                        </div>
                        <input name="username" type="email" value={this.state.username}
                          placeholder="e.g. johndoe@email.com" id="username"
                          onChange={this.onItemChange} required></input>
                      </div>
                      <div className="emr-password-input-group">
                        <div className="emr-password emr-input-label">
                          <i className="emr-icons emr-password-icon bi bi-lock-fill"></i>
                          <label for="password">Password</label>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="emr-top-notification">
          <div className="emr-icon-background">
            <i className="emr-icons emr-icons-dark"></i>
          </div>
        </div>
      </>
    )
  }
}