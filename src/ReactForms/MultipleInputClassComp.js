import React, { Component } from "react";

export default class MultipleInputClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    
  };

  SubmitData = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { name, email } = this.state;
    return (
      <>
        <div>
          MultipleInputClassComp
          <form onSubmit={this.SubmitData}>
            <label htmlFor="name">Enter name</label>
            <input
              type="text"
              name="name"
              id=""
              value={name}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="email">Enter email</label>
            <input
              type="email"
              name="email"
              id=""
              value={email}
              onChange={this.handleChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}
