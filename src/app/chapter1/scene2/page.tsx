'use client';

import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import Telegram from '@/components/Telegram'
import ArrowButton from '@/components/ArrowButton';

const Chap1s2 = () => {
    const [stage, setStage] = useState(0)
    const [discussionWindow, setDiscussionWindow] = useState(true)
    const [telegramWindow, setTelegramWindow] = useState(false)

    return (
        <div className="flex flex-row">
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence discussionWindow={discussionWindow} setTelegramWindow={setTelegramWindow} telegramWindow={telegramWindow} />
                {stage === 4 &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                    >
                        <Link href="/chapter1/scene3" className="absolute bottom-8 right-8 animate-pulse">
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
                stage === 3 && discussionWindow &&
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
        </div >
    )
}

export default Chap1s2;