'use client';

import { motion } from "framer-motion"
import { useState } from 'react'
import Sequence from './Sequence'
import Telegram from "./Telegram";
import SaveButton from "@/components/SaveButton";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Modal from "@/components/Modal";
import Recover from "@/components/Recover";

const Chap2s1 = () => {
    const [telegramWindow, setTelegramWindow] = useState(false)
    const [stage, setStage] = useState(0)
    const [modal, setModal] = useState(false)
    const progression = {
        chapter: 2,
        episode: 1,
        scene: 1
    }

    return (
        <div className="flex flex-row">
            <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-1/6" />
            <div className="absolute top-4 left-3 z-30">
                <ConnectButton />
            </div>
            {/* <div className="absolute top-4 left-80 z-30">
                <Recover />
            </div> */}
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence setTelegramWindow={setTelegramWindow} telegramWindow={telegramWindow} />
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                {telegramWindow &&
                    <Telegram stage={stage} setStage={setStage} />
                }
            </div>
            {
                stage === 6 &&
                <motion.div
                    className="fixed bottom-8 right-[33%] animate-pulse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 19, duration: 1 }}
                >
                    <SaveButton
                        setModal={setModal}
                        progression={progression}
                        arrow={true}
                    />
                </motion.div>
            }
            {modal && <Modal route='/construction' />}
        </div>
    )
}

export default Chap2s1