import Axios from "axios";
import React, { useState, useEffect } from "react";
const BaseUrl = "https://jsonplaceholder.typicode.com/posts";
function GetAxios() {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get(BaseUrl).then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <>
      <div>Get Axios Request</div>
      <ul>
        {Posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default GetAxios;
