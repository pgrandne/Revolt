'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

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

    return (
        <section>
            <motion.h1
                className="text-white text-center pt-52 pb-2 text-5xl"
                initial="hidden"
                animate="visible"
                variants={tVariant}
            >
                Revolte
            </motion.h1>
            <motion.p
                className="text-white text-center pb-20"
                initial="hidden"
                animate="visible"
                variants={pVariant}
            >
                Story of a whistleblower
            </ motion.p>
            <Link href="/prologue" className="grid mx-auto place-content-center">
                <motion.button
                    className="bg-white text-gray-800 hover:bg-red-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    initial="hidden"
                    animate="visible"
                    variants={bVariant}
                    whileHover={{ rotate: 180, scale: 2 }}
                >
                    Enter the adventure
                </motion.button>
            </Link>
        </section >
    )
}

export default Hero; 