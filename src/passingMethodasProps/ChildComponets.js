import React from "react";

function ChildComponets(props) {
  return (
    <div>
      <div>ChildComponets</div>
      {/* <button onClick={this.props.call}> Click me</button> */}

      <button
        onClick={() => {
          props.call("Mayur");
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default ChildComponets;

// import React, { Component } from "react";

// export default class ChildComponets extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <>
//         <div>ChildComponets</div>
//         {/* <button onClick={this.props.call}> Click me</button> */}
//         <button onClick={()=>{this.props.call('Mayur')}}> Click me</button>
//       </>
//     );
//   }
// }
