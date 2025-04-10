import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import mlogo from "../images/logo/mlogo.png";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { TbBrandYoutube } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll effect
        });
    };

    return (
        <>
            <div className="px-10 py-7 flex flex-col sm:flex-row justify-between gap-5 mt-7 bg-mstheme text-white">
                <div className="space-y-7 w-full md:w-2/4">
                    <div className="navbar-start flex items-center w-full">
                        <Link
                            to="/"
                            className="flex items-center text-lg font-bold  rounded"
                        >
                            <img
                                src={mlogo}
                                alt="National Museum Afghanistan Logo"
                                className="h-16 md:h-20 w-auto mr-2"
                            />
                            <p className="text-[20.1px] text-center font-bold ">{t("header.main-heading")}  </p>
                        </Link>
                    </div>
                    <p className="">{t("footer.about")}... <Link to='/about/history' className="bg-white font-semibold text-mstheme px-2  rounded hover:bg-mstheme hover:text-white">{t("hero.1st-image-btn")}</Link></p>
                     <div className="flex text-white items-center">
                                <div className="text-lg font-semibold px-4 bg-white  text-mstheme"
                                  dangerouslySetInnerHTML={{ __html: t("top-header.follow") }}
                                /> 
                                <a
                                  href="https://www.facebook.com/nationalmuseum.af"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xl mx-3   rounded"
                                >
                                  <TbBrandYoutube className="hover:scale-110  transition-transform duration-300" />
                                </a>
                                <a
                                  href="https://www.facebook.com/nationalmuseum.af"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xl mx-3   rounded"
                                >
                                  <FiFacebook className="hover:scale-110  transition-transform duration-300" />
                                </a>
                                <a
                                  href="https://twitter.com/nationalmuseum.afg"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xl mx-3   rounded"
                                >
                                  <BsTwitterX className="hover:scale-110  transition-transform duration-300" />
                                </a>
                                <a
                                  href="https://www.instagram.com/nationalmuseum.afg/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xl mx-3   rounded"
                                >
                                  <FiInstagram className="hover:scale-110  transition-transform duration-300" />
                                </a>
                                <a
                                  href="https://linkedin.com/nationalmuseum.afg"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xl mx-3   rounded"
                                >
                                  <FiLinkedin className="hover:scale-110  transition-transform duration-300" />
                                </a>
                              </div>
                </div> 
                <div className="w-full md:w-1/5">
                    <h1 className="border-b-2 border-gray-700 text-xl font-bold bg-white rounded text-mstheme px-6  w-36">{t("menus")}</h1>
                    <ul className="flex flex-col gap-2 text-center lg:text-start">
                        <li className="mt-5">
                            <Link
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/"
                            >
                                {t("menus1")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/about"
                            >
                                {t("menus2")}
                            </Link>
                        </li>
                        <li>
                            <Link   
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/products"
                            >
                                {t("menus3")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/gallery"
                            >
                                {t("menus4")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/contact"
                            >
                                {t("menus5")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/contact"
                            >
                                {t("menus6")}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/5">
                    <h1 className="border-b-2 border-gray-700 text-xl font-bold bg-white text-mstheme rounded px-2 w-36">{t("footer.links")}</h1>
                    <ul className="flex flex-col gap-2 text-center lg:text-start">
                        <li className="mt-5">
                            <Link
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/"
                            >
                                {t("quick1")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/about"
                            >
                                {t("quick2")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/products"
                            >
                                {t("quick3")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/gallery"
                            >
                                {t("quick4")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-lg font-medium  hover:text-yellow-300  px-2  rounded "
                                to="/contact"
                            >
                                {t("quick5")}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="border-b-2 border-gray-700 text-xl font-bold bg-white text-mstheme px-2 rounded w-36">    {t("header.seventh-menu")}</h1>
                    <div className="flex flex-col items-center gap-1 lg:items-start mt-6 lg:mt-0">
                        <p className="flex items-start justify-center gap-2 mt-5">
                            <FaMapMarkerAlt className="text-white mt-2" />
                            <span>{t("visitorInfo-location")}</span>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <FaPhoneAlt className="text-white" />
                            <span>{t("visitorInfo-phone")}</span>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <MdEmail className="text-white" />
                            <span>{t("visitorInfo-email")}</span>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <MdEmail className="text-white" />
                            <span>info@nationalmuseum.af</span>
                        </p>
                    </div>
                </div>
            </div>
            <footer className="bg-mstheme text-white pb-7">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                    {/* Main Links Section */}
                    <div className="flex flex-col items-center lg:items-start">
                        {/* <Link to="/" className="text-3xl font-bold mb-4">
                            {t("footer.main-title")}
                        </Link> */}

                    </div>

                    {/* Contact Information */}

                </div>

                {/* Social Links */}
                {/* <div className="flex justify-center mt-6">
                    <a
                        href="https://www.facebook.com/nationalmuseum.af"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl mx-3 hover:bg-mstheme_hover px-2  rounded"
                    >
                        <FiFacebook className="hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                        href="https://twitter.com/nationalmuseum.afg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl mx-3 hover:bg-mstheme_hover px-2  rounded"
                    >
                        <FiTwitter className="hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                        href="https://www.instagram.com/nationalmuseum.afg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl mx-3 hover:bg-mstheme_hover px-2  rounded"
                    >
                        <FiInstagram className="hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                        href="https://linkedin.com/nationalmuseum.afg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl mx-3 hover:bg-mstheme_hover px-2  rounded"
                    >
                        <FiLinkedin className="hover:scale-110 transition-transform duration-300" />
                    </a>
                </div> */}

                {/* Footer Bottom Section */}
                <div className="text-center mt-6 flex flex-col md:flex-row justify-center lg:space-x-28" >
                    <p className="text-sm md:text-md tracking-wider">&copy; {t("footer.desc")} <span className="text-lg  font-semibold text-yellow-200"> {t("footer.company-developer")}</span> {t("footer.company-name")}</p>
                    {/* <a href="https://ariadelta.af/" target="_blank" rel="noopener noreferrer" className="text-md">
                        <span className="text-yellow-400 font-medium">{t("footer.company-developer")}</span>: {t("footer.company-name")} </a> */}
                </div>

                {/* Scroll to Top Button */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        
                        className="fixed bottom-8 right-6 bg-mstheme hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
                        title={t("Back to Top")}
                    >
                        <FaArrowUp className="text-md md:text-2xl" />
                    </button>
                )}
            </footer>
        </>
    );
};

export default Footer;
