import * as Yup from "yup";

const loginAdmintSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string()
    .min(2, "The name is too short!")
    .max(50, "The name is too long!")
    .required("The name is required"),
  lastName: Yup.string()
    .min(2, "The last name is too short!")
    .max(50, "The last name is too long!")
    .required("The last name is required"),
  password: Yup.string()
    .min(6, "The password is too short!")
    .max(10, "The password is too long!")
    .required("The password is required"),
});

export default loginAdmintSchema;
