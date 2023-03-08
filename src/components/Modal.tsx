'use client'

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";


const Modal = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        </div>
    )
}

export default Modal;