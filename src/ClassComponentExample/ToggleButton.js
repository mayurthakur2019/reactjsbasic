import React, { Component } from "react";

export default class ToggleButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOn: false
    }
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn
    }))
  }
  render() {
    return (
      <>
        <div>ToggleButton</div>
        <button onClick={this.toggle}>{this.state.isOn ? "ON" : "OFF"}</button>
      </>
    );
  }
}

// this is simple toggle btn example in which show ON OFF text is displayed ON bUTTON example
