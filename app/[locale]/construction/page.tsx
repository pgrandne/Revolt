"use client";

import { equipmentPic } from "@/public/img";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Toast } from "@/app/components";
import { useSearchParams } from "next/navigation";
import { linkedin, twitter, discord } from "@/public/svg";

const Construction = () => {
  const t = useTranslations("Construction");
  const f = useTranslations("Feedback");
  const searchParams = useSearchParams();
  const progression = searchParams.get("source");

  return (
    <div className="flex justify-center h-screen">
      <div className="relative my-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
        >
          <div className="font-permarker absolute transform rounded-sm rotate-[-5deg] -mt-5 -ml-7 bg-red-800 p-2 text-3xl">
            {t("text")}
          </div>
          <Image
            className="bgCase -z-10"
            src={equipmentPic}
            alt="Newsroom"
            width={800}
            height={600}
          />
        </motion.div>

        {/* <Toast
          feedback={f("feedback")}
          link={f("link")}
          progression={progression}
        /> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 1, duration: 3 }}
        >
          <div className="text-center text-xl mt-6">
            {t("text2")}

            <div className="justify-center mt-6 flex gap-1">
              <a
                href="https://www.linkedin.com/company/irruption-lab/"
                target="_blank"
                rel="noreferrer"
              >
                <Image className="footerIcon" src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://twitter.com/IrruptionLab"
                target="_blank"
                rel="noreferrer"
              >
                <Image className="footerIcon" src={twitter} alt="twitter" />
              </a>

              <a
                href="https://discord.gg/ScjvqNRJ"
                target="_blank"
                rel="noreferrer"
              >
                <Image className="footerIcon" src={discord} alt="discord" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 2, duration: 3 }}
        >
          <div className="fixed bottom-6 right-6">
            <div>
              {f("feedback")}{" "}
              <a
                className="underline"
                href={`https://msprr0gajgn.typeform.com/to/DSl54TqJ#url=${progression}`}
                target="_blank"
              >
                {f("link")}  
              </a>
              🙏
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Construction;
