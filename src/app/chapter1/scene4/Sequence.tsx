'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedText from '@/components/AnimatedText';
import redactionPic from "@/components/img/redaction.jpg"
import azadPic from "./img/azadDesk.png"
import telegramPic from "./img/telegram.png"
import { Dispatch, SetStateAction } from "react";

const Sequence = ({ telegramWindow, setTelegramWindow }: {
    telegramWindow: boolean
    setTelegramWindow: Dispatch<SetStateAction<boolean>>
}) => {
    const narration = "The Lerenberg Post, Newsroom"
    const hour = "11:10 am"

    return (
        <div className="relative flex flex-col justify-center h-screen py-[5%]">
            <motion.div
                className="flex pr-[35%]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 6.5, duration: 1.5 }}>
                <Image className="object-contain" src={redactionPic} alt="redaction" />
            </motion.div>
            <div className="pl-2 z-10">
                <AnimatedText size={"text-xl"} content={narration} speed={0.08} delay={8} />
                <AnimatedText size={"text-base"} content={hour} speed={0.08} delay={10} />
            </div>
            < motion.div
                className="absolute bottom-0 right-0 flex h-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 9, duration: 1.5 }}>
                <div className="flex justify-end pl-[40%] pt-[15%] pb-[5%]">
                    <Image className="object-contain" src={azadPic} alt="Azad" />
                </div>
            </motion.div>
            {!telegramWindow &&
                < motion.div
                    className="absolute top-0 right-0 flex h-full"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 11, duration: 1.5 }}>
                    <div className="flex pl-[75%] pt-[10%] pb-[80%]">
                        <Image
                            className="object-contain cursor-pointer animate-pulse"
                            src={telegramPic}
                            alt="notification"
                            onClick={() => setTelegramWindow(true)}
                        />
                    </div>
                </motion.div>
            }
        </div >
    )
}

export default Sequence;