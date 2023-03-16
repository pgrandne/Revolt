'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedText from '@/app/components/AnimatedText';
import phonePic from "@/public/img/onthephone.png"
import takeawayPic from "@/public/img/takeaway2.png"
import paymentPic from "@/public/img/payment.png"
import refusedPic from "@/public/img/refused.png"
import cashPic from "@/public/img/cash2.png"
import decorPic from "@/public/img/decor2.png"
import friendsPic from "@/public/img/friends3.png"
import ArrowButton from "@/app/components/ArrowButton";
import { Dispatch, SetStateAction } from "react";

const Sequence = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>> }) => {
    const narration = "Powell Boulevard"
    const hour = "7:50 pm"
    const narration2 = "Skyler's place"
    const hour2 = "8:24 pm"

    return (
        <div className="relative flex justify-center h-screen py-[5%]">
            {stage < 4 &&
                <>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}>
                        <div className="flex justify-end pl-[28%] pt-[5%] pb-[5%]">
                            <Image className="object-contain" src={phonePic} alt="Azad" />
                        </div>
                    </motion.div>
                    {/* <div className="absolute bottom-20 pl-6 pt-2 z-10">
                        <AnimatedText size={"text-xl"} content={narration} speed={0.08} delay={3} />
                        <AnimatedText size={"text-base"} content={hour} speed={0.08} delay={3.5} />
                    </div> */}
                    {stage > 0 &&
                        <motion.div
                            className="flex pr-[35%] pb-[5%] -z-10"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}>
                            <Image className="object-contain" src={takeawayPic} alt="Takeaway" />
                        </motion.div>
                    }
                </>
            }
            {stage > 2 && stage < 5 &&
                <>
                    <motion.div
                        className="absolute h-screen w-screen bg-[#0f1216]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        < motion.div
                            className="absolute flex h-full "
                            initial={{ x: 0, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2, duration: 2 }}>
                            <div className="flex justify-end pr-[0%] pt-[0%] pb-[0%]">
                                <Image className="object-contain" src={paymentPic} alt="Payment" />
                            </div>
                        </motion.div>
                        < motion.div
                            className="absolute flex h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.5, duration: 0.5 }}>
                            <div className="flex justify-end pl-[0%] pt-[0%] pb-[53%]">
                                <Image className="object-contain" src={refusedPic} alt="Rejected" />
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            }
            {stage === 4 &&
                < motion.div
                    className="absolute flex h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}>
                    <div className="flex justify-end pl-[50%] pt-[0%] pb-[57%]">
                        <Image className="object-contain" src={refusedPic} alt="Rejected" />
                    </div>
                </motion.div>
            }
            {stage === 5 &&
                <>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}>
                        <div className="flex justify-end pl-[0%] pt-[10%] pb-[10%]">
                            <Image className="object-contain" src={cashPic} alt="Cash" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.5, duration: 1 }}
                    >
                        <button
                            className="absolute bottom-8 right-8 animate-pulse"
                            onClick={() => setStage(6)}
                        >
                            <ArrowButton />
                        </button>
                    </motion.div>
                </>
            }
            <div className="relative flex justify-center flex-col">
                {
                    stage > 5 &&
                    <>
                        <motion.div
                            className="flex pr-[48%]"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}>
                            <Image className="object-contain" src={decorPic} alt="decor" priority={true} />
                        </motion.div>
                        <div className="pl-6 pt-2 z-10">
                            <AnimatedText size={"text-xl"} content={narration2} speed={0.08} delay={3.5} />
                            <AnimatedText size={"text-base"} content={hour2} speed={0.08} delay={5.2} />
                        </div>
                        <motion.div
                            className="absolute bottom-0 right-0 flex h-full"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.7, duration: 1.5 }}>
                            <div className="flex justify-end pl-[32%] pt-[13%] pb-[0%]">
                                <Image className="object-contain" src={friendsPic} alt="friends" />
                            </div>
                        </motion.div>
                    </>
                }
            </div >

        </div >
    )
}

export default Sequence;