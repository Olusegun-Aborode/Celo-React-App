import { newKit } from '@celo/contractkit'

let kit

const connectCeloWallet = async function () {
  if (window.celo) {
    try {
      await window.celo.enable()
      kit = newKit("https://alfajores-forno.celo-testnet.org");
    } catch (error) {
      console.log("Error connecting to Celo Wallet: ", error)
    }
  } else {
    console.log("Please install the CeloExtensionWallet")
  }
}

export { connectCeloWallet, kit }
