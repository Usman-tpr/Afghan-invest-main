import React from "react";
import Slider from "react-slick";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
// Import React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NotificationCard = () => {
    const { t } = useTranslation();

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // No left/right arrows
    };

    // Dummy notifications
    const notifications = [
        {
            id: 1,
            image: "assets/images/Home/c1.jpg",
            title: t("notification-title"),
            description: t("aboutMuseum-desc"),
        },
        {
            id: 2,
            image: "assets/images/Home/c1.jpg",
            title: t("notification-title"),
            description: t("aboutMuseum-desc"),
        },
        {
            id: 3,
            image: "assets/images/Home/c1.jpg",
            title: t("notification-title"),
            description: t("aboutMuseum-desc"),
        },
    ];

    return (
        <>
            <h1 className="mt-10 text-3xl md:text-4xl font-semibold text-center mx-44">
                {t("notification-header")}
            </h1>
            <div className="h-1 w-[10%] bg-mstheme mt-1 mb-10 mx-auto "></div>

            <div className="w-full md:w-[1250px] mx-auto py-10 pb-20">
                {/* React Slick Slider */}
                <Slider {...sliderSettings}>
                    {notifications.map((notification) => (
                        <div key={notification.id} className="flex flex-row items-center gap-10">
                            {/* Image & Icons Section */}
                            <div className="flex flex-col sm:flex-row justify-between space-x-5">
                                <div className="w-4/5">
                                    <img
                                        className="rounded-md w-full h-auto object-cover"
                                        src={notification.image}
                                        alt="Notification"
                                    />
                                    <div className="flex justify-start mt-4 gap-2">
                                        <div className="bg-blue-900 px-5 py-2 rounded-md">
                                            <FaFacebook size={30} className="text-white" />
                                        </div>
                                        <div className="bg-red-700 px-5 py-2 rounded-md">
                                            <FaYoutube size={30} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                                     {/* Text Section */}
                                     <div className="">
                                        <p className="pb-6 font-bold uppercase text-2xl md:text-4xl">
                                            {notification.title}
                                        </p>
                                        <p className="text-lg">{notification.description}</p>
                                    </div>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-10"></div>
        </>
    );
};

export default NotificationCard;
