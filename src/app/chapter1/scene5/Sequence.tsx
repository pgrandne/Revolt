'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import takeawayPic from "./img/takeaway.png"
import phonePic from "./img/onthephone.png"
import paymentPic from "./img/payment.png"
import refusedPic from "./img/refused.png"
import cashPic from "./img/cash.png"

const Sequence = ({ stage, }: { stage: number }) => {
    return (
        <div className="relative flex justify-center h-screen py-[5%]">
            <motion.div
                className="flex pr-[35%]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}>
                <Image className="object-contain" src={takeawayPic} alt="redaction" />
            </motion.div>
            < motion.div
                className="absolute bottom-0 right-0 flex h-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.5, duration: 1.5 }}>
                <div className="flex justify-end pl-[40%] pt-[15%] pb-[5%]">
                    <Image className="object-contain" src={phonePic} alt="Azad" />
                </div>
            </motion.div>
            {stage > 0 && stage < 3 &&
                <>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: [0, 1, 1, 0] }}
                        transition={{ delay: 1, duration: 2, times: [0, 0.25, 0.8, 1] }}>
                        <div className="flex justify-end pl-[40%] pt-[15%] pb-[5%]">
                            <Image className="object-contain" src={paymentPic} alt="Azad" />
                        </div>
                    </motion.div>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5, duration: 0.5 }}>
                        <div className="flex justify-end pl-[40%] pt-[15%] pb-[5%]">
                            <Image className="object-contain" src={refusedPic} alt="Azad" />
                        </div>
                    </motion.div>
                </>
            }
            {stage === 3 &&
                < motion.div
                    className="absolute bottom-0 right-0 flex h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}>
                    <div className="flex justify-end pl-[40%] pt-[15%] pb-[5%]">
                        <Image className="object-contain" src={cashPic} alt="Azad" />
                    </div>
                </motion.div>
            }
        </div >
    )
}

export default Sequence;