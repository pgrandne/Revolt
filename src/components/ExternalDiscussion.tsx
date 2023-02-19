'use client';

import { motion } from "framer-motion"
import { child, textAnimation } from "@/utils/animatedText"
import { scene2 } from "@/utils/story"

const ExternalDiscussion = ({ index, name, delay, duration, textDelay }: {
    index: number,
    name: string,
    delay: number,
    duration: number,
    textDelay: number,
}) => {
    const words = scene2[index].split("")

    return (

        <div className="w-3/4 my-1">
            <motion.div
                className="my-2 p-2 bg-slate-100 rounded-t-lg rounded-r-lg shadow shadow-slate-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay, duration: duration }}
            >
                <div className="text-xs text-slate-600">{name}</div>
                <motion.div
                    className="text-sm text-slate-900"
                    variants={textAnimation(0.03, textDelay)}
                    initial="hidden"
                    animate="visible"
                >
                    {words.map((word, index) =>
                        <motion.span
                            key={index}
                            variants={child}
                        >
                            {word}
                        </motion.span>
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ExternalDiscussion;