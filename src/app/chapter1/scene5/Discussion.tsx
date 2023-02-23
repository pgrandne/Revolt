'use client';

import { useState } from "react"
import ExternalDiscussion from '@/components/ExternalDiscussion';
import AzadDiscussion from '@/components/AzadDiscussion';
import AzadChoices from '@/components/AzadChoices';
import { scene5, scene5Choices } from '@/utils/story'
import { Dispatch, SetStateAction } from "react";

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])

    return (
        <div className="flex w-full h-full">
            <div className="relative flex flex-col flex-1">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        <div>
                            <ExternalDiscussion text={scene5[0]} name="Cashier" delay={4} telegramWindow={false} />
                        </div>
                        {stage > 0 && <>
                            <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene5[1]} name="Cashier" delay={5} telegramWindow={false} />
                        </>}
                        {stage > 1 && <>
                            <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene5[2]} name="Cashier" delay={3} telegramWindow={false} />
                        </>}
                        {stage > 2 && <>
                            <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                        </>}
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene5Choices[0]} delay={6} duration={.5} />
                    }
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene5Choices[1]} delay={6} duration={.5} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choices={scene5Choices[2]} delay={3} duration={.5} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;