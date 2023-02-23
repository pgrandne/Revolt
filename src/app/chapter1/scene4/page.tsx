'use client';

import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import Telegram from './Telegram'
import Image from "next/image";
import journalPic from "./img/journal.png"
import AnimatedText from '@/components/AnimatedText';
import ArrowButton from "@/components/ArrowButton";

const Chap1s4 = () => {
    const [stage, setStage] = useState(0)
    const [telegramWindow, setTelegramWindow] = useState(false)
    const narration = "October 30, 2023"

    return (
        <div className="flex flex-row">
            <div className="absolute h-screen w-screen flex-flex-col p-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ delay: 1, duration: 6, times: [0, 0.2, 0.8, 1] }}
                >
                    <div className="w-[55%] m-auto">
                        <Image
                            className="object-contain"
                            src={journalPic}
                            alt="journal"
                        />
                    </div>
                    <AnimatedText size={"text-2xl"} content={narration} speed={0.08} delay={2.5} />
                </motion.div>
            </div>
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence stage={stage} telegramWindow={telegramWindow} setTelegramWindow={setTelegramWindow} />
                {stage === 5 &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                    >
                        <button
                            className="absolute bottom-8 right-8 animate-pulse"
                            onClick={() => setStage(6)}
                        >
                            <ArrowButton />
                        </button>
                    </motion.div>
                }
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                {telegramWindow && stage < 6 &&
                    < Telegram stage={stage} setStage={setStage} />
                }
                {stage > 5 &&
                    <Discussion stage={stage} setStage={setStage} />

                }
            </div>
            {
                stage === 9 &&
                < motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <Link href="/construction" className="absolute bottom-8 right-8 animate-pulse">
                        <ArrowButton />
                    </Link>
                </motion.div>
            }
        </div >
    )
}




export default Chap1s4