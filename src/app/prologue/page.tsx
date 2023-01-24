'use client';

import AnimatedText from "@/utils/AnimatedText";
import { useState } from 'react'

import { perm_marker } from '../font';

const Prologue = () => {
    const [stage, setStage] = useState(0)
    return (
        <section>
            <div className="w-screen h-screen">
                {stage < 5 && <div>
                    <div className="m-3">
                        <AnimatedText
                            stage={stage}
                            setStage={setStage}
                            text="Hi mr Azad, a trustworthy person gave me our email address. I'm looking for an investigative reporter. Are you the right person?"
                            textBtn1="Yes"
                            textBtn2="No"
                        />
                    </div>

                    {stage > 0 && <div className="m-3">
                        <AnimatedText
                            stage={stage}
                            setStage={setStage}
                            text="You have a reputation for integrity and never giving up, do you?"
                            textBtn1="Yes"
                            textBtn2="No"
                        />
                    </div>}

                    {stage > 1 && <div className="m-3">
                        <AnimatedText
                            stage={stage}
                            setStage={setStage}
                            text="OK, I recovered compromising documents about someone very important! I can't tell you much more at this time, I will contact you soon. Be very carreful this state scandal cost me my life"
                            textBtn1='What do you mean by "cost your life"?'
                            textBtn2="You scare me now, let's end our discussion here" />
                    </div>}

                    {stage > 2 && <div className="m-3">
                        <AnimatedText
                            stage={stage}
                            setStage={setStage}
                            text="Because of this info, they persecuted my whole family, they closed my bank account, and I am enemy number 1 to kill, I can only keep hidden"
                            textBtn1='Who are "they"?'
                            textBtn2="I don't want to be mixed up in this" />
                    </div>}

                    {stage > 3 && <div className="m-3">
                        <AnimatedText
                            stage={stage}
                            setStage={setStage}
                            text="It's too early and too risky to talk about this with you, I have to go, I will contact you soon"
                            textBtn1="OK Bye!"
                            textBtn2="No, please do not contact me anymore!" />
                    </div>}
                </div>}
                {stage === 5 && <h1 className={`${perm_marker.className} text-white text-center pt-52 pb-2 text-5xl`}>
                    End of Chapter 1
                </h1>}
            </div>

        </section >
    )
}

export default Prologue;