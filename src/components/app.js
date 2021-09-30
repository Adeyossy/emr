import React from "react";
import "./app.css";
import NavComponent from "./nav";
import MainComponent from "./main";
import HistoryComponent from "./history";

export default class AppComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      navState: [ "", "", "", "", "", "", "" ], //history, Epilepsy form, other forms, examination, investigations, assessment, treatment
      navIndex: null
    }
  }

  updateNavState = (index) => {
    let navState = this.state.navState;
    navState = navState.fill("");
    navState[index] = "selected";
    this.setState({
      navState: navState,
      navIndex: index
    });
  }

  deselectAnyActiveToolbar = () => {
    let navState = this.state.navState;
    navState = navState.fill("");
    this.setState({
      navState: navState,
      navIndex: null
    });
  }

  render() {
    return (
      <div className="subroot">
        <nav>
          <NavComponent navAppBarState={ this.state.navState } changeState={this.updateNavState} />
        </nav>
        <MainComponent navIndex={ this.state.navIndex } />
      </div>
    )
  }
}