import { useState } from "react"
// import { useHistory } from "react-router-dom"
import { getParamByName, notify } from "../../utils/helpers"
import { functions, functionIds } from "../../firebase"

const useCheckoutForm = (validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  //   const history = useHistory()

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
          buyer: values,
          product_id: getParamByName("pid"),
        }
        const response = (await callable(data)).data
        if (response.success) {
          //
        } else {
          notify(response.message)
        }
      } catch (e) {
        notify(e.message)
      }
      setLoading(false)
    } else {
      setErrors(validate(values))
    }
  }

  const payManually = async (event) => {
    event.preventDefault()
    if (Object.keys(validate(values)).length === 0) {
      setErrors({})
      setLoading2(true)
      try {
        const callable = functions.httpsCallable(functionIds.completeCheckout)
        const data = {
          buyer: values,
          product_id: getParamByName("pid"),
        }
        const response = (await callable(data)).data
        if (response.success) {
          // show success dialog
          notify(
            "Purchase successful 🔥, Check your email for details on your purchase",
            "success"
          )
        } else {
          notify(response.message)
        }
      } catch (e) {
        notify(e.message)
      }
      setLoading2(false)
    } else {
      setErrors(validate(values))
    }
  }
  return {
    handleChange,
    handleSubmit,
    payManually,
    values,
    errors,
    loading,
    loading2,
  }
}

export default useCheckoutForm
