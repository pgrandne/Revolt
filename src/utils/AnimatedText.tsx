'use client';

import { satisfy } from "@/app/font";
import { motion } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
    const words = text.split("")
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
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
            className="text-white mx-auto"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) =>
                <motion.span
                    className={satisfy.className}
                    key={index}
                    variants={child}
                >
                    {word}
                </motion.span>
            )}
        </motion.div>
    )
}


export default AnimatedText;