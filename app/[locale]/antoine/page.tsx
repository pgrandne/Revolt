"use client";


import Image from "next/image";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import { useTranslations } from "next-intl";
import { azadChap1Pic } from "@/public/img";

const ModalExpress = () => {
  const router = useRouter();
  const t = useTranslations("ExpressVersion");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Modal toggle */}
      <button
        className="mt-4 ml-6 text-white font-permarker text-sm px-3 py-1 text-center border  rounded-md  relative  opacity-80 cursor-pointer hover:bg-red-900 hover:opacity-100"
        type="button"
        onClick={openModal}
      >
        Express mode
      </button>
      <div className="max-w-2xl mx-auto">
        {/* Main modal */}
        {isModalOpen && (
          <div className="bg-gray-900 bg-opacity-80  justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-30">
            <div id="default-modal" className="">
              <div className="relative font-sans border rounded-lg border-gray-200 text-gray-300 w-full max-w-2xl  h-full md:h-auto mt-24 mx-auto z-50">
                {/* Modal content */}
                <div className="  bg-[#0f1216] rounded-lg shadow relative">
                  {/* Modal header */}
                  <div className="flex place-items-center justify-between px-5 py-3 rounded-t">
                    <Image
                      className="w-14 h-14  bg-gray-300 rounded-full"
                      src={azadChap1Pic}
                      alt=""
                    />
                    <h3 className="ml-4 text-xl lg:text-2xl font-semibold ">
                      {t("title")}
                      {!step ? " (1/2)" : " (2/2)"}
                    </h3>
                    <button
                      type="button"
                      className="text-gray-300 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeModal}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="mx-auto border-b w-[98%]  border-white opacity-60"></div>

                  {/* Modal body */}
                  <div className="p-6 space-y-6">
                    <p className="  leading-relaxed ">
                      {!step ? t("text1") : t("text3")}
                    </p>
                    <p className="  leading-relaxed ">
                      {!step ? t("text2") : t("text4")}
                    </p>
                  </div>
                  {/* Modal footer */}
                  <div className="mx-auto border-b w-[98%] border-white opacity-60"></div>
                  <div className="flex space-x-2 items-center p-5   rounded-b ">
                    <div className="flex space-x-4 w-full ">
                      {step ? (
                        <button
                          type="button"
                          className="flex text-gray-300  hover:bg-gray-200 hover:text-gray-900 text-sm px-2.5 py-2 text-center border  rounded-md  relative  cursor-pointer  hover:opacity-100"
                        >
                          <a
                            target="_blank"
                            href="https://metamask.io/"
                            rel="noopener noreferrer"
                            className=""
                          >
                            {t("install")}
                            <svg
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 318.6 318.6"
                              className="inline h-5 mx-1 animate-pulse"
                            >
                              <polygon
                                className="st0"
                                points="274.1,35.5 174.6,109.4 193,65.8 "
                              />
                              <g>
                                <polygon
                                  className="st1"
                                  points="44.4,35.5 143.1,110.1 125.6,65.8  "
                                />
                                <polygon
                                  className="st1"
                                  points="238.3,206.8 211.8,247.4 268.5,263 284.8,207.7  "
                                />
                                <polygon
                                  className="st1"
                                  points="33.9,207.7 50.1,263 106.8,247.4 80.3,206.8  "
                                />
                                <polygon
                                  className="st1"
                                  points="103.6,138.2 87.8,162.1 144.1,164.6 142.1,104.1  "
                                />
                                <polygon
                                  className="st1"
                                  points="214.9,138.2 175.9,103.4 174.6,164.6 230.8,162.1  "
                                />
                                <polygon
                                  className="st1"
                                  points="106.8,247.4 140.6,230.9 111.4,208.1  "
                                />
                                <polygon
                                  className="st1"
                                  points="177.9,230.9 211.8,247.4 207.1,208.1  "
                                />
                              </g>
                              <g>
                                <polygon
                                  className="st2"
                                  points="211.8,247.4 177.9,230.9 180.6,253 180.3,262.3  "
                                />
                                <polygon
                                  className="st2"
                                  points="106.8,247.4 138.3,262.3 138.1,253 140.6,230.9  "
                                />
                              </g>
                              <polygon
                                className="st3"
                                points="138.8,193.5 110.6,185.2 130.5,176.1 "
                              />
                              <polygon
                                className="st3"
                                points="179.7,193.5 188,176.1 208,185.2 "
                              />
                              <g>
                                <polygon
                                  className="st4"
                                  points="106.8,247.4 111.6,206.8 80.3,207.7  "
                                />
                                <polygon
                                  className="st4"
                                  points="207,206.8 211.8,247.4 238.3,207.7  "
                                />
                                <polygon
                                  className="st4"
                                  points="230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2  "
                                />
                                <polygon
                                  className="st4"
                                  points="110.6,185.2 130.6,176.1 138.8,193.5 144.1,164.6 87.8,162.1  "
                                />
                              </g>
                              <g>
                                <polygon
                                  className="st5"
                                  points="87.8,162.1 111.4,208.1 110.6,185.2  "
                                />
                                <polygon
                                  className="st5"
                                  points="208.1,185.2 207.1,208.1 230.8,162.1  "
                                />
                                <polygon
                                  className="st5"
                                  points="144.1,164.6 138.8,193.5 145.4,227.6 146.9,182.7  "
                                />
                                <polygon
                                  className="st5"
                                  points="174.6,164.6 171.9,182.6 173.1,227.6 179.8,193.5  "
                                />
                              </g>
                              <polygon
                                className="st6"
                                points="179.8,193.5 173.1,227.6 177.9,230.9 207.1,208.1 208.1,185.2 "
                              />
                              <polygon
                                className="st6"
                                points="110.6,185.2 111.4,208.1 140.6,230.9 145.4,227.6 138.8,193.5 "
                              />
                              <polygon
                                className="st7"
                                points="180.3,262.3 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.3 106.8,247.4 117.8,256.4   140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4 "
                              />
                              <polygon
                                className="st8"
                                points="177.9,230.9 173.1,227.6 145.4,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253 "
                              />
                              <g>
                                <polygon
                                  className="st9"
                                  points="278.3,114.2 286.8,73.4 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4    281.8,129.1 275.6,124.3 283.6,118.2  "
                                />
                                <polygon
                                  className="st9"
                                  points="31.8,73.4 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2    140.6,106.9 44.4,35.5  "
                                />
                              </g>
                              <polygon
                                className="st6"
                                points="267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7 "
                              />
                              <polygon
                                className="st6"
                                points="103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1 "
                              />
                              <polygon
                                className="st6"
                                points="174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 144.1,164.6 145.3,182.8 145.4,227.6   173.1,227.6 173.3,182.8 "
                              />
                            </svg>
                          </a>
                        </button>
                      ) : (
                        ""
                      )}

                      {step ? (
                        <div className=" w-1/2 text-gray-300 text-sm  ">
                          {t("note")}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex space-x-2 w-1/5 items-right ">
                      {step ? (
                        <button
                          type="button"
                          id="previous"
                          className=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => setStep(false)}
                        >
                          <svg
                            fill="#D1D5DB"
                            className="hover:fill-[#000000]"
                            height="40px"
                            width="40px"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 471.2 471.2"
                            transform="matrix(-1,0,0,1,0,0)"
                          >
                            <g>
                              <g>
                                <path
                                  d="M283.6,155.6c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l47.5,47.5H126.6c-7.5,0-13.5,6-13.5,13.5
			s6,13.5,13.5,13.5H312l-47.4,47.4c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l70.5-70.5c5.3-5.3,5.3-13.8,0-19.1
			L283.6,155.6z"
                                />
                              </g>
                            </g>
                          </svg>
                        </button>
                      ) : (
                        ""
                      )}

                      <button
                        type="button"
                        id="next"
                        className="text-gray-400 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() =>
                          step ? router.push("/chapter2") : setStep(true)
                        }
                      >
                        <svg
                          fill="#D1D5DB"
                          className="hover:fill-[#000000]"
                          height="40px"
                          width="40px"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 471.2 471.2"
                          transform="matrix(1,0,0,-1,0,0)"
                        >
                          <g>
                            <g>
                              <path
                                d="M283.6,155.6c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l47.5,47.5H126.6c-7.5,0-13.5,6-13.5,13.5
			s6,13.5,13.5,13.5H312l-47.4,47.4c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l70.5-70.5c5.3-5.3,5.3-13.8,0-19.1
			L283.6,155.6z"
                              />
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalExpress;
