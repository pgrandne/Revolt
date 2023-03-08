'use client'

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { perm_marker } from '@/utils/font'
import roadmap from "@/img/roadmap.png"


const ModalDeck = ({ setModalDeck }: { setModalDeck: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className={` bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 rounded-md text-center w-4/5`}>
                <div className="flex justify-center">
                    <p className="inline font-sans sm:block text-sm md:text-xl my-4 font-bold"><span className={`${perm_marker.className} md:text-3xl`}>Revolte </span> an interactive novel to onboard Web2 users to Web3</p>
                </div>
                <p className="font-sans sm:block justify-center text-sm md:text-xl mb-4 font-bold ">Discover our Pitch Deck ( <a className="underline" target="_blank" href="https://www.canva.com/design/DAFaoOaGU3A/Jj8ILlofzMJ5_gv8nlivKg/view?utm_content=DAFaoOaGU3A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Online</a> / <a className="underline" target="_blank" href="https://drive.google.com/uc?id=1heBnCKRaljTbxGf0CcZR3-e65KASU53A&export=download">Download</a> )</p>
                <Image
                    className="object-contain transform md:scale-75"
                    src={roadmap}
                    alt="roadmap"
                />        
                <button
                    className="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                    onClick={() => setModalDeck(false)}
                >Close</button>
            </div>
        </div>
    )
}

export default ModalDeck;