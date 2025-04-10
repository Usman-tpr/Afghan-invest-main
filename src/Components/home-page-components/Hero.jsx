import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";


const Hero = () => {
  const { t } = useTranslation();

  // Data for the hero section
  const heroData = [

    {
      image: "https://cdn.pixabay.com/photo/2020/04/23/14/45/museum-5082786_1280.jpg",
      title: t('hero.2nd-image-title'),
      description: t('hero.2nd-image-desc'),
      buttonText: t('hero.2nd-image-btn'),
    },
    {
      image: "https://cdn.pixabay.com/photo/2012/10/10/18/48/daughter-60805_1280.jpg",
      title: t('hero.3rd-image-title'),
      description: t('hero.3rd-image-desc'),
      buttonText: t('hero.3rd-image-btn'),
    },
    {
      image: "https://cdn.pixabay.com/photo/2012/10/26/03/11/children-63175_1280.jpg",
      title: t('hero.4th-image-title'),
      description: t('hero.4th-image-desc'),
      buttonText: t('hero.4th-image-btn'),
    },
    {
      image: "https://cdn.pixabay.com/photo/2012/11/28/11/06/girl-67694_960_720.jpg",
      title: t('hero.5th-image-title'),
      description: t('hero.5th-image-desc'),
      buttonText: t('hero.5th-image-btn'),
    },
    {
      image: "https://cdn.pixabay.com/photo/2012/10/10/15/49/woman-60639_1280.jpg",
      title: t('hero.6th-image-title'),
      description: t('hero.6th-image-desc'),
      buttonText: t('hero.6th-image-btn'),
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqbF6sCWakwCCttrtqyC_6fzxiqGzGjxLXA&s",
      title: t('hero.1st-image-title'),
      description: t('hero.1st-image-desc'),
      buttonText: t('hero.1st-image-btn'),
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/11/07/01/45/map-1030358_960_720.jpg",
      title: t('hero.7th-image-title'),
      description: t('hero.7th-image-desc'),
      buttonText: t('hero.7th-image-btn'),
    },
    {
      image: "https://media.istockphoto.com/id/1781763435/photo/the-road-on-the-bank-of-the-panj-river.jpg?s=1024x1024&w=is&k=20&c=1cmDe9S7POPlzNOZwxk2ODTAeICaaeaLMLSDlaivJCI=",
      title: t('hero.8th-image-title'),
      description: t('hero.8th-image-desc'),
      buttonText: t('hero.8th-image-btn'),
    }
  ];
  

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Smooth transition speed
    // fade: true,  // Enable fade transition
    cssEase: "ease-in-out", // Smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  

  return (
    <div className="min-h-screen overflow-hidden mt-12">
      <Slider {...settings}>
        {heroData.map((item, index) => (
          <div key={index} className="relative w-full">
            <div
              className="min-h-screen bg-cover bg-center w-full flex items-center justify-center" 
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover" }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

              {/* Responsive text content on top of the overlay */}
              <div className="relative z-10 text-center text-neutral-content px-4 md:px-6 max-w-full mx-auto flex flex-col items-center justify-center">
                <div className="max-w-lg md:max-w-2xl lg:max-w-4xl text-white">
                  <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg tracking-wide">
                    {item.title}
                  </h1>
                  <p className="mb-5 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    {item.description}
                  </p>
                  <button className="bg-mstheme hover:bg-mstheme_hover text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
