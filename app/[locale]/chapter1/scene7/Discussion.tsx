'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { AzadChoices, AzadDiscussion, ExternalDiscussion } from '@/app/components';
import { useTranslations } from 'next-intl';
import ExternalDiscussionLink from "./ExternalDiscussionLink";

let messageEnd: HTMLElement | null

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap1s7');
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
                            <ExternalDiscussion text={t('dialogue.d1')} name="Skyler" delay={8} telegramWindow={false} />
                        </div>
                        {stage > 0 && <>
                            <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={t('dialogue.d2')} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={t('dialogue.d3')} name="Skyler" delay={5} telegramWindow={false} />
                        </>}
                        {stage > 1 && <>
                            <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={t('dialogue.d4')} name="Skyler" delay={4.5} telegramWindow={false} />
                        </>}
                        {stage > 2 && <>
                            <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={t('dialogue.d5')} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={t('dialogue.d6')} name="Skyler" delay={10.6} telegramWindow={false} />
                        </>}
                        {stage > 3 && <>
                            <AzadDiscussion azadText={azadText[3]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={t('dialogue.d7')} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={t('dialogue.d8')} name="Skyler" delay={8} telegramWindow={false} />
                            <ExternalDiscussion text={t('dialogue.d9')} name="Skyler" delay={13} telegramWindow={false} />
                        </>}
                        {stage > 4 && <>
                            <AzadDiscussion azadText={azadText[4]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={t('dialogue.d10')} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={t('dialogue.d11')} name="Skyler" delay={7} telegramWindow={false} />
                        </>}
                        {stage > 5 && <>
                            <AzadDiscussion azadText={azadText[5]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={t('dialogue.d12')} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={t('dialogue.d13')} name="Skyler" delay={8} telegramWindow={false} />
                            <ExternalDiscussion text={t('dialogue.d14')} name="Skyler" delay={12} telegramWindow={false} />
                            <ExternalDiscussion text={t('dialogue.d15')} name="Skyler" delay={18} telegramWindow={false} />
                        </>}
                        {stage > 6 && <>
                            <AzadDiscussion azadText={azadText[6]} delay={0.2} duration={0.7} />
                            <ExternalDiscussion text={t('dialogue.d16')} name="Skyler" delay={2} telegramWindow={false} />
                            <ExternalDiscussion text={t('dialogue.d17')} name="Skyler" delay={5} telegramWindow={false} />
                            <ExternalDiscussion text={t('dialogue.d18')} name="Skyler" delay={10} telegramWindow={false} />
                        </>}
                        {stage > 7 && <>
                            <AzadDiscussion azadText={azadText[7]} delay={0.2} duration={0.7} />
                            <ExternalDiscussionLink name="Skyler" delay={1.2} text1={t('text1')} text2={t('text2')} />
                            <ExternalDiscussion text={t('dialogue.d19')} name="Skyler" delay={3} telegramWindow={false} />
                        </>}
                        {stage > 8 && <>
                            <AzadDiscussion azadText={azadText[8]} delay={0.2} duration={0.7} />
                        </>}
                        <div id="end" />
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c1.choice1')} choice2={t('choices.c1.choice2')} delay={18} duration={.5} />
                    }
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c2.choice1')} choice2={t('choices.c2.choice2')} delay={11.5} duration={.5} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c3.choice1')} choice2={t('choices.c3.choice2')} delay={14} duration={.5} />
                    }
                    {stage === 3 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c4.choice1')} choice2={t('choices.c4.choice2')} delay={14.6} duration={.5} />
                    }
                    {stage === 4 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c5.choice1')} choice2={t('choices.c5.choice2')} delay={17} duration={.5} />
                    }
                    {stage === 5 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c6.choice1')} choice2={t('choices.c6.choice2')} delay={10} duration={.5} />
                    }
                    {stage === 6 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c7.choice1')} choice2={t('choices.c7.choice2')} delay={23} duration={.5} />
                    }
                    {stage === 7 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c8.choice1')} choice2={t('choices.c8.choice2')} delay={14} duration={.5} />
                    }
                    {stage === 8 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c9.choice1')} choice2={t('choices.c9.choice2')} delay={8} duration={.5} />
                    }

                </div>
            </div>
        </div >
    )
}

export default Discussion;