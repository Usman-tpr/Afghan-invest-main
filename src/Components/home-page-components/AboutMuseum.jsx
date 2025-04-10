import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AboutMuseum = () => {
    const { t } = useTranslation();
  return (
    <>
          <h1 className="mt-10 text-3xl md:text-4xl font-semibold text-center">
          {t("aboutMuseum-title")}
      </h1>
      <div className="h-1 w-[10%] bg-mstheme mt-1 mb-10 mx-auto "></div>

      <div className='w-full md:w-[1350px] mx-auto flex justify-center'>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-5 py-10 pb-20">
            <div className="">
            <iframe className='rounded-md' width="300" height="315" src="https://www.youtube.com/embed/iyb2nCc2fHg?si=nL7ptMtDSfQcTWAT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="">
            <iframe className='rounded-md' width="300" height="315" src="https://www.youtube.com/embed/iyb2nCc2fHg?si=nL7ptMtDSfQcTWAT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="">
            <iframe className='rounded-md' width="300" height="315" src="https://www.youtube.com/embed/iyb2nCc2fHg?si=nL7ptMtDSfQcTWAT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="">
            <iframe className='rounded-md' width="300" height="315" src="https://www.youtube.com/embed/iyb2nCc2fHg?si=nL7ptMtDSfQcTWAT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            {/* <div className="flex flex-col items-start justify-center">
                <p className='pb-6 text-mstheme font-semibold uppercase text-lg'>{t("aboutMuseum-title")}</p>
                <p className='pb-6 font-bold uppercase text-4xl'>{t("aboutMuseum.main-title")}</p>
                <p className='py-[2px] text-lg'>{t("aboutMuseum-desc")}</p>
                <button className='mt-6 px-4 py-2 bg-mstheme text-white font-semibold flex items-center gap-2 rounded-full hover:bg-mstheme_hover transition ease-in-out  duration-500'>{t("aboutMuseum-btn")}<FaLongArrowAltRight/></button>
            </div> */}
        </div>

    </div>
    <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-10"></div>

        </>
  )
}

export default AboutMuseum
