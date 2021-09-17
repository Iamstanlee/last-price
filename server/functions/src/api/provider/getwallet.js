const { get, post } = require("../../helper")
const { getTransactionId } = require("../../utils")

// const apiKey = process.env === "production" ? config.getwallet.prod : config.getwallet.dev;
const apiKey =
  process.env === "production"
    ? "sk_test_61429e45e7e3684960079c5761429e45e7e3684960079c58"
    : "sk_test_61429e45e7e3684960079c5761429e45e7e3684960079c58"
const apiUrl = "https://api.getwallets.co/v1"
const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${apiKey}`,
}

class GetWalletProvider {
  async createWallet(email) {
    try {
      let res = await post(
        `${apiUrl}/wallets`,
        { customer_email: email },
        headers
      )
      if (res.success) {
        return { success: true, data: res.data.wallet_id }
      }
      return { success: false, message: res.message || "Something went wrong" }
    } catch (err) {
      return { success: false, message: err.toString() }
    }
  }

  async getWallet(walletId) {
    try {
      const res = await get(`${apiUrl}/wallets/${walletId}`, headers)
      if (res.success) {
        return { success: true, data: res.data }
      }
      return { success: false, message: res.message || "Something went wrong" }
    } catch (err) {
      return { success: false, message: err || "Something went wrong" }
    }
  }

  async withdraw(data) {
    const date = new Date()
    const thisInstant = date.toISOString()
    const transaction = {
      amount: data.amount,
      from_wallet_id: data.wallet_id,
      bank_code: data.bank.bank_code,
      account_number: data.bank.account_number,
      meta_data: {
        transaction_id: getTransactionId(),
        created_at: thisInstant,
        updated_at: thisInstant,
      },
    }
    try {
      const res = await post(
        `${apiUrl}/wallets/transfers/bank`,
        transaction,
        headers
      )
      if (res.success && res.data.success) {
        return { success: true, data: transaction }
      }
      return { success: false, message: res.message || "Something went wrong" }
    } catch (err) {
      return { success: false, message: err || "Something went wrong" }
    }
  }

  async fund(data) {
    const date = new Date()
    const thisInstant = date.toISOString()
    const transaction = {
      amount: data.amount,
      wallet_id: data.wallet_id,
      meta_data: {
        transaction_id: data.transaction_id || getTransactionId(),
        created_at: data.created_at || thisInstant,
        updated_at: data.updated_at || thisInstant,
      },
    }

    try {
      const res = await post(
        `${apiUrl}/wallets/funds/manual`,
        transaction,
        headers
      )
      if (res.success) {
        return { success: true, data: transaction }
      }
      return { success: false, message: res.message || "Something went wrong" }
    } catch (err) {
      return { success: false, message: err || "Something went wrong" }
    }
  }

  async fundViaBankTransfer(walletId) {
    // const date = new Date()
    // const thisInstant = date.toISOString()
    const transaction = {
      wallet_id: walletId,
      //   meta_data: {
      //     transaction_id: data.transaction_id || getTransactionId(),
      //     created_at: data.created_at || thisInstant,
      //     updated_at: data.updated_at || thisInstant,
      //   },
    }
    try {
      const res = await post(
        `${apiUrl}/wallets/funds/banktransfer`,
        transaction,
        headers
      )
      if (res.success && res.data.success) {
        return { success: true, data: res.data.data }
      }
      return { success: false, message: res.message || "Something went wrong" }
    } catch (err) {
      return { success: false, message: err || "Something went wrong" }
    }
  }
}

module.exports = { GetWalletProvider }
