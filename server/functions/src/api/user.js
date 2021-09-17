const functions = require("firebase-functions")
const { fireIds } = require("../constants")
const { db } = require("../helper")
const { walletProvider } = require("./wallet")

exports.createAccount = functions.https.onCall(async (data, _) => {
  try {
    const res = await walletProvider.createWallet(data.email)
    if (res.success) {
      const user = { ...data, wallet_id: res.data }
      await db.collection(fireIds.users).doc(user.user_id).set(user)
      return { success: true, data: user }
    }
    return { success: false, message: res.message || "Something went wrong" }
  } catch (err) {
    return {
      success: false,
      message: err || err.message || "Something went wrong",
    }
  }
})

exports.getWallet = functions.https.onCall(async (walletId, _) =>
  walletProvider.getWallet(walletId)
)

exports.withdrawFromWallet = functions.https.onCall(async (data, _) =>
  walletProvider.withdraw(data)
)

exports.fundViaBankTransfer = functions.https.onCall(async (walletId, _) =>
  walletProvider.fundViaBankTransfer(walletId)
)
