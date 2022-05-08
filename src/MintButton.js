import React, {useState} from "react";
import CandyMachine from "./CandyMachine";

const MintButton = () => {

  const [walletAddress, setWalletAddress] = useState(null)

  const checkWalletIsConnected = async () => {
    try {
      const {solana} = window
      if (solana) {
        if (solana.isPhantom) {
           const response = await solana.connect({onlyIftrusted: true})
           setWalletAddress(response.publicKey.toString());
           console.log('checkWalletIsConnected()', 'connected');
    if (!localStorage.justOnce) {
     setTimeout(function () {
        localStorage.setItem("justOnce", "true");
        window.location.reload(true);
    }, 3000);
    }
        } else {
          alert('Phantom Wallet not connected')
        }
      }

    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async() => {
     const {solana} = window
      if (solana) {
      const response = await solana.connect()
        setWalletAddress(response.publicKey.toString());
    if (!localStorage.justOnce) {
     setTimeout(function () {
        localStorage.setItem("justOnce", "true");
        window.location.reload(true);
    }, 3000);
    }
        console.log('connectWallet()', walletAddress);
      }
  }

  const renderNotConnectedContainer = () => (
    <button className="rounded-2xl mint-button my-auto h-100 py-[13px] via-teal-600 to-indigo-500 bg-size-200 bg-pos-0 px-4 py-2 font-semibold shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-[1px] hover:bg-pos-100" 
    onClick={connectWallet}>Connect Wallet
              <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            height={22}
            width={22}
            xmlns="http://www.w3.org/2000/svg"
            className="inline ml-2 my-auto"
          >
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
          </svg>
    </button>
 )
  React.useEffect(() => {
    const onLoad = async () => {
      await checkWalletIsConnected()
    }  
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])
  

	return (
				<>
          {!walletAddress && renderNotConnectedContainer()}
          {walletAddress && <CandyMachine walletAddress={window.solana}/>}
				</>
			);
};

export default MintButton;
