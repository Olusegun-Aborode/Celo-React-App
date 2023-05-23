import React, { useState } from 'react';
import { connectCeloWallet, kit } from './celo';

function App() {
  const

 [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleRecipientAddressChange = (event) => {
    setRecipientAddress(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const sendPayment = async () => {
        const sendPayment = async () => {
            if (amount <= 0) {
            console.log('Amount must be greater than zero')
            return
            }
        
            try {
            const amountInWei = kit.web3.utils.toWei(amount, 'ether')
        
            const goldtoken = await kit.contracts.getGoldToken()
            const tx = await goldtoken.transfer(recipientAddress, amountInWei).send({ from: kit.defaultAccount })
            const receipt = await tx.waitReceipt()
        
            console.log('Transaction receipt: ', receipt)
            } catch (error) {
            console.log('Payment failed: ', error)
            }
        }
    }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipientAddress}
        onChange={handleRecipientAddressChange}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
      />

      <button onClick={sendPayment}>
        Send Payment
      </button>
    </div>
  );
}

export default App;
