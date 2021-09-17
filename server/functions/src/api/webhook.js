const functions = require("firebase-functions")

exports.httpWebhook = functions.https.onRequest((req, res) => {
  const hook = req.body
  console.log(hook)
  res.end()
})
