const firebase = require("firebase/app")
require("firebase/auth")
require("firebase/functions")
require("firebase/firestore")
require("firebase/storage")

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  appId: process.env.REACT_APP_FIREBASE_APPID,
}

const fb = firebase.default.initializeApp(firebaseConfig)
const auth = fb.auth()
const functions = fb.functions()
const db = fb.firestore()
const storage = fb.storage()

if (process.env.NODE_ENV === "development")
  auth.useEmulator("http://localhost:9099")

if (process.env.NODE_ENV === "development") db.useEmulator("localhost", 8080)

if (process.env.NODE_ENV === "development")
  functions.useEmulator("localhost", 5001)

if (process.env.NODE_ENV === "development")
  storage.useEmulator("localhost", 9199)

const functionIds = {
  createAccount: "createAccount",
  getWallet: "getWallet",
  initCheckout: "initCheckout",
}
/**
 * firestore collection/sub-collection Ids
 */
const fireIds = {
  products: "products",
  users: "users",
}

export { auth, db, storage, functions, fireIds, functionIds }
