'use client';

import { motion } from "framer-motion"
import { scene2Choices } from "@/utils/story"
import { Dispatch, SetStateAction } from "react";

const AzadChoices = ({ stage, setStage, azadText, setAzadText, index, delay, duration }: {
    stage: number,
    setStage: Dispatch<SetStateAction<number>>,
    azadText: string[],
    setAzadText: Dispatch<SetStateAction<string[]>>,
    index: number
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
                className="p-2 text-sm bg-lime-200 hover:bg-lime-400 rounded-lg text-slate-900 border-4 border-lime-400"
                onClick={() => {
                    setStage(stage + 1)
                    setAzadText([...azadText, scene2Choices[index].choice1])
                }}
            >
                {scene2Choices[index].choice1}
            </button>
            <button
                className="p-2 text-sm bg-lime-200 hover:bg-lime-400 rounded-lg text-slate-900 border-4 border-lime-400"
                onClick={() => {
                    setStage(stage + 1)
                    setAzadText([...azadText, scene2Choices[index].choice2])
                }}
            >
                {scene2Choices[index].choice2}
            </button>
        </motion.div>
    )
}

export default AzadChoices