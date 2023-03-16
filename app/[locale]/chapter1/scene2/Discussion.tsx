'use client';

import { useState } from "react"
import ExternalDiscussion from '@/app/components/ExternalDiscussion';
import AzadDiscussion from '@/app/components/AzadDiscussion';
import AzadChoices from '@/app/components/AzadChoices';
import { scene2, scene2Choices } from '@/lib/utils/story'
import { Dispatch, SetStateAction } from "react";

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])

    return (
        <div className="flex w-full h-full">
            <div className="relative flex flex-col flex-1">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        <ExternalDiscussion text={scene2[0]} name="Skyler" delay={8} telegramWindow={false} />
                        {stage > 0 && <>
                            <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene2[1]} name="Skyler" delay={2} telegramWindow={false} />
                        </>}
                        {stage > 1 && <>
                            <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene2[2]} name="Skyler" delay={2} telegramWindow={false} />
                        </>}
                        {stage > 2 && <>
                            <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                        </>}
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene2Choices[0]} delay={10.2} duration={.5} />
                    }
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene2Choices[1]} delay={5.8} duration={.5} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene2Choices[2]} delay={6.8} duration={.5} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;