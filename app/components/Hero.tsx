'use client';

import { motion } from "framer-motion";
import { isMobile, isSafari, isIE } from 'react-device-detect';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import bgPic from "@/public/img/equipment.jpg"
import { useEffect, useState } from "react";
import { ModalInfo, ModalSelectChapter } from "@/app/components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { handleEthereum } from "@/lib/utils/checkWallet";
import { discord, donation, github, info, irruptionlab, linkedin, twitter } from "@/public/svg";
import { useLocale, useTranslations } from 'next-intl';
import { LocaleSwitcher } from "./LocaleSwitcher";

export const Hero = () => {
    const locale = useLocale()
    const t = useTranslations('Home')
    const router = useRouter();
    const [wallet, setWallet] = useState(false)
    const [modalInfo, setModalInfo] = useState(false)
    const [deck, setDeck] = useState(false)
    const [modalSelectChapter, setModalSelectChapter] = useState(false)

    useEffect(() => {
        setWallet(handleEthereum());
    }, [])

    const launchRevolte = () => {
        if (!isMobile && !isSafari && !isIE)
            setModalSelectChapter(true)
        else router.push(isMobile ? `${locale}/mobile` : (isSafari || isIE ? `${locale}/browser` : `${locale}/chapter1/scene1`))
    }

    return (
        <section className="font-permarker flex justify-center h-screen w-screen">
            <div className="absolute top-3 right-3 z-40 flex gap-2">
                <LocaleSwitcher />
                {wallet &&
                    <ConnectButton chainStatus="none" showBalance={false} />
                }

            </div>
            <div className="my-auto relative">
                <motion.div
                    className="p-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 3, duration: 3 }}
                >
                    <Image
                        className="rounded-md border-4 border-white"
                        src={bgPic}
                        alt="Picture of materials"
                    />
                </motion.div>
                <div className="absolute top-0 pt-6 sm:pt-36 h-full w-full overflow-hidden">
                    <motion.h1
                        className="text-center text-2xl sm:text-7xl"
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', delay: 1, duration: 1.1 }}
                    >
                        Revolte
                    </motion.h1>
                    <motion.p
                        className="text-center pb-4 sm:pb-12"
                        initial={{ opacity: 0, y: 250 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', delay: 2, duration: 1.1 }}
                    >
                        {t('title')}
                    </ motion.p>
                    <motion.div
                        className="flex mx-auto place-content-center"
                        initial={{ opacity: 0, y: 250 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', delay: 3, duration: 3 }}
                    >
                        <motion.button
                            className="btnHero"
                            whileHover={{ rotate: 7, scale: 1.5, transition: { duration: 0.1 } }}
                            onClick={launchRevolte}
                        >
                            {t('buttonName')}
                        </motion.button>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
            >
                <div className="fixed bottom-3 left-3 flex gap-1">
                    <a className="" href="https://github.com/pgrandne/revolte" target="_blank" rel="noreferrer">
                        <Image
                            className="footerIcon"
                            src={github}
                            alt="github"
                        />
                    </a>
                    <a href="https://www.linkedin.com/company/irruption-lab/" target="_blank" rel="noreferrer">
                        <Image
                            className="footerIcon"
                            src={linkedin}
                            alt="linkedin"
                        />
                    </a>
                    <a href="https://twitter.com/IrruptionLab" target="_blank" rel="noreferrer">
                        <Image
                            className="footerIcon"
                            src={twitter}
                            alt="twitter"
                        />
                    </a>
                    <a href="https://www.irruptionlab.com/" target="_blank" rel="noreferrer">
                        <Image
                            className="footerIcon"
                            src={irruptionlab}
                            alt="irruptionlab"
                        />
                    </a>
                    <a href="https://discord.gg/ScjvqNRJ" target="_blank" rel="noreferrer">
                        <Image
                            className="footerIcon"
                            src={discord}
                            alt="discord"
                        />
                    </a>
                </div>
                <motion.div
                    className="hidden sm:block fixed top-5 left-5 -z-10"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 5, duration: 1 }}
                >
                    <p className="text-white text-opacity-70 text-xl">{t('subtitle')}</p>
                </motion.div>
                <div className="fixed bottom-3 right-3 flex gap-1">
                    <div
                        onClick={() => {
                            setDeck(false)
                            setModalInfo(true)
                        }}>
                        <Image
                            className="footerIcon"
                            src={donation}
                            alt="Donation"
                        />
                    </div>
                    <div
                        onClick={() => {
                            setDeck(true)
                            setModalInfo(true)
                        }}>
                        <Image
                            className="footerIcon"
                            src={info}
                            alt="Info"
                        />
                    </div>
                </div>
            </motion.div>
            {modalInfo &&
                <ModalInfo setModalInfo={setModalInfo} deck={deck} />
            }
            {modalSelectChapter &&
                <ModalSelectChapter setModalSelectChapter={setModalSelectChapter} wallet={wallet} />
            }
        </section >
    )
}

