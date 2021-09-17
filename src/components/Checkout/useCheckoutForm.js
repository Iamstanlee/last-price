import { useState } from "react"
import { useHistory } from "react-router-dom"
import { getParamByName, notify } from "../../utils/helpers"
import { functions, functionIds } from "../../firebase"

const useCheckoutForm = (validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const history = useHistory()

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
        const callable = functions.httpsCallable(functionIds.initCheckout)
        const data = {
          shipping_address: values,
          product_id: getParamByName("pid"),
        }
        const resp = await callable(data)
        console.log(resp)
        if (resp.success) {
          console.log(resp)
        } else {
          notify(resp.message)
        }
      } catch (e) {
        notify(e.message)
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

export default useCheckoutForm
