import { useState } from "react"
import { auth } from "../../firebase"
import { useHistory } from "react-router-dom"
import { getParamByName, notify } from "../../utils/helpers"

const useLoginForm = (validate) => {
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

  const handleSubmit = (event) => {
    event.preventDefault()
    if (Object.keys(validate(values)).length === 0) {
      setErrors({})
      setLoading(true)
      auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then((_) => {
          setLoading(false)
          setValues({})
          const next = getParamByName("next") || "/dashboard"
          history.push(next)
        })
        .catch((e) => {
          notify(e.message)
          setLoading(false)
        })
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

export default useLoginForm
