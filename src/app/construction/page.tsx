'use client';

import { perm_marker } from '@/utils/font';

import newsroomPic from "../../../public/redaction.jpg"
import { motion } from 'framer-motion';
import Image from 'next/image';

const Construction = () => {


    return (
        <div className="flex justify-center h-screen">
            <div className="relative my-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 5 }}
                >
                    <Image
                        className="bgCase -z-10"
                        src={newsroomPic}
                        alt="Newsroom"
                        width={800}
                        height={600}
                    />
                    <div className={`${perm_marker.className} absolute bg-red-800 top-4 left-4 p-2 text-3xl`}>
                        Chapter 1 under construction
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Construction;