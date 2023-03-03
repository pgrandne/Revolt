'use client';

import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import Image from "next/image";
import tvPic from "@/img/tv.png"
import journalPic from "@/img/manreadjournal.png"
import AnimatedText from '@/components/AnimatedText';
import ArrowButton from "@/components/ArrowButton";
import Telegram from "./Telegram";

const Chap1s6 = () => {
    const [telegramWindow, setTelegramWindow] = useState(false)
    const [stage, setStage] = useState(0)
    const narration = "October 31, 2023"
    const narration2 = "Government announces the end of cash"
    const [discussionWindow, setDiscussionWindow] = useState(true)

    return (
        <>
            {stage === 0 &&
                <div className="relative overflow-hidden flex justify-center w-screen h-screen my-auto">
                    <motion.div
                        className="flex justify-center py-[0%]"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <Image className="object-contain" src={tvPic} alt="TV" />
                    </motion.div>
                    <div className="pt-10 pl-6 z-10">
                        <AnimatedText size="text-2xl" content={narration} speed={0.05} delay={5} />
                        <div className="pt-3">
                            <AnimatedText size="text-3xl" content={narration2} speed={0.05} delay={7} />
                        </div>
                    </div>
                    <div className="absolute flex flex-col right-0">
                        < motion.div
                            className="flex h-full pb-[5%]"
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2, duration: 2 }}>
                            <div className="flex justify-end pl-[0%] pb-[0%] pt-[30%]">
                                <Image className="object-contain" src={journalPic} alt="Journal" />
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 10, duration: 1 }}
                    >
                        <button
                            className="absolute bottom-8 right-[33%] animate-pulse"
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
                    {stage < 5 &&
                        <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-9/12" />
                    }
                    {stage > 4 &&
                        <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-10/12" />
                    }
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
                        {
                            stage === 10 &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 5, duration: 1 }}
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