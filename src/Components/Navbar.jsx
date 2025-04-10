import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaGlobe } from "react-icons/fa"; // Importing only the dropdown icon
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import mlogo from "../images/logo/mlogo.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { TbBrandYoutube } from "react-icons/tb";
import { WiDirectionRight } from "react-icons/wi";
import { IoMdHome } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineArticle } from "react-icons/md";
import { RiContactsBook2Fill, RiContactsBookLine } from "react-icons/ri";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const [navbarShow, setNavbarShow] = useState(false)
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "per",
      name: "دری ",
      dir: "rtl",
      country_code: "ir",
    },
    {
      code: "ps",
      name: "پښتو",
      dir: "rtl",
      country_code: "pk",
    },
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [topOffset, setTopOffset] = useState(47);


  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    if (cookies.get("i18next") === "ps" || cookies.get("i18next") === "per") {
      document.body.className = "persian-font";
    }
    else {
      document.body.className = "english-font";
    }
  }, [currentLanguage, t]);

  const toggleDropdown = () => {
    console.log("hover")
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (code) => {
    i18next.changeLanguage(code);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setTopOffset(0)
    }
    else {
      setTopOffset(47)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 h-[95px] bg-gray-100  sm:py-2">
        <div className="mx-2 sm:mx-20 flex justify-around  sm:justify-between items-center ">
          {/* Left Section: Phone and Email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center  space-x-0 sm:space-x-4 gap-3  text-[12px] sm:text-md mt-1 text-gray-700">
          <div className="flex items-center rtl:flex-row-reverse gap-1 sm:gap-2">
              <FaPhoneAlt className="flex-shrink-0 " />
              <span className="unicode-bidi[override] rtl:text-left ">{t("visitorInfo-phone")}</span>
            </div>
            <div className="flex items-center rtl:flex-row-reverse gap-1 mx-2 sm:gap-2 mt-1 sm:mt-0">
              <FaEnvelope className="flex-shrink-0 " />
              <span>{t("visitorInfo-email")}</span>
            </div>
          </div>
           <div className="flex">
            <input
             type="text"
              className="px-3 py-1 outline-none rounded-l w-80 border-mstheme border-2 hover:border-black placeholder:text-mstheme"
              placeholder="Search Here ..." 
            />
            <FaSearch className="relative text-2xl right-9 top-2 text-mstheme "/>
           </div>
          {/* Right Section: Social Icons */}
          <div className="flex text-gray-700">
            <div className="text-sm font-semibold px-4"
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
      </div>
      <div
        style={{ top: `${topOffset}px` }}
        className="fixed left-0 right-0 z-40 transition-all duration-1000"
      >

        <div className="navbar bg-mstheme text-white flex items-center justify-between px-4 ">
          {/* Logo Section */}
          <div className="navbar-start flex items-center w-full">
            <Link
              to="/"
              className="flex items-center text-lg font-bold hover:bg-mstheme_hover hover:text-white  rounded gap-1"
            >
              <img
                src={mlogo}
                alt="National Museum Afghanistan Logo"
                className="h-10 md:h-16 w-auto mr-2"
              />
              <p className="text-sm lg:text-[20.1px]  text-center font-medium lg:font-semibold">{t("header.main-heading")}</p>
            </Link>
          </div>

          {/* Menu Section */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-5 ml-24">
              {/* <li>
                <Link
                  to="/"
                  className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
                >
                   <IoMdHome />  {t("header.first-menu")}
                </Link>
              </li> */}
              <li className="dropdown dropdown-hover">
                <label
                  tabIndex={0}
                  className="text-[16px] font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
                >
                <TbArrowRoundaboutRight />  {t("header.second-menu")} <FaChevronDown className="ml-1" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content p-2 shadow bg-mstheme rounded-box w-40 mt-1 z-20"
                >
                  <li>
                    <Link to='/about/history' className="hover:bg-black hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                    <WiDirectionRight />  {t("header.second-sub-menu-1")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/about/directorates' className="hover:bg-black hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                    <WiDirectionRight />   {t("header.second-sub-menu-2")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/about/technical-staff' className="hover:bg-black hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                    <WiDirectionRight />  {t("header.second-sub-menu-3")}
                    </Link>
                  </li>
                  <li>
                    <Link to='/about/regulations&policies' className="hover:bg-black hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                    <WiDirectionRight />   {t("header.second-sub-menu-4")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-hover">
                <Link
                  to='exhibitions'
                  className="text-[16px] font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
                >
                <GrServices />  {t("header.third-menu")}
                </Link>

              </li>
              <li>
                <Link
                  to="/events"
                  className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
                >
              <GrProjects />    {t("header.fourth-menu")}
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
                >
                 <MdOutlineArticle /> {t("header.fifth-menu")}
                </Link>
              </li>
              <li className="dropdown dropdown-hover">
                <label
                  tabIndex={0}
                  className="text-[16px] font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
                >
                <GoFileMedia />  {t("header.sixth-menu")} <FaChevronDown className="ml-1" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content p-2 shadow bg-mstheme rounded-box w-40 mt-1 z-20"
                >
                  <li>
                    <Link to='/gallery/photos' className="hover:bg-black hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                 <WiDirectionRight />     {t("header.sixth-sub-menu-1")}
                    </Link>
                  </li>
                  <li>
                    <Link to='gallery/videos' className="hover:bg-black hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                 <WiDirectionRight />     {t("header.sixth-sub-menu-2")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
                >
                <RiContactsBook2Fill />  {t("header.seventh-menu")}
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile menu */}

        {
          navbarShow &&   <div className="navbar-center flex flex-col lg:hidden ">
          <ul className="absolute bg-mstheme top-14 menu  space-x-5 ml-24">
            <li>
              <Link
                to="/"
                className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
              >
                {t("header.first-menu")}
              </Link>
            </li>
            <li className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="text-[16px] font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
              >
                {t("header.second-menu")} <FaChevronDown className="ml-1" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content p-2 shadow bg-mstheme rounded-box w-40 mt-1 z-20"
              >
                <li>
                  <Link to='/about/history' className="hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                    {t("header.second-sub-menu-1")}
                  </Link>
                </li>
                <li>
                  <Link to='/about/directorates' className="hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                    {t("header.second-sub-menu-2")}
                  </Link>
                </li>
                <li>
                  <Link to='/about/technical-staff' className="hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                    {t("header.second-sub-menu-3")}
                  </Link>
                </li>
                <li>
                  <Link to='/about/regulations&policies' className="hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                    {t("header.second-sub-menu-4")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover">
              <Link
                to='exhibitions'
                className="text-[16px] font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
              >
                {t("header.third-menu")}
              </Link>

            </li>
            <li>
              <Link
                to="/events"
                className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
              >
                {t("header.fourth-menu")}
              </Link>
            </li>
            <li>
              <Link
                to="/articles"
                className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
              >
                {t("header.fifth-menu")}
              </Link>
            </li>
            <li className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="text-[16px] font-medium cursor-pointer flex items-center hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
              >
                {t("header.sixth-menu")} <FaChevronDown className="ml-1" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content p-2 shadow bg-mstheme rounded-box w-40 mt-1 z-20"
              >
                <li>
                  <Link to='/gallery/photos' className="hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                    {t("header.sixth-sub-menu-1")}
                  </Link>
                </li>
                <li>
                  <Link to='gallery/videos' className="hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none">
                    {t("header.sixth-sub-menu-2")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-[16px] font-medium hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
              >
                {t("header.seventh-menu")}
              </Link>
            </li>
          </ul>
        </div>
        }


          {/* Language Dropdown Section */}
          <div className="navbar-end flex items-center gap-2 relative sm:me-14" >
            <div
              className="navbar-end flex items-center gap-2 relative"
              title="Click to change language"
              onMouseEnter={(() => setDropdownOpen(true))} // Show dropdown on hover
            >
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="text-[16px] cursor-pointer font-medium flex items-center hover:bg-mstheme_hover hover:text-white px-2  rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
                >
                  <FaGlobe className="mr-1" size={25} />
                </label>
                {isDropdownOpen && (
                  <ul
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="dropdown-content p-2 shadow-lg bg-mstheme rounded-box w-40 mt-1 z-20 sticky -right-24 text-end"
                  >
                    {languages.map((language) => (
                      <li key={language.code}>
                        <button
                          className="w-full text-left px-2  hover:bg-mstheme_hover hover:text-white rounded focus:bg-mstheme_hover focus:text-white focus:outline-none"
                          onClick={() => handleLanguageChange(language.code)}
                        >
                          {language.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex sm:hidden transition-all duration-700" onClick={(() => setNavbarShow(!navbarShow))}>
              {
                navbarShow ? <RxCross2 /> : <GiHamburgerMenu />
              }
            </div>

          </div>
        </div>
      </div>


      <a href="https://wa.me/+93202520329" title="Click to chat" target="_blank" className="fixed right-5 bottom-20 md:bottom-28 z-50 rounded-full">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="Whatsapp icon" className=" w-11 md:w-16" />
      </a>


    </>
  );
};

export default Navbar;
