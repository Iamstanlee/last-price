const { GetWalletProvider } = require("./provider/getwallet")

const walletProvider = new GetWalletProvider()
module.exports = { walletProvider }
