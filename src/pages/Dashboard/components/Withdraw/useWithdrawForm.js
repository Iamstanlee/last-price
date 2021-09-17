import { useState } from "react"
import { functionIds, functions } from "../../../../firebase"
import { useHistory } from "react-router-dom"
import { ngnToKobo, notify } from "../../../../utils/helpers"
import { get } from "../../../../utils/api"
import { useUserContext } from "../../../../context/UserContext"

const useWithdrawForm = (validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [banks, setBanks] = useState(null)
  const history = useHistory()

  const {
    user: { wallet },
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
      if (ngnToKobo(values.amount) > wallet.balance) {
        notify("Insufficient balance")
      } else {
        try {
          const callable = functions.httpsCallable(
            functionIds.withdrawFromWallet
          )
          const response = (
            await callable({
              ...values,
              amount: parseInt(values.amount),
              wallet_id: wallet.wallet_id,
            })
          ).data
          if (response.success) {
            notify(
              `${values.amount} successfully transferred to ${values.bank_name}`,
              "success"
            )
            history.replace("/dashboard")
          } else {
            throw (
              response.message || "Transfer could not be completed at this time"
            )
          }
        } catch (err) {
          notify(err.message || err.toString())
        }
      }
    } else {
      setErrors(validate(values))
    }
    setLoading(false)
  }

  const getBanks = () => {
    get(`https://api.getwallets.co/v1/banks`, {})
      .then((response) => {
        if (response.success) {
          setBanks(response.data)
        } else {
          throw response.message || "Error getting available banks"
        }
      })
      .catch((e) => null)
  }

  return {
    handleChange,
    handleSubmit,
    getBanks,
    banks,
    values,
    errors,
    loading,
  }
}

export default useWithdrawForm
