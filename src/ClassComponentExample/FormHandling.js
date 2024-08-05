import React, { Component } from "react";

export default class FormHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", this.state);
  };
  render() {
    return (
      <>
        <div>FormHandling</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

// this is example of a fromhandling simple two inputs fileds
