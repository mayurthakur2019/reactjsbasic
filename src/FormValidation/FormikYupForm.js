import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { validationSchema } from "./FormSchema";


function FormikYupForm() {
  // Define the validation schema using Yup
//   const validationSchema = Yup.object({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     phone: Yup.string().required("Phone number is required"),
//     comment: Yup.string().required("Comment is required"),
//     country: Yup.string().required("Country is required"),
//     image: Yup.mixed().required("Image is required"),
//     gender: Yup.string().required("Gender is required"),
//     terms: Yup.boolean().oneOf(
//       [true],
//       "You must accept the terms and conditions"
//     ),
//   });

  // Initialize Formik with validation schema
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
      country: "",
      image: "",
      gender: "",
      terms: false,
      age:'',
      password:'',
      cpassword:'',

    },
    validationSchema: validationSchema,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <>
      <div className="row">
        <div className="col-sm-8 offset-sm-2 bg-dark p-4 text-white">
          <h3 className="text-center">FormikYupForm</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Enter name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Enter email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Enter Phone no
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-danger">{formik.errors.phone}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Enter age
              </label>
              <input
                type="age"
                className="form-control"
                id="age"
                name="age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
              />
              {formik.touched.age && formik.errors.age ? (
                <div className="text-danger">{formik.errors.age}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Enter password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                Enter confirm password
              </label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                name="cpassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cpassword}
              />
              {formik.touched.cpassword && formik.errors.cpassword ? (
                <div className="text-danger">{formik.errors.cpassword}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                Comments
              </label>
              <textarea
                className="form-control"
                id="comment"
                name="comment"
                rows="3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
              ></textarea>
              {formik.touched.comment && formik.errors.comment ? (
                <div className="text-danger">{formik.errors.comment}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Choose Country
              </label>
              <select
                className="form-select"
                id="country"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              >
                <option value="">Select a country</option>
                <option value="india">India</option>
                <option value="srilanka">Sri Lanka</option>
              </select>
              {formik.touched.country && formik.errors.country ? (
                <div className="text-danger">{formik.errors.country}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={(event) => {
                  formik.setFieldValue("image", event.currentTarget.files[0]);
                }}
                onBlur={formik.handleBlur}
              />
              {formik.touched.image && formik.errors.image ? (
                <div className="text-danger">{formik.errors.image}</div>
              ) : null}
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                name="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.terms}
              />
              <label className="form-check-label" htmlFor="terms">
                Yes, I agree to the terms
              </label>
              {formik.touched.terms && formik.errors.terms ? (
                <div className="text-danger">{formik.errors.terms}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="text-danger">{formik.errors.gender}</div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormikYupForm;
