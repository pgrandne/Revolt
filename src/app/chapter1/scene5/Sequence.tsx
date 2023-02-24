'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import takeawayPic from "./img/takeaway2.png"
import phonePic from "./img/onthephone.png"
import paymentPic from "./img/payment.png"
import refusedPic from "./img/refused.png"
import cashPic from "./img/cash.png"

const Sequence = ({ stage, }: { stage: number }) => {


    return (
        <div className="relative flex justify-center h-screen py-[5%]">
            {stage < 3 &&
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
                    <motion.div
                        className="flex pr-[35%] pb-[5%]"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 6, duration: 1 }}>
                        <Image className="object-contain" src={takeawayPic} alt="Takeaway" />
                    </motion.div>
                    {stage > 0 && stage < 3 &&
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
                    {stage === 2 &&
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
                </>
            }
                    {stage === 3 &&
                        < motion.div
                            className="absolute bottom-0 right-0 flex h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}>
                            <div className="flex justify-end pl-[0%] pt-[10%] pb-[10%]">
                                <Image className="object-contain" src={cashPic} alt="Azad" />
                            </div>
                        </motion.div>
                    }
        </div >
    )
}

export default Sequence;