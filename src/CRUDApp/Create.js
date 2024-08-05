import React, { useEffect } from "react";
import { useFormik } from "formik";

import { vschema } from "./vschema";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Create() {
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000")
      .then((response) => {
        console.log("Server is up and running:", response);
      })
      .catch((error) => {
        console.error("Error connecting to the server:", error);
      });
  }, []);

  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      age: "",
    },
    validationSchema: vschema,

    onSubmit: (values, actions) => {
      console.log(values);
      Axios.post("api/create", values)
        .then((res) => {
          console.log(res);
          actions.resetForm();
          navigate('/')// Reset form here after the request completes successfully
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    // onSubmit: (values) => {
    //   console.log(values);
    //

    //action.resetForm();
    // },
  });
  return (
    <>
      <div className="row">
        <div className="col-sm-8 offset-sm-2 bg-dark p-4 text-white">
          <h3 className="text-center">Create Form</h3>
          <form onSubmit={formik.handleSubmit} className="mb-3">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.age}
              />
              {formik.touched.age && formik.errors.age ? (
                <div className="text-danger">{formik.errors.age}</div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
            &nbsp; &nbsp;
            <button
              type="button"
              onClick={() => handleClick("/")}
              className="btn btn-primary mt-3"
            >
              Back
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
