import React, { useState } from "react";

function UseStWithObj() {
  const obj = {
    name: "Mayur",
    age: "32",
    isYounf: "true",
  };
  const [Person, setPerson] = useState(obj);
const HandleChange = () => {
    setPerson(prevState =>{
      return {
        ...prevState,
        name: "Max",
      };
    });
  };

  return (
    <div>
      <button onClick={HandleChange}>UpdateState</button>
      <p>{Person.name}</p>
      <p>{Person.age}</p>
      <p>{Person.isYounf.toString()}</p>
    </div>
  );
}

export default UseStWithObj;
