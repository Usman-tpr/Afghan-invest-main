import React from 'react'
import { Link } from 'react-router-dom'
import { MdWatchLater, MdEmail } from "react-icons/md";
import { FaUser, FaCamera, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { RiSmartphoneFill } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

const VisitorInfo = () => {
    const { t } = useTranslation();
  return (
    <div className='w-full md:w-[1150px] m-auto px-4 md:px-0'>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="">
        <img className='h-[400px] md:h-[720px]' src="https://images.pexels.com/photos/208636/pexels-photo-208636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className="">
        <div className="flex flex-col justify-center items-start">
            {/* <button className='bg-mstheme text-white uppercase font-semibold px-4 py-2 rounded hover:bg-mstheme_hover transition-all duration-300 my-4'><Link>{t("visitorInfo-btn")}</Link></button> */}
            <h1 className='text-black font-bold text-2xl md:text-4xl my-4'>{t("visitorInfo-main-title")}</h1>
            <p className='my-3'>{t("visitorInfo-closed")}</p>
            <p className='text-xl text-black font-semibold my-1'>{t("visitorInfo-open-hour")}</p>
            <p className='flex items-center gap-2 justify-center'><span className='text-mstheme'><MdWatchLater /></span><span>{t("visitorInfo-open-time")}</span></p>
        </div>
        <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-mstheme to-transparent my-2'></div>
        <div className="flex flex-col justify-center items-start">
            <h1 className='text-black font-semibold text-2xl my-3'>{t("visitorInfo-entry")}</h1>
            <p className='flex items-center gap-2 justify-center'><span className='text-mstheme'><FaUser /></span><span>{t("visitorInfo-adults")}</span></p>
            <p className='flex items-center gap-2 justify-center'><span className='text-mstheme'><FaUser /></span><span>{t("visitorInfo-kids")}</span></p>
            <p className='flex items-center gap-2 justify-center'><span className='text-mstheme'><FaUser /></span><span>{t("visitorInfo-foreign")}</span></p>
            <p className='flex items-center gap-2 justify-center'><span className='text-mstheme'><RiSmartphoneFill /></span><span>{t("visitorInfo-phone-photography")}</span></p>
            <p className='flex items-center gap-2 justify-center'><span className='text-mstheme'><FaCamera /></span><span>{t("visitorInfo-camera-photography")}</span></p>
        </div>
        <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-mstheme to-transparent my-2'></div>
        <div className="flex justify-center items-start flex-col">
            <h1 className='text-black font-semibold text-2xl my-3'>{t("visitorInfo-location-title")}</h1>
            <p className='flex items-center justify-center gap-2'><span className='text-mstheme'><FaMapMarkerAlt /></span> <span>{t("visitorInfo-location")}</span></p>
        </div>
        <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-mstheme to-transparent my-2'></div>
        <div className="flex justify-center items-start flex-col">
            <h1 className='text-black font-semibold text-2xl my-3'>{t("visitorInfo-phone-title")}</h1>
            <p className='flex items-center justify-center gap-2'><span className='text-mstheme'><FaPhoneAlt /></span><span>{t("visitorInfo-phone")}</span></p>
        </div>
        <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-mstheme to-transparent my-2'></div>
        <div className="flex justify-center items-start flex-col">
            <h1 className='text-black font-semibold text-2xl my-3'>{t("visitorInfo-email-title")}</h1>
            <p className='flex items-center justify-center gap-2'><span className='text-mstheme'><MdEmail /></span><span>{t("visitorInfo-email")}</span></p>
        </div>
        <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-mstheme to-transparent my-2'></div>
        <div className="flex justify-center items-start flex-col">
            <p className='flex items-center justify-center gap-2'><span className='text-mstheme'><HiInformationCircle /></span><span>{t("visitorInfo-inquiry")}</span></p>
        </div>
      </div>
      </div>
      <div className="w-full mt-14 h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-16"></div>
    </div>
  )
}

export default VisitorInfo
