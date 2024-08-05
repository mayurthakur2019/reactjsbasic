import React, { Component } from "react";

export default class MountingUpdatingExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Max",
    };
    console.log("Constructor Called");
  }
  updateState = () => {
    console.log("button clicked");
    this.setState({ name: "Mayur" });
  };
  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedStateFromProps called");
    console.log(state);
    console.log(props);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(" shouldComponentUpdate called");
    console.log(nextProps);
    console.log(nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" getSnapshotBeforeUpdate called");
    console.log(prevProps);
    console.log(prevState);
    return "hello";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Updating phase componentDidUpdate called");
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
  }
  render() {
    console.log("Render Called");
    return (
      <>
        <div>MountingUpdatingExample</div>
        <h5>{this.state.name}</h5>
        <button onClick={this.updateState}>Update</button>
      </>
    );
  }
  componentDidMount() {
    console.log("Mounting phase componentDidMount called");
  }
}
