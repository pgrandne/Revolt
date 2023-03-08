'use client';

import { motion } from "framer-motion"
import { perm_marker, roboto } from '@/utils/font';
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNetwork, useAccount } from 'wagmi'
import SignInButton from "@/components/SigninButton";
import { useEffect, useState } from "react";
import { handleEthereum } from "@/components/checkWallet";
import Modal from "@/components/Modal";

const Chap2 = () => {
    const { chain } = useNetwork()
    const { isConnected } = useAccount()
    const [wallet, setWallet] = useState(false)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setWallet(handleEthereum());
    }, [])

    const [state, setState] = useState<{
        address?: string
        error?: Error
        loading?: boolean
    }>({})

    useEffect(() => {
        const handler = async () => {
            try {
                const res = await fetch('/api/siwe/me')
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
        <div className={`${perm_marker.className} relative flex justify-center w-screen h-screen my-auto overflow-hidden`}>
            <motion.div
                className="absolute top-3 left-3"
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
                {!wallet &&
                    <div className={`${roboto.className} font-bold my-10 text-center text-xl`}>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 2 }}
                        >
                            A Metamask is required for chapter 2 and it looks like you don&apos;t have it
                        </ motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5, duration: 2 }}
                        >
                            You can click on this <a target="_blank" href="https://metamask.io/" rel="noopener noreferrer" className="underline">link</a> for installing it
                        </ motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6, duration: 2 }}
                        >
                            Or you can go to <Link className="underline" href="/chapter1"> chapter 1</Link> to learn
                        </ motion.p>
                    </div>
                }
                {wallet &&
                    <>
                        <motion.div
                            className={`${roboto.className} font-bold my-10 text-center text-xl`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 2 }}
                        >
                            {!isConnected &&
                                <p >Click on <span className="font-extrabold">“Connect Walet“</span> and select Mematask</p>
                            }
                            {isConnected && chain?.id !== 420 &&
                                <p>Please click on <span className="font-extrabold">“Wrong Network“</span> to switch on Optimism Goerli</p>}
                        </ motion.div>
                        {chain?.id === 420 &&
                            <motion.div
                                className="flex justify-center"
                                initial={{ opacity: 0, y: 250 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: 'spring', delay: 1, duration: 3 }}
                            >
                                <SignInButton
                                    onSuccess={({ address }) => setState((x) => ({ ...x, address }))}
                                    onError={({ error }) => setState((x) => ({ ...x, error }))}
                                    setModal={setModal}
                                />
                            </motion.div>
                        }
                    </>
                }
            </div>
            {modal && <Modal route='/chapter2/scene1' />}
        </div >
    )
}

export default Chap2;