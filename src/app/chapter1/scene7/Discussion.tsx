'use client';

import { useState } from "react"
import ExternalDiscussion from '@/components/ExternalDiscussion';
import AzadDiscussion from '@/components/AzadDiscussion';
import AzadChoices from '@/components/AzadChoices';
import { scene7, scene7Choices } from '@/utils/story'
import { Dispatch, SetStateAction } from "react";

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])

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
                            <ExternalDiscussion text={scene7[3]} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[4]} name="Skyler" delay={5} telegramWindow={false} />
                        </>}
                        {stage > 2 && <>
                            <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene7[5]} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[6]} name="Skyler" delay={5} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[7]} name="Skyler" delay={8} telegramWindow={false} />
                        </>}
                        {stage > 3 && <>
                            <AzadDiscussion azadText={azadText[3]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene7[8]} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[9]} name="Skyler" delay={5} telegramWindow={false} />
                            <ExternalDiscussion text={scene7[10]} name="Skyler" delay={8} telegramWindow={false} />
                        </>}
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[0]} delay={11} duration={.5} />
                    }
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[1]} delay={8} duration={.5} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[2]} delay={5.8} duration={.5} />
                    }
                    {stage === 3 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene7Choices[3]} delay={5.8} duration={.5} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;