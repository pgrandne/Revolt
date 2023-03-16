'use client';

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { scene4, scene4Choices } from '@/lib/utils/story'
import ExternalDiscussion from "./ExternalDiscussion";
import TelegramChoices from "@/app/components/TelegramChoices";
import AzadDiscussion from "@/app/components/AzadDiscussion";
import TelegramSkeleton from "./TelegramSkeleton";

let messageEnd: HTMLElement | null

const Telegram = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const scene = scene4
    const [azadText, setAzadText] = useState<string[]>([])
    useEffect(() => {
        if (typeof document !== "undefined") {
            messageEnd = document.getElementById("end")
        }
        if (messageEnd !== null) {
            messageEnd.scrollIntoView({ behavior: "smooth" })
        }

    }, [stage])

    return (
        <motion.div
            className="flex w-full h-full overflow-hidden antialiased rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            <div className="relative flex flex-col flex-1 bg-zinc-300">
                <TelegramSkeleton />
                <div className="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
                    <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                        <div className="relative flex flex-col px-3 py-2 m-auto">
                            <div className="self-center px-2 py-1 mx-0 my-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">October 30</div>
                            <div className="w-3/4 my-1">
                                <div className="my-1 p-2 bg-white rounded-t-lg rounded-r-lg shadow">
                                    <div className="text-sm text-black">
                                        {scene4[0]}
                                    </div>
                                </div>
                            </div>
                            <ExternalDiscussion scene={scene} index={1} firstText={true} telegramWindow={true} />

                            {stage > 0 &&
                                <>
                                    <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.2} />
                                    <ExternalDiscussion scene={scene} index={2} firstText={true} telegramWindow={true} />
                                    <ExternalDiscussion scene={scene} index={3} firstText={true} telegramWindow={true} />

                                </>
                            }
                            {stage > 1 &&
                                <>
                                    <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.2} />
                                    <ExternalDiscussion scene={scene} index={3} firstText={true} telegramWindow={true} />
                                    <ExternalDiscussion scene={scene} index={4} telegramWindow={true} />
                                </>
                            }
                            {stage > 2 &&
                                <>
                                    <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.2} />
                                    <ExternalDiscussion scene={scene} index={5} firstText={true} telegramWindow={true} />
                                </>
                            }
                            {stage > 3 &&
                                <>
                                    <AzadDiscussion azadText={azadText[3]} delay={0.2} duration={0.2} />
                                </>
                            }
                            <div id="end" />
                        </div>
                    </div>
                    {stage === 0 &&
                        <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene4Choices[0]} />
                    }
                    {stage === 1 &&
                        <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene4Choices[1]} />
                    }
                    {stage === 2 &&
                        <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene4Choices[2]} />
                    }
                    {stage === 3 &&
                        <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene4Choices[3]} />
                    }
                </div>
            </div>
        </motion.div >

    )
}

export default Telegram;