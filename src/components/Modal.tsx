'use client'

import { useEffect } from "react";

const Modal = ({ handleClick }: { handleClick: any }) => {
    return (

        <div className="fixed top-5 left-5 w-full h-full max-w-2xl md:h-auto">
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
                        This adventure is fictional but is strongly inspired by real events. For the sake of the story, we have exaggerated the facts but they are much closer to reality than you imagine.
                    </p>
                    <p className="text-base leading-relaxed text-gray-400">
                        The goal of this adventure is not to cry conspiracy, we want to create a gripping story for onboarding people in Web3.
                    </p>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t rounded-b border-gray-600">
                    <button
                        className="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
                        onClick={() => handleClick()}
                    >Start</button>
                </div>
            </div>
        </div >
    )
}

export default Modal;