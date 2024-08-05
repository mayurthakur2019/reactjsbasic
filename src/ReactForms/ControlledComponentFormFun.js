import React, { useState } from "react";

function ControlledComponentFormFun() {
    const [name ,setName] = useState()
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setName(e.target[0].value);
  };
  return (
    <>
      <div>ControlledComponentFormFun </div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">Enter name</label>
        <input type="text" name="" id="" value={name} />
        <h1>{name}</h1>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ControlledComponentFormFun;
