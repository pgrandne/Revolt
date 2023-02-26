'use client';

import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import Image from "next/image";
import lockerPic from "./img/locker.png"
import pickupPic from "./img/pickup2.png"
import classifiedPic from "./img/classified.png"
import documentPic from "./img/classified-document.png"
import backPic from './img/azadback.png'
import AnimatedText from '@/components/AnimatedText';
import ArrowButton from "@/components/ArrowButton";

const Chap1s5 = () => {
    const [lockerOpened, setLockerOpened] = useState(false)
    const [stage, setStage] = useState(0)
    const narration = "Central Street Station"
    const hour = "5:40 pm"
    const narration2 = "Azad's place"
    const hour2 = "7:56 pm"

    return (
        <>
            {!lockerOpened &&
                <div className="relative flex justify-center w-screen h-screen my-auto">
                    <motion.div
                        className="absolute top-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.7, duration: 1.5 }}
                    >
                        <Image
                            className="w-screen h-screen"
                            src={lockerPic}
                            alt="Locker"
                        />
                    </motion.div>

                    <div className="p-1 absolute bottom-14 left-20 flex flex-col">
                        <AnimatedText size="text-4xl" content={narration} speed={0.07} delay={0.5} />
                        <AnimatedText size="text-2xl" content={hour} speed={0.1} delay={3} />

                    </div>
                    <motion.div
                        className="absolute bottom-[16%] right-[9%]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 7, duration: 0.8 }}
                    >
                        <Image
                            className="object-contain h-[340px] w-full border-8 border-[#dac8bc] animate-pulse cursor-pointer"
                            onClick={() => setLockerOpened(true)}
                            src={pickupPic}
                            alt="Pickup"
                        />
                    </motion.div>
                </div >
            }

            {lockerOpened &&
                <div className="relative overflow-hidden flex justify-center w-screen h-screen my-auto ">
                    <div className="flex flex-col justify-center pr-[35%]">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2.5, duration: 1 }}
                        >
                            <Image className="object-contain" src={classifiedPic} alt="Classified" />
                        </motion.div>
                        <div className="pl-20 pt-2 z-10">
                            <AnimatedText size={"text-4xl"} content={narration2} speed={0.08} delay={1} />
                            {/* <AnimatedText size={"text-base"} content={hour2} speed={0.08} delay={5} /> */}
                        </div>
                    </div>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: [30, 0, 0, 0], opacity: [0, 1, 1, 0]  }}
                        transition={{ delay: 4.5, duration: 4, times: [0, 0.2, 0.7, 1] }}>
                        <div className="flex justify-end pl-[20%] pb-[10%] pt-[20%] ">
                            <Image className="object-contain" src={backPic} alt="Azad" />
                        </div>
                    </motion.div>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 7.5, duration: 2 }}>
                        <div className="flex justify-end pl-[50%] pb-[5%] pt-[10%]">
                            <Image className="object-contain" src={documentPic} alt="Classified-document" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 9.5, duration: 1 }}
                    >
                        <Link href="/chapter1/scene6" className="absolute bottom-8 right-8 animate-pulse">
                            <ArrowButton />
                        </Link>
                    </motion.div>
                </div>
            }
        </>
    )
}




export default Chap1s5