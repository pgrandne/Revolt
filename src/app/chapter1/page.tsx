'use client';

import { perm_marker } from '@/utils/font';
import { motion } from "framer-motion"
import Image from "next/image"
import Modal from "@/components/Modal";
import lurembergPic from "./img/luremberg2.jpg"

const Chapter1 = () => {
    const tVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
    }

    const pVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 1 } },
    }

    return (
        <div className={`${perm_marker.className} relative flex justify-center w-screen h-screen my-auto`}>
            <motion.div
                className="my-auto"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, times: [.9] }}
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
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 5, times: [.5, 1] }}
            >
                <Image
                    className="w-screen h-screen"
                    src={lurembergPic}
                    alt="Luremberg"
                />
            </motion.div>
        </div>
    )
}

export default Chapter1;