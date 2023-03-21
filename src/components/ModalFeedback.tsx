'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";

const ModalFeedback = ({ setModalFeedback}: {
    setModalFeedback: Dispatch<SetStateAction<boolean>>
}) => {

    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-30">
            <div className={`flex flex-col bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 gap-2 rounded-md text-center w-2/5`}>
                <p className="mb-4 text-2xl">Help us to enhance the experience and give us <a className="underline"> your feedback </a> </p>
                <p className="mb-4 text-sm">It only takes 1 minute</p>
                <Link className="bg-red-500 hover:bg-red-700 px-7 py-2 ml-2 rounded-md text-2xl text-white font-semibold" target="_blank" href="https://msprr0gajgn.typeform.com/to/DSl54TqJ#url=xxxxx">Sure!</Link>
               
                <button
                    className="border-2 border-white opacity-70 hover:opacity-100 mt-2 px-7 py-2 ml-2 rounded-md text-2xl text-white font-semibold"
                    onClick={() => setModalFeedback(false)}
                >Close</button>
            </div>
        </div>
    )
}

export default ModalFeedback;