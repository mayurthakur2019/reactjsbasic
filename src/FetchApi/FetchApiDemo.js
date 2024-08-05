import React, { useEffect, useState } from "react";

function FetchApiDemo() {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(setPosts(data));
        return setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <div>FetchApiDemo</div>
      <ul>
        {Posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default FetchApiDemo;
