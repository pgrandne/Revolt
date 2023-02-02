'use client';

import { perm_marker } from '@/utils/font';
import AnimatedText from "@/components/AnimatedText"
import { useState } from "react"
import { Howl } from 'howler';
import { chapterOneStory } from "@/utils/constant"
import { motion } from "framer-motion"
import Image from "next/image"
import listenbourgPic from "../../../public/lurenberg1.jpg"
import newsroomPic from "../../../public/redaction.jpg"
import computerPic from "../../../public/journaliste3.png"
import screenPic from "../../../public/computer-screen.jpg"
import Modal from "@/components/Modal";

const Prologue = () => {
    const [stage, setStage] = useState(0)
    const [modal, setModal] = useState(true)

    console.log(stage)

    const sound = new Howl({
        src: ['office.mp3']
    });

    const handleClick = () => {
        setModal(false)
        const timer = setTimeout(() => {
            sound.play()
        }, 5000);
    }

    return (
        <>
            {modal && <Modal handleClick={handleClick} />}
            {!modal && <div className="case">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 5, times: [0, .4, .8, 1] }}
                >
                    <Image
                        className="bgCase"
                        src={listenbourgPic}
                        alt="Listenbourg"
                        width={800}
                        height={600}
                    />
                    <div className="recitative w-72">
                        Listenbourg, Lurenberg,<br />  Monday, October 30, 2023, 9:43 am
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1, 0] }}
                    transition={{ duration: 10, times: [0, .5, .7, .9, 1] }}
                >
                    <Image
                        className="bgCase"
                        src={newsroomPic}
                        alt="Newsroom"
                        width={800}
                        height={600}
                    />
                    <div className="recitative w-64">
                        Kanalerde Times, Newsroom
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1, 0] }}
                    transition={{ duration: 15, times: [0, .7, .8, .9, 1] }}
                >
                    <Image
                        className="bgCase"
                        src={computerPic}
                        alt="Computer"
                        width={800}
                        height={600}
                    />
                </motion.div>
                {stage < 6 && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1,] }}
                    transition={{ duration: 15, times: [0, .8, 1] }}
                >
                    <Image
                        className="bgCase -z-10"
                        src={screenPic}
                        alt="Computer Screen"
                        width={800}
                        height={600}
                    />
                    {stage === 0 &&
                        <div className="grid grid-cols-1 gap-4 place-items-center">
                            <p className="w-72 mt-64 mb-12 text-center">You have a message, click to open it</p>
                            <div className="flex">
                                <button className=" bg-white p-4 rounded-full text-black hover:scale-105 hover:bg-slate-400"
                                    onClick={() => setStage(1)}>Read the message</button>
                                <span className="relative top-0 right-4 inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative top-0 right-7 animate-ping inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </div>
                        </div>
                    }
                    {stage !== 0 &&
                        <ul className="absolute top-4 left-4">
                            {chapterOneStory.filter(paragraph => paragraph.id < stage).map((paragraph) => (
                                <li key={paragraph.id}>
                                    <AnimatedText
                                        stage={stage}
                                        setStage={setStage}
                                        content={paragraph}
                                    />
                                </li>

                            ))}

                        </ul>}
                </motion.div>}
                {stage === 6 &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 5 }}
                    >
                        <Image
                            className="bgCase -z-10"
                            src={newsroomPic}
                            alt="Newsroom"
                            width={800}
                            height={600}

                        />
                        <div className={`${perm_marker.className} absolute bg-red-800 top-4 left-4 p-2 text-3xl`}>
                            continuation under construction
                        </div>
                    </motion.div>



                }
            </div >
            }
        </>
    )
}

export default Prologue;