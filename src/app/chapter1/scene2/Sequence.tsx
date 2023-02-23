'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedText from '@/components/AnimatedText';
import { Dispatch, SetStateAction } from "react";
import redactionPic from "@/components/img/redaction.jpg"
import chatPic from "@/components/img/chat.png"
import manPic from "./img/azad-desk.png"
import notifPic from "./img/notif.png"

const Sequence = ({ discussionWindow, setTelegramWindow, telegramWindow }: {
    discussionWindow: boolean,
    setTelegramWindow: Dispatch<SetStateAction<boolean>>
    telegramWindow: boolean,
}) => {
    const narration = "The Lerenberg Post, Newsroom"
    const hour1 = "8:53 am"
    const hour2 = "2:44 pm"

    return (
        <div className="relative flex flex-col justify-center h-screen py-[5%]">
            <motion.div
                className="flex pr-[35%]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.5 }}>
                <Image className="object-contain" src={redactionPic} alt="redaction" />
            </motion.div>
            <div className="pl-6 pt-2 z-10">
                <AnimatedText size={"text-xl"} content={narration} speed={0.08} delay={2} />
                {discussionWindow &&
                    <AnimatedText size={"text-base"} content={hour1} speed={0.08} delay={5} />
                }
                {!discussionWindow &&
                    <AnimatedText size={"text-base"} content={hour2} speed={0.08} delay={1} />
                }
            </div>
            {discussionWindow &&
                < motion.div
                    className="absolute bottom-0 right-0 flex h-full"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 6, duration: 1.5 }}>
                    <div className="flex justify-end pl-[10%] pt-[25%] pb-[15%]">
                        <Image className="object-contain" src={chatPic} alt="chat" />
                    </div>
                </motion.div>
            }
            {!discussionWindow &&
                <>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 3, duration: 1.5 }}>
                        <div className="flex justify-end pl-[40%] pt-[20%] pb-[0%]">
                            <Image className="object-contain" src={manPic} alt="Azad" />
                        </div>
                    </motion.div>
                    {!telegramWindow &&
                        < motion.div
                            className="absolute top-0 right-0 flex h-full"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 5.5, duration: 1.5 }}>
                            <div className="flex pl-[59%] pt-[15%] pb-[47%]">
                                <Image
                                    className="object-contain cursor-pointer animate-pulse"
                                    src={notifPic}
                                    alt="notification"
                                    onClick={() => setTelegramWindow(true)}
                                />
                            </div>
                        </motion.div>}
                </>
            }
        </div >
    )
}

export default Sequence;