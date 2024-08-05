import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // Method to handle button click and update state
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.decrementCount}>Decrement</button>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}


// this is simple counter app example to increment decrement a counter value
