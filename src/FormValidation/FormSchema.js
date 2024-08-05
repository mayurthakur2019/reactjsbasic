import * as Yup from "yup";
export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  comment: Yup.string().required("Comment is required"),
  country: Yup.string().required("Country is required"),
  image: Yup.mixed().required("Image is required"),
  gender: Yup.string().required("Gender is required"),
  age: Yup.number().min(18).max(55).required("Age is required"),
  password: Yup.string()
    .required("password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain only min 8 alpha, numeric, special characters"
    ),
  cpassword: Yup.string().required("Confirm password is required").oneOf(
    [Yup.ref('password'),null],
    "Confirm password does not match the password"
  ),
  // website: string().url().nullable(),
  // createdOn: date().default(() => new Date()),
  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});
