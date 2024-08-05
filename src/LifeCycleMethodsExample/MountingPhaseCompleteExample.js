import React, { Component } from "react";

class MountingPhaseCompleteExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.initialCount !== state.count) {
      return {
        count: props.initialCount,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("Component has been mounted");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <ul>
          {[this.state.data ? `${JSON.stringify(this.state.data)}` : null].map(
            (item, index) => item && <li key={index}>{item}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default MountingPhaseCompleteExample;
