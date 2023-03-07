'use client';

import { motion } from "framer-motion"
import { useState } from 'react'
import Sequence from './Sequence'
import Telegram from "./Telegram";
import SignInButton from "@/components/SigninButton";

const Chap2s1 = () => {
    const [telegramWindow, setTelegramWindow] = useState(false)
    const [stage, setStage] = useState(0)
    const [state, setState] = useState<{
        address?: string
        error?: Error
        loading?: boolean
    }>({})

    return (
        <div className="flex flex-row">
            <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-1/6" />
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence setTelegramWindow={setTelegramWindow} telegramWindow={telegramWindow} />
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                {telegramWindow &&
                    <Telegram stage={stage} setStage={setStage} />
                }
            </div>
            {
                stage === 5 &&
                <motion.div
                    className="fixed bottom-8 right-[33%] animate-pulse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <SignInButton
                        onSuccess={({ address }) => setState((x) => ({ ...x, address }))}
                        onError={({ error }) => setState((x) => ({ ...x, error }))}
                    />
                </motion.div>
            }
        </div>
    )
}

export default Chap2s1