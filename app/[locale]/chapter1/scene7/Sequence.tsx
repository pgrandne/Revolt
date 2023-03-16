'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedText from '@/app/components/AnimatedText';
import azadPic from "@/public/img/back.png"
import skylerhomePic from "@/public/img/skyler-place.png"

const Sequence = () => {
    const narration = "Azad's place"
    const hour = "8:00 pm"

    return (
        <div className="relative flex flex-col justify-center h-full py-[5%]">
            <motion.div
                className="flex pr-[35%]"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}>
                <Image className="object-contain" src={skylerhomePic} alt="Skyler Home" />
            </motion.div>
            <div className="pl-6 pt-2 z-10">
                <AnimatedText size={"text-xl"} content={narration} speed={0.08} delay={2} />
                <AnimatedText size={"text-base"} content={hour} speed={0.08} delay={5} />
            </div>
            < motion.div
                className="absolute bottom-0 right-0 flex h-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3, duration: 1.5 }}>
                <div className="flex justify-end pl-[30%] pt-[15%] pb-[5%]">
                    <Image className="object-contain" src={azadPic} alt="Azad" />
                </div>
            </motion.div>
        </div >
    )
}

export default Sequence;