'use client';

import { motion } from "framer-motion";

const AnimatedInfo = (
    { content }: {
        content: string,
    }) => {
    const words = content.split("")
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            transition: { staggerChildren: 0.03, delayChildren: 0.03 * i },
        })
    }

    const child = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: "spring",
            }
        }
    }

    return (
        <motion.div
            className="bg-green-500 p-1 text-2xl text-white"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) =>
                <motion.p
                    key={index}
                    variants={child}
                >
                    {word}
                </motion.p>
            )}

        </motion.div >
    )
}


export default AnimatedInfo;