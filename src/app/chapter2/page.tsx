'use client';

import { motion } from "framer-motion"
import { perm_marker, roboto } from '@/utils/font';
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNetwork, useAccount } from 'wagmi'
import SaveButton from "@/components/SaveButton";
import { useEffect, useState } from "react";
import { handleEthereum } from "@/utils/checkWallet";
import Modal from "@/components/Modal";

const Chap2 = () => {
    const { chain } = useNetwork()
    const { isConnected } = useAccount()
    const [wallet, setWallet] = useState(false)
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const progression = {
        chapter: 2,
        episode: 1,
        scene: 0
    }
    useEffect(() => {
        setWallet(handleEthereum());
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
                            Metamask is required for Chapter 2 and it looks like you don&apos;t have it installed.
                        </ motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5, duration: 2 }}
                        >
                            You can click on this <a target="_blank" href="https://metamask.io/" rel="noopener noreferrer" className="underline">link</a> to install it.
                        </ motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6, duration: 2 }}
                        >
                            Or you can go to <Link className="underline" href="/chapter1/scene1"> Chapter 1</Link> to rediscover the whole story, and understand how Metamask works.
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
                                className="flex flex-col gap-2 mx-auto place-content-center"
                                initial={{ opacity: 0, y: 250 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: 'spring', delay: 1, duration: 3 }}
                            >
                                <SaveButton
                                    progression={progression}
                                    setModal={setModal}
                                />
                                <motion.span
                                    className="mx-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 4, duration: 2 }}
                                >or</motion.span>
                                <motion.div
                                    className="mx-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 4, duration: 2 }}
                                >
                                    <Link className="btnHero"
                                        href="/chapter2/scene1"
                                    >
                                        {loading &&
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        }
                                        {loading ? "Processing..." : "Next episode withous saving"}
                                    </Link>
                                </motion.div>
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