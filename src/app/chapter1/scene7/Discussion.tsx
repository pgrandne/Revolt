'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import ExternalDiscussion from '@/components/ExternalDiscussion';
import AzadDiscussion from '@/components/AzadDiscussion';
import AzadChoices from '@/components/AzadChoices';
import { scene7, scene7Choices } from '@/utils/story'
import ExternalDiscussionLink from "./ExternalDiscussionLink";

let messageEnd: HTMLElement | null

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
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
        <div className="flex w-full h-full">
            <div className="relative flex flex-col flex-1">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        <div>
                            <ExternalDiscussion text={scene7[0]} name="Skyler" delay={8} telegramWindow={false} />
                        </div>
                        {stage > 0 && <>
                            <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene7[1]} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[2]} name="Skyler" delay={5} telegramWindow={false} />
                        </>}
                        {stage > 1 && <>
                            <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene7[3]} name="Skyler" delay={4.5} telegramWindow={false} />
                        </>}
                        {stage > 2 && <>
                            <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene7[4]} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[5]} name="Skyler" delay={10.6} telegramWindow={false} />
                        </>}
                        {stage > 3 && <>
                            <AzadDiscussion azadText={azadText[3]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene7[6]} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[7]} name="Skyler" delay={8} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[8]} name="Skyler" delay={13} telegramWindow={false} />
                        </>}
                        {stage > 4 && <>
                            <AzadDiscussion azadText={azadText[4]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene7[9]} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[10]} name="Skyler" delay={7} telegramWindow={false} />
                        </>}
                        {stage > 5 && <>
                            <AzadDiscussion azadText={azadText[5]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene7[11]} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[12]} name="Skyler" delay={8} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[13]} name="Skyler" delay={12} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[14]} name="Skyler" delay={18} telegramWindow={false} />
                        </>}
                        {stage > 6 && <>
                            <AzadDiscussion azadText={azadText[6]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene7[15]} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[16]} name="Skyler" delay={5} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[17]} name="Skyler" delay={10} telegramWindow={false} />
                        </>}
                        {stage > 7 && <>
                            <AzadDiscussion azadText={azadText[7]} delay={0.2} duration={0.7} />
                            <ExternalDiscussionLink name="Skyler" delay={1.2} />
                            <ExternalDiscussion text={scene7[18]} name="Skyler" delay={3} telegramWindow={false} />
                        </>}
                        <div id="end" />
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[0]} delay={18} duration={.5} />
                    }
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[1]} delay={11.5} duration={.5} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[2]} delay={14} duration={.5} />
                    }
                    {stage === 3 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[3]} delay={14.6} duration={.5} />
                    }
                    {stage === 4 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[4]} delay={17} duration={.5} />
                    }
                    {stage === 5 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[5]} delay={10} duration={.5} />
                    }
                    {stage === 6 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[6]} delay={23} duration={.5} />
                    }
                    {stage === 7 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[7]} delay={14} duration={.5} />
                    }
                    {stage === 8 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[8]} delay={6} duration={.5} />
                    }

                </div>
            </div>
        </div >
    )
}

export default Discussion;