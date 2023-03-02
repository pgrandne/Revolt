'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedText from '@/components/AnimatedText';
import redactionPic from "@/img/newsroom1.png"
import azadPic from "@/img/azad-desk.png"
import skylerPic from "@/img/skylerDesk.png"
import notifPic from "@/img/notif.png"
import chatPic from "@/img/chat.png"
import { Dispatch, SetStateAction } from "react";

const Sequence = ({ stage, telegramWindow, setTelegramWindow }: {
    stage: number,
    telegramWindow: boolean
    setTelegramWindow: Dispatch<SetStateAction<boolean>>
}) => {
    const narration = "The Lerenberg Post, Newsroom"
    const narration2 = "The Lerenberg Post, Skyler's office"
    const hour = "11:10 am"
    const hour2 = "4:55 pm"

    return (
        <div className="relative flex flex-col justify-center h-screen py-[5%]">
            {stage < 6 &&
                <>
                    <motion.div
                        className="flex pr-[35%]"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 9.5, duration: 1 }}>
                        <Image className="object-contain" src={redactionPic} alt="redaction" />
                    </motion.div>
                    <div className="pl-6 pt-2 z-10">
                        <AnimatedText size={"text-xl"} content={narration} speed={0.08} delay={11.5} />
                        <AnimatedText size={"text-base"} content={hour} speed={0.08} delay={14.5} />
                    </div>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 16, duration: 1.5 }}>
                        <div className="flex justify-end pl-[45%] pt-[15%] pb-[5%]">
                            <Image className="object-contain" src={azadPic} alt="Azad" />
                        </div>
                    </motion.div>
                    {!telegramWindow &&
                        < motion.div
                            className="absolute top-0 right-0 flex h-full"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 18, duration: 1.5 }}>
                            <div className="flex pl-[70%] pt-[11%] pb-[51%]">
                                <Image
                                    className="object-contain cursor-pointer animate-pulse"
                                    src={notifPic}
                                    alt="notification"
                                    onClick={() => setTelegramWindow(true)}
                                />
                            </div>
                        </motion.div>
                    }
                </>
            }
            {stage > 5 &&
                <>
                    <motion.div

                        className="flex pr-[37%]"

                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}>
                        <Image className="object-contain" src={skylerPic} alt="skyler office" />
                    </motion.div>
                    <div className="pl-6 pt-2 z-10">
                        <AnimatedText size={"text-xl"} content={narration2} speed={0.08} delay={3.5} />
                        {/* <AnimatedText size={"text-base"} content={hour2} speed={0.08} delay={5} /> */}
                    </div>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 5, duration: 1.5 }}>
                        <div className="flex justify-end pl-[15%] pt-[15%] pb-[5%]">
                            <Image className="object-contain" src={chatPic} alt="Azad" />
                        </div>
                    </motion.div>
                </>
            }




        </div >
    )
}

export default Sequence;