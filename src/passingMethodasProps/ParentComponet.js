import React, { Component } from "react";
import ChildComponets from "./ChildComponets";

export default class ParentComponet extends Component {
  parentMethod = (name) => {
    alert( name+"Parent method called");
  };
  render() {
    return (
      <div>
        <ChildComponets call={this.parentMethod} />
      </div>
    );
  }
}
