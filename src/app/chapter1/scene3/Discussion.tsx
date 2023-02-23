'use client';

import { useState } from "react"
import ExternalDiscussion from '@/components/ExternalDiscussion';
import AzadDiscussion from '@/components/AzadDiscussion';
import AzadChoices from '@/components/AzadChoices';
import { scene3, scene3Choices } from '@/utils/story'
import { Dispatch, SetStateAction } from "react";

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])

    return (
        <div className="flex w-full h-full">
            <div className="relative flex flex-col flex-1">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        <ExternalDiscussion text={scene3[0]} name="Skyler" delay={7.2} telegramWindow={false} />
                        <ExternalDiscussion text={scene3[1]} name="Rob" delay={10.5} telegramWindow={false} />
                        <ExternalDiscussion text={scene3[2]} name="Jessy" delay={17.5} telegramWindow={false} />
                        {stage > 0 && <>
                            <AzadDiscussion azadText={azadText[0]} delay={1} duration={0.7} />
                            <ExternalDiscussion text={scene3[3]} name="Skyler" delay={2.5} telegramWindow={false} />
                        </>}
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene3Choices[0]} delay={21} duration={.5} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;