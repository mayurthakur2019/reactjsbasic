import React, { Component } from "react";

export default class InlineStyle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }
  changeHandle = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };
  render() {
    const styles = {
      color: "white",
      fontFamily: "Arial",
      fontWeight: "bold",
      backgroundColor: (this.state.active)?'orange':'red',
      padding: "4px",
    };
    let obj2 = {
      fontSize: "50px",
    };

    return (
      <>
        <div style={styles}>InlineStyle</div>
        <div style={{ ...styles, ...obj2 }}>InlineStyle</div>
        <button onClick={this.changeHandle}>Click</button>
      </>
    );
  }
}
