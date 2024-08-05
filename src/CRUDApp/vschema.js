import * as Yup from "yup";
export const vschema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  age: Yup.number().min(18).max(55).required("Age is required"),
});
