import React from "react";
import { useTranslation } from "react-i18next";

const AboutDirectorates = () => {
  const { t } = useTranslation();
  return (
  <div className="flex">
      <div className="min-h-screen w-full">
      {/* start of Background Image */}
      <div
        className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/1484776/pexels-photo-1484776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
          {t("aboutDirectorate-main-title")}
          </h1>
          <p className="text-xl mb-6">
          {t("aboutDirectorate-main-desc")}
          </p>
        </div>
      </div>
      {/* ends of Background Image */}
      {/* heading start here */}
      <div className="w-full px-4 md:px-0 md:w-[1200px] mx-auto my-24">
        <h1 className="text-4xl font-bold my-8 text-mstheme">
          {t("director-msg-title")}
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-mstheme via-mstheme to-transparent"></div>
      </div>
      {/* heading ends here */}
      {/* director container starts here */}
      <div className="w-full px-4 md:px-0 md:w-[1200px] mx-auto shadow-2xl flex my-12 rounded-lg flex-col md:flex-row justify-center items-center gap-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-12  bg-gray-100 rounded-lg shadow-lg">
          {/* Image section */}
          <div className="md:w-1/3">
            <img
              className="rounded-3xl shadow-lg object-cover"
              src="/assets/images/about/director_img.jpg"
              alt="Omara Khan Massoudi"
            />
          </div>

          {/* Text content section */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-mstheme text-4xl font-bold mb-2">
              {t("director-name")}
            </h1>
            <h2 className="text-mstheme text-xl mb-6">
              {t("director-name-sub-title")}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {t("director-msg-desc-1")}.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t("director-msg-desc-2")}
            </p>
          </div>
        </div>
      </div>
      {/* director container ends here */}
    </div>
    
  </div>
  );
};

export default AboutDirectorates;
