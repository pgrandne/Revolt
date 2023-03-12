'use client';

import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from 'react'
import Sequence from './Sequence'
import Telegram from './Telegram'
import Discussion from './Discussion'
import Image from "next/image";
import journalPic from "@/img/journal30oct.png"
import AnimatedText from '@/components/AnimatedText';
import ArrowButton from "@/components/ArrowButton";

const Chap1s4 = () => {
    const [stage, setStage] = useState(0)
    const [telegramWindow, setTelegramWindow] = useState(false)
    const narration = "October 30, 2023"

    return (
        <div className="flex flex-row">
            {stage < 5 &&
                <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-6/12" />
            }
            {stage > 5 &&
                <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-7/12" />
            }
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence stage={stage} telegramWindow={telegramWindow} setTelegramWindow={setTelegramWindow} />
                {stage === 4 &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
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
                    <Link href="/chapter1/scene5" className="absolute bottom-8 right-8 animate-pulse">
                        <ArrowButton />
                    </Link>
                </motion.div>
            }
        </div >
    )
}




export default Chap1s4