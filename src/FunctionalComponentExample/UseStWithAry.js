import React, { useState } from "react";

function UseStWithAry() {
  let num = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  let [numbers, setNumbers] = useState(num);

  const changeAry = () => {
    setNumbers((prevState) => {
      return [...prevState, Math.floor(Math.random() * 50)];
    });
  };
  return (
    <div>
      <ul>
        {numbers.map((n, key) => {
          return <li key={key}>{n}</li>;
        })}
      </ul>
      <button onClick={changeAry}>ChangeArray</button>
    </div>
  );
}

export default UseStWithAry;
