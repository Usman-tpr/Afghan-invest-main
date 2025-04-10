import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons for navigation
import { stringConcat } from "../../helper-functions/formatText";

export default function Gallery() {
  const { t } = useTranslation();
  const sliderRef = React.useRef(null);

  const events = [
    {
      id: 2,
      title: t("eventSection.1st-image-title"),
      description:t("eventSection.1st-image-desc"),
      image:
        "assets/images/Home/c2.jpg",
    },
    {
      id: 3,
      title: t("eventSection.2nd-image-title"),
      description:t("eventSection.2nd-image-desc"),
      image:
      "assets/images/Home/c1.jpg",
    },
    {
      id: 4,
      title: t("eventSection.3rd-image-title"),
      description:t("eventSection.3rd-image-desc"),
      image:
      "assets/images/Home/c2.jpg",
    },
    {
      id: 5,
      title:t("eventSection.4th-image-title"),
      description:t("eventSection.4th-image-desc"),
      image:
      "assets/images/Home/c3.jpg",
    },
    {
      id: 6,
      title:t("eventSection.5th-image-title"),
      description:t("eventSection.5th-image-desc"),
      image:
      "assets/images/Home/e1.JPG",
    },
    {
      id: 7,
      title: t("eventSection.6th-image-title"),
      description:t("eventSection.6th-image-desc"),
      image:
      "assets/images/Home/e2.JPG",
    },
    {
      id: 8,
      title: t("eventSection.7th-image-title"),
      description:t("eventSection.7th-image-desc"),
      image:
      "assets/images/Home/e3.JPG",
    },
    {
      id: 9,
      title: t("eventSection.8th-image-title"),
      description:t("eventSection.8th-image-desc"),
      image:
        "assets/images/Home/m1.jpg",
    },
    {
      id: 10,
      title: t("eventSection.9th-image-title"),
      description:t("eventSection.9th-image-desc"),
      image:
        "assets/images/Home/m2.jpg",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for tablets and small desktops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // for mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false, // Disable default arrows to use custom ones
  };

  return (
    <div className="relative w-full md:w-[1350px] m-auto py-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        {t("gallery-home-heading")}
      </h1>
      <div className="h-1 w-[10%] bg-mstheme mt-1 mb-10 mx-auto "></div>


      <Slider ref={sliderRef} {...sliderSettings}>
        {events.map((event) => (
          <div key={event.id} className="px-4 my-4">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl border-b-2 border-mstheme">
              <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-md font-semibold leading-snug text-blue-gray-900">
                  {stringConcat(event.title, 22)}
                </h5>
                <p className="text-base font-light leading-relaxed text-inherit">
                  {stringConcat(event.description, 50)}

                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-mstheme text-white hover:bg-mstheme_hover"
                  type="button"
                >
                  {t("eventSection-btn")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-mstheme text-white p-3 rounded-full shadow-lg hover:bg-mstheme_hover"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Custom Next Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-mstheme text-white p-3 rounded-full shadow-lg hover:bg-mstheme_hover"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaArrowRight size={20} />
      </button>
      <div className="w-full mt-14 h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
    </div>
  );
}