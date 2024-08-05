import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function List() {
  const [Users, setUsers] = useState([]);
  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
  };

  const handleDelete = (id) => {
    console.log(id);
    Axios.post("api/delete", { id: id })
      .then((res) => {
        console.log(res);
        // Update the Users state by filtering out the deleted user
        setUsers(Users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    Axios.get("http://localhost:8000/api/list").then((response) => {
      //console.log(response);
      setUsers(response.data.data);
    });
  }, []);
  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between mb-3">
          <h2>List Page</h2>
          <button
            type="button"
            onClick={() => handleClick("/create")}
            className="btn btn-primary"
          >
            Create
          </button>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleClick("/edit/" + item.id)}
                    className="btn btn-warning btn-sm"
                  >
                    Edit
                  </button>
                  &nbsp; &nbsp;
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default List;
