'use client';

import { useState } from "react"
import ExternalDiscussion from '@/components/ExternalDiscussion';
import AzadDiscussion from '@/components/AzadDiscussion';
import AzadChoices from '@/components/AzadChoices';
import { scene4, scene4Choices } from '@/utils/story'
import { Dispatch, SetStateAction } from "react";

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])

    return (
        <div className="flex w-full h-full">
            <div className="relative flex flex-col flex-1">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        <div>
                            <ExternalDiscussion text={scene4[6]} name="Skyler" delay={7} telegramWindow={false} />
                        </div>
                        {stage > 6 && <>
                            <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene4[7]} name="Skyler" delay={2} telegramWindow={false} />
                        </>}
                        {stage > 7 && <>
                            <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene4[8]} name="Skyler" delay={1.5} telegramWindow={false} />
                        </>}
                        {stage > 8 && <>
                            <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                        </>}
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 6 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene4Choices[5]} delay={9} duration={.5} />
                    }
                    {stage === 7 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene4Choices[6]} delay={6} duration={.5} />
                    }
                    {stage === 8 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene4Choices[7]} delay={3} duration={.5} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;