'use client';

import { perm_marker } from '@/utils/font';
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import { useState } from 'react';
import redactionPic from "../scene2/img/redaction.jpg"
import discussionPic from "../scene2/img/discussion.png"
import { child, textAnimation } from "@/utils/animatedText"
import Discussion from './Discussion';

const Chap1s4 = () => {
    const narration = "dsfd"
    const words = narration.split("")
    const [telegramWindow, setTelegramWindow] = useState(false)
    const [write, setWrite] = useState(false)
    const [stage, setStage] = useState(0)
    const [azadText, setAzadText] = useState<string[]>([])

    return (
        <div className="flex flex-row">
            <div className="basis-2/3 h-screen flex relative">
                <div className="grid grid-cols-1 my-auto pr-1">
                    <Image
                        className="w-[700px] h-[400px]"
                        src={redactionPic}
                        priority
                        alt="redaction"
                    />
                    <motion.div
                        className="pl-1 text-xl"
                        variants={textAnimation(0.1, 2)}
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
                        className="absolute bottom-28 right-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 6, duration: 1 }}
                    >
                        <Image
                            className="w-[280px] h-[320px]"
                            src={discussionPic}
                            alt="discussion"
                        />
                    </motion.div>
                    {!telegramWindow &&
                        <motion.div
                            className="absolute bottom-36 right-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 8, duration: 1 }}
                        >
                            <button
                                className="bg-green-500 w-[110px] h-[50px] animate-pulse"
                                onClick={() => setTelegramWindow(true)}
                            >Telegram</button>
                        </motion.div>}
                </div >
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                <Discussion stage={stage} setStage={setStage} />
            </div >
        </div>
    )
}


export default Chap1s4