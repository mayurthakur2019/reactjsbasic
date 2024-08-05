import React, { Component } from "react";
import Mounting2 from "./Mounting2";

export default class MountingPhaseBasic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Max",
    };
    console.log("Mounting phase constructor called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Mounting phase getDerivedStateFromProps called");
    console.log(state);
    console.log(props);
    return null;
  }
  componentDidMount() {
    console.log("Mounting phase componentDidMount called");
  }
  render() {
    console.log("Mounting phase render called");
    return (
      <>
        <div>MountingPhaseBasic</div>
        <h4>{this.state.name}</h4>
        <h4>{this.props.city}</h4>
        <Mounting2 city="bhopal" />
      </>
    );
  }
}
