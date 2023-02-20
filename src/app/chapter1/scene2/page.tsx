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
    const narration = "The Lerenberg Post, Newsroom"
    const hour1 = "8:53 am"
    const hour2 = "2:44 pm"
    const [stage, setStage] = useState(3)
    const [discussionWindow, setDiscussionWindow] = useState(false)
    const [telegramWindow, setTelegramWindow] = useState(true)

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
                    <motion.div
                        className="pl-1 text-xl"
                        variants={textAnimation(0.08, 2)}
                        initial="hidden"
                        animate="visible"
                    >
                        {narration.split("").map((word, index) =>
                            <motion.span
                                className={perm_marker.className}
                                key={index}
                                variants={child}
                            >
                                {word}
                            </motion.span>
                        )}
                    </motion.div>
                    {discussionWindow &&
                        <motion.div
                            className="pl-1 text-xl"
                            variants={textAnimation(0.1, 4)}
                            initial="hidden"
                            animate="visible"
                        >
                            {hour1.split("").map((word, index) =>
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
                            {hour2.split("").map((word, index) =>
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
                            transition={{ delay: 5.2, duration: 1 }}
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
                                transition={{ delay: 2, duration: 1 }}
                            >
                                <Image
                                    className="w-[400px] h-[280px]"
                                    src={manPic}
                                    alt="Azad"
                                />
                            </motion.div>
                            {!telegramWindow &&
                                <motion.div
                                    className="absolute top-20 right-12 shadow-xl shadow-white"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 3.5, duration: 1 }}
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

                </motion.div >
                {stage === 4 &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <Link href="/construction" className="absolute bottom-8 right-8 animate-pulse box">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </motion.div>
            }
        </div >
    )
}


export default Chap1s2