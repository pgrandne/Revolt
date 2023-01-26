'use client';

import { satisfy } from "@/app/font";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from "react";

const AnimatedText = (
    { textBtn1, textBtn2, stage, setStage, text }: {
        textBtn1: string,
        textBtn2: string,
        stage: number,
        setStage: Dispatch<SetStateAction<number>>,
        text: string
    }) => {
    const router = useRouter();
    const [modal, setModal] = useState(false)
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
        <>
            <motion.div
                className="text-white"
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
                <motion.div
                    className={satisfy.className}
                    variants={child}
                >
                    <button
                        className="bg-white text-gray-800 hover:bg-red-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded m-3"
                        onClick={() => setStage(stage + 1)}
                    >
                        {textBtn1}
                    </button>
                    <button
                        className="bg-white text-gray-800 hover:bg-red-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded m-3"
                        onClick={() => {
                            alert("You have stopped the adventure")
                            router.push('/')
                        }
                        }
                    >
                        {textBtn2}
                    </button>
                </motion.div>
            </motion.div >




        </>
    )
}


export default AnimatedText;