import React, { Component, createRef } from 'react'

export default class RefsExple1 extends Component {
  constructor(props) {
    super(props);

    this.myRefs = createRef();
    this.myRefs2 = createRef();
  }
  componentDidMount() {
    console.log((this.myRefs));
    console.log(this.myRefs2);
    console.log((this.myRefs.current.align = "left"));
  }
  handleChange=() => {
   this.myRefs.current.align = "right";
  }
  render() {
    return (
      <>
        <div>RefsExple1</div>
        <h1 ref={this.myRefs}>Test</h1>
        <input type="text" value="" />
        <button onClick={this.handleChange}>Click</button>
      </>
    );
  }
}
