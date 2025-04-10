import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineWatchLater } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const MuseumInfoBar = () => {
    const { t } = useTranslation();
  return (
    <>
    <div className='w-full md:w-[1150px] m-auto pl-8 md:pl-0 '>
        <div className="flex flex-col md:flex-row justify-between gap-10 py-20">
            <div className="">
                <p className='text-3xl md:text-4xl font-semibold w-full md:w-[700px]'>{t('musemuInfoBar.title')}</p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className='flex justify-center items-center gap-3 py-[2px] text-lg'> <IoTicketSharp/> <span>{t('musemuInfoBar.free-entry')}-</span><Link className='underline hover:no-underline transition-transform duration-300'>{t('musemuInfoBar.book-online')}</Link></p>
                <p className='flex justify-center items-center gap-3 py-[2px] text-lg'> <MdOutlineWatchLater/> {t('musemuInfoBar.open-today')}</p>
                <p className='flex justify-center items-center gap-3 py-[2px] text-lg'> <MdOutlineWatchLater/>  {t('musemuInfoBar.last-entry')}</p>
            </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>

    </div>
        </>
  )
}

export default MuseumInfoBar
