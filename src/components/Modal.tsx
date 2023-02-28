'use client'

import { Dispatch, SetStateAction, useEffect } from "react";

const Modal = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className="bg-[#0f1216] px-16 py-14 rounded-md text-center">
                <h1 className="text-xl mb-4 font-bold text-slate-300">Revolte.app is an adventure game to onboard Web2 users into Web3</h1>
                <p className="text-base mb-4 font-bold text-slate-300">If you like our work you can donate on 0x94b9420F65fB3ec966d96BB034b35AF86487D929</p>
                <p className="text-base mb-4 font-bold text-slate-300">Revolte.app is an opensource project on <a className="underline" href="https://github.com/pgrandne/revolte">github</a> and built by <a className="underline" href="https://irruptionlab.com">Irruption Lab</a></p>
                <button
                    className="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                    onClick={() => setModal(false)}
                >Ok</button>
            </div>
        </div>
    )
}

export default Modal;