'use client';

import { perm_marker } from '@/utils/font';
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import { useState } from 'react';
import decorsPic from "./img/decors.png"
import amisPic from "./img/amis.png"
import { child, textAnimation } from "@/utils/animatedText"
import Discussion from './Discussion';

const Chap1s3 = () => {
    const narration = "dsfd"
    const words = narration.split("")
    const [telegramWindow, setTelegramWindow] = useState(false)
    const [write, setWrite] = useState(false)
    const [stage, setStage] = useState(0)
    const [azadText, setAzadText] = useState<string[]>([])

    return (
        <div className="basis-2/3 h-screen flex py-[5%] pr-[33%]">
            <div className="flex w-full relative">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <img className="w-[60%] h-full" src="/decors.png" alt="decors" />
                </motion.div>
                <motion.div
                    className="absolute bottom-0 right-0 w-[80%]"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}>
                    <img className="w-[80%]" src="/amis.png" alt="amis" />
                </motion.div>
            </div >
        </div >
    )
}

export default Chap1s3