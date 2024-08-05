import React, { Component } from "react";

export default class ToggleBtn2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }
  toggle = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
  };
  render() {
    const { isOn } = this.state;
    const buttonStyle = {
      backgroundColor: isOn ? "green" : "yellow",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    };
    return (
      <>
        <div>ToggleBtn2 with style functionality</div>
        <button onClick={this.toggle} style={buttonStyle}>
          {isOn ? "ON" : "OFF"}
        </button>
      </>
    );
  }
}

// this is simple toggle btn example in which show ON OFF text is displayed ON bUTTON example and changed style also
