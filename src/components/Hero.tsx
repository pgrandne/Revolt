'use client';

import { motion } from "framer-motion";
import { isMobile } from 'mobile-device-detect';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from "next/link";
import Image from "next/image";
import bgPic from "../../public/journalist.jpg"
import { useEffect, useState } from "react";
import { Noto_Sans_New_Tai_Lue } from "next/font/google";


const Hero = () => {
    const [wallet, setWallet] = useState(false)

    const handleEthereum = () => {
        const { ethereum } = window;
        if (ethereum && ethereum.isMetaMask) {
            console.log('Ethereum successfully detected!');
            setWallet(true)
            // Access the decentralized web!
        }
    }

    useEffect(() => {
        if (window.ethereum) {
            handleEthereum();
        } else {
            window.addEventListener('ethereum#initialized', handleEthereum, {
                once: true,
            });

            // If the event is not dispatched by the end of the timeout,
            // the user probably doesn't have MetaMask installed.
            setTimeout(handleEthereum, 3000); // 3 seconds
        }

    }, [])

    return (
        <section className="flex justify-center h-screen w-screen">
            {wallet &&
                <div className="absolute top-3 right-3">
                    <ConnectButton chainStatus="none" showBalance={false} />
                </div>
            }
            <div className="my-auto relative">
                <motion.div
                    className="p-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 3, duration: 3 }}
                >
                    <Image
                        className="rounded-md border-4 border-white"
                        src={bgPic}
                        alt="Picture of materials"
                    />
                </motion.div>
                <div className="absolute top-6 sm:top-36 h-full w-full">
                    <motion.h1
                        className="text-center text-2xl sm:text-7xl"
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', delay: 1, duration: 1.1 }}
                    >
                        Revolte
                    </motion.h1>
                    <motion.p
                        className="text-center pb-4 sm:pb-12"
                        initial={{ opacity: 0, y: 250 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', delay: 2, duration: 1.1 }}
                    >
                        Story of a whistleblower
                    </ motion.p>
                    <Link href={isMobile ? "/mobile" : "/chapter1/scene1"} className="grid mx-auto place-content-center">
                        <motion.div
                            initial={{ opacity: 0, y: 250 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', delay: 3, duration: 3 }}
                        >
                            <motion.button
                                className="btnHero"
                                whileHover={{ rotate: 7, scale: 1.5, transition: { duration: 0.1 } }}
                            >
                                Enter the adventure
                            </motion.button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section >
    )
}

export default Hero;

function useeffect(arg0: () => void) {
    throw new Error("Function not implemented.");
}
