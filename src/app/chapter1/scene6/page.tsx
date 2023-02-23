'use client';

import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import Image from "next/image";
import tvPic from "./img/tv.png"
import journalPic from "./img/manreadjournal.png"
import AnimatedText from '@/components/AnimatedText';
import ArrowButton from "@/components/ArrowButton";
import Telegram from "./Telegram";

const Chap1s6 = () => {
    const [telegramWindow, setTelegramWindow] = useState(false)
    const [stage, setStage] = useState(0)
    const narration = "October 31, 2023"
    const narration2 = "Government announces the end of cash"
    const [discussionWindow, setDiscussionWindow] = useState(true)

    console.log(stage)

    return (
        <>
            {stage === 0 &&
                <div className="w-screen h-screen py-[5%]">
                    <div className="flex flex-col justify-center my-auto">
                        <motion.div
                            className="pr-[40%]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <Image
                                className="object-contain"
                                src={tvPic}
                                alt="tv"
                            />
                        </motion.div>
                        <AnimatedText size="text-2xl" content={narration} speed={0.1} delay={2.5} />
                        <AnimatedText size="text-4xl" content={narration2} speed={0.1} delay={4} />
                        <motion.div
                            className="absolute bottom-0 right-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 0.8 }}
                        >
                            <Image
                                className="object-contain"
                                src={journalPic}
                                alt="journal"
                            />
                        </motion.div>
                    </div >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                    >
                        <button
                            className="absolute bottom-8 right-8 animate-pulse"
                            onClick={() => setStage(1)}
                        >
                            <ArrowButton />
                        </button>
                    </motion.div>
                </div>
            }
            {
                stage > 0 &&
                <div className="flex flex-row">
                    <div className="relative basis-2/3 w-full overflow-hidden">
                        <Sequence discussionWindow={discussionWindow} setTelegramWindow={setTelegramWindow} telegramWindow={telegramWindow} />
                        {stage === 12 &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3, duration: 1 }}
                            >
                                <Link href="/chapter1/scene7" className="absolute bottom-8 right-8 animate-pulse">
                                    <ArrowButton />
                                </Link>
                            </motion.div>
                        }
                    </div>
                    <div className="basis-1/3 p-6 h-screen flex-grow-0">
                        {discussionWindow &&
                            <Discussion stage={stage} setStage={setStage} />
                        }
                        {telegramWindow &&
                            <Telegram stage={stage} setStage={setStage} />
                        }
                    </div>
                    {
                        stage === 4 && discussionWindow &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <button
                                className="absolute bottom-8 right-8 animate-pulse"
                                onClick={() => setDiscussionWindow(false)}
                            >
                                <ArrowButton />
                            </button>
                        </motion.div>
                    }
                </div>
            }
        </>
    )
}

export default Chap1s6