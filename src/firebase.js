const firebase = require("firebase/app")
require("firebase/auth")
require("firebase/functions")

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

if (process.env.NODE_ENV === "development")
  auth.useEmulator("http://localhost:9099")
if (process.env.NODE_ENV === "development")
  functions.useEmulator("localhost", 5001)

const functionIds = {
  createAccount: "createAccount",
}

export { auth, functions, functionIds }
