'use client';

import { motion } from "framer-motion"
import { perm_marker } from '@/utils/font';
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNetwork } from 'wagmi'
import SignInButton from "@/components/SigninButton";
import { useEffect, useState } from "react";

const Chap2 = () => {
    const narration = "Lurenberg, Listenbourg"
    const day = "October 18, 2023"
    const { chain } = useNetwork()
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
            {typeof window.ethereum !== 'undefined' &&
                <motion.div
                    className="absolute top-3 right-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 2 }}
                >
                    <ConnectButton />
                </motion.div>
            }

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
                {typeof window.ethereum === 'undefined' &&
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
                {typeof window.ethereum !== 'undefined' &&
                    <>
                        <motion.div
                            className="my-10 text-center text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 2 }}
                        >
                            <p>Please click on Connect button at the top right of the page</p>
                            {chain?.id !== 420 &&
                                <p>We use a specific tesnet for our adventure, please click on Wrong Network to change it</p>}
                        </ motion.div>
                        {/* <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 250 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', delay: 3, duration: 3 }}
                        >
                            <motion.button
                                className="btnHero"
                                whileHover={{ rotate: 7, scale: 1.5, transition: { duration: 0.1 } }}
                            >
                                Click to sign-in
                            </motion.button>
                        </motion.div> */}
                        <SignInButton
                            onSuccess={({ address }) => setState((x) => ({ ...x, address }))}
                            onError={({ error }) => setState((x) => ({ ...x, error }))}
                        />
                        <p>
                            {state.address}
                        </p>
                    </>
                }

            </div>
        </div>
    )
}

export default Chap2;