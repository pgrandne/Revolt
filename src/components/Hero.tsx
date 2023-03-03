'use client';

import { motion } from "framer-motion";
import { isMobile, isSafari, isIE } from 'react-device-detect';
import Link from "next/link";
import Image from "next/image";
import bgPic from "@/img/equipment.jpg"
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { handleEthereum } from "./checkWallet";

const Hero = () => {
    const [wallet, setWallet] = useState(false)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setWallet(handleEthereum());
    }, [])

    return (
        <section className="flex justify-center h-screen w-screen">
            {/* <select className="absolute top-3 left-3 appearance-none">
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
            </select> */}
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
                <div className="absolute top-0 pt-6 sm:pt-36 h-full w-full overflow-hidden">
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
                    <Link href={isMobile ? "/mobile" : (isSafari || isIE ? "/browser" : "/chapter1/scene1")} className="grid mx-auto place-content-center">
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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                onClick={() => { setModal(true) }}
            >
                <div className="fixed bottom-3 left-3 flex">

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fixed bottom-3 right-3 w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>

            </motion.div>
            {
                modal &&
                <Modal setModal={setModal} />
            }
        </section >
    )
}

export default Hero;
