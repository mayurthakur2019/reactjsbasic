import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

function PostAxios() {
  const [Posts, setPosts] = useState([]);
  const [formData, setFromData] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(formData);
    Axios.post("https://jsonplaceholder.typicode.com/posts", formData).then(
      (response) => {
        console.log(response);
      }
    );
  };
  return (
    <>
      <div>Post Axios</div>
      <div className="container mt-5">
        <h2>Form with Bootstrap</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="body"
              value={formData.body}
              onChange={handleChange}
              rows="3"
              placeholder="Enter description"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PostAxios;
