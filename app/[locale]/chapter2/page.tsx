'use client';

import { motion } from "framer-motion"
import Link from "@/app/components/LinkLocale"
import { useNetwork, useAccount } from 'wagmi'
import SaveButton from "@/app/components/SaveButton";
import { useEffect, useState } from "react";
import { handleEthereum } from "@/lib/utils/checkWallet";
import { ModalProgression } from "@/app/components/Modal";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const Chap2 = () => {
    const locale = useLocale()
    const t = useTranslations('Chap2');
    const t2 = useTranslations('Chap2s1');
    const { chain } = useNetwork()
    const { isConnected } = useAccount()
    const [wallet, setWallet] = useState(false)
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [modalFeedback, setModalFeedback] = useState(true)
    const progression = {
        chapter: 2,
        episode: 1,
        scene: 0
    }
    useEffect(() => {
        setWallet(handleEthereum())
    }, [])

    return (
        
        
        <div className="font-permarker relative flex flex-col justify-center text-center w-screen h-screen my-auto overflow-hidden">
            <div >
            <div className="text-7xl">
                    {t2('chapter')}
            </div>
            
            <div className="my-auto">
                {!wallet &&
                    <div className="font-roboto font-bold my-10 text-center text-xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 2 }}
                        >
                            {t('metamask')}
                        </ motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 2 }}
                        >
                            {t('metamaskLink1')}<a target="_blank" href="https://metamask.io/" rel="noopener noreferrer" className="underline">{t('metamaskLink')}</a>{t('metamaskLink2')}
                        </ motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5, duration: 2 }}
                        >
                            {t('gotochapter1')}<Link className="underline" href="/chapter1/scene1">{t('chapter1')}</Link> {t('gotochapter1end')}
                        </ motion.p>
                    </div>
                }
                {wallet &&
                    <>
                        <motion.div
                            className="font-roboto font-bold my-10 text-center text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 2 }}
                        >
                            {!isConnected &&
                                <p >
                                    {t('continue')} <br /> 
                                    {t('click')} <span className="font-extrabold">“Connect Wallet“</span> {t('select')}<br />
                                    {t('network')} 
                                </p>
                            }
                            {isConnected && chain?.id !== 420 &&
                                <p>
                                    {t('continue')} <br /> 
                                    {t('click')} <span className="font-extrabold">“Wrong Network“</span> {t('switch')}
                                </p>}
                        </ motion.div>
                        {chain?.id === 420 &&
                            <motion.div
                                className="flex flex-col gap-2 mx-auto place-content-center"
                                initial={{ opacity: 0, y: 250 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: 'spring', delay: 1, duration: 3 }}
                            >
                                <SaveButton
                                    progression={progression}
                                    setModal={setModal}
                                />        
                            </motion.div>
                        }
                    </>
                }
            </div>
            </div>
            {modal && <ModalProgression route={`${locale}/chapter2/scene1`} />}
        </div >
    )
}

export default Chap2;
