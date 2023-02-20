'use client';

import { perm_marker } from '@/utils/font';
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import { useState } from 'react';
import redactionPic from "./img/redaction.jpg"
import discussionPic from "./img/discussion.png"
import manPic from "./img/man-desk.png"
import notifPic from "./img/notif.png"
import { child, textAnimation } from "@/utils/animatedText"
import Discussion from '@/components/Discussion';
import Telegram from '@/components/Telegram';

const Chap1s2 = () => {
    const narration1 = "The Lerenberg Post, Newsroom, 8:53 am"
    const narration2 = "The Lerenberg Post, Newsroom, 11:24 am"
    const [write, setWrite] = useState(false)
    const [stage, setStage] = useState(0)
    const [discussionWindow, setDiscussionWindow] = useState(true)
    const [telegramWindow, setTelegramWindow] = useState(false)

    return (
        <div className="flex flex-row">
            <div className="basis-2/3 h-screen flex relative">
                <motion.div
                    className="grid grid-cols-1 my-auto pr-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                >
                    <Image
                        className="w-[600px] h-[400px]"
                        src={redactionPic}
                        priority={true}
                        alt="redaction"
                    />
                    <>
                        {discussionWindow &&
                            <motion.div
                                className="pl-1 text-xl"
                                variants={textAnimation(0.1, 2)}
                                initial="hidden"
                                animate="visible"
                            >
                                {narration1.split("").map((word, index) =>
                                    <motion.span
                                        className={perm_marker.className}
                                        key={index}
                                        variants={child}
                                    >
                                        {word}
                                    </motion.span>
                                )}
                            </motion.div>
                        }
                        {!discussionWindow &&
                            <motion.div
                                className="pl-1 text-xl"
                                variants={textAnimation(0.1, 0.5)}
                                initial="hidden"
                                animate="visible"
                            >
                                {narration2.split("").map((word, index) =>
                                    <motion.span
                                        className={perm_marker.className}
                                        key={index}
                                        variants={child}
                                    >
                                        {word}
                                    </motion.span>
                                )}
                            </motion.div>
                        }
                        {discussionWindow &&
                            <motion.div
                                className="absolute bottom-28 right-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 6, duration: 1 }}
                            >
                                <Image
                                    className="w-[280px] h-[320px]"
                                    src={discussionPic}
                                    alt="discussion"
                                />
                            </motion.div>
                        }
                        {!discussionWindow &&
                            <>
                                <motion.div
                                    className="absolute bottom-16 right-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 5, duration: 1 }}
                                >
                                    <Image
                                        className="w-[400px] h-[280px]"
                                        src={manPic}
                                        alt="Azad"
                                    />
                                </motion.div>
                                {!telegramWindow &&
                                    <motion.div
                                        className="absolute top-20 right-12"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 6.5, duration: 1 }}
                                    >
                                        <Image
                                            className="w-[200px] h-[100px] cursor-pointer animate-pulse"
                                            src={notifPic}
                                            alt="notification"
                                            onClick={() => setTelegramWindow(true)}
                                        />
                                    </motion.div>
                                }

                            </>
                        }
                    </>
                </motion.div >
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                {discussionWindow &&
                    <Discussion stage={stage} setStage={setStage} />
                }
                {telegramWindow &&
                    <Telegram stage={stage} setStage={setStage} />
                }
            </div>
            {stage === 3 && discussionWindow &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <button
                        className="absolute bottom-8 right-8"
                        onClick={() => setDiscussionWindow(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </motion.div>
            }
        </div >
    )
}


export default Chap1s2