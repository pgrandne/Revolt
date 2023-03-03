'use client';

import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import ArrowButton from "@/components/ArrowButton";

const Chap1s7 = () => {
    const [stage, setStage] = useState(0)

    return (
        <div className="flex flex-row">
            {true &&
                <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-11/12" />
            }
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence />
                {
                    stage === 9 &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        <Link href="/chapter2" className="absolute bottom-8 right-8 animate-pulse">
                            <ArrowButton />
                        </Link>
                    </motion.div>
                }
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                <Discussion stage={stage} setStage={setStage} />
            </div>
        </div >
    )
}

export default Chap1s7