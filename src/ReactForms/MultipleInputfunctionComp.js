import React, { useState } from "react";

function MultipleInputfunctionComp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    country: "",
    image: "",
    terms: false,
    gender: "",
    phone:'',

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", formData);
  };

  const { name, email, comment, country, image, terms, gender, phone } =
    formData;

  return (
    <>
      <div>MultipleInputfunctionComp</div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">Enter name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <br />
        <label htmlFor="email">Enter email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Enter Phone no</label>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="comment">Comments</label>
        <textarea
          name="comment"
          cols="30"
          rows="10"
          value={comment}
          onChange={handleChange}
        ></textarea>
        <br />
        <label htmlFor="country">Choose Country</label>
        <select name="country" value={country} onChange={handleChange}>
          <option value="india">India</option>
          <option value="srilanka">Sri Lanka</option>
        </select>
        <br />
        <label htmlFor="image">Image</label>
        <input type="file" name="image" value={image} onChange={handleChange} />
        <br />
        <label htmlFor="terms">Yes, I agree to the terms</label>
        <input
          type="checkbox"
          name="terms"
          checked={terms}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="gender">Gender</label>
        Male
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MultipleInputfunctionComp;
