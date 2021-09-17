import { validateNum } from "../../../../utils/validators"

export default function validate(values) {
  let errors = {}
  if (!values.password) {
    errors.password = "password is required"
  } else if (values.password.length < 8) {
    errors.password = "Password must be atleast 8 characters"
  }
  if (!values.amount) {
    errors.amount = "amount is required"
  } else if (!validateNum(values.amount)) {
    errors.amount = "Invalid amount"
  }
  return errors
}
