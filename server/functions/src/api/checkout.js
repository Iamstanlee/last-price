const functions = require("firebase-functions")
const { fireIds } = require("../constants")
const { db, fieldValue } = require("../helper")
const { walletProvider } = require("./wallet")

exports.initCheckout = functions.https.onCall(async (data, _) => {
  try {
    const product = await db
      .collection(fireIds.products)
      .doc(data.product_id)
      .get()
    if (product && product.exists) {
      const resp = await db
        .collection(fireIds.users)
        .where("public_id", "==", product.data().user_public_id)
        .get()
      if (resp && !resp.empty) {
        const user = resp.docs[0]
        return walletProvider.fundViaBankTransfer(user.data().wallet_id)
      }
    }
    return { success: false, message: "This product does not exists" }
  } catch (err) {
    return { success: false, message: err.message || "Something went wrong" }
  }
})

exports.completeCheckout = functions.https.onCall(async (data, _) => {
  try {
    const product = await db
      .collection(fireIds.products)
      .doc(data.product_id)
      .get()
    if (product && product.exists) {
      const _ = await db
        .collection(fireIds.users)
        .where("public_id", "==", product.data().user_public_id)
        .get()
      if (_ && !_.empty) {
        const user = _.docs[0]
        const response = await walletProvider.fund({
          amount: product.data().last_price,
          wallet_id: user.data().wallet_id,
        })
        if (response.success) {
          await product.ref.update({ sales: fieldValue.increment(1) })
          // send email of the purchase and details to buyer
          return {
            success: true,
            data: response.data,
          }
        } else {
          return {
            success: false,
            message: response.message || "Error making payment",
          }
        }
      }
    }
  } catch (err) {
    return { success: false, message: err.message || "Something went wrong" }
  }
})
