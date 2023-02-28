'use client';

import { motion } from "framer-motion"
import { perm_marker } from '@/utils/font';
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNetwork, useAccount } from 'wagmi'
import SignInButton from "@/components/SigninButton";
import { useEffect, useState } from "react";
import { handleEthereum } from "@/components/checkWallet";

const Chap2 = () => {
    const { chain } = useNetwork()
    const { isConnected } = useAccount()
    console.log(chain)


    const [state, setState] = useState<{
        address?: string
        error?: Error
        loading?: boolean
    }>({})

    useEffect(() => {
        const handler = async () => {
            try {
                const res = await fetch('/api/me')
                const json = await res.json()
                setState((x) => ({ ...x, address: json.address }))
            } catch (_error) { }
        }
        // 1. page loads
        handler()
        // 2. window is focused (in case user logs out of another window)
        window.addEventListener('focus', handler)
        return () => window.removeEventListener('focus', handler)
    }, [])


    return (
        <div className={`${perm_marker.className} relative flex justify-center w-screen h-screen my-auto`}>
            <motion.div
                className="absolute top-3 right-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}
            >
                <ConnectButton />
            </motion.div>
            <div className="my-auto">
                <motion.h1
                    className="text-center text-7xl"
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 0.8, duration: 1 }}
                >
                    Chapter 2
                </motion.h1>
                <motion.p
                    className="text-center text-xl"
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 1.5, duration: 1 }}
                >
                    Paradigm shift
                </ motion.p>
                {!handleEthereum() &&
                    <div className="my-10 text-center text-xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 2 }}
                        >
                            A Metamask is required for chapter 2 and it looks like you don&apos;t have it installed
                        </ motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5, duration: 2 }}
                        >
                            You can go to <Link className="underline" href="/chapter1"> chapter 1</Link> to learn how to install it
                        </ motion.p>
                    </div>
                }
                {handleEthereum() &&
                    <>
                        <motion.div
                            className="my-10 text-center text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 2 }}
                        >
                            {!isConnected &&
                                <p>Please click on Connect button at the top right of the page</p>
                            }
                            {chain?.id !== 420 &&
                                <p>We use a specific network for our adventure, please click on Wrong Network to switch on it</p>}
                            {chain?.id === 420 &&
                                <p>Please sign-in to save your progression</p>}
                        </ motion.div>
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 250 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', delay: 3, duration: 3 }}
                        >
                            <SignInButton
                                onSuccess={({ address }) => setState((x) => ({ ...x, address }))}
                                onError={({ error }) => setState((x) => ({ ...x, error }))}
                            />
                        </motion.div>

                    </>
                }

            </div>
        </div>
    )
}

export default Chap2;