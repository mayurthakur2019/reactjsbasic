import React, { Component } from "react";

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Home",
    };
  }
  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    const { activeTab } = this.state;
    const tabButtonStyle = {
        display: 'flex',
        justifyContent: 'space-between'
    };
    return (
      <>
        <div>Tab Example</div>

        <div style={tabButtonStyle}>
          <button onClick={()=>this.setActiveTab("Home")}>Home</button>
          <button onClick={()=>this.setActiveTab("About")}>About</button>
          <button onClick={()=>this.setActiveTab("Contact")}>Contact</button>
        </div>
        <div>
        {activeTab === "Home" && <p>You are on Home Page</p>}
        {activeTab === "About" && <p>You are on About Page</p>}
        {activeTab === "Contact" && <p>You are on Contact Page</p>}
        </div>

      </>
    );
  }
}

// this is example of tab functionality to change the tab section
