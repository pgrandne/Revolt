'use client';

import { perm_marker } from '@/utils/font';
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import { useState } from 'react';
import redactionPic from "./img/redaction.jpg"
import discussionPic from "./img/discussion.png"
import { child, textAnimation } from "@/utils/animatedText"
import { scene2 } from "@/utils/story"
import { useRouter } from 'next/navigation';

const Chap1s2 = () => {
    const text = "The Lerenberg Post, Newsroom"
    const words = text.split("")
    const [write, setWrite] = useState(false)
    const [stage, setStage] = useState(0)
    const [stage1Text, setStage1Text] = useState("")
    const router = useRouter();

    return (
        <div className="flex flex-row">
            <div className="basis-2/3 h-screen flex relative">
                <motion.div
                    className="grid grid-cols-1 my-auto pr-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Image
                        className="w-[700px] h-[400px]"
                        src={redactionPic}
                        alt="redaction"
                    />

                    <motion.div
                        className="pl-1 text-xl"
                        variants={textAnimation(0.1, 1)}
                        initial="hidden"
                        animate="visible"
                    >
                        {words.map((word, index) =>
                            <motion.span
                                className={perm_marker.className}
                                key={index}
                                variants={child}
                            >
                                {word}
                            </motion.span>
                        )}
                    </motion.div>
                    <motion.div
                        className="absolute bottom-28 right-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4, duration: 1 }}
                    >
                        <Image
                            className="w-[280px] h-[320px]"
                            src={discussionPic}
                            alt="discussion"
                        />
                    </motion.div>
                </motion.div >
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                <div className="flex w-full h-full">
                    <div className="relative flex flex-col flex-1">
                        <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                            <div className="relative flex flex-col px-3 py-2 m-auto">
                                <div className="w-3/4 my-1">
                                    <motion.div
                                        className="my-2 p-2 bg-slate-100 rounded-t-lg rounded-r-lg shadow shadow-slate-100"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 5, duration: 1 }}
                                    >
                                        <div className="text-xs text-slate-600">Estelle</div>
                                        <motion.div
                                            className="text-sm text-slate-900"
                                            variants={textAnimation(0.03, 5)}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {scene2[0].text?.split("").map((word, index) =>
                                                <motion.span
                                                    key={index}
                                                    variants={child}
                                                >
                                                    {word}
                                                </motion.span>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                </div>
                                {stage === 1 && <>
                                    <div className="self-end">
                                        <motion.div
                                            className="my-2 p-2 text-sm bg-lime-200 rounded-t-lg rounded-l-lg shadow text-slate-900 self-end"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.7 }}

                                        >
                                            {stage1Text}
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        className="my-2 p-2 bg-slate-100 rounded-t-lg rounded-r-lg shadow shadow-slate-100"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1, duration: 1 }}
                                    >
                                        <div className="text-xs text-slate-600">Estelle</div>
                                        <motion.div
                                            className="text-sm text-slate-900"
                                            variants={textAnimation(0.03, 1)}
                                            initial="hidden"
                                            animate="visible"
                                        >

                                            {scene2[1].text?.split("").map((word, index) =>
                                                <motion.span
                                                    key={index}
                                                    variants={child}
                                                >
                                                    {word}
                                                </motion.span>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                </>}
                            </div>
                        </div>
                        <motion.div
                            className="my-1 w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6, duration: .5 }}
                        >
                            {stage === 0 && <div className="grid grid-cols-2 gap-4 justify-center mb-8">
                                <button
                                    className="p-2 text-sm bg-lime-200 hover:bg-lime-400 rounded-lg text-slate-900 border-4 border-lime-400"
                                    onClick={() => {
                                        setStage(1)
                                        setStage1Text("Yes it's insane!")
                                    }}
                                >
                                    Yes it&apos;s insane!
                                </button>
                                <button
                                    className="p-2 text-sm bg-lime-200 hover:bg-lime-400 rounded-lg text-slate-900 border-4 border-lime-400"
                                    onClick={() => {
                                        setStage(1)
                                        setStage1Text("What do you mean?")
                                    }}
                                >
                                    What do you mean?
                                </button>
                            </div>}
                        </motion.div>

                        {stage === 1 && <motion.div
                            className="my-1 w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: .5 }}
                        >
                            <div className="grid grid-cols-2 gap-4 justify-center mb-8">
                                <button
                                    className="p-2 text-sm bg-lime-200 hover:bg-lime-400 rounded-lg text-slate-900 border-4 border-lime-400"
                                    onClick={() => {
                                        router.push('/prologue')
                                    }}
                                >
                                    I don&apos;t know!
                                </button>
                                <button
                                    className="p-2 text-sm bg-lime-200 hover:bg-lime-400 rounded-lg text-slate-900 border-4 border-lime-400"
                                    onClick={() => {
                                        router.push('/prologue')
                                    }}
                                >
                                    nothing surprises me anymore
                                </button>
                            </div>
                        </motion.div>}






                    </div>
                </div>
            </div>
        </div >
    )
}


export default Chap1s2