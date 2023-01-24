import React from "react";
import './history.css';

export default class Selectable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: [0, 0, 0, 0, 0, 0, 0],
      tabState: this.tabState
    }
  }

  componentDidMount() {
    // this.tabState = [[], [], [], [], [], [], []].map((item) => {
    //   item = this.props.items.slice().fill("");
    //   item[0] = "selected";
    //   return item;
    // });

    // this.setState({
    //   tabState: this.tabState
    // });
  }

  handleSelection = () => {
    if (this.state.tabState[this.props.index].length === 0) {
      this.stateFromItems = this.props.items.slice().fill("");
      // let selectedIndex = this.state.tabIndex[this.props.index];
      this.stateFromItems[0] = "selected";
      this.tabState[this.props.index] = this.stateFromItems;
      // this.tabState = this.state.tabState;
      this.setState({
        tabState: this.tabState
      });
    }
  }

  updateTabState = (index) => {
    let tabState = this.state.tabState.slice();
    let stateFromItems = tabState[this.props.index];
    stateFromItems = stateFromItems.fill("");
    stateFromItems[index] = "selected";
    tabState[this.props.index] = stateFromItems;

    let tabIndex = this.state.tabIndex.slice();
    tabIndex[this.props.index] = index;

    this.setState({
      tabState: tabState,
      tabIndex: tabIndex
    });
  }

  render() {
    // console.log("this.props.patient => ", this.props.patient);
    //Tabbed components under History

    return (
      <div className="container-fluid">
        <div className="row g-0">
          <div className={`${this.props.isDrawerOpen ? 'offset-xl-3 offset-lg-4 col-xl-6' : 
          ''} col-lg-8 emr-app-main`}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}