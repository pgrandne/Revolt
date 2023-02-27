'use client';

import { motion } from "framer-motion"
import { child, textAnimation } from "@/utils/animatedText"

const ExternalDiscussion = ({ name, delay }: {
    name: string,
    delay: number,
}) => {

    return (
        <div className="w-3/4 my-1">
            <motion.div
                className="my-2 p-2 bg-slate-100 rounded-t-lg rounded-r-lg shadow shadow-slate-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay, duration: 1 }}
            >
                <div className={name}>{name}</div>
                <div className="text-sm text-slate-900">
                    Go to <a className="underline" href="https://metamask.io/">metamask.io</a> and download the extension
                </div>
            </motion.div>
        </div >
    )
}

export default ExternalDiscussion;