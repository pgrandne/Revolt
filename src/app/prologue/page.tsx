'use client';

import AnimatedText from "@/components/AnimatedText"
import { useState } from "react"
import { Howl } from 'howler';
import { chapterOneStory } from "@/utils/constant"
import { motion } from "framer-motion"
import Image from "next/image"
import listenbourgPic from "../../../public/city.png"
import newsroomPic from "../../../public/newsroom.png"
import computerPic from "../../../public/computer.png"
import screenPic from "../../../public/computer-screen.jpg"
import Modal from "@/components/Modal";

const Prologue = () => {
    const [stage, setStage] = useState(0)
    const [modal, setModal] = useState(true)

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
            {
                !modal && <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 5, times: [0, .4, .8, 1] }}
                    >
                        <Image
                            src={listenbourgPic}
                            alt="Listenbourg"
                            fill={true}
                            className="-z-10"
                        />
                        <div className="m-3 p-3 fixed w-72 bg-amber-600 rounded border border-black z-10 opacity-50">
                            Listenbourg, Lurenberg,<br />  Monday, October 30, 2023, 9:43 am
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1, 1, 0] }}
                        transition={{ duration: 10, times: [0, .5, .7, .9, 1] }}
                    >
                        <Image
                            src={newsroomPic}
                            alt="Newsroom"
                            fill={true}
                            className="-z-10"
                        />
                        <div className="m-3 p-3 fixed w-64 bg-amber-600 rounded border border-black z-10 opacity-70">
                            Kanalerde Times, Newsroom
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1, 1, 0] }}
                        transition={{ duration: 15, times: [0, .7, .8, .9, 1] }}
                    >
                        <Image
                            src={computerPic}
                            alt="Computer"
                            fill={true}
                            className="-z-10"
                        />
                    </motion.div>
                    {stage < 6 && <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1,] }}
                        transition={{ duration: 15, times: [0, .75, 1] }}
                    >
                        <Image
                            src={screenPic}
                            alt="Computer Screen"
                            fill={true}
                            className="-z-10"
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
                            <ul className="m-10">
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
                    {stage === 6 && <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 5, times: [0, .4, .8, 1] }}
                    >
                        <Image
                            src={newsroomPic}
                            alt="Newsroom"
                            fill={true}
                            className="-z-10"
                        />
                    </motion.div>}
                </>
            }
        </>
    )
}

export default Prologue;