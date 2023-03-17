'use client';

import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react";

export const AzadChoices = ({ stage, setStage, azadText, setAzadText, choice1, choice2, delay, duration }: {
    stage: number
    setStage: Dispatch<SetStateAction<number>>
    azadText: string[]
    setAzadText: Dispatch<SetStateAction<string[]>>
    choice1: string
    choice2: string
    delay: number
    duration: number
}) => {
    return (
        <motion.div
            className="grid grid-cols-2 gap-4 justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay, duration: duration }}
        >
            <button
                className="p-2 text-sm bg-lime-200 hover:bg-lime-300 rounded-lg text-slate-900 border-4 border-lime-300"
                onClick={() => {
                    setStage(stage + 1)
                    setAzadText([...azadText, choice1])
                }}
            >
                {choice1}
            </button>
            <button
                className="p-2 text-sm bg-lime-200 hover:bg-lime-300 rounded-lg text-slate-900 border-4 border-lime-300"
                onClick={() => {
                    setStage(stage + 1)
                    setAzadText([...azadText, choice2])
                }}
            >
                {choice2}
            </button>
        </motion.div>
    )
}
