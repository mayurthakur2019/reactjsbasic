import React, { Component } from "react";

export default class Mounting2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jack",
    };
    console.log("Mounting2 phase constructor called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Mounting2 phase getDerivedStateFromProps called");
    console.log(state);
    console.log(props);
    return null;
  }
  componentDidMount() {
    console.log("Mounting2 phase componentDidMount called");
  }
  render() {
    console.log("Mounting2 phase render called");
    return (
      <>
        <div>MountingPhaseBasic child component</div>
        <h4>{this.state.name}</h4>
        <h4>{this.props.city}</h4>
      </>
    );
  }
}
