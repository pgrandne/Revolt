'use client';

import { perm_marker } from '@/utils/font';
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import { useState } from 'react';
import redactionPic from "../scene2/img/redaction.jpg"
import discussionPic from "../scene2/img/discussion.png"
import { child, textAnimation } from "@/utils/animatedText"
import ExternalDiscussion from '@/components/ExternalDiscussion';
import AzadDiscussion from '@/components/AzadDiscussion';
import AzadChoices from '@/components/AzadChoices';

const Chap1s3 = () => {
    const narration = "The Lerenberg Post, Newsroom, 11:23 am"
    const words = narration.split("")
    const [write, setWrite] = useState(false)
    const [stage, setStage] = useState(0)
    const [azadText, setAzadText] = useState<string[]>([])

    return (
        <div className="flex flex-row">
            <div className="basis-2/3 h-screen flex relative">
                <div className="grid grid-cols-1 my-auto pr-1">
                    <Image
                        className="w-[700px] h-[400px]"
                        src={redactionPic}
                        priority
                        alt="redaction"
                    />

                    <motion.div
                        className="pl-1 text-xl"
                        variants={textAnimation(0.1, 2)}
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
                        transition={{ delay: 6, duration: 1 }}
                    >
                        <Image
                            className="w-[280px] h-[320px]"
                            src={discussionPic}
                            alt="discussion"
                        />
                    </motion.div>
                </div >
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                <div className="flex w-full h-full">
                    <div className="relative flex flex-col flex-1">
                        <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                            <div className="relative flex flex-col px-3 py-2 m-auto">
                                <ExternalDiscussion index={0} name="Skyler" delay={7.5} duration={1} textDelay={5} />
                                {stage > 0 && <>
                                    <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion index={1} name="Skyler" delay={1} duration={1} textDelay={1} />
                                </>}
                                {stage > 1 && <>
                                    <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion index={2} name="Skyler" delay={1} duration={1} textDelay={1} />
                                </>}
                                {stage > 2 && <>
                                    <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                                </>}
                            </div>
                        </div>
                        <div className="my-1 w-full"
                        >
                            {stage === 0 &&
                                <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} index={0} delay={9} duration={.5} />
                            }
                            {stage === 1 &&
                                <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} index={1} delay={4} duration={.5} />
                            }
                            {stage === 2 &&
                                <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} index={2} delay={4} duration={.5} />
                            }
                            {stage === 3 &&
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 1 }}
                                >
                                    <Link href="/chapter1/scene3" className="absolute bottom-8 right-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Chap1s3