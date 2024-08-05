import React, { Component } from "react";

class Fromhandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      agreeToTerms: false,
      gender: "",
      favoriteColor: "",
      bio: "",
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const actualValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: actualValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", this.state);
    // Logic to submit form data
  };

  render() {
    return (
      <>
        <div>FormHandling Multiple inputs</div>
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
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={this.state.agreeToTerms}
              onChange={this.handleChange}
            />
            Agree to Terms
          </label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleChange}
              />
              Female
            </label>
          </div>
          <select
            name="favoriteColor"
            value={this.state.favoriteColor}
            onChange={this.handleChange}
          >
            <option value="">Select your favorite color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <textarea
            name="bio"
            value={this.state.bio}
            onChange={this.handleChange}
            placeholder="Tell us about yourself"
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Fromhandling;

// this is example of a fromhandling multiple type inputs fields
