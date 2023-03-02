'use client'

import { motion } from "framer-motion";
import { perm_marker } from "@/utils/font";

const Browser = () => {
    const text = "Revolte uses Metamask wallet which is not accessible on Safari and Internet Explorer. Please use Brave, Chrome, Edge, Firefox or Opera"
    const words = text.split("")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.03 * i },

        })
    }

    const sentence = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
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
        <motion.div className="flex h-screen justify-center" >
            <motion.div
                className="text-white my-auto p-3"
                variants={sentence}
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
            </motion.div >
        </motion.div >
    )
}

export default Browser;