'use client'

import { handleEthereum } from '@/components/checkWallet';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNetwork, useAccount } from 'wagmi'


const Chap2s1 = () => {
    const { chain } = useNetwork()
    const tokenAddress = '0xcbce2891F86b69b3eF61dF8CE69e3522a0483FB3'

    const tokenSymbol = 'USDC'
    const tokenDecimals = 6
    const tokenImage = 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389'

    const addTokenFunction = async () => {
        try {
            const wasAdded = await (window as any).ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage
                    },
                },
            });
            if (wasAdded) {
                console.log('tokend added')
            }
            else {
                console.log('token not added')
            }

        }
        catch (error) {

        }
    }

    const sendAddress = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const target = event.currentTarget
        const data = { address: target.address.value }
        console.log(data)
        const JSONdata = JSON.stringify(data)
        const response = await fetch('/api/game/faucet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }





    return (
        <div className="flex flex-col align-middle">
            <div className="absolute top-3 right-3">
                <ConnectButton />
            </div>
            <h1 className="text-lg">Scene 2</h1>
            <button
                className="m-4 w-40 border-2 border-white rounded-md text-center"
                onClick={() => {
                    chain?.id === 420 ? addTokenFunction() : alert('wrong network')
                }}
            >
                Add to Metamask
            </button>
            <form className="flex" onSubmit={sendAddress} >
                <div className="flex md:flex text-xl justify-center items-center border-4 border-dashed mx-auto border-orange-500 max-w-2xl py-4 px-4">
                    <div className="p-2">
                        <input
                            className="border rounded px-2 py-1 text-black text-sm"
                            type="text"
                            id="address"
                            name="address"
                            placeholder="address"
                            required
                            minLength={42}
                            maxLength={42}
                        />
                    </div>
                    <button type="submit" className="px-4 py-1 rounded-full bg-orange-500 shadow ml-2">
                        Send your address
                    </button>
                </div>
            </form>

        </div>



    )
}

export default Chap2s1