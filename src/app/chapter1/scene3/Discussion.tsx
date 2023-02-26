'use client';

import { useEffect, useState } from "react"
import ExternalDiscussion from '@/components/ExternalDiscussion';
import AzadDiscussion from '@/components/AzadDiscussion';
import AzadChoices from '@/components/AzadChoices';
import { scene3, scene3Choices } from '@/utils/story'
import { Dispatch, SetStateAction } from "react";

let messageEnd: HTMLElement | null

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>> }) => {
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
                        {stage < 6 &&
                            <>
                                <ExternalDiscussion text={scene3[0]} name="Skyler" delay={2} telegramWindow={false} />
                                {stage > 0 && <>
                                    <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion text={scene3[1]} name="Cashier" delay={2} telegramWindow={false} />
                                </>}
                                {stage > 1 && <>
                                    <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion text={scene3[2]} name="Cashier" delay={2} telegramWindow={false} />
                                </>}
                                {stage > 2 && <>
                                    <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion text={scene3[3]} name="Cashier" delay={2} telegramWindow={false} />
                                </>}
                                {stage > 3 && <>
                                    <AzadDiscussion azadText={azadText[3]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion text={scene3[4]} name="Cashier" delay={2} telegramWindow={false} />
                                </>}
                                {stage > 4 && <>
                                    <AzadDiscussion azadText={azadText[4]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion text={scene3[5]} name="Cashier" delay={2} telegramWindow={false} />
                                </>}
                            </>
                        }
                        {stage > 5 &&
                            <>
                                <ExternalDiscussion text={scene3[6]} name="Skyler" delay={7.2} telegramWindow={false} />
                                <ExternalDiscussion text={scene3[7]} name="Rob" delay={10.5} telegramWindow={false} />
                                <ExternalDiscussion text={scene3[8]} name="Jessy" delay={17.5} telegramWindow={false} />
                                {stage > 6 && <>
                                    <AzadDiscussion azadText={azadText[5]} delay={1} duration={0.7} />
                                    <ExternalDiscussion text={scene3[9]} name="Skyler" delay={2.5} telegramWindow={false} />
                                </>}
                                {stage > 7 &&
                                    <AzadDiscussion azadText={azadText[6]} delay={1} duration={0.7} />
                                }
                            </>
                        }
                        <div id="end" />
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene3Choices[0]} delay={7} duration={.5} />
                    }
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene3Choices[1]} delay={4} duration={.5} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene3Choices[2]} delay={4} duration={.5} />
                    }
                    {stage === 3 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene3Choices[3]} delay={4} duration={.5} />
                    }
                    {stage === 4 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene3Choices[4]} delay={6} duration={.5} />
                    }
                    {stage === 6 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene3Choices[5]} delay={19} duration={.5} />
                    }
                    {stage === 7 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene3Choices[6]} delay={4} duration={.5} />
                    }

                </div>
            </div>
        </div >
    )
}

export default Discussion;