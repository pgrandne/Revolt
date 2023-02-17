'use client';

import { perm_marker } from '@/utils/font';
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import lurembergPic from "./img/luremberg2.jpg"
import tassePic from "./img/tasse.png"
import kiosquePic from "./img/kiosque.png"
import journalPic from "./img/journal.png"


const Chapter1 = () => {
    const tVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
    }

    const pVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 1 } },
    }

    const text = "Lurenberg, Listenbourg"
    const words = text.split("")

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 3 },
        }
    }

    const child = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { type: "spring" }
        }
    }

    return (
        <div className={`${perm_marker.className} relative flex justify-center w-screen h-screen my-auto`}>
            <motion.div
                className="my-auto"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
            >
                <motion.h1
                    className="text-center text-5xl"
                    initial="hidden"
                    animate="visible"
                    variants={tVariant}
                >
                    Chapter 1
                </motion.h1>
                <motion.p
                    className="text-center"
                    initial="hidden"
                    animate="visible"
                    variants={pVariant}
                >
                    Nothing is immutable
                </ motion.p>
            </motion.div>
            <motion.div
                className="absolute top-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 0.6 }}
            >
                <Image
                    className="w-screen h-screen"
                    src={lurembergPic}
                    alt="Luremberg"
                />
            </motion.div>
            <motion.div
                className="box-decoration-slice p-1 absolute bottom-20 left-20 text-4xl"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {words.map((word, index) =>
                    <motion.span
                        className={perm_marker.className}
                        key={index}
                        variants={child}
                    >
                        {word}
                    </motion.span>
                )}
            </motion.div>
            <motion.div
                className="absolute top-20 left-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 0.5 }}
            >
                <Image
                    className="w-[500px] h-[300px] rounded border-4 border-amber-200"
                    src={tassePic}
                    alt="tasse"
                />
            </motion.div>
            <motion.div
                className="absolute bottom-20 right-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 6, duration: 0.5 }}
            >
                <Image
                    className="w-[500px] h-[300px] rounded border-4 border-amber-200"
                    src={kiosquePic}
                    alt="Kiosque"
                />
            </motion.div>

            <motion.div
                className="absolute h-screen w-screen p-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 8, duration: 0.5 }}
            >
                <Image
                    src={journalPic}
                    fill={true}
                    style={{ objectFit: "contain" }}
                    alt="journal"
                />
            </motion.div>
            <motion.div
                className="absolute h-screen w-screen bg-[#0f1216]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 9, duration: 1 }}
            >
                <Image
                    src={journalPic}
                    fill={true}
                    style={{ objectFit: "contain" }}
                    alt="journal"
                />
                <Link href="/prologue" className="absolute bottom-8 right-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            </motion.div>

        </div>
    )
}

export default Chapter1;