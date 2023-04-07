'use client';

import equipmentPic from "@/public/img/equipment.jpg"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react"
import 'react-toastify/dist/ReactToastify.css';

const Msg = ({ feedback, link }: { feedback: string, link: string }) => (
    <div>
        {feedback} <a
            className='underline'
            href="https://msprr0gajgn.typeform.com/to/DSl54TqJ#url=chap2scene1" target="_blank"
        >
            {link}
        </a>
    </div>
)
const Construction = () => {
    const t = useTranslations('Construction');
    const f = useTranslations('Feedback');

    useEffect(() =>         
        {
            toast(<Msg feedback={f('feedback')} link={f('link')} />)
        }
    );
   

    return (
        <div className="flex justify-center h-screen">
            <div className="relative my-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 5 }}
                >
                    <div className="font-permarker absolute transform rounded-sm rotate-[-5deg] -mt-5 -ml-7 bg-red-800 p-2 text-3xl">
                        {t('text')}
                    </div>
                    <Image
                        className="bgCase -z-10"
                        src={equipmentPic}
                        alt="Newsroom"
                        width={800}
                        height={600}
                    />

                </motion.div>
                <ToastContainer
                        position="bottom-right"
                        autoClose={7000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
            </div>
        </div>
        
    )
}

export default Construction;