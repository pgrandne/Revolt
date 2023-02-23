'use client';

import { perm_marker } from '@/utils/font';
import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import Image from "next/image";
import lockerPic from "./img/locker.png"
import pickupPic from "./img/pickup2.png"
import AnimatedText from '@/components/AnimatedText';
import ArrowButton from "@/components/ArrowButton";

const Chap1s5 = () => {
    const [lockerOpened, setLockerOpened] = useState(false)
    const [stage, setStage] = useState(0)
    const narration = "Central Street"
    const hour = "5:47 pm"

    return (
        <>
            {!lockerOpened &&
                <div className={`${perm_marker.className} relative flex justify-center w-screen h-screen my-auto`}>
                    <motion.div
                        className="absolute top-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5, duration: 1 }}
                    >
                        <Image
                            className="w-screen h-screen"
                            src={lockerPic}
                            alt="Locker"
                        />
                    </motion.div>
                    <div className="p-1 absolute bottom-20 left-20 flex flex-col">
                        <AnimatedText size="text-4xl" content={narration} speed={0.1} delay={5} />
                        <AnimatedText size="text-2xl" content={hour} speed={0.1} delay={7} />
                    </div>
                    <motion.div
                        className="absolute bottom-[17%] right-[7%]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 9, duration: 0.8 }}
                    >
                        <Image
                            className="object-contain h-[360px] w-full border-8 border-[#dac8bc] animate-pulse cursor-pointer"
                            onClick={() => setLockerOpened(true)}
                            src={pickupPic}
                            alt="Pickup"
                        />
                    </motion.div>
                </div >
            }
            {lockerOpened &&
                <div className="flex flex-row">
                    <div className="relative basis-2/3 w-full overflow-hidden">
                        <Sequence stage={stage} />
                    </div>
                    <div className="basis-1/3 p-6 h-screen flex-grow-0">
                        <Discussion stage={stage} setStage={setStage} />
                    </div>
                </div>

            }
            {stage === 3 &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <Link href="/construction" className="absolute bottom-8 right-8 animate-pulse">
                        <ArrowButton />
                    </Link>
                </motion.div>
            }
        </>
    )
}




export default Chap1s5