'use client';

import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react";

interface IChoices {
    choice1: string,
    choice2: string
}

const AzadChoices = ({ stage, setStage, azadText, setAzadText, choices, delay, duration }: {
    stage: number,
    setStage: Dispatch<SetStateAction<number>>,
    azadText: string[],
    setAzadText: Dispatch<SetStateAction<string[]>>,
    choices: IChoices,
    delay: number,
    duration: number,
}) => {
    return (
        <motion.div
            className="grid grid-cols-2 gap-4 justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay, duration: duration }}
        >
            <button
                className="p-2 text-sm bg-lime-200 hover:bg-lime-400 rounded-lg border-2 text-slate-900 border-4 border-lime-400"
                onClick={() => {
                    setStage(stage + 1)
                    setAzadText([...azadText, choices.choice1])
                }}
            >
                {choices.choice1}
            </button>
            <button
                className="p-2 text-sm bg-lime-200 hover:bg-lime-300 rounded-lg text-slate-900 border-4 border-lime-300"
                onClick={() => {
                    setStage(stage + 1)
                    setAzadText([...azadText, choices.choice2])
                }}
            >
                {choices.choice2}
            </button>
        </motion.div>
    )
}

export default AzadChoices;