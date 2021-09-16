import { useState } from "react"
import { notification } from "antd"
import { auth } from "../../firebase"

const useLoginForm = (validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

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
        .signInWithEmailAndPassword(values.password, values.password)
        .then((_) => {
          setLoading(false)
          setValues({})
          //   navigate to dashboard
        })
        .catch((e) => {
          notification["error"]({
            message: "Error",
            description: e.message || "",
          })
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
