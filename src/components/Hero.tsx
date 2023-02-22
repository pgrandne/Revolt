'use client';

import { motion } from "framer-motion";
import { isMobile } from 'mobile-device-detect';
import Link from "next/link";
import Image from "next/image";
import bgPic from "../../public/journalist.jpg"

const Hero = () => {

    const tVariant = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', delay: 1 } },
    }

    const pVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', delay: 2 } },
    }

    const bVariant = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { delay: 3 } },
    }

    const iVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.4, transition: { delay: 3, duration: 3 } },
    }

    return (
        <section className="flex justify-center h-screen w-screen">
            <div className="my-auto relative">
                <motion.div
                    className="p-2"
                    initial="hidden"
                    animate="visible"
                    variants={iVariant}
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
                        initial="hidden"
                        animate="visible"
                        variants={tVariant}
                    >
                        Revolte
                    </motion.h1>
                    <motion.p
                        className="text-center pb-4 sm:pb-12"
                        initial="hidden"
                        animate="visible"
                        variants={pVariant}
                    >
                        Story of a whistleblower
                    </ motion.p>
                    <Link href={isMobile ? "/mobile" : "/chapter1/scene1"} className="grid mx-auto place-content-center">
                        <motion.button
                            className="btnHero"
                            initial="hidden"
                            animate="visible"
                            variants={bVariant}
                            whileHover={{ rotate: 7, scale: 1.5, transition: { duration: 0.1 } }}
                        >
                            Enter the adventure
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section >
    )
}

export default Hero; 