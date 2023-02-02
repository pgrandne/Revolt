'use client'

import { useEffect } from "react";

const Modal = ({ handleClick }: { handleClick: any }) => {
    return (

        <div className="flex justify-center m-10">
            <div className="relative rounded-lg shadow bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
                    <h3 className="text-xl font-semibold text-white">
                        Disclaimer
                    </h3>
                    <button className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-gray-400">
                        This adventure is a work of fiction but draws inspiration from real events. To enhance the narrative, a dystopian setting based on a conspiracy has been created, though the underlying facts are closer to reality than you think. The goal is to create a captivating story to introduce you to Web3, highlight its potential use cases, and give you a glimpse of what this technology can do.
                        Although the scenarios in the story may seem extreme, the ideas and applications demonstrated can be applied to daily life, (even without any organization hunting or harassing you).<br />

                    </p>
                    <p className="text-base leading-relaxed text-gray-400">
                        The possibilities offered by Web3 are endless, and new applications and protocols will be introduced in each subsequent chapter.<br />
                        To begin the story, click the Start button in the bottom left.<br />
                        The bottom right will be used to save your progress and pick up from where you left off (available from chapter 2).
                    </p>
                </div>
                <div className="flex justify-between items-center p-6 space-x-2 border-t rounded-b border-gray-600">
                    <button
                        className="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
                        onClick={() => handleClick()}
                    >Start</button>
                    <button
                        className="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
                        onClick={() => handleClick()}
                    >Connect with a wallet</button>
                </div>
            </div>
        </div >
    )
}

export default Modal;