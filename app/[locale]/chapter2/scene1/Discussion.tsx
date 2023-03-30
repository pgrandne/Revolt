'use client';

import { useEffect, useState, Dispatch, SetStateAction } from "react"
import { AzadChoices, AzadDiscussion, ExternalDiscussion } from '@/app/components'
import { scene6 } from '@/lib/utils/story'
import { useTranslations } from 'next-intl';

let messageEnd: HTMLElement | null


const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap2s1');
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
                            <ExternalDiscussion text={scene6[0]} name="Skyler" delay={8} telegramWindow={false} />
                        </div>
                        {stage > 1 && <>
                            <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene6[1]} name="Skyler" delay={2} telegramWindow={false} />
                        </>}
                        {stage > 2 && <>
                            <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={scene6[2]} name="Skyler" delay={1.8} telegramWindow={false} />
                        </>}
                        {stage > 3 && <>
                            <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                        </>}
                        <div id="end" />
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c1.choice1')} choice2={t('choices.c1.choice2')} delay={12} duration={.5} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c2.choice1')} choice2={t('choices.c2.choice2')} delay={4.5} duration={.5} />
                    }
                    {stage === 3 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c3.choice1')} choice2={t('choices.c3.choice2')} delay={5.8} duration={.5} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;