'use client';

import { perm_marker } from '@/utils/font';
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import lurembergPic from "./img/luremberg2.jpg"
import tassePic from "./img/tasse.png"
import kiosquePic from "./img/kiosque.png"
import journalPic from "./img/journal.png"
import { textAnimation, child } from "@/utils/animatedText"

const Intro = () => {
    const text = "Lurenberg, Listenbourg"
    const day = "September 21, 2023"

    return (
        <div className={`${perm_marker.className} relative flex justify-center w-screen h-screen my-auto`}>
            <div className="my-auto">
                <motion.h1
                    className="text-center text-5xl"
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 0.8, duration: 1 }}
                >
                    Chapter 1
                </motion.h1>
                <motion.p
                    className="text-center"
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 1.5, duration: 1 }}
                >
                    Nothing can be taken for granted
                </ motion.p>
            </div>
            <motion.div
                className="absolute top-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
            >
                <Image
                    className="w-screen h-screen"
                    src={lurembergPic}
                    alt="Luremberg"
                />
            </motion.div>
            <div className="p-1 absolute bottom-20 left-20 flex flex-col">
                <motion.div
                    className="text-4xl"
                    variants={textAnimation(0.1, 5)}
                    initial="hidden"
                    animate="visible"
                >
                    {text.split("").map((word, index) =>
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
                    className="text-3xl"
                    variants={textAnimation(0.1, 7)}
                    initial="hidden"
                    animate="visible"
                >
                    {day.split("").map((word, index) =>
                        <motion.span
                            className={perm_marker.className}
                            key={index}
                            variants={child}
                        >
                            {word}
                        </motion.span>
                    )}
                </motion.div>
            </div>
            <motion.div
                className="absolute top-20 left-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 9.2, duration: 0.8 }}
            >
                <Image
                    className="w-[500px] h-[300px] rounded border-4 border-amber-200"
                    src={tassePic}
                    alt="tasse"
                />
            </motion.div>
            <motion.div
                className="absolute bottom-36 right-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 11, duration: 0.8 }}
            >
                <Image
                    className="w-[500px] h-[300px] rounded border-4 border-amber-200"
                    src={kiosquePic}
                    alt="Kiosque"
                />
            </motion.div>
            <motion.div
                className="absolute h-screen w-screen bg-[#0f1216]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 13, duration: 1 }}
            >
                <Image
                    src={journalPic}
                    fill={true}
                    style={{ objectFit: "contain" }}
                    alt="journal"
                />
                <Link href="/chapter1/scene2" className="absolute bottom-8 right-8 animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            </motion.div>

        </div>
    )
}

export default Intro;