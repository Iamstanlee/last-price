import { validateNum } from "../../../../utils/validators"

export default function validate(values) {
  let errors = {}

  if (!values.amount) {
    errors.amount = "amount is required"
  } else if (!validateNum(values.amount)) {
    errors.amount = "Invalid amount"
  }
  if (!values.account_number) {
    errors.account_number = "Account number is required"
  } else if (!validateNum(values.account_number)) {
    errors.account_number = "Invalid account number"
  }
  return errors
}
