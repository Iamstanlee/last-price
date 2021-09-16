import { createContext, useContext, useReducer } from "react"
import { db, fireIds } from "../firebase"

const GET_PRODUCTS_START = "GET_PRODUCTS_START"
const GET_PRODUCTS_END = "GET_PRODUCTS_END"

const INITIAL_STATE = {
  products: null,
  loading: false,
}

const userReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return { ...state, loading: true }
    case GET_PRODUCTS_END:
      const products = action.payload
      return { ...state, products, loading: false }
    default:
  }
}

export const ProductContext = createContext()
export const ProductConsumer = ProductContext.Consumer
export const ProductProvider = ({ children }) => {
  const [product, updateProductContext] = useReducer(userReducer, INITIAL_STATE)
  return (
    <ProductContext.Provider value={{ product, updateProductContext }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error("ProductContext must be used within an ProductProvider")
  }
  return context
}

export const getProducts = async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_START,
  })
  const resp = await db.collection(fireIds.products).get()
  const products = resp.docs.map((e) => e.data())
  dispatch({
    type: GET_PRODUCTS_END,
    payload: products,
  })
}
