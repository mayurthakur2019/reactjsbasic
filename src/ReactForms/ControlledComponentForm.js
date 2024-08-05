import React, { Component } from "react";

export default class ControlledComponentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }
  handleChange = (e) => {

    this.setState({ data: e.target.value });
  };
  onFormSubmit =(e)=>{
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="name">Enter name</label>
          <input
            type="text"
            name=""
            id=""
            value={this.state.data}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
