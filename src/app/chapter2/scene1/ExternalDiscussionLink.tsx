'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import metamask from "@/img/metamask.svg"
import { useNetwork } from 'wagmi'
import { Dispatch, SetStateAction } from "react";

const ExternalDiscussion = ({ delay, setStage }: {
    delay: number,
    setStage: Dispatch<SetStateAction<number>>
}) => {
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
                setStage(2)
            }
            else {
                console.log('token not added')
            }

        }
        catch (error) {

        }
    }

    return (
        <div className="w-3/4 my-1">
            <motion.div
                className="my-2 p-2 bg-white rounded-t-lg rounded-r-lg shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay, duration: 1 }}
            >
                <div className="text-sm text-black">
                    We will add the USDC token to your wallet to display its balance, click on this icon to add your token to the wallet
                    <Image
                        className="cursor-pointer m-1 h-3 object-contain"
                        src={metamask}
                        alt="metamask"
                        onClick={() => {
                            chain?.id === 420 ? addTokenFunction() : alert('wrong network')
                        }}
                    />
                </div>
            </motion.div>
        </div >
    )
}

export default ExternalDiscussion;