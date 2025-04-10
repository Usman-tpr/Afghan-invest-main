import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Introduction = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-wide font-bold text-mstheme">
                            {t("intro-title")}
                        </h1>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            {t("intro-desc")}
                        </p>
                        
                        <div className="flex justify-center lg:justify-start">
                            <Link 
                                to='/about/history' 
                                className="bg-mstheme hover:bg-white hover:text-mstheme hover:border-2 hover:border-mstheme text-base md:text-lg font-semibold px-6 py-3 rounded-lg text-white transition-all duration-300"
                            >
                                {t("eventSection-btn")}
                            </Link>
                        </div>
                    </div>
                    
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Kabul%27s_national_history_museum.jpg" 
                            alt="National Museum of Afghanistan"
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
            
            {/* Divider */}
            <div className="w-full max-w-7xl mx-auto mt-12 md:mt-20 h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
        </div>
    )
}

export default Introduction
