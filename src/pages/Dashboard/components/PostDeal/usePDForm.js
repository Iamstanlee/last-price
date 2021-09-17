import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useUserContext } from "../../../../context/UserContext"
import { db, fireIds } from "../../../../firebase"
import { uploadFile } from "../../../../utils/api"
import {
  getLastPrice,
  ngnToKobo,
  notify,
  uuid,
} from "../../../../utils/helpers"

const usePDForm = (validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {
    user: { user },
  } = useUserContext()

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (Object.keys(validate(values)).length === 0) {
      setErrors({})
      setLoading(true)
      try {
        const product = {
          ...values,
          product_price: ngnToKobo(parseInt(values.product_price)),
          last_price: getLastPrice(
            ngnToKobo(parseInt(values.product_price)),
            values.percentage_off
          ),
          percentage_off: parseFloat(values.percentage_off),
        }

        product.product_id = uuid().substring(0, 13)
        product.user_public_id = user.public_id
        product.product_image = await uploadFile(
          values.product_image,
          "products",
          product.product_id
        )
        await db
          .collection(fireIds.products)
          .doc(product.product_id)
          .set(product)
        notify("Item successfully added", "success")
        history.replace("/dashboard")
      } catch (err) {
        notify(err.message)
      }
      setLoading(false)
    } else {
      setErrors(validate(values))
    }
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    loading,
  }
}

export default usePDForm
