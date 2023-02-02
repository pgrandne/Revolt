'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import bgPic from "../../public/journalist.jpeg"

const Hero = () => {
    const tVariant = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', delay: 0.5 } },
    }

    const pVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', delay: 1 } },
    }

    const bVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', delay: 1.5 } },
    }

    const iVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.4, transition: { delay: 2.5, duration: 2 } },
    }

    return (
        <section className="container m-auto">
            <motion.div
                className="container mt-40"
                initial="hidden"
                animate="visible"
                variants={iVariant}
            >
                <Image
                    className="mx-auto rounded-md border-4 border-white"
                    src={bgPic}
                    alt="Picture of materials"
                />
            </motion.div>

            <motion.h1
                className="text-center pb-4 -mt-56 text-5xl"
                initial="hidden"
                animate="visible"
                variants={tVariant}
            >
                Revolte
            </motion.h1>
            <motion.p
                className="text-center pb-12"
                initial="hidden"
                animate="visible"
                variants={pVariant}
            >
                Story of a whistleblower
            </ motion.p>
            <Link href="/prologue" className="grid mx-auto place-content-center">
                <motion.button
                    className="btnHero"
                    initial="hidden"
                    animate="visible"
                    variants={bVariant}
                    whileHover={{ rotate: 12, scale: 1.5 }}
                >
                    Enter the adventure
                </motion.button>
            </Link>
        </section >
    )
}

export default Hero; 