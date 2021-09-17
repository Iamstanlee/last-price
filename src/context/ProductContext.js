import { createContext, useContext, useReducer } from "react"
import { db, fireIds } from "../firebase"

const GET_PRODUCTS_START = "GET_PRODUCTS_START"
const GET_PRODUCTS_END = "GET_PRODUCTS_END"
const GET_USER_PRODUCTS_START = "GET_USER_PRODUCTS_START"
const GET_USER_PRODUCTS_END = "GET_USER_PRODUCTS_END"

const INITIAL_STATE = {
  products: null,
  loading: false,
  user_products: null,
  user_products_loading: false,
}

const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return { ...state, loading: true }
    case GET_PRODUCTS_END:
      const products = action.payload
      return { ...state, products, loading: false }
    case GET_USER_PRODUCTS_START:
      return { ...state, user_products_loading: true }
    case GET_USER_PRODUCTS_END:
      const user_products = action.payload
      return { ...state, user_products, user_products_loading: false }
    default:
  }
}

export const ProductContext = createContext()
export const ProductConsumer = ProductContext.Consumer
export const ProductProvider = ({ children }) => {
  const [product, updateProductContext] = useReducer(
    productReducer,
    INITIAL_STATE
  )
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

export const getProductById = async (pid) => {
  try {
    const product = await db.collection(fireIds.products).doc(pid).get()
    if (product && product.exists)
      return { success: true, data: product.data() }
    return { success: false, message: "Invalid product link" }
  } catch (err) {
    return { success: false, message: err || "Something went wrong" }
  }
}

export const getUserProducts = async (dispatch, userPubId) => {
  dispatch({
    type: GET_USER_PRODUCTS_START,
  })
  const resp = await db
    .collection(fireIds.products)
    .where("user_public_id", "==", userPubId)
    .get()
  const products = resp.docs.map((e) => e.data())
  dispatch({
    type: GET_USER_PRODUCTS_END,
    payload: products,
  })
}
