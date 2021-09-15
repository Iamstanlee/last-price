const { createAccount } = require("./src/api/user")
const { GetWalletProvider } = require("./src/api/getwallet")

exports.createAccount = createAccount

/**
 * WALLET
 */
const walletProvider = new GetWalletProvider()
