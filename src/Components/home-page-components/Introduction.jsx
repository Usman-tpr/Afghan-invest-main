import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Introduction = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='flex justify-center  space-x-10 mx-36 my-5 mt-20'>
                <div className='w-[50%]'>
                    <h1 className='text-2xl tracking-wide font-bold text-mstheme'>{t("intro-title")}</h1>
                     <p className='mt-5'>{t("intro-desc")}</p>
                     <div className='flex justify-center items-center mt-4'>
                        <Link to='/about/history' className='bg-mstheme hover:bg-white hover:text-mstheme hover:border-2 hover:border-mstheme text-xl font-semibold px-5 py-2 rounded text-white '>{t("eventSection-btn")}</Link>
                     </div>
                </div>
                <div className='w-[50%] mt-10'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Kabul%27s_national_history_museum.jpg" className=' h-[60vh] w-[100%]' alt="" />
                </div>
            </div>
            <div className="w-full mt-20  h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>

        </>
    )
}

export default Introduction