'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedText from '@/components/AnimatedText';
import decorPic from "./img/decor2.png"
import friendsPic from "./img/friends3.png"

const Sequence = () => {
    const narration = "Azad's place"
    const hour = "8:24 pm"

    return (
        <div className="relative flex flex-col h-screen py-[5%] pr-[33%]">
            <motion.div
                className="flex pb-[5%] pr-[25%]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.5 }}>
                <Image className="object-contain" src={decorPic} alt="decor" priority={true} />
            </motion.div>
            <div className="pl-2 text-xl z-10">
                <AnimatedText size={"text-xl"} content={narration} speed={0.08} delay={2.5} />
                <AnimatedText size={"text-base"} content={hour} speed={0.08} delay={3.5} />
            </div>
            <motion.div
                className="absolute bottom-0 right-0 flex h-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.7, duration: 1.5 }}>
                <div className="flex justify-end pl-[20%] pt-[10%] pb-[5%]">
                    <Image className="object-contain" src={friendsPic} alt="friends" />
                </div>
            </motion.div>
        </div >
    )
}

export default Sequence;