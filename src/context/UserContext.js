import { createContext, useContext, useReducer } from "react"
import { auth, db, fireIds, functionIds, functions } from "../firebase"

const GET_WALLET = "GET_WALLET"
const GET_USER = "GET_USER"
const GET_PRODUCTS = "GET_PRODUCTS"

const INITIAL_STATE = {
  user: null,
  wallet: null,
}

const userReducer = (state, action) => {
  switch (action.type) {
    case GET_WALLET:
      const wallet = action.payload
      return { ...state, wallet }
    case GET_USER:
      const user = action.payload
      return { ...state, user }
    case GET_PRODUCTS:
    default:
  }
}

export const UserContext = createContext()
export const UserConsumer = UserContext.Consumer
export const UserProvider = ({ children }) => {
  const [user, updateUserContext] = useReducer(userReducer, INITIAL_STATE)
  return (
    <UserContext.Provider value={{ user, updateUserContext }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("UserContext must be used within an UserProvider")
  }
  return context
}

export const getUser = (dispatch) => {
  auth.onAuthStateChanged(async (user) => {
    if (user != null) {
      const _ = await db.collection(fireIds.users).doc(user.uid).get()
      if (_ && _.exists) {
        const _user = _.data()
        dispatch({
          type: GET_USER,
          payload: _user,
        })
        getWallet(dispatch, _user.wallet_id)
      }
    }
  })
}

export const getWallet = async (dispatch, walletId) => {
  try {
    const resp = (
      await functions.httpsCallable(functionIds.getWallet)(walletId)
    ).data
    if (resp.success) {
      dispatch({ type: GET_WALLET, payload: resp.data })
    } else {
      throw resp
    }
  } catch (err) {
    // dispatch({ type: GET_WALLET_ERROR, payload: err.message || "Something went wrong" })
    // fallback to cache
  }
}
