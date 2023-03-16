'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';

const Modal = ({ route }: { route: string }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-20">
            <div className={` bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 rounded-md text-center w-2/5`}>
                <div className="flex flex-col justify-center">
                    <p className="mb-4 font-bold ">Progression saved!</p>
                    <p className="mb-4 font-bold "> You can go to the next episode</p>
                </div>
                <button
                    className="flex bg-red-500 px-7 py-2 mx-auto rounded-md text-md text-white font-semibold"
                    onClick={() => {
                        setLoading(true)
                        router.push(route)

                    }}
                >
                    {loading &&
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    {loading ? "Processing..." : "Next episode"}
                </button>
            </div>
        </div>
    )
}

export default Modal;