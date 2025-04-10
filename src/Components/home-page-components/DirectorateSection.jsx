import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const DirectorateSection = () => {
    const { t } = useTranslation();
  return (
    <>
      <div className='w-full md:w-[1150px] m-auto pl-8 md:pl-0 '>
        <div className="flex flex-col md:flex-row justify-between gap-10 py-10">
            <div className="">
                <img className='w-full p-4 md:w-[1100px] h-[600px] rounded-3xl' src='https://images.unsplash.com/photo-1566831453303-34a2c76ec34f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className='text-white rounded font-semibold text-2xl bg-mstheme px-20 py-3 ml-5 md:ml-0'>{t("directorateSection-msg")}</p>
                <div className='py-4 px-4 md:px-0 flex flex-col justify-center items-center ml-12'>
                <img className='w-full md:w-[250px] h-[200px] rounded' src="/assets/images/about/director_img.jpg" alt="" />
                <p className='text-xl font-semibold my-[2px] uppercase text-mstheme'>{t("directorateSection-name")}</p>
                </div>
                <p className='w-[600px] px-4 md:px-0'>
                <span className=''>{t("directorateSection-greeting")}</span> <br />
                <span>{t("directorateSection-desc")}</span>
                <span><Link to='/about/directorates' className='text-mstheme font-semibold'>{t("directorateSection-btn")}</Link></span>
                </p>
                
            </div>
        </div>
        <div className="w-full my-14 h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
    </div>
        </>
  )
}

export default DirectorateSection
