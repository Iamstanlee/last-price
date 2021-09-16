import { useState } from "react"
import { auth, functions, functionIds } from "../../firebase"
import { useHistory } from "react-router-dom"
import { notify, uuid } from "../../utils/helpers"

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
      const { email, password, fullname } = values
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((_) => {
          const callable = functions.httpsCallable(functionIds.createAccount)
          const user = {
            email: email,
            fullname: fullname,
            user_id: _.user.uid,
            public_id: uuid(),
          }
          return callable(user)
        })
        .then((resp) => {
          const _ = resp.data
          if (_.success) {
            notify("Registration Successful", "success")
            setLoading(false)
            setValues({})
            history.push(`/dashboard`)
          } else {
            throw _
          }
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
