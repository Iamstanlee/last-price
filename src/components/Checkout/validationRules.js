import { validateEmail, validateNum } from "../../utils/validators"

export default function validate(values) {
  let errors = {}
  //   if (!values.address) {
  //     errors.address = "Address is required"
  //   }
  if (!values.phonenumber) {
    errors.phonenumber = "Phonenumber is required"
  } else if (
    values.phonenumber.length !== 11 ||
    !validateNum(values.phonenumber)
  ) {
    errors.phonenumber = "Phonenumber must be atleast 11 digits"
  }
  if (!values.email) {
    errors.email = "email address is required"
  } else if (!validateEmail(values.email)) {
    errors.email = "Invalid email address"
  }
  return errors
}
