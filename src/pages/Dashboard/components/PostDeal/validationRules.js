import { validateNum } from "../../../../utils/validators"

export default function validate(values) {
  let errors = {}
  if (!values.product_image) {
    errors.product_image = "Product image is required"
  }
  if (!values.product_name) {
    errors.product_name = "Product name is required"
  }
  if (!values.product_description) {
    errors.product_description = "Description is required"
  }
  if (!values.product_price) {
    errors.product_price = "Price is required"
  } else if (!validateNum(values.product_price))
    errors.product_price = "Price must be a valid amount"
  return errors
}
