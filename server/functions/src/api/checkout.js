const functions = require("firebase-functions")
const { fireIds } = require("../constants")
const { db } = require("../helper")
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
        await user.ref
          .collection(fireIds.sales)
          .doc(product.data().product_id)
          .set({
            product: product.data(),
            shipping_address: data.shipping_address,
            status: "pending",
          })
        return walletProvider.fundViaBankTransfer(user.data().wallet_id)
      }
    }
    return { success: false, message: "This product does not exists" }
  } catch (err) {
    return { success: false, message: err.message || "Something went wrong" }
  }
})
