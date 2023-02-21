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
        <div className="h-screen bg-blue-500">
            <div className="h-screen flex py-[5%] bg-green-500">
                <div className="flex bg-blue-500 relative">
                    <img src="/decors.png" alt="decors" />
                    <div className="absolute bottom-0 right-0">
                        <img src="/amis.png" alt="amis" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chap1s3