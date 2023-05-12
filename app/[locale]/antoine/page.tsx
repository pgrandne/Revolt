"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { AnimatedText, ArrowButton, LinkLocale } from "@/app/components";
import { useTranslations } from "next-intl";
import {
  azadChap1Pic,
  ruizChap2Pic,
  skylerChap3Pic,
  bgModalPic,
  metamaskLogoRightPic,
  metamaskLogoLeftPic,
} from "@/public/img";

const Chap1s1 = () => {
  const t = useTranslations("SelectChapter");

  return (
    <div className="holder ">
      <LinkLocale
        className="card border rounded-md w-[28rem] relative flex flex-col mx-auto m-5 opacity-90 cursor-pointer hover:opacity-100"
        href="/chapter1/scene1"
      >
        <Image
          className="max-h-16 w-full rounded-t-md opacity-80 absolute top-0"
          style={{ zIndex: -1 }}
          src={bgModalPic}
          alt=""
        />
        <div className="profile w-full flex p-3 pl-4 text-white">
          <Image
            className="w-28 h-28 p-1 bg-amber-50 rounded-full"
            src={azadChap1Pic}
            alt=""
          />
          <div className="title mt-1 ml-3 font-bold flex flex-col">
            <div className="font-permarker name break-words">
              {t("chapter")} 1
            </div>
            <div className="name break-words pl-2 text-xs">
              (1 {t("episode")})
            </div>
            <div className="flex flex-col absolute top-0 font-bold right-0 text-xs text-white space-x-0 my-3.5 mr-3">
              <div className="add border rounded-2xl  border-gray-300 p-1 px-4">
                15min
              </div>
            </div>
            <div className="add mt-4 font-semibold text-xs  text-white">
              {" "}
              • {t("textChap1-1")} <br /> • {t("textChap1-2")} <br />(
              {t("textChap1-3")})
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute bottom-0 font-bold right-0 text-[.6rem] text-[#0f1216] space-x-0 my-3.5 mr-3">
          <div className="add  rounded-2xl text-center opacity-60 bg-lime-500 border-white mb-1  px-1.5">
            {t("beginner")}
          </div>
          <div className="add  rounded-2xl text-center opacity-60 bg-rose-600 border-white px-1.5">
            {t("advanced")}
          </div>
        </div>
      </LinkLocale>

      {wallet && isConnected && (
        <LinkLocale
          className="card border rounded-md w-[28rem] relative flex flex-col mx-auto m-5 opacity-90 cursor-pointer hover:opacity-100"
          href="/chapter2/scene1"
        >
          <Image
            className="max-h-16 w-full rounded-t-md opacity-80 absolute top-0"
            style={{ zIndex: -1 }}
            src={bgModalPic}
            alt=""
          />
          <div className="profile w-full flex p-3 pl-4 text-white">
            <Image
              className="w-28 h-28 p-1 bg-amber-50 rounded-full"
              src={ruizChap2Pic}
              alt=""
            />
            <div className="title mt-1 ml-3 font-bold flex flex-col">
              <div className="font-permarker name break-words">
                {t("chapter")} 2
              </div>
              <div className="name break-words pl-2 text-xs">
                (4 {t("episodes")})
              </div>

              <div className="flex  absolute top-0 font-bold right-0 text-xs text-white space-x-0 my-3.5 mr-3">
                <div className="add   p-1 px-2">4 x </div>
                <div className="add border rounded-2xl  border-gray-300 p-1 px-4">
                  5min
                </div>
              </div>

              <div className="add mt-4 font-semibold text-xs  text-white">
                {" "}
                • {t("textChap2-1")} <br /> • {t("textChap2-2")} <br />(
                {t("textChap2-3")})
              </div>
            </div>
          </div>
          <div className="flex flex-col absolute bottom-0 font-bold right-0 text-[.6rem] text-[#0f1216] space-x-0 my-3.5 mr-3">
            <div className="add  rounded-2xl text-center opacity-60 bg-lime-500 border-white mb-1  px-1.5">
              {t("beginner")}
            </div>
            <div className="add  rounded-2xl text-center opacity-60 bg-rose-600 border-white px-1.5">
              {t("advanced")}
            </div>
          </div>
        </LinkLocale>
      )}

      {(!wallet || !isConnected) && (
        <LinkLocale
          className="card border rounded-md w-[28rem] relative flex flex-col mx-auto m-5 opacity-90 cursor-pointer hover:opacity-100"
          href="/chapter2"
        >
          <Image
            className="max-h-16 w-full rounded-t-md opacity-80 absolute top-0"
            style={{ zIndex: -1 }}
            src={bgModalPic}
            alt=""
          />
          <div className="profile w-full flex p-3 pl-4 text-white">
            <Image
              className="w-28 h-28 p-1 bg-amber-50 rounded-full"
              src={ruizChap2Pic}
              alt=""
            />
            <div className="title mt-1 ml-3 font-bold flex flex-col">
              <div className="font-permarker name break-words">
                {t("chapter")} 2
              </div>
              <div className="name break-words pl-2 text-xs">
                (4 {t("episodes")})
              </div>

              <div className="flex  absolute top-0 font-bold right-0 text-xs text-white space-x-0 my-3.5 mr-3">
                <div className="add   p-1 px-2">4 x </div>
                <div className="add border rounded-2xl  border-gray-300 p-1 px-4">
                  5min
                </div>
              </div>

              <div className="add mt-4 font-semibold text-xs  text-white">
                {" "}
                • {t("textChap2-1")} <br /> • {t("textChap2-2")} <br />(
                {t("textChap2-3")})
              </div>
            </div>
          </div>
          <div className="flex flex-col absolute bottom-0 font-bold right-0 text-[.6rem] text-[#0f1216] space-x-0 my-3.5 mr-3">
            <div className="add  rounded-2xl text-center opacity-60 bg-lime-500 border-white mb-1  px-1.5">
              {t("beginner")}
            </div>
            <div className="add  rounded-2xl text-center opacity-60 bg-rose-600 border-white px-1.5">
              {t("advanced")}
            </div>
          </div>
        </LinkLocale>
      )}

      <LinkLocale
        className="card border rounded-md w-[28rem] relative flex flex-col mx-auto m-5 opacity-90 cursor-pointer hover:opacity-100"
        href="/construction"
      >
        <Image
          className="max-h-16 w-full rounded-t-md opacity-80 absolute top-0"
          style={{ zIndex: -1 }}
          src={bgModalPic}
          alt=""
        />
        <div className="profile w-full flex p-3 pl-4 text-white">
          <Image
            className="w-28 h-28 p-1 bg-amber-50 rounded-full"
            src={skylerChap3Pic}
            alt=""
          />
          <div className="title mt-1 ml-3 font-bold flex flex-col">
            <div className="font-permarker name break-words">
              {t("chapter")} 3
            </div>
            <div className="name break-words pl-2 text-xs">
              ({t("underConstruction")})
            </div>

            {/* <div className="flex  absolute top-0 font-bold right-0 text-xs text-white space-x-0 my-3.5 mr-3">         
        <div className="add   p-1 px-2">4 x </div>
          <div className="add border rounded-2xl  border-gray-300 p-1 px-4">5min</div>
        </div> */}

            <div className="add mt-4 font-semibold text-xs  text-white">
              {" "}
              • {t("textChap3-1")} <br /> • {t("textChap3-2")} <br />(
              {t("textChap3-3")})
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute bottom-0 font-bold right-0 text-[.6rem] text-[#0f1216] space-x-0 my-3.5 mr-3">
          <div className="add  rounded-2xl text-center opacity-60 bg-rose-600 border-white px-1.5">
            {t("advanced")}
          </div>
        </div>
      </LinkLocale>

      <div className="card border  rounded-md w-[28rem] relative flex flex-col mx-auto  m-5 opacity-90 cursor-pointer hover:opacity-100">
        <Image
          className="h-full w-full rounded-md opacity-80 absolute top-0"
          style={{ zIndex: -1 }}
          src={bgModalPic}
          alt=""
        />
        <div className="absolute bottom-0 left-0 my-3 ml-6">
          <Image
            className="w-10 h-10 p-0.5 bg-amber-50 rounded-full"
            src={metamaskLogoRightPic}
            alt=""
          />
        </div>
        <div className="profile h-16 w-full flex p-3 pl-4 text-white">
          <div className="title  my-auto mx-auto font-bold ">
            <div className="font-permarker name break-words">{t("resume")}</div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 my-3 mr-6">
          <Image
            className="w-10 h-10 p-0.5 bg-amber-50 rounded-full "
            src={metamaskLogoLeftPic}
            alt=""
          />
        </div>
      </div>

      <div className="card border  rounded-md w-[9rem] relative flex flex-col mx-auto  m-5 opacity-80 cursor-pointer hover:bg-red-900 hover:opacity-100">
        <div className="profile  w-full flex p-2  text-white ">
          <div className="my-auto mx-auto font-bold font-permarker">
            {t("close")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chap1s1;
