import { validateEmail } from "../../utils/validators"

export default function validate(values) {
  let errors = {}
  if (!values.password) {
    errors.password = "password is required"
  } else if (values.password.length < 8) {
    errors.password = "Password must be atleast 8 characters"
  }
  if (!values.email) {
    errors.email = "email address is required"
  } else if (!validateEmail(values.email)) {
    errors.email = "Invalid email address"
  }
  return errors
}
