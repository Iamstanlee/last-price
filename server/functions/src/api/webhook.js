const functions = require("firebase-functions")
// const { fireIds } = require("../constants")
// const { db } = require("../helper")

exports.httpWebhook = functions.https.onRequest((req, res) => {
  const hook = req.body
  console.log(hook)
  res.end()
})
